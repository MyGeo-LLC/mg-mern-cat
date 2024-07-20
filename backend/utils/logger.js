const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

const logPerformance = (metric) => {
  logger.info(`Performance metric: ${metric}`);
};

const logError = (error) => {
  logger.error(`Error: ${error}`);
};

module.exports = {
  logger,
  logPerformance,
  logError,
};
