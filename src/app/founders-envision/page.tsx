'use client';

import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/common/Typography/SectionHeader';
import HeroTitle from '@/components/common/Typography/HeroTitle';
import { motion } from 'motion/react';
import ImageSlideshow from '@/components/common/ImageSlideshow';

export default function FoundersEnvision() {
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
                    <HeroTitle subtitle="The Founder's Message">
                        Founder&apos;s Envision
                    </HeroTitle>
                </div>
            </section>

            {/* Content Section */}
            <Section id="message">
                <div className="max-w-4xl mx-auto">
                    <SectionHeader
                        eyebrow="PHILOSOPHY"
                        title="The Great Path to Vitality: Healing Humanity and the Earth"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl font-serif font-light leading-relaxed text-black/80"
                    >
                        {/* Profile Image Integrated into text flow */}
                        <div className="w-48 md:w-64 float-left mr-8 mb-6 md:mb-10">
                            <div className="aspect-square bg-black/5 rounded-sm overflow-hidden border border-black/5 relative">
                                <img
                                    src="/founders/heeyoung-pyen.png"
                                    alt="Heeyoung Pyen"
                                    className="w-full h-full object-cover"
                                />
                                {/* Name/Title Overlay */}
                                <div className="absolute bottom-0 right-0 p-4 text-right bg-gradient-to-t from-black/40 to-transparent w-full">
                                    <h3 className="font-serif text-sm md:text-base font-bold text-white mb-0">
                                        Heeyoung Pyen
                                    </h3>
                                    <p className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.1em] text-white/80">
                                        Susa / Founder of K-Sundo™
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <p>
                                My life’s work has been dedicated to
                                understanding the invisible threads that connect
                                us to our environment. As a Landscape Developer
                                and a scholar of Feng Shui and Future Predictive
                                Sciences, I have always viewed the Earth as a
                                living energy system. I realized that to truly
                                harmonize a space, we must first harmonize the
                                energy within ourselves.
                            </p>

                            <p>
                                I envision K-Sundo as the{' '}
                                <span className="italic font-normal text-black underline underline-offset-8 decoration-black/10">
                                    &apos;Great Gate&apos; (Dae-Do-Jung-Mun)
                                </span>{' '}
                                to a life of profound vitality. We are not
                                separate from the universe; we are the conscious
                                bridge where the celestial energy of the Cosmos
                                meets the nurturing strength of the Earth.
                            </p>

                            <p>
                                Through the sacred practice of Danjeon
                                Breathing, we align our Jung (Physical), Gi
                                (Vital), and Shin (Mental) centers. This is not
                                just personal exercise—it is an act of becoming
                                a &apos;Holistic Being&apos; who embodies the
                                truth of the universe. When we attain this inner
                                balance, we naturally radiate a healing
                                frequency.
                            </p>

                            <p>
                                This leads to my ultimate vision:{' '}
                                <span className="italic font-normal text-black underline underline-offset-8 decoration-black/10">
                                    Kuhwal-Changsaeng (구활창생)
                                </span>
                                —the noble mission to revitalize all living
                                beings and our planet. By restoring the light
                                within each individual, we contribute to a
                                collective awakening that can heal the world.
                            </p>

                            <p>
                                In the heart of Silicon Valley, I invite you to
                                step through this gate. Let us cultivate the
                                power to save ourselves, each other, and the
                                Earth we call home.
                            </p>

                            <p className="font-bold text-black pt-4">
                                Let the Great Vitality shine through you.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
}
