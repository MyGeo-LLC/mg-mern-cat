const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { logPerformance } = require('../utils/performanceLogger');
const logger = require('../utils/logger');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *           format: email
 *         password:
 *           type: string
 *           description: The password of the user
 *         role:
 *           type: string
 *           enum: [user, admin, operator]
 *           description: The role of the user
 *       required:
 *         - name
 *         - email
 *         - password
 */

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'operator'],
    default: 'user',
  },
}, { timestamps: true });

// Middleware to hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const start = performance.now();
    this.password = await bcrypt.hash(this.password, 10);
    logPerformance('Password hashing', start);
    next();
  } catch (error) {
    logger.error('Error hashing password', { error: error.message });
    next(error);
  }
});

// Method to check if passwords match
userSchema.methods.matchPassword = async function(enteredPassword) {
  try {
    const start = performance.now();
    const isMatch = await bcrypt.compare(enteredPassword, this.password);
    logPerformance('Password comparison', start);
    return isMatch;
  } catch (error) {
    logger.error('Error comparing password', { error: error.message });
    throw new Error('Password comparison failed');
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
