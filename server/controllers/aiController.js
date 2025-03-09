const { analyzeProblem } = require('../services/geminiService');
const Problem = require('../models/Problem');

/**
 * Analyze a problem using Gemini AI
 * @route POST /api/ai/analyze
 * @access Public
 */
exports.analyzeProblem = async (req, res) => {
  try {
    const { problemText } = req.body;
    
    if (!problemText) {
      return res.status(400).json({ msg: 'Problem text is required' });
    }
    
    const analysis = await analyzeProblem(problemText);
    
    // Save to database if user is authenticated
    if (req.user) {
      const problem = new Problem({
        user: req.user.id,
        text: problemText,
        concepts: analysis.concepts,
        hints: analysis.hints,
        resources: analysis.resources
      });
      
      await problem.save();
    }
    
    res.json(analysis);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};