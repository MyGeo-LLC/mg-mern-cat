#!/bin/bash

# Define variables
MONGO_CONTAINER_NAME="mongo"
DB_NAME="mydatabase"
DB_USER="root"
DB_PASS="example"
DEFAULT_USER_NAME="Test User"
DEFAULT_USER_EMAIL="testuser@example.com"
DEFAULT_USER_PASS="password123"
MONGO_INIT_SCRIPT="mongo-init.js"

# Generate hashed password
echo "Generating hashed password..."
HASHED_PASSWORD=$(node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('$DEFAULT_USER_PASS', 10, function(err, hash) { if (err) throw err; console.log(hash); });")

# Ensure the script is running as a user with sudo privileges
if [[ $EUID -ne 0 ]]; then
   echo "This script must be run as root or with sudo privileges" 
   exit 1
fi

# Install MongoDB shell if not already installed
echo "Checking MongoDB shell installation..."
if ! command -v mongo &> /dev/null
then
    echo "MongoDB shell not found. Installing MongoDB shell..."
    wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl1.1/libssl1.1_1.1.1f-1ubuntu2.16_amd64.deb
    sudo dpkg -i libssl1.1_1.1.1f-1ubuntu2.16_amd64.deb
    sudo apt-get update
    sudo apt-get install -y mongodb-org-shell
else
    echo "MongoDB shell is already installed."
fi

# Find the IP address of the MongoDB container
echo "Finding MongoDB container IP address..."
CONTAINER_IP=$(docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $MONGO_CONTAINER_NAME)
if [ -z "$CONTAINER_IP" ]; then
    echo "Error: MongoDB container not found."
    exit 1
fi
echo "MongoDB container IP address: $CONTAINER_IP"

# Run MongoDB shell in Docker container to insert default user
echo "Connecting to MongoDB and inserting default user..."
docker run -it --rm --network host mongo mongo --host $CONTAINER_IP -u $DB_USER -p $DB_PASS --authenticationDatabase admin <<EOF
use $DB_NAME
db.users.insertOne({
  name: "$DEFAULT_USER_NAME",
  email: "$DEFAULT_USER_EMAIL",
  password: "$HASHED_PASSWORD",
  role: "user"
})
db.users.find({ email: "$DEFAULT_USER_EMAIL" }).pretty()
EOF

echo "Default user inserted successfully."

