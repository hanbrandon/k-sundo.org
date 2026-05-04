import { motion } from 'motion/react';
import React from 'react';

interface HeroTitleProps {
    children: React.ReactNode;
    subtitle?: string;
    className?: string;
}

export default function HeroTitle({
    children,
    subtitle,
    className = '',
}: HeroTitleProps) {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={`relative z-20 ${className}`}
        >
            {subtitle && (
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-[14px] md:text-[18px] lg:text-[20px] uppercase tracking-[0.2em] text-white font-mono font-bold leading-relaxed">
                        {subtitle}
                    </span>
                    <div className="h-px w-24 md:w-48 bg-white/30" />
                </div>
            )}
            <h1 className="text-white text-[14vw] sm:text-8xl md:text-[10rem] lg:text-[12rem] font-serif font-bold leading-[0.85] tracking-tight">
                {children}
            </h1>
        </motion.div>
    );
}
