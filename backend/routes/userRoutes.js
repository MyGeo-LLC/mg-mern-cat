const express = require('express');
const { validateRequest, userValidationRules } = require('../middlewares/validateRequest');
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const { logPerformance } = require('../utils/performanceLogger');
const logger = require('../utils/logger');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/', authenticate, authorize('admin'), (req, res, next) => {
  logger.info('Fetching all users', { traceID: req.headers['x-trace-id'] || 'N/A' });
  logPerformance('Get all users');
  getAllUsers(req, res, next);
});

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.get('/:id', authenticate, authorize('admin'), (req, res, next) => {
  logger.info(`Fetching user with ID: ${req.params.id}`, { traceID: req.headers['x-trace-id'] || 'N/A' });
  logPerformance('Get user by ID');
  getUserById(req, res, next);
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Validation error
 */
router.post('/', authenticate, authorize('admin'), userValidationRules(), validateRequest, (req, res, next) => {
  logger.info('Creating a new user', { traceID: req.headers['x-trace-id'] || 'N/A' });
  logPerformance('Create user');
  createUser(req, res, next);
});

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update a user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Validation error
 *       404:
 *         description: User not found
 */
router.put('/:id', authenticate, authorize('admin'), userValidationRules(), validateRequest, (req, res, next) => {
  logger.info(`Updating user with ID: ${req.params.id}`, { traceID: req.headers['x-trace-id'] || 'N/A' });
  logPerformance('Update user');
  updateUser(req, res, next);
});

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User deleted
 *       404:
 *         description: User not found
 */
router.delete('/:id', authenticate, authorize('admin'), (req, res, next) => {
  logger.info(`Deleting user with ID: ${req.params.id}`, { traceID: req.headers['x-trace-id'] || 'N/A' });
  logPerformance('Delete user');
  deleteUser(req, res, next);
});

module.exports = router;
