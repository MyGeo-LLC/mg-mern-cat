const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dpi: { type: Number, default: 150 },
  resolution: {
    width: { type: Number, default: 1920 },
    height: { type: Number, default: 1080 },
  },
});

module.exports = mongoose.model('User', userSchema);
