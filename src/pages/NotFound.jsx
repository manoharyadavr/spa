import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-[#FEDEB8]/5 flex items-center justify-center px-4 py-20">
      <div className="text-center">
        <motion.h1 
          className="text-6xl sm:text-8xl font-bold text-[#98A869] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          404
        </motion.h1>
        <motion.h2 
          className="text-2xl sm:text-3xl font-semibold text-[#98A869]/80 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Page Not Found
        </motion.h2>
        <motion.p 
          className="text-[#98A869]/60 mb-8 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/">
            <button className="px-6 py-3 bg-[#98A869] text-white rounded-full hover:bg-[#98A869]/90 transition-all duration-300 shadow-lg hover:shadow-xl">
              Return Home
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
