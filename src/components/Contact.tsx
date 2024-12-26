import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-20 bg-gradient-to-b from-dark-900 via-primary-700/10 to-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Let's discuss how we can transform your Web3 vision into reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl backdrop-blur-sm border border-primary-600/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-dark-900/50 text-white rounded-lg border border-primary-600/20 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-dark-900/50 text-white rounded-lg border border-primary-600/20 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-900/50 text-white rounded-lg border border-primary-600/20 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all duration-300"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-dark-900 font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold-400/20 transition-all duration-300"
                type="submit"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl backdrop-blur-sm border border-primary-600/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-gold-400" />
                Let's Connect
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:contact@eliteweb3.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-gold-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-dark-900/50 rounded-lg flex items-center justify-center group-hover:bg-gold-400/10 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-sm">contact@eliteweb3.com</p>
                  </div>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-gold-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-dark-900/50 rounded-lg flex items-center justify-center group-hover:bg-gold-400/10 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm">Connect with us</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl backdrop-blur-sm border border-primary-600/20">
              <h3 className="text-2xl font-bold text-white mb-4">Office Hours</h3>
              <p className="text-gray-300 leading-relaxed">
                Monday - Friday
                <br />
                9:00 AM - 6:00 PM (UTC)
                <br />
                <span className="text-gold-400">
                  Available 24/7 for urgent consultations
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;