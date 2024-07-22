const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Settings:
 *       type: object
 *       properties:
 *         incomingVolume:
 *           type: integer
 *           minimum: 0
 *           maximum: 100
 *           description: The incoming volume level
 *         outgoingVolume:
 *           type: integer
 *           minimum: 0
 *           maximum: 100
 *           description: The outgoing volume level
 *         masterVolume:
 *           type: integer
 *           minimum: 0
 *           maximum: 100
 *           description: The master volume level
 *         color:
 *           type: string
 *           pattern: "^#([0-9A-F]{3}){1,2}$"
 *           description: The color in hex code
 *     RadioHead:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the radio head
 *         status:
 *           type: string
 *           enum: [active, inactive]
 *           description: The status of the radio head
 *         fileName:
 *           type: string
 *           description: The file name associated with the radio head
 *         settings:
 *           $ref: '#/components/schemas/Settings'
 *       required:
 *         - name
 *         - status
 *         - fileName
 */

const settingsSchema = new mongoose.Schema({
  incomingVolume: {
    type: Number,
    min: 0,
    max: 100,
  },
  outgoingVolume: {
    type: Number,
    min: 0,
    max: 100,
  },
  masterVolume: {
    type: Number,
    min: 0,
    max: 100,
  },
  color: {
    type: String,
    validate: {
      validator: (v) => /^#([0-9A-F]{3}){1,2}$/i.test(v),
      message: 'Color must be a valid hex code',
    },
  },
});

const radioHeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    required: [true, 'Status is required'],
  },
  fileName: {
    type: String,
    required: [true, 'File name is required'],
  },
  settings: settingsSchema,
}, { timestamps: true });

module.exports = mongoose.model('RadioHead', radioHeadSchema);
