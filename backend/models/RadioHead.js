const mongoose = require('mongoose');

const radioHeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true, enum: ['active', 'inactive'] },
  fileName: { type: String, required: true }
});

module.exports = mongoose.model('RadioHead', radioHeadSchema);
