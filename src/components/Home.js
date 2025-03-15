import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};


// Inline SVG Icons for Services
const serviceIcons = {
  "General Checkups": (
    <svg className="w-12 h-12 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
      <line x1="9" y1="9" x2="9.01" y2="9"></line>
      <line x1="15" y1="9" x2="15.01" y2="9"></line>
    </svg>
  ),
  "Emergency Care": (
    <svg className="w-12 h-12 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="8" rx="2"></rect>
      <line x1="12" y1="2" x2="12" y2="8"></line>
      <line x1="12" y1="16" x2="12" y2="22"></line>
    </svg>
  ),
  "Surgery": (
    <svg className="w-12 h-12 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 12V2M7 12V2"></path>
      <rect x="3" y="12" width="18" height="10" rx="2"></rect>
    </svg>
  ),
  "Pediatrics": (
    <svg className="w-12 h-12 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
      <line x1="9" y1="9" x2="9.01" y2="9"></line>
      <line x1="15" y1="9" x2="15.01" y2="9"></line>
    </svg>
  ),
  "Cardiology": (
    <svg className="w-12 h-12 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21C12 21 4 13 4 7.5A4.5 4.5 0 0112 3a4.5 4.5 0 018 4.5C20 13 12 21 12 21z"></path>
    </svg>
  ),
  "Orthopedics": (
    <svg className="w-12 h-12 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2s4 4 4 10-4 10-4 10"></path>
      <path d="M12 2s-4 4-4 10 4 10 4 10"></path>
      <path d="M10 12h4"></path>
    </svg>
  )
};

// Doctors Data
const doctors = [
  { name: "Dr. John Doe", specialty: "Cardiologist", img: "https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Dr. Sarah Smith", specialty: "Pediatrician", img: "https://images.pexels.com/photos/28123670/pexels-photo-28123670/free-photo-of-paramedics-with-stethoscope-standing-in-front-of-an-open-ambulance.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { name: "Dr. Alex Johnson", specialty: "Orthopedic Surgeon", img: "https://images.pexels.com/photos/5214955/pexels-photo-5214955.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

// Services Data
const services = [
  "General Checkups",
  "Emergency Care",
  "Surgery",
  "Pediatrics",
  "Cardiology",
  "Orthopedics"
];

const Home = () => {
  // Track screen width to adjust animation speed
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screen width on window resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set animation duration based on screen width
  const animationDuration = screenWidth < 640 ? 20 : screenWidth < 1024 ? 30 : 40;

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Hero Section */}
<motion.div 
  initial={{ opacity: 0, y: -50 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  transition={{ duration: 1 }}
  className="relative w-full h-[500px] flex items-center justify-center text-center"
>
  {/* Background Image */}
  <img 
    src="https://cdn.pixabay.com/photo/2017/05/29/20/46/hospital-2354845_1280.jpg"  // Change this to your image path
    alt="Hospital Background"
    className="absolute w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-55"></div>

  {/* Hero Content */}
  <div className="relative z-10 flex flex-col items-center justify-center p-6 shadow-md">
    <h1 className="text-5xl font-bold text-[#ffffff] drop-shadow-md">Your Health, Our Priority</h1>
    <p className="text-lg text-[#CDD7CC] mt-3">Providing compassionate and high-quality healthcare services.</p>
    <Link to="/appointments">
      <motion.button 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-3 bg-[#FF5557] text-white font-bold rounded-lg hover:bg-[#60B240] transition shadow-md"
      >
        Book an Appointment
      </motion.button>
    </Link>
  </div>
</motion.div>


      {/* About Us Section */}
<motion.div className="container mx-auto px-4 py-8" initial="hidden" animate="visible" variants={fadeIn}>

{/* Who We Are Section (Centered Heading Above Image) */}
<motion.div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-[#E5E7EB]" variants={fadeIn}>
<h2 className="text-4xl font-bold text-[#D97706] text-center">About Our Hospital</h2>
  
  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    {/* Left Side - Text */}
    <div>
      <p className="text-[#6C757D]">
        Our hospital has been a leader in patient care for over <strong>25 years</strong>. We are 
        committed to providing <strong>advanced medical treatments</strong> and <strong>personalized healthcare</strong> 
        to our patients. Our state-of-the-art facilities and <strong>world-class doctors</strong> ensure that 
        every patient receives <strong>exceptional treatment</strong>.
      </p>
    </div>

    {/* Right Side - Image */}
    <div className="w-full">
      <img 
        src="https://cdn.pixabay.com/photo/2024/06/22/14/45/ai-generated-8846456_1280.png" 
        alt="Who We Are" 
        className="w-full h-full object-cover rounded-lg shadow-md"
      />
    </div>
  </div>
</motion.div>
</motion.div>


      {/* Services Section (Scrolling) */}
      <div className="bg-[#F3F4F6] py-12 overflow-hidden relative mt-12">
        <h2 className="text-4xl font-bold text-center text-[#4A4E69] mb-6">Our Services</h2>
        <div className="relative w-full overflow-hidden">
          <motion.div 
            animate={{ x: ["10%", "-100%"] }} 
            transition={{ repeat: Infinity, duration: animationDuration, ease: "linear" }}
            whileHover={{ animationPlayState: "paused" }} 
            className="flex space-x-6"
          >
            {services.concat(services).map((service, index) => (
              <div key={index} className="min-w-[200px] bg-white p-4 rounded-lg shadow-lg text-center flex flex-col items-center">
                {serviceIcons[service]}
                <h3 className="text-lg font-semibold text-[#D97706] mt-3">{service}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="bg-[#4A4E69] text-white py-12"
      >
        <div className="container mx-auto p-8 text-center">
          <h2 className="text-4xl font-bold">Why Choose Us?</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Experienced Doctors", "24/7 Emergency", "Advanced Equipment"].map((reason, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white text-[#374151] rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-[#D97706]">{reason}</h3>
                <p className="mt-2 text-[#6C757D]">We ensure top-quality healthcare with our {reason.toLowerCase()}.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      {/* Meet Our Doctors Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        className="container mx-auto p-8"
      >
        <h2 className="text-4xl font-bold text-center text-[#4A4E69] mb-8">Meet Our Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05 }} 
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <img src={doctor.img} alt={doctor.name} className="mx-auto mb-4 rounded-full w-32 h-32 object-cover shadow-lg" />
              <h3 className="text-xl font-semibold text-[#4A4E69]">{doctor.name}</h3>
              <p className="text-[#6C757D] mt-2">{doctor.specialty}</p>
            
            <Link to="/doctors">
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              className="mt-6 px-6 py-3 bg-[#4A4E69] text-white font-bold rounded-lg hover:bg-[#373A47] transition shadow-lg"
            >
              Know more ...
            </motion.button>
            </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
        className="bg-[#E5E7EB] text-[#374151] py-12 text-center mt-12"
      >
        <h2 className="text-4xl font-bold">Need Medical Assistance?</h2>
        <p className="mt-4">Call us now at <span className="font-bold text-[#D97706]">+1 234 567 890</span> or book an appointment online.</p>
        <Link to="/contact">
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          className="mt-6 px-6 py-3 bg-[#4A4E69] text-white font-bold rounded-lg hover:bg-[#373A47] transition shadow-lg"
        >
          Contact Us
        </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
