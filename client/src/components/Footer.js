import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              PDF OCR Tool
            </h3>
            <p className="text-gray-600 text-sm">
              Free online tool to extract text from PDF files using advanced OCR
              technology. No registration required, completely free to use.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                Managed by{" "}
                <span className="font-semibold text-gray-700">
                  Harinder Singh
                </span>
              </p>
              <p className="text-gray-600 text-sm">
                Contact:{" "}
                <span className="font-semibold text-gray-700">
                  +91 9815393101
                </span>
              </p>
              <p className="text-gray-600 text-sm">
                Service since{" "}
                <span className="font-semibold text-gray-700">2019</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-4">
              Features
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Extract text from scanned PDFs</li>
              <li>• Support for up to 200 pages</li>
              <li>• Download as TXT or DOCX</li>
              <li>• Batch processing for large files</li>
              <li>• No file storage - privacy focused</li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-4">
              How it Works
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>1. Upload your PDF file</li>
              <li>2. Wait for OCR processing</li>
              <li>3. Review extracted text</li>
              <li>4. Download in your preferred format</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2025 PDF OCR Tool. Advanced document processing solution powered by cutting-edge OCR technology. 
            All rights reserved. Maintained by{" "}
            <span className="font-semibold text-gray-700">Harinder Singh</span> and{" "}
            <span className="font-semibold text-gray-700">Siwesk.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
