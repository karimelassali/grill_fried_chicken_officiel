import React from "react";
import { motion } from "framer-motion";

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Essential Floating Food Elements */}
      
      {/* Floating Burger */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 8, -8, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-10 sm:right-20 text-5xl sm:text-7xl opacity-15 drop-shadow-2xl"
      >
        🍔
      </motion.div>
      
      {/* Floating Pizza */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -12, 12, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-40 left-8 sm:left-16 text-4xl sm:text-6xl opacity-15 drop-shadow-2xl"
      >
        🍕
      </motion.div>
      
      {/* Floating French Fries */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -25, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-40 right-20 sm:right-32 text-3xl sm:text-5xl opacity-15 drop-shadow-2xl"
      >
        🍟
      </motion.div>
      
      {/* Floating Hot Dog */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 35, 0],
          rotate: [0, -18, 18, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        className="absolute bottom-20 left-20 sm:left-32 text-4xl sm:text-6xl opacity-15 drop-shadow-2xl"
      >
        🌭
      </motion.div>
      
      {/* Spicy Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 20, -20, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-60 left-1/4 text-3xl sm:text-5xl opacity-15 drop-shadow-2xl"
      >
        🌶️
      </motion.div>
      
      {/* Fire Element */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, -25, 25, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-60 right-1/4 text-5xl sm:text-7xl opacity-15 drop-shadow-2xl"
      >
        🔥
      </motion.div>
      
      {/* Drinks */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          rotate: [0, 12, -12, 0],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute top-80 right-1/3 text-3xl sm:text-4xl opacity-15 drop-shadow-2xl"
      >
        🥤
      </motion.div>
    </div>
  );
};

export default FloatingElements; 