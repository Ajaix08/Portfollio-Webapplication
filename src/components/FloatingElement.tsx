'use client';

import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FloatingElement({ 
  children, 
  delay = 0, 
  duration = 3, 
  className = "" 
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}