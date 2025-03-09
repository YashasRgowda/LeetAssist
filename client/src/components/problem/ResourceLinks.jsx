import React from 'react';

const ResourceLinks = ({ resources }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">LEARN MORE</h2>
      
      {resources.length === 0 ? (
        <p className="text-gray-400">No resources available for this problem yet.</p>
      ) : (
        <ul className="space-y-4">
          {resources.map((resource, index) => (
            <li key={index} className="group">
              <a 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">{resource.title}</h3>
                    <p className="text-gray-400 mt-1">{resource.description}</p>
                  </div>
                  <div className="text-orange-500 group-hover:translate-x-1 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResourceLinks;