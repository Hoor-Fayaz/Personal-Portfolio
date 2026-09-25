'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import AIVisualization from './AIVisualization';
import { DisplayText, BodyText, MonoText } from './Typography';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const easeCurve = [0.16, 1, 0.3, 1] as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeCurve },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden isolate pt-28 pb-16 lg:pt-36 lg:pb-24">
      <AIVisualization />

      <div className="noise-overlay" />
      <div className="grid-overlay" />
      {/* Rose-tinted vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060407]/85 via-transparent to-[#060407]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
          {/* Left Column: Bio & CTAs */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              {/* Identity badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rose-600/30 bg-rose-900/20 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
                </span>
                <span className="text-xs font-mono tracking-widest text-rose-300 uppercase font-semibold">
                  HOOR FAYAZ // AI & RESEARCH LAB
                </span>
              </div>

              {/* Available badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-400 text-xs font-medium backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for hire</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <DisplayText size="4xl">
                I build intelligent systems that{' '}
                <span className="bg-gradient-to-r from-[#be185d] via-[#ec4899] to-[#d8b4fe] bg-clip-text text-transparent">
                  see, reason, and act.
                </span>
              </DisplayText>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-2 text-sm text-white/70">
              <Sparkles className="w-4 h-4 text-rose-400 flex-shrink-0" />
              <span>
                Currently building:{' '}
                <strong className="text-white font-medium">AI Rehabilitation Assistant</strong> &amp; Edge Vision Pipelines
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-xl">
              <BodyText size="lg" className="text-white/75 text-base sm:text-lg leading-relaxed">
                AI/ML Engineer specializing in Computer Vision, Deep Learning, and LLM-powered applications — from exploratory research and model evaluation to real-world deployment.
              </BodyText>
            </motion.div>

            {/* Quick capability badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-1">
              {['PyTorch & TensorFlow', 'YOLOv8 & MediaPipe', 'LangChain & RAG', 'Full-Stack Next.js'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full border border-rose-800/30 bg-rose-900/10 text-rose-200/80 hover:border-rose-600/50 hover:text-rose-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Action buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3.5 pt-2">
              <motion.a
                href="#work"
                className="group relative px-6 py-3.5 bg-gradient-to-r from-[#9d174d] via-[#be185d] to-[#ec4899] text-white rounded-xl font-medium overflow-hidden shadow-lg shadow-[#be185d]/30 flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm font-semibold tracking-wide">Explore Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="https://github.com/Hoor-Fayaz"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-5 py-3.5 border border-white/12 bg-white/[0.03] hover:bg-rose-900/20 hover:border-rose-600/40 text-white rounded-xl font-medium transition-all flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <GitHubIcon className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/hoor-fayaz"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-5 py-3.5 border border-white/12 bg-white/[0.03] hover:bg-fuchsia-900/20 hover:border-fuchsia-600/40 text-white rounded-xl font-medium transition-all flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <LinkedInIcon className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </motion.a>

              <motion.a
                href="#contact"
                className="group px-5 py-3.5 border border-white/12 bg-white/[0.03] hover:bg-white/[0.08] text-white rounded-xl font-medium transition-all flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                <span className="text-sm">Resume</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Beautiful Aesthetic Portrait Card */}
          <div className="relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-[420px] sm:max-w-[450px]"
            >
              {/* Deep rose/magenta ambient glow — tuned to the dress color */}
              <div
                className="absolute -inset-4 rounded-[3rem] blur-2xl opacity-70 animate-pulse"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(190,24,93,0.45) 0%, rgba(236,72,153,0.25) 40%, rgba(216,180,254,0.12) 70%, transparent 100%)',
                  animationDuration: '5s',
                }}
              />
              {/* Inner border halo */}
              <div className="absolute -inset-1 rounded-[2.8rem] bg-gradient-to-r from-[#be185d]/35 via-[#ec4899]/20 to-[#d8b4fe]/30 blur-md opacity-55" />

              {/* Glassmorphic portrait shell */}
              <div className="relative p-2.5 sm:p-3 rounded-[2.5rem] bg-gradient-to-b from-rose-300/15 via-fuchsia-200/5 to-purple-200/10 border border-rose-300/25 shadow-[0_30px_90px_rgba(15,4,10,0.90)] backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-[#0d080c] group">
                  <img
                    src="/portrait.jpg"
                    alt="Hoor Fayaz - AI/ML Engineer"
                    className="w-full h-full object-cover object-top filter brightness-[1.04] contrast-[1.05] saturate-[1.08] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle rose gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0408]/85 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Badge: Top Left Status */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -top-3 -left-3 sm:-left-6 flex items-center gap-2 rounded-2xl border border-rose-500/20 bg-[#120810]/90 px-3.5 py-2 shadow-2xl backdrop-blur-md"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-semibold text-white/90">AI/ML Engineer</span>
              </motion.div>

              {/* Floating Badge: Top Right Vision */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute top-10 -right-2 sm:-right-5 hidden sm:flex items-center gap-2 rounded-2xl border border-rose-500/20 bg-[#120810]/90 px-3.5 py-2 shadow-2xl backdrop-blur-md"
              >
                <span className="h-2 w-2 rounded-full bg-[#ec4899]" />
                <MonoText size="xs" className="text-rose-300 font-semibold">COMPUTER VISION</MonoText>
              </motion.div>

              {/* Floating Badge: Bottom Right LLM */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute bottom-16 -right-2 sm:-right-4 hidden sm:flex items-center gap-2 rounded-2xl border border-purple-400/20 bg-[#120810]/90 px-3.5 py-2 shadow-2xl backdrop-blur-md"
              >
                <span className="h-2 w-2 rounded-full bg-[#d8b4fe]" />
                <MonoText size="xs" className="text-[#d8b4fe] font-semibold">LLM / RAG</MonoText>
              </motion.div>

              {/* Floating Card: CGPA academic badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="absolute -bottom-4 left-2 sm:left-4 flex items-center gap-3 rounded-2xl border border-rose-500/20 bg-[#120810]/95 px-4 py-2.5 shadow-2xl backdrop-blur-md"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#be185d] to-[#ec4899] flex items-center justify-center text-sm font-bold text-white shadow-md">
                  ★
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">CGPA 3.93</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-900/40 text-rose-300 font-mono border border-rose-700/30">
                      TOP 1%
                    </span>
                  </div>
                  <span className="text-[11px] text-white/60">Honor Roll · Merit Scholar</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="w-5 h-9 border border-rose-400/25 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-[#be185d] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}