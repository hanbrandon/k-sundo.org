import React from 'react';

interface SectionHeaderProps {
    eyebrow: string;
    title: React.ReactNode;
    italic?: boolean;
    className?: string;
    dark?: boolean;
    border?: boolean;
}

export default function SectionHeader({
    eyebrow,
    title,
    italic = false,
    className = '',
    dark = false,
    border = false,
}: SectionHeaderProps) {
    return (
        <div
            className={`mb-8 md:mb-24 ${border ? 'border-b border-black/10 pb-4' : ''} ${className}`}
        >
            <div className="flex items-center gap-4 mb-4">
                <span
                    className={`text-[14px] md:text-[18px] lg:text-[20px] uppercase tracking-[0.2em] font-mono font-bold whitespace-nowrap ${dark ? 'text-white' : 'text-black'}`}
                >
                    {eyebrow}
                </span>
                <div
                    className={`h-px w-16 md:w-32 ${dark ? 'bg-white/30' : 'bg-black/20'}`}
                />
            </div>
            <h2
                className={`text-4xl md:text-5xl lg:text-6xl font-serif leading-tight ${italic ? 'italic' : ''} ${dark ? 'text-white' : 'text-black'}`}
            >
                {title}
            </h2>
        </div>
    );
}
