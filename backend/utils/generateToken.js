const jwt = require('jsonwebtoken');
const { logPerformance, logError } = require('../utils/performanceLogger');

/**
 * Generate JWT Token
 * @param {string} id - User ID
 * @returns {string} - JWT Token
 */
const generateToken = (id) => {
  try {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
    logPerformance(`Token generated for user: ${id}`);
    return token;
  } catch (error) {
    logError(`Token generation failed for user: ${id} - ${error.message}`);
    throw new Error('Token generation failed');
  }
};

module.exports = generateToken;
