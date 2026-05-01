'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

// Components
import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/common/Typography/SectionHeader';
import HeroTitle from '@/components/common/Typography/HeroTitle';
import ImageSlideshow from '@/components/common/ImageSlideshow';

export default function ContactPage() {
    return (
        <div className="w-full bg-white text-black" id="contact-page">
            {/* Hero Section */}
            <section
                className="relative h-[70vh] md:h-screen w-full flex flex-col justify-end overflow-hidden px-6 md:px-12 bg-black"
                id="contact-hero"
            >
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

                <div className="max-w-7xl mx-auto w-full pb-32 relative z-20">
                    <HeroTitle subtitle="GET IN TOUCH">Let's Talk</HeroTitle>
                </div>
            </section>

            {/* Form Section */}
            <Section id="contact-form">
                <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
                    {/* Left: Form */}
                    <div className="lg:w-1/2">
                        <SectionHeader
                            eyebrow="REGISTRATION"
                            title="Join the Practice"
                        />

                        <form
                            className="space-y-10"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-mono text-black/60">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    className="w-full border-b border-black/10 py-4 focus:border-black transition-colors outline-none font-sans text-lg"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-mono text-black/60">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    className="w-full border-b border-black/10 py-4 focus:border-black transition-colors outline-none font-sans text-lg"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div className="space-y-8">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-mono text-black/60 block">
                                    Membership & Interest
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                    {[
                                        'Full Access ($150)',
                                        'Online Only ($75)',
                                        'In-person Trial',
                                        'Corporate Wellness',
                                        'Private Session',
                                        'General Inquiry',
                                    ].map((item) => (
                                        <label
                                            key={item}
                                            className="flex items-center gap-4 cursor-pointer group"
                                        >
                                            <div className="w-5 h-5 border border-black/20 rounded-sm flex items-center justify-center group-hover:border-black transition-colors">
                                                <input
                                                    type="checkbox"
                                                    className="hidden peer"
                                                />
                                                <div className="w-2 h-2 bg-black scale-0 peer-checked:scale-100 transition-transform" />
                                            </div>
                                            <span className="text-[11px] uppercase tracking-widest font-mono text-black/60 group-hover:text-black transition-colors">
                                                {item}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2 pt-4">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-mono text-black/60">
                                    Message *
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full border-b border-black/10 py-4 focus:border-black transition-colors outline-none font-sans text-lg resize-none"
                                    placeholder="How can we help you?"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-8 pt-4">
                                <div className="flex flex-col gap-4">
                                    <motion.button 
                                        whileHover={{ y: -4 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="bg-black text-white border border-black/5 px-12 py-5 text-[11px] uppercase tracking-[0.3em] font-mono transition-all flex items-center gap-4 group rounded-sm justify-center md:justify-start w-full md:w-fit"
                                    >
                                        Send Message{' '}
                                        <ArrowUpRight
                                            size={16}
                                            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                        />
                                    </motion.button>
                                    <p className="text-[10px] uppercase tracking-widest text-black/40 font-mono italic">
                                        or Text Heeyoung at 408-375-3676
                                    </p>
                                </div>

                                <div className="mt-16 pt-16 border-t border-black/10">
                                    <div className="flex items-start gap-3 text-black/40">
                                        <CheckCircle2
                                            size={14}
                                            className="mt-0.5 opacity-50"
                                        />
                                        <div className="space-y-1">
                                            <p className="text-[10px] uppercase tracking-[0.2em] font-mono">
                                                Secure Payment via Zelle
                                            </p>
                                            <p className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold text-black/60">
                                                threepillars.fdn@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Right: Image */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="sticky top-32 w-full aspect-[3/4] overflow-hidden rounded-sm"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000&auto=format&fit=crop"
                                className="w-full h-full object-cover grayscale-0 hover:scale-105 transition-transform duration-1000"
                                alt="Zen Landscape"
                            />
                        </motion.div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
