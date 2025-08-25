import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Flame } from "lucide-react";

const Footer = ({ itemVariants }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-16 sm:pb-24 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3, duration: 0.8 }}
    >
      {/* Decorative elements with refined styling */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Menara-inspired decorative element */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative w-16 h-16 sm:w-20 sm:h-20"
        >
          {/* Central dome */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-400 to-orange-600 rounded-full shadow-2xl border-4 border-white/20"></div>
          {/* Dome top */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-amber-300 rounded-full"></div>
          {/* Star overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-lg" />
          </div>
        </motion.div>
      </div>
      
      <div className="flex items-center justify-center mb-6 sm:mb-8">
        <motion.div 
          className="w-12 h-1 sm:w-20 bg-gradient-to-r from-amber-400 to-orange-500 mr-4 sm:mr-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        />
        <motion.div 
          className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-xl sm:text-2xl shadow-2xl border-2 border-amber-400/50"
          whileHover={{ scale: 1.05, rotate: 5, y: -3 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3, type: "spring" }}
        >
          N K
        </motion.div>
        <motion.div 
          className="w-12 h-1 sm:w-20 bg-gradient-to-l from-amber-400 to-orange-500 ml-4 sm:ml-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        />
      </div>
      
      <motion.p 
        className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4 drop-shadow-lg tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.8 }}
      >
        © 2025 SPICY TOWN RESTAURANT
      </motion.p>
      
      <motion.p 
        className="text-amber-300 text-sm sm:text-base font-semibold mb-4 sm:mb-6 drop-shadow-lg tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2, duration: 0.8 }}
      >
        🌶️ Spicing up your taste buds since 2025 🔥
      </motion.p>
      
      {/* Enhanced additional info with professional styling */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-amber-200 text-xs sm:text-sm font-semibold drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.5, duration: 0.8 }}
      >
        <span className="flex items-center">
          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          Castel San Giovanni
        </span>
        <span className="flex items-center">
          <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          Halal Certified
        </span>
        <span className="flex items-center">
          <Flame className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          Spicy Specialties
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Footer; 