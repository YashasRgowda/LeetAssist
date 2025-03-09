const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  text: {
    type: String,
    required: true
  },
  concepts: [
    {
      name: String,
      description: String,
      rationale: String
    }
  ],
  hints: [String],
  resources: [
    {
      title: String,
      url: String
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('problem', ProblemSchema);