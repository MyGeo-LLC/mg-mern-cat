const express = require('express');
const { body } = require('express-validator');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, [
  body('email').optional().isEmail().withMessage('Enter a valid email'),
  body('password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('password').optional().matches(/\d/).withMessage('Password must contain a number')
], updateUserProfile);

module.exports = router;
