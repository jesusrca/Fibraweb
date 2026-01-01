"use client";

import { motion } from "motion/react";

export default function PageTransition() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ 
        delay: 0.8,
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Layer 1 - Purple (background, appears LAST, leaves first) */}
      <motion.div
        className="absolute inset-0 bg-[#9A96EB] z-[1]"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ 
        delay: 0.45,
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      }}
      />
      
      {/* Layer 2 - Pink */}
      <motion.div
        className="absolute inset-0 bg-[#FF86AA] z-[2]"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ 
        delay: 0.3,
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      }}
      />
      
      {/* Layer 3 - Green */}
      <motion.div
        className="absolute inset-0 bg-[#00804C] z-[3]"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ 
        delay: 0.15,
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      }}
      />

      {/* Layer 4 - Yellow (top layer, appears FIRST, leaves last) */}
      <motion.div
        className="absolute inset-0 bg-[#FDF164] z-[4]"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ 
        delay: 0,
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      }}
      />
    </motion.div>
  );
}
