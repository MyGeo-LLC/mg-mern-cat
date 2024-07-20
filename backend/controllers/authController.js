const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const logger = require('../utils/logger');

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Auth user & get token
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
 *         description: User authenticated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 token:
 *                   type: string
 *       401:
 *         description: Invalid email or password
 */

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  logger.info(`Login attempt for email: ${email}`);

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    logger.info(`Login successful for user: ${user._id}`);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    logger.warn(`Login failed for email: ${email}`);
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

module.exports = {
  loginUser,
};
