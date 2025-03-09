const ConceptSuggestions = ({ concepts, loading }) => {
  if (loading) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">ANALYZING...</h2>
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-800 rounded w-1/3"></div>
          <div className="h-20 bg-gray-800 rounded"></div>
          <div className="h-20 bg-gray-800 rounded"></div>
          <div className="h-20 bg-gray-800 rounded"></div>
        </div>
      </div>
    );
  }

  if (!concepts || concepts.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">RECOMMENDED CONCEPTS</h2>
      <div className="space-y-6">
        {concepts.map((concept, index) => (
          <div key={index} className="border-t border-gray-700 pt-4">
            <div className="flex items-start">
              <div className="bg-orange-500 text-black font-bold px-3 py-1 mr-3">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="font-bold text-xl">{concept.name}</h3>
            </div>
            <p className="text-gray-400 mt-3">{concept.description}</p>
            <div className="mt-4 pl-4 border-l border-orange-500">
              <p className="text-white">
                <span className="font-bold text-orange-500">WHY THIS WORKS:</span> {concept.rationale}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConceptSuggestions;