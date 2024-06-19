const express = require('express');
const { getRadioHeads } = require('../controllers/radioHeadController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, getRadioHeads);

module.exports = router;
