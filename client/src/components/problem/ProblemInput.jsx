import { useState } from 'react';

const ProblemInput = ({ onAnalyze }) => {
  const [problem, setProblem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (problem.trim()) {
      onAnalyze(problem);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">ENTER YOUR PROBLEM</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-4 bg-gray-800 border border-gray-700 rounded-none text-white h-64 focus:outline-none focus:ring-1 focus:ring-orange-500 placeholder-gray-500"
          placeholder="Paste your LeetCode problem description here..."
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-6 bg-orange-500 text-black py-3 px-8 font-bold text-lg hover:bg-orange-400 transition-colors focus:outline-none w-full md:w-auto"
        >
          ANALYZE
        </button>
      </form>
    </div>
  );
};

export default ProblemInput;