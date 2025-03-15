import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  // Track screen dimensions
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Determine layout based on screen width
  const getGridClass = () => {
    if (screenSize.width >= 1024) return "grid-cols-4"; // 1 row
    if (screenSize.width >= 640) return "grid-cols-2"; // 2 rows
    return "grid-cols-1"; // 1 column
  };

  // Update screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className={`container mx-auto text-center grid gap-8 ${getGridClass()}`}>
        
        {/* Logo Column */}
        <div className="flex justify-center items-center">
          <img src="https://smuzthemes.com/wp-content/uploads/2018/08/dummy-logo-GREEN.png" alt="Hospital Logo" className="w-30 h-auto rounded" />
        </div>

        {/* Links Column */}
        <div>
          <h3 className="text-xl font-semibold text-[#D97706] mb-4">Quick Links</h3>
          <Link to="/" className="text-white hover:text-gray-400 block mb-2">Home</Link>
          <Link to="/services" className="text-white hover:text-gray-400 block mb-2">Services</Link>
          <Link to="/appointments" className="text-white hover:text-gray-400 block mb-2">Appointments</Link>
          <Link to="/contact" className="text-white hover:text-gray-400 block mb-2">Contact</Link>
        </div>

        {/* Address Column */}
        <div>
          <h3 className="text-xl font-semibold text-[#D97706] mb-4">Address</h3>
          <p>123 Health Street</p>
          <p>City, State, 12345</p>
          <p>Email: contact@hospital.com</p>
        </div>

        {/* Social Media Column */}
        <div>
          <h3 className="text-xl font-semibold text-[#D97706] mb-4">Follow Us</h3>
          <div className="flex flex-col items-center space-y-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
             className="flex items-center text-white hover:text-gray-400 space-x-2">
              <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
              <span>Facebook</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-gray-400 space-x-2">
              <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
              <span>Twitter</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-gray-400 space-x-2">
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

      </div>

      {/* Footer Text */}
      <div className="text-center mt-2">
        <p>&copy; 2025 Mani Things. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
