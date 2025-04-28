import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <div className="min-h-screen bg-[#FEDEB8]/5 text-[#98A869]">
      
      {/* Hero Section */}
      <motion.div 
        className="relative w-full h-[450px] flex items-center justify-center text-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Background Image with Gradient Overlay */}
        <div className="absolute w-full h-full">
          <img 
            src="https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  
            alt="Luxury Spa Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#98A869]/60 via-[#98A869]/40 to-[#98A869]/60 backdrop-blur-[2px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1 
            className="text-6xl font-bold text-[#FEDEB8] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About Our N Wellness Studio
          </motion.h1>
          <motion.p 
            className="text-xl text-[#FEDEB8]/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Your journey to holistic well-being starts here
          </motion.p>

          {/* Breadcrumb */}
          <motion.div 
            className="mt-8 bg-white/10 backdrop-blur-md px-8 py-3 inline-block rounded-full border border-[#FEDEB8]/30 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <nav className="text-sm flex items-center space-x-3">
              <Link 
                to="/" 
                className="text-white hover:text-white font-medium transition-colors duration-300 flex items-center"
              >
                <span className="hover:scale-105 transition-transform duration-300">Home</span>
              </Link> 
              <ArrowRight className="w-4 h-4 text-[#FEDEB8]/70" />
              <span className="text-[#FEDEB8] font-semibold">About Us</span> 
            </nav>
          </motion.div>
        </div>
      </motion.div>

      {/* About Us Section */}
      <motion.div 
        className="container mx-auto px-4 py-20" 
        initial="hidden" 
        animate="visible" 
        variants={fadeIn}
      >
        
        {/* Who We Are */}
        <motion.div 
          className="bg-[#FEDEB8]/10 p-12 rounded-3xl shadow-xl border border-[#98A869]/20" 
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-[#98A869]">Who We Are</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left - Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#98A869] to-[#FEDEB8] rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="https://images.pexels.com/photos/3865557/pexels-photo-3865557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Spa Treatment Room" 
                className="relative w-full h-full object-cover rounded-3xl shadow-lg transform group-hover:scale-[1.02] transition duration-700"
              />
            </div>

            {/* Right - Text */}
            <div className="space-y-6 text-justify sm:text-left">
              <p className="text-[#98A869]/90 text-lg leading-relaxed">
                <strong className="text-[#98A869] text-xl">At our N Wellness Studio</strong>, we are dedicated to providing a sanctuary for holistic healing and personal growth. 
                Our team of experienced practitioners brings together traditional wisdom and modern wellness practices to create 
                a truly transformative experience for our clients.
              </p>
              <p className="text-[#98A869]/80 text-lg leading-relaxed">
                We believe that true wellness encompasses mind, body, and spirit. Our approach combines evidence-based therapies 
                with ancient healing traditions to help you achieve optimal health and well-being. Whether you're seeking stress relief, 
                physical healing, or spiritual growth, we're here to support your journey.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Treatments & Experiences */}
        <motion.div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12" variants={fadeIn}>
          
          {/* Signature Treatments */}
          <div className="bg-[#FEDEB8]/10 p-10 rounded-3xl shadow-xl border border-[#98A869]/20 flex flex-col items-center text-center group hover:bg-[#FEDEB8]/20 transition duration-500">
            <div className="w-20 h-20  rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-500">
              <span className="text-4xl"><img src="https://cdn-icons-png.flaticon.com/128/14241/14241172.png" alt="signature treatments icon image" /></span>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-[#98A869]">Signature Treatments</h2>
            <div className="space-y-4">
              <p className="text-[#98A869]/80 text-lg">
                Experience our exclusive range of signature treatments designed to rejuvenate your mind, body, and soul.
              </p>
              <ul className="text-[#98A869]/80 text-left space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-[#98A869] w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Holistic Massage Therapy</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#98A869] w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Detoxifying Body Wraps</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#98A869] w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Facial Rejuvenation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#98A869] w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Aromatherapy Sessions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Wellness Experience */}
          <div className="bg-[#FEDEB8]/10 p-10 rounded-3xl shadow-xl border border-[#98A869]/20 flex flex-col items-center text-center group hover:bg-[#FEDEB8]/20 transition duration-500">
            <div className="w-20 h-20  rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-500">
              <span className="text-4xl"><img src="https://cdn-icons-png.flaticon.com/128/1322/1322236.png" alt="experience icon image" /></span>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-[#98A869]">N Wellness Experience</h2>
            <div className="space-y-4">
              <p className="text-[#98A869]/80 text-lg">
                Immerse yourself in our tranquil environment designed for ultimate relaxation and rejuvenation.
              </p>
              <ul className="text-[#98A869]/80 text-left space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-[#98A869] w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Private Treatment Rooms</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#98A869] w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Relaxation Lounge</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#98A869] w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Steam & Sauna Facilities</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#98A869] w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Refreshment Station</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div 
          className="mt-20 bg-[#FEDEB8]/10 p-12 rounded-3xl shadow-xl border border-[#98A869]/20" 
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-[#98A869]">Why Choose Us?</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {[
              "Expert Practitioners with Years of Experience",
              "Personalized Wellness Programs",
              "Holistic Approach to Healing",
              "State-of-the-Art Facilities",
              "Evidence-Based Therapies",
              "Compassionate Care",
              "Customized Treatment Plans",
              "Supportive Community Environment"
            ].map((point, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 p-2 rounded-xl hover:bg-[#FEDEB8]/20 transition duration-300"
              >
                <CheckCircle className="text-[#98A869] w-6 h-6 mt-1 flex-shrink-0" />
                <p className="text-[#98A869]/80">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div className="mt-20" variants={fadeIn}>
          <h2 className="text-4xl font-bold text-center mb-12 text-[#98A869]">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Williams",
                role: "Wellness Director",
                image: "https://images.pexels.com/photos/5454040/pexels-photo-5454040.jpeg?auto=compress&cs=tinysrgb&w=600",
                bio: "With over 15 years of experience in holistic health, Dr. Williams leads our wellness programs with expertise and compassion."
              },
              {
                name: "Michael Chen",
                role: "Yoga & Meditation Instructor",
                image: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=600",
                bio: "A certified yoga instructor with a background in mindfulness meditation, Michael brings peace and balance to our practice."
              },
              {
                name: "Emma Rodriguez",
                role: "Massage Therapist",
                image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600",
                bio: "Specializing in therapeutic massage, Emma helps clients release tension and restore their body's natural balance."
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="bg-[#FEDEB8]/10 p-8 rounded-3xl shadow-xl border border-[#98A869]/20 text-center group hover:bg-[#FEDEB8]/20 transition duration-500"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 group-hover:scale-110 transition duration-500">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#98A869] to-[#FEDEB8] rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="relative w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-[#98A869]">{member.name}</h3>
                <p className="text-[#98A869]/80 font-medium mb-4">{member.role}</p>
                <p className="text-[#98A869]/70">{member.bio}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default About;
