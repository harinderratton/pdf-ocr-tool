import React from "react";

const HowItWorks = ({ onNavigation }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the magic behind our advanced OCR technology
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            The OCR Process
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-8 p-6 bg-gray-50 rounded-lg">
              <div className="lg:w-1/3">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto lg:mx-0">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center lg:text-left">
                  Upload Your PDF
                </h3>
                <p className="text-gray-600 leading-relaxed text-center lg:text-left">
                  Simply drag and drop your PDF file onto our intuitive
                  interface. We support files up to 50MB and 200 pages. The file
                  is securely uploaded and prepared for processing.
                </p>
                <div className="mt-4 text-sm text-gray-500 text-center lg:text-left">
                  <p>
                    <strong>Supported formats:</strong> PDF only
                  </p>
                  <p>
                    <strong>File size limit:</strong> 50MB maximum
                  </p>
                </div>
              </div>
              <div className="lg:w-2/3 flex justify-center">
                <div className="bg-gray-200 rounded-lg p-8 text-6xl">📁</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 p-6 bg-gray-50 rounded-lg">
              <div className="lg:w-1/3">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto lg:mx-0">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center lg:text-left">
                  PDF to Image Conversion
                </h3>
                <p className="text-gray-600 leading-relaxed text-center lg:text-left">
                  Using GraphicsMagick and Ghostscript, we convert each PDF page
                  into high-resolution images (300 DPI). This ensures optimal
                  OCR accuracy by creating clear, detailed images for text
                  recognition.
                </p>
                <div className="mt-4 text-sm text-gray-500 text-center lg:text-left">
                  <p>
                    <strong>Resolution:</strong> 300 DPI for best results
                  </p>
                  <p>
                    <strong>Format:</strong> PNG images
                  </p>
                </div>
              </div>
              <div className="lg:w-2/3 flex justify-center">
                <div className="bg-gray-200 rounded-lg p-8 text-6xl">🔄</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-8 p-6 bg-gray-50 rounded-lg">
              <div className="lg:w-1/3">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto lg:mx-0">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center lg:text-left">
                  Image Preprocessing
                </h3>
                <p className="text-gray-600 leading-relaxed text-center lg:text-left">
                  Advanced image enhancement techniques are applied to improve
                  OCR accuracy. This includes noise reduction, contrast
                  enhancement, and layout analysis to prepare images for optimal
                  text recognition.
                </p>
                <div className="mt-4 text-sm text-gray-500 text-center lg:text-left">
                  <p>
                    <strong>Enhancements:</strong> Noise reduction, contrast
                    adjustment
                  </p>
                  <p>
                    <strong>Analysis:</strong> Layout and structure detection
                  </p>
                </div>
              </div>
              <div className="lg:w-2/3 flex justify-center">
                <div className="bg-gray-200 rounded-lg p-8 text-6xl">🎨</div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 p-6 bg-gray-50 rounded-lg">
              <div className="lg:w-1/3">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto lg:mx-0">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center lg:text-left">
                  OCR Text Recognition
                </h3>
                <p className="text-gray-600 leading-relaxed text-center lg:text-left">
                  Powered by Tesseract.js, our advanced OCR engine analyzes each
                  image pixel by pixel to identify and extract text. The system
                  recognizes characters, words, and maintains text formatting
                  and layout.
                </p>
                <div className="mt-4 text-sm text-gray-500 text-center lg:text-left">
                  <p>
                    <strong>Engine:</strong> Tesseract.js with English language
                    support
                  </p>
                  <p>
                    <strong>Accuracy:</strong> 95%+ on clear documents
                  </p>
                </div>
              </div>
              <div className="lg:w-2/3 flex justify-center">
                <div className="bg-gray-200 rounded-lg p-8 text-6xl">🤖</div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col lg:flex-row items-center gap-8 p-6 bg-gray-50 rounded-lg">
              <div className="lg:w-1/3">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto lg:mx-0">
                  5
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center lg:text-left">
                  Batch Processing
                </h3>
                <p className="text-gray-600 leading-relaxed text-center lg:text-left">
                  Large PDFs are processed in batches of 5 pages simultaneously
                  to optimize performance and memory usage. This ensures fast
                  processing while maintaining system stability.
                </p>
                <div className="mt-4 text-sm text-gray-500 text-center lg:text-left">
                  <p>
                    <strong>Batch size:</strong> 5 pages at a time
                  </p>
                  <p>
                    <strong>Memory optimization:</strong> Intelligent resource
                    management
                  </p>
                </div>
              </div>
              <div className="lg:w-2/3 flex justify-center">
                <div className="bg-gray-200 rounded-lg p-8 text-6xl">⚡</div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 p-6 bg-gray-50 rounded-lg">
              <div className="lg:w-1/3">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto lg:mx-0">
                  6
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center lg:text-left">
                  Text Extraction & Formatting
                </h3>
                <p className="text-gray-600 leading-relaxed text-center lg:text-left">
                  Extracted text is cleaned, formatted, and organized by page.
                  The system maintains paragraph structure, line breaks, and
                  text hierarchy to preserve document formatting.
                </p>
                <div className="mt-4 text-sm text-gray-500 text-center lg:text-left">
                  <p>
                    <strong>Formatting:</strong> Preserves original layout
                  </p>
                  <p>
                    <strong>Organization:</strong> Page-by-page structure
                  </p>
                </div>
              </div>
              <div className="lg:w-2/3 flex justify-center">
                <div className="bg-gray-200 rounded-lg p-8 text-6xl">📄</div>
              </div>
            </div>

            {/* Step 7 */}
            <div className="flex flex-col lg:flex-row items-center gap-8 p-6 bg-gray-50 rounded-lg">
              <div className="lg:w-1/3">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto lg:mx-0">
                  7
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center lg:text-left">
                  Results & Download
                </h3>
                <p className="text-gray-600 leading-relaxed text-center lg:text-left">
                  View extracted text page by page with success indicators.
                  Download in TXT or DOCX format, or copy all text to clipboard.
                  Files are automatically cleaned up for privacy.
                </p>
                <div className="mt-4 text-sm text-gray-500 text-center lg:text-left">
                  <p>
                    <strong>Formats:</strong> TXT, DOCX
                  </p>
                  <p>
                    <strong>Privacy:</strong> Automatic file cleanup
                  </p>
                </div>
              </div>
              <div className="lg:w-2/3 flex justify-center">
                <div className="bg-gray-200 rounded-lg p-8 text-6xl">✅</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Tesseract.js
              </h3>
              <p className="text-gray-600 text-sm">
                Advanced OCR engine that provides high-accuracy text recognition
                with support for multiple languages and complex layouts.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                GraphicsMagick
              </h3>
              <p className="text-gray-600 text-sm">
                Powerful image processing library for converting PDF pages to
                high-quality images with precise control over resolution and
                format.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Ghostscript
              </h3>
              <p className="text-gray-600 text-sm">
                PDF processing engine that handles complex PDF structures and
                ensures accurate conversion from PDF to image format.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Node.js</h3>
              <p className="text-gray-600 text-sm">
                High-performance server runtime that enables fast, scalable
                processing with efficient memory management and concurrent
                operations.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Image Processing
              </h3>
              <p className="text-gray-600 text-sm">
                Advanced algorithms for noise reduction, contrast enhancement,
                and layout analysis to improve OCR accuracy.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Security</h3>
              <p className="text-gray-600 text-sm">
                In-memory processing with automatic file cleanup ensures your
                documents remain private and secure throughout the process.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Processing Flow
          </h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold">
              PDF Upload
            </div>
            <div className="text-2xl text-blue-600">↓</div>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold">
              Page Conversion
            </div>
            <div className="text-2xl text-blue-600">↓</div>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold">
              Image Enhancement
            </div>
            <div className="text-2xl text-blue-600">↓</div>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold">
              OCR Processing
            </div>
            <div className="text-2xl text-blue-600">↓</div>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold">
              Text Extraction
            </div>
            <div className="text-2xl text-blue-600">↓</div>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold">
              Format & Download
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Experience the Magic?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            See our advanced OCR technology in action with your own documents
          </p>
          <button
            onClick={() => onNavigation("home")}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            Try It Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
