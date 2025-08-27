import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LightRays from "./ui/light_rays";
import Logo from "./Logo";
import BrandName from "./BrandName";
import OpeningSoon from "./OpeningSoon";
import HalalBadge from "./HalalBadge";
import FloatingElements from "./FloatingElements";
import { ChevronDown, MapPin, Clock, Phone } from "lucide-react";

const HeroSection = ({ isLoaded, videoLoaded, setVideoLoaded, containerVariants, itemVariants }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMousePosition);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video with Enhanced Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          poster="/background.jpeg"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      </div>

      {/* Dynamic Ambient Lighting Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary light source */}
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/15 to-red-600/15 rounded-full blur-3xl"
        />
        
        {/* Secondary light source */}
        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1.1, 1, 1.1],
            x: [0, -15, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-yellow-500/15 to-orange-600/15 rounded-full blur-3xl"
        />
        
        {/* Accent lighting */}
        <motion.div
          animate={{
            opacity: [0.1, 0.25, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-2xl"
        />
      </div>

      {/* Floating Elements with Enhanced Positioning */}
      <FloatingElements />

      {/* Main Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        style={{ y, opacity }}
        className="relative z-10 w-full px-4 md:px-6 py-8 md:py-12 flex flex-col items-center justify-center min-h-screen"
      >
        {/* Content Container with Professional Layout */}
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center space-y-6 md:space-y-8">
          
          {/* Logo Section with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, type: "spring", bounce: 0.3 }}
            className="mb-2"
          >
            <Logo />
          </motion.div>
          
          {/* Enhanced Brand Name with Professional Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, type: "spring" }}
            className="text-center mb-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 tracking-tight drop-shadow-2xl">
              <span className="font-serif font-black tracking-wider text-white">
                SPICY TOWN 
              </span>
            </h1>
            
            {/* Professional Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-lg md:text-xl lg:text-2xl font-bold text-amber-300 mb-3 tracking-wide drop-shadow-lg">
                Pakistani Cuisine 🌶️
              </p>
              
              {/* Enhanced Subtitle with Professional Layout */}
              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-base md:text-lg text-gray-200 font-medium">
                <span className="text-white font-semibold">Authentic Halal</span>
                <span className="text-amber-400">•</span>
                <span className="text-white font-semibold">Premium Quality</span>
                <span className="text-amber-400">•</span>
                <span className="text-white font-semibold">Spicy Excellence</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Opening Soon Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="w-full max-w-5xl"
          >
            <OpeningSoon />
          </motion.div>
          
          {/* Enhanced Halal Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mb-4"
          >
            <HalalBadge />
          </motion.div>
          
          {/* Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-4xl mx-auto"
          >
            {/* Location Card */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-3 md:p-4 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold text-base">Location</h3>
                <p className="text-gray-200 text-xs leading-relaxed">
                  Corso Giacomo Matteotti, 44<br />
                  Castel San Giovanni, Italy
                </p>
              </div>
            </motion.div>
            
            {/* Opening Hours Card */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-3 md:p-4 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold text-base">Opening Soon</h3>
                <p className="text-gray-200 text-xs leading-relaxed">
                  September 20th<br />
                  Get Ready! 🔥
                </p>
              </div>
            </motion.div>
            
            {/* Contact Card */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-3 md:p-4 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold text-base">Contact</h3>
                <p className="text-gray-200 text-xs leading-relaxed">
                  +39 3510505298<br />
                  WhatsApp Available
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-white/70 text-sm font-medium tracking-wide">Scroll Down</span>
          <ChevronDown className="w-5 h-5 text-white/70" />
        </motion.div>
      </motion.div>

      {/* Loading Spinner */}
      {!videoLoaded && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-30">
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default HeroSection; 