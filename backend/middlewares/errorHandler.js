const { logError, logPerformance } = require('../utils/performanceLogger');
const logger = require('../utils/logger');

/**
 * Error handling middleware
 * @param {Object} err - Error object
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware function
 */
const errorHandler = (err, req, res, next) => {
  const startTime = performance.now();

  // Log the error details
  logger.error(`Error: ${err.message}`, { stack: err.stack });

  // Requirements tracing
  logger.info(`TraceID: ${req.headers['x-trace-id'] || 'N/A'}`);

  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });

  const endTime = performance.now();
  logPerformance('Error handling middleware executed', startTime, endTime);
};

module.exports = errorHandler;
