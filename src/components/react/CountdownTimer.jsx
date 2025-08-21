import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Helper function to calculate time left
const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return timeLeft;
};

const CountdownTimer = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(date));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] === undefined) {
      return;
    }

    timerComponents.push(
      <motion.div
        key={interval}
        whileHover={{ scale: 1.05, y: -5, rotate: 1 }}
        whileTap={{ scale: 0.98 }}
        className="flex backdrop-blur-lg rounded-2xl md:rounded-3xl p-3 md:p-4 flex-col items-center mx-1 md:mx-2 bg-gradient-to-b from-slate-800/90 to-gray-900/90 border-2 border-amber-500/60 shadow-2xl relative overflow-hidden group min-w-[80px] md:min-w-[100px]"
      >
        {/* Professional glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Refined animated border */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-amber-400/60"
          animate={{
            borderColor: ["rgba(251, 191, 36, 0.6)", "rgba(245, 158, 11, 0.8)", "rgba(251, 191, 36, 0.6)"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <span className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-wider drop-shadow-2xl relative z-10">
          {String(timeLeft[interval]).padStart(2, "0")}
        </span>
        <span className="text-xs md:text-sm uppercase text-amber-300 mt-2 font-bold tracking-wider relative z-10 drop-shadow-lg">
          {interval}
        </span>
      </motion.div>
    );
  });

  return (
    <div className="flex justify-center my-4 overflow-x-auto">
      {timerComponents.length ? (
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {timerComponents}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-2xl md:text-3xl font-bold text-amber-400 bg-gradient-to-r from-amber-600/20 to-red-600/20 px-6 md:px-8 py-3 md:py-4 rounded-2xl border border-amber-500/30 text-center"
        >
          🎉 We're Open! 🎉
        </motion.div>
      )}
    </div>
  );
};

export default CountdownTimer; 