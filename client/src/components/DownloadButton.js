import React, { useState } from "react";

const DownloadButton = ({ type, pages, filename, label, icon }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      // Use environment variable for API URL or fallback to localhost
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
      
      const response = await fetch(`${API_URL}/api/download/${type}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pages: pages,
          filename: filename,
        }),
      });

      if (!response.ok) {
        throw new Error("Download failed");
      }

      // Create blob and download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${filename.replace(".pdf", "")}_ocr.${type}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download file. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
        isDownloading
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
    >
      <span>{icon}</span>
      <span>{isDownloading ? "Downloading..." : label}</span>
      {isDownloading && (
        <svg
          className="w-4 h-4 animate-spin"
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
      )}
    </button>
  );
};

export default DownloadButton;
