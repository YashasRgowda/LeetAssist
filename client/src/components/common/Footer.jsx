import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} LeetCode DSA Assistant</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm hover:text-white transition duration-300">
              About
            </a>
            <a href="#" className="text-sm hover:text-white transition duration-300">
              Privacy
            </a>
            <a href="#" className="text-sm hover:text-white transition duration-300">
              Terms
            </a>
            <a href="#" className="text-sm hover:text-white transition duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;