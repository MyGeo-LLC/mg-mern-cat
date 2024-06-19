const RadioHead = require('../models/RadioHead');

const getRadioHeads = async (req, res) => {
  try {
    const radioHeads = await RadioHead.find();
    res.json(radioHeads);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getRadioHeads };
