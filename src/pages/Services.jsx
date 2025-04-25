import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Spa, 
  Clock, 
  CheckCircle, 
  Crown, 
  Gem, 
  Footprints, 
  Smile, 
  Star, 
  Music, 
  Award,
  Leaf,
  Flower2
} from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.98
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      delay: i * 0.03,
      duration: 0.4,
      ease: [0.2, 0.65, 0.3, 0.9],
      opacity: {
        duration: 0.2
      },
      scale: {
        duration: 0.3
      }
    },
  }),
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
    duration: "60 mins",
    features: [
      "Deep scalp cleansing",
      "Head massage",
      "Premium hair treatment"
    ],
    image: "https://static.wixstatic.com/media/35803c_09bbaa109a6f4910bf9d095cea46530e~mv2.jpg",
    icon: Crown,
    whatsapp: "https://wa.me/916301846681?text=Hi,%20I%20would%20like%20to%20book%20Japanese%20Head%20Spa%20(₹6,500,%2060%20mins)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "Warm Stone Massage",
    description: "Smooth, heated basalt stones glide over muscles to melt away tension and boost circulation.",
    price: "₹6,500",
    duration: "1 hour",
    features: [
      "Heated Stones",
      "Deep Muscle Relief",
      "Improved Circulation"
    ],
    image: "https://static.wixstatic.com/media/35803c_50183bb0461c4b009a150141e7d6645c~mv2.jpg",
    icon: Gem,
    whatsapp: "https://wa.me/916301846681?text=Hi,%20I%20would%20like%20to%20book%20Warm%20Stone%20Massage%20(₹6,500,%201%20hour)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "Aromatherapy",
    description: "A bespoke blend of pure essential oils is gently massaged into your skin.",
    price: "₹6,500",
    duration: "1 hour",
    features: [
      "Custom Oil Blend",
      "Gentle Massage",
      "Stress Relief"
    ],
    image: "https://static.wixstatic.com/media/11062b_dfa21cffaf4e47a58af7c90864f12e8e~mv2.jpg",
    icon: Leaf,
    whatsapp: "https://wa.me/916301846681?text=Hi,%20I%20would%20like%20to%20book%20Aromatherapy%20(₹6,500,%201%20hour)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "Body Polishing",
    description: "Experience our signature 6-step Body Polishing Ritual.",
    price: "₹8,999",
    duration: "1.5 hours",
    features: [
      "Full Body Treatment",
      "Skin Rejuvenation",
      "Natural Glow"
    ],
    image: "https://static.wixstatic.com/media/35803c_3a723c17f14742e69def4d3ba8ad817f~mv2.jpg",
    icon: Gem,
    whatsapp: "https://wa.me/916301846681?text=Hi,%20I%20would%20like%20to%20book%20Body%20Polishing%20(₹8,999,%201.5%20hours)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
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
    image: "https://static.wixstatic.com/media/11062b_813fb77531784479b999f3b30e30b90a~mv2.jpg",
    icon: Footprints,
    whatsapp: "https://wa.me/916301846681?text=Hi,%20I%20would%20like%20to%20book%20Foot%20Reflexology%20(₹3,000,%2035%20minutes)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "OxyGlow Facial",
    description: "A 9-step facial treatment for radiant, glowing skin.",
    price: "₹6,500",
    duration: "1 hour",
    features: [
      "Deep Cleansing",
      "Oxygen Therapy",
      "Skin Brightening"
    ],
    image: "https://static.wixstatic.com/media/35803c_094ebf58bffd40feb78aa77596c2e663~mv2.jpg",
    icon: Smile,
    whatsapp: "https://wa.me/916301846681?text=Hi,%20I%20would%20like%20to%20book%20OxyGlow%20Facial%20(₹6,500,%201%20hour)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "O3+ Facial",
    description: "A professional-grade facial using active oxygen and high-performance ingredients.",
    price: "₹6,500",
    duration: "1 hour",
    features: [
      "Active Oxygen",
      "Premium Products",
      "Deep Nourishment"
    ],
    image: "https://static.wixstatic.com/media/35803c_113a7fcb32bb47969456fdeb07475e81~mv2.jpg",
    icon: Star,
    whatsapp: "https://wa.me/916301846681?text=Hi,%20I%20would%20like%20to%20book%20O3%2B%20Facial%20(₹6,500,%201%20hour)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "Bridal Facial",
    description: "A luxurious skin prep ritual designed to give every bride a radiant, photo-ready glow.",
    price: "₹6,900",
    duration: "1.25 hours",
    features: [
      "Bridal Glow",
      "Photo-Ready Skin",
      "Premium Care"
    ],
    image: "https://static.wixstatic.com/media/35803c_13809a2fc8784eefb36a14ec546f5caf~mv2.jpg",
    icon: Crown,
    whatsapp: "https://wa.me/916301846681?text=Hi,%20I%20would%20like%20to%20book%20Bridal%20Facial%20(₹6,900,%201.25%20hours)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
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
    image: "https://static.wixstatic.com/media/11062b_4859fbc341c043aca2ae24ea0f44c420~mv2.jpeg",
    icon: Flower2,
    whatsapp: "https://wa.me/916301846681?text=Hi,%20I%20would%20like%20to%20book%20Shirodhara%20Therapy%20(₹5,500,%2045%20minutes)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "Sound Therapy",
    description: "Immerse yourself in the healing vibrations of Sound Therapy.",
    price: "₹2,000",
    duration: "15 minutes",
    features: [
      "Healing Vibrations",
      "Deep Relaxation",
      "Energy Balance"
    ],
    image: "https://static.wixstatic.com/media/35803c_54caea50dfed4c549b851e45075ddfec~mv2.png",
    icon: Music,
    whatsapp: "https://wa.me/916301846681?text=Hi,%20I%20would%20like%20to%20book%20Sound%20Therapy%20(₹2,000,%2015%20minutes)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "N Wellness Signature Body Treatment",
    description: "Indulge in our ultimate full-body ritual for complete rejuvenation.",
    price: "₹16,000",
    duration: "3 hours",
    features: [
      "Full Body Treatment",
      "Premium Experience",
      "Complete Relaxation"
    ],
    image: "https://static.wixstatic.com/media/35803c_3a723c17f14742e69def4d3ba8ad817f~mv2.jpg",
    icon: Award,
    whatsapp: "https://wa.me/916301846681?text=Hi,%20I%20would%20like%20to%20book%20N%20Wellness%20Signature%20Body%20Treatment%20(₹16,000,%203%20hours)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  }
];

