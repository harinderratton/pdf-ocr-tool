# Free PDF OCR Tool

A complete web application for extracting text from PDF files using OCR (Optical Character Recognition) technology. Built with React.js frontend and Node.js backend.

## 🚀 Features

- **PDF Upload**: Drag-and-drop interface for easy file upload
- **OCR Processing**: Extract text from scanned PDFs using Tesseract.js
- **Batch Processing**: Handle large PDFs (up to 200 pages) efficiently
- **Progress Tracking**: Real-time progress updates during processing
- **Multiple Formats**: Download extracted text as TXT or DOCX files
- **Responsive Design**: Works on desktop and mobile devices
- **Free & No Login**: Completely free to use, no registration required
- **Privacy Focused**: Files are processed in memory and deleted after processing

## 🛠️ Tech Stack

### Frontend

- **React.js** - User interface
- **Tailwind CSS** - Styling and responsive design
- **React Dropzone** - File upload with drag-and-drop
- **Axios** - HTTP client for API calls

### Backend

- **Node.js** - Server runtime
- **Express.js** - Web framework
- **Multer** - File upload handling
- **Tesseract.js** - OCR engine
- **pdf-lib** - PDF manipulation
- **pdf2pic** - PDF to image conversion
- **docx** - DOCX file generation

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Local Development Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd pdf-ocr-tool
   ```

2. **Install dependencies**

   ```bash
   # Install root dependencies
   npm install

   # Install backend dependencies
   cd server && npm install

   # Install frontend dependencies
   cd ../client && npm install
   ```

3. **Start the development servers**

   ```bash
   # From the root directory
   npm run dev
   ```

   This will start:

   - Backend server on `http://localhost:5000`
   - Frontend development server on `http://localhost:3000`

### Alternative: Install All Dependencies at Once

```bash
npm run install-all
```

## 🚀 Usage

1. **Open the application** in your browser at `http://localhost:3000`

2. **Upload a PDF file** by either:

   - Dragging and dropping a PDF file onto the upload area
   - Clicking the upload area to browse and select a file

3. **Wait for processing** - The app will show a progress bar while extracting text

4. **Review results** - View the extracted text page by page

5. **Download** - Choose to download as TXT or DOCX format, or copy all text to clipboard

## 📁 Project Structure

```
pdf-ocr-tool/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/               # Source code
│   │   ├── components/    # React components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   ├── package.json       # Frontend dependencies
│   └── tailwind.config.js # Tailwind configuration
├── server/                # Node.js backend
│   ├── index.js           # Main server file
│   ├── package.json       # Backend dependencies
│   ├── uploads/           # Temporary upload directory
│   └── temp/              # Temporary processing directory
├── package.json           # Root package.json
└── README.md             # This file
```

## 🌐 Deployment

### Frontend Deployment (Vercel/Netlify)

1. **Build the frontend**

   ```bash
   cd client
   npm run build
   ```

2. **Deploy to Vercel**

   - Connect your GitHub repository to Vercel
   - Set build command: `cd client && npm install && npm run build`
   - Set output directory: `client/build`
   - Set environment variable: `REACT_APP_API_URL` to your backend URL

3. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `cd client && npm install && npm run build`
   - Set publish directory: `client/build`

### Backend Deployment (Render/Railway/Heroku)

1. **Prepare for deployment**

   - Ensure all dependencies are in `server/package.json`
   - Set environment variables if needed

2. **Deploy to Render**

   - Connect your GitHub repository
   - Set build command: `cd server && npm install`
   - Set start command: `cd server && npm start`
   - Set environment variables

3. **Deploy to Railway**

   - Connect your GitHub repository
   - Set root directory to `server`
   - Railway will auto-detect Node.js and run `npm start`

4. **Deploy to Heroku**

   ```bash
   # Create Heroku app
   heroku create your-app-name

   # Set buildpacks
   heroku buildpacks:set heroku/nodejs

   # Deploy
   git subtree push --prefix server heroku main
   ```

### Environment Variables

Set these environment variables in your deployment platform:

```bash
NODE_ENV=production
PORT=5000  # Or let the platform set it
```

## 🔧 Configuration

### File Size Limits

- Maximum file size: 50MB
- Maximum pages: 500
- Supported format: PDF only

### OCR Settings

- Language: English (eng)
- Image density: 300 DPI
- Batch size: 5 pages at a time

### Performance Optimization

- Files are processed in batches to avoid memory issues
- Temporary files are automatically cleaned up
- Tesseract worker is reused for better performance

## 🐛 Troubleshooting

### Common Issues

1. **"Only PDF files are allowed" error**

   - Ensure you're uploading a valid PDF file
   - Check file extension and MIME type

2. **"File size too large" error**

   - Reduce PDF file size (compress images, remove unnecessary pages)
   - Maximum size is 50MB

3. **"PDF must have 200 pages or less" error**

   - Split large PDFs into smaller files
   - Maximum is 200 pages per file

4. **OCR processing fails**
   - Check PDF image quality (should be clear and readable)
   - Try with a different PDF file
   - Some PDFs with complex layouts may not process correctly

### Development Issues

1. **Port conflicts**

   - Backend runs on port 5000 by default
   - Frontend runs on port 3000 by default
   - Change ports in respective package.json files if needed

2. **Dependencies not installing**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and package-lock.json, then reinstall

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Tesseract.js](https://github.com/naptha/tesseract.js) - OCR engine
- [React Dropzone](https://react-dropzone.js.org/) - File upload component
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [pdf-lib](https://pdf-lib.js.org/) - PDF manipulation library

## 📞 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Search existing issues in the repository
3. Create a new issue with detailed information about your problem

---

**Note**: This tool is designed for educational and personal use. For production use, consider implementing additional security measures and rate limiting.
