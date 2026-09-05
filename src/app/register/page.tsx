import type { Metadata } from 'next';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import RegisterForm from './RegisterForm';

export const metadata: Metadata = {
    title: '2026 Annual Workshop | K-Sundo',
    description: 'Practice with Master Jinmok at the second annual K-Sundo workshop, September 21–22, 2026, in Portola Valley. Text HeeYoung to register.',
};

export default function RegisterPage() {
    return (
        <div className="bg-brand-offwhite text-brand-dark pt-32 md:pt-44" id="register-page">
            <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24" aria-labelledby="workshop-title">
                <div className="flex flex-wrap justify-between gap-4 border-t border-brand-dark/15 pt-5 font-mono text-[10px] uppercase tracking-[0.2em]">
                    <p>K-Sundo × Three Pillars Foundation</p>
                    <p>Portola Valley, California · 2026</p>
                </div>

                <div className="grid lg:grid-cols-[1.4fr_1fr] gap-14 lg:gap-20 mt-16 md:mt-24 items-center">
                    <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] mb-7">The 2nd Annual Workshop</p>
                        <h1 id="workshop-title" className="text-[clamp(3.5rem,7.5vw,6.5rem)] leading-[1.08] tracking-[-0.055em]">
                            A deeper breath.<br />
                            <span className="italic text-brand-accent">A fuller life.</span>
                        </h1>
                        <p className="mt-8 text-lg md:text-xl leading-relaxed max-w-lg text-brand-dark/60">
                            Discover Kuksundo (K-Sundo), an ancient Korean mind-body discipline and energy practice, with Master Jinmok.
                        </p>
                        <a href="#registration" className="mt-10 inline-flex items-center justify-between gap-10 bg-brand-dark text-white px-7 py-5 rounded-sm text-xs font-mono uppercase tracking-widest hover:bg-brand-accent transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
                            Join the workshop <ArrowDown size={16} aria-hidden="true" />
                        </a>
                        <p className="mt-5 text-sm text-brand-dark/50">All ages. All fitness levels. Everyone welcome.</p>
                    </div>

                    <div className="relative overflow-hidden bg-brand-muted rounded-sm px-8 py-12 md:p-12">
                        <div aria-hidden="true" className="absolute -right-24 -top-24 size-80 rounded-full border border-brand-accent/15" />
                        <div aria-hidden="true" className="absolute -right-16 -top-16 size-64 rounded-full border border-brand-accent/15" />
                        <div className="relative">
                            <p className="font-mono uppercase tracking-[0.2em] text-[10px]">Two evenings of practice</p>
                            <p className="font-serif text-[clamp(4rem,8vw,7rem)] leading-none tracking-[-0.06em] mt-12">21—22</p>
                            <p className="font-serif text-3xl mt-3">September 2026</p>
                            <div className="mt-10 pt-6 border-t border-brand-dark/10 space-y-3 text-sm">
                                <p>Monday & Tuesday · 6:00–8:00 PM</p>
                                <p>Portola Valley Community Center</p>
                            </div>
                            <p className="mt-10 font-serif text-xl italic">Ancient wisdom. Mindful movement.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-brand-dark text-white px-6 md:px-12 py-16 md:py-24" aria-labelledby="practice-title">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
                    <div>
                        <h2 id="practice-title" className="font-mono text-[10px] uppercase tracking-[0.22em] mb-8">Rooted in a thousand-year-old tradition</h2>
                        <blockquote className="font-serif text-3xl md:text-4xl leading-[1.4] tracking-tight">
                            “When you change your breath, you change your body, your mind and your life.”
                        </blockquote>
                    </div>
                    <div className="space-y-6 text-base leading-relaxed text-white/60 md:pt-12">
                        <p>K-Sundo combines refined deep abdominal breathing with dynamic physical movements and postures. Mindful stillness meets movement in a holistic practice that builds core strength, restores flexibility, and cultivates natural vitality.</p>
                        <p>This workshop offers a rare opportunity to practice directly under the guidance of Master Jinmok. Beginners, adults, and people of all backgrounds are welcome.</p>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24" aria-labelledby="details-title">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] mb-5">Plan your visit</p>
                <h2 id="details-title" className="text-4xl md:text-5xl mb-12">Make space for yourself.</h2>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    <div>
                        <h3 className="font-mono text-xs uppercase tracking-widest mb-5">Workshop schedule</h3>
                        {[
                            { day: 'Monday', date: '21', iso: '2026-09-21' },
                            { day: 'Tuesday', date: '22', iso: '2026-09-22' },
                        ].map((session) => (
                            <div key={session.iso} className="flex items-center gap-6 border-t border-brand-dark/10 py-6">
                                <span className="font-serif text-5xl" aria-hidden="true">{session.date}</span>
                                <div>
                                    <p className="font-medium">{session.day}</p>
                                    <time dateTime={session.iso} className="text-sm text-brand-dark/50">September {session.date}, 2026</time>
                                </div>
                                <p className="ml-auto text-sm text-right">6:00 PM<br className="sm:hidden" /> – 8:00 PM</p>
                            </div>
                        ))}
                        <p className="text-xs text-brand-dark/50 border-t border-brand-dark/10 pt-4">All times are local to Portola Valley, California.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-10">
                        <div>
                            <h3 className="font-mono text-xs uppercase tracking-widest mb-6">The location</h3>
                            <p className="font-serif text-2xl leading-snug mb-4">Portola Valley Community Center</p>
                            <address className="not-italic text-sm leading-relaxed text-brand-dark/60">765 Portola Rd.<br />Portola Valley, CA 94028</address>
                            <a href="https://www.google.com/maps/search/?api=1&query=Portola+Valley+Community+Center+765+Portola+Rd+Portola+Valley+CA+94028" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-5 text-sm underline underline-offset-4 hover:text-brand-accent">Get directions <ArrowUpRight size={14} aria-hidden="true" /></a>
                        </div>
                        <div>
                            <h3 className="font-mono text-xs uppercase tracking-widest mb-6">What to bring</h3>
                            <ul className="text-sm leading-relaxed space-y-3">
                                <li>Comfortable clothing</li>
                                <li>A yoga mat</li>
                                <li>Your body, mind, and spirit</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="registration" className="scroll-mt-8 bg-brand-muted px-6 md:px-12 py-16 md:py-24" aria-labelledby="registration-title">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-start">
                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] mb-5">Your practice starts here</p>
                        <h2 id="registration-title" className="text-4xl md:text-6xl leading-tight">Come as you are.</h2>
                        <p className="mt-6 text-base leading-relaxed text-brand-dark/60 max-w-md">Complete the form to reserve your place. Your registration will be sent directly to the K-Sundo team by email.</p>
                        <p className="mt-10 pt-6 border-t border-brand-dark/10 text-sm leading-relaxed">Prefer to text?<br /><a href="sms:+14083753676" className="font-serif text-2xl hover:text-brand-accent transition-colors">408-375-3676</a></p>
                    </div>
                    <RegisterForm />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between gap-6 text-sm leading-relaxed">
                <p>Hosted by <span className="font-medium">Three Pillars Foundation</span><br /><span className="text-brand-dark/50">A 501(c)(3) nonprofit · Presented with K-Sundo</span></p>
                <p className="md:text-right text-brand-dark/60">Voluntary donations welcome.<br />Via Zelle: <span className="select-all break-all">threepillars.fdn@gmail.com</span></p>
            </div>
        </div>
    );
}
