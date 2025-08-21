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
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 mx-auto mb-6 border-4 border-amber-500 border-t-transparent rounded-full"
        />
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-2xl font-bold text-amber-400"
        >
          Loading Nawabi Khana...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingSpinner; 