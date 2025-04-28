import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CheckCircle, Clock, Leaf, Gem, Footprints, Smile, Star, Crown, Music, Award, Flower2 } from "lucide-react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const carouselSlides = [
  {
    image: "https://images.pexels.com/photos/19666188/pexels-photo-19666188/free-photo-of-relaxation-in-the-massage-parlor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Experience Ultimate Relaxation",
    subtitle: "Discover our premium wellness services",
  },
  {
    image: "https://images.pexels.com/photos/6629601/pexels-photo-6629601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Holistic Wellness Journey",
    subtitle: "Transform your mind, body, and soul",
  },
  {
    image: "https://images.pexels.com/photos/161477/treatment-finger-keep-hand-161477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Luxury Spa Treatments",
    subtitle: "Indulge in our signature therapies",
  },
];

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
  //   whatsapp: "https://wa.me/916301846681?text=Hi,%20I%20would%20like%20to%20book%20Sound%20Therapy%20(₹2,000,%2015%20minutes)%20at%20N%20Wellness.%20Please%20help%20me%20schedule%20an%20appointment."
  // },
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

// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     designation: "Yoga Enthusiast",
//     company: "Wellness Journey",
//     logo: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
//     message: "The personalized wellness approach has completely transformed my daily routine. I feel more energized and balanced than ever before.",
//     rating: 5,
//   },
//   {
//     name: "Michael Chen",
//     designation: "Business Professional",
//     company: "Corporate Wellness",
//     logo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
//     message: "The expert guidance and support have helped me manage stress and improve my overall well-being. Highly recommended!",
//     rating: 4.5,
//   },
//   {
//     name: "Emma Rodriguez",
//     designation: "Fitness Instructor",
//     company: "Health & Wellness",
//     logo: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
//     message: "The holistic approach to wellness has been life-changing. I've found a perfect balance between physical and mental health.",
//     rating: 5,
//   },
// ];

const Home = () => {
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

  return (
    <div className="bg-[#FEDEB8]/5 text-[#98A869]">
      {/* Carousel Section */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ 
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          }
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="w-full h-[400px] sm:h-[500px] relative bg-[#98A869]/5"
      >
        {carouselSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div className="max-w-4xl mx-auto">
                  <motion.h1
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    className="text-sm sm:text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  >
                    {slide.subtitle}
                  </motion.p>
                  <Link to="/services">
                    <motion.button
                      className="px-4 sm:px-6 py-2 sm:py-2.5 bg-[#98A869] text-white rounded-full hover:bg-[#98A869]/90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-xs sm:text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore Our Services
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* About Section */}
       <motion.div 
         className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 bg-white"
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
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <p className="text-base sm:text-lg text-[#98A869]/80 leading-relaxed mb-6 sm:mb-8">
               At our N wellness center, we believe in a holistic approach to health and well-being. 
               Our expert team of practitioners is dedicated to helping you achieve optimal wellness 
               through personalized treatments and therapies.
             </p>
             <div className="space-y-3 sm:space-y-4">
               {["Personalized wellness plans", "Expert practitioners", "State-of-the-art facilities"].map((item, index) => (
                 <motion.div 
                   key={index}
                   className="flex items-center space-x-3"
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                 >
                   <CheckCircle className="text-[#98A869] w-5 h-5 sm:w-6 sm:h-6" />
                   <span className="text-[#98A869]/90 text-sm sm:text-base">{item}</span>
                 </motion.div>
               ))}
             </div>
           </motion.div>
           <motion.div 
             className="relative group mt-8 md:mt-0"
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <div className="absolute -inset-1 bg-gradient-to-r from-[#98A869] to-[#FEDEB8] rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
             <img
               src="https://images.pexels.com/photos/3865557/pexels-photo-3865557.jpeg"
               alt="Wellness Center Interior"
               className="relative w-full h-full object-cover rounded-3xl shadow-xl transform group-hover:scale-[1.02] transition duration-700"
             />
           </motion.div>
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16">Our Signature Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-32 sm:h-40 object-cover rounded-lg mb-4"
                  />
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#98A869] p-1.5 sm:p-2 rounded-full text-white">
                    <Icon size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#98A869] font-semibold text-sm sm:text-base">{service.price}</span>
                  <span className="text-gray-500 flex items-center text-xs sm:text-sm">
                    <Clock size={14} className="mr-1" />
                    {service.duration}
                  </span>
                </div>
                <ul className="space-y-1 sm:space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-xs sm:text-sm">
                      <CheckCircle size={14} className="text-[#98A869] mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={service.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 sm:py-2.5 bg-[#98A869] text-white text-center rounded-lg hover:bg-[#98A869]/90 transition-colors duration-200 text-sm"
                >
                  Book Now
                </a>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16">Why Choose N Wellness</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                image: "https://cdn-icons-png.flaticon.com/512/16505/16505190.png",
                title: "Expert Therapists",
                description: "Our certified professionals ensure the highest quality of service.",
              },
              {
                image: "https://cdn-icons-png.freepik.com/256/15396/15396673.png?ga=GA1.1.1966422209.1745557003&semt=ais_hybrid",
                title: "Premium Products",
                description: "We use only the finest natural and organic products.",
              },
              {
                image: "https://cdn-icons-png.flaticon.com/128/17835/17835525.png",
                title: "Holistic Approach",
                description: "We focus on your complete well-being and relaxation.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#FEDEB8]/5 p-4 sm:p-6 rounded-2xl shadow-lg text-center hover:bg-[#FEDEB8]/10 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
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
          <Link to="/contact">
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
