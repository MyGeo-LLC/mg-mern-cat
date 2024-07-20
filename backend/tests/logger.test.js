const { logger, logPerformance, logError } = require('../utils/logger');

describe('Logger Utility', () => {
  it('should log an info message', () => {
    logger.info = jest.fn();
    logger.info('This is an info message');
    expect(logger.info).toHaveBeenCalledWith('This is an info message');
  });

  it('should log a performance metric', () => {
    logger.info = jest.fn();
    logPerformance('Test Performance Metric');
    expect(logger.info).toHaveBeenCalledWith('Performance metric: Test Performance Metric');
  });

  it('should log an error message', () => {
    logger.error = jest.fn();
    logError('Test Error');
    expect(logger.error).toHaveBeenCalledWith('Error: Test Error');
  });
});
