import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="space-y-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Name */}
          <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-7xl font-black">
            <span className="gradient-text">B C Sakthi Karthik</span>
          </motion.h1>

          {/* Title */}
          <motion.p variants={item} className="text-2xl sm:text-3xl font-bold text-cyan-300">
            AI Systems & Cloud Developer
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Building LLM-powered applications, intelligent automation systems, and scalable AI architectures.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-5 justify-center pt-8"
          >
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="btn-primary"
            >
              View Projects
            </ScrollLink>
            <a
              href="https://github.com/Sakthi1217"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit GitHub
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={item}
            className="flex gap-6 justify-center pt-8"
          >
            <a
              href="https://github.com/Sakthi1217"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full text-slate-200 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 transform hover:scale-110 font-bold"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sakthi-karthik/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full text-slate-200 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 transform hover:scale-110 font-bold"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:sakthikarthikbc@gmail.com"
              className="p-3 bg-slate-800 rounded-full text-slate-200 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 transform hover:scale-110 font-bold"
            >
              <FiMail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-16"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <p className="text-slate-400 mb-3 font-semibold">Scroll to explore</p>
          <svg
            className="w-6 h-6 mx-auto text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
