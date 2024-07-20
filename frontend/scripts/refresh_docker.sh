#!/bin/bash
# This script cleans up Docker containers, images, networks, and volumes

# Remove all stopped containers
docker container prune -f

# Remove all unused images
docker image prune -a -f

# Remove all unused networks
docker network prune -f

# Remove all unused volumes
docker volume prune -f

# Remove dangling build cache
docker builder prune -f
