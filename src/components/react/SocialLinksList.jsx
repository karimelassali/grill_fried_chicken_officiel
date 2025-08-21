import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const SocialLinksList = ({ links, hoveredLink, setHoveredLink, containerVariants, itemVariants }) => {
  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden"
      animate="visible"
      className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 space-y-4 sm:space-y-6"
    >
      {/* Menara (Mughal Domes) Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large Central Dome */}
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.02, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        >
          <div className="w-full h-full bg-gradient-to-b from-amber-400/20 to-orange-600/20 rounded-full border border-amber-500/30"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-500/40 rounded-full"></div>
        </motion.div>
        
        {/* Left Dome */}
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.01, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 left-1/6 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
        >
          <div className="w-full h-full bg-gradient-to-b from-red-500/20 to-red-700/20 rounded-full border border-red-500/30"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500/40 rounded-full"></div>
        </motion.div>
        
        {/* Right Dome */}
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.01, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/3 right-1/6 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
        >
          <div className="w-full h-full bg-gradient-to-b from-red-500/20 to-red-700/20 rounded-full border border-red-500/30"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500/40 rounded-full"></div>
        </motion.div>
      </div>
      {links.map((link, index) => {
        const IconComponent = link.icon;
        const isHovered = hoveredLink === link.id;

        return (
          <motion.a
            key={link.id}
            href={link.href}
            target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 + index * 0.1, duration: 0.6, type: "spring" }}
            whileHover={{
              y: -8,
              scale: 1.03,
              transition: { duration: 0.3, type: "spring" },
            }}
            whileTap={{ scale: 0.97 }}
            onHoverStart={() => setHoveredLink(link.id)}
            onHoverEnd={() => setHoveredLink(null)}
            className={`
              group relative block w-full p-4 sm:p-6 lg:p-8 bg-white/99 backdrop-blur-lg border-2 rounded-2xl sm:rounded-3xl 
              shadow-2xl hover:shadow-3xl transition-all duration-500 transform
              ${link.color} ${link.bgGradient} overflow-hidden text-white
            `}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, ${link.iconColor.replace('text-', '').includes('green') ? 'rgba(34, 197, 94, 0.05)' : 
                  link.iconColor.replace('text-', '').includes('pink') ? 'rgba(236, 72, 153, 0.05)' :
                  link.iconColor.replace('text-', '').includes('red') ? 'rgba(239, 68, 68, 0.05)' :
                  link.iconColor.replace('text-', '').includes('blue') ? 'rgba(59, 130, 246, 0.05)' :
                  'rgba(107, 114, 128, 0.05)'}, transparent 50%, transparent)`,
              }}
            />
            
            {/* Floating particles effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, ${link.iconColor.replace('text-', '').includes('green') ? 'rgba(34, 197, 94, 0.1)' : 
                  link.iconColor.replace('text-', '').includes('pink') ? 'rgba(236, 72, 153, 0.1)' :
                  link.iconColor.replace('text-', '').includes('red') ? 'rgba(239, 68, 68, 0.1)' :
                  link.iconColor.replace('text-', '').includes('blue') ? 'rgba(59, 130, 246, 0.1)' :
                  'rgba(107, 114, 128, 0.1)'} 0%, transparent 50%)`,
                backgroundSize: "200% 200%",
              }}
            />

            <div className="flex items-center relative z-10">
              {/* Enhanced Icon with Advanced Hover Effects */}
              <motion.div
                animate={{
                  scale: isHovered ? 1.2 : 1,
                  rotate: isHovered ? 12 : 0,
                  y: isHovered ? -5 : 0,
                }}
                transition={{ duration: 0.3, type: "spring" }}
                className={`
                  w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-white flex items-center justify-center mr-4 sm:mr-6
                  group-hover:from-white group-hover:to-gray-50 transition-all duration-500 shadow-lg
                  border border-gray-200/50 group-hover:border-gray-300/70
                `}
              >
                <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${link.iconColor} transition-transform duration-300 group-hover:scale-110`} />
              </motion.div>

              {/* Enhanced Content */}
              <div className="flex-1">
                <h2 className="font-bold text-white text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {link.title}
                </h2>
                <p className="text-gray-300 text-sm sm:text-base font-medium group-hover:text-gray-700 transition-colors duration-300">
                  {link.subtitle}
                </p>
              </div>

              {/* Enhanced Arrow with Advanced Animation */}
              <motion.div
                animate={{ 
                  x: isHovered ? 12 : 0,
                  scale: isHovered ? 1.2 : 1,
                  rotate: isHovered ? 15 : 0,
                }}
                transition={{ duration: 0.3, type: "spring" }}
                className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300"
              >
                <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </motion.div>
            </div>

            {/* Enhanced Hover Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(45deg, transparent, ${link.iconColor.replace('text-', '').includes('green') ? 'rgba(34, 197, 94, 0.08)' : 
                  link.iconColor.replace('text-', '').includes('pink') ? 'rgba(236, 72, 153, 0.08)' :
                  link.iconColor.replace('text-', '').includes('red') ? 'rgba(239, 68, 68, 0.08)' :
                  link.iconColor.replace('text-', '').includes('blue') ? 'rgba(59, 130, 246, 0.08)' :
                  'rgba(107, 114, 128, 0.08)'}, transparent)`,
              }}
            />
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default SocialLinksList; 