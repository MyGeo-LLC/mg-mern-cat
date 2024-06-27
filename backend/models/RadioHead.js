const mongoose = require('mongoose');

const radioHeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  status: {
    type: String,
    required: true,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  fileName: {
    type: String,
    required: [true, 'Please add a file name'],
  },
  settings: {
    incomingVolume: { type: Number, default: 50 },
    outgoingVolume: { type: Number, default: 50 },
    masterVolume: { type: Number, default: 50 },
    color: { type: String, default: '#FFFFFF' },
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('RadioHead', radioHeadSchema);
