const mongoose = require('mongoose');
const connectDB = require('../../utils/connectDB');
const logger = require('../../utils/logger');

jest.mock('mongoose');
jest.mock('../../utils/logger');

describe('Database Connection', () => {
  it('should connect to the database', async () => {
    mongoose.connect.mockResolvedValue({ connection: { host: 'localhost' } });

    await connectDB();
    expect(logger.info).toHaveBeenCalledWith(expect.stringContaining('MongoDB Connected: localhost'));
  });

  it('should log an error if connection fails', async () => {
    mongoose.connect.mockImplementation(() => {
      throw new Error('Connection failed');
    });

    await connectDB();
    expect(logger.error).toHaveBeenCalledWith(expect.stringContaining('Error: Connection failed'));
  });
});
