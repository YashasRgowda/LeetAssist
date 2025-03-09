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

  const handleAnalyze = async (problemText) => {
    setLoading(true);
    setError('');
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

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      {/* Header with Nike-like styling */}
      <div className="container mx-auto mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-center">
          SOLVE <span className="text-orange-500">IT</span>
        </h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 mb-6"></div>
        <p className="text-xl text-center text-gray-400 max-w-2xl mx-auto">
          Paste your LeetCode problem below and we'll identify the key concepts without giving away the solution.
        </p>
      </div>
      
      {/* Error message */}
      {error && (
        <div className="container mx-auto mb-8">
          <div className="bg-red-900/30 border border-red-500 text-red-400 px-6 py-4 rounded">
            {error}
          </div>
        </div>
      )}
      
      {/* Main content */}
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column - Problem input */}
          <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
            <ProblemInput onAnalyze={handleAnalyze} />
          </div>
          
          {/* Right column - Results */}
          <div className="flex flex-col gap-8">
            {/* Concepts section */}
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <ConceptSuggestions concepts={concepts} loading={loading} />
            </div>
            
            {/* Hints section - only show if there are hints */}
            {hints.length > 0 && (
              <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
                <HintSection hints={hints} />
              </div>
            )}
            
            {/* Resources section - only show if there are resources */}
            {resources.length > 0 && (
              <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
                <ResourceLinks resources={resources} />
              </div>
            )}
            
            {/* Empty state when no results yet */}
            {!loading && concepts.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16 text-gray-500">
                <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
                <p className="text-xl font-bold">READY TO ANALYZE</p>
                <p className="mt-2">Submit a problem to see recommendations</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolver;