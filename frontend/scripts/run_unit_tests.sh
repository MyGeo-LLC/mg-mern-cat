#!/bin/bash

echo "Running unit tests..."

npx jest tests/settings.test.js
npx jest tests/logger.test.js
npx jest tests/authActions.test.js
npx jest tests/authReducer.test.js

echo "Unit tests completed."
