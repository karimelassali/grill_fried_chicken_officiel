import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const HalalBadge = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-full font-bold text-base shadow-2xl border-4 border-emerald-300/60 backdrop-blur-sm relative z-20 mt-4"
    >
      {/* Enhanced glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/40 to-emerald-500/40 rounded-full blur-sm"></div>
      
      <Star className="w-5 h-5 mr-2 text-emerald-100 relative z-10" />
      <span className="tracking-wide relative z-10 font-extrabold text-white">HALAL CERTIFIED</span>
      <Star className="w-5 h-5 ml-2 text-emerald-100 relative z-10" />
    </motion.div>
  );
};

export default HalalBadge; 