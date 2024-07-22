const RadioHead = require('../models/RadioHead');
const { logPerformance } = require('../utils/performanceLogger');
const { logger } = require('../utils/logger');
const { validationResult } = require('express-validator');

/**
 * @swagger
 * /api/radiohead:
 *   get:
 *     summary: Get all radio heads
 *     tags: [RadioHeads]
 *     responses:
 *       200:
 *         description: List of all radio heads
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RadioHead'
 *       500:
 *         description: Server error
 */
const getAllRadioHeads = async (req, res) => {
  const start = performance.now();
  try {
    const radioHeads = await RadioHead.find();
    const end = performance.now();
    logPerformance('Get all radio heads', start, end);
    res.status(200).json(radioHeads);
  } catch (error) {
    logger.error(`Error getting radio heads: ${error.message}`, { stack: error.stack });
    res.status(500).json({ message: 'Server Error' });
  }
};

/**
 * @swagger
 * /api/radiohead:
 *   post:
 *     summary: Create a new radio head
 *     tags: [RadioHeads]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RadioHead'
 *     responses:
 *       201:
 *         description: Radio head created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RadioHead'
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
const createRadioHead = async (req, res) => {
  const start = performance.now();
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logPerformance('Request validation failed - Create radio head', start, performance.now());
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, status, fileName, settings } = req.body;

  try {
    const newRadioHead = new RadioHead({
      name,
      status,
      fileName,
      settings,
    });

    const radioHead = await newRadioHead.save();
    const end = performance.now();
    logPerformance('Create new radio head', start, end);
    res.status(201).json(radioHead);
  } catch (error) {
    logger.error(`Error creating radio head: ${error.message}`, { stack: error.stack });
    res.status(500).json({ message: 'Server Error' });
  }
};

/**
 * @swagger
 * /api/radiohead/{id}:
 *   put:
 *     summary: Update a radio head
 *     tags: [RadioHeads]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Radio head ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RadioHead'
 *     responses:
 *       200:
 *         description: Radio head updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RadioHead'
 *       400:
 *         description: Validation error
 *       404:
 *         description: Radio head not found
 *       500:
 *         description: Server error
 */
const updateRadioHead = async (req, res) => {
  const start = performance.now();
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logPerformance('Request validation failed - Update radio head', start, performance.now());
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, status, fileName, settings } = req.body;

  try {
    const radioHead = await RadioHead.findById(req.params.id);

    if (!radioHead) {
      logger.warn(`Radio head not found: ${req.params.id}`);
      return res.status(404).json({ message: 'Radio Head not found' });
    }

    radioHead.name = name || radioHead.name;
    radioHead.status = status || radioHead.status;
    radioHead.fileName = fileName || radioHead.fileName;
    radioHead.settings = settings || radioHead.settings;

    const updatedRadioHead = await radioHead.save();
    const end = performance.now();
    logPerformance('Update radio head', start, end);
    res.status(200).json(updatedRadioHead);
  } catch (error) {
    logger.error(`Error updating radio head: ${error.message}`, { stack: error.stack });
    res.status(500).json({ message: 'Server Error' });
  }
};

/**
 * @swagger
 * /api/radiohead/{id}:
 *   delete:
 *     summary: Delete a radio head
 *     tags: [RadioHeads]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Radio head ID
 *     responses:
 *       200:
 *         description: Radio head deleted successfully
 *       404:
 *         description: Radio head not found
 *       500:
 *         description: Server error
 */
const deleteRadioHead = async (req, res) => {
  const start = performance.now();
  try {
    const radioHead = await RadioHead.findById(req.params.id);

    if (!radioHead) {
      logger.warn(`Radio head not found: ${req.params.id}`);
      return res.status(404).json({ message: 'Radio Head not found' });
    }

    await radioHead.remove();
    const end = performance.now();
    logPerformance('Delete radio head', start, end);
    res.status(200).json({ message: 'Radio Head removed' });
  } catch (error) {
    logger.error(`Error deleting radio head: ${error.message}`, { stack: error.stack });
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllRadioHeads,
  createRadioHead,
  updateRadioHead,
  deleteRadioHead,
};
