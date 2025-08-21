import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Instagram,
  Video,
  Mail,
  MapPin,
  ExternalLink,
  Flame,
  Star,
} from "lucide-react";
import AIAssistant from "./ai_assistant";
import HeroSection from "./HeroSection";
import SocialLinksList from "./SocialLinksList";
import Footer from "./Footer";
import LoadingSpinner from "./LoadingSpinner";

export default function SocialLinks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const links = [
    {
      id: "whatsapp",
      title: "WhatsApp",
      subtitle: "Order directly",
      href: "https://wa.me/3510505298",
      icon: MessageCircle,
      color: "border-green-500 hover:bg-green-50 hover:border-green-600",
      iconColor: "text-green-600",
      bgGradient: "from-green-500/10 to-green-600/10",
    },
    {
      id: "instagram",
      title: "Instagram",
      subtitle: "@nawabikhana",
      href: "https://instagram.com/nawabi_khanaa",
      icon: Instagram,
      color: "border-pink-500 hover:bg-pink-50 hover:border-pink-600",
      iconColor: "text-pink-600",
      bgGradient: "from-pink-500/10 to-purple-600/10",
    },
    {
      id: "tiktok",
      title: "TikTok",
      subtitle: "@nawabikhana",
      href: "https://tiktok.com/@nawabikhana",
      icon: Video,
      color: "border-gray-800 hover:bg-gray-50 hover:border-gray-900",
      iconColor: "text-gray-800",
      bgGradient: "from-gray-800/10 to-black/10",
    },
    {
      id: "email",
      title: "Email",
      subtitle: "nawabikhana@gmail.com",
      href: "mailto:nawabikhana@gmail.com",
      icon: Mail,
      color: "border-red-500 hover:bg-red-50 hover:border-red-600",
      iconColor: "text-red-600",
      bgGradient: "from-red-500/10 to-red-600/10",
    },
    {
      id: "location",
      title: "Location",
      subtitle: "Find us on Google Maps",
      href: "https://maps.app.goo.gl/Jfa3tceT1iHKbSU88",
      icon: MapPin,
      color: "border-blue-500 hover:bg-blue-50 hover:border-blue-600",
      iconColor: "text-blue-600",
      bgGradient: "from-blue-500/10 to-blue-600/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Hero Section */}
      <HeroSection 
        isLoaded={isLoaded}
        videoLoaded={videoLoaded}
        setVideoLoaded={setVideoLoaded}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* Content Section Below Hero */}
      <div className="relative bg-black min-h-screen">
        {/* Content overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        
        {/* Floating Food Elements in Links Section */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating Burger */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-10 sm:right-20 text-4xl sm:text-6xl opacity-20 drop-shadow-lg"
          >
            🍔
          </motion.div>
          
          {/* Floating Pizza */}
          <motion.div
            animate={{
              y: [0, 25, 0],
              rotate: [0, -8, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-40 left-8 sm:left-16 text-3xl sm:text-5xl opacity-20 drop-shadow-lg"
          >
            🍕
          </motion.div>
          
          {/* Floating French Fries */}
          <motion.div
            animate={{
              x: [0, 40, 0],
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute bottom-40 right-20 sm:right-32 text-2xl sm:text-4xl opacity-20 drop-shadow-lg"
          >
            🍟
          </motion.div>
          
          {/* Floating Hot Dog */}
          <motion.div
            animate={{
              x: [0, -35, 0],
              y: [0, 30, 0],
              rotate: [0, -12, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 6,
            }}
            className="absolute bottom-20 left-20 sm:left-32 text-3xl sm:text-5xl opacity-20 drop-shadow-lg"
          >
            🌭
          </motion.div>
          
          {/* Floating Spicy Elements */}
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-60 left-1/4 text-2xl sm:text-4xl opacity-20 drop-shadow-lg"
          >
            🌶️
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, 35, 0],
              rotate: [0, -18, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            className="absolute bottom-60 right-1/4 text-4xl sm:text-6xl opacity-20 drop-shadow-lg"
          >
            🔥
          </motion.div>
          
          {/* Floating Drinks */}
          <motion.div
            animate={{
              x: [0, 25, 0],
              y: [0, -15, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
            className="absolute top-80 right-1/3 text-2xl sm:text-3xl opacity-20 drop-shadow-lg"
          >
            🥤
          </motion.div>
          
          <motion.div
            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
              rotate: [0, -6, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 7,
            }}
            className="absolute top-32 left-1/4 text-2xl sm:text-4xl opacity-20 drop-shadow-lg"
          >
            🧃
          </motion.div>
        </div>
        
        {/* Social Links List */}
        <SocialLinksList 
          links={links}
          hoveredLink={hoveredLink}
          setHoveredLink={setHoveredLink}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />

        {/* Footer */}
        <Footer itemVariants={itemVariants} />
      </div>

      {/* Loading Spinner */}
      <LoadingSpinner isLoaded={isLoaded} />

      {/* AI Assistant - Fixed positioning with high z-index */}
      <div className="relative z-[9999]">
        <AIAssistant />
      </div>
    </div>
  );
}
 