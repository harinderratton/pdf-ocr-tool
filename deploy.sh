#!/bin/bash

echo "🚀 PDF OCR Tool - Deployment Script"
echo "=================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Please add your GitHub repository as remote origin:"
    echo "   git remote add origin https://github.com/yourusername/pdf-ocr-tool.git"
    echo "   git push -u origin main"
else
    echo "✅ Remote origin already configured"
fi

echo ""
echo "📋 Next Steps:"
echo "=============="
echo ""
echo "1. 🎯 DEPLOY BACKEND (Render.com):"
echo "   - Go to https://render.com"
echo "   - Sign up and create new Web Service"
echo "   - Connect your GitHub repository"
echo "   - Set Root Directory: server"
echo "   - Build Command: npm install"
echo "   - Start Command: npm start"
echo "   - Add Environment Variables:"
echo "     NODE_ENV=production"
echo "     PORT=10000"
echo ""
echo "2. 🎯 DEPLOY FRONTEND (Vercel.com):"
echo "   - Go to https://vercel.com"
echo "   - Sign up and create new project"
echo "   - Import your GitHub repository"
echo "   - Set Root Directory: client"
echo "   - Framework Preset: Create React App"
echo "   - Add Environment Variable:"
echo "     REACT_APP_API_URL=https://your-backend-url.onrender.com"
echo ""
echo "3. 🔧 UPDATE CONFIGURATION:"
echo "   - Update vercel.json with your backend URL"
echo "   - Test the deployed application"
echo ""
echo "📖 For detailed instructions, see: deployment-guide.md"
echo ""
echo "�� Happy Deploying!"
