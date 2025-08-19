import React, { useEffect, useState } from "react";

const LightRays = ({
  raysOrigin = "top-center",
  raysColor = "#ff6b35",
  raysSpeed = 1.5,
  lightSpread = 0.8,
  rayLength = 1.2,
  followMouse = true,
  mouseInfluence = 0.1,
  noiseAmount = 0.1,
  distortion = 0.05,
  className = "",
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!followMouse) return;
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    if (followMouse) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [followMouse]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getRaysStyle = () => {
    const baseColor = raysColor;
    const opacity = 0.3;
    
    return {
      background: `radial-gradient(ellipse at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
        ${baseColor}40 0%, 
        ${baseColor}20 20%, 
        ${baseColor}10 40%, 
        transparent 70%)`,
      opacity: opacity,
      animation: `lightRays ${3 / raysSpeed}s ease-in-out infinite`,
    };
  };

  return (
    <>
      <style jsx>{`
        @keyframes lightRays {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1) rotate(180deg);
          }
        }
        
        .light-rays {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          mix-blend-mode: screen;
        }
        
        .ray {
          position: absolute;
          background: linear-gradient(to bottom, transparent, ${raysColor}40, transparent);
          border-radius: 50%;
          animation: rayFloat 8s ease-in-out infinite;
        }
        
        .ray:nth-child(1) {
          width: 200px;
          height: 400px;
          top: -100px;
          left: 10%;
          animation-delay: 0s;
        }
        
        .ray:nth-child(2) {
          width: 150px;
          height: 300px;
          top: -50px;
          right: 15%;
          animation-delay: 2s;
        }
        
        .ray:nth-child(3) {
          width: 180px;
          height: 350px;
          bottom: -80px;
          left: 20%;
          animation-delay: 4s;
        }
        
        .ray:nth-child(4) {
          width: 120px;
          height: 250px;
          bottom: -30px;
          right: 25%;
          animation-delay: 6s;
        }
        
        @keyframes rayFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.6;
          }
        }
      `}</style>
      
      <div className={`light-rays ${className}`} style={getRaysStyle()}>
        <div className="ray"></div>
        <div className="ray"></div>
        <div className="ray"></div>
        <div className="ray"></div>
      </div>
    </>
  );
};

export default LightRays;
