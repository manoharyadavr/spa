import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sendBookingEmail } from '../services/emailService';

const BookingModal = ({ isOpen, onClose, service }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await sendBookingEmail({
        ...formData,
        service: service.title,
        price: service.price
      });

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        date: '',
        time: ''
      });
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);
    } catch (error) {
      setError(error.message || 'Failed to book service. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl p-6 w-full max-w-md mx-4"
      >
        <h2 className="text-2xl font-bold text-[#98A869] mb-4">Book {service.title}</h2>
        
        {success ? (
          <div className="text-center py-4">
            <p className="text-green-600 mb-2">Booking successful!</p>
            <p className="text-gray-600">We've sent a confirmation email to your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
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
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98A869]/20 focus:border-[#98A869]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Date <span className="text-[#98A869]">*</span>
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98A869]/20 focus:border-[#98A869]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Time <span className="text-[#98A869]">*</span>
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98A869]/20 focus:border-[#98A869]"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <motion.button
                type="submit"
                className="px-6 py-2 bg-[#98A869] text-white rounded-lg hover:bg-[#98A869]/90"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
              >
                {loading ? 'Booking...' : 'Book Now'}
              </motion.button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default BookingModal; 