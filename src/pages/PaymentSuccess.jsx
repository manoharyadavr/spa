import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const PaymentSuccess = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#FEDEB8]/5 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="container mx-auto px-4 text-center"
      >
        <CheckCircle className="w-16 h-16 text-[#98A869] mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-[#98A869] mb-4">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your payment. We'll contact you shortly to schedule your services.
        </p>
        <Link to="/">
          <button className="bg-[#98A869] text-white px-6 py-2 rounded-lg hover:bg-[#98A869]/90 transition-colors duration-200">
            Return to Home
          </button>
        </Link>
        <p className="text-sm text-gray-500 mt-4">
          A confirmation email has been sent to your registered email address.
        </p>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess; 