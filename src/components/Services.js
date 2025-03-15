import React, { useState } from "react";
import { motion } from "framer-motion";

// SVG Icons
const GeneralMedicineIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 mx-auto mb-4 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const PediatricsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 mx-auto mb-4 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const CardiologyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 mx-auto mb-4 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const OrthopedicsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 mx-auto mb-4 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
    />
  </svg>
);

const DermatologyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 mx-auto mb-4 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
    />
  </svg>
);

const NeurologyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 mx-auto mb-4 text-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const servicesData = [
  {
    id: 1,
    title: "General Medicine",
    description:
      "Our General Medicine department provides comprehensive care for all your medical needs. From routine check-ups to managing chronic conditions, our experienced physicians are here to help you achieve optimal health.",
    icon: <GeneralMedicineIcon />,
    details:
      "Our General Medicine team is dedicated to providing personalized care for patients of all ages. We offer preventive care, diagnosis, and treatment for a wide range of medical conditions. Whether you need a routine check-up or management of a chronic illness, our doctors are here to help.",
  },
  {
    id: 2,
    title: "Pediatrics",
    description:
      "Our Pediatrics team specializes in the care of infants, children, and adolescents. We offer preventive care, vaccinations, and treatment for a wide range of childhood illnesses.",
    icon: <PediatricsIcon />,
    details:
      "Our Pediatrics department is committed to the health and well-being of your children. We provide comprehensive care, including routine check-ups, vaccinations, and treatment for acute and chronic conditions. Our team is trained to handle the unique needs of young patients.",
  },
  {
    id: 3,
    title: "Cardiology",
    description:
      "Our Cardiology department offers advanced diagnostic and treatment options for heart-related conditions. From stress tests to cardiac rehabilitation, we are committed to your heart health.",
    icon: <CardiologyIcon />,
    details:
      "Our Cardiology team uses state-of-the-art technology to diagnose and treat heart conditions. We offer a range of services, including stress tests, echocardiograms, and cardiac rehabilitation programs. Our goal is to help you maintain a healthy heart and prevent future issues.",
  },
  {
    id: 4,
    title: "Orthopedics",
    description:
      "Our Orthopedics team specializes in the diagnosis and treatment of musculoskeletal conditions. Whether it's a sports injury or joint replacement, we provide personalized care.",
    icon: <OrthopedicsIcon />,
    details:
      "Our Orthopedics department is dedicated to helping patients recover from injuries and manage chronic conditions. We offer surgical and non-surgical treatments, including physical therapy and joint replacement. Our team works closely with you to develop a personalized treatment plan.",
  },
  {
    id: 5,
    title: "Dermatology",
    description:
      "Our Dermatology department offers expert care for skin, hair, and nail conditions. From acne treatment to skin cancer screenings, we help you maintain healthy skin.",
    icon: <DermatologyIcon />,
    details:
      "Our Dermatology team provides comprehensive care for a wide range of skin conditions. We offer treatments for acne, eczema, psoriasis, and more. We also perform skin cancer screenings and provide cosmetic dermatology services.",
  },
  {
    id: 6,
    title: "Neurology",
    description:
      "Our Neurology team provides advanced care for disorders of the nervous system. From migraines to epilepsy, we offer comprehensive diagnostic and treatment services.",
    icon: <NeurologyIcon />,
    details:
      "Our Neurology department specializes in the diagnosis and treatment of neurological disorders. We offer advanced diagnostic tests, including EEGs and MRIs, and provide personalized treatment plans for conditions such as migraines, epilepsy, and Parkinson's disease.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleLearnMore = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
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
          Our Services
        </motion.h1>
        <motion.p
          className="text-center mt-4 text-gray-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore the wide range of services we offer to ensure your health and
          well-being.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center">{service.icon}</div>
              <h2 className="text-2xl font-bold text-gray-800 text-center">
                {service.title}
              </h2>
              <p className="mt-2 text-gray-600 text-center">
                {service.description}
              </p>
              <motion.button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all block mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLearnMore(service)}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">{selectedService.icon}</div>
              <h2 className="text-2xl font-bold text-gray-800 text-center">
                {selectedService.title}
              </h2>
              <p className="mt-4 text-gray-600">{selectedService.details}</p>
              <button
                className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all block mx-auto"
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

export default Services;