#!/bin/bash

# Log file
LOG_FILE="update_docker_files.log"

# Function to log messages
log_message() {
  echo "$(date +'%Y-%m-%d %H:%M:%S') - $1" | tee -a $LOG_FILE
}

# Function to check for errors
check_error() {
  if [ $? -ne 0 ]; then
    log_message "Error: $1"
    exit 1
  fi
}

# Function to create or update Dockerfile for the React app
create_react_dockerfile() {
  log_message "Creating Dockerfile for React app..."
  cat <<EOL > Dockerfile
FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
EOL
  check_error "Failed to create Dockerfile for React app."
  log_message "Dockerfile for React app created."
}

# Function to create or update Dockerfile for the Electron app
create_electron_dockerfile() {
  log_message "Creating Dockerfile for Electron app..."
  cat <<EOL > Dockerfile.electron
FROM electronuserland/builder:wine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "electron"]
EOL
  check_error "Failed to create Dockerfile for Electron app."
  log_message "Dockerfile for Electron app created."
}

# Function to create or update docker-compose.yml
create_docker_compose() {
  log_message "Creating docker-compose.yml..."
  cat <<EOL > docker-compose.yml
version: '3.8'

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - .:/app
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    command: npm start
    depends_on:
      - mongo

  electron:
    build:
      context: .
      dockerfile: Dockerfile.electron
    volumes:
      - .:/app
    environment:
      - NODE_ENV=development
    command: npm run electron-start

  mongo:
    image: mongo
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
EOL
  check_error "Failed to create docker-compose.yml."
  log_message "docker-compose.yml created."
}

# Function to create or update docker-compose.override.yml
create_docker_compose_override() {
  log_message "Creating docker-compose.override.yml..."
  cat <<EOL > docker-compose.override.yml
version: '3.8'

services:
  web:
    environment:
      - NODE_ENV=development
  electron:
    environment:
      - NODE_ENV=development
EOL
  check_error "Failed to create docker-compose.override.yml."
  log_message "docker-compose.override.yml created."
}

# Function to create or update docker-compose.dev.yml
create_docker_compose_dev() {
  log_message "Creating docker-compose.dev.yml..."
  cat <<EOL > docker-compose.dev.yml
version: '3.8'

services:
  web:
    environment:
      - NODE_ENV=development
  electron:
    environment:
      - NODE_ENV=development
EOL
  check_error "Failed to create docker-compose.dev.yml."
  log_message "docker-compose.dev.yml created."
}

# Function to create or update docker-compose.db.yml
create_docker_compose_db() {
  log_message "Creating docker-compose.db.yml..."
  cat <<EOL > docker-compose.db.yml
version: '3.8'

services:
  mongo:
    image: mongo
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
EOL
  check_error "Failed to create docker-compose.db.yml."
  log_message "docker-compose.db.yml created."
}

# Execute the functions
log_message "Starting update of Docker files..."

create_react_dockerfile
create_electron_dockerfile
create_docker_compose
create_docker_compose_override
create_docker_compose_dev
create_docker_compose_db

log_message "All Docker files have been updated successfully."

