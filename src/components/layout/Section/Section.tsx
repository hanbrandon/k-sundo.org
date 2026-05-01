import React from 'react';

interface SectionProps {
    id?: string;
    children: React.ReactNode;
    className?: string;
    bg?: 'white' | 'muted' | 'black';
    fullWidth?: boolean;
}

export default function Section({
    id,
    children,
    className = '',
    bg = 'white',
    fullWidth = false,
}: SectionProps) {
    const bgClasses = {
        white: 'bg-white',
        muted: 'bg-brand-muted',
        black: 'bg-black text-white',
    };

    return (
        <section
            id={id}
            className={`py-16 md:py-24 px-6 md:px-12 ${bgClasses[bg]} ${className}`}
        >
            <div className={fullWidth ? 'w-full' : 'max-w-7xl mx-auto'}>
                {children}
            </div>
        </section>
    );
}
