import { motion } from 'motion/react';
import React from 'react';

interface HeroTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export default function HeroTitle({ children, subtitle, className = "" }: HeroTitleProps) {
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`relative z-20 ${className}`}
    >
      {subtitle && (
        <div className="flex items-center gap-8 mb-10">
          <span className="text-[12px] md:text-[14px] uppercase tracking-[0.4em] text-white/80 font-mono font-medium leading-relaxed">
            {subtitle}
          </span>
          <div className="h-px w-24 md:w-48 bg-white/30" />
        </div>
      )}
      <h1 className="text-white text-7xl md:text-8xl lg:text-9xl font-serif leading-[1.05] tracking-tight">
        {children}
      </h1>
    </motion.div>
  );
}
