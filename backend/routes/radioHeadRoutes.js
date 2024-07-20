// Path: backend/routes/radioHeadRoutes.js
const express = require('express');
const {
  createRadioHead,
  getRadioHeads,
  getRadioHeadById,
  updateRadioHead,
  deleteRadioHead,
} = require('../controllers/radioHeadController');
const { protect, authorize } = require('../middleware/authMiddleware');
const { validateRequest, radioHeadValidationRules } = require('../middleware/validateRequest');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: RadioHeads
 *   description: Radio head management
 */

/**
 * @swagger
 * /api/radioheads:
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
 */
router.get('/', protect, authorize('admin', 'operator'), getRadioHeads);

/**
 * @swagger
 * /api/radioheads/{id}:
 *   get:
 *     summary: Get radio head by ID
 *     tags: [RadioHeads]
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
 */
router.get('/:id', protect, authorize('admin', 'operator'), getRadioHeadById);

/**
 * @swagger
 * /api/radioheads:
 *   post:
 *     summary: Create a new radio head
 *     tags: [RadioHeads]
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
 *         description: Bad request
 */
router.post('/', protect, authorize('admin'), validateRequest(radioHeadValidationRules()), createRadioHead);

/**
 * @swagger
 * /api/radioheads/{id}:
 *   put:
 *     summary: Update radio head by ID
 *     tags: [RadioHeads]
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
 *         description: Bad request
 */
router.put('/:id', protect, authorize('admin'), validateRequest(radioHeadValidationRules()), updateRadioHead);

/**
 * @swagger
 * /api/radioheads/{id}:
 *   delete:
 *     summary: Delete radio head by ID
 *     tags: [RadioHeads]
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
 *         description: Internal server error
 */
router.delete('/:id', protect, authorize('admin'), deleteRadioHead);

module.exports = router;
