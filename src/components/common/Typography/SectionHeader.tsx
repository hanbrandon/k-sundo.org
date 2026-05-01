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
  className = "", 
  dark = false,
  border = false
}: SectionHeaderProps) {
  return (
    <div className={`mb-24 ${border ? 'border-b border-black/10 pb-4' : ''} ${className}`}>
      <div className="flex items-center gap-6 mb-4">
        <span className={`text-[12px] md:text-[14px] uppercase tracking-[0.4em] font-mono font-medium whitespace-nowrap ${dark ? 'text-white/60' : 'text-black/60'}`}>
          {eyebrow}
        </span>
        <div className={`h-px w-16 md:w-32 ${dark ? 'bg-white/20' : 'bg-black/10'}`} />
      </div>
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif leading-tight ${italic ? 'italic' : ''} ${dark ? 'text-white' : 'text-black'}`}>
        {title}
      </h2>
    </div>
  );
}
