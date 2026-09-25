'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#060407]/88 backdrop-blur-xl border-b border-rose-900/20 shadow-lg shadow-[#060407]/60'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#9d174d] to-[#ec4899] p-[1px] shadow-[0_0_20px_rgba(190,24,93,0.40)]">
                <div className="w-full h-full bg-[#0d080c] rounded-xl flex items-center justify-center">
                  <span className="font-mono font-bold text-sm tracking-wider text-white">HF</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-white group-hover:text-[#f9a8d4] transition-colors">
                  Hoor Fayaz
                </span>
                <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
                  AI/ML Engineer
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors relative py-1 group"
                  whileHover={{ y: -1 }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#be185d] to-[#ec4899] group-hover:w-full transition-all duration-300 rounded-full" />
                </motion.a>
              ))}
            </div>

            {/* Social Icons & CTA */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="https://github.com/Hoor-Fayaz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/70 hover:text-white hover:border-rose-600/50 hover:bg-rose-900/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/hoor-fayaz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/70 hover:text-white hover:border-fuchsia-500/50 hover:bg-fuchsia-900/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
              </motion.a>
              <a
                href="#contact"
                className="ml-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-[#9d174d] to-[#be185d] text-white hover:opacity-95 shadow-md shadow-[#be185d]/30 transition-all"
              >
                Get In Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-0 right-0 z-40 bg-[#0a0a10]/95 backdrop-blur-2xl border-b border-white/10 md:hidden shadow-2xl"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-base font-medium text-white/80 hover:text-[#a78bfa] transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href="https://github.com/Hoor-Fayaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/hoor-fayaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}