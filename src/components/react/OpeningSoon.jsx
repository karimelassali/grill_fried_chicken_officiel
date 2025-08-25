import React from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const OpeningSoon = () => {
  return (
    <motion.div className="mb-4 md:mb-6 w-full px-2">
      <motion.div
        className="backdrop-blur-xl bg-gradient-to-r from-white/10 via-amber-500/10 to-white/10 border border-amber-400/30 rounded-3xl p-4 md:p-6 mb-4 shadow-2xl max-w-5xl mx-auto relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl"></div>
        </div>
        
        {/* Header with Enhanced Icons */}
        <motion.div
          className="text-center mb-4 relative z-10"
        >
          <motion.div
            className="text-center mb-3"
          >
            <h2 className="text-xl md:text-3xl font-black text-white drop-shadow-lg tracking-wide">
              WE'RE OPENING SOON!
            </h2>
          </motion.div>
          
          {/* Enhanced Subtitle */}
          <motion.p
            className="text-base md:text-lg text-white font-semibold drop-shadow-lg leading-relaxed max-w-3xl mx-auto mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Get ready for the most <span className="text-amber-300 font-bold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">authentic spicy experience</span> in Castel San Giovanni! 🌶️
          </motion.p>
        </motion.div>
        
        {/* Enhanced Countdown Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <div className="text-center mb-3">
            <span className="text-amber-200 font-semibold text-sm md:text-base">Opening Date: September 15, 2025</span>
          </div>
          <CountdownTimer date={"2025-09-15T00:00:00"} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default OpeningSoon; 