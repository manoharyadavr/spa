import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-slate-800 p-4 px-10 text-white">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://smuzthemes.com/wp-content/uploads/2018/08/dummy-logo-GREEN.png"
             alt="Hospital Logo" className="h-10 w-auto rounded" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-200">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-200">About</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-200">Services</Link>
            </li>
            <li>
              <Link to="/doctors" className="hover:text-blue-200">Doctors</Link>
            </li>
            <li>
              <Link to="/appointments" className="hover:text-blue-200">Appointments</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-200">Contact</Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden focus:outline-none" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      >
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Mobile Menu Links */}
          <ul className="mt-16 p-4 space-y-4">
            <li>
              <Link to="/" className="block hover:text-blue-500" onClick={toggleMobileMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="block hover:text-blue-500" onClick={toggleMobileMenu}>About</Link>
            </li>
            <li>
              <Link to="/services" className="block hover:text-blue-500" onClick={toggleMobileMenu}>Services</Link>
            </li>
            <li>
              <Link to="/doctors" className="block hover:text-blue-500" onClick={toggleMobileMenu}>Doctors</Link>
            </li>
            <li>
              <Link to="/appointments" className="block hover:text-blue-500" onClick={toggleMobileMenu}>Appointments</Link>
            </li>
            <li>
              <Link to="/contact" className="block hover:text-blue-500" onClick={toggleMobileMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
