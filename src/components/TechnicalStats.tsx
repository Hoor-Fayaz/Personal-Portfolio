'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Stat {
  value: string;
  label: string;
  subtext: string;
}

const stats: Stat[] = [
  { value: '3.93', label: 'Cumulative CGPA', subtext: 'Top 1% Academic Standing' },
  { value: '97.80%', label: 'Detection Accuracy', subtext: 'Road Accident Vision System' },
  { value: '99.67%', label: 'Peak Precision', subtext: 'Imbalance-Mitigated Pipeline' },
  { value: '0.199mm', label: '3D Tracking Error', subtext: 'Catheter Ultrasound Recon' },
  { value: '15+', label: 'Engineers Mentored', subtext: 'GDG Campus ML Bootcamp' },
  { value: '100%', label: 'Merit Tuition Waiver', subtext: 'Continuous Honor Roll' },
];

export default function TechnicalStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-14 sm:py-20 relative border-y border-white/10 bg-[#08080d]/60 backdrop-blur-md">
      <div className="noise-overlay" />
      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
              className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-rose-600/35 hover:bg-white/[0.04] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold bg-gradient-to-r from-white via-purple-100 to-rose-300 bg-clip-text text-transparent group-hover:from-rose-300 group-hover:to-fuchsia-300 transition-all">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white/90 mt-1">
                  {stat.label}
                </div>
              </div>
              <div className="text-[11px] text-white/50 mt-2 font-mono">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}