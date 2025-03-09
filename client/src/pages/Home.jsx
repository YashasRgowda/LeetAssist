import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Gradient Overlay */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Background" 
            className="w-full h-full object-cover opacity-40" 
          />
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <h1 className="text-7xl font-extrabold tracking-tight mb-2">
              MASTER THE <span className="text-orange-500">CODE</span>
            </h1>
            <p className="text-3xl font-light mb-10 tracking-wide">
              JUST SOLVE IT.
            </p>
            <p className="text-xl mb-12 font-light max-w-2xl">
              Get recommendations on which data structures and algorithms to use for any LeetCode problem. Learn concepts, not just solutions.
            </p>
            <Link
              to="/solve"
              className="inline-block bg-orange-500 text-black py-4 px-12 text-xl font-bold hover:bg-orange-400 transition-colors"
            >
              TRY IT NOW
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-20 text-center">THE ADVANTAGE</h2>
        
        <div className="grid md:grid-cols-3 gap-16">
          <div className="group">
            <div className="h-1 w-16 bg-orange-500 mb-8 group-hover:w-full transition-all duration-300"></div>
            <h3 className="text-2xl font-bold mb-6">CONCEPT IDENTIFICATION</h3>
            <p className="text-gray-400 text-lg">
              Our AI analyzes your problem and identifies the most relevant data structures and algorithms.
            </p>
          </div>
          
          <div className="group">
            <div className="h-1 w-16 bg-orange-500 mb-8 group-hover:w-full transition-all duration-300"></div>
            <h3 className="text-2xl font-bold mb-6">LEARN WHY</h3>
            <p className="text-gray-400 text-lg">
              Understand why certain approaches work better than others for specific problem patterns.
            </p>
          </div>
          
          <div className="group">
            <div className="h-1 w-16 bg-orange-500 mb-8 group-hover:w-full transition-all duration-300"></div>
            <h3 className="text-2xl font-bold mb-6">NO SOLUTIONS</h3>
            <p className="text-gray-400 text-lg">
              We don't give away the answer - we guide your learning so you can solve problems yourself.
            </p>
          </div>
        </div>
      </div>
      
      {/* Final CTA */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">START YOUR JOURNEY</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Join thousands of developers who are mastering algorithms and data structures with our approach.
          </p>
          <Link
            to="/solve"
            className="inline-block bg-black text-white py-4 px-12 text-xl font-bold hover:bg-gray-900 transition-colors"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;