import React from "react";

const About = ({ onNavigation }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About PDF OCR Tool
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering users with free, accessible, and powerful text extraction
            technology
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Democratize OCR
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Make advanced OCR technology accessible to everyone, regardless
                of technical expertise or financial resources.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🔓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Free & Open
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Provide a completely free service with no hidden costs,
                registration requirements, or data collection.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Privacy First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ensure complete privacy by processing files in memory and
                automatically deleting them after processing.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
            <p className="mb-6">
              The PDF OCR Tool was born from a simple observation: while there
              are many PDF tools available, most require registration, payment,
              or compromise user privacy. We believed that powerful OCR
              technology should be accessible to everyone.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">
              The Problem
            </h3>
            <p className="mb-6">
              Millions of documents exist in PDF format that contain valuable
              information locked away as images. Students, researchers,
              professionals, and individuals need to extract text from scanned
              documents, but existing solutions are often expensive,
              complicated, or privacy-invasive.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              The Solution
            </h3>
            <p className="mb-6">
              We built a free, web-based OCR tool that combines cutting-edge
              technology with user-friendly design. Using Tesseract.js,
              GraphicsMagick, and modern web technologies, we created a tool
              that's both powerful and accessible.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">The Impact</h3>
            <p className="mb-6">
              Since our launch, thousands of users have successfully extracted
              text from their PDF documents. From academic research to business
              documents, our tool has helped unlock the value hidden in scanned
              documents worldwide.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            By The Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-600 text-white rounded-lg">
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-sm opacity-90">Documents Processed</div>
            </div>
            <div className="text-center p-6 bg-blue-600 text-white rounded-lg">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">OCR Accuracy</div>
            </div>
            <div className="text-center p-6 bg-blue-600 text-white rounded-lg">
              <div className="text-3xl font-bold mb-2">200</div>
              <div className="text-sm opacity-90">Max Pages</div>
            </div>
            <div className="text-center p-6 bg-blue-600 text-white rounded-lg">
              <div className="text-3xl font-bold mb-2">50MB</div>
              <div className="text-sm opacity-90">File Size Limit</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg border-l-4 border-blue-600">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Accessibility
              </h3>
              <p className="text-gray-600 text-sm">
                We believe powerful tools should be available to everyone,
                regardless of their technical background or financial situation.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border-l-4 border-blue-600">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Privacy</h3>
              <p className="text-gray-600 text-sm">
                Your documents are your business. We process everything in
                memory and automatically clean up files for complete privacy.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border-l-4 border-blue-600">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Performance
              </h3>
              <p className="text-gray-600 text-sm">
                We optimize for speed and accuracy, using the latest
                technologies to provide the best possible user experience.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border-l-4 border-blue-600">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Open Source
              </h3>
              <p className="text-gray-600 text-sm">
                Built on open-source technologies and committed to transparency.
                Our code is available for review and contribution.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Technology & Innovation
          </h2>
          <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed">
            <p className="mb-6">
              Our tool leverages cutting-edge technologies to deliver
              exceptional results:
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">
              Advanced OCR Engine
            </h3>
            <p className="mb-6">
              Powered by Tesseract.js, one of the most accurate OCR engines
              available, with support for multiple languages and complex
              document layouts.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Smart Image Processing
            </h3>
            <p className="mb-6">
              Using GraphicsMagick and Ghostscript for high-quality PDF to image
              conversion, ensuring optimal resolution and clarity for text
              recognition.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Modern Web Architecture
            </h3>
            <p className="mb-6">
              Built with Node.js and Express for robust backend processing, with
              a responsive frontend that works seamlessly across all devices.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Batch Processing
            </h3>
            <p className="mb-6">
              Intelligent batch processing handles large documents efficiently
              while maintaining system performance and memory optimization.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Contact & Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4 text-blue-600">📧</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Email Support
              </h3>
              <p className="text-gray-600 text-sm">support@pdfocrtool.com</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4 text-blue-600">🐛</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Report Issues
              </h3>
              <p className="text-gray-600 text-sm">GitHub Issues</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4 text-blue-600">📖</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Documentation
              </h3>
              <p className="text-gray-600 text-sm">Comprehensive guides</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4 text-blue-600">💬</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Community
              </h3>
              <p className="text-gray-600 text-sm">Join our discussions</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            About the Developer
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white font-bold">HS</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Harinder Singh
              </h3>
              <p className="text-gray-600 text-lg">
                Developer & Service Manager
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Information
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="text-blue-600 mr-3">📱</div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-semibold text-gray-900">
                        +91 9815393101
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-blue-600 mr-3">📅</div>
                    <div>
                      <p className="text-sm text-gray-500">Service Since</p>
                      <p className="font-semibold text-gray-900">2019</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-blue-600 mr-3">🎯</div>
                    <div>
                      <p className="text-sm text-gray-500">Role</p>
                      <p className="font-semibold text-gray-900">
                        Tool Developer & Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Service Commitment
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="text-green-600 mr-3 mt-1">✅</div>
                    <p className="text-gray-700 text-sm">
                      Providing free OCR services since 2019
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-600 mr-3 mt-1">✅</div>
                    <p className="text-gray-700 text-sm">
                      Continuous improvement and updates
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-600 mr-3 mt-1">✅</div>
                    <p className="text-gray-700 text-sm">
                      Privacy-focused development approach
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-600 mr-3 mt-1">✅</div>
                    <p className="text-gray-700 text-sm">
                      Direct support and maintenance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 leading-relaxed">
                This PDF OCR Tool is personally managed and maintained by
                Harinder Singh, who has been providing free OCR services to the
                community since 2019. With a commitment to privacy,
                accessibility, and continuous improvement, the tool has helped
                thousands of users extract text from their PDF documents.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Experience the power of our free OCR technology today
          </p>
          <button
            onClick={() => onNavigation("home")}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            Start Processing PDFs
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
