#!/bin/bash

# Log file for the installation process
LOGFILE="mongodb_install.log"
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to log messages with timestamp and color
log_message() {
    echo -e "[$TIMESTAMP] $1" | tee -a "$LOGFILE"
}

# Function to show progress
show_progress() {
    while true
    do
        for i in {1..3}
        do
            echo -n "."
            sleep 0.5
        done
        echo -ne "\r   \r"
    done
}

# Function to stop progress
stop_progress() {
    kill $1
    wait $1 2>/dev/null
    echo -ne "\r"
}

# Function to check if a command exists
command_exists() {
    command -v "$1" &> /dev/null
}

# Function to clean up partial installations
cleanup() {
    log_message "${YELLOW}Cleaning up partial installation...${NC}"
    sudo apt-get remove -y mongodb-org &>> "$LOGFILE"
    sudo apt-get purge -y mongodb-org &>> "$LOGFILE"
    sudo rm -rf /var/log/mongodb
    sudo rm -rf /var/lib/mongodb
    log_message "${GREEN}Cleanup complete.${NC}"
}

# Check if MongoDB is already installed
if command_exists mongod; then
    log_message "${YELLOW}MongoDB is already installed. Exiting...${NC}"
    exit 0
fi

# Check for necessary commands
for cmd in nc wget curl; do
    if ! command_exists $cmd; then
        log_message "${RED}Error: $cmd is not installed.${NC}"
        read -p "Do you want to install $cmd? (y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            sudo apt install -y $cmd
            if [ $? -ne 0 ]; then
                log_message "${RED}Failed to install $cmd. Exiting...${NC}"
                exit 1
            fi
        else
            log_message "${RED}$cmd is required. Exiting...${NC}"
            exit 1
        fi
    fi
done

# Ask for user confirmation before proceeding
read -p "This script will install MongoDB. Do you want to continue? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    log_message "${YELLOW}Installation aborted by user.${NC}"
    exit 1
fi

# Update package list
log_message "Updating package list..."
show_progress &
PROGRESS_PID=$!
sudo apt update &>> "$LOGFILE"
if [ $? -ne 0 ]; then
    stop_progress $PROGRESS_PID
    log_message "${RED}Failed to update package list.${NC}"
    cleanup
    exit 1
fi
stop_progress $PROGRESS_PID
log_message "${GREEN}Package list updated successfully.${NC}"

# Import the MongoDB GPG key
log_message "Importing MongoDB GPG key..."
show_progress &
PROGRESS_PID=$!
if wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add - &>> "$LOGFILE"; then
    stop_progress $PROGRESS_PID
    log_message "${GREEN}MongoDB GPG key imported successfully.${NC}"
else
    stop_progress $PROGRESS_PID
    log_message "${RED}Failed to import MongoDB GPG key with wget. Trying with curl...${NC}"
    show_progress &
    PROGRESS_PID=$!
    if curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add - &>> "$LOGFILE"; then
        stop_progress $PROGRESS_PID
        log_message "${GREEN}MongoDB GPG key imported successfully with curl.${NC}"
    else
        stop_progress $PROGRESS_PID
        log_message "${RED}Failed to import MongoDB GPG key with curl.${NC}"
        cleanup
        exit 1
    fi
fi

# Validate the GPG key
if ! sudo apt-key list | grep -q "MongoDB 4.4 Release Signing Key"; then
    log_message "${RED}GPG key validation failed.${NC}"
    cleanup
    exit 1
fi
log_message "${GREEN}GPG key validated successfully.${NC}"

# Create a MongoDB list file
log_message "Creating MongoDB list file..."
show_progress &
PROGRESS_PID=$!
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list &>> "$LOGFILE"
if [ $? -ne 0 ]; then
    stop_progress $PROGRESS_PID
    log_message "${RED}Failed to create MongoDB list file.${NC}"
    cleanup
    exit 1
