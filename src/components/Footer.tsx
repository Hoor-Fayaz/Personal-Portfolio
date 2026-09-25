'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 border-t border-white/10 relative bg-[#06060a]">
      <div className="noise-overlay" />
      <div className="section-shell relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Brand Identity */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#9d174d] to-[#3b82f6] p-[1px]">
                <div className="w-full h-full bg-[#0d0d14] rounded-lg flex items-center justify-center">
                  <span className="font-mono font-bold text-xs text-white">HF</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white">Hoor Fayaz</h3>
            </div>
            <p className="text-xs sm:text-sm text-white/60">
              AI/ML Engineer · Computer Vision &amp; Generative AI Systems
            </p>
          </div>

          {/* Quick links & Socials */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-3">
              <motion.a
                href="https://github.com/Hoor-Fayaz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/70 hover:text-white hover:border-rose-600/45 hover:bg-rose-800/15 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/hoor-fayaz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/70 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="mailto:hoorf2004@gmail.com"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/70 hover:text-white hover:border-rose-600/45 hover:bg-rose-800/15 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] text-white/70 hover:text-white text-xs font-mono transition-all"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-2">
          <div>
            © {new Date().getFullYear()} Hoor Fayaz. All rights reserved.
          </div>
          <div className="font-mono text-[11px] text-white/40">
            Engineered with Next.js, TypeScript &amp; TailwindCSS
          </div>
        </div>
      </div>
    </footer>
  );
}