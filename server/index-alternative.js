const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs-extra");
const { v4: uuidv4 } = require("uuid");
const { PDFDocument } = require("pdf-lib");
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

// Simple text extraction from PDF (for PDFs with selectable text)
const extractTextFromPDF = async (pdfPath) => {
  try {
    // This is a simplified approach - in a real implementation,
    // you would use a library like pdf-parse or pdf2json
    return "Text extraction from PDF is currently limited. Please use a PDF with selectable text or contact support for OCR processing.";
  } catch (error) {
    console.error("Error extracting text from PDF:", error);
    throw new Error("Failed to extract text from PDF.");
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

    // For now, return a message about the limitation
    const result = await extractTextFromPDF(pdfPath);

    // Clean up uploaded file
    await cleanupTempFiles(pdfPath);

    res.json({
      success: true,
      filename: req.file.originalname,
      totalPages: 1,
      pages: [
        {
          pageNumber: 1,
          text: result,
          success: true,
          method: "text_extraction",
        },
      ],
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({
      error: error.message || "Error processing PDF",
    });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "PDF OCR Server is running (Limited Mode)",
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error("Server error:", error);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`PDF OCR Server running on port ${PORT} (Limited Mode)`);
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
