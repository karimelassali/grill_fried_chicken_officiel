import React from "react";
import { motion } from "framer-motion";
import LightRays from "./ui/light_rays";
import Logo from "./Logo";
import BrandName from "./BrandName";
import OpeningSoon from "./OpeningSoon";
import HalalBadge from "./HalalBadge";
import FloatingElements from "./FloatingElements";

const HeroSection = ({ isLoaded, videoLoaded, setVideoLoaded, containerVariants, itemVariants }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video - Only in Hero Section */}
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
        
        {/* Fallback background image - only show when video fails */}
        {!videoLoaded && (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-0"
            style={{ backgroundImage: 'url(/background.jpeg)' }}
          />
        )}
      </div>
      
      {/* Enhanced overlay with colors matching the video - reduced opacity for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-orange-900/15 to-red-800/20"></div>
      
     
      
      {/* Additional ambient lighting effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-yellow-500/20 to-orange-600/20 rounded-full blur-3xl"
        />
      </div>

      {/* Menara (Mughal Domes) Design Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Central Dome */}
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
        >
          <div className="w-full h-full bg-gradient-to-b from-amber-400/30 to-orange-600/30 rounded-full border-2 border-amber-500/40 shadow-2xl"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500/50 rounded-full"></div>
        </motion.div>
        
        {/* Left Dome */}
        <motion.div
          animate={{
            opacity: [0.08, 0.15, 0.08],
            scale: [1, 1.03, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/4 left-1/4 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
        >
          <div className="w-full h-full bg-gradient-to-b from-red-500/30 to-red-700/30 rounded-full border-2 border-red-500/40 shadow-xl"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500/50 rounded-full"></div>
        </motion.div>
        
        {/* Right Dome */}
        <motion.div
          animate={{
            opacity: [0.08, 0.15, 0.08],
            scale: [1, 1.03, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-1/4 right-1/4 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
        >
          <div className="w-full h-full bg-gradient-to-b from-red-500/30 to-red-700/30 rounded-full border-2 border-red-500/40 shadow-xl"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500/50 rounded-full"></div>
        </motion.div>
        
        {/* Small Right Dome */}
        <motion.div
          animate={{
            opacity: [0.06, 0.12, 0.06],
            scale: [1, 1.02, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-1/6 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
        >
          <div className="w-full h-full bg-gradient-to-b from-red-500/30 to-red-700/30 rounded-full border-2 border-red-500/40 shadow-lg"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500/50 rounded-full"></div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      {/* Hero Content - Logo, Name, and Counter */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="relative z-10 w-full px-4 md:px-6 py-4 md:py-8 flex flex-col items-center justify-center min-h-screen"
      >
        {/* Container with max-width for large screens */}
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
          {/* Logo */}
          <Logo />
          
          {/* Brand Name */}
          <BrandName />
          
          {/* Opening Soon Section */}
          <OpeningSoon />
          
          {/* Halal Badge */}
          <HalalBadge />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection; 