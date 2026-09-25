'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import GitHubIcon from './icons/GitHubIcon';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  metrics?: { label: string; value: string }[];
  featured?: boolean;
  inProgress?: boolean;
  variant?: 'vision' | 'network' | 'rag' | 'signal';
  githubUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Road Accident Detection & Monitoring System',
    description:
      'Built a high-signal video processing pipeline for crash recognition, class imbalance mitigation, and deployment-oriented monitoring across train/validation/test splits.',
    technologies: ['Python', 'ResNet50', 'YOLOv8', 'OpenCV', 'Computer Vision'],
    category: 'Computer Vision',
    metrics: [
      { label: 'Accuracy', value: '97.80%' },
      { label: 'Precision', value: '99.67%' },
      { label: 'Recall', value: '97.24%' },
    ],
    featured: true,
    variant: 'vision',
  },
  {
    id: '2',
    title: 'Realtime Sign Language Detector',
    description:
      'A gesture recognition system that converts sign language into readable text and speech for accessible, real-time communication support.',
    technologies: ['MediaPipe', 'TensorFlow', 'Realtime ML'],
    category: 'Computer Vision',
    metrics: [{ label: 'Recognition', value: 'Winner — AI Competition' }],
    featured: true,
    variant: 'network',
  },
  {
    id: '3',
    title: 'Facial Recognition Attendance System',
    description:
      'Identity matching and attendance logging built from embeddings and real-time video streams for operational monitoring.',
    technologies: ['ArcFace', 'OpenCV', 'Face Recognition'],
    category: 'Identity Vision',
    variant: 'vision',
  },
  {
    id: '4',
    title: 'Breast Cancer Histopathology Classification',
    description:
      'DenseNet-based medical imaging classification with imbalance-aware evaluation and explainability overlays for clinical trust.',
    technologies: ['DenseNet121', 'Grad-CAM', 'TensorFlow', 'Medical Imaging'],
    category: 'Medical Imaging',
    metrics: [{ label: 'Evaluation', value: 'AUC • F1 • Recall' }],
    variant: 'signal',
  },
  {
    id: '5',
    title: '3D Catheter Path Reconstruction from Ultrasound',
    description:
      'A spatial reconstruction workflow combining U-Net attention and 3D geometric fitting for surgical path estimation.',
    technologies: ['PyTorch', 'U-Net', 'RANSAC', '3D Reconstruction'],
    category: 'Medical Imaging',
    metrics: [
      { label: 'Accuracy', value: '99.26%' },
      { label: 'Error', value: '0.199 mm' },
    ],
    variant: 'signal',
  },
  {
    id: '6',
    title: 'AI Rehabilitation Assistant',
    description:
      'A multimodal exercise-analysis system that pairs pose understanding with retrieval-grounded guidance for personalized rehab feedback.',
    technologies: ['MediaPipe', 'LLM', 'RAG', 'Physics-informed Feedback'],
    category: 'Generative AI',
    inProgress: true,
    variant: 'rag',
  },
];

