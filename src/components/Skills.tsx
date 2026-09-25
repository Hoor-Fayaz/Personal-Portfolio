'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  BrainCircuit, 
  Eye, 
  Sparkles, 
  Database, 
  Globe2, 
  TerminalSquare 
} from 'lucide-react';

interface SkillCategory {
  category: string;
  skills: string[];
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Computer Vision',
    icon: Eye,
    accent: '#8b5cf6',
    skills: ['OpenCV', 'MediaPipe', 'YOLOv8', 'ArcFace', 'Grad-CAM', 'Pose Estimation', 'ResNet50', 'DenseNet121'],
  },
  {
    category: 'Generative AI & LLMs',
    icon: Sparkles,
    accent: '#ec4899',
    skills: ['LangChain', 'LangGraph', 'RAG Pipelines', 'Hugging Face', 'Vector DBs', 'OpenAI API', 'Gemini API'],
  },
  {
    category: 'Deep Learning & ML',
    icon: BrainCircuit,
    accent: '#3b82f6',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'CNNs', 'Transfer Learning', 'Model Evaluation', 'Hyperparameter Tuning'],
  },
  {
    category: 'Languages',
    icon: Code2,
    accent: '#10b981',
    skills: ['Python', 'C++', 'C', 'JavaScript', 'TypeScript', 'Java', 'Dart', 'SQL'],
  },
  {
    category: 'Data Science & Analysis',
    icon: Database,
    accent: '#f59e0b',
    skills: ['Pandas', 'NumPy', 'Exploratory Data Analysis', 'Data Cleaning', 'Data Preprocessing', 'Feature Engineering'],
  },
  {
    category: 'Web & Deployment',
    icon: Globe2,
    accent: '#06b6d4',
    skills: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'TailwindCSS', 'REST APIs'],
  },
  {
    category: 'Developer Tools & Platforms',
    icon: TerminalSquare,
    accent: '#a855f7',
    skills: ['Git & GitHub', 'Streamlit', 'Jupyter Lab', 'Google Colab', 'Kaggle', 'Docker', 'VS Code', 'Linux'],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
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
          <span className="section-kicker">Technical Stack</span>
          <h2 className="section-title">Tools and frameworks powering intelligent systems.</h2>
          <p className="section-subtitle">
            A comprehensive, battle-tested skillset bridging machine learning research, computer vision models, and full-stack software development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="surface-card rounded-2xl p-6 border border-white/10 hover:border-rose-600/35 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.03] group-hover:scale-105 transition-transform"
                      style={{ color: category.accent }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-rose-200 transition-colors">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs rounded-lg border border-white/8 bg-white/[0.02] text-white/70 hover:border-rose-600/45 hover:text-white hover:bg-rose-800/15 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Core Pillars Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-10 surface-card rounded-2xl p-6 sm:p-8 border border-white/10"
        >
          <div className="grid md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0">
              <span className="text-xs font-mono uppercase tracking-widest text-[#a78bfa]">Primary Focus</span>
              <h4 className="text-base font-bold text-white mt-1">Computer Vision &amp; Deep Learning</h4>
              <p className="text-xs text-white/60 mt-1">Classification, object detection, segmentation, and pose tracking.</p>
            </div>
            <div className="pt-4 md:pt-0 md:pl-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8]">Applied AI</span>
              <h4 className="text-base font-bold text-white mt-1">Generative AI &amp; RAG Systems</h4>
              <p className="text-xs text-white/60 mt-1">Grounding LLMs with structured knowledge and verifiable context.</p>
            </div>
            <div className="pt-4 md:pt-0 md:pl-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#10b981]">Full Lifecycle</span>
              <h4 className="text-base font-bold text-white mt-1">Production-Ready Software</h4>
              <p className="text-xs text-white/60 mt-1">Fast APIs, optimized deployment pipelines, and responsive interfaces.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}