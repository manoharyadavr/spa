import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  // Track screen dimensions
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Determine grid layout based on screen width
  const getGridClass = () => {
    if (screenSize.width >= 1024) return "grid-cols-4"; // 1 row
    if (screenSize.width >= 640) return "grid-cols-2"; // 2 rows
    return "grid-cols-1"; // 1 column
  };

  // Update screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="bg-[#98A869]/10 text-[#98A869] p-6 pt-9">
      <div className={`container mx-auto text-center grid gap-8 ${getGridClass()}`}>

        {/* Logo Column */}
        <div className="flex justify-center items-center">
          <img 
            src="/images/nwellnesslogo.svg" 
            alt="N Wellness Logo" 
            className="w-32 h-auto"
          />
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="text-xl font-semibold text-[#98A869] mb-4">Quick Links</h3>
          {["Home", "About", "Services", "Contact"].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase()}`} 
              className="text-[#98A869] hover:text-[#98A869]/70 block mb-2 transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Contact Info Column */}
        <div>
          <h3 className="text-xl font-semibold text-[#98A869] mb-4">Contact</h3>
          <p className="mb-2">277/7, Rd Number 3, UBI Colony</p>
          <p className="mb-2">Aurora Colony, Banjara Hills, Hyderabad</p>
          <p className="mb-2">Telangana 500034</p>
          
          <p className="mb-2">Email: nwellness.in@gmail.com</p>
          <p>Phone: +91 9391803316</p>
        </div>


        {/* Social Media Column */}
        <div>
          <h3 className="text-xl font-semibold text-[#98A869] mb-4">Follow Us</h3>
          <div className="flex flex-col items-center space-y-4">
            <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#98A869]/70 space-x-2 transition">
              <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/nwellness.in/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#98A869]/70 space-x-2 transition">
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
              <span>Instagram</span>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#98A869]/70 space-x-2 transition">
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

      </div>

      {/* Footer Text */}
      <div className="text-center mt-4 border-t border-[#98A869]/20 pt-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} N Wellness. All rights reserved.</p>
          <span className="hidden sm:inline">|</span>
          <p className="text-sm sm:text-base">
            Developed by{" "}
            <a 
              href="https://www.buildyourvision.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#98A869]/70 transition font-medium"
            >
              Build Your Vision
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
