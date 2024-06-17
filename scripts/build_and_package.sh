#!/bin/bash

set -e

function check_docker {
    echo "Checking Docker installation..."
    if ! [ -x "$(command -v docker)" ]; then
        echo 'Error: Docker is not installed.' >&2
        exit 1
    fi

    echo "Checking Docker Compose installation..."
    if ! [ -x "$(command -v docker-compose)" ]; then
        echo 'Error: Docker Compose is not installed.' >&2
        exit 1
    fi
}

function build_docker_image {
    echo "Building Docker image for packaging..."
    docker build -f Dockerfile.electron -t mern-project-electron .
}

function run_docker_container {
    echo "Running Docker container to build and package application..."
    docker run --rm -v ${PWD}:/app mern-project-electron
}

function main {
    check_docker
    echo "Starting Docker Compose..."
    docker-compose -f docker-compose.yml up -d
    echo "Waiting for services to start..."
    sleep 30  # Wait for the services to be up and running
    echo "Stopping Docker Compose..."
    docker-compose -f docker-compose.yml down
    build_docker_image
    run_docker_container

    echo "The application has been packaged successfully. You can find the installer in the 'dist' directory."
    echo "Distribute the installer file to users to install the application on their Windows machines."
}

main
