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

      {/* Floating Elements */}
      <FloatingElements />

      {/* Hero Content - Logo, Name, and Counter */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="relative z-10 max-w-4xl mx-auto px-6 py-8 flex flex-col items-center justify-center h-full"
      >
        {/* Logo */}
        <Logo />
        
        {/* Brand Name */}
        <BrandName />
        
        {/* Opening Soon Section */}
        <OpeningSoon />
        
        {/* Halal Badge */}
        <HalalBadge />
      </motion.div>
    </div>
  );
};

export default HeroSection; 