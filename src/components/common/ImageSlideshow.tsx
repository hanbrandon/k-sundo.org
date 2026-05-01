'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface ImageSlideshowProps {
    images: string[];
    className?: string;
}

const ImageSlideshow = ({ images, className = "" }: ImageSlideshowProps) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [images]);

    return (
        <div className={`absolute inset-0 w-full h-full ${className}`}>
            {images.map((img, idx) => (
                <motion.img
                    key={img}
                    src={img}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: current === idx ? 1 : 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110"
                    alt="Slideshow"
                />
            ))}
        </div>
    );
};

export default ImageSlideshow;
