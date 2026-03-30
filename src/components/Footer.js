import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', link: 'https://github.com/Sakthi1217' },
    { icon: FiLinkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/sakthi-karthik/' },
    { icon: FiMail, label: 'Email', link: 'mailto:sakthikarthikbc@gmail.com' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-black gradient-text mb-3">B C Sakthi Karthik</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Generative AI & Agentic Systems Developer. Building intelligent, production-ready AI solutions.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-black text-slate-100 mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-500 hover:text-slate-950 text-slate-300 transition-all"
                    title={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

        {/* Footer Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Sakthi Karthik. All rights reserved.</p>
          
          <p>Built with React & Tailwind CSS</p>

          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            className="p-2 bg-slate-800 rounded-lg hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 transition-all cursor-pointer"
            title="Back to top"
          >
            <FiArrowUp size={18} />
          </ScrollLink>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
