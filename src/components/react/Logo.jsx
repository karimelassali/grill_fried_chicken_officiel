import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative mb-6 md:mb-8 w-full flex justify-center"
    >
      {/* Professional Glowing Rings with Refined Colors */}
      <motion.div
        animate={{
          rotate: 360,
          opacity: [0.15, 0.4, 0.15],
          scale: [1, 1.15, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 blur-sm opacity-20"
      />
      
      <motion.div
        animate={{
          rotate: -360,
          opacity: [0.1, 0.3, 0.1],
          scale: [1.1, 1.25, 1.1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 blur-md opacity-15"
      />

      {/* Professional Logo Background Circle */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-2 border-amber-500/40">
        {/* Sophisticated shine effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-40"></div>
        
        <motion.img
          fetchPriority="high"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
          className="relative w-full h-full z-10 object-cover rounded-full"
          alt="Spicy Town CSG Logo"
          src="/premuim_logo.png"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/320x320/000000/FFFFFF?text=Spicy+Town+Logo";
          }}
        />
        
        {/* Refined pulsing border effect */}
        <motion.div
          animate={{
            scale: [1, 1.03, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full border-4 border-amber-400/40"
        />
      </div>
    </motion.div>
  );
};

export default Logo; 