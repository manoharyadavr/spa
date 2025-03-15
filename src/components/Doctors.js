import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const doctorsData = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialty: "Cardiologist",
    image: "https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with a professional image
    bio: "Dr. John Doe is a renowned cardiologist with over 20 years of experience in treating heart-related conditions. He is dedicated to providing personalized care to his patients.",
    experience: "20+ years",
    qualifications: "MD, PhD in Cardiology",
    availability: "Mon, Wed, Fri",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialty: "Pediatrician",
    image: "https://images.pexels.com/photos/28123670/pexels-photo-28123670/free-photo-of-paramedics-with-stethoscope-standing-in-front-of-an-open-ambulance.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with a professional image
    bio: "Dr. Jane Smith specializes in pediatric care and has a gentle approach to treating children. She is passionate about ensuring the health and well-being of her young patients.",
    experience: "15+ years",
    qualifications: "MD, Board Certified Pediatrician",
    availability: "Tue, Thu, Sat",
  },
  {
    id: 3,
    name: "Dr. Michael Johnson",
    specialty: "General Physician",
    image: "https://images.pexels.com/photos/5214955/pexels-photo-5214955.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with a professional image
    bio: "Dr. Michael Johnson provides comprehensive care for patients of all ages. He focuses on preventive care and managing chronic conditions.",
    experience: "18+ years",
    qualifications: "MD, Internal Medicine Specialist",
    availability: "Mon-Fri",
  },
];

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const navigate = useNavigate();

  const handleKnowMore = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const closeModal = () => {
    setSelectedDoctor(null);
  };

  const handleBookAppointment = () => {
    navigate("/appointments"); // Navigate to the appointment page
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
          Our Doctors
        </motion.h1>
        <motion.p
          className="text-center mt-4 text-gray-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Meet our team of experienced and dedicated doctors.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {doctorsData.map((doctor) => (
            <motion.div
              key={doctor.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-2xl font-bold mt-4 text-gray-800">
                {doctor.name}
              </h2>
              <p className="mt-2 text-gray-600 font-semibold">
                {doctor.specialty}
              </p>
              <p className="mt-2 text-gray-600">{doctor.qualifications}</p>
              <p className="mt-2 text-gray-600">{doctor.experience}</p>
              <div className="mt-4 flex space-x-4">
                <motion.button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleKnowMore(doctor)}
                >
                  Know More
                </motion.button>
                <motion.button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBookAppointment} // Navigate to the appointment page
                >
                  Book Appointment
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedDoctor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h2 className="text-2xl font-bold mt-4 text-gray-800">
                {selectedDoctor.name}
              </h2>
              <p className="mt-2 text-gray-600 font-semibold">
                {selectedDoctor.specialty}
              </p>
              <p className="mt-2 text-gray-600">
                {selectedDoctor.qualifications}
              </p>
              <p className="mt-2 text-gray-600">{selectedDoctor.experience}</p>
              <p className="mt-4 text-gray-600">{selectedDoctor.bio}</p>
              <p className="mt-4 text-gray-600">
                <strong>Availability:</strong> {selectedDoctor.availability}
              </p>
              <button
                className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
                onClick={closeModal}
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;