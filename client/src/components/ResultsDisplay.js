import React, { useState } from "react";
import DownloadButton from "./DownloadButton";

const ResultsDisplay = ({ results, onReset, filename }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [copied, setCopied] = useState(false);

  const handleCopyText = async () => {
    const allText = results.pages
      .map((page) => `=== Page ${page.pageNumber} ===\n${page.text}\n\n`)
      .join("");

    try {
      await navigator.clipboard.writeText(allText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  const successfulPages = results.pages.filter((page) => page.success);
  const failedPages = results.pages.filter((page) => !page.success);

  return (
    <div className="space-y-6">
      {/* Success Summary */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-green-900">
                Text Extraction Complete!
              </h3>
              <p className="text-green-700">
                Successfully processed {results.totalPages} pages from{" "}
                {filename}
              </p>
            </div>
          </div>
          <button
            onClick={onReset}
            className="bg-green-100 text-green-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-green-200 transition-colors"
          >
            Process Another PDF
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">
            {results.totalPages}
          </div>
          <div className="text-sm text-gray-600">Total Pages</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-green-600">
            {successfulPages.length}
          </div>
          <div className="text-sm text-gray-600">Successful</div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-red-600">
            {failedPages.length}
          </div>
          <div className="text-sm text-gray-600">Failed</div>
        </div>
      </div>

      {/* Download Options */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Download Options
        </h3>
        <div className="flex flex-wrap gap-3">
          <DownloadButton
            type="txt"
            pages={results.pages}
            filename={filename}
            label="Download as TXT"
            icon="📄"
          />
          <DownloadButton
            type="docx"
            pages={results.pages}
            filename={filename}
            label="Download as DOCX"
            icon="📝"
          />
          <button
            onClick={handleCopyText}
            className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
          >
            <span>📋</span>
            <span>{copied ? "Copied!" : "Copy All Text"}</span>
          </button>
        </div>
      </div>

      {/* Page Navigation */}
      {results.totalPages > 1 && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Page Navigation
          </h3>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: results.totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setSelectedPage(pageNum)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    selectedPage === pageNum
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Page {pageNum}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {/* Text Display */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Extracted Text</h3>
          {results.totalPages > 1 && (
            <span className="text-sm text-gray-500">
              Page {selectedPage} of {results.totalPages}
            </span>
          )}
        </div>

        <div className="space-y-4">
          {results.totalPages === 1 ? (
            <TextPage page={results.pages[0]} />
          ) : (
            <TextPage
              page={results.pages.find((p) => p.pageNumber === selectedPage)}
            />
          )}
        </div>
      </div>

      {/* Failed Pages Warning */}
      {failedPages.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <svg
              className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
            <div className="text-sm text-yellow-800">
              <p className="font-medium mb-1">Some pages failed to process</p>
              <p>
                Pages {failedPages.map((p) => p.pageNumber).join(", ")} could
                not be processed. This might be due to image quality or content
                type.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TextPage = ({ page }) => {
  if (!page) return null;

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-medium text-gray-900">Page {page.pageNumber}</h4>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            page.success
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {page.success ? "Success" : "Failed"}
        </span>
      </div>

      {page.success ? (
        <div className="bg-gray-50 rounded p-3 max-h-96 overflow-y-auto">
          <pre className="text-sm text-gray-800 whitespace-pre-wrap font-sans">
            {page.text || "No text extracted from this page."}
          </pre>
        </div>
      ) : (
        <div className="bg-red-50 rounded p-3">
          <p className="text-sm text-red-700">
            Failed to extract text: {page.error || "Unknown error"}
          </p>
        </div>
      )}
    </div>
  );
};

export default ResultsDisplay;