fi
stop_progress $PROGRESS_PID
log_message "${GREEN}MongoDB list file created successfully.${NC}"

# Reload the local package database
log_message "Reloading package database..."
show_progress &
PROGRESS_PID=$!
sudo apt update &>> "$LOGFILE"
if [ $? -ne 0 ]; then
    stop_progress $PROGRESS_PID
    log_message "${RED}Failed to reload package database.${NC}"
    cleanup
    exit 1
fi
stop_progress $PROGRESS_PID
log_message "${GREEN}Package database reloaded successfully.${NC}"

# Download and install libssl1.1
log_message "Downloading and installing libssl1.1..."
show_progress &
PROGRESS_PID=$!
wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2_amd64.deb -O libssl1.1.deb &>> "$LOGFILE"
if [ $? -ne 0 ]; then
    stop_progress $PROGRESS_PID
    log_message "${RED}Failed to download libssl1.1.${NC}"
    cleanup
    exit 1
fi
sudo dpkg -i libssl1.1.deb &>> "$LOGFILE"
if [ $? -ne 0 ]; then
    stop_progress $PROGRESS_PID
    log_message "${RED}Failed to install libssl1.1.${NC}"
    cleanup
    exit 1
fi
stop_progress $PROGRESS_PID
log_message "${GREEN}libssl1.1 installed successfully.${NC}"

# Install MongoDB packages
log_message "Installing MongoDB packages..."
show_progress &
PROGRESS_PID=$!
sudo apt install -y mongodb-org &>> "$LOGFILE"
if [ $? -ne 0 ]; then
    stop_progress $PROGRESS_PID
    log_message "${RED}Failed to install MongoDB packages. Retrying...${NC}"
    show_progress &
    PROGRESS_PID=$!
    sudo apt-get install -y mongodb-org &>> "$LOGFILE"
    if [ $? -ne 0 ]; then
        stop_progress $PROGRESS_PID
        log_message "${RED}Failed to install MongoDB packages with apt-get. Please check the log file for details.${NC}"
        cleanup
        exit 1
    fi
    stop_progress $PROGRESS_PID
    log_message "${GREEN}MongoDB packages installed successfully with apt-get.${NC}"
else
    stop_progress $PROGRESS_PID
    log_message "${GREEN}MongoDB packages installed successfully.${NC}"
fi

# Start MongoDB service
log_message "Starting MongoDB service..."
show_progress &
PROGRESS_PID=$!
sudo systemctl start mongod &>> "$LOGFILE"
if [ $? -ne 0 ]; then
    stop_progress $PROGRESS_PID
    log_message "${RED}Failed to start MongoDB service.${NC}"
    cleanup
    exit 1
fi
stop_progress $PROGRESS_PID
log_message "${GREEN}MongoDB service started successfully.${NC}"

# Enable MongoDB to start on boot
log_message "Enabling MongoDB to start on boot..."
show_progress &
PROGRESS_PID=$!
sudo systemctl enable mongod &>> "$LOGFILE"
if [ $? -ne 0 ]; then
    stop_progress $PROGRESS_PID
    log_message "${RED}Failed to enable MongoDB to start on boot.${NC}"
    cleanup
    exit 1
fi
stop_progress $PROGRESS_PID
log_message "${GREEN}MongoDB enabled to start on boot successfully.${NC}"

# Verify MongoDB is running
log_message "Verifying MongoDB service status..."
show_progress &
PROGRESS_PID=$!
sudo systemctl status mongod &>> "$LOGFILE"
if [ $? -ne 0 ]; then
    stop_progress $PROGRESS_PID
    log_message "${RED}MongoDB service is not running.${NC}"
    cleanup
    exit 1
fi
stop_progress $PROGRESS_PID
log_message "${GREEN}MongoDB service is running successfully.${NC}"

log_message "${GREEN}MongoDB installation and setup complete.${NC}"
log_message "${GREEN}You can access the MongoDB shell by running: mongo${NC}"
