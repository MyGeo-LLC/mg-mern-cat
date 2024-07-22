const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/authController');
const { userValidationRules } = require('../middlewares/validationRules');
const validateRequest = require('../middlewares/validateRequest');

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication routes
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful login
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.post('/login', userValidationRules(), validateRequest, loginUser);

module.exports = router;
