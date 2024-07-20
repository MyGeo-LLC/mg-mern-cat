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

exports.getRadioHeadById = async (req, res) => {
  try {
    const radioHead = await RadioHead.findById(req.params.id);
    if (!radioHead) {
      return res.status(404).json({ message: 'Radio head not found' });
    }
    res.json(radioHead);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching radio head', error });
  }
};

exports.updateRadioHead = async (req, res) => {
  try {
    const updatedRadioHead = await RadioHead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRadioHead) {
      return res.status(404).json({ message: 'Radio head not found' });
    }
    res.json(updatedRadioHead);
  } catch (error) {
    res.status(400).json({ message: 'Error updating radio head', error });
  }
};

exports.deleteRadioHead = async (req, res) => {
  try {
    const radioHead = await RadioHead.findByIdAndDelete(req.params.id);
    if (!radioHead) {
      return res.status(404).json({ message: 'Radio head not found' });
    }
    res.json({ message: 'Radio head deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting radio head', error });
  }
};
