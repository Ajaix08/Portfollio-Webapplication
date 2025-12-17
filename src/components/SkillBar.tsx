'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  delay?: number;
}

export default function SkillBar({ name, level, color, delay = 0 }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ 
            duration: 1.5, 
            delay,
            ease: "easeOut"
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}