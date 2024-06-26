const express = require('express');
const { createRadioHead, getRadioHeads } = require('../controllers/radioHeadController'); // Adjust import based on actual controller functions
const router = express.Router();

router.post('/create', createRadioHead); // Ensure this function is correctly defined and imported
router.get('/', getRadioHeads); // Ensure this function is correctly defined and imported

module.exports = router;
