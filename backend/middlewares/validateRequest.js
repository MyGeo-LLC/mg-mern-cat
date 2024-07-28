// middlewares/validateRequest.js
const { body, validationResult } = require('express-validator');
const { logPerformance } = require('../utils/performanceLogger');

// Validation rules for user
const userValidationRules = () => [
  body('email').isEmail().withMessage('Email is invalid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

// Middleware to validate request data
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logPerformance('Request validation failed');
    return res.status(400).json({ errors: errors.array() });
  }
  logPerformance('Request validation passed');
  next();
};

module.exports = {
  userValidationRules,
  validateRequest
};
