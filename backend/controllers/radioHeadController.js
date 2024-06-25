const RadioHead = require('../models/RadioHead');

exports.getRadioHeads = async (req, res) => {
  const radioHeads = await RadioHead.find();
  res.json(radioHeads);
};
