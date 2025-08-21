import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Flame } from "lucide-react";

const Footer = ({ itemVariants }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-24 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3, duration: 0.8 }}
    >
      {/* Decorative elements with refined styling */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20"
        >
          <Star className="w-10 h-10 text-white" />
        </motion.div>
      </div>
      
      <div className="flex items-center justify-center mb-8">
        <motion.div 
          className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mr-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        />
        <motion.div 
          className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-10 py-4 rounded-full font-bold text-2xl shadow-2xl border-2 border-amber-400/50"
          whileHover={{ scale: 1.05, rotate: 5, y: -3 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3, type: "spring" }}
        >
          N K
        </motion.div>
        <motion.div 
          className="w-20 h-1 bg-gradient-to-l from-amber-400 to-orange-500 ml-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        />
      </div>
      
      <motion.p 
        className="text-white text-xl font-bold mb-4 drop-shadow-lg tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.8 }}
      >
        © 2025 NAWABI KHANA RESTAURANT
      </motion.p>
      
      <motion.p 
        className="text-amber-300 text-base font-semibold mb-6 drop-shadow-lg tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2, duration: 0.8 }}
      >
        🌶️ Spicing up your taste buds since 2025 🔥
      </motion.p>
      
      {/* Enhanced additional info with professional styling */}
      <motion.div
        className="flex items-center justify-center space-x-8 text-amber-200 text-sm font-semibold drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.5, duration: 0.8 }}
      >
        <span className="flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          Castel San Giovanni
        </span>
        <span className="flex items-center">
          <Star className="w-4 h-4 mr-2" />
          Halal Certified
        </span>
        <span className="flex items-center">
          <Flame className="w-4 h-4 mr-2" />
          Spicy Specialties
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Footer; 