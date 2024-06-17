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

function Build-DockerImage {
    Write-Host "Building Docker image for packaging..."
    docker build -f Dockerfile.electron -t mern-project-electron .
}

function Run-DockerContainer {
    Write-Host "Running Docker container to build and package application..."
    docker run --rm -v ${PWD}:/app mern-project-electron
}

function Main {
    Install-Docker
    Write-Host "Starting Docker Compose..."
    docker-compose -f docker-compose.yml up -d
    Start-Sleep -Seconds 30  # Wait for the services to be up and running
    Write-Host "Stopping Docker Compose..."
    docker-compose -f docker-compose.yml down
    Build-DockerImage
    Run-DockerContainer

    Write-Host "The application has been packaged successfully. You can find the installer in the 'dist' directory."
    Write-Host "Distribute the installer file to users to install the application on their Windows machines."
}

Main
