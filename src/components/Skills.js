import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'C/C++', 'JavaScript', 'HTML/CSS'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'AI & Machine Learning',
      skills: ['Generative AI', 'Agentic AI', 'LLMs', 'RAG Systems', 'Machine Learning', 'Deep Learning'],
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      title: 'Frameworks & APIs',
      skills: ['Spring Boot', 'React', 'Maven', 'RESTful APIs', 'JDBC'],
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      title: 'Tools & Technologies',
      skills: ['AWS & GCP', 'GitHub', 'Linux', 'MySQL'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Core Competencies',
      skills: ['System Design', 'Intelligent Automation', 'Multimodal AI', 'OOP', 'Computer Networks', 'DSA'],
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-16 text-center">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="p-6 bg-slate-800 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors group"
                whileHover={{ y: -3 }}
              >
                <h3 className={`text-lg font-black mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1 bg-slate-700 text-cyan-300 rounded-full text-sm font-bold border border-slate-600 hover:border-cyan-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Proficiency Visualization */}
          <motion.div
            className="mt-16 p-8 bg-slate-800 rounded-lg border border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black mb-8 gradient-text">Key Proficiencies</h3>

            <div className="space-y-6">
              {[
                { label: 'AI & GenAI Development', percentage: 90 },
                { label: 'Backend Development', percentage: 85 },
                { label: 'System Design', percentage: 80 },
                { label: 'Data Analysis', percentage: 85 },
              ].map((prof, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-3">
                    <span className="text-slate-100 font-bold">{prof.label}</span>
                    <span className="text-cyan-300 font-bold">{prof.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden border border-slate-600">
                    <motion.div
                      className="bg-gradient-to-r from-cyan-500 to-emerald-500 h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${prof.percentage}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
