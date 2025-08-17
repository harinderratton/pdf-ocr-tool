import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = ({ onFileUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];

        // Validate file type
        if (file.type !== "application/pdf") {
          alert("Please upload a PDF file");
          return;
        }

        // Validate file size (50MB limit)
        if (file.size > 50 * 1024 * 1024) {
          alert("File size must be less than 50MB");
          return;
        }

        onFileUpload(file);
      }
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        "application/pdf": [".pdf"],
      },
      multiple: false,
      maxSize: 50 * 1024 * 1024, // 50MB
    });

  return (
    <div className="max-w-2xl mx-auto">
      <div
        {...getRootProps()}
        className={`dropzone p-8 text-center cursor-pointer transition-all duration-300 ${
          isDragActive ? "drag-active" : ""
        } ${isDragReject ? "border-red-400 bg-red-50" : ""}`}
      >
        <input {...getInputProps()} />

        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {isDragActive ? "Drop your PDF here" : "Upload your PDF file"}
            </h3>
            <p className="text-gray-600">
              {isDragActive
                ? "Release to upload"
                : "Drag and drop your PDF file here, or click to browse"}
            </p>
          </div>

          {!isDragActive && (
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Choose File
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Supported format: PDF only</p>
        <p>Maximum file size: 50MB</p>
        <p>Maximum pages: 200</p>
      </div>

      {isDragReject && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600 text-sm">Please upload a valid PDF file</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
