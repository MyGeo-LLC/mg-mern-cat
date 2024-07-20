const winston = require('winston');

// Define the log format
const logFormat = winston.format.combine(
  winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss'
  }),
  winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
);

// Create the logger
const logger = winston.createLogger({
  level: 'info',
  format: logFormat,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

// Stream for morgan
logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};

const logPerformance = (metric) => {
  logger.info(`Performance metric: ${metric}`);
};

const logError = (error) => {
  logger.error(`Error: ${error}`);
};

module.exports = {
  logger,
  logPerformance,
  logError
};
