import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'DeFi Yield Optimizer',
    description: 'Developed an automated yield farming strategy that maximizes returns across multiple protocols.',
    metrics: ['35% APY increase', '$5M TVL achieved', '1000+ active users'],
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&h=400',
    tags: ['DeFi', 'Yield Farming', 'Smart Contracts']
  },
  {
    title: 'AI Trading Bot',
    description: 'Created an AI-powered trading bot that analyzes market sentiment and executes trades.',
    metrics: ['28% ROI', '24/7 operation', '99.9% uptime'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=400',
    tags: ['AI', 'Trading', 'Automation']
  },
  {
    title: 'Smart Contract Security Suite',
    description: 'Built a comprehensive security analysis tool for Solidity smart contracts.',
    metrics: ['100+ vulnerabilities detected', '$10M+ protected', '50+ clients'],
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&h=400',
    tags: ['Security', 'Audit', 'Smart Contracts']
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-900 via-primary-700/10 to-dark-900">
      <div className="container mx-auto px-4">
        {/* Projects Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
            Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my portfolio of innovative projects that leverage cutting-edge technology to solve real-world problems in the DeFi and Web3 space.
          </p>
        </motion.div>

        {/* Projects Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h4 className="text-2xl font-bold text-white mb-3">{project.title}</h4>
              <p className="text-gray-300 text-center mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.metrics.map((metric, idx) => (
                  <span
                    key={idx}
                    className="bg-primary-700/20 text-gold-400 px-3 py-1 rounded-full text-sm"
                  >
                    {metric}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-dark-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Export Projects as the default export
export default Projects;