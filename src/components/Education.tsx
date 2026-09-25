'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section id="education" className="py-24 lg:py-32 relative">
      <div className="noise-overlay" />
      <div className="section-shell relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-head mb-16"
        >
          <span className="section-kicker">Academic Background</span>
          <h2 className="section-title">Education &amp; professional training.</h2>
          <p className="section-subtitle">
            Strong foundations in software engineering, applied machine learning, algorithms, and full-stack software development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Main Degree Card */}
          <motion.div 
            variants={itemVariants} 
            className="surface-card rounded-2xl p-7 sm:p-8 border border-white/10 hover:border-rose-600/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-700/20 to-rose-800/15 border border-rose-600/30 flex items-center justify-center text-rose-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-rose-800/15 text-rose-300 border border-rose-700/20">
                  EXPECTED SEP 2027
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                BS Computer Software Engineering
              </h3>
              <p className="text-rose-400 font-medium text-sm sm:text-base">
                COMSATS University Islamabad
              </p>
              <div className="flex items-center gap-1.5 text-xs text-white/50 mt-1 mb-6">
                <MapPin className="w-3.5 h-3.5" />
                <span>Abbottabad Campus</span>
              </div>

              {/* GPA Highlight */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8 mb-6 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono tracking-widest text-white/50 uppercase">Academic Standing</div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold bg-gradient-to-r from-rose-300 to-fuchsia-300 bg-clip-text text-transparent">
                    3.93 / 4.00
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    Honor Roll
                  </span>
                  <div className="text-[11px] text-white/50 mt-1">100% Merit Tuition Waiver</div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-white/60 mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-rose-400" />
                  <span>Key Coursework</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Artificial Intelligence',
                    'Machine Learning',
                    'Data Structures & Algorithms',
                    'Data Science',
                    'Database Systems',
                    'Operating Systems',
                    'Object-Oriented Programming',
                    'Software Design & Architecture',
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 text-xs border border-white/8 rounded-lg bg-white/[0.02] text-white/70"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professional Certification Card */}
          <motion.div 
            variants={itemVariants} 
            className="surface-card rounded-2xl p-7 sm:p-8 border border-white/10 hover:border-blue-500/35 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-rose-700/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Award className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  COMPLETED 2024
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Full Stack Web Development
              </h3>
              <p className="text-blue-400 font-medium text-sm sm:text-base">
                Atomcamp
              </p>
              <div className="flex items-center gap-1.5 text-xs text-white/50 mt-1 mb-6">
                <Calendar className="w-3.5 h-3.5" />
                <span>Professional Bootcamp Program</span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8 mb-6">
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Rigorous immersive program covering modern enterprise full-stack web architecture, server-side data workflows, RESTful API engineering, responsive design, and production deployment best practices.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-white/60 mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  <span>Technologies &amp; Competencies</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {['Next.js & React', 'Node.js & Express', 'MongoDB & Mongoose', 'REST APIs', 'Chatbot Integration', 'TailwindCSS', 'Git Workflows'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs border border-white/8 rounded-lg bg-white/[0.02] text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}