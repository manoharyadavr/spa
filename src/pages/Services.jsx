import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Clock,
  CheckCircle,
  Crown,
  Gem,
  Footprints,
  Smile,
  Star,
  Award,
  Leaf,
  Flower2
} from "lucide-react";
import { toast } from 'react-hot-toast';
import useScrollToTop from '../hooks/useScrollToTop';

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Custom easing for smooth motion
      staggerChildren: 0.1
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      opacity: {
        duration: 0.4
      },
      scale: {
        duration: 0.5
      }
    },
  }),
};

const imageVariants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const services = [
  {
    title: "Japanese Head Spa",
    description: "A luxurious 9-step ritual designed to cleanse, hydrate, and heal the scalp and hair.",
    price: "₹6,500",
    duration: "60 minutes",
    features: [
      "Deep scalp cleansing",
      "Head massage",
      "Premium hair treatment"
    ],
    image: "/images/japaneseHeadSpa.jpg",
    icon: Crown,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20Japanese%20Head%20Spa%20(₹6,500,%2060%20mins)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "Warm Stone Massage",
    description: "Smooth, heated basalt stones glide over muscles to melt away tension and boost circulation.",
    price: "₹6,500",
    duration: "60 minutes",
    features: [
      "Heated Stones",
      "Deep Muscle Relief",
      "Improved Circulation"
    ],
    image: "/images/warmStoneMassage.jpg",
    icon: Gem,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20Warm%20Stone%20Massage%20(₹6,500,%201%20hour)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "Aromatherapy",
    description: "A bespoke blend of pure essential oils is gently massaged into your skin.",
    price: "₹6,500",
    duration: "60 minutes",
    features: [
      "Custom Oil Blend",
      "Gentle Massage",
      "Stress Relief"
    ],
    image: "/images/aromatherapy.jpg",
    icon: Leaf,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20Aromatherapy%20(₹6,500,%201%20hour)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "Body Polishing",
    description: "Experience our signature 6-step Body Polishing Ritual.",
    price: "₹9,800",
    duration: "90 minutes",
    features: [
      "Full Body Treatment",
      "Skin Rejuvenation",
      "Natural Glow"
    ],
    image: "/images/bodyPolishing.jpg",
    icon: Gem,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20Body%20Polishing%20(₹8,999,%201.5%20hours)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "Foot Reflexology",
    description: "Targeted pressure massage on specific foot zones.",
    price: "₹3,000",
    duration: "35 minutes",
    features: [
      "Pressure Points",
      "Stress Relief",
      "Energy Balance"
    ],
    image: "/images/footReflexology.jpg",
    icon: Footprints,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20Foot%20Reflexology%20(₹3,000,%2035%20minutes)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "OxyGlow Facial",
    description: "A 9-step facial treatment for radiant, glowing skin.",
    price: "₹6,500",
    duration: "60 minutes",
    features: [
      "Deep Cleansing",
      "Oxygen Therapy",
      "Skin Brightening"
    ],
    image: "/images/oxyglowFacial.jpg",
    icon: Smile,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20OxyGlow%20Facial%20(₹6,500,%201%20hour)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "O3+ Facial",
    description: "A professional-grade facial using active oxygen and high-performance ingredients.",
    price: "₹6,500",
    duration: "60 minutes",
    features: [
      "Active Oxygen",
      "Premium Products",
      "Deep Nourishment"
    ],
    image: "images/o3+facial.jpg",
    icon: Star,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20O3%2B%20Facial%20(₹6,500,%201%20hour)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "Bridal Facial",
    description: "A luxurious skin prep ritual designed to give every bride a radiant, photo-ready glow.",
    price: "₹7,999",
    duration: "75 minutes",
    features: [
      "Bridal Glow",
      "Photo-Ready Skin",
      "Premium Care"
    ],
    image: "/images/bridalFacial.jpg",
    icon: Crown,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20Bridal%20Facial%20(₹6,900,%201.25%20hours)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "Shirodhara Therapy",
    description: "An Ayurvedic therapy where a steady stream of warm herbal oil is poured over the forehead.",
    price: "₹5,500",
    duration: "45 minutes",
    features: [
      "Ayurvedic Treatment",
      "Stress Relief",
      "Mental Clarity"
    ],
    image: "/images/shirodharaTherapy.jpg",
    icon: Flower2,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20Shirodhara%20Therapy%20(₹5,500,%2045%20minutes)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  // {
  //   title: "Sound Therapy",
  //   description: "Immerse yourself in the healing vibrations of Sound Therapy.",
  //   price: "₹2,000",
  //   duration: "15 minutes",
  //   features: [
  //     "Healing Vibrations",
  //     "Deep Relaxation",
  //     "Energy Balance"
  //   ],
  //   image: "https://static.wixstatic.com/media/35803c_54caea50dfed4c549b851e45075ddfec~mv2.png",
  //   icon: Music,
  //   whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20Sound%20Therapy%20(₹2,000,%2015%20minutes)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  // },
  // {
  //   title: "Sound Therapy",
  //   description: "Immerse yourself in the healing vibrations of Sound Therapy.",
  //   price: "₹2,000",
  //   duration: "15 minutes",
  //   features: [
  //     "Healing Vibrations",
  //     "Deep Relaxation",
  //     "Energy Balance"
  //   ],
  //   image: "https://static.wixstatic.com/media/35803c_54caea50dfed4c549b851e45075ddfec~mv2.png",
  //   icon: Music,
  //   whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20Sound%20Therapy%20(₹2,000,%2015%20minutes)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  // },
  {
    title: "N Wellness Signature Body Treatment",
    description: "Indulge in our ultimate full-body ritual for complete rejuvenation.",
    price: "₹16,000",
    duration: "180 minutes",
    features: [
      "Full Body Treatment",
      "Premium Experience",
      "Complete Relaxation"
    ],
    image: "/images/nwellnessSignature.png",
    icon: Award,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20N%20Wellness%20Signature%20Body%20Treatment%20(₹16,000,%203%20hours)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  }
];

// Add memberPrice to each service
const servicesWithMemberPrice = services.map(service => ({
  ...service,
  memberPrice: service.memberPrice || `₹${(parseFloat(service.price.replace('₹', '').replace(/,/g, '')) * 0.6).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
}));

const Services = () => {
  useScrollToTop();
  
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-[#FEDEB8]/5"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <motion.div 
        className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center text-center overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Background Image */}
        <motion.div 
          className="absolute w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img 
            src="/images/servicesBreadCrumb.jpg"
            alt="Services Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#98A869]/80 via-[#98A869]/40 to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-lg text-white/90 mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Experience premium wellness treatments designed for your well-being
          </motion.p>

          {/* Breadcrumb */}
          <motion.div
            className="mt-4 bg-white/10 backdrop-blur-sm px-4 py-2 inline-block rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="text-sm text-white">
              <Link to="/" className="hover:text-[#FEDEB8] font-semibold transition-colors duration-300">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-[#FEDEB8]">Services</span>
            </nav>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <motion.div 
        className="container mx-auto px-4 py-12 sm:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesWithMemberPrice.map((service, index) => {
            const isLastService = index === servicesWithMemberPrice.length - 1;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg flex flex-col h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="relative w-full h-48 overflow-hidden"
                  variants={imageVariants}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>
                <motion.div 
                  className="p-6"
                  variants={textVariants}
                >
                  <h2 className="text-xl font-bold text-[#98A869] mb-1">{service.title}</h2>
                  <div className="text-gray-500 text-sm mb-3">{service.duration}</div>
                  {isLastService ? (
                    <div className="flex items-center justify-center gap-8 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-[#98A869]">{service.price}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-[#98A869]">{service.price}</div>
                      </div>
                    </div>
                  )}
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <motion.a
                    href={service.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full py-2 bg-[#98A869] text-white rounded-lg font-semibold hover:bg-[#7a8d4a] transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Now
                  </motion.a>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
