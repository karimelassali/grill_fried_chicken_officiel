import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
// import AIAssistant from "./ai_assistant";
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
        whileHover={{ scale: 1.05, y: -5 }}
        className="flex backdrop-blur-md rounded-xl p-3 flex-col items-center mx-2 md:mx-4 bg-gradient-to-b from-red-900/80 to-orange-800/80 border border-red-500/30 shadow-lg"
      >
        <span className="text-4xl md:text-5xl font-black text-white tracking-wider drop-shadow-lg">
          {String(timeLeft[interval]).padStart(2, "0")}
        </span>
        <span className="text-xs uppercase text-orange-200 mt-1 font-semibold">{interval}</span>
      </motion.div>
    );
  });

  return (
    <div className="flex justify-center my-8">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default function SocialLinks() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

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
    <div 
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }} 
      className="min-h-screen w-full relative overflow-hidden"
    >
      {/* Full screen overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-red-200/40 to-orange-900/30"></div>
      
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
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="relative z-10 max-w-4xl mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen"
      >
        {/* Enhanced Header with Spicy Theme */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          {/* Logo Container with Enhanced Spicy Effects */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative mb-8"
          >
            {/* Enhanced Glowing Ring with Spicy Colors */}
            <motion.div
              animate={{
                rotate: 360,
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute inset-0 w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 blur-sm opacity-40"
            />

            {/* Logo Background Circle with enhanced shine */}
            <div className="relative w-80 h-80 mx-auto bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-2 border-orange-500/50">
              <motion.img
                fetchPriority="high"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative w-full h-full z-10 object-cover"
                alt="Nawabi Khana Logo"
                src="/premuim_logo.png"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/320x320/000000/FFFFFF?text=Nawabi+Khana+Logo";
                }}
              />
            </div>
          </motion.div>

          {/* Enhanced Brand Name with Spicy Typography */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.h1
              className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight drop-shadow-lg"
            >
              NAWABI KHANA
            </motion.h1>
            <motion.p 
              className="text-xl text-orange-200 font-semibold tracking-wide"
              animate={{ 
                textShadow: [
                  "0 0 5px rgba(255, 107, 53, 0.5)",
                  "0 0 20px rgba(255, 107, 53, 0.8)",
                  "0 0 5px rgba(255, 107, 53, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🌶️ FEEL THE RICH TASTE 🔥
            </motion.p>
          </motion.div>

          {/* Enhanced Opening Soon & Countdown */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.p
              className="text-2xl font-bold text-orange-400 mb-4 flex items-center justify-center gap-2"
            >
              <Flame className="w-6 h-6 text-red-500" />
              We're Opening Soon!
              <Flame className="w-6 h-6 text-red-500" />
            </motion.p>
            <Countdown date={"2025-09-15T00:00:00"} />
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

        {/* Enhanced Links with Better UI/UX */}
        <motion.div variants={containerVariants} className="w-full max-w-2xl space-y-4">
          {links.map((link) => {
            const IconComponent = link.icon;
            const isHovered = hoveredLink === link.id;

            return (
              <motion.a
                key={link.id}
                href={link.href}
                target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredLink(link.id)}
                onHoverEnd={() => setHoveredLink(null)}
                className={`
                  group relative block w-full p-6 bg-white/95 backdrop-blur-sm border-2 rounded-2xl 
                  shadow-lg hover:shadow-2xl transition-all duration-300 transform
                  ${link.color} ${link.bgGradient}
                `}
              >
                <div className="flex items-center">
                  {/* Enhanced Icon with Hover Effects */}
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.15 : 1,
                      rotate: isHovered ? 8 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className={`
                      w-14 h-14 rounded-xl bg-gradient-to-br from-gray-50 to-white flex items-center justify-center mr-5
                      group-hover:from-white group-hover:to-gray-50 transition-all duration-300 shadow-md
                    `}
                  >
                    <IconComponent className={`w-7 h-7 ${link.iconColor}`} />
                  </motion.div>

                  {/* Enhanced Content */}
                  <div className="flex-1">
                    <h2 className="font-bold text-gray-900 text-xl mb-2">
                      {link.title}
                    </h2>
                    <p className="text-gray-600 text-sm font-medium">{link.subtitle}</p>
                  </div>

                  {/* Enhanced Arrow with Animation */}
                  <motion.div
                    animate={{ 
                      x: isHovered ? 8 : 0,
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-400 group-hover:text-gray-600"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, transparent, ${link.iconColor.replace('text-', '').includes('green') ? 'rgba(34, 197, 94, 0.1)' : 
                      link.iconColor.replace('text-', '').includes('pink') ? 'rgba(236, 72, 153, 0.1)' :
                      link.iconColor.replace('text-', '').includes('red') ? 'rgba(239, 68, 68, 0.1)' :
                      link.iconColor.replace('text-', '').includes('blue') ? 'rgba(59, 130, 246, 0.1)' :
                      'rgba(107, 114, 128, 0.1)'}, transparent)`,
                  }}
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Enhanced Footer with Spicy Theme */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-orange-500/30 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 mr-4 rounded-full"></div>
            <motion.div 
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              N K
            </motion.div>
            <div className="w-12 h-1 bg-gradient-to-l from-orange-400 to-red-500 ml-4 rounded-full"></div>
          </div>
          <p className="text-orange-200 text-sm font-semibold">
            © 2025 NAWABI KHANA RESTAURANT
          </p>
          <p className="text-orange-300/70 text-xs mt-2">
            🌶️ Spicing up your taste buds since 2025 🔥
          </p>
        </motion.div>
      </motion.div>

      {/* AI Assistant */}
      {/* <AIAssistant /> */}
    </div>
  );
}
