import logger from '../logger';

describe('Logger Module', () => {
  it('should log info messages', () => {
    console.log = jest.fn();

    logger.info('Test info message');

    expect(console.log).toHaveBeenCalledWith('INFO: Test info message');
  });

  it('should log error messages', () => {
    console.error = jest.fn();

    logger.error('Test error message');

    expect(console.error).toHaveBeenCalledWith('ERROR: Test error message');
  });
});
