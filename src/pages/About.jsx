import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      
      {/* Hero Section */}
      <motion.div 
        className="relative w-full h-[400px] flex items-center justify-center text-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Background Image */}
        <div className="absolute w-full h-full bg-gradient-to-t from-[#c2c2c2] via-[#707070] to-transparent">
          <img 
            src="https://cdn.pixabay.com/photo/2022/04/04/16/25/business-7111768_1280.jpg"  
            alt="About Us Background"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold">About BYV</h1>
          <p className="text-lg text-gray-300 mt-3">
            Elevating businesses with premium website solutions.
          </p>

          {/* Breadcrumb */}
          <div className="mt-4 bg-white bg-opacity-10 px-4 py-2 inline-block rounded-lg">
            <nav className="text-sm text-gray-300">
              <Link to="/" className="hover:text-gray-400 font-semibold">Home</Link> 
              <span className="mx-2">/</span> 
              <span className="text-gray-400">About Us</span> 
            </nav>
          </div>
        </div>
      </motion.div>

      {/* About Us Section */}
      <motion.div className="container mx-auto px-4 py-12" initial="hidden" animate="visible" variants={fadeIn}>
        
        {/* Who We Are */}
        <motion.div className="bg-[#1A1A1A] p-6 rounded-lg shadow-md border border-gray-700" variants={fadeIn}>
          <h2 className="text-2xl font-bold text-center">Who We Are</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* Left - Image */}
            <div>
              <img src="https://cdn.pixabay.com/photo/2018/02/10/11/42/questions-3143423_1280.jpg" alt="Who We Are" className="w-full h-full object-cover rounded-lg shadow-md"/>
            </div>

            {/* Right - Text */}
            <div className="text-gray-300 text-base leading-relaxed md:text-lg text-justify">
            <p>
              <strong>At BYV – Build Your Vision</strong>, we specialize in crafting exceptional digital experiences
              that empower businesses to thrive online. As a premium website solutions provider, we go beyond just
              design — we deliver strategically built, high-performance websites tailored to your unique goals.
            </p>
            <br />
            <p>
              With a team of passionate developers, creative designers, and strategic thinkers, BYV helps businesses
              build a strong online presence that reflects their brand, engages their audience, and drives real results.
              Whether you're launching your first website or scaling your digital footprint, we're here to bring your
              vision to life with precision, creativity, and care.
            </p>
          </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6" variants={fadeIn}>
          
          {/* Our Mission */}
          <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-md border border-gray-700 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/003/396/738/small_2x/businessman-clicks-on-virtual-screen-mission-photo.jpg" alt="Our Mission" className="w-full h-72 object-cover rounded-md mb-4"/>
            <p className="text-gray-300">
            To empower businesses with high-quality, conversion-focused websites that elevate their brand presence and drive measurable revenue growth.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-md border border-gray-700 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <img src="https://cdn.pixabay.com/photo/2018/01/26/09/07/hand-3108158_1280.jpg" alt="Our Vision" className="w-full h-72 object-cover rounded-md mb-4"/>
            <p className="text-gray-300">
            To be a trusted partner for businesses across the globe, delivering modern, scalable, and result-driven websites that fuel growth and innovation.
            </p>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div className="mt-12 bg-[#1A1A1A] p-6 rounded-lg shadow-md border border-gray-700" variants={fadeIn}>
          <h2 className="text-2xl font-bold text-center">Why Choose Us?</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              "Custom Websites Tailored to Your Business",
              "Fast & Responsive Designs",
              "SEO-Optimized for Better Ranking",
              "Seamless User Experience (UX/UI)",
              "Secure & Scalable Infrastructure",
              "Dedicated Support & Maintenance",
              "Innovative Web Technologies",
              "Proven Track Record in Web Solutions"
            ].map((point, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="text-green-500 w-6 h-6" />
                <p className="text-gray-300">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default About;
