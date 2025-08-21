import React from "react";
import { motion } from "framer-motion";

const FloatingElements = () => {
  return (
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
  );
};

export default FloatingElements; 