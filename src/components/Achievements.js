import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiAward, FiUsers, FiCode } from 'react-icons/fi';

const Achievements = () => {
  const achievements = [
    {
      title: 'Infineon Hackathon Finalist',
      description: 'Agentic Bug Hunter using DeepSeek-R1 & CrewAI - Jan 2026',
      icon: FiAward,
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      title: 'Tech Trails Winner',
      description: 'PSG Kriya 2025 - Innovative AI solutions showcase - Mar 2025',
      icon: FiTrendingUp,
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      title: 'CodeXcape Runner-Up',
      description: 'VIT Vellore hackathon - Advanced to finals - Oct 2025',
      icon: FiCode,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'AI/ML Specialization',
      description: 'Expertise in Generative AI, Agentic Systems, and RAG architectures',
      icon: FiUsers,
      color: 'from-emerald-500 to-emerald-600',
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
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-16 text-center">
            <span className="gradient-text">Achievements & Experience</span>
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, idx) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={idx}
                  variants={item}
                  whileHover={{ y: -3 }}
                  className="group"
                >
                  <div className="p-6 bg-slate-800 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors h-full">
                    <div className="flex gap-4">
                      {/* Icon */}
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${achievement.color} flex-shrink-0`}
                      >
                        <IconComponent size={24} className="text-white font-bold" />
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <h3 className="text-lg font-black text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {achievement.title}
                        </h3>
                        <p className="text-slate-300 text-sm mt-1">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="mt-16 p-8 bg-slate-800 rounded-lg border border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black mb-8 gradient-text">Technical Timeline</h3>

            <div className="space-y-5">
              {[
                { year: '2023', milestone: 'Began exploring the fundamentals of Artificial Intelligence, building a strong foundation in core concepts and developing an interest in intelligent systems.' },
                { year: '2024', milestone: 'Expanded into Generative AI and Large Language Models (LLMs), gaining hands-on experience with modern AI tools and understanding real-world applications.' },
                { year: '2025', milestone: 'Developed the first AI-powered productivity tool and went on to build multiple production-ready AI applications, focusing on practical problem-solving and system design.' },
                { year: '2026', milestone: 'Reached hackathon finals and progressed towards designing advanced AI systems, emphasizing agentic workflows, real-world deployment, and scalable intelligent solutions.' },
              ].map((entry, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="pt-1">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full" />
                  </div>
                  <div>
                    <p className="font-bold text-cyan-300">{entry.year}</p>
                    <p className="text-slate-300 text-sm">{entry.milestone}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-lg border border-cyan-500/40 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-300 mb-3 font-semibold">
              Continuously learning and growing in AI/ML, system design, and software architecture
            </p>
            <p className="text-cyan-300 font-bold">
              Always open to collaboration and new challenges!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
