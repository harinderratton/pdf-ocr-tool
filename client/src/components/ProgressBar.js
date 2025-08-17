import React, { useState, useEffect } from "react";

const ProgressBar = ({ progress, filename }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  // Rotating messages to keep users engaged
  const processingMessages = [
    "Converting PDF pages to high-resolution images...",
    "Analyzing document structure and layout...",
    "Running advanced OCR algorithms...",
    "Processing text recognition patterns...",
    "Extracting and validating text content...",
    "Optimizing text formatting and layout...",
    "Performing quality checks on extracted text...",
    "Preparing final results for download...",
    "Almost done! Finalizing your document...",
    "Processing in batches for optimal performance...",
    "Using cutting-edge AI technology for accuracy...",
    "Ensuring the highest quality text extraction...",
    "Your document is being processed securely...",
    "Applying advanced image preprocessing...",
    "Running multiple OCR passes for accuracy..."
  ];

  // Change message every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % processingMessages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [processingMessages.length]);

  // Get current message based on progress
  const getCurrentMessage = () => {
    if (progress < 20) {
      return "Initializing PDF processing...";
    } else if (progress < 40) {
      return processingMessages[currentMessageIndex];
    } else if (progress < 70) {
      return "Running OCR on document pages...";
    } else if (progress < 90) {
      return "Finalizing text extraction...";
    } else if (progress < 100) {
      return "Preparing results for download...";
    } else {
      return "Complete! Your document is ready.";
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-blue-600 animate-spin"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Processing PDF
        </h3>
        <p className="text-sm text-gray-600 mb-4">{filename}</p>
        <p className="text-sm text-gray-500">
          {getCurrentMessage()}
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="text-xs text-gray-500 text-center">
          {progress < 20 && "Setting up processing environment..."}
          {progress >= 20 && progress < 40 && "Converting and analyzing pages..."}
          {progress >= 40 && progress < 70 && "Running OCR algorithms..."}
          {progress >= 70 && progress < 90 && "Finalizing and optimizing..."}
          {progress >= 90 && progress < 100 && "Preparing your results..."}
          {progress >= 100 && "Complete! Your document is ready."}
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start space-x-3">
          <svg
            className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">Processing in batches</p>
            <p>
              Large PDFs are processed in batches of 5 pages to optimize
              performance and memory usage. Please be patient - quality takes time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
