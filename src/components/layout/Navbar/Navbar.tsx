'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: 'Home', id: 'home', path: '/' },
    { name: 'About', id: 'about', path: '/#about' },
    { name: 'Benefits', id: 'benefits', path: '/#benefits' },
    { name: 'Method', id: 'method', path: '/#solutions' },
    { name: 'Locations', id: 'locations', path: '/#experience' },
    { name: 'Pricing', id: 'pricing', path: '/#pricing' },
    { name: 'Testimonials', id: 'testimonials', path: '/#testimonials' },
  ];

  const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    if (item.path.startsWith('/#')) {
      e.preventDefault();
      const id = item.path.substring(2);
      if (pathname !== '/') {
        router.push('/');
        // Wait for navigation then scroll
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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-8 mix-blend-difference text-white" id="main-nav">
      <Link 
        href="/"
        className="cursor-pointer group flex items-baseline gap-1" 
        id="brand-logo"
      >
        <span className="text-xl md:text-2xl font-serif font-light tracking-widest hover:opacity-70 transition-opacity uppercase whitespace-nowrap">
          K-Sundo
        </span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10 lg:gap-14" id="desktop-menu">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.path}
            onClick={(e) => handleNavClick(e, item)}
            className={`text-[0.875em] leading-[1em] font-mono uppercase tracking-[2px] transition-all ${
              (pathname === item.path || (pathname === '/' && item.id === 'home')) ? 'opacity-100' : 'opacity-50 hover:opacity-100'
            }`}
            id={`nav-link-${item.id}`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <Link 
        href="/contact"
        className="hidden md:flex items-center gap-2 group text-[0.875em] leading-[1em] font-mono uppercase tracking-[2px] border border-white/30 px-6 py-2.5 rounded-sm hover:bg-white hover:text-black transition-all"
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
            className="fixed inset-0 bg-black text-white p-12 flex flex-col gap-10 items-start justify-center pointer-events-auto"
            id="mobile-menu"
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={(e) => handleNavClick(e, item)}
                className={`text-4xl md:text-6xl font-mono uppercase tracking-[4px] ${
                  pathname === item.path ? 'opacity-100' : 'opacity-40'
                }`}
                id={`mobile-nav-link-${item.id}`}
              >
                {item.name}
              </Link>
            ))}
            <button 
              className="mt-10 px-8 py-4 border border-white/20 text-sm uppercase tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              Close Menu
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
