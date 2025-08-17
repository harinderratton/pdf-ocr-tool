#!/bin/bash

echo "🚀 Starting PDF OCR Tool..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."

# Install root dependencies
npm install

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd server && npm install && cd ..

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd client && npm install && cd ..

echo "✅ Dependencies installed successfully!"

echo "🌐 Starting development servers..."

# Start both servers concurrently
npm run dev
