import { useState } from 'react';
import ProblemInput from '../components/problem/ProblemInput';
import ConceptSuggestions from '../components/problem/ConceptSuggestions';
import HintSection from '../components/problem/HintSection';
import ResourceLinks from '../components/problem/ResourceLinks';
import { analyzeProblem } from '../utils/api';

const ProblemSolver = () => {
  const [loading, setLoading] = useState(false);
  const [concepts, setConcepts] = useState([]);
  const [hints, setHints] = useState([]);
  const [resources, setResources] = useState([]);
  const [error, setError] = useState('');
  const [problemSubmitted, setProblemSubmitted] = useState(false);

  const handleAnalyze = async (problemText) => {
    setLoading(true);
    setError('');
    setProblemSubmitted(true); // Mark that a problem has been submitted
    
    try {
      // Replace the mock implementation with the actual API call
      const result = await analyzeProblem(problemText);
      setConcepts(result.concepts || []);
      setHints(result.hints || []);
      setResources(result.resources || []);
    } catch (err) {
      console.error('Error analyzing problem:', err);
      setError('Failed to analyze problem. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const hasResults = concepts.length > 0 || hints.length > 0 || resources.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header Section with Geometric Accent */}
      <div className={`relative overflow-hidden ${problemSubmitted ? 'pt-8 pb-4 transition-all duration-500' : 'pt-16 pb-8'}`}>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"></div>
        <div className="absolute -top-20 right-0 w-72 h-72 bg-indigo-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute -top-10 left-0 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className={`text-4xl md:text-6xl font-black tracking-tight text-center mb-4 ${problemSubmitted ? 'md:text-4xl transition-all duration-500' : ''}`}>
            CODE <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">ANALYZER</span>
          </h1>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mb-6"></div>
          <p className={`text-base md:text-xl text-center text-gray-300 max-w-2xl mx-auto ${problemSubmitted ? 'mb-2 text-sm md:text-base transition-all duration-500' : 'mb-6'}`}>
            Paste your LeetCode problem and discover the optimal data structures and algorithms to solve it efficiently.
          </p>
        </div>
      </div>
      
      {/* Main Content Area - Vertical Layout */}
      <div className="container mx-auto px-4 pb-16">
        {/* Error message - Floats at the top if present */}
        {error && (
          <div className="max-w-4xl mx-auto mb-8 transform -translate-y-2">
            <div className="bg-red-900/40 backdrop-blur-sm border border-red-500/50 text-red-200 px-6 py-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Problem Input Section - Always at the top */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className={`bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-xl relative overflow-hidden transition-all duration-300 ${problemSubmitted ? 'transform scale-100' : ''}`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full filter blur-xl -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <h2 className={`text-xl font-bold mb-4 flex items-center transition-all duration-300 ${problemSubmitted ? 'text-lg' : ''}`}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2 text-indigo-400" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Problem Description
              </h2>
              <ProblemInput onAnalyze={handleAnalyze} />
            </div>
          </div>
        </div>
        
        {/* Results Section - Below Problem Input */}
        {hasResults && (
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Concepts Card */}
            {concepts.length > 0 && (
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 shadow-xl relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full filter blur-xl translate-y-20 translate-x-20"></div>
                <div className="relative z-10">
                  <ConceptSuggestions concepts={concepts} loading={loading} />
                </div>
              </div>
            )}
            
            {/* Hints Card - Conditional */}
            {hints.length > 0 && (
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-40 h-40 bg-purple-600/10 rounded-full filter blur-xl -translate-y-20 -translate-x-20"></div>
                <div className="relative z-10">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    Approach Hints
                  </h2>
                  <HintSection hints={hints} />
                </div>
              </div>
            )}
            
            {/* Resources Card - Conditional */}
            {resources.length > 0 && (
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 shadow-xl relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-600/10 rounded-full filter blur-xl translate-y-20 -translate-x-20"></div>
                <div className="relative z-10">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                    Learning Resources
                  </h2>
                  <ResourceLinks resources={resources} />
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Loading State - Centered below problem input when loading */}
        {loading && !hasResults && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 shadow-xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full filter blur-3xl -translate-y-32 translate-x-32"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="relative w-20 h-20">
                    <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-indigo-500/30 animate-pulse"></div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-4 border-indigo-500 animate-spin"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-blue-400">Analyzing Your Problem</h3>
                <p className="text-gray-300 max-w-lg mx-auto">
                  Our AI is identifying the key patterns, data structures, and algorithms needed to solve this problem efficiently...
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Empty State - Only show when no results and not loading */}
        {!loading && !hasResults && !problemSubmitted && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 shadow-xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full filter blur-3xl -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl translate-y-32 -translate-x-32"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-indigo-500/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-blue-400">Ready to Analyze Your Problem</h3>
                <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                  Paste your LeetCode problem description in the editor above and click "Analyze" to get personalized recommendations for data structures and algorithms.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    onClick={() => document.querySelector('textarea')?.focus()}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Add Problem
                  </button>
                  <a 
                    href="https://leetcode.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border border-gray-600 text-gray-300 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    Go to LeetCode
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemSolver;