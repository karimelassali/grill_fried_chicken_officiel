import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Instagram,
  Video,
  Mail,
  MapPin,
  ExternalLink,
  Phone,
} from "lucide-react";
import { Image } from "astro:assets";
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
      color: "border-green-500 hover:bg-green-50",
      iconColor: "text-green-600",
    },
    {
      id: "instagram",
      title: "Instagram",
      subtitle: "@grillfriedchicken",
      href: "https://instagram.com/grillfriedchicken",
      icon: Instagram,
      color: "border-pink-500 hover:bg-pink-50",
      iconColor: "text-pink-600",
    },
    {
      id: "tiktok",
      title: "TikTok",
      subtitle: "@grillfriedchicken",
      href: "https://tiktok.com/@grillfriedchicken",
      icon: Video,
      color: "border-gray-800 hover:bg-gray-50",
      iconColor: "text-gray-800",
    },
    {
      id: "email",
      title: "Email",
      subtitle: "grillfriedchicken@gmail.com",
      href: "mailto:grillfriedchicken@gmail.com",
      icon: Mail,
      color: "border-red-500 hover:bg-red-50",
      iconColor: "text-red-600",
    },
    {
      id: "location",
      title: "Location",
      subtitle: "Find us on Google Maps",
      href: "https://maps.app.goo.gl/Jfa3tceT1iHKbSU88",
      icon: MapPin,
      color: "border-blue-500 hover:bg-blue-50",
      iconColor: "text-blue-600",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black relative overflow-hidden">
      {/* Animated Food Elements Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Burgers */}
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
          className="absolute top-20 left-10 text-6xl opacity-10"
        >
          🍔
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
          className="absolute top-40 right-16 text-5xl opacity-10"
        >
          🍟
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
          className="absolute bottom-32 left-20 text-7xl opacity-10"
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
          className="absolute bottom-20 right-10 text-5xl opacity-10"
        >
          🥤
        </motion.div>

        <motion.div
          animate={{
            x: [0, 90, 0],
            y: [0, -60, 0],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
          className="absolute top-60 left-5 text-4xl opacity-10"
        >
          🌶️
        </motion.div>

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 80, 0],
            rotate: [0, -25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-80 right-8 text-6xl opacity-10"
        >
          🔥
        </motion.div>

        {/* Floating sparkles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            className="absolute text-yellow-400 text-2xl"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          ></motion.div>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="relative z-10 max-w-md mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen"
      >
        {/* Professional Header with Your Logo Style */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          {/* Logo Container with Premium Shine Effects */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative mb-8"
          >
            {/* Glowing Ring */}
            <motion.div
              animate={{
                rotate: 360,
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute inset-0 w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-400 blur-sm opacity-30"
            />

            {/* Logo Background Circle with shine */}
            <div className="relative w-80 h-80 mx-auto bg-black rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-2 border-gray-800">
              {/* Rotating shine effect */}
              <motion.div
                animate={{
                  rotate: 360,
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-conic from-transparent via-white/20 via-transparent to-transparent rounded-full"
              />

              {/* Subtle flame effect matching your logo */}
              <motion.div
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-t from-orange-600/30 via-red-500/20 to-transparent rounded-full"
              />

              {/* Sparkle effects around logo */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                  className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                  style={{
                    left: `${50 + 45 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                    top: `${50 + 45 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}

              {/* GFC Text in your logo style with glow */}
              <motion.img
                fetchPriority="high"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative w-full h-full z-10 text-white font-black text-6xl tracking-wider"
                style={{
                  textShadow:
                    "0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 165, 0, 0.3)",
                }}
                alt="GFC Logo"
                src="/premuim_logo.avif"
              ></motion.img>

              {/* Premium shine sweep */}
              <motion.div
                animate={{ x: ["-200%", "200%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 w-8"
              />
            </div>

            {/* Premium badge indicator */}
            {/* <motion.div
              animate={{ 
                y: [-2, 2, -2],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
            >
              <span className="text-white text-xs font-bold">★</span>
            </motion.div> */}
          </motion.div>

          {/* Brand Name matching your logo typography */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-black text-gray-200 mb-2 tracking-tight"
          >
            GRILL FRIED CHICKEN
          </motion.h1>

          {/* Professional Halal Badge */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center bg-green-800 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg"
          >
            <div className="w-2 h-2 bg-green-300 rounded-full mr-2"></div>
            HALAL CERTIFIED
          </motion.div>
        </motion.div>

        {/* Clean, Professional Links */}
        <motion.div variants={containerVariants} className="w-full space-y-4">
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
                  y: -2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredLink(link.id)}
                onHoverEnd={() => setHoveredLink(null)}
                className={`
                  group relative block w-full p-5 bg-white border-2 rounded-2xl 
                  shadow-sm hover:shadow-md transition-all duration-300
                  ${link.color}
                `}
              >
                <div className="flex items-center">
                  {/* Clean Icon */}
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.1 : 1,
                      rotate: isHovered ? 5 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className={`
                      w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mr-4
                      group-hover:bg-white transition-colors duration-300
                    `}
                  >
                    <IconComponent className={`w-6 h-6 ${link.iconColor}`} />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="font-bold text-gray-900 text-lg mb-1">
                      {link.title}
                    </h2>
                    <p className="text-gray-600 text-sm">{link.subtitle}</p>
                  </div>

                  {/* Subtle Arrow */}
                  <motion.div
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-400"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Subtle hover underline effect matching your brand */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-5 right-5 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 origin-left"
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Professional Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-200 text-center"
        >
          <div className="flex items-center justify-center mb-2">
            <div className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 mr-3"></div>
            <div className=" bg-orange-800 text-white px-4 py-1 rounded-full">
              G F C
            </div>
            <div className="w-8 h-0.5 bg-gradient-to-l from-orange-400 to-red-500 ml-3"></div>
          </div>
          <p className="text-gray-500 text-sm font-medium">
            © 2025 Grill Fried Chicken
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
