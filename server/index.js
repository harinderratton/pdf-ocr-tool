const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs-extra");
const { v4: uuidv4 } = require("uuid");
const { PDFDocument } = require("pdf-lib");

const pdfParse = require("pdf-parse");
const pdfImgConvert = require("pdf-img-convert");
const { Document, Packer, Paragraph } = require("docx");
const Tesseract = require("tesseract.js");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Create uploads directory
const uploadsDir = path.join(__dirname, "uploads");
const tempDir = path.join(__dirname, "temp");
fs.ensureDirSync(uploadsDir);
fs.ensureDirSync(tempDir);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${uuidv4()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed!"), false);
    }
  },
});

// Initialize Tesseract worker
let worker = null;

const initializeWorker = async () => {
  if (!worker) {
    worker = await Tesseract.createWorker();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
  }
  return worker;
};

// Clean up temp files
const cleanupTempFiles = async (filePath) => {
  try {
    await fs.remove(filePath);
  } catch (error) {
    console.error("Error cleaning up temp file:", error);
  }
};

// Extract text from PDF using pdf-parse (no GraphicsMagick required)
const extractTextFromPDF = async (pdfPath) => {
  try {
    console.log("Attempting to extract text from PDF...");
    const dataBuffer = await fs.readFile(pdfPath);
    console.log("PDF file read successfully, size:", dataBuffer.length);

    const data = await pdfParse(dataBuffer);
    console.log(
      "PDF parsed successfully, text length:",
      data.text ? data.text.length : 0
    );

    if (data.text && data.text.trim().length > 0) {
      console.log("Text extraction successful");
      return data.text;
    } else {
      console.log("No text found in PDF");
      return null;
    }
  } catch (error) {
    console.error("Error extracting text from PDF:", error.message);
    console.error("Error details:", error);
    return null;
  }
};

// Convert PDF to images using pdf-img-convert (no GraphicsMagick required)
const convertPDFToImages = async (pdfPath, pageNumbers = null) => {
  try {
    console.log("Attempting to convert PDF to images using pdf-img-convert...");
    const dataBuffer = await fs.readFile(pdfPath);

    const outputImages = await pdfImgConvert.convert(dataBuffer, {
      width: 2480,
      height: 3508,
      page_numbers: pageNumbers, // If null, converts all pages
      base64: false,
    });

    console.log(
      "PDF converted to images successfully, count:",
      outputImages.length
    );
    return outputImages;
  } catch (error) {
    console.error("Error converting PDF to images:", error.message);
    return null;
  }
};

// Convert PDF page to image using pdf-img-convert (no GraphicsMagick required)
const convertPageToImage = async (pdfPath, pageNumber, outputDir) => {
  try {
    console.log(`Converting page ${pageNumber} to image...`);
    
    // Convert specific page using pdf-img-convert
    const images = await convertPDFToImages(pdfPath, [pageNumber]);
    
    if (images && images.length > 0) {
      // Save the image to the output directory
      const imagePath = path.join(outputDir, `page-${pageNumber}.png`);
      await fs.writeFile(imagePath, images[0]);
      console.log(`Page ${pageNumber} converted successfully: ${imagePath}`);
      return imagePath;
    } else {
      throw new Error(`No image generated for page ${pageNumber}`);
    }
  } catch (error) {
    console.error(`Error converting page ${pageNumber} to image:`, error);
    return {
      fallback: true,
      message: `Page ${pageNumber} could not be converted to image. Please ensure the PDF contains readable content.`,
    };
  }
};

// Process single page with OCR
const processPageWithOCR = async (imagePath, pageNumber) => {
  try {
    // Check if this is a fallback result
    if (imagePath.fallback) {
      return {
        pageNumber,
        text: imagePath.message,
        success: false,
        method: "fallback",
      };
    }

    const worker = await initializeWorker();
    const {
      data: { text },
    } = await worker.recognize(imagePath);

    // Clean up image file
    await cleanupTempFiles(imagePath);

    return {
      pageNumber,
      text: text.trim(),
      success: true,
      method: "ocr",
    };
  } catch (error) {
    console.error(`Error processing page ${pageNumber}:`, error);
    if (imagePath && typeof imagePath === "string") {
      await cleanupTempFiles(imagePath);
    }
    return {
      pageNumber,
      text: "",
      success: false,
      error: error.message,
    };
  }
};

