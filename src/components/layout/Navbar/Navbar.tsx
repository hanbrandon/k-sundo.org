'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import FlipLink from '@/components/common/FlipLink';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const navItems = [
    { name: 'About', id: 'about', path: '/#about' },
    { name: 'Benefits', id: 'benefits', path: '/#benefits' },
    { name: 'Method', id: 'method', path: '/#solutions' },
    { name: 'Locations', id: 'locations', path: '/#experience' },
    { name: 'Pricing', id: 'pricing', path: '/#pricing' },
    { name: 'Testimonials', id: 'testimonials', path: '/#testimonials' },
  ];

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const id = path.substring(2);
      if (pathname !== '/') {
        router.push('/');
        setTimeout(() => {
          const el = document.getElementById(id);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const hasHero = pathname === '/' || pathname === '/contact' || pathname === '/founders-envision' || pathname === '/advisory-board';

  return (
    <nav 
      className={`absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-8 transition-all duration-500 ${
        !hasHero ? 'text-black' : 'text-white'
      }`} 
      id="main-nav"
    >
      <Link 
        href="/"
        className={`cursor-pointer group flex items-center font-serif text-2xl md:text-3xl font-bold tracking-tight hover:opacity-70 transition-opacity ${
          hasHero ? 'text-white' : 'text-black'
        }`} 
        id="brand-logo"
      >
        K-Sundo<span className="text-[0.4em] ml-0 relative -top-[0.7em]">™</span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10 lg:gap-14" id="desktop-menu">
        {navItems.map((item) => (
          <FlipLink
            key={item.id}
            href={item.path}
            onClick={(e) => handleNavClick(e, item.path)}
            className={`text-[0.875em] leading-[1em] font-mono uppercase tracking-[2px] transition-all ${
              pathname === item.path ? 'opacity-100' : 'opacity-50 hover:opacity-100'
            }`}
          >
            {item.name}
          </FlipLink>
        ))}
      </div>

      <Link 
        href="/contact"
        className={`hidden md:flex items-center gap-2 group text-[0.875em] leading-[1em] font-mono uppercase tracking-[2px] border px-6 py-2.5 rounded-sm transition-all ${
          !hasHero ? 'border-black/20 hover:bg-black hover:text-white' : 'border-white/30 hover:bg-white hover:text-black'
        }`}
      >
        Let's Talk <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </Link>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden opacity-70 hover:opacity-100" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        id="mobile-menu-toggle"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black text-white p-12 pt-24 flex flex-col gap-10 items-start overflow-y-auto pointer-events-auto"
            id="mobile-menu"
          >
            {/* Close Button Top Right */}
            <button 
              className="absolute top-10 right-10 p-4 opacity-50 hover:opacity-100 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navItems.map((item) => (
              <FlipLink
                key={item.id}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`text-4xl md:text-6xl font-mono uppercase tracking-[4px] ${
                  pathname === item.path ? 'opacity-100' : 'opacity-40'
                }`}
              >
                {item.name}
              </FlipLink>
            ))}
            <Link 
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-10 px-10 py-4 border border-white/30 text-sm uppercase tracking-widest font-mono flex items-center gap-3 hover:bg-white hover:text-black transition-all rounded-sm"
            >
              Let's Talk <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
