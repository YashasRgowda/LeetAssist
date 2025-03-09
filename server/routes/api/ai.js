const express = require('express');
const router = express.Router();
const aiController = require('../../controllers/aiController');
const auth = require('../../middleware/auth');

// @route   POST /api/ai/analyze
// @desc    Analyze a problem using AI
// @access  Public (but saves to user history if authenticated)
router.post('/analyze', auth.optional, aiController.analyzeProblem);

module.exports = router;