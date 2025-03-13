import React from 'react';

const ConceptSuggestions = ({ concepts, loading }) => {
  if (loading) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold">ANALYZING</h2>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
        <div className="animate-pulse space-y-4">
          <div className="h-24 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg"></div>
          <div className="h-24 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg"></div>
          <div className="h-24 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg"></div>
        </div>
      </div>
    );
  }

  if (!concepts || concepts.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold relative">
          RECOMMENDED CONCEPTS
          <div className="absolute -bottom-2 left-0 h-1 w-12 bg-indigo-500"></div>
        </h2>
        <div className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
          {concepts.length} found
        </div>
      </div>
      
      <div className="grid gap-4">
        {concepts.map((concept, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
          >
            <div className="flex">
              {/* Left sidebar with number */}
              <div className="w-12 md:w-16 flex-shrink-0 bg-indigo-600 flex items-center justify-center p-4">
                <span className="font-mono font-bold text-xl text-white">{String(index + 1).padStart(2, '0')}</span>
              </div>
              
              {/* Main content */}
              <div className="flex-1 p-4 md:p-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="font-bold text-lg md:text-xl text-white">{concept.name}</h3>
                  
                  {/* Complexity badges - horizontal on desktop, stacked on mobile */}
                  {(concept.timeComplexity || concept.spaceComplexity) && (
                    <div className="flex flex-wrap gap-2 text-xs">
                      {concept.timeComplexity && (
                        <div className="px-2 py-1 bg-indigo-900/60 text-indigo-300 rounded">
                          Time: {concept.timeComplexity}
                        </div>
                      )}
                      {concept.spaceComplexity && (
                        <div className="px-2 py-1 bg-blue-900/60 text-blue-300 rounded">
                          Space: {concept.spaceComplexity}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <p className="text-gray-300 mt-2 md:mt-3 text-sm md:text-base">
                  {concept.description}
                </p>
                
                <div className="mt-4 bg-gray-800/50 p-3 rounded border-l-2 border-indigo-500">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-4 h-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-indigo-400">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.503.204A6.5 6.5 0 117.95 3.83L6.927 5.62a1.453 1.453 0 001.91 2.02l.12.047a1.394 1.394 0 001.87-1.423l-.007-1.8v-.028A1.338 1.338 0 0012.99 3.58l.6.16a1.415 1.415 0 01.688 1.893L12.569 8.5h.001a1.367 1.367 0 01-1.556.822l-.158-.039a1.348 1.348 0 01-1.1-1.533l.108-.586a1.39 1.39 0 01.744-1.041 3.5 3.5 0 00-3.159 5.157l5.946 9.233a6.476 6.476 0 003.103-10.341z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-bold text-indigo-400 text-sm">WHY THIS WORKS</span>
                  </div>
                  <p className="text-white text-sm md:text-base">
                    {concept.rationale}
                  </p>
                </div>
                
                {/* Tags as pills */}
                {concept.tags && concept.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {concept.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConceptSuggestions;