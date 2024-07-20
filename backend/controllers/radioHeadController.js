const asyncHandler = require('express-async-handler');
const RadioHead = require('../models/RadioHead');
const logger = require('../utils/logger');

/**
 * @swagger
 * /api/radioheads:
 *   post:
 *     summary: Create a new radio head
 *     tags: [Radio Heads]
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
 *       500:
 *         description: Error creating radio head
 */
exports.createRadioHead = asyncHandler(async (req, res) => {
  try {
    const newRadioHead = new RadioHead(req.body);
    await newRadioHead.save();
    logger.info(`Radio head created: ${newRadioHead._id}`);
    res.status(201).json(newRadioHead);
  } catch (error) {
    logger.error(`Error creating radio head: ${error.message}`);
    res.status(500).json({ message: 'Error creating radio head', error });
  }
});

/**
 * @swagger
 * /api/radioheads:
 *   get:
 *     summary: Get all radio heads
 *     tags: [Radio Heads]
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
 *         description: Error fetching radio heads
 */
exports.getRadioHeads = asyncHandler(async (req, res) => {
  try {
    const radioHeads = await RadioHead.find();
    logger.info('Fetched all radio heads');
    res.status(200).json(radioHeads);
  } catch (error) {
    logger.error(`Error fetching radio heads: ${error.message}`);
    res.status(500).json({ message: 'Error fetching radio heads', error });
  }
});

/**
 * @swagger
 * /api/radio
heads/{id}:
 *   get:
 *     summary: Get radio head by ID
 *     tags: [Radio Heads]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The radio head ID
 *     responses:
 *       200:
 *         description: Radio head details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RadioHead'
 *       404:
 *         description: Radio head not found
 *       500:
 *         description: Error fetching radio head
 */
exports.getRadioHeadById = asyncHandler(async (req, res) => {
  try {
    const radioHead = await RadioHead.findById(req.params.id);
    if (radioHead) {
      logger.info(`Fetched radio head by ID: ${req.params.id}`);
      res.json(radioHead);
    } else {
      logger.warn(`Radio head not found by ID: ${req.params.id}`);
      res.status(404).json({ message: 'Radio head not found' });
    }
  } catch (error) {
    logger.error(`Error fetching radio head: ${error.message}`);
    res.status(500).json({ message: 'Error fetching radio head', error });
  }
});

/**
 * @swagger
 * /api/radioheads/{id}:
 *   put:
 *     summary: Update radio head by ID
 *     tags: [Radio Heads]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The radio head ID
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
 *       404:
 *         description: Radio head not found
 *       400:
 *         description: Error updating radio head
 */
exports.updateRadioHead = asyncHandler(async (req, res) => {
  try {
    const updatedRadioHead = await RadioHead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedRadioHead) {
      logger.info(`Radio head updated: ${req.params.id}`);
      res.json(updatedRadioHead);
    } else {
      logger.warn(`Radio head not found for update: ${req.params.id}`);
      res.status(404).json({ message: 'Radio head not found' });
    }
  } catch (error) {
    logger.error(`Error updating radio head: ${error.message}`);
    res.status(400).json({ message: 'Error updating radio head', error });
  }
});

/**
 * @swagger
 * /api/radioheads/{id}:
 *   delete:
 *     summary: Delete radio head by ID
 *     tags: [Radio Heads]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The radio head ID
 *     responses:
 *       200:
 *         description: Radio head deleted successfully
 *       404:
 *         description: Radio head not found
 *       500:
 *         description: Error deleting radio head
 */
exports.deleteRadioHead = asyncHandler(async (req, res) => {
  try {
    const radioHead = await RadioHead.findByIdAndDelete(req.params.id);
    if (radioHead) {
      logger.info(`Radio head deleted: ${req.params.id}`);
      res.json({ message: 'Radio head deleted' });
    } else {
      logger.warn(`Radio head not found for deletion: ${req.params.id}`);
      res.status(404).json({ message: 'Radio head not found' });
    }
  } catch (error) {
    logger.error(`Error deleting radio head: ${error.message}`);
    res.status(500).json({ message: 'Error deleting radio head', error });
  }
});
