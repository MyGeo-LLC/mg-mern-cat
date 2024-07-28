const mongoose = require('mongoose');
const { connectDB, closeDB } = require('../utils/connectDB');
const logger = require('../utils/logger');

jest.mock('mongoose');
jest.mock('../utils/logger');

describe('Database Connection', () => {
  it('should connect to the database', async () => {
    mongoose.connect.mockResolvedValueOnce({});
    await connectDB();
    expect(mongoose.connect).toHaveBeenCalled();
  });

  it('should close the database connection', async () => {
    mongoose.connection.close.mockResolvedValueOnce({});
    await closeDB();
    expect(mongoose.connection.close).toHaveBeenCalled();
  });
});
