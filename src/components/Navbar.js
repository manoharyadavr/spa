import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-black text-white lg:px-12 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/BYV_logo.png" // Replace with your actual logo path
              alt="BYV Logo"
              className="h-20 w-auto"
            />
            <span className="text-xl font-bold">Build Your Vision.</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8 text-lg">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} className="hover:text-gray-400 transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      >
        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg transition-transform transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            onClick={toggleMobileMenu}
            aria-label="Close Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Mobile Menu Links */}
          <ul className="mt-16 p-6 space-y-6 text-lg">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="block hover:text-gray-600 transition"
                  onClick={toggleMobileMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
