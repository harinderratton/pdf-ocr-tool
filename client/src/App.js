import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import ProgressBar from "./components/ProgressBar";
import ResultsDisplay from "./components/ResultsDisplay";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";

function App() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [filename, setFilename] = useState("");
  const [currentPage, setCurrentPage] = useState("home");

  const handleFileUpload = async (file) => {
    setIsProcessing(true);
    setProgress(0);
    setError(null);
    setResults(null);
    setFilename(file.name);

    try {
      const formData = new FormData();
      formData.append("pdf", file);

      // Simulate progress updates (since we can't get real-time progress from the server)
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + Math.random() * 10;
        });
      }, 1000);

      // Use environment variable for API URL or fallback to localhost
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
      
      const response = await fetch(`${API_URL}/api/upload`, {
        method: "POST",
        body: formData,
      });

      clearInterval(progressInterval);
      setProgress(100);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to process PDF");
      }

      const data = await response.json();
      setResults(data);

      // Reset progress after a short delay
      setTimeout(() => setProgress(0), 2000);
    } catch (err) {
      setError(err.message);
      setProgress(0);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setResults(null);
    setError(null);
    setProgress(0);
    setFilename("");
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setResults(null);
    setError(null);
    setProgress(0);
    setFilename("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header onNavigation={handleNavigation} currentPage={currentPage} />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {currentPage === "home" && (
          <>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Free PDF OCR Tool
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Extract text from PDF files using advanced OCR technology.
                Upload your PDF and get searchable text in seconds. Supports up
                to 200 pages per file.
              </p>
            </div>

            {!results && !isProcessing && (
              <FileUpload onFileUpload={handleFileUpload} />
            )}

            {isProcessing && (
              <div className="max-w-2xl mx-auto">
                <ProgressBar progress={progress} filename={filename} />
              </div>
            )}

            {error && (
              <div className="max-w-2xl mx-auto">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        Error Processing PDF
                      </h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>{error}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={handleReset}
                      className="bg-red-100 text-red-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-red-200 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              </div>
            )}

            {results && (
              <ResultsDisplay
                results={results}
                onReset={handleReset}
                filename={filename}
              />
            )}
          </>
        )}

        {currentPage === "features" && (
          <Features onNavigation={handleNavigation} />
        )}
        {currentPage === "how-it-works" && (
          <HowItWorks onNavigation={handleNavigation} />
        )}
        {currentPage === "about" && <About onNavigation={handleNavigation} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
