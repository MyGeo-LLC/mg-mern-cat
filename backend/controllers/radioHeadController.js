const RadioHead = require('../models/RadioHead');

exports.createRadioHead = async (req, res) => {
  try {
    const newRadioHead = new RadioHead(req.body);
    await newRadioHead.save();
    res.status(201).json(newRadioHead);
  } catch (error) {
    res.status(500).json({ message: 'Error creating radio head', error });
  }
};

exports.getRadioHeads = async (req, res) => {
  try {
    const radioHeads = await RadioHead.find();
    res.status(200).json(radioHeads);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching radio heads', error });
  }
};
