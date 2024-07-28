const User = require('../models/User');
const { logPerformance } = require('../utils/performanceLogger');
const logger = require('../utils/logger');

/**
 * @swagger
 * components:
 *   responses:
 *     UnauthorizedError:
 *       description: Access token is missing or invalid
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: 'Unauthorized'
 *     ValidationError:
 *       description: Validation errors occurred
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               errors:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     msg:
 *                       type: string
 *                     param:
 *                       type: string
 *                     location:
 *                       type: string
 *     ServerError:
 *       description: Internal server error
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: 'Internal server error'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         email:
 *           type: string
 *           description: User email
 *         password:
 *           type: string
 *           description: User password
 *         name:
 *           type: string
 *           description: User name
 */

/**
 * Get all users
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware function
 */
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    logPerformance('Fetched all users');
    res.json(users);
  } catch (error) {
    logger.error('Fetching users failed', { error: error.message, traceID: req.headers['x-trace-id'] || 'N/A' });
    next(error);
  }
};

/**
 * Get user by ID
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware function
 */
const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    logPerformance('Fetched user by ID');
    res.json(user);
  } catch (error) {
    logger.error('Fetching user by ID failed', { error: error.message, traceID: req.headers['x-trace-id'] || 'N/A' });
    next(error);
  }
};

/**
 * Create a new user
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware function
 */
const createUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    logPerformance('Created new user');
    res.status(201).json(user);
  } catch (error) {
    logger.error('Creating user failed', { error: error.message, traceID: req.headers['x-trace-id'] || 'N/A' });
    next(error);
  }
};

/**
 * Update user
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware function
 */
const updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    logPerformance('Updated user');
    res.json(user);
  } catch (error) {
    logger.error('Updating user failed', { error: error.message, traceID: req.headers['x-trace-id'] || 'N/A' });
    next(error);
  }
};

/**
 * Delete user
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware function
 */
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    logPerformance('Deleted user');
    res.json({ message: 'User deleted' });
  } catch (error) {
    logger.error('Deleting user failed', { error: error.message, traceID: req.headers['x-trace-id'] || 'N/A' });
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