// Process PDF in batches
const processPDFInBatches = async (pdfPath, batchSize = 5) => {
  try {
    const pdfBytes = await fs.readFile(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pageCount = pdfDoc.getPageCount();

    if (pageCount > 500) {
      throw new Error("PDF must have 500 pages or less");
    }

    const results = [];
    const tempDir = path.join(__dirname, "temp", uuidv4());
    await fs.ensureDir(tempDir);

    // Process pages in batches
    for (let i = 0; i < pageCount; i += batchSize) {
      const batch = [];
      const batchEnd = Math.min(i + batchSize, pageCount);

      for (let j = i; j < batchEnd; j++) {
        const pageNumber = j + 1;
        batch.push(convertPageToImage(pdfPath, pageNumber, tempDir));
      }

      // Wait for all images in batch to be converted
      const imagePaths = await Promise.all(batch);

      // Process OCR for all images in batch
      const ocrPromises = imagePaths.map((imagePath, index) => {
        const pageNumber = i + index + 1;
        return processPageWithOCR(imagePath, pageNumber);
      });

      const batchResults = await Promise.all(ocrPromises);
      results.push(...batchResults);
    }

    // Clean up temp directory
    await fs.remove(tempDir);

    return {
      totalPages: pageCount,
      results: results.sort((a, b) => a.pageNumber - b.pageNumber),
    };
  } catch (error) {
    console.error("Error processing PDF:", error);
    throw error;
  }
};

// Routes
app.post("/api/upload", upload.single("pdf"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No PDF file uploaded" });
    }

    const pdfPath = req.file.path;
    console.log(`Processing PDF: ${req.file.originalname}`);

    // Try to extract text directly from PDF first
    const extractedText = await extractTextFromPDF(pdfPath);

    if (extractedText && extractedText.trim().length > 0) {
      // Text extraction successful, return the text
      res.json({
        success: true,
        filename: req.file.originalname,
        totalPages: 1,
        pages: [
          {
            pageNumber: 1,
            text: extractedText.trim(),
            success: true,
            method: "text_extraction",
          },
        ],
      });
    } else {
      // Text extraction failed, try OCR processing
      console.log("Text extraction failed, trying OCR processing...");

      try {
        // Use the batch processing function to handle all pages
        const result = await processPDFInBatches(pdfPath);

        res.json({
          success: true,
          filename: req.file.originalname,
          totalPages: result.totalPages,
          pages: result.results,
        });
      } catch (ocrError) {
        console.error("OCR processing failed:", ocrError.message);
        res.json({
          success: true,
          filename: req.file.originalname,
          totalPages: 1,
          pages: [
            {
              pageNumber: 1,
              text: "OCR processing failed. Please ensure the PDF contains clear, readable text or images. If the problem persists, please contact support.",
              success: false,
              method: "ocr_failed",
            },
          ],
        });
      }
    }

    // Clean up uploaded file
    await cleanupTempFiles(pdfPath);
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({
      error: error.message || "Error processing PDF",
    });
  }
});

// Download as TXT
app.post("/api/download/txt", async (req, res) => {
  try {
    const { pages, filename } = req.body;

    if (!pages || !Array.isArray(pages)) {
      return res.status(400).json({ error: "Invalid pages data" });
    }

    let textContent = `PDF OCR Results - ${filename}\n`;
    textContent += `Generated on: ${new Date().toLocaleString()}\n`;
    textContent += `Total Pages: ${pages.length}\n\n`;

    pages.forEach((page) => {
      textContent += `=== Page ${page.pageNumber} ===\n`;
      textContent += page.text + "\n\n";
    });

    res.setHeader("Content-Type", "text/plain");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${filename.replace(".pdf", "")}_ocr.txt"`
    );
    res.send(textContent);
  } catch (error) {
    console.error("Download TXT error:", error);
    res.status(500).json({ error: "Error generating TXT file" });
  }
});

// Download as DOCX
app.post("/api/download/docx", async (req, res) => {
  try {
    const { pages, filename } = req.body;

    if (!pages || !Array.isArray(pages)) {
      return res.status(400).json({ error: "Invalid pages data" });
    }

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              text: `PDF OCR Results - ${filename}`,
              heading: "Heading1",
            }),
            new Paragraph({
              text: `Generated on: ${new Date().toLocaleString()}`,
              heading: "Heading2",
            }),
            new Paragraph({
              text: `Total Pages: ${pages.length}`,
              heading: "Heading2",
            }),
            new Paragraph({ text: "" }), // Empty line
            ...pages.flatMap((page) => [
              new Paragraph({
                text: `Page ${page.pageNumber}`,
                heading: "Heading3",
              }),
              new Paragraph({ text: page.text }),
              new Paragraph({ text: "" }), // Empty line between pages
            ]),
          ],
        },
      ],
    });

    const buffer = await Packer.toBuffer(doc);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${filename.replace(".pdf", "")}_ocr.docx"`
    );
    res.send(buffer);
  } catch (error) {
    console.error("Download DOCX error:", error);
    res.status(500).json({ error: "Error generating DOCX file" });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "PDF OCR Server is running" });
});

// Test endpoint to check GraphicsMagick
app.get("/api/test-gm", async (req, res) => {
  try {
    const { exec } = require("child_process");
    const util = require("util");
    const execAsync = util.promisify(exec);

    const { stdout } = await execAsync("which gm");
    const gmPath = stdout.trim();

    if (gmPath) {
      const { stdout: version } = await execAsync("gm version");
      res.json({
        status: "OK",
        message: "GraphicsMagick is available",
        path: gmPath,
        version: version.trim(),
        timestamp: new Date().toISOString(),
      });
    } else {
      res.json({
        status: "ERROR",
        message: "GraphicsMagick not found",
        timestamp: new Date().toISOString(),
      });
    }
  } catch (error) {
    res.json({
      status: "ERROR",
      message: "Error checking GraphicsMagick",
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});

// Test endpoint for PDF processing
app.get("/api/test-pdf", (req, res) => {
  res.json({
    status: "OK",
    message: "PDF processing server is running",
    features: {
      text_extraction: "Available (pdf-parse)",
      ocr_processing: "Limited (requires GraphicsMagick)",
      file_upload: "Available",
      download: "Available",
    },
    timestamp: new Date().toISOString(),
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error("Server error:", error);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`PDF OCR Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

// Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  if (worker) {
    await worker.terminate();
  }
  process.exit(0);
});

process.on("SIGINT", async () => {
  console.log("SIGINT received, shutting down gracefully");
  if (worker) {
    await worker.terminate();
  }
  process.exit(0);
});
