#!/bin/bash

set -e

# Load environment variables
if [ -f .env ]; then
  export $(cat .env | xargs)
else
  echo ".env file not found. Please create one with the necessary environment variables."
  exit 1
fi

# Start Docker Compose for the database
docker-compose -f docker-compose.dev.yml up -d

# Install dependencies for backend and frontend
echo "Installing backend dependencies..."
cd backend && npm install
echo "Installing frontend dependencies..."
cd ../ && npm install

# Start the backend
echo "Starting backend..."
cd backend && npm start &

# Start the frontend
echo "Starting frontend..."
cd ../ && npm start

# Wait for backend and frontend to stop
wait

# Stop Docker Compose
docker-compose -f docker-compose.dev.yml down
