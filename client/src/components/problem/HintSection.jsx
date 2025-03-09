import React from 'react';

const HintSection = ({ hints }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">APPROACH HINTS</h2>
      
      {hints.length === 0 ? (
        <p className="text-gray-400">No hints available for this problem yet.</p>
      ) : (
        <ul className="space-y-4">
          {hints.map((hint, index) => (
            <li key={index} className="border-l-2 border-orange-500 pl-4 py-1">
              <p className="text-white">{hint}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HintSection;