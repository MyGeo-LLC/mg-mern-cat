// middlewares/validateRequest.js

const { validationResult } = require('express-validator');
const { logPerformance } = require('../utils/performanceLogger');

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logPerformance('Request validation failed');
    return res.status(400).json({ errors: errors.array() });
  }
  logPerformance('Request validation passed');
  next();
};

module.exports = validateRequest;
