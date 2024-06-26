#!/bin/bash

# Stop and remove all containers
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)

# Remove all images
docker rmi -f $(docker images -q)

# Remove all networks
docker network rm $(docker network ls -q)

# Optionally, remove all volumes
docker volume rm $(docker volume ls -q)

echo "All Docker containers, images, networks, and volumes have been removed."

