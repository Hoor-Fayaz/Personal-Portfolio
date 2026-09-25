'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location?: string;
  period: string;
  badge?: string;
  skills: string[];
  highlights: string[];
}

const experiences: Experience[] = [
  {
    title: 'AI/ML & Generative AI Intern',
    company: 'Elite Tech Solutions (Pvt.) Ltd. / ZenithCraft Ventures',
    period: 'Aug 2025 – Oct 2025',
    badge: 'Industry Internship',
    skills: ['LangChain', 'RAG Pipelines', 'OpenAI APIs', 'Prompt Engineering'],
    highlights: [
      'Architected context-grounded LLM / RAG applications utilizing LangChain and external vector search.',
      'Developed AI Travel Itinerary Planner and automated AI Resume Information Extractor with production output schemas.',
    ],
  },
  {
    title: 'AI/ML Intern',
    company: 'DevelopersHub Corporation, Islamabad',
    period: 'Jan 2026 – Mar 2026',
    badge: 'Applied ML',
    skills: ['TensorFlow', 'Scikit-learn', 'Pandas', 'EDA', 'Model Evaluation'],
    highlights: [
      'Executed full machine learning lifecycles including exploratory data analysis, data cleansing, and feature engineering.',
      'Trained, validated, and benchmarked predictive models using Scikit-learn and TensorFlow pipelines.',
    ],
  },
  {
    title: 'AI/ML Lead',
    company: 'Google Developer Groups on Campus',
    period: 'Aug 2025 – Present',
    badge: 'Leadership & Mentorship',
    skills: ['Bootcamp Instructor', 'CNNs', 'GridSearchCV', 'PCA', 'Community'],
    highlights: [
      'Designed and delivered a comprehensive hands-on AI/ML curriculum for 15+ university engineering students.',
      'Mentored participants on classical algorithms (Logistic Regression, Random Forest), CNNs, GridSearchCV, and PCA.',
    ],
  },
  {
    title: 'Freelance Full-Stack Developer',
    company: 'Self-employed',
    period: 'Feb 2026 – May 2026',
    badge: 'Production Engineering',
    skills: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Vercel ISR'],
    highlights: [
      'Built Jannah Chic (jannahchic.com), a high-performance full-stack e-commerce platform.',
      'Integrated Next.js ISR, Express REST APIs, MongoDB atlas, Cloudinary asset storage, and automated CI/CD.',
    ],
  },
];

export default function Experience() {
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
    <section id="experience" className="py-24 lg:py-32 relative">
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
          <span className="section-kicker">Professional Journey</span>
          <h2 className="section-title">Industry experience &amp; technical leadership.</h2>
          <p className="section-subtitle">
            Hands-on work spanning applied AI research, enterprise generative AI pipelines, and mentorship across the developer ecosystem.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Continuous vertical timeline glow line */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#be185d] via-[#6366f1]/60 to-transparent" />

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-12 sm:pl-20 group"
              >
                {/* Timeline node */}
                <div className="absolute left-[9px] sm:left-[25px] top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0a0b12] border-2 border-fuchsia-500 group-hover:scale-125 group-hover:border-[#c084fc] transition-all shadow-[0_0_12px_rgba(139,92,246,0.6)] z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-white m-auto mt-[3px]" />
                </div>

                {/* Experience Card */}
                <div className="surface-card rounded-2xl p-6 sm:p-7 border border-white/10 group-hover:border-rose-600/30 transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="inline-block text-[11px] font-mono tracking-widest text-[#a78bfa] uppercase font-semibold mb-1">
                        {exp.badge}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-rose-200 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-medium text-white/80 mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/8 text-xs font-mono text-white/70">
                      <Calendar className="w-3.5 h-3.5 text-rose-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4 pt-4 border-t border-white/6">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-rose-800/15 text-rose-300 border border-rose-700/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}