import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

// Animation Variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Input Change Handler
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Form Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", contactNumber: "", message: "" });

      // Hide success overlay after 4s
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">

      {/* ✅ Success Overlay */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-xl p-8 shadow-xl text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <CheckCircleIcon className="h-20 w-20 text-green-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold">Message Sent Successfully!</h2>
              <p className="text-gray-300 mt-2">
                Thank you for contacting us. We’ll get back to you soon.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🌄 Hero Section */}
      <motion.div
        className="relative w-full h-[400px] flex items-center justify-center text-center"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute w-full h-full bg-gradient-to-t from-[#c2c2c2] via-[#707070] to-transparent">
          <img
            src="https://cdn.pixabay.com/photo/2022/01/12/18/51/contact-us-6933645_1280.jpg"
            alt="Contact Background"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-lg text-gray-300 mt-3">
            Let's build something amazing together.
          </p>
          <motion.div
            className="mt-4 bg-white bg-opacity-10 px-4 py-2 inline-block rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <nav className="text-sm text-gray-300">
              <Link to="/" className="hover:text-gray-400 font-semibold">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-400">Contact</span>
            </nav>
          </motion.div>
        </div>
      </motion.div>

      {/* 📨 Contact Form */}
      <motion.div
        className="max-w-3xl mx-auto px-6 py-12 bg-gray-950 rounded-lg shadow-md mt-12"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full p-3 mt-2 bg-gray-700 rounded-lg text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full p-3 mt-2 bg-gray-700 rounded-lg text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              placeholder="Enter your phone number"
              className="w-full p-3 mt-2 bg-gray-700 rounded-lg text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message"
              className="w-full p-3 mt-2 bg-gray-700 rounded-lg text-white focus:outline-none"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-white text-black py-3 font-bold rounded-lg hover:bg-gray-300 transition"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>

        {/* ❌ Error */}
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </motion.div>

      {/* 📍 Google Map */}
      <motion.div
        className="w-full mt-12 text-center"
      >
        <h2 className="text-3xl font-bold">Our Location</h2>
        <div className="w-full h-64 mt-6">
          <iframe
            title="Google Maps"
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3804.158455111106!2d78.23671307493863!3d17.547640983367113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDMyJzUxLjUiTiA3OMKwMTQnMjEuNCJF!5e0!3m2!1sen!2sin!4v1743771587931!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>

      {/* 💬 Call-to-Action */}
      <motion.div
        className="w-full py-12 text-center bg-gray-900 mt-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">Start Your Digital Journey Today</h2>
        <p className="text-gray-400 mt-2">We are here to help you succeed online.</p>
        <motion.a
          href="mailto:contact@byv.com"
          className="inline-block mt-6 px-6 py-3 bg-white text-black font-bold rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          Email Us
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Contact;
