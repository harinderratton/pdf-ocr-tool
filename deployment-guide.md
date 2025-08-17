# 🚀 PDF OCR Tool - Deployment Guide

## 📋 Prerequisites
- GitHub account
- Vercel account (free)
- Render account (free)
- Node.js installed locally

## 🎯 Deployment Options

### **Option 1: Vercel (Frontend) + Render (Backend) - RECOMMENDED**

#### **Step 1: Prepare Your Repository**
1. Create a GitHub repository
2. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/pdf-ocr-tool.git
git push -u origin main
```

#### **Step 2: Deploy Backend to Render**

1. **Go to [Render.com](https://render.com)** and sign up
2. **Click "New +" → "Web Service"**
3. **Connect your GitHub repository**
4. **Configure the service:**
   - **Name**: `pdf-ocr-backend`
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

5. **Add Environment Variables:**
   - `NODE_ENV`: `production`
   - `PORT`: `10000`

6. **Click "Create Web Service"**
7. **Wait for deployment and copy the URL** (e.g., `https://pdf-ocr-backend.onrender.com`)

#### **Step 3: Deploy Frontend to Vercel**

1. **Go to [Vercel.com](https://vercel.com)** and sign up
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure the project:**
   - **Framework Preset**: Create React App
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

5. **Add Environment Variables:**
   - `REACT_APP_API_URL`: `https://your-backend-url.onrender.com`

6. **Click "Deploy"**
7. **Your app will be live at**: `https://your-project.vercel.app`

#### **Step 4: Update API Configuration**

1. **Update `client/src/components/FileUpload.js`:**
```javascript
// Replace localhost:5000 with your Render URL
const API_URL = process.env.REACT_APP_API_URL || 'https://your-backend-url.onrender.com';
```

2. **Update `client/vercel.json`:**
```json
{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "https://your-backend-url.onrender.com/api/$1"
    }
  ]
}
```

### **Option 2: Netlify (Frontend) + Railway (Backend)**

#### **Frontend - Netlify:**
1. Go to [Netlify.com](https://netlify.com)
2. Drag and drop your `client/build` folder
3. Or connect GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

#### **Backend - Railway:**
1. Go to [Railway.app](https://railway.app)
2. Connect GitHub repository
3. Set root directory to `server`
4. Deploy automatically

### **Option 3: Heroku (Both Frontend & Backend)**

#### **Backend Deployment:**
1. Install Heroku CLI
2. Create Heroku app:
```bash
cd server
heroku create pdf-ocr-backend
git push heroku main
```

#### **Frontend Deployment:**
1. Create another Heroku app:
```bash
cd client
heroku create pdf-ocr-frontend
git push heroku main
```

## 🔧 Environment Variables

### **Backend (.env):**
```env
NODE_ENV=production
PORT=10000
CORS_ORIGIN=https://your-frontend-url.vercel.app
```

### **Frontend (.env):**
```env
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

## 📝 Post-Deployment Checklist

### **✅ Backend Verification:**
- [ ] API endpoints accessible
- [ ] File upload working
- [ ] OCR processing functional
- [ ] CORS configured correctly

### **✅ Frontend Verification:**
- [ ] Homepage loads
- [ ] File upload interface works
- [ ] Progress bar displays
- [ ] Results show correctly
- [ ] Download buttons functional

### **✅ Integration Testing:**
- [ ] Upload PDF file
- [ ] Process through OCR
- [ ] Download results
- [ ] Test all pages (Features, How it Works, About)

## 🛠️ Troubleshooting

### **Common Issues:**

1. **CORS Errors:**
   - Update backend CORS configuration
   - Add your frontend URL to allowed origins

2. **Build Failures:**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for syntax errors

3. **API Connection Issues:**
   - Verify backend URL is correct
   - Check if backend is running
   - Test API endpoints directly

4. **File Upload Issues:**
   - Check file size limits
   - Verify upload directory permissions
   - Test with smaller files first

## 🔒 Security Considerations

1. **Environment Variables:**
   - Never commit sensitive data
   - Use platform-specific secret management

2. **CORS Configuration:**
   - Only allow necessary origins
   - Remove wildcard (*) in production

3. **File Handling:**
   - Implement file type validation
   - Set appropriate file size limits
   - Clean up temporary files

## 📊 Monitoring & Maintenance

1. **Set up monitoring:**
   - Uptime monitoring
   - Error tracking
   - Performance monitoring

2. **Regular maintenance:**
   - Update dependencies
   - Monitor resource usage
   - Backup important data

## 🎉 Success!

Once deployed, your PDF OCR Tool will be accessible worldwide at:
- **Frontend**: `https://your-project.vercel.app`
- **Backend**: `https://your-backend.onrender.com`

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section
2. Review platform-specific documentation
3. Check error logs in your hosting platform
4. Test locally first to isolate issues

---

**Note**: Free tiers have limitations:
- **Vercel**: 100GB bandwidth/month
- **Render**: 750 hours/month
- **Netlify**: 100GB bandwidth/month
- **Railway**: $5 credit/month

For production use, consider upgrading to paid plans.
