import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-10">
            <span className="gradient-text">About Me</span>
          </h2>

          <div className="space-y-5 text-lg text-slate-300 leading-relaxed border-l-4 border-cyan-500 pl-6">
            <p className="font-semibold text-slate-100">
              Software engineer specializing in AI/ML development with hands-on experience building LLM-powered Generative AI applications and autonomous agentic systems.
            </p>

            <p>
              I focus on designing intelligent automation systems and scalable AI architectures that solve real-world problems. With a strong foundation in machine learning, system design, and backend development, I've built production-ready AI solutions ranging from multimodal platforms to advanced debugging systems.
            </p>

            <p>
              I'm passionate about pushing the boundaries of what's possible with GenAI and agentic systems. Whether it's building RAG pipelines, designing multi-agent reasoning systems, or developing intelligent applications, I'm committed to creating solutions that deliver measurable impact.
            </p>
          </div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            {[
              { number: '4+', label: 'AI Projects' },
              { number: '3+', label: 'Hackathons' },
              { number: '8+', label: 'Tech Skills' },
              { number: '100%', label: 'Dedication' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-900 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors text-center"
              >
                <p className="text-3xl font-black text-cyan-400">{stat.number}</p>
                <p className="text-sm text-slate-400 mt-2 font-semibold">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Areas of Interest */}
          <motion.div
            className="mt-12 p-6 bg-slate-900 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-black text-cyan-300 mb-4">Areas of Interest</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Generative AI & LLMs',
                'Agentic AI Systems & Multi-Agent Reasoning',
                'AI-Powered Automation',
                'Multimodal AI Applications',
              ].map((interest, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <p className="text-slate-300 font-semibold">{interest}</p>
                </div>
              ))}
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default About;
