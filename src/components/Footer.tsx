import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 pt-20 border-t border-primary-600/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-display font-bold">
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
                Arshad Web3
              </span>
            </Link>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Empowering the future of blockchain technology with innovative solutions and cutting-edge expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'DeFi Analysis',
                'Algorithmic Trading',
                'AI Agents in Web3',
                'Smart Contract Audit'
              ].map((service) => (
                <li key={service} className="text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest Web3 insights and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-dark-800 text-white rounded-l-lg border border-primary-600/20 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none flex-1"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-4 py-3 bg-gradient-to-r from-gold-400 to-gold-600 text-dark-900 font-bold rounded-r-lg hover:shadow-lg hover:shadow-gold-400/20 transition-all duration-300 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>

        <div className="py-8 border-t border-primary-600/20 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Elite Web3. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;