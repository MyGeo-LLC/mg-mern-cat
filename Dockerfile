FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies
COPY backend/package*.json ./

RUN npm install

# Copy app source code
COPY backend/ .

# Expose the port and start the application
EXPOSE 5000
CMD ["node", "server.js"]
