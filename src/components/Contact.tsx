'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'hoorf2004@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="noise-overlay" />
      <div className="section-shell relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Glass Contact Box */}
          <div className="relative surface-card rounded-3xl p-8 sm:p-12 border border-white/12 text-center overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-b from-purple-600/25 via-indigo-600/10 to-transparent blur-3xl pointer-events-none" />

            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rose-600/30 bg-rose-800/15 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span className="text-xs font-mono tracking-widest text-[#d8b4fe] uppercase font-semibold">
                OPEN TO OPPORTUNITIES
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4"
            >
              Let&apos;s build something{' '}
              <span className="bg-gradient-to-r from-rose-400 via-violet-300 to-blue-400 bg-clip-text text-transparent">
                extraordinary.
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Looking for an AI/ML engineer who bridges algorithmic rigor with robust production delivery? Feel free to reach out for roles, research collaborations, or speaking engagements.
            </motion.p>

            {/* Email Action Bar */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto mb-10"
            >
              <a
                href={`mailto:${email}`}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-[#9d174d] to-[#be185d] text-white rounded-xl font-medium shadow-lg shadow-rose-600/25 flex items-center justify-center gap-2 hover:opacity-95 transition-all text-sm font-semibold"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full sm:w-auto px-5 py-3.5 border border-white/12 bg-white/[0.04] hover:bg-white/[0.08] text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-white/70" />
                    <span>Copy: {email}</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Social Grid */}
            <motion.div
              variants={itemVariants}
              className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto pt-6 border-t border-white/10"
            >
              <a
                href="https://github.com/Hoor-Fayaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-white/8 bg-white/[0.02] hover:border-rose-600/35 hover:bg-white/[0.05] transition-all group text-left"
              >
                <div className="flex items-center gap-3">
                  <GitHubIcon className="w-5 h-5 text-white/80 group-hover:text-white" />
                  <div>
                    <div className="text-sm font-semibold text-white">GitHub</div>
                    <div className="text-xs text-white/50">@Hoor-Fayaz</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-rose-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="https://linkedin.com/in/hoor-fayaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-white/8 bg-white/[0.02] hover:border-blue-500/40 hover:bg-white/[0.05] transition-all group text-left"
              >
                <div className="flex items-center gap-3">
                  <LinkedInIcon className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-sm font-semibold text-white">LinkedIn</div>
                    <div className="text-xs text-white/50">in/hoor-fayaz</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}