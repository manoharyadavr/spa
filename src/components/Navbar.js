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
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/images/nwellnesslogo.svg"
                alt="N Wellness Logo"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="relative text-[#98A869] font-medium hover:text-[#98A869]/80 transition-colors duration-200 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FEDEB8] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Link
                to="/services"
                className="ml-4 px-6 py-2 bg-[#98A869] text-white rounded-full hover:bg-[#98A869]/90 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-[#98A869] hover:bg-[#FEDEB8]/20 transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      >
        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transition-transform duration-300 transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              className="p-2 rounded-md text-[#98A869] hover:bg-[#FEDEB8]/20 transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label="Close Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="px-6 py-4">
            <ul className="space-y-4">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="block py-2 text-[#98A869] font-medium hover:text-[#98A869]/80 transition-colors duration-200"
                    onClick={toggleMobileMenu}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                to="/services"
                className="block w-full text-center px-6 py-3 bg-[#98A869] text-white rounded-full hover:bg-[#98A869]/90 transition-colors duration-200 shadow-sm"
                onClick={toggleMobileMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
