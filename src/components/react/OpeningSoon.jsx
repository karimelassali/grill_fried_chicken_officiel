import React from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const OpeningSoon = () => {
  return (
    <motion.div className="mb-6">
      <motion.div
        className="backdrop-blur-lg border-2 border-amber-500/50 rounded-3xl p-6 mb-6 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.p
          className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-4"
        >
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Flame className="w-8 h-8 text-amber-500 drop-shadow-lg" />
          </motion.div>
          <span className="text-white drop-shadow-lg font-extrabold tracking-wide">
            We're Opening Soon!
          </span>
          <motion.div
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <Flame className="w-8 h-8 text-amber-500 drop-shadow-lg" />
          </motion.div>
        </motion.p>
        
        <div className="text-center mb-4">
          <p className="text-white text-lg font-semibold drop-shadow-lg leading-relaxed">
            Get ready for the most <span className="text-amber-300 font-bold">authentic spicy experience</span> in Castel San Giovanni! 🌶️
          </p>
        </div>
        
        <CountdownTimer date={"2025-09-15T00:00:00"} />
      </motion.div>
    </motion.div>
  );
};

export default OpeningSoon; 