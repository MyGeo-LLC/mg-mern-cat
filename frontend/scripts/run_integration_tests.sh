
#!/bin/bash

echo "Running integration tests..."

npx jest ../tests/integration/AdminPanel.test.js
npx jest ../tests/integration/ThemeToggle.test.js

echo "Integration tests completed."
