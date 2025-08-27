import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = ({ isLoaded }) => {
  if (isLoaded) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <div className="text-center px-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 border-4 border-amber-500 border-t-transparent rounded-full"
        />
        <p className="text-white text-lg font-semibold mt-4 animate-pulse">
          Loading Spicy Town CSG...
        </p>
      </div>
    </motion.div>
  );
};

export default LoadingSpinner; 