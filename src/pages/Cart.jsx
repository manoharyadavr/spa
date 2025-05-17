import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Clock, Trash2, Calendar } from 'lucide-react';
import axios from 'axios';

// Utility to format YYYY-MM-DD to DD-MM-YYYY for display
function formatDateDisplay(dateStr) {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  if (!year || !month || !day) return dateStr;
  return `${day}-${month}-${year}`;
}

// Utility to format DD-MM-YYYY to YYYY-MM-DD for input
function toInputDateFormat(dateStr) {
  if (!dateStr) return '';
  // If already in YYYY-MM-DD, return as is
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;
  // If in DD-MM-YYYY, convert
  if (/^\d{2}-\d{2}-\d{4}$/.test(dateStr)) {
    const [day, month, year] = dateStr.split('-');
    return `${year}-${month}-${day}`;
  }
  return dateStr;
}

// Utility to format 24-hour time (HH:mm) to 12-hour format with AM/PM
function formatTime12Hour(timeStr) {
  if (!timeStr) return '';
  const [hour, minute] = timeStr.split(':').map(Number);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`;
}

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, decrementQuantity, getTotalDeposit, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  });
  const [availableSlots, setAvailableSlots] = useState([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Fetch available time slots when date changes
  const fetchAvailableSlots = async (date) => {
    const trimmedDate = date.trim();
    try {
      setIsLoadingSlots(true);
      setError(null);
      
      const response = await axios.get(`https://spabackend-1.onrender.com/api/booking/available-slots/${trimmedDate}`);
      
      if (response.data && response.data.slots) {
        setAvailableSlots(response.data.slots);
      } else {
        setAvailableSlots([]);
      }
    } catch (error) {
      console.error('Error fetching available slots:', error);
      setError('Failed to fetch available time slots');
      setAvailableSlots([]);
    } finally {
      setIsLoadingSlots(false);
    }
  };

  const handleCustomerDetailsChange = async (e) => {
    const { name, value } = e.target;
    let newValue = value;
    
    if (name === 'date') {
      newValue = toInputDateFormat(value);
    }
    
    setCustomerDetails(prev => ({
      ...prev,
      [name]: newValue
    }));

    if (name === 'date') {
      setCustomerDetails(prev => ({
        ...prev,
        time: ''
      }));
      if (newValue) {
        await fetchAvailableSlots(newValue);
      } else {
        setAvailableSlots([]);
      }
    }
  };

  const handleCustomerDetailsSubmit = async (e) => {
    e.preventDefault();
    const trimmedDate = customerDetails.date.trim();
    
    if (!trimmedDate || !customerDetails.time) {
      setError('Please select both date and time');
      return;
    }

    try {
      const { data } = await axios.post('https://spabackend-1.onrender.com/api/booking/check-availability', {
        date: trimmedDate,
        time: customerDetails.time
      });

      if (!data.available) {
        setError(data.reason || 'This time slot is no longer available. Please select another time.');
        return;
      }

      await axios.post('https://spabackend-1.onrender.com/api/booking/create', {
        date: trimmedDate,
        time: customerDetails.time,
        customerDetails,
        cartItems
      });

      setShowCustomerForm(false);
      await handlePayment();
    } catch (error) {
      console.error('Error checking slot availability:', error);
      setError(error.response?.data?.error || 'Failed to check slot availability. Please try again.');
    }
  };

  const handlePayment = async () => {
    try {
      setIsProcessing(true);
      setError(null);

      const { data: order } = await axios.post('https://spabackend-1.onrender.com/api/payment/create-order', {
        amount: getTotalDeposit(),
        customerDetails
      });

      const options = {
        key: 'rzp_test_ReXn9wfeuRe6JK',
        amount: order.amount,
        currency: order.currency,
        name: 'N Wellness',
        description: 'Service Booking Deposit',
        order_id: order.id,
        handler: async function (response) {
          try {
            const { data } = await axios.post('https://spabackend-1.onrender.com/api/payment/verify-payment', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              cartItems,
              customerDetails
            });

            if (data.verified && data.clearCart) {
              clearCart();
              setTimeout(() => {
                window.location.href = '/payment-success';
              }, 100);
            }
          } catch (error) {
            console.error('Payment verification failed:', error);
            setError('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          name: customerDetails.name,
          email: customerDetails.email,
          contact: customerDetails.phone
        },
        theme: {
          color: '#98A869'
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
          }
        },
        method: {
          upi: true,
          card: true,
          netbanking: true,
          wallet: true,
          paylater: true
        },
        config: {
          display: {
            preferences: {
              show_default_blocks: true
            }
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment initialization failed:', error);
      setError('Failed to initialize payment. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#FEDEB8]/5 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-2xl font-bold text-[#98A869] mb-4">Your cart is empty</h2>
          <Link to="/services">
            <button className="bg-[#98A869] text-white px-6 py-2 rounded-lg hover:bg-[#98A869]/90 transition-colors duration-200">
              Browse Services
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FEDEB8]/5 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="container mx-auto px-4"
      >
        <h1 className="text-3xl font-bold text-[#98A869] mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              {cartItems.map((item, index) => {
                const isSignature = item.title === 'N Wellness Signature Body Treatment';
                const memberPrice = `₹${(parseFloat(item.price.replace('₹', '').replace(/,/g, '')) * 0.6).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
                const total = (parseFloat(item.price.replace('₹', '').replace(/,/g, '')) * (item.quantity || 1)).toLocaleString();
                const deposit = (parseFloat(item.deposit.replace('₹', '').replace(/,/g, '')) * (item.quantity || 1)).toLocaleString();
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-6 pb-6 border-b last:border-b-0 last:mb-0 last:pb-0"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-lg mb-3 sm:mb-0"
                    />
                    <div className="flex-grow w-full">
                      <h3 className="text-lg font-semibold text-[#98A869] mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{item.duration}</span>
                      </div>
                      {/* Price Row */}
                      {!isSignature ? (
                        <div className="flex items-center gap-6 mb-2">
                          <div className="text-center">
                            <div className="text-base font-bold text-gray-800">{item.price}</div>
                            <div className="text-xs text-gray-400 mt-1">Regular</div>
                          </div>
                          <div className="border-l border-gray-200 h-8"></div>
                          <div className="text-center flex flex-col items-center">
                            <span className="text-base font-bold text-[#98A869]">{memberPrice}</span>
                            <div className="text-xs text-[#98A869] mt-1">Member</div>
                          </div>
                        </div>
                      ) : (
                        <div className="mb-2">
                          <span className="text-lg font-bold text-[#98A869]">{item.price}</span>
                        </div>
                      )}
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2 mb-2">
                        <button
                          onClick={() => decrementQuantity(item.title)}
                          className="w-8 h-8 rounded-full border border-gray-300 text-[#98A869] text-lg font-bold flex items-center justify-center hover:bg-[#FEDEB8]/40 transition-colors duration-200"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="px-3 py-1 bg-gray-100 rounded text-base font-medium min-w-[32px] text-center">
                          {item.quantity || 1}
                        </span>
                        <button
                          onClick={() => addToCart({
                            title: item.title,
                            price: item.price,
                            description: item.description,
                            duration: item.duration,
                            image: item.image,
                            whatsapp: item.whatsapp
                          })}
                          className="w-8 h-8 rounded-full border border-gray-300 text-[#98A869] text-lg font-bold flex items-center justify-center hover:bg-[#FEDEB8]/40 transition-colors duration-200"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      {/* Total & Deposit */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-2">
                        <div>
                          <span className="text-gray-500 text-xs">Total: </span>
                          <span className="text-[#98A869] font-semibold">₹{total}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 text-xs">Deposit (20%): </span>
                          <span className="text-gray-700 font-semibold">₹{deposit}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.title)}
                      className="mt-2 sm:mt-0 sm:ml-2 text-red-500 hover:text-red-600 transition-colors duration-200 self-end"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-[#98A869] mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Number of Services</span>
                  <span>{cartItems.length}</span>
                </div>
                <div className="flex justify-between text-[#98A869] font-semibold text-lg">
                  <span>Total Deposit Required</span>
                  <span>₹{getTotalDeposit()}</span>
                </div>
                <button
                  onClick={() => setShowCustomerForm(true)}
                  disabled={isProcessing}
                  className="w-full bg-[#98A869] text-white py-3 rounded-lg hover:bg-[#98A869]/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Processing...' : 'Pay Deposit'}
                </button>
                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}
                <p className="text-sm text-gray-500 text-center">
                  You will be redirected to Razorpay for secure payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Customer Details Modal */}
      {showCustomerForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full mx-4"
          >
            <h2 className="text-xl font-semibold text-[#98A869] mb-4">Enter Your Details</h2>
            <form onSubmit={handleCustomerDetailsSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-[#98A869]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={customerDetails.name}
                  onChange={handleCustomerDetailsChange}
                  required
                  className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98A869]/20 focus:border-[#98A869]"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-[#98A869]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={customerDetails.email}
                  onChange={handleCustomerDetailsChange}
                  required
                  className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98A869]/20 focus:border-[#98A869]"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-[#98A869]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={customerDetails.phone}
                  onChange={handleCustomerDetailsChange}
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                  className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98A869]/20 focus:border-[#98A869]"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date <span className="text-[#98A869]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={toInputDateFormat(customerDetails.date)}
                    onChange={handleCustomerDetailsChange}
                    required
                    min={getMinDate()}
                    className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98A869]/20 focus:border-[#98A869] [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                  />
                  <Calendar className="absolute right-3 top-2.5 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Time <span className="text-[#98A869]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="time"
                    name="time"
                    value={customerDetails.time}
                    onChange={handleCustomerDetailsChange}
                    required
                    disabled={isLoadingSlots || !customerDetails.date}
                    className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#98A869]/20 focus:border-[#98A869] appearance-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">Select a time</option>
                    {isLoadingSlots ? (
                      <option value="" disabled>Loading available slots...</option>
                    ) : availableSlots.length > 0 ? (
                      availableSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {formatTime12Hour(slot)}
                        </option>
                      ))
                    ) : (
                      <option value="" disabled>No slots available</option>
                    )}
                  </select>
                  <Clock className="absolute right-3 top-2.5 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                {customerDetails.date === getMinDate() && (
                  <p className="text-xs text-gray-500 mt-1">
                    Only future time slots are available for today
                  </p>
                )}
                {error && (
                  <p className="text-xs text-red-500 mt-1">{error}</p>
                )}
              </div>
              <div className="flex space-x-4 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCustomerForm(false)}
                  className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#98A869] text-white py-2 rounded-lg hover:bg-[#98A869]/90 transition-colors duration-200"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Cart; 