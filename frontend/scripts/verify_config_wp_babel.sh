#!/bin/bash

echo "Checking project structure and dependencies..."

REQUIRED_DIRS=("src" "src/api" "src/utils" "src/redux" "src/redux/actions" "src/redux/reducers" "src/contexts" "tests" "tests/integration")
for dir in "${REQUIRED_DIRS[@]}"; do
  if [ ! -d "$dir" ]; then
    echo "Error: Directory $dir is missing."
    exit 1
  fi
done

REQUIRED_FILES=("package.json" "babel.config.js" "webpack.config.js" "src/index.js" "tests/settings.test.js" "tests/logger.test.js" "tests/authActions.test.js" "tests/authReducer.test.js" "tests/integration/AdminPanel.test.js" "tests/integration/ThemeToggle.test.js")
for file in "${REQUIRED_FILES[@]}"; do
  if [ ! -f "$file" ]; then
    echo "Error: File $file is missing."
    exit 1
  fi
done

REQUIRED_DEPENDENCIES=("jest" "babel-jest" "axios" "react" "redux" "redux-thunk" "webpack" "webpack-cli" "webpack-dev-server")
for dep in "${REQUIRED_DEPENDENCIES[@]}"; do
  if ! npm ls "$dep" >/dev/null 2>&1; then
    echo "Error: Dependency $dep is not installed."
    exit 1
  fi
done

echo "Project structure and dependencies are correctly set up."
