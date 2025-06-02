import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'react-hot-toast';
import useScrollToTop from '../hooks/useScrollToTop';

const Contact = () => {
  useScrollToTop();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSubmitSuccess(false);
    try {
      const response = await fetch('https://spabackend-1.onrender.com/api/email/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to send message');
      }
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', contactNumber: '', message: '' });
      toast.success('Message sent successfully!');
    } catch (err) {
      setError(err.message);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#FEDEB8]/5 min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center text-center"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute w-full h-full">
          <img
            src="/images/contactBreadCrumb.jpg"
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
            className="space-y-8"
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
            className="bg-white rounded-2xl shadow-lg p-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {!submitSuccess ? (
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

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                <motion.button
                  type="submit"
                  className="w-full bg-[#98A869] text-white py-3 font-semibold rounded-lg hover:bg-[#98A869]/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-4 text-[#98A869] hover:text-[#98A869]/80 transition-colors duration-200"
                >
                  Send another message
                </button>
              </motion.div>
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
