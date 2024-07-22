const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { logPerformance } = require('../utils/performanceLogger');
const logger = require('../utils/logger');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         email:
 *           type: string
 *           description: User email
 *         password:
 *           type: string
 *           description: User password
 *         name:
 *           type: string
 *           description: User name
 */

/**
 * Login user
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware function
 */
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    logger.info('User logged in', { traceID: req.headers['x-trace-id'] || 'N/A' });
    res.json({ token });
  } catch (error) {
    logger.error('Login failed', { error: error.message, traceID: req.headers['x-trace-id'] || 'N/A' });
    next(error);
  }
};

module.exports = {
  loginUser,
};
