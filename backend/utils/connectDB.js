const mongoose = require('mongoose');
const logger = require('./logger');

const connectDB = async () => {
  try {
    console.log('MongoDB URI:', process.env.MONGO_URI); // Add this line to debug
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
