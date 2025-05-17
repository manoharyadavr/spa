import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || "https://spabackend-1.onrender.com";

export const sendContactEmail = async (contactData) => {
  try {
    const response = await axios.post(`${API_URL}/api/email/contact`, contactData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to send contact email' };
  }
};

export const sendBookingEmail = async (bookingData) => {
  try {
    const response = await axios.post(`${API_URL}/email/booking`, bookingData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to send booking email' };
  }
}; 
