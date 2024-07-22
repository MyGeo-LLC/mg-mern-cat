const jwt = require('jsonwebtoken');
const { logError } = require('./performanceLogger');

const generateToken = (id) => {
  try {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
    return token;
  } catch (error) {
    logError(`Token generation failed for user: ${id} - ${error.message}`);
    throw new Error('Token generation failed');
  }
};

module.exports = generateToken;
