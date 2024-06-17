# Enable script execution for the current session
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force

# Define functions for the setup process

function Install-Docker {
    Write-Host "Checking Docker installation..."
    if (-Not (Get-Command docker -ErrorAction SilentlyContinue)) {
        Write-Host "Docker not found. Please install Docker from https://docs.docker.com/get-docker/"
        exit 1
    } else {
        Write-Host "Docker is already installed."
    }

    Write-Host "Checking Docker Compose installation..."
    if (-Not (Get-Command docker-compose -ErrorAction SilentlyContinue)) {
        Write-Host "Docker Compose not found. Please install Docker Compose from https://docs.docker.com/compose/install/"
        exit 1
    } else {
        Write-Host "Docker Compose is already installed."
    }
}

function Create-DockerComposeFile {
    Write-Host "Creating docker-compose.yml file..."
    $dockerComposeContent = @"
version: '3.8'

services:
  backend:
    image: node:14
    working_dir: /usr/src/app
    volumes:
      - .:/usr/src/app
    command: bash -c 'cd backend && npm install && npm start'
    ports:
      - '5000:5000'
    environment:
      - MONGO_URI=mongodb://mongo:27017/mern-project
      - JWT_SECRET=your_jwt_secret
    depends_on:
      - mongo

  frontend:
    image: node:14
    working_dir: /usr/src/app
    volumes:
      - .:/usr/src/app
    command: bash -c 'npm install && npm start'
    ports:
      - '3000:3000'

  mongo:
    image: mongo:latest
    ports:
      - '27017:27017'
"@
    Set-Content -Path "docker-compose.yml" -Value $dockerComposeContent
}

function Create-Dockerfile {
    Write-Host "Creating Dockerfile for packaging..."
    $dockerfileContent = @"
FROM node:14

# Install dependencies for Wine and other required packages
RUN apt-get update \
    && apt-get install -y software-properties-common \
    && dpkg --add-architecture i386 \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
    wine64 \
    wine32 \
    wget \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the frontend
RUN yarn build

# Package the application
RUN yarn electron-pack

# The entrypoint for the container
ENTRYPOINT ['/bin/bash']
"@
    Set-Content -Path "Dockerfile" -Value $dockerfileContent
}

function Update-PackageJson {
    Write-Host "Updating package.json for packaging..."
    $packageJsonContent = @"
{
  'name': 'mern-project',
  'version': '1.0.0',
  'main': 'main.js',
  'scripts': {
    'start': 'node backend/server.js',
    'build': 'react-scripts build',
    'electron': 'electron .',
    'electron-pack': 'electron-builder --win'
  },
  'build': {
    'appId': 'com.example.yourapp',
    'files': [
      'build/**/*',
      'main.js',
      'preload.js',
      'backend/**/*'
    ],
    'win': {
      'target': 'nsis',
      'icon': 'public/icon.ico'
    }
  },
  'dependencies': {
    '@material-ui/core': '^4.12.3',
    '@material-ui/icons': '^4.11.2',
    'axios': '^0.24.0',
    'bcrypt': '^5.0.1',
    'body-parser': '^1.19.0',
    'cors': '^2.8.5',
    'dotenv': '^10.0.0',
    'electron': '^13.1.7',
    'electron-builder': '^22.11.7',
    'express': '^4.17.1',
    'jsonwebtoken': '^8.5.1',
    'mongoose': '^6.0.12',
    'react': '^17.0.2',
    'react-dom': '^17.0.2',
    'react-router-dom': '^5.3.0'
  },
  'devDependencies': {
    'electron-is-dev': '^1.2.0'
  }
}
"@
    Set-Content -Path "package.json" -Value $packageJsonContent
}

function Build-DockerImage {
    Write-Host "Building Docker image for packaging..."
    docker build -t mern-project-electron .
}

function Run-DockerContainer {
    Write-Host "Running Docker container to build and package application..."
    docker run --rm -v ${PWD}:/app mern-project-electron
}

function Main {
    Install-Docker
    Create-DockerComposeFile
    Create-Dockerfile
    Update-PackageJson
    Write-Host "Starting Docker Compose..."
    docker-compose up -d
    Start-Sleep -Seconds 30  # Wait for the services to be up and running
    Write-Host "Stopping Docker Compose..."
    docker-compose down
    Build-DockerImage
    Run-DockerContainer

    Write-Host "The application has been packaged successfully. You can find the installer in the 'dist' directory."
    Write-Host "Distribute the installer file to users to install the application on their Windows machines."
}

Main
