import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section with Gradient Overlay */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/70 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30" 
          />
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-6 py-16 relative z-20">
          <div className="max-w-4xl mx-auto md:mx-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
              MASTER THE <span className="text-indigo-500">CODE</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-light mb-6 md:mb-10 tracking-wide">
              SOLVE. LEARN. EXCEL.
            </p>
            <p className="text-base md:text-xl mb-8 md:mb-12 font-light max-w-2xl text-gray-300">
              Get expert recommendations on optimal data structures and algorithms for any LeetCode problem. Master concepts, patterns and approaches - not just memorize solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/solve"
                className="inline-block bg-indigo-600 text-white py-3 px-8 md:py-4 md:px-12 text-lg md:text-xl font-bold rounded hover:bg-indigo-700 transition-colors text-center"
              >
                START SOLVING
              </Link>
              <Link
                to=""
                className="inline-block border border-gray-600 text-gray-300 py-3 px-8 md:py-4 md:px-12 text-lg md:text-xl font-bold rounded hover:bg-gray-800 transition-colors text-center"
              >
                EXPLORE
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 md:py-24 container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-20 text-center">OUR APPROACH</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
          <div className="group bg-gray-800 p-8 rounded-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">CONCEPT IDENTIFICATION</h3>
            <p className="text-gray-400 text-base md:text-lg text-center">
              Our AI analyzes problems and identifies the most relevant data structures and algorithms for optimal solutions.
            </p>
          </div>
          
          <div className="group bg-gray-800 p-8 rounded-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">LEARN WHY</h3>
            <p className="text-gray-400 text-base md:text-lg text-center">
              Understand why certain approaches work better than others for specific problem patterns and edge cases.
            </p>
          </div>
          
          <div className="group bg-gray-800 p-8 rounded-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">GUIDED LEARNING</h3>
            <p className="text-gray-400 text-base md:text-lg text-center">
              We don't give away solutions - we guide your learning process so you can solve problems independently.
            </p>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-5xl font-bold text-indigo-500 mb-2">500+</p>
              <p className="text-gray-400">Problems Analyzed</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-indigo-500 mb-2">50+</p>
              <p className="text-gray-400">Core Patterns</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-indigo-500 mb-2">10k+</p>
              <p className="text-gray-400">Users</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold text-indigo-500 mb-2">95%</p>
              <p className="text-gray-400">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Final CTA */}
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-500 py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">START YOUR JOURNEY</h2>
          <p className="text-lg md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto">
            Join thousands of developers who are mastering algorithms and data structures with our systematic approach.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/solve"
              className="inline-block bg-white text-indigo-700 py-3 px-8 md:py-4 md:px-12 text-lg md:text-xl font-bold rounded hover:bg-gray-100 transition-colors"
            >
              GET STARTED
            </Link>
            <Link
              to="/login"
              className="inline-block bg-transparent border border-white text-white py-3 px-8 md:py-4 md:px-12 text-lg md:text-xl font-bold rounded hover:bg-white/10 transition-colors"
            >
              SIGN IN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;