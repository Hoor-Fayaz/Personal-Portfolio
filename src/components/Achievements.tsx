'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Laptop, Users2, HeartHandshake, ShieldCheck } from 'lucide-react';

interface Achievement {
  title: string;
  category: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const achievements: Achievement[] = [
  {
    title: 'Winner — Inter-Subject AI Project Competition',
    category: 'Competition',
    badge: '1st Place',
    icon: Trophy,
  },
  {
    title: 'Runner-Up — Inter-Subject DSA Competition',
    category: 'Algorithms',
    badge: '2nd Place',
    icon: Award,
  },
  {
    title: 'Prime Minister Youth Laptop Scheme Awardee',
    category: 'Merit Award',
    badge: 'National Merit',
    icon: Laptop,
  },
  {
    title: 'Team Leader — 6-Member Delegated Squad at National Convention on Students Quality Circles',
    category: 'Leadership',
    badge: 'National Delegation',
    icon: Users2,
  },
];

const volunteerWork = [
  {
    organization: 'Shelter of Smiles',
    role: 'Community Outreach Volunteer',
    cause: 'Child welfare and underprivileged community support',
  },
  {
    organization: 'The Project Suicide',
    role: 'Awareness Campaign Volunteer',
    cause: 'Youth mental health advocacy and crisis intervention awareness',
  },
  {
    organization: 'Jihad for Zero Thalassemia',
    role: 'Health Volunteer',
    cause: 'Thalassemia screening drives and blood donor coordination',
  },
];

export default function Achievements() {
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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="achievements" className="py-24 lg:py-32 relative">
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
          <span className="section-kicker">Honors &amp; Impact</span>
          <h2 className="section-title">Recognitions, leadership, and social contribution.</h2>
          <p className="section-subtitle">
            A track record of competitive excellence, technical initiative, and commitment to positive community change.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Awards & Recognition Column (7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-4 h-4 text-rose-400" />
              <h3 className="text-lg font-bold text-white uppercase tracking-wider text-xs font-mono">
                Awards &amp; Competitions
              </h3>
            </div>

            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="surface-card rounded-2xl p-5 border border-white/10 hover:border-rose-600/35 transition-all flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-rose-700/15 border border-rose-600/30 flex items-center justify-center flex-shrink-0 text-rose-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] font-mono tracking-wider text-white/50 uppercase">
                        {item.category}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-rose-700/15 text-rose-300 border border-rose-600/25">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-white group-hover:text-rose-200 transition-colors leading-snug">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Volunteer Leadership Column (5 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <HeartHandshake className="w-4 h-4 text-rose-400" />
              <h3 className="text-lg font-bold text-white uppercase tracking-wider text-xs font-mono">
                Volunteer &amp; Community Impact
              </h3>
            </div>

            {volunteerWork.map((vol, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="surface-card rounded-2xl p-5 border border-white/10 hover:border-rose-500/35 transition-all group"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h4 className="text-base font-bold text-white group-hover:text-rose-200 transition-colors">
                    {vol.organization}
                  </h4>
                  <span className="text-[11px] font-mono text-rose-400 px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20">
                    {vol.role}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                  {vol.cause}
                </p>
              </motion.div>
            ))}

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/8 mt-6">
              <div className="flex items-center gap-2 text-xs font-mono text-white/60 mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>VALUES &amp; ETHICS</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Committed to responsible AI development, algorithmic transparency, and giving back through technical workshops and community mentorship.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}