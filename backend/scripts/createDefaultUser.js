const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const connectDB = require('../utils/connectDB');
const logger = require('../utils/logger');

const createDefaultUser = async () => {
  await connectDB();

  const email = 'admin@example.com';
  const password = 'password123';
  const name = 'Admin User';

  const userExists = await User.findOne({ email });

  if (userExists) {
    logger.info('Default user already exists');
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    logger.info('Default user created');
  }

  mongoose.connection.close();
};

createDefaultUser().catch((error) => {
  logger.error(`Error creating default user: ${error.message}`);
  mongoose.connection.close();
});
