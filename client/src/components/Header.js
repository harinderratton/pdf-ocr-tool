import React from "react";

const Header = ({ onNavigation, currentPage }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">PDF OCR Tool</h1>
              <p className="text-sm text-gray-500">Free Text Extraction</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => onNavigation("home")}
              className={`transition-colors ${
                currentPage === "home"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigation("features")}
              className={`transition-colors ${
                currentPage === "features"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => onNavigation("how-it-works")}
              className={`transition-colors ${
                currentPage === "how-it-works"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              How it Works
            </button>
            <button
              onClick={() => onNavigation("about")}
              className={`transition-colors ${
                currentPage === "about"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              About
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
