'use client';

import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/common/Typography/SectionHeader';
import HeroTitle from '@/components/common/Typography/HeroTitle';
import { motion } from 'motion/react';
import ImageSlideshow from '@/components/common/ImageSlideshow';

export default function AdvisoryBoard() {
    const categories = [
        {
            title: '1. Spiritual & Traditional Guidance',
            members: ['Grand Master Cho KyungJin'],
        },
        {
            title: '2. Sports Science & Academic Support',
            members: ['Coming Soon'],
        },
        {
            title: '3. Medical & Scientific Consultation',
            members: ['Coming Soon'],
        },
    ];

    return (
        <div className="w-full bg-white text-black min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] w-full flex flex-col justify-end overflow-hidden px-6 md:px-12 bg-black">
                <div className="absolute inset-0 z-0 scale-105">
                    <ImageSlideshow
                        images={[
                            '/hero/hero-0.png',
                            '/hero/hero-1.png',
                            '/hero/hero-2.png',
                            '/hero/hero-3.png',
                        ]}
                    />
                </div>
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="max-w-7xl mx-auto w-full pb-16 relative z-20">
                    <HeroTitle subtitle="Leadership & Guidance">
                        Advisory Board
                    </HeroTitle>
                </div>
            </section>

            {/* Content Section */}
            <Section id="board">
                <div className="max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
                        {categories.map((category, catIdx) => (
                            <div key={catIdx} className="flex flex-col">
                                <h2 className="text-[14px] md:text-[18px] lg:text-[20px] uppercase tracking-[0.2em] font-mono font-bold text-black mb-8">
                                    {category.title}
                                </h2>

                                <div className="flex flex-col gap-4">
                                    {category.members.map((member, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            className="text-xl md:text-2xl font-serif text-black/80"
                                        >
                                            - {member}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-48 pt-16 border-t border-black/10 text-center"
                    >
                        <p className="text-black/40 text-[11px] md:text-xs uppercase tracking-[0.3em] font-mono max-w-3xl mx-auto leading-relaxed">
                            The K-Sundo™ Advisory Board serves under the Three
                            Pillars Foundation to ensure the highest standard of
                            training and scientific integration.
                        </p>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
}
