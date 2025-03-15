import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; // Green tick icons

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      
      {/* Hero Section with Background Image & Masking */}
      <motion.div 
        className="relative w-full h-[400px] flex items-center justify-center text-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Background Image with Masking */}
        <div className="absolute w-full h-full bg-gradient-to-t from-[#F9FAFB] via-[#E5E7EB] to-transparent">
          <img 
            src="https://cdn.pixabay.com/photo/2014/12/10/20/48/laboratory-563423_1280.jpg"  
            alt="About Us Background"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>

        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-[#4A4E69] bg-opacity-40"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl font-bold drop-shadow-md">About Our Hospital</h1>
          <p className="text-lg text-gray-200 mt-3">Delivering excellence in healthcare for over 25 years.</p>

          {/* Breadcrumb Below Hero Text */}
          <div className="mt-4 bg-white bg-opacity-80 px-4 py-2 inline-block rounded-lg shadow-md">
            <nav className="text-sm text-gray-700">
              <Link to="/" className="hover:text-[#D97706] font-semibold">Home</Link> 
              <span className="mx-2">/</span> 
              <span className="text-[#D97706]">About Us</span> 
            </nav>
          </div>
        </div>
      </motion.div>

      {/* About Us Section */}
      <motion.div className="container mx-auto px-4 py-8" initial="hidden" animate="visible" variants={fadeIn}>

        {/* Who We Are Section (Centered Heading Above Image) */}
        <motion.div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-[#E5E7EB]" variants={fadeIn}>
          <h2 className="text-2xl font-bold text-[#4A4E69] text-center">Who We Are</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left Side - Image */}
            <div className="w-full">
              <img src="https://cdn.pixabay.com/photo/2024/06/22/14/45/ai-generated-8846456_1280.png" alt="Who We Are" className="w-full h-full object-cover rounded-lg shadow-md"/>
            </div>

            {/* Right Side - Text */}
            <div>
              <p className="text-[#6C757D]">
                Our hospital has been a leader in patient care for over <strong>25 years</strong>. We are 
                committed to providing <strong>advanced medical treatments</strong> and <strong>personalized healthcare</strong> 
                to our patients. Our state-of-the-art facilities and <strong>world-class doctors</strong> ensure that 
                every patient receives <strong>exceptional treatment</strong>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Our Mission & Our Vision (Centered Headings & Above Images) */}
        <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6" variants={fadeIn}>
          {/* Our Mission */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#E5E7EB] flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-[#4A4E69] mb-4">Our Mission</h2>
            <img src="https://cdn.pixabay.com/photo/2018/07/13/09/33/target-3535311_1280.png" alt="Our Mission" className="w-full h-48 object-cover rounded-md mb-4"/>
            <p className="text-[#6C757D]">
              To enhance lives by delivering <strong>high-quality, compassionate healthcare</strong> through 
              <strong> innovation and excellence</strong>.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#E5E7EB] flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-[#4A4E69] mb-4">Our Vision</h2>
            <img src="https://cdn.pixabay.com/photo/2018/03/17/10/50/vision-3233648_1280.jpg" alt="Our Vision" className="w-full h-48 object-cover rounded-md mb-4"/>
            <p className="text-[#6C757D]">
              To be a globally recognized <strong>leader in healthcare</strong> with a commitment to 
              <strong>medical excellence, research, and patient care</strong>.
            </p>
          </div>
        </motion.div>

        {/* Facilities Section */}
        <motion.div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-[#E5E7EB]" variants={fadeIn}>
          <h2 className="text-2xl font-bold text-[#4A4E69] text-center">World-Class Facilities</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "24/7 Emergency & Trauma Center",
              "State-of-the-art Operation Theaters",
              "Modern ICUs & Critical Care Units",
              "Fully Equipped Diagnostic Centers",
              "Advanced Radiology & Imaging",
              "Specialized Maternity & Pediatric Care",
              "Rehabilitation & Physiotherapy Units",
              "Private & Luxury Patient Rooms",
              "In-House Pharmacy & Labs"
            ].map((facility, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="text-green-500 w-6 h-6" />
                <p className="text-[#6C757D]">{facility}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
