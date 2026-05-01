import React from 'react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function SolutionCard({ icon, title, desc }: SolutionCardProps) {
  return (
    <div className="flex flex-col gap-10 group cursor-pointer">
      <div className="text-black transition-transform duration-500 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-4xl font-serif">{title}</h3>
      <p className="text-black/50 font-light leading-relaxed text-lg">
        {desc}
      </p>
    </div>
  );
}
