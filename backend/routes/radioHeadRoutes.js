const express = require('express');
const {
  createRadioHead,
  getRadioHeads,
  getRadioHeadById,
  updateRadioHead,
  deleteRadioHead,
} = require('../controllers/radioHeadController');
const { protect, authorize } = require('../middleware/authMiddleware');
const { validateRequest, radioHeadValidationRules } = require('../middleware/validateRequest');
const router = express.Router();

router.post('/', protect, authorize('admin'), radioHeadValidationRules(), validateRequest(radioHeadValidationRules()), createRadioHead);
router.get('/', protect, getRadioHeads);
router.get('/:id', protect, getRadioHeadById);
router.put('/:id', protect, authorize('admin'), radioHeadValidationRules(), validateRequest(radioHeadValidationRules()), updateRadioHead);
router.delete('/:id', protect, authorize('admin'), deleteRadioHead);

module.exports = router;
