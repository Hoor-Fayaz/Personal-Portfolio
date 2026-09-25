'use client';

import { motion } from 'framer-motion';
import { Eye, BookOpenCheck, Stethoscope, ArrowRight } from 'lucide-react';

const researchAreas = [
  {
    id: 'vision',
    label: 'Vision Systems',
    title: 'Spatial reasoning for edge intelligence',
    blurb: 'Advancing edge-optimized perception stacks that fuse real-time detection, segmentation, and temporal tracking for resilient autonomous perception.',
    icon: Eye,
    accent: '#8b5cf6',
  },
  {
    id: 'retrieval',
    label: 'Grounded Intelligence',
    title: 'Context-grounded multimodal assistants',
    blurb: 'Designing closed-loop retrieval architectures that preserve verifiable source evidence, reduce hallucinations, and anchor AI generation in grounded facts.',
    icon: BookOpenCheck,
    accent: '#38bdf8',
  },
  {
    id: 'health',
    label: 'Healthcare AI',
    title: 'Human-centered decision support',
    blurb: 'Developing interpretability overlays and biomechanical pose tracking for physical rehabilitation assistants and medical imaging diagnostics.',
    icon: Stethoscope,
    accent: '#ec4899',
  },
];

export default function CurrentResearch() {
  return (
    <section id="research" className="py-24 lg:py-32 relative">
      <div className="noise-overlay" />
      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-head mb-16"
        >
          <span className="section-kicker">Research Horizons</span>
          <h2 className="section-title">Designing systems that understand context, not just raw signals.</h2>
          <p className="section-subtitle">
            My current investigations explore the frontier between high-precision computer vision, trustworthy retrieval-augmented reasoning, and human-in-the-loop deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {researchAreas.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="surface-card rounded-2xl p-7 border border-white/10 hover:border-rose-600/35 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.03] group-hover:scale-110 transition-transform"
                      style={{ color: item.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono tracking-widest uppercase text-white/50">
                      {item.label}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-200 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                    {item.blurb}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/6 flex items-center gap-1.5 text-xs font-mono text-rose-400 group-hover:text-rose-300">
                  <span>Exploration Active</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
