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
  Flower2,
  ShoppingCart
} from "lucide-react";
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

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
  const [isMounted, setIsMounted] = React.useState(false);
  const { addToCart, cartItems } = useCart();

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
          {servicesWithMemberPrice.map((service, index) => {
            const Icon = service.icon;
            const isLastService = index === servicesWithMemberPrice.length - 1;
            const cartItem = cartItems.find(item => item.title === service.title);
            const quantity = cartItem ? cartItem.quantity || 1 : 0;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg flex flex-col h-full p-6 transition hover:shadow-xl"
                variants={fadeInUp}
                initial="hidden"
                animate={isMounted ? "visible" : "hidden"}
                custom={index}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.15 }
                }}
              >
                <img src={service.image} alt={service.title} className="w-full h-36 object-cover rounded-xl mb-4" />
                <h2 className="text-xl font-bold text-[#98A869] mb-1">{service.title}</h2>
                <div className="text-gray-500 text-sm mb-3">{service.duration}</div>
                {isLastService ? (
                  <div className="flex items-center justify-center gap-8 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#98A869]">{service.price}</div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-8 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-800">{service.price}</div>
                      <div className="text-xs text-gray-400 mt-1">Regular</div>
                    </div>
                    <div className="border-l border-gray-200 h-8"></div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#98A869]">{service.memberPrice}</div>
                      <div className="text-xs text-[#98A869] mt-1">Member</div>
                    </div>
                  </div>
                )}
                <div className="text-sm font-semibold text-gray-700 mb-1">Includes:</div>
                <ul className="text-sm text-gray-600 space-y-1 mb-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#98A869] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {quantity === 0 ? (
                  <button
                    onClick={() => { addToCart(service); toast.success('Service added to cart!'); }}
                    className="mt-auto w-full py-2 bg-[#98A869] text-white rounded-lg font-semibold hover:bg-[#7a8d4a] transition flex items-center justify-center"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </button>
                ) : (
                  <div className="flex items-center gap-2 mt-auto">
                    <Link to="/cart" className="flex-1">
                      <button
                        className="w-full py-2 bg-[#98A869] text-white rounded-lg font-semibold hover:bg-[#7a8d4a] transition flex items-center justify-center"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Go to Cart
                      </button>
                    </Link>
                    <div className="relative">
                      <button
                        onClick={() => { addToCart(service); toast.success('Service added to cart!'); }}
                        className="w-10 h-10 bg-white border-2 border-[#98A869] text-[#98A869] rounded-full flex items-center justify-center text-xl font-bold hover:bg-[#98A869]/10 transition"
                        aria-label="Add one more"
                      >
                        +
                      </button>
                      <span className="absolute -top-2 -right-2 bg-[#98A869] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                        {quantity}
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
