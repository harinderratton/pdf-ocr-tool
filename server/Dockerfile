FROM node:18-slim

# Install minimal dependencies
RUN apt-get update && apt-get install -y \
    && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Create temp directories
RUN mkdir -p temp uploads

# Expose port
EXPOSE 5000

# Start the app
CMD ["npm", "start"]