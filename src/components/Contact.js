import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios"; // ✅ Import Axios

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      alert(response.data.message);
      setFormData({ name: "", email: "", message: "" }); // ✅ Reset form
    } catch (error) {
      console.error("❌ Contact Form Error:", error.response?.data || error.message);
      alert("Failed to send message. Try again.");
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto p-4">
        <motion.h1
          className="text-4xl font-bold text-center mt-8 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <motion.p className="text-center mt-4 text-gray-600">
          Reach out to us for any inquiries.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-8"
        >
          {/* Name Field */}
          <motion.div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </motion.div>

          {/* Email Field */}
          <motion.div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </motion.div>

          {/* Message Field */}
          <motion.div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="4"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