const Services = () => {
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
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Background Image */}
        <motion.div 
          className="absolute w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            src="https://images.pexels.com/photos/11441410/pexels-photo-11441410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Our Services</h1>
          <p className="text-lg text-white/90 mt-3">
            Experience premium wellness treatments designed for your well-being
          </p>

          {/* Breadcrumb */}
          <motion.div
            className="mt-4 bg-white/10 backdrop-blur-sm px-4 py-2 inline-block rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <nav className="text-sm text-white">
              <Link to="/" className="hover:text-[#FEDEB8] font-semibold">Home</Link>
              <span className="mx-2">/</span> 
              <span className="text-[#FEDEB8]">Services</span>
            </nav>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <motion.div 
        className="container mx-auto px-4 py-12 sm:py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
            <motion.div
              key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
              initial="hidden"
                animate={isMounted ? "visible" : "hidden"}
              custom={index}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.15 }
                }}
              >
                {/* Service Image */}
                <motion.div 
                  className="relative h-48 sm:h-56 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
              <motion.img 
                src={service.image} 
                alt={service.title} 
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#98A869]/40 via-[#98A869]/20 to-transparent" />
                  <motion.div 
                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Icon className="h-5 w-5 text-[#98A869]" />
                  </motion.div>
                </motion.div>

                {/* Service Content */}
                <motion.div 
                  className="p-4 sm:p-6 flex flex-col flex-grow"
                  initial={{ opacity: 0 }}
                  animate={isMounted ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                >
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold text-[#98A869] mb-2 line-clamp-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2"
                    initial={{ opacity: 0 }}
                    animate={isMounted ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.25, duration: 0.3 }}
                  >
                    {service.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-center justify-between mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <span className="text-xl sm:text-2xl font-bold text-[#98A869]">{service.price}</span>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      <span className="text-sm sm:text-base">{service.duration}</span>
              </div>
            </motion.div>

                  <motion.ul 
                    className="space-y-2 mb-6 flex-grow"
                    initial={{ opacity: 0 }}
                    animate={isMounted ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.35, duration: 0.3 }}
                  >
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start text-sm sm:text-base text-gray-600"
                        initial={{ opacity: 0, x: -5 }}
                        animate={isMounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
                        transition={{ delay: 0.4 + idx * 0.05, duration: 0.2 }}
                      >
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#98A869] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.a
                    href={service.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#98A869] text-white text-center py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#98A869]/90 transition-colors duration-200 text-sm sm:text-base mt-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
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
