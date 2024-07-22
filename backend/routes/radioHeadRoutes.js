const express = require('express');
const { validateRequest, radioHeadValidationRules } = require('../middlewares/validateRequest');
const { getRadioHeads, createRadioHead, updateRadioHead, deleteRadioHead } = require('../controllers/radioHeadController');

const router = express.Router();

/**
 * @swagger
 * /api/radiohead:
 *   get:
 *     summary: Get all radio heads
 *     tags: [RadioHeads]
 *     responses:
 *       200:
 *         description: List of radio heads
 *       500:
 *         description: Server error
 */
router.get('/', getRadioHeads);

/**
 * @swagger
 * /api/radiohead:
 *   post:
 *     summary: Create a radio head
 *     tags: [RadioHeads]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               status:
 *                 type: string
 *               fileName:
 *                 type: string
 *               settings:
 *                 type: object
 *                 properties:
 *                   incomingVolume:
 *                     type: number
 *                   outgoingVolume:
 *                     type: number
 *                   masterVolume:
 *                     type: number
 *                   color:
 *                     type: string
 *     responses:
 *       201:
 *         description: Radio head created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/', validateRequest(radioHeadValidationRules()), createRadioHead);

/**
 * @swagger
 * /api/radiohead/{id}:
 *   put:
 *     summary: Update a radio head
 *     tags: [RadioHeads]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Radio head ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               status:
 *                 type: string
 *               fileName:
 *                 type: string
 *               settings:
 *                 type: object
 *                 properties:
 *                   incomingVolume:
 *                     type: number
 *                   outgoingVolume:
 *                     type: number
 *                   masterVolume:
 *                     type: number
 *                   color:
 *                     type: string
 *     responses:
 *       200:
 *         description: Radio head updated successfully
 *       404:
 *         description: Radio head not found
 *       500:
 *         description: Server error
 */
router.put('/:id', validateRequest(radioHeadValidationRules()), updateRadioHead);

/**
 * @swagger
 * /api/radiohead/{id}:
 *   delete:
 *     summary: Delete a radio head
 *     tags: [RadioHeads]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Radio head ID
 *     responses:
 *       200:
 *         description: Radio head deleted successfully
 *       404:
 *         description: Radio head not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteRadioHead);

module.exports = router;
