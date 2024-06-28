# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy the .env file
COPY .env .env

# Copy wait-for-it.sh
COPY wait-for-it.sh wait-for-it.sh
RUN chmod +x wait-for-it.sh

# Expose the application port
EXPOSE 5000

# Run the script to create a default user and then start the app
CMD ["sh", "-c", "./wait-for-it.sh mongo:27017 -- node scripts/createDefaultUser.js && npm start"]
