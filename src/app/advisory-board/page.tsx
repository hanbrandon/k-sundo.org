'use client';

import Section from '@/components/layout/Section/Section';
import HeroTitle from '@/components/common/Typography/HeroTitle';
import { motion } from 'motion/react';
import ImageSlideshow from '@/components/common/ImageSlideshow';
import Image from 'next/image';

interface Member {
    name: string;
    role: string;
    image: string;
    career?: string[];
    isPlaceholder?: boolean;
}

interface Category {
    title: string;
    members: Member[];
}

export default function AdvisoryBoard() {
    const categories: Category[] = [
        {
            title: '1. Spiritual & Traditional Guidance',
            members: [
                {
                    name: 'Grand Master Cho KyungJin',
                    role: 'K-Sun Do Master Instructor',
                    image: '/advisory/cho-kyungjin.png',
                    career: [
                        'K-Sun Do Master Instructor',
                        'Director of the Cheonggyesan Pangyo Training Center',
                        'President of the K-Sun Do Martial Arts Association',
                        'Executive Director of the Seoul Traditional Martial Arts Association',
                    ],
                },
            ],
        },
        {
            // title: '2. Sports Science & Academic Support',
            title: '2. Board Member',
            members: [
                {
                    name: 'Shaliza Shorey',
                    role: 'Licensed Clinical Neuropsychologist & Researcher',
                    image: '/advisory/shaliza-shorey.png',
                    career: [
                        'Licensed Clinical Neuropsychologist and Researcher in cognitive disorders & chronic pain',
                        'Completed Postdoctoral fellowship in neuropsychology at UC Davis Medical Hospital',
                        'Headache Center of Excellence, VA Palo Alto Health Care System',
                        'Certified in Biofeedback and Neurofeedback for treatment of headaches and improving cognitive functioning',
                        'Past President of the American Association of Pain Psychology',
                        'Founder of Aepiphany Health (self-efficacy platform for chronic conditions)',
                        'Clinical & research interests: Combining behavioral economics and neuropsychology interventions to improve quality of life',
                    ],
                },
            ],
        },
        {
            title: '3. Medical & Scientific Consultation',
            members: [
                {
                    name: 'Coming Soon',
                    role: 'To Be Announced',
                    image: '/advisory/coming-soon.png',
                    isPlaceholder: true,
                },
            ],
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
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12 xl:gap-20">
                        {categories.map((category, catIdx) => (
                            <div key={catIdx} className="flex flex-col items-center">
                                <h2 className="text-[12px] md:text-[14px] uppercase tracking-[0.2em] font-mono font-bold text-black/60 mb-10 w-full text-center pb-4 border-b border-black/5">
                                    {category.title}
                                </h2>

                                <div className="w-full flex flex-col items-center">
                                    {category.members.map((member, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                                            className="w-full flex flex-col items-center"
                                        >
                                            {/* Circular Image Container */}
                                            <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border border-black/10 shadow-sm mb-6 group aspect-square">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    sizes="(max-width: 768px) 176px, 208px"
                                                    priority={catIdx === 0}
                                                    className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${member.isPlaceholder ? 'opacity-50 grayscale' : ''
                                                        }`}
                                                />
                                            </div>

                                            {/* Member Name */}
                                            <h3 className="text-xl md:text-2xl font-serif font-bold text-black text-center mb-1">
                                                {member.name}
                                            </h3>

                                            {/* Member Role */}
                                            <p className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.15em] text-black/50 text-center mb-6 max-w-[280px] min-h-[32px] flex items-center justify-center">
                                                {member.role}
                                            </p>

                                            {/* Member Bio or Career List */}
                                            {member.isPlaceholder ? (
                                                <div className="text-center py-6 text-black/35 font-serif italic text-sm">
                                                    Guidance and integration details will be updated soon.
                                                </div>
                                            ) : (
                                                <div className="w-full max-w-sm text-black/75 text-sm md:text-base leading-relaxed">
                                                    {member.career && (
                                                        <ul className="space-y-3 text-left font-serif pl-4 list-disc marker:text-black/30">
                                                            {member.career.map((item, itemIdx) => (
                                                                <li key={itemIdx}>
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            )}
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
