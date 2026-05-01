'use client';

import { motion } from 'motion/react';
import { MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react';

// Components
import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/common/Typography/SectionHeader';

export default function ClassesPage() {
  const locations = [
    {
      name: "Portola Valley Community Center",
      address: "765 Portola Rd, Portola Valley, CA",
      schedule: "Wednesdays 6:00 PM – 8:30 PM",
      type: "In-Person",
      color: "bg-blue-50 text-blue-600",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Milpitas Barbara Lee Senior Center",
      address: "40 N Milpitas Blvd, Milpitas, CA",
      schedule: "Saturdays 7:15 AM – 9:00 AM",
      type: "In-Person",
      color: "bg-orange-50 text-orange-600",
      img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Online (Zoom)",
      address: "Global Virtual Session",
      schedule: "Wednesdays 5:00 AM – 7:00 AM",
      type: "Online",
      color: "bg-brand-dark/5 text-brand-dark/40",
      img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-20 bg-brand-offwhite" id="classes-page">
      <Section id="classes-header">
        <header className="mb-12">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] uppercase font-mono tracking-[0.5em] text-brand-accent mb-6 block"
          >
            AVAILABILITY
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-huge mb-12 uppercase leading-[1.05]"
          >
            LOCATIONS & <br />
            <span className="italic text-brand-accent tracking-normal">SCHEDULES</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-brand-dark/40 max-w-xl text-lg font-medium leading-snug border-l-2 border-brand-dark/10 pl-8"
          >
            Find the right time and place for your practice. Selective sessions 
            curated for lineage transmission and vitality.
          </motion.p>
        </header>
      </Section>

      <Section id="location-cards" className="pt-0">
        <div className="space-y-16">
          {locations.map((loc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[80px] p-8 md:p-16 overflow-hidden flex flex-col lg:flex-row gap-16 items-center shadow-sm border border-brand-accent/5 hover:border-brand-accent/20 transition-all duration-700"
              id={`location-${i}`}
            >
              <div className="w-full lg:w-2/5 aspect-square lg:aspect-[4/3] rounded-[60px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                <img 
                  src={loc.img} 
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              <div className="flex-grow flex flex-col h-full w-full">
                <div className="flex justify-between items-start mb-12">
                  <div className={`px-4 py-1.5 rounded-full text-[9px] font-mono uppercase tracking-widest ${loc.color}`}>
                    {loc.type}
                  </div>
                  <motion.div 
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    className="w-16 h-16 rounded-full border border-brand-dark/5 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-all"
                  >
                    <ArrowUpRight size={24} />
                  </motion.div>
                </div>

                <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight group-hover:text-brand-accent transition-colors leading-tight">
                  {loc.name}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-brand-dark/5">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-offwhite flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-brand-dark/30 font-mono mb-2">Location</h4>
                      <p className="text-sm font-medium text-brand-dark/60 tracking-tight leading-relaxed">{loc.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-offwhite flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                      <Clock size={22} />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-brand-dark/30 font-mono mb-2">Weekly Window</h4>
                      <p className="text-2xl font-serif font-black text-brand-dark italic tracking-tight">{loc.schedule}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Preparation Check (Bento-style) */}
      <Section id="preparation" bg="white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div 
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: -20 }}
             className="md:col-span-7 bg-brand-dark rounded-[100px] p-12 md:p-20 text-white"
          >
            <h3 className="text-4xl font-serif font-black mb-12 italic">Preparation Protocols</h3>
            <div className="space-y-10">
              {[
                { title: "Arrival", desc: "15 minutes before the window opens." },
                { title: "Attire", desc: "Loose, natural fibers recommended." },
                { title: "Mindset", desc: "Stillness is the priority." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <span className="text-brand-accent font-mono text-xl opacity-40 group-hover:opacity-100 transition-opacity">0{idx+1}</span>
                  <div>
                    <h5 className="text-lg font-mono uppercase tracking-widest mb-1">{item.title}</h5>
                    <p className="text-white/40 text-sm italic font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: 20 }}
             className="md:col-span-5 bg-brand-accent rounded-[100px] p-12 md:p-16 flex flex-col justify-center text-center text-white shadow-2xl"
          >
             <Phone className="mx-auto mb-8 opacity-20" size={60} />
             <h4 className="text-3xl font-serif font-black mb-4">Request Access</h4>
             <p className="text-white/60 text-sm mb-12 font-medium">Text us to obtain physical gate codes or digital Zoom links.</p>
             <p className="text-4xl md:text-5xl font-mono font-black tracking-tighter mb-4">408.375.3676</p>
             <div className="h-1 w-20 bg-white mx-auto rounded-full" />
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
