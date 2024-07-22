const { performance } = require('perf_hooks');
const logger = require('./logger');

const logPerformance = (message) => {
  const time = performance.now();
  logger.info(`${message} - Time: ${time.toFixed(2)}ms`);
};

const logError = (message) => {
  logger.error(message);
};

module.exports = {
  logPerformance,
  logError,
};
