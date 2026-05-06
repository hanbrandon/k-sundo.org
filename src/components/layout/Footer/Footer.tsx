import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Instagram = ({ size = 18, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const Facebook = ({ size = 18, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const Twitter = ({ size = 18, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

export default function Footer() {
    const navLinks = [
        { name: 'Home', id: 'home', path: '/' },
        { name: 'Social', id: 'social', path: '/#social' },
        { name: 'Content', id: 'content', path: '/#content' },
        { name: 'Performance', id: 'performance', path: '/#performance' },
        { name: 'About', id: 'about', path: '/#about' },
        { name: 'Classes', id: 'classes', path: '/classes' },
    ];

    return (
        <footer
            className="bg-black text-white pt-20 pb-12 px-6 md:px-12"
            id="main-footer"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-20 mb-16">
                    <div className="max-w-md">
                        <h2 className="text-3xl md:text-4xl font-serif mb-10 leading-tight">
                            See how we can help your vitality grow. Get in touch
                            today.
                        </h2>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-all group rounded-sm"
                        >
                            Let's Talk{' '}
                            <ArrowUpRight
                                size={14}
                                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                            />
                        </Link>
                    </div>

                    <div className="flex flex-col gap-6">
                        <span className="text-[13px] uppercase tracking-[0.2em] text-white font-bold block font-mono">
                            Explore
                        </span>
                        <div className="flex flex-col gap-4">
                            {[
                                { name: 'About', path: '/#about' },
                                { name: 'Benefits', path: '/#benefits' },
                                { name: 'Method', path: '/#solutions' },
                                { name: 'Locations', path: '/#experience' },
                                { name: 'Pricing', path: '/#pricing' },
                                {
                                    name: 'Testimonials',
                                    path: '/#testimonials',
                                },
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className="text-[14px] text-white/50 hover:text-white transition-colors font-mono uppercase tracking-wider"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <span className="text-[13px] uppercase tracking-[0.2em] text-white font-bold block font-mono">
                            Vision & Leadership
                        </span>
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/founders-envision"
                                className="text-[14px] text-white/50 hover:text-white transition-colors font-mono uppercase tracking-wider"
                            >
                                Founder&apos;s Envision
                            </Link>
                            <Link
                                href="/advisory-board"
                                className="text-[14px] text-white/50 hover:text-white transition-colors font-mono uppercase tracking-wider"
                            >
                                Advisory Board
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="text-[14px] text-white/50 font-mono leading-relaxed uppercase">
                            <span className="text-[13px] uppercase tracking-[0.2em] text-white font-bold block mb-4">
                                Headquarters
                            </span>
                            Silicon Valley, California
                            <br />
                            Locations: Milpitas & Portola Valley Community
                            Centers
                            <br />
                            Email: threepillars.fdn@gmail.com
                            <br />
                            Phone: 408-375-3676 (Heeyoung Pyen)
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-[14px] uppercase tracking-widest text-white/80 font-mono text-center md:text-left">
                            © 2026 K-Sundo™. All Rights Reserved.
                        </p>
                        <p className="text-[14px] uppercase tracking-widest text-white/60 font-mono text-center md:text-left">
                            K-Sundo™ is a trademark of Three Pillars Foundation.
                        </p>
                        <p className="text-[14px] uppercase tracking-widest text-white/60 font-mono text-center md:text-left italic">
                            Designed for Health, Peace, and Global
                            Revitalization.
                        </p>
                    </div>
                    <a
                        href="https://gawoori.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors font-mono"
                    >
                        Website Developed by GAWOORI.COM
                    </a>
                </div>
            </div>
        </footer>
    );
}
