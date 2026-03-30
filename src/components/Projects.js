import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Verbose AI',
      category: 'GEN AI',
      problem: 'Authors face creative blocks and need intelligent assistance to generate ideas with meaningful, contextual suggestions',
      solution: 'Developed a story-generating AI co-pilot with a Dual-RAG architecture ("Muse"). Used k-NN (Pinecone) and PCA to filter irrelevant context, then integrated refined context with Gemini API for coherent suggestions.',
      tech: ['Python', 'Gemini API', 'Pinecone', 'PCA', 'RAG'],
      impact: 'Reduced irrelevant outputs by 35%, enhanced author productivity with context-aware suggestions',
      github: 'https://github.com/Sakthi1217/verbose-winner',
      demo: '#',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 2,
      title: 'ArtisanHub - AI Marketplace',
      category: 'GEN AI',
      problem: 'Local artisans lack digital visibility and efficient tools to manage their business and reach customers',
      solution: 'Built AI-powered marketplace with multilingual voice processing, LLM-based content optimization (Gemini & Sarvam APIs), automated social media publishing (Meta Graph API), and AI-driven image moderation (CLIP + NSFW).',
      tech: ['Python', 'Gemini API', 'Sarvam API', 'WhatsApp API', 'Meta Graph API', 'JWT Authentication', 'CLIP'],
      impact: 'Enabled digital onboarding for artisans, automated marketing workflows, ensured platform safety',
      github: 'https://github.com/Sakthi1217/Artisan-hub',
      demo: '#',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      id: 3,
      title: 'Agentic Bug Hunter',
      category: 'Agentic AI',
      problem: 'Debugging large codebases is time-consuming and requires deep expertise',
      solution: 'Developed agentic AI debugging system using DeepSeek-R1, CrewAI, and Tree-sitter with multi-agent reasoning. Integrated local RAG pipeline (Ollama + Qdrant) for low-latency, privacy-preserving analysis.',
      tech: ['DeepSeek-R1', 'CrewAI', 'MCP server', 'Tree-sitter', 'Ollama', 'Qdrant'],
      impact: 'Automated bug detection workflows, enabled low-latency codebase analysis, improved debugging efficiency',
      github: 'https://github.com/Sakthi1217/Linguist-Agentic-AI',
      demo: '#',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      title: 'AI-Powered Hospital Queue Management Robot',
      problem: 'Hospitals struggle with inefficient patient flow, long waits, and poor emergency response',
      solution: 'Developed real-time monitoring system using YOLOv8, MediaPipe Pose, and OpenCV. Integrated fall detection with temporal state modeling and automated evidence generation for context-aware alerts.',
      tech: ['YOLOv8', 'MediaPipe', 'OpenCV', 'Raspberry Pi', 'Python'],
      impact: 'Projected 20% efficiency boost (500+ patients/month), real-time fall detection, reduced false alarms',
      github: '#',
      demo: '#',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-16 text-center">
            <span className="gradient-text">Featured Projects</span>
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-full p-6 bg-slate-900 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors flex flex-col group">
                  {/* Header with gradient bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${project.color} mb-5 rounded-full`} />

                  {/* Title */}
                  <h3 className="text-xl font-black text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Category Badge */}
                  {project.category && (
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-bold border border-cyan-500/40 mb-3 w-fit">
                      {project.category}
                    </span>
                  )}

                  {/* Content sections */}
                  <div className="space-y-3 flex-grow text-sm">
                    <div>
                      <p className="text-cyan-400 font-bold mb-1">Problem</p>
                      <p className="text-slate-300">{project.problem}</p>
                    </div>

                    <div>
                      <p className="text-emerald-400 font-bold mb-1">Solution</p>
                      <p className="text-slate-300">{project.solution}</p>
                    </div>

                    <div>
                      <p className="text-orange-400 font-bold mb-1">Impact</p>
                      <p className="text-slate-300">{project.impact}</p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <p className="text-slate-400 font-bold mb-2">Tech</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-slate-800 text-cyan-300 rounded text-xs font-bold border border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-5 pt-4 border-t border-slate-700">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-3 py-2 bg-slate-800 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 rounded font-bold transition-all w-full"
                    >
                      <FiGithub size={16} />
                      <span className="text-xs">GitHub</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More CTA */}
          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-300 mb-5 font-semibold">Want to see more?</p>
            <a
              href="https://github.com/Sakthi1217?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Explore All Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
