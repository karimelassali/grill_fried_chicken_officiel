import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const SocialLinksList = ({ links, hoveredLink, setHoveredLink, containerVariants, itemVariants }) => {
  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden"
      animate="visible"
      className="relative z-10 max-w-3xl mx-auto px-6 py-20 space-y-6"
    >
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
              group relative block w-full p-8 bg-white/99 backdrop-blur-lg border-2 rounded-3xl 
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
                  w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-white flex items-center justify-center mr-6
                  group-hover:from-white group-hover:to-gray-50 transition-all duration-500 shadow-lg
                  border border-gray-200/50 group-hover:border-gray-300/70
                `}
              >
                <IconComponent className={`w-8 h-8 ${link.iconColor} transition-transform duration-300 group-hover:scale-110`} />
              </motion.div>

              {/* Enhanced Content */}
              <div className="flex-1">
                <h2 className="font-bold text-white text-2xl mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {link.title}
                </h2>
                <p className="text-gray-300 text-base font-medium group-hover:text-gray-700 transition-colors duration-300">
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
                <ExternalLink className="w-7 h-7" />
              </motion.div>
            </div>

            {/* Enhanced Hover Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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