import React from "react";

const Features = ({ onNavigation }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes our PDF OCR Tool the best choice for text
            extraction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Lightning Fast Processing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Advanced batch processing handles large PDFs efficiently. Process
              up to 200 pages with intelligent memory management and parallel
              OCR processing.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              High Accuracy OCR
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Powered by Tesseract.js with advanced image preprocessing. Achieve
              95%+ accuracy on clear documents with support for multiple
              languages.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Responsive Design
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Works perfectly on desktop, tablet, and mobile devices.
              Drag-and-drop interface with intuitive controls for seamless user
              experience.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Privacy First
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your files are processed in memory and automatically deleted after
              processing. No data is stored on our servers - complete privacy
              protection.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Multiple Formats
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Download extracted text in TXT or DOCX formats. Perfect for
              further editing, analysis, or integration with other applications.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Real-time Progress
            </h3>
            <p className="text-gray-600 leading-relaxed">
              See exactly what's happening with live progress tracking. Know how
              many pages are processed and estimated completion time.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              No Registration Required
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Start using immediately without creating accounts or providing
              personal information. Completely free with no hidden costs.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Advanced Processing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Smart image enhancement, noise reduction, and layout analysis.
              Handles complex documents with tables, columns, and mixed content.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Detailed Results
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Page-by-page text display with success/failure indicators. Copy
              individual pages or entire documents with one click.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Before vs After
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-red-50 rounded-lg border-2 border-red-200">
              <h3 className="text-xl font-bold text-red-600 mb-4">
                Traditional PDFs
              </h3>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">❌</span>
                  Text is not selectable
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">❌</span>
                  Cannot search content
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">❌</span>
                  Difficult to copy text
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">❌</span>
                  No editing possible
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">❌</span>
                  Limited accessibility
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">❌</span>
                  Manual transcription needed
                </li>
              </ul>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-200">
              <h3 className="text-xl font-bold text-green-600 mb-4">
                After OCR Processing
              </h3>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span>
                  Fully searchable text
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span>
                  Easy content discovery
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span>
                  One-click text copying
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span>
                  Ready for editing
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span>
                  Screen reader compatible
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✅</span>
                  Instant text extraction
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your PDFs?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of users who have already unlocked the power of their
            documents
          </p>
          <button
            onClick={() => onNavigation("home")}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            Start OCR Processing Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
