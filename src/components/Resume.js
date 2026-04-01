import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink } from 'react-icons/fi';

const Resume = () => {
  const resumePath = `${process.env.PUBLIC_URL}/resume_sakthi.pdf`;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'B_C_Sakthi_Karthik_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-16 text-center">
            <span className="gradient-text">My Resume</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Resume Viewer */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                <iframe
                  src={`${resumePath}#toolbar=0`}
                  className="w-full h-96 sm:h-[600px]"
                  title="Resume PDF"
                />
              </div>
            </motion.div>

            {/* Actions Sidebar */}
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="w-full p-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-black rounded-lg transition-all flex items-center justify-center gap-2 group"
              >
                <FiDownload size={20} className="group-hover:scale-110 transition-transform" />
                Download Resume
              </button>

              {/* View Full Button */}
              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 bg-slate-800 border border-slate-700 hover:border-cyan-400 text-cyan-300 font-black rounded-lg transition-colors flex items-center justify-center gap-2 group"
              >
                <FiExternalLink size={20} className="group-hover:scale-110 transition-transform" />
                View Full Size
              </a>

              {/* Resume Highlights */}
              <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
                <h3 className="text-lg font-black text-cyan-300 mb-4">Highlights</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>B.Tech CSE, CGPA 7.2/10</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>4+ AI Projects</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>Hackathon Finalist</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>GenAI & Agentic AI Expert</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
