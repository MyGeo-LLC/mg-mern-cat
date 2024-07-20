const { body, validationResult } = require('express-validator');
const { logPerformance } = require('../utils/performanceLogger');

// Middleware to validate request data
const validateRequest = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      logPerformance('Request validation passed');
      return next();
    }

    logPerformance('Request validation failed');
    res.status(400).json({
      errors: errors.array(),
    });
  };
};

// Validation rules for creating/updating a user
const userValidationRules = () => {
  return [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email is invalid'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
    body('role')
      .optional()
      .isIn(['user', 'admin', 'operator'])
      .withMessage('Invalid role'),
  ];
};

// Validation rules for creating/updating a radio head
const radioHeadValidationRules = () => {
  return [
    body('name').notEmpty().withMessage('Name is required'),
    body('status')
      .isIn(['active', 'inactive'])
      .withMessage('Status must be either active or inactive'),
    body('fileName').notEmpty().withMessage('File name is required'),
    body('settings.incomingVolume')
      .isInt({ min: 0, max: 100 })
      .withMessage('Incoming volume must be between 0 and 100'),
    body('settings.outgoingVolume')
      .isInt({ min: 0, max: 100 })
      .withMessage('Outgoing volume must be between 0 and 100'),
    body('settings.masterVolume')
      .isInt({ min: 0, max: 100 })
      .withMessage('Master volume must be between 0 and 100'),
    body('settings.color').optional().isHexColor().withMessage('Color must be a valid hex code'),
  ];
};

module.exports = {
  validateRequest,
  userValidationRules,
  radioHeadValidationRules,
};
