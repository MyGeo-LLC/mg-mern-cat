const express = require('express');
const { userValidationRules, validateRequest } = require('../middlewares/validateRequest'); // Ensure this path is correct
const { loginUser } = require('../controllers/authController');

const router = express.Router();

router.post('/login', userValidationRules(), validateRequest, loginUser);

module.exports = router;
