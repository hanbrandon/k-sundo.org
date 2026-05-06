'use client';

import { motion } from 'motion/react';
import {
    Wind,
    Activity,
    Brain,
    CheckCircle2,
    ArrowUpRight,
    ChevronRight,
    ArrowLeft,
    ArrowRight,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';

// Components
import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/common/Typography/SectionHeader';
import HeroTitle from '@/components/common/Typography/HeroTitle';
import SolutionCard from '@/components/common/SolutionCard';
import Link from 'next/link';
import ImageSlideshow from '@/components/common/ImageSlideshow';

export default function Home() {
    const [activePrinciple, setActivePrinciple] = useState<number | null>(0);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            headline:
                'My chronic fatigue is gone, and my mornings feel so much lighter.',
            quote: "Working a desk job, I constantly struggled with chronic fatigue and stiff shoulders. I started K-Sun Do on a friend's recommendation, and learning Danjeon (lower abdomen) breathing and improving my energy circulation completely changed how I feel when I wake up. It's not about forcing yourself to sweat; rather, relaxing my body to the rhythm of my own breath has brought so much vitality into my daily life. My text-neck and slouched back have improved so much that people frequently compliment my new posture.",
            author: 'Kim, 30s',
            title: 'Office Worker',
        },
        {
            headline: 'I overcame insomnia and stress through breathing.',
            quote: 'After menopause, my stress and insomnia got so bad that I often relied on sleeping pills. By practicing K-Sun Do and taking the time to focus entirely on my breathing and my body, my cluttered mind cleared up, and I found a deep sense of peace. Now, I sleep soundly through the night, and I get upset much less often in my daily life. I highly recommend it to anyone in need of mental tranquility.',
            author: 'Lee, 50s',
            title: 'Homemaker',
        },
        {
            headline:
                'My cold hands and feet, along with my indigestion, have noticeably improved.',
            quote: "I always had a weak stomach and suffered from cold extremities even in the middle of summer. About six months into consistently practicing K-Sun Do's unique physical exercises and Danjeon breathing, I started feeling a warm energy in my lower abdomen. Naturally, my digestion improved, and the coldness in my hands and feet disappeared. It’s not an intense workout lifting heavy weights, but rather the best lifelong exercise you can do without straining your joints.",
            author: 'Park, 40s',
            title: 'Business Owner',
        },
        {
            headline:
                'Intrusive thoughts disappear, and my concentration has skyrocketed.',
            quote: 'Because my job requires a lot of mental energy, I was usually exhausted by the time I got off work. During K-Sun Do practice, I can let go of all distracting thoughts and dive into meditation, which truly feels like giving my brain a much-needed rest. After a session, my whole body feels refreshed and my mind is clear, which has actually boosted my work efficiency. The added physical flexibility is a great bonus!',
            author: 'Choi, 40s',
            title: 'Professional',
        },
        {
            headline: 'A lifelong companion you can start at any age.',
            quote: "I was looking for an exercise to maintain my health after retirement when I discovered K-Sun Do. At first, my body was stiff, and it was hard just to follow the movements. But what I loved most was that I didn't have to compare myself to others; I could just move at my own body's pace. Now, I have leg and core strength that even someone in their 20s would envy. It’s a discipline that truly shows its value as you get older.",
            author: 'Jung, 60s',
            title: 'Retiree',
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const galleryItems = [
        {
            title: 'K-Sundo Portola Valley',
            subtitle: 'Community Center',
            address: '765 Portola Rd, Portola Valley, CA 94028',
            schedule: 'Wednesdays, 6:00 PM – 8:30 PM',
            tags: ['In-Person', 'Silicon Valley'],
            images: [
                '/portola-valley/20251030_095742.jpg',
                '/portola-valley/20251030_100809.jpg',
                '/portola-valley/20251030_112619.jpg',
            ],
        },
        {
            title: 'K-Sundo Milpitas',
            subtitle: 'Barbara Lee Senior Center',
            address: '40 N. Milpitas Blvd, Milpitas, CA 95035',
            schedule: 'Saturdays, 7:15 AM – 9:00 AM',
            tags: ['In-Person', 'Bay Area'],
            images: [
                '/milpitas/1762222407781.jpg',
                '/milpitas/20251031_104037.jpg',
                '/milpitas/20251031_104604.jpg',
                '/milpitas/20251101_115627.jpg',
                '/milpitas/Milpitas-1.jpg',
            ],
        },
        {
            title: 'Global Online',
            subtitle: 'Live via Zoom',
            address: 'Digital Access',
            schedule: 'Wednesdays, 5:00 AM – 7:00 AM',
            tags: ['Online', 'Worldwide'],
            images: [
                'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=2000',
            ],
        },
    ];

    const programBenefits = [
        {
            title: 'Longevity & Vitality',
            content: 'Path to long life and well-being through Eastern wisdom.',
        },
        {
            title: 'Natural Healing',
            content:
                'Uprooting physical and mental ailments at their foundation.',
        },
        {
            title: 'Stress Management',
            content:
                'Maintaining tranquility amid modern stress through solar energy meditation.',
        },
        {
            title: 'Digital Detox',
            content:
                'Relieving strain from excessive digital exposure and intellectual labor.',
        },
    ];

    return (
        <div className="w-full bg-white text-black" id="home-page">
            {/* Hero Section */}
            <section
                className="relative h-[75vh] md:h-screen w-full flex flex-col justify-end overflow-hidden px-6 md:px-12"
                id="hero"
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

                <div className="max-w-7xl mx-auto w-full pb-16 relative z-20">
                    <HeroTitle subtitle="Harmony of Body and Mind, a True Path to Healing">
                        <span className="whitespace-nowrap">
                            K-Sundo
                            <span className="text-[0.25em] inline-block -translate-y-[2.0em]">
                                ™
                            </span>
                        </span>
                    </HeroTitle>
                </div>
            </section>

            {/* About Section */}
            <Section id="about" className="border-b border-black/10">
                <p className="text-xl md:text-4xl font-light font-sans leading-[1.15] text-black">
                    <span className="whitespace-nowrap">K-Sundo</span> (Bakdol
                    Method) is a traditional Korean personal development
                    discipline designed to transform individuals into holistic
                    beings with a healthy body, peaceful mind, and enlightened
                    spirit. Rooted in 9,800 years of Eastern wisdom and aligned
                    with the principles of natural creation and human
                    physiology, this scientifically grounded practice combines
                    hundreds of meticulously crafted body movements and refined
                    breathing techniques through a systematic, progressive
                    approach. By aligning the three energy centers (Three
                    Dan-Jeons),{' '}
                    <span className="whitespace-nowrap">K-Sundo</span> unifies
                    Physical Vitality (Jung), Life Force (Gi), and Mental
                    Clarity (Shin) into one harmonious state, helping
                    practitioners achieve profound and lasting physical and
                    mental well-being.
                </p>
            </Section>

            {/* Program Benefits Section */}
            <Section
                id="benefits"
                bg="white"
                className="border-b border-black/10"
            >
                <div className="flex flex-col md:flex-row gap-16">
                    {/* Left Column: Title + Large Image */}
                    <div className="md:w-[60%]">
                        <SectionHeader
                            eyebrow="PRACTICE OUTCOMES"
                            title={
                                <>
                                    The Benefits of{' '}
                                    <span className="whitespace-nowrap">
                                        K-Sundo
                                    </span>
                                </>
                            }
                        />
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                            <ImageSlideshow
                                images={[
                                    '/benefits/benefits-1.png',
                                    '/benefits/benefits-2.png',
                                ]}
                            />
                        </div>
                    </div>

                    {/* Right Column: Sticky Accordion */}
                    <div className="md:w-[40%] flex flex-col pt-8 md:pt-32 relative">
                        <div className="sticky top-32 flex flex-col z-10">
                            <div className="flex flex-col">
                                {programBenefits.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`border-t transition-colors duration-500 py-10 cursor-pointer group ${
                                            idx === programBenefits.length - 1
                                                ? 'border-b'
                                                : ''
                                        } ${
                                            activePrinciple === idx
                                                ? 'border-black'
                                                : 'border-black/10 group-hover:border-black'
                                        }`}
                                        onClick={() =>
                                            setActivePrinciple(
                                                activePrinciple === idx
                                                    ? null
                                                    : idx,
                                            )
                                        }
                                    >
                                        <div className="flex justify-between items-center">
                                            <h3
                                                className={`text-2xl md:text-3xl font-sans transition-all duration-500 ${
                                                    activePrinciple === idx
                                                        ? 'text-black'
                                                        : 'text-black/20 group-hover:text-black'
                                                }`}
                                            >
                                                {item.title}
                                            </h3>
                                            <div
                                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border ${
                                                    activePrinciple === idx
                                                        ? 'bg-black border-black text-white'
                                                        : 'bg-transparent border-black/10 text-black/20 group-hover:border-black group-hover:text-black'
                                                }`}
                                            >
                                                <ChevronRight
                                                    size={18}
                                                    className={`transition-transform duration-500 ${
                                                        activePrinciple === idx
                                                            ? 'rotate-90'
                                                            : 'rotate-0'
                                                    }`}
                                                />
                                            </div>
                                        </div>
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height:
                                                    activePrinciple === idx
                                                        ? 'auto'
                                                        : 0,
                                                opacity:
                                                    activePrinciple === idx
                                                        ? 1
                                                        : 0,
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pt-8 text-black/50 text-base leading-relaxed font-light">
                                                {item.content}
                                            </p>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Program Features Section */}
            <Section id="solutions" className="border-b border-black/10">
                <SectionHeader
                    eyebrow="HOW IT WORKS"
                    title="Our training program integrates"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-24 lg:gap-40">
                    <SolutionCard
                        icon={<Wind size={48} strokeWidth={1} />}
                        title="Guided Breathing"
                        desc="Advanced techniques to regulate the nervous system and build internal energy."
                    />
                    <SolutionCard
                        icon={<Activity size={48} strokeWidth={1} />}
                        title="Body Movements"
                        desc="Gentle and structured movements designed to unlock physical blockages."
                    />
                    <SolutionCard
                        icon={<Brain size={48} strokeWidth={1} />}
                        title="Deep Meditation"
                        desc="Practices that create heart-brain coherence and restore mental focus."
                    />
                </div>
            </Section>

            {/* Experience Gallery Section */}
            <Section id="experience" className="border-b border-black/10">
                <SectionHeader
                    eyebrow="AVAILABILITY"
                    title="Current Locations & Schedule"
                    italic={false}
                    border={false}
                />

                <div className="flex flex-col gap-8 md:gap-16">
                    {galleryItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            className="relative aspect-[16/13] md:aspect-[16/8] w-full overflow-hidden group cursor-pointer rounded-sm"
                        >
                            <ImageSlideshow images={item.images} />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 flex flex-col items-center justify-center text-white text-center px-6">
                                <span className="text-[10px] uppercase tracking-[0.4em] mb-2 opacity-70 font-mono">
                                    {item.subtitle}
                                </span>
                                <h3 className="text-2xl md:text-5xl font-serif mb-3 md:mb-6 leading-tight max-w-[90%]">
                                    {item.title}
                                </h3>
                                <div className="space-y-1 md:space-y-2 mb-4 md:mb-8">
                                    <p className="text-[11px] md:text-xs uppercase tracking-widest font-mono opacity-60">
                                        {item.address}
                                    </p>
                                    <p className="text-lg md:text-xl font-serif italic">
                                        {item.schedule}
                                    </p>
                                </div>
                                <div className="flex gap-4 text-[9px] uppercase tracking-[0.3em] font-mono opacity-50 mb-6 md:mb-10">
                                    {item.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-fit"
                                >
                                    <Link
                                        href="/contact"
                                        className="px-8 py-3 bg-white text-black text-[9px] uppercase tracking-widest transition-all rounded-sm flex items-center gap-2 group border border-black/5"
                                    >
                                        Join Class{' '}
                                        <ArrowUpRight
                                            size={14}
                                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Pricing Section */}
            <Section id="pricing" className="border-b border-black/10">
                <div className="max-w-5xl">
                    <SectionHeader
                        eyebrow="MEMBERSHIP OPTIONS"
                        title="Choose your practice"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Pricing Card 1 */}
                        <div className="border border-black/15 p-12 md:p-16 rounded-sm flex flex-col hover:border-black/30 transition-all group">
                            <h3 className="text-3xl font-serif mb-4">
                                Full Access Membership
                            </h3>
                            <p className="text-black/60 text-sm mb-12 uppercase tracking-widest font-mono">
                                (In-person + Online)
                            </p>
                            <div className="text-6xl font-serif mb-12">
                                $150{' '}
                                <span className="text-sm font-sans uppercase tracking-widest opacity-40">
                                    / 3 months
                                </span>
                            </div>
                            <ul className="text-sm text-black/70 flex flex-col gap-4 mb-16 font-light">
                                <li>All in-person class locations</li>
                                <li>Full access to Zoom sessions</li>
                                <li>Direct guidance from instructors</li>
                            </ul>
                            <motion.div
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full"
                            >
                                <Link
                                    href="/contact"
                                    className="w-full py-5 bg-black text-white border border-black/5 text-[10px] uppercase tracking-widest font-mono transition-all text-center rounded-sm flex items-center justify-center gap-2 group"
                                >
                                    Register Now{' '}
                                    <ArrowUpRight
                                        size={14}
                                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Pricing Card 2 */}
                        <div className="border border-black/15 p-12 md:p-16 rounded-sm flex flex-col hover:border-black/30 transition-all group">
                            <h3 className="text-3xl font-serif mb-4">
                                Online Membership
                            </h3>
                            <p className="text-black/60 text-sm mb-12 uppercase tracking-widest font-mono">
                                (Zoom Only)
                            </p>
                            <div className="text-6xl font-serif mb-12">
                                $75{' '}
                                <span className="text-sm font-sans uppercase tracking-widest opacity-40">
                                    / 3 months
                                </span>
                            </div>
                            <ul className="text-sm text-black/70 flex flex-col gap-4 mb-16 font-light">
                                <li>Unlimited global Zoom sessions</li>
                                <li>Practice from anywhere</li>
                                <li>Digital training materials</li>
                            </ul>
                            <motion.div
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full"
                            >
                                <Link
                                    href="/contact"
                                    className="w-full py-5 bg-black text-white border border-black/5 text-[10px] uppercase tracking-widest font-mono transition-all text-center rounded-sm flex items-center justify-center gap-2 group"
                                >
                                    Register Now{' '}
                                    <ArrowUpRight
                                        size={14}
                                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Testimonials Section */}
            <Section id="testimonials" className="border-b border-black/10">
                <div className="relative w-full">
                    <div className="flex flex-col w-full">
                        <span className="text-5xl font-serif mb-6 block">
                            “
                        </span>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTestimonial}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="w-full"
                            >
                                <h3 className="text-2xl md:text-4xl font-serif mb-8 text-black leading-tight">
                                    {testimonials[activeTestimonial].headline}
                                </h3>

                                <p className="text-lg md:text-xl font-light font-serif leading-relaxed mb-12 text-black/60">
                                    {testimonials[activeTestimonial].quote}
                                </p>

                                <div className="pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative">
                                    {/* Progress Bar Timer */}
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-black/10">
                                        <motion.div
                                            key={`progress-${activeTestimonial}`}
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            transition={{
                                                duration: 6,
                                                ease: 'linear',
                                            }}
                                            className="h-full bg-black"
                                        />
                                    </div>

                                    <div className="pt-8">
                                        <p className="text-sm font-bold uppercase tracking-widest mb-1">
                                            {
                                                testimonials[activeTestimonial]
                                                    .author
                                            }
                                        </p>
                                        <p className="text-[11px] font-mono uppercase tracking-widest text-black/40">
                                            {
                                                testimonials[activeTestimonial]
                                                    .title
                                            }
                                        </p>
                                    </div>

                                    <div className="flex gap-4">
                                        <button
                                            onClick={() =>
                                                setActiveTestimonial(
                                                    (prev) =>
                                                        (prev -
                                                            1 +
                                                            testimonials.length) %
                                                        testimonials.length,
                                                )
                                            }
                                            className="p-4 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all group"
                                        >
                                            <ArrowLeft size={20} />
                                        </button>
                                        <button
                                            onClick={() =>
                                                setActiveTestimonial(
                                                    (prev) =>
                                                        (prev + 1) %
                                                        testimonials.length,
                                                )
                                            }
                                            className="p-4 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all group"
                                        >
                                            <ArrowRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <section
                id="cta"
                className="relative py-48 bg-white border-t border-black/10"
            >
                <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10 text-center px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-serif mb-10 text-black leading-[1.1]"
                    >
                        Ready to Begin Your <br />
                        <span className="italic">Healing Journey?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-black/50 text-lg md:text-xl max-w-2xl mb-14 font-light leading-relaxed"
                    >
                        Whether you seek physical health, mental clarity, or
                        inner peace, K-Sundo offers a time-tested path. Start
                        your practice today.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.div
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-12 py-5 bg-black text-white border border-black/5 text-[11px] uppercase tracking-[0.3em] font-mono transition-all rounded-sm group"
                            >
                                Register for a Class{' '}
                                <ArrowUpRight
                                    size={16}
                                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
