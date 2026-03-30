import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const contactMethods = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'sakthikarthikbc@gmail.com',
      link: 'mailto:sakthikarthikbc@gmail.com',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'sakthi-karthik',
      link: 'https://www.linkedin.com/in/sakthi-karthik/',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'github.com/Sakthi1217',
      link: 'https://github.com/Sakthi1217',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '6380042652',
      link: 'tel:6380042652',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-center">
            <span className="gradient-text">Get In Touch</span>
          </h2>

          <p className="text-center text-slate-300 text-lg mb-16 max-w-2xl mx-auto font-semibold">
            Interested in collaborating? Let's connect!
          </p>

          <div className="max-w-2xl mx-auto">
            {/* Contact Methods */}
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black mb-8 text-center">Contact Information</h3>

              {contactMethods.map((method, idx) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={idx}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors group border border-slate-700 hover:border-cyan-400"
                  >
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${method.color} flex-shrink-0`}
                    >
                      <IconComponent size={22} className="text-white font-bold" />
                    </div>
                    <div>
                      <p className="font-bold text-cyan-300">
                        {method.label}
                      </p>
                      <p className="text-slate-300 text-sm">{method.value}</p>
                    </div>
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Availability */}
          <motion.div
            className="mt-14 p-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-lg border border-emerald-500/40 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              <p className="text-emerald-300 font-bold">Open to Opportunities</p>
            </div>
            <p className="text-slate-300 text-sm">
              Available for freelance, internships, and full-time opportunities
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
