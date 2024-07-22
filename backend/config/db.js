const mongoose = require('mongoose');
const { logger } = require('./logger');

/**
 * @description Connect to MongoDB
 * @method connectDB
 * @returns {Promise<void>}
 */
const connectDB = async () => {
  try {
    const start = performance.now();
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const end = performance.now();
    logger.info(`MongoDB Connected: ${conn.connection.host} - Time: ${(end - start).toFixed(2)}ms`);
  } catch (error) {
    logger.error(`Error connecting to MongoDB: ${error.message}`, { stack: error.stack });
    process.exit(1);
  }
};

/**
 * @description Close the MongoDB connection
 * @method closeDB
 * @returns {Promise<void>}
 */
const closeDB = async () => {
  try {
    const start = performance.now();
    await mongoose.connection.close();
    const end = performance.now();
    logger.info(`MongoDB connection closed - Time: ${(end - start).toFixed(2)}ms`);
  } catch (error) {
    logger.error(`Error closing MongoDB connection: ${error.message}`, { stack: error.stack });
  }
};

module.exports = {
  connectDB,
  closeDB,
};
