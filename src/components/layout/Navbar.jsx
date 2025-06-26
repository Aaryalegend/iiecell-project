import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container-custom mx-auto flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-600">IIE</span>
          <span className="text-xl font-semibold text-gray-800">Cell</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link to="/programs" className="text-gray-700 hover:text-blue-600 font-medium">Programs</Link>
          <Link to="/startups" className="text-gray-700 hover:text-blue-600 font-medium">Startups</Link>
          <Link to="/resources" className="text-gray-700 hover:text-blue-600 font-medium">Resources</Link>
          <Link to="/events" className="text-gray-700 hover:text-blue-600 font-medium">Events</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
        </nav>

        {/* Apply Now Button */}
        <Link to="/apply" className="hidden md:block btn-primary">
          Apply Now
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-lg pb-4">
          <nav className="flex flex-col space-y-3 px-4 py-2">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium py-2">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium py-2">About Us</Link>
            <Link to="/programs" className="text-gray-700 hover:text-blue-600 font-medium py-2">Programs</Link>
            <Link to="/startups" className="text-gray-700 hover:text-blue-600 font-medium py-2">Startups</Link>
            <Link to="/resources" className="text-gray-700 hover:text-blue-600 font-medium py-2">Resources</Link>
            <Link to="/events" className="text-gray-700 hover:text-blue-600 font-medium py-2">Events</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium py-2">Contact</Link>
            <Link to="/apply" className="btn-primary text-center mt-4">Apply Now</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
