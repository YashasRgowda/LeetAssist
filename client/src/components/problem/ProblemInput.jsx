import React, { useState } from 'react';

const ProblemInput = ({ onAnalyze }) => {
  const [problemText, setProblemText] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (problemText.trim()) {
      onAnalyze(problemText);
      setProblemText(''); // Clear the input after submission
      setIsCollapsed(true); // Collapse the input area
    }
  };

  const handleFocus = () => {
    setIsCollapsed(false); // Expand when focused
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`transition-all duration-300 ease-in-out ${isCollapsed ? 'max-h-32' : 'max-h-96'}`}>
        <textarea
          value={problemText}
          onChange={(e) => setProblemText(e.target.value)}
          onFocus={handleFocus}
          placeholder="Paste your LeetCode problem description here..."
          className="w-full bg-gray-900/90 text-white border border-gray-700 rounded-lg p-4 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:outline-none transition-colors resize-y"
          rows={isCollapsed ? 2 : 8}
        ></textarea>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center"
          disabled={!problemText.trim()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
          Analyze
        </button>
      </div>
    </form>
  );
};

export default ProblemInput;