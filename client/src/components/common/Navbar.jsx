import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">LeetCode DSA Assistant</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-indigo-200">Home</Link>
          <Link to="/solve" className="hover:text-indigo-200">Solve</Link>
          <Link to="/dashboard" className="hover:text-indigo-200">Dashboard</Link>
          <Link to="/login" className="hover:text-indigo-200">Login</Link>
          <Link to="/register" className="hover:text-indigo-200">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;