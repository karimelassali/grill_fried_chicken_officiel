import React from "react";
import { motion } from "framer-motion";

const BrandName = () => {
  return (
    <motion.div className="mb-6">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight drop-shadow-2xl relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1, type: "spring" }}
      >
        {/* Main text with white color and gold border effect */}
        <span className="relative flex justify-center items-center z-10 text-white">
          <span className="relative">
            NAWABI KHANA
            
          </span>
        </span>
        
        {/* Enhanced gold border glow */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: 'linear-gradient(45deg, #fbbf24, #f59e0b, #fbbf24)',
            filter: 'blur(8px)',
            opacity: 0.3,
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.h1>
      
      {/* Professional tagline with refined styling */}
      <motion.div 
        className="mb-4 backdrop-blur-md rounded-3xl p-2 flex justify-center flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
      >
        <motion.p 
          className="text-xl md:text-2xl font-bold text-amber-200 mb-2 tracking-wide drop-shadow-lg"
        >
          🌶️ FEEL THE RICH TASTE 🔥
        </motion.p>
        
        {/* Enhanced subtitle with professional typography */}
        <motion.p
          className="text-base md:text-lg text-gray-200 font-medium tracking-wide leading-relaxed drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-amber-300 font-semibold">Authentic Halal Fast Food</span> 
          <span className="text-white mx-3">•</span> 
          <span className="text-amber-300 font-semibold">Premium Quality</span> 
          <span className="text-white mx-3">•</span> 
          <span className="text-amber-300 font-semibold">Spicy Excellence</span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default BrandName; 