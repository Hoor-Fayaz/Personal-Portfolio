'use client';

import { motion } from 'framer-motion';
import { Database, Cpu, TestTube, CheckCircle2, Rocket, Award } from 'lucide-react';

const lifecycleSteps = [
  {
    step: '01',
    label: 'Data Engineering & Curation',
    description: 'Imbalance mitigation, multi-modal alignment, and robust preprocessing pipelines.',
    icon: Database,
  },
  {
    step: '02',
    label: 'Architecture & Modeling',
    description: 'Backbone selection (CNNs, Transformers, YOLO), transfer learning, and fine-tuning.',
    icon: Cpu,
  },
  {
    step: '03',
    label: 'Evaluation & Explainability',
    description: 'Cross-split validation, AUC/F1 metrics, and Grad-CAM interpretability.',
    icon: TestTube,
  },
  {
    step: '04',
    label: 'Context & Grounding (RAG)',
    description: 'Retrieval pipelines pairing vector search with LLMs for hallucination-resistant outputs.',
    icon: CheckCircle2,
  },
  {
    step: '05',
    label: 'Production Deployment',
    description: 'Edge inference, fast API wrappers, Docker containerization, and monitoring.',
    icon: Rocket,
  },
];

export default function About() {
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
    <section id="about" className="py-24 lg:py-32 relative">
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
          <span className="section-kicker">About &amp; Methodology</span>
          <h2 className="section-title">From mathematical formulation to scalable products.</h2>
          <p className="section-subtitle">
            I specialize in turning complex AI and computer vision research into high-accuracy, deployable systems built for reliability.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Narrative & Academic Excellence (5 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-6">
            <div className="surface-card rounded-2xl p-7 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-xl font-bold text-white mb-4">Engineering Philosophy</h3>
              <p className="text-white/75 leading-relaxed mb-4 text-sm sm:text-base">
                I work across the complete intelligence stack — from raw data acquisition and experimentation to real-time inference and user-facing applications.
              </p>
              <p className="text-white/65 leading-relaxed text-sm">
                With a foundation in Computer Software Engineering and hands-on production experience in Computer Vision and Generative AI, I build software that makes complex perception models intuitive and impactful.
              </p>
            </div>

            {/* Academic Honors Card */}
            <div className="surface-card rounded-2xl p-7 border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-rose-700/15 border border-rose-600/30 flex items-center justify-center text-rose-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Academic Excellence</h4>
                  <p className="text-xs text-white/50">COMSATS University Islamabad</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-sm text-white/70">Cumulative GPA</span>
                  <span className="text-xl font-mono font-bold bg-gradient-to-r from-rose-400 to-fuchsia-400 bg-clip-text text-transparent">
                    3.93 / 4.00
                  </span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-sm text-white/70">Campus Honor Roll</span>
                  <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Achieved
                  </span>
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-sm text-white/70">Tuition Merit Award</span>
                  <span className="text-sm font-semibold text-white font-mono">100% Waiver</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: ML Lifecycle Roadmap (7 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="surface-card rounded-2xl p-7 sm:p-8 border border-white/10">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/8">
                <div>
                  <h3 className="text-xl font-bold text-white">Production ML Lifecycle</h3>
                  <p className="text-xs text-white/50 mt-1">End-to-end disciplined methodology</p>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-rose-800/15 text-rose-300 border border-rose-700/20">
                  5-STAGE PIPELINE
                </span>
              </div>

              <div className="space-y-5">
                {lifecycleSteps.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="group flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/6 hover:border-rose-600/30 hover:bg-white/[0.04] transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-700/20 to-rose-800/15 border border-rose-600/30 flex items-center justify-center flex-shrink-0 text-rose-300 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono font-bold text-rose-400">{item.step}</span>
                          <h4 className="font-semibold text-white text-sm sm:text-base">{item.label}</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-white/65 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}