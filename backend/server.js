const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const corsMiddleware = require('./middlewares/corsMiddleware');
const connectDB = require('./utils/connectDB');
const errorHandler = require('./middlewares/errorHandler');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const radioHeadRoutes = require('./routes/radioHeadRoutes');
const logger = require('./utils/logger');
const swaggerSetup = require('./swagger');
require('dotenv').config(); // Load environment variables

// Initialize express app
const app = express();

// Connect to the database
connectDB();

// Apply CORS middleware
app.use(corsMiddleware);

// Middleware for parsing JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend', 'build')));
app.use(express.static(path.join(__dirname, 'public'))); // Adjust the path as necessary

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/radiohead', radioHeadRoutes);

// Swagger documentation
swaggerSetup(app);

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
