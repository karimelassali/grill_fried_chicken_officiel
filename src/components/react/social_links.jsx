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
import LightRays from "./ui/light_rays";

// Helper function to calculate time left
const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return timeLeft;
};

// Countdown Component
const Countdown = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(date));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] === undefined) {
      return;
    }

    timerComponents.push(
      <motion.div
        key={interval}
        whileHover={{ scale: 1.1, y: -8, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        className="flex backdrop-blur-md rounded-2xl p-4 md:p-6 flex-col items-center mx-2 md:mx-4 bg-gradient-to-b from-red-900/90 to-orange-800/90 border-2 border-orange-400/50 shadow-2xl relative overflow-hidden group"
      >
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Animated border */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-orange-300/50"
          animate={{
            borderColor: ["rgba(251, 146, 60, 0.5)", "rgba(239, 68, 68, 0.8)", "rgba(251, 146, 60, 0.5)"],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <span className="text-5xl md:text-6xl font-black text-white tracking-wider drop-shadow-2xl relative z-10">
          {String(timeLeft[interval]).padStart(2, "0")}
        </span>
        <span className="text-sm uppercase text-orange-200 mt-2 font-bold tracking-wider relative z-10">
          {interval}
        </span>
      </motion.div>
    );
  });

  return (
    <div className="flex justify-center my-8">
      {timerComponents.length ? timerComponents : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-3xl font-bold text-orange-400 bg-gradient-to-r from-orange-600/20 to-red-600/20 px-8 py-4 rounded-2xl border border-orange-500/30"
        >
          🎉 We're Open! 🎉
        </motion.div>
      )}
    </div>
  );
};

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
      href: "https://instagram.com/nawabikhana",
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
      {/* Background Video */}
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
        
        {/* Fallback background image */}
        {!videoLoaded && (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/background.jpeg)' }}
          />
        )}
      </div>
      
      {/* Enhanced overlay with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-red-900/50 to-orange-900/60"></div>
      
              {/* Enhanced Light Rays */}
        <div className="fixed inset-0 pointer-events-none" >
          <LightRays
            raysOrigin="top-center"
            raysColor="#ff6b35"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        
        {/* Additional ambient lighting effects */}
        <div className="fixed inset-0 pointer-events-none">
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

      {/* Enhanced Floating Spicy Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Chili Peppers */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 text-6xl opacity-20 drop-shadow-lg"
        >
          🌶️
        </motion.div>

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-40 right-16 text-5xl opacity-20 drop-shadow-lg"
        >
          🔥
        </motion.div>

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-32 left-20 text-7xl opacity-20 drop-shadow-lg"
        >
          🍗
        </motion.div>

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 30, 0],
            rotate: [0, -12, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
          className="absolute bottom-20 right-10 text-5xl opacity-20 drop-shadow-lg"
        >
          🥤
        </motion.div>

        {/* Additional Spicy Elements */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
          className="absolute top-60 left-1/4 text-4xl opacity-15 drop-shadow-lg"
        >
          🌶️
        </motion.div>

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
          className="absolute bottom-40 right-1/4 text-6xl opacity-15 drop-shadow-lg"
        >
          🔥
        </motion.div>
        
        {/* Additional floating elements for enhanced visual appeal */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-32 right-1/3 text-5xl opacity-20 drop-shadow-lg"
        >
          🍔
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -12, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute bottom-60 left-1/3 text-4xl opacity-20 drop-shadow-lg"
        >
          🥤
        </motion.div>
        
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7,
          }}
          className="absolute top-80 right-20 text-6xl opacity-15 drop-shadow-lg"
        >
          🍟
        </motion.div>
      </div>

      {/* Loading Spinner */}
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 mx-auto mb-6 border-4 border-orange-500 border-t-transparent rounded-full"
            />
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-2xl font-bold text-orange-400"
            >
              Loading Nawabi Khana...
            </motion.p>
          </div>
        </motion.div>
      )}
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="relative z-10 max-w-4xl mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen"
      >
        {/* Enhanced Header with Spicy Theme */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          {/* Enhanced Logo Container with Video Background Effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative mb-8"
          >
            {/* Multiple Glowing Rings with Enhanced Spicy Colors */}
            <motion.div
              animate={{
                rotate: 360,
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute inset-0 w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 blur-sm opacity-30"
            />
            
            <motion.div
              animate={{
                rotate: -360,
                opacity: [0.1, 0.4, 0.1],
                scale: [1.1, 1.3, 1.1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute inset-0 w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 blur-md opacity-20"
            />

            {/* Enhanced Logo Background Circle with metallic shine */}
            <div className="relative w-80 h-80 mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-2 border-orange-500/50">
              {/* Shine effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-60"></div>
              
              <motion.img
                fetchPriority="high"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                className="relative w-full h-full z-10 object-cover rounded-full"
                alt="Nawabi Khana Logo"
                src="/premuim_logo.png"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/320x320/000000/FFFFFF?text=Nawabi+Khana+Logo";
                }}
              />
              
              {/* Pulsing border effect */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full border-4 border-orange-400/50"
              />
            </div>
          </motion.div>

          {/* Enhanced Brand Name with Advanced Typography and Effects */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.h1
              className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight drop-shadow-2xl relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, type: "spring" }}
            >
              {/* Text shadow layers for depth */}
              <span className="relative z-10">NAWABI KHANA</span>
              <motion.span
                className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 blur-sm opacity-70"
                animate={{
                  filter: ["blur(2px)", "blur(4px)", "blur(2px)"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                NAWABI KHANA
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-orange-200 font-bold tracking-wider mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
            >
              🌶️ FEEL THE RICH TASTE 🔥
            </motion.p>
            
            {/* Enhanced subtitle with gradient text */}
            <motion.p
              className="text-lg md:text-xl text-orange-300/80 font-medium tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Authentic Halal Fast Food • Premium Quality • Spicy Excellence
            </motion.p>
          </motion.div>

          {/* Enhanced Opening Soon & Countdown */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <motion.p
                className="text-2xl md:text-3xl font-bold text-orange-300 mb-4 flex items-center justify-center gap-3"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Flame className="w-8 h-8 text-red-500 drop-shadow-lg" />
                </motion.div>
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  We're Opening Soon!
                </span>
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Flame className="w-8 h-8 text-red-500 drop-shadow-lg" />
                </motion.div>
              </motion.p>
              
              <div className="text-center mb-4">
                <p className="text-orange-200 text-lg font-medium">
                  Get ready for the spiciest experience in Castel San Giovanni! 🌶️
                </p>
              </div>
              
              <Countdown date={"2025-09-15T00:00:00"} />
            </motion.div>
          </motion.div>

          {/* Enhanced Halal Badge with Spicy Theme */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="inline-flex items-center bg-gradient-to-r from-green-700 to-green-600 text-white px-8 py-3 rounded-full font-bold text-sm shadow-xl border border-green-400/30"
          >
            <Star className="w-4 h-4 mr-2 text-green-300" />
            HALAL CERTIFIED
            <Star className="w-4 h-4 ml-2 text-green-300" />
          </motion.div>
        </motion.div>

        {/* Enhanced Links with Advanced UI/UX */}
        <motion.div variants={containerVariants} className="w-full max-w-3xl space-y-6">
          {links.map((link, index) => {
            const IconComponent = link.icon;
            const isHovered = hoveredLink === link.id;

            return (
              <motion.a
                key={link.id}
                href={link.href}
                target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                variants={itemVariants}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1, duration: 0.6, type: "spring" }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: { duration: 0.3, type: "spring" },
                }}
                whileTap={{ scale: 0.97 }}
                onHoverStart={() => setHoveredLink(link.id)}
                onHoverEnd={() => setHoveredLink(null)}
                className={`
                  group relative block w-full p-8 bg-white/95 backdrop-blur-md border-2 rounded-3xl 
                  shadow-xl hover:shadow-3xl transition-all duration-500 transform
                  ${link.color} ${link.bgGradient} overflow-hidden
                `}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${link.iconColor.replace('text-', '').includes('green') ? 'rgba(34, 197, 94, 0.05)' : 
                      link.iconColor.replace('text-', '').includes('pink') ? 'rgba(236, 72, 153, 0.05)' :
                      link.iconColor.replace('text-', '').includes('red') ? 'rgba(239, 68, 68, 0.05)' :
                      link.iconColor.replace('text-', '').includes('blue') ? 'rgba(59, 130, 246, 0.05)' :
                      'rgba(107, 114, 128, 0.05)'}, transparent 50%, transparent)`,
                  }}
                />
                
                {/* Floating particles effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 80%, ${link.iconColor.replace('text-', '').includes('green') ? 'rgba(34, 197, 94, 0.1)' : 
                      link.iconColor.replace('text-', '').includes('pink') ? 'rgba(236, 72, 153, 0.1)' :
                      link.iconColor.replace('text-', '').includes('red') ? 'rgba(239, 68, 68, 0.1)' :
                      link.iconColor.replace('text-', '').includes('blue') ? 'rgba(59, 130, 246, 0.1)' :
                      'rgba(107, 114, 128, 0.1)'} 0%, transparent 50%)`,
                    backgroundSize: "200% 200%",
                  }}
                />

                <div className="flex items-center relative z-10">
                  {/* Enhanced Icon with Advanced Hover Effects */}
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.2 : 1,
                      rotate: isHovered ? 12 : 0,
                      y: isHovered ? -5 : 0,
                    }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className={`
                      w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-white flex items-center justify-center mr-6
                      group-hover:from-white group-hover:to-gray-50 transition-all duration-500 shadow-lg
                      border border-gray-200/50 group-hover:border-gray-300/70
                    `}
                  >
                    <IconComponent className={`w-8 h-8 ${link.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                  </motion.div>

                  {/* Enhanced Content */}
                  <div className="flex-1">
                    <h2 className="font-bold text-gray-900 text-2xl mb-3 group-hover:text-gray-800 transition-colors duration-300">
                      {link.title}
                    </h2>
                    <p className="text-gray-600 text-base font-medium group-hover:text-gray-700 transition-colors duration-300">
                      {link.subtitle}
                    </p>
                  </div>

                  {/* Enhanced Arrow with Advanced Animation */}
                  <motion.div
                    animate={{ 
                      x: isHovered ? 12 : 0,
                      scale: isHovered ? 1.2 : 1,
                      rotate: isHovered ? 15 : 0,
                    }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300"
                  >
                    <ExternalLink className="w-7 h-7" />
                  </motion.div>
                </div>

                {/* Enhanced Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(45deg, transparent, ${link.iconColor.replace('text-', '').includes('green') ? 'rgba(34, 197, 94, 0.08)' : 
                      link.iconColor.replace('text-', '').includes('pink') ? 'rgba(236, 72, 153, 0.08)' :
                      link.iconColor.replace('text-', '').includes('red') ? 'rgba(239, 68, 68, 0.08)' :
                      link.iconColor.replace('text-', '').includes('blue') ? 'rgba(59, 130, 246, 0.08)' :
                      'rgba(107, 114, 128, 0.08)'}, transparent)`,
                  }}
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Enhanced Footer with Advanced Spicy Theme */}
        <motion.div
          variants={itemVariants}
          className="mt-20 pt-12 border-t border-orange-500/30 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20"
            >
              <Star className="w-8 h-8 text-white" />
            </motion.div>
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <motion.div 
              className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-500 mr-6 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 3.5, duration: 1 }}
            />
            <motion.div 
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-full font-bold text-xl shadow-2xl border-2 border-orange-400/50"
              whileHover={{ scale: 1.1, rotate: 8, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              N K
            </motion.div>
            <motion.div 
              className="w-16 h-1 bg-gradient-to-l from-orange-400 to-red-500 ml-6 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 3.5, duration: 1 }}
            />
          </div>
          
          <motion.p 
            className="text-orange-200 text-lg font-bold mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 0.8 }}
          >
            © 2025 NAWABI KHANA RESTAURANT
          </motion.p>
          
          <motion.p 
            className="text-orange-300/80 text-sm font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.2, duration: 0.8 }}
          >
            🌶️ Spicing up your taste buds since 2025 🔥
          </motion.p>
          
          {/* Additional info */}
          <motion.div
            className="flex items-center justify-center space-x-6 text-orange-200/70 text-xs font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5, duration: 0.8 }}
          >
            <span className="flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              Castel San Giovanni
            </span>
            <span className="flex items-center">
              <Star className="w-3 h-3 mr-1" />
              Halal Certified
            </span>
            <span className="flex items-center">
              <Flame className="w-3 h-3 mr-1" />
              Spicy Specialties
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
}
