'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = ({ variant = 'default' }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  // Different color schemes based on variant prop
  const getColorScheme = () => {
    switch(variant) {
      case 'ai':
        return {
          primary: 'from-indigo-900/10 via-black/0 to-violet-900/10',
          accent1: 'bg-indigo-500/10',
          accent2: 'bg-violet-500/10',
          gradient: 'from-indigo-500/5 via-blue-500/10 to-violet-500/5'
        };
      case 'cloud':
        return {
          primary: 'from-blue-900/10 via-black/0 to-sky-900/10',
          accent1: 'bg-blue-500/10',
          accent2: 'bg-sky-500/10',
          gradient: 'from-blue-500/5 via-sky-500/10 to-blue-500/5'
        };
      default:
        return {
          primary: 'from-indigo-900/10 via-black/0 to-violet-900/10',
          accent1: 'bg-indigo-500/10',
          accent2: 'bg-violet-500/10',
          gradient: 'from-indigo-500/5 via-blue-500/10 to-violet-500/5'
        };
    }
  };
  
  const colors = getColorScheme();
  
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Simple gradient background with subtle animations */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.primary}`} />
      
      {/* Animated gradient circles */}
      <motion.div 
        className={`absolute -top-24 -right-24 w-96 h-96 ${colors.accent1} rounded-full blur-3xl`}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className={`absolute -bottom-24 -left-24 w-80 h-80 ${colors.accent2} rounded-full blur-3xl`}
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Holographic floating bands */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-[150%] h-[30px] bg-gradient-to-r ${colors.gradient}`}
            style={{ 
              left: '-25%',
              top: `${20 + i * 20}%`,
              transform: 'rotate(-20deg)',
              filter: 'blur(8px)',
            }}
            animate={{ 
              left: ['-25%', '-15%', '-25%'],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
              duration: 10 + i * 2, 
              ease: "easeInOut", 
              repeat: Infinity,
              repeatType: "mirror"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground; 