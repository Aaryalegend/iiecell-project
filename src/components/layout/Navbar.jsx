import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import wceLogo from '/assets/wcelogo.png';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container-custom mx-auto flex justify-between items-center py-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={wceLogo} alt="Walchand Logo" className="h-12 w-12" /> </Link>
        <Link to="/" className="flex flex-col items-start space-y-0 mr-4">
          <span className="text-xl font-semibold text-gray-800 leading-tight">Walchand</span>
          <span className="text-xl font-semibold text-gray-800 leading-tight">Engineering and Innovation Council</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-nowrap items-center space-x-3 lg:space-x-6 xl:space-x-4">
          <Link
            to="/"
            className="whitespace-nowrap text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 px-2 py-1 rounded-full hover:bg-indigo-50"
          >
            Home
          </Link>
          <Link
            to="/programs"
            className="whitespace-nowrap text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 px-2 py-1 rounded-full hover:bg-indigo-50"
          >
            Programs
          </Link>
          <Link
            to="/startups"
            className="whitespace-nowrap text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 px-2 py-1 rounded-full hover:bg-indigo-50"
          >
            Startups
          </Link>
          <Link
            to="/resources"
            className="whitespace-nowrap text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 px-2 py-1 rounded-full hover:bg-indigo-50"
          >
            Resources
          </Link>
          <Link
            to="/events"
            className="whitespace-nowrap text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 px-2 py-1 rounded-full hover:bg-indigo-50"
          >
            Events
          </Link>
          <Link
            to="/about"
            className="whitespace-nowrap text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 px-2 py-1 rounded-full hover:bg-indigo-50"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="whitespace-nowrap text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 px-2 py-1 rounded-full hover:bg-indigo-50"
          >
            Contact
          </Link>
        </nav>

        {/* Apply Now Button */}
        <Link to="/apply" className="hidden md:block">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
            <div className="px-8 py-2 font-bold bg-white rounded-full relative group transition duration-200 text-black hover:bg-transparent hover:text-white">
              Apply Now
            </div>
          </button>
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
            <Link to="/apply" className="mt-4">
              <button className="w-full p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                <div className="px-8 py-2 bg-white rounded-full relative group transition duration-200 text-black hover:bg-transparent">
                  Apply Now
                </div>
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

{/*
  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Border Magic
  </span>
</button> */}