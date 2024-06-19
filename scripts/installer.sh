#!/bin/bash

# Function to clone the remote repository
clone_repository() {
  echo "Cloning repository..."
  git clone https://github.com/your-repo/installer.git installer-repo || exit
  cp -r installer-repo/* . || exit
  rm -rf installer-repo
  echo "Repository cloned successfully."
}

# Function to clean the workspace
clean_workspace() {
  echo "Cleaning workspace..."
  rm -rf mern-project
  echo "Workspace cleaned."
}

# Create the workspace directory if it doesn't exist
mkdir -p mern-project

# Navigate to the workspace directory
cd mern-project || exit

# Execute the functions
#clone_repository

# Build and run the Docker Compose services
echo "Building and running Docker Compose services..."
docker-compose up --build

# Clean the workspace
#clean_workspace

