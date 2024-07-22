// tests/logger.test.js
const { logPerformance, logError } = require('../utils/performanceLogger');
const logger = require('../utils/logger');

describe('Logger Utility', () => {
  it('should log a performance metric', () => {
    logger.info = jest.fn();
    logPerformance('Test Performance Metric');
    expect(logger.info).toHaveBeenCalledWith(expect.stringContaining('Test Performance Metric'));
  });

  it('should log an error message', () => {
    logger.error = jest.fn();
    logError('Test Error');
    expect(logger.error).toHaveBeenCalledWith(expect.stringContaining('Test Error'));
  });
});
