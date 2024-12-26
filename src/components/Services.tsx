import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Bot, Brain, Shield } from 'lucide-react';
import { services } from '../data/services';

const iconComponents = {
  LineChart,
  Bot,
  Brain,
  Shield,
};

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-900 via-primary-700/10 to-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
            Our Services
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Elevate your blockchain journey with our comprehensive suite of Web3 services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = iconComponents[service.icon as keyof typeof iconComponents];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl backdrop-blur-sm border border-primary-600/20 hover:border-gold-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl p-4 mb-6 transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-dark-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-4 py-2 text-sm text-gold-400 border border-gold-400 rounded-lg hover:bg-gold-400 hover:text-dark-900 transition-colors duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;