#!/bin/bash

# Define directories and files to remove
dirs_to_remove=(
  "node_modules"
  "dist"
  ".cache"
  "coverage"
)
files_to_remove=(
  "yarn.lock"
  "package-lock.json"
  ".DS_Store"
  "npm-debug.log"
)

# Remove directories
for dir in "${dirs_to_remove[@]}"; do
  if [ -d "$dir" ]; then
    echo "Removing directory: $dir"
    rm -rf "$dir"
  else
    echo "Directory not found: $dir"
  fi
done

# Remove files
for file in "${files_to_remove[@]}"; do
  if [ -f "$file" ]; then
    echo "Removing file: $file"
    rm -f "$file"
  else
    echo "File not found: $file"
  fi
done

echo "Clean-up completed."
