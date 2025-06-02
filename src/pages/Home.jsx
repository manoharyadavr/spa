import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { CheckCircle, Clock, Leaf, Gem, Footprints, Smile, Star, Crown, Music, Award, Flower2 } from "lucide-react";
import { toast } from 'react-hot-toast';
import useScrollToTop from '../hooks/useScrollToTop';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

const carouselSlides = [
  {
    image: "/images/image4.png",
    title: "N Wellness Membership",
    subtitle: "Invest in yourself. Receive more in return. Join the Nwellness Membership and unlock ₹70,000 worth of services for just ₹50,000.",
    details: [
      "Pay ₹50,000",
      "Get ₹70,000 in spa & wellness services",
      "₹20,000 extra value — completely free",
      "Valid on all services"
    ],
    cta: "Limited memberships available. To join, call us or send a message on WhatsApp."
  },
];

const services = [
  {
    title: "Japanese Head Spa",
    description: "A 9-step ritual designed to cleanse, hydrate, and heal the scalp and hair.",
    price: "₹6,500",
    duration: "60 minutes",
    image: "/images/japaneseHeadSpa.jpg",
    icon: Crown,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20Japanese%20Head%20Spa%20(₹6,500,%2060%20mins)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "Warm Stone Massage",
    description: "Smooth, heated basalt stones glide over muscles to melt away tension and boost circulation.",
    price: "₹6,500",
    duration: "60 minutes",
    image: "/images/warmStoneMassage.jpg",
    icon: Gem,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20Warm%20Stone%20Massage%20(₹6,500,%201%20hour)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "Aromatherapy",
    description: "A bespoke blend of pure essential oils is gently massaged into your skin.",
    price: "₹6,500",
    duration: "60 minutes",
    image: "/images/aromatherapy.jpg",
    icon: Leaf,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20Aromatherapy%20(₹6,500,%201%20hour)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "Body Polishing",
    description: "Experience our signature 6‑step Body Polishing Ritual",
    price: "₹9,800",
    duration: "90 minutes",
    image: "/images/bodyPolishing.jpg",
    icon: Gem,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20Body%20Polishing%20(₹8,999,%201.5%20hours)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "Foot Reflexology",
    description: "Targeted pressure massage on specific foot zones",
    price: "₹3,000",
    duration: "35 minutes",
    image: "/images/footReflexology.jpg",
    icon: Footprints,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20Foot%20Reflexology%20(₹3,000,%2035%20minutes)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "OxyGlow Facial",
    description: "Our 11-step OxyGlow Facial is designed to deeply cleanse, hydrate, and oxygenate your skin for an instant radiant glow.",
    price: "₹6,500",
    duration: "60 minutes",
    image: "/images/oxyglowFacial.jpg",
    icon: Smile,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20OxyGlow%20Facial%20(₹6,500,%201%20hour)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "O3+ Facial",
    description: "A professional-grade facial that uses active oxygen and high-performance ingredients",
    price: "₹6,500",
    duration: "60 minutes",
    image: "images/o3+facial.jpg",
    icon: Star,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20O3%2B%20Facial%20(₹6,500,%201%20hour)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "Bridal Facial",
    description: "A luxurious skin prep ritual designed to give every bride a radiant, photo-ready glow.",
    price: "₹7,999",
    duration: "75 minutes",
    image: "/images/bridalFacial.jpg",
    icon: Crown,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20Bridal%20Facial%20(₹6,900,%201.25%20hours)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "Shirodhara Therapy",
    description: "Ayurvedic therapy where a steady stream of warm herbal oil is poured over the forehead.",
    price: "₹5,500",
    duration: "45 minutes",
    image: "/images/shirodharaTherapy.jpg",
    icon: Flower2,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20Shirodhara%20Therapy%20(₹5,500,%2045%20minutes)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  },
  {
    title: "N Wellness Signature Body Treatment",
    description: "Indulge in our ultimate full-body ritual combining a relaxing full body massage, OxyGlow facial, Japanese head spa.",
    price: "₹16,000",
    duration: "180 minutes",
    image: "/images/nwellnessSignature.png",
    icon: Award,
    whatsapp: "https://wa.me/919391803316?text=Hi,%20I%20would%20like%20to%20book%20N%20Wellness%20Signature%20Body%20Treatment%20(₹16,000,%203%20hours)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  }
];

const Home = () => {
  useScrollToTop();
  const testimonialRef = useRef(null);

  const scrollLeft = () => {
    if (testimonialRef.current) {
      testimonialRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (testimonialRef.current) {
      testimonialRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  // Add memberPrice to each service
  const servicesWithMemberPrice = services.map(service => ({
    ...service,
    memberPrice: service.memberPrice || `₹${(parseFloat(service.price.replace('₹', '').replace(/,/g, '')) * 0.6).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
  }));

  return (
    <div className="bg-[#FEDEB8]/5 text-[#98A869]">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px]">
        <video
          src="/video/nwellness.MP4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
       
      </div>
      {/* About Section */}
       <motion.div 
         className="w-full px-4 sm:px-6 py-12 sm:py-20 bg-white"
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.2 }}
         variants={fadeIn}
       >
         <motion.h2 
           className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#98A869] text-center mb-8 sm:mb-16"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
         >
           About Our N Wellness Studio
         </motion.h2>
         <div className="max-w-6xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
             <motion.div 
               className="relative group order-2 lg:order-1"
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
               <div className="absolute -inset-1 bg-gradient-to-r from-[#98A869] to-[#FEDEB8] rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
               <img
                 src="/video/aboutImg.DNG"
                 alt="N Wellness Studio Interior"
                 className="relative w-full h-[300px] object-cover rounded-3xl shadow-xl transform group-hover:scale-[1.02] transition duration-700"
               />
             </motion.div>
             <motion.div
               className="order-1 lg:order-2"
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
               <p className="text-[#98A869]/90 text-lg leading-relaxed">
                 Welcome to <strong className="text-[#98A869] text-xl">N Wellness</strong> — Hyderabad's finest women's wellness studio. Born from a dream to create more than a spa, N Wellness offers soul-soothing therapies, signature Japanese Head Spa experiences, and a space where every woman feels deeply cared for.
               </p>
               <p className="text-[#98A869]/80 text-lg leading-relaxed">
                 Led by a passionate expert, every session is crafted with love, skill, and true attention to your wellbeing. Here, self-care becomes an art — and every visit, a journey back to yourself. Experience relaxation, transformation, and pure magic. Only at N Wellness.
               </p>
             </motion.div>
           </div>
         </div>
       </motion.div>

      {/* Services Section */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 overflow-hidden bg-[#FEDEB8]/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16"
          variants={textVariants}
        >
          Our Signature Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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

      {/* Why Choose Us Section */}
      <motion.div
        className="bg-white py-12 sm:py-20 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16"
            variants={textVariants}
          >
            Why Choose N Wellness
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                image: "/images/expertTherapish.png",
                title: "Expert Therapists",
                description: "Our certified professionals ensure the highest quality of service.",
              },
              {
                image: "/images/premium.png",
                title: "Premium Products",
                description: "We use only the finest natural and organic products.",
              },
              {
                image: "/images/holisticApproach.png",
                title: "Holistic Approach",
                description: "We focus on your complete well-being and relaxation.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#FEDEB8]/5 p-4 sm:p-6 rounded-2xl shadow-lg text-center hover:bg-[#FEDEB8]/10 transition-all duration-500"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div 
                  className="relative w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4"
                  variants={imageVariants}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-full transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>
                <motion.h3 
                  className="text-base sm:text-lg font-semibold mb-2"
                  variants={textVariants}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-xs sm:text-sm text-gray-600"
                  variants={textVariants}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      {/* <motion.div
        className="py-12 sm:py-20 bg-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16">What Our Clients Say</h2>
          <div className="relative max-w-7xl mx-auto">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#98A869] text-white p-2 rounded-full hover:bg-[#98A869]/90 transition-colors duration-200"
              onClick={scrollLeft}
            >
              ◀
            </button>
            <div
              ref={testimonialRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-[#FEDEB8]/20 p-4 sm:p-6 rounded-2xl min-w-[280px] sm:min-w-[300px] max-w-[350px] flex-shrink-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.logo}
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {testimonial.designation}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 italic mb-4">"{testimonial.message}"</p>
                  <div className="text-[#98A869]">
                    {"⭐".repeat(Math.floor(testimonial.rating))}
                    {testimonial.rating % 1 !== 0 && "⭐"}
                  </div>
                </motion.div>
              ))}
            </div>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#98A869] text-white p-2 rounded-full hover:bg-[#98A869]/90 transition-colors duration-200"
              onClick={scrollRight}
            >
              ▶
            </button>
          </div>
        </div>
      </motion.div> */}

      {/* CTA Section */}
      <motion.div
        className="py-12 sm:py-20 bg-[#98A869] text-white text-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Ready to Start Your Wellness Journey?</h2>
          <p className="text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
            Take the first step towards a healthier, happier you. Our team is here to guide you every step of the way.
          </p>
          <Link to="/services">
            <motion.button
              className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white text-[#98A869] rounded-full hover:bg-[#FEDEB8] transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Session
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
