import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Phone, Mail, Clock } from "lucide-react";
import { sendContactEmail } from '../services/emailService';

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
    subject: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await sendContactEmail({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setError(error.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FEDEB8]/5 min-h-screen">
      {/* Success Overlay */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            className="fixed inset-0 bg-[#98A869]/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-8 shadow-xl text-center max-w-md mx-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <CheckCircle className="h-16 w-16 text-[#98A869] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#98A869]">Message Sent Successfully!</h2>
              <p className="text-gray-600 mt-2">
                Thank you for contacting us. We'll get back to you soon.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center text-center"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute w-full h-full">
          <img
            src="https://images.pexels.com/photos/7365442/pexels-photo-7365442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#98A869]/80 via-[#98A869]/40 to-transparent" />
        </div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Contact Us</h1>
          <p className="text-lg text-white/90 mt-3">
            Let's start your wellness journey together
          </p>
          <motion.div
            className="mt-4 bg-white/10 backdrop-blur-sm px-4 py-2 inline-block rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <nav className="text-sm text-white">
              <Link to="/" className="hover:text-[#FEDEB8] font-semibold">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[#FEDEB8]">Contact</span>
            </nav>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8 container "
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl font-bold text-[#98A869] mb-6">Get in Touch</h2>
              <p className="text-gray-600">
                Have questions about our services or want to book an appointment? 
                We're here to help you on your wellness journey.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#98A869]/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-[#98A869]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#98A869]">Our Location</h3>
                  <p className="text-gray-600">277/7, Rd Number 3 Banjara Hills, Hyderabad, Telangana</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#98A869]/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-[#98A869]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#98A869]">Phone</h3>
                  <p className="text-gray-600">+91 9391803316</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#98A869]/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-[#98A869]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#98A869]">Email</h3>
                  <p className="text-gray-600">nwellness.in@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#98A869]/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-[#98A869]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#98A869]">Working Hours</h3>
                  <p className="text-gray-600">Monday - Sunday: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 container"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  Name <span className="text-[#98A869]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98A869]/20 focus:border-[#98A869]"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Email <span className="text-[#98A869]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98A869]/20 focus:border-[#98A869]"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Phone Number <span className="text-[#98A869]">*</span>
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
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98A869]/20 focus:border-[#98A869]"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Subject <span className="text-[#98A869]">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter the subject"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98A869]/20 focus:border-[#98A869]"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Message <span className="text-[#98A869]">*</span>
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98A869]/20 focus:border-[#98A869]"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#98A869] text-white py-3 font-semibold rounded-lg hover:bg-[#98A869]/90 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>

            {error && (
              <p className="text-red-500 mt-4 text-center">{error}</p>
            )}
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#98A869] text-center mb-8">Our Location</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Google Maps"
              className="w-full h-[400px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7318199725637!2d78.4370908!3d17.424653100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9700005fc71b%3A0x5e056f5df4cdf814!2sN%20wellness!5e0!3m2!1sen!2sin!4v1745573042257!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