function ProjectVisual({ variant }: { variant?: Project['variant'] }) {
  switch (variant) {
    case 'network':
      return (
        <div className="visual visual-network">
          <div className="visual-grid" />
          {[
            { x: '18%', y: '24%' },
            { x: '44%', y: '18%' },
            { x: '62%', y: '42%' },
            { x: '30%', y: '66%' },
            { x: '68%', y: '74%' },
          ].map((node, index) => (
            <div key={index} className="node" style={{ left: node.x, top: node.y }} />
          ))}
          {[
            { left: '18%', top: '24%', width: '28%', rotate: 14 },
            { left: '44%', top: '18%', width: '22%', rotate: -18 },
            { left: '30%', top: '66%', width: '32%', rotate: 10 },
            { left: '50%', top: '35%', width: '22%', rotate: 32 },
          ].map((line, index) => (
            <span key={index} className="line" style={{ left: line.left, top: line.top, width: line.width, transform: `rotate(${line.rotate}deg)` }} />
          ))}
          <div className="visual-tag">
            <span>Detection</span>
            <strong>98.4%</strong>
          </div>
        </div>
      );
    case 'rag':
      return (
        <div className="visual visual-rag">
          <div className="visual-grid" />
          <div className="doc" />
          <div className="doc" />
          <div className="doc" />
          <div className="visual-tag">
            <span>Context</span>
            <strong>Retrieval</strong>
          </div>
        </div>
      );
    case 'signal':
      return (
        <div className="visual visual-signal">
          <div className="visual-grid" />
          <span className="signal-bar" />
          <span className="signal-bar" />
          <span className="signal-bar" />
          <div className="visual-tag">
            <span>Signal</span>
            <strong>0.199 mm</strong>
          </div>
        </div>
      );
    case 'vision':
    default:
      return (
        <div className="visual visual-vision">
          <div className="visual-grid" />
          <div className="visual-box visual-box--large" />
          <div className="visual-box visual-box--small" />
          <div className="visual-box visual-box--tiny" />
          <div className="visual-tag">
            <span>Confidence</span>
            <strong>99.67%</strong>
          </div>
        </div>
      );
  }
}

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = projects.filter((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="py-32 relative">
      <div className="noise-overlay" />
      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-head"
        >
          <span className="section-kicker">Projects</span>
          <h2 className="section-title">Systems built for perception, reasoning, and measurable impact.</h2>
          <p className="section-subtitle">
            From computer vision pipelines to retrieval-grounded AI, each project explores how technical depth translates into useful, production-ready systems.
          </p>
        </motion.div>

        <div className="project-showcase">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="project-feature"
            >
              <div className="project-feature__copy">
                <div className="project-meta">
                  <span className="project-badge">{project.category}</span>
                  {project.inProgress && <span className="project-badge project-badge--accent">In progress</span>}
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-stack">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-metrics">
                  {project.metrics?.map((metric) => (
                    <div key={metric.label} className="project-metric">
                      <small>{metric.label}</small>
                      <strong>{metric.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="project-actions">
                  <button type="button" onClick={() => setSelectedProject(project)}>
                    View case study
                  </button>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              <div className="project-feature__visual">
                <ProjectVisual variant={project.variant} />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="project-grid"
        >
          {secondaryProjects.map((project) => (
            <button key={project.id} type="button" className="project-card" onClick={() => setSelectedProject(project)}>
              <div className="project-card__meta">
                <span>{project.category}</span>
                {project.inProgress && <span className="project-badge project-badge--accent">Live</span>}
              </div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <small>Open case study</small>
            </button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="w-full max-w-4xl overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#090b10]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <div className="project-meta">
                      <span className="project-badge">{selectedProject.category}</span>
                      {selectedProject.inProgress && <span className="project-badge project-badge--accent">In progress</span>}
                    </div>
                    <h2 className="mt-4 text-3xl md:text-4xl">{selectedProject.title}</h2>
                  </div>
                  <button type="button" className="text-2xl text-white/70" onClick={() => setSelectedProject(null)}>
                    ×
                  </button>
                </div>

                <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
                  <div className="space-y-6">
                    <div>
                      <p className="text-base text-white/70">{selectedProject.description}</p>
                    </div>

                    <div>
                      <h3 className="mb-3 text-sm uppercase tracking-[0.18em] text-white/50">Stack</h3>
                      <div className="project-stack">
                        {selectedProject.technologies.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.3rem] border border-white/8 bg-white/[0.02] p-4">
                    <h3 className="mb-4 text-sm uppercase tracking-[0.16em] text-white/50">Impact</h3>
                    <div className="space-y-3">
                      {selectedProject.metrics?.map((metric) => (
                        <div key={metric.label} className="rounded-xl border border-white/8 bg-white/[0.02] p-3">
                          <div className="text-[0.62rem] uppercase tracking-[0.14em] text-white/45">{metric.label}</div>
                          <div className="mt-2 text-xl font-semibold text-[#f5f3ee]">{metric.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-white/8 pt-5">
                  {selectedProject.githubUrl && (
                    <a className="project-actions" href={selectedProject.githubUrl} target="_blank" rel="noreferrer">
                      <GitHubIcon className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a className="project-actions" href={selectedProject.demoUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>Live demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
