import React from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const OpeningSoon = () => {
  return (
    <motion.div className="mb-4 md:mb-6 w-full px-2">
      <motion.div
        className="backdrop-blur-lg border-2 border-amber-500/50 rounded-3xl p-4 md:p-6 mb-4 md:mb-6 shadow-2xl max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.p
          className="text-xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-2 md:gap-4 text-center"
        >
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Flame className="w-6 h-6 md:w-8 md:h-8 text-amber-500 drop-shadow-lg" />
          </motion.div>
          <span className="text-white drop-shadow-lg font-extrabold tracking-wide">
            We're Opening Soon!
          </span>
          <motion.div
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <Flame className="w-6 h-6 md:w-8 md:h-8 text-amber-500 drop-shadow-lg" />
          </motion.div>
        </motion.p>
        
        <div className="text-center mb-4">
          <p className="text-white text-base md:text-lg font-semibold drop-shadow-lg leading-relaxed">
            Get ready for the most <span className="text-amber-300 font-bold">authentic spicy experience</span> in Castel San Giovanni! 🌶️
          </p>
        </div>
        
        <CountdownTimer date={"2025-09-15T00:00:00"} />
      </motion.div>
    </motion.div>
  );
};

export default OpeningSoon; 