// import React from 'react';
// import { motion } from 'framer-motion';
// import { projects } from '../data/projects';
// import { ExternalLink, Github } from 'lucide-react';

// const Portfolio = () => {
//   return (
//     <section className="py-20 bg-gradient-to-b from-dark-900 via-primary-700/10 to-dark-900">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
//             Featured Projects
//           </h2>
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//             Innovative solutions driving the future of Web3
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="group relative bg-gradient-to-br from-dark-800 to-primary-700/20 rounded-xl overflow-hidden"
//             >
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
//                 <p className="text-gray-300 mb-4">{project.description}</p>
//                 <div className="space-y-2 mb-4">
//                   {project.metrics.map((metric, i) => (
//                     <div key={i} className="flex items-center text-gold-400">
//                       <span className="w-2 h-2 bg-gold-400 rounded-full mr-2"></span>
//                       {metric}
//                     </div>
//                   ))}
//                 </div>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="px-3 py-1 bg-primary-700/30 text-gold-400 rounded-full text-sm border border-primary-600/20"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-4">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-400 to-gold-600 text-dark-900 rounded-lg font-bold text-sm"
//                   >
//                     <ExternalLink className="w-4 h-4" />
//                     Live Demo
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="flex items-center gap-2 px-4 py-2 border border-gold-400 text-gold-400 rounded-lg font-bold text-sm hover:bg-gold-400 hover:text-dark-900 transition-colors"
//                   >
//                     <Github className="w-4 h-4" />
//                     Source
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Globe, Laptop, Shield, Settings } from 'lucide-react';

const Consultancy = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-900 via-primary-700/10 to-dark-900">
      <div className="container mx-auto px-4">
        {/* Consultancy Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
            Consultancy
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to unlock the full potential of decentralized finance? My consultancy services are designed to guide hedge funds, family offices, and corporate treasuries through the complexities of the DeFi landscape with precision and clarity.
          </p>
        </motion.div>

        {/* Consultancy Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
          >
            <Users className="w-16 h-16 text-gold-400 mb-6" />
            <h4 className="text-2xl font-bold text-white mb-3">Tailored DeFi Strategies</h4>
            <p className="text-gray-300 text-center">
              I don’t believe in one-size-fits-all. I work closely with you to develop personalized strategies that align with your financial goals, balancing growth, stability, and long-term success.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
          >
            <Settings className="w-16 h-16 text-gold-400 mb-6" />
            <h4 className="text-2xl font-bold text-white mb-3">AI-Driven Insights</h4>
            <p className="text-gray-300 text-center">
              Gain a competitive edge with automated AI systems that deliver real-time insights, optimize decision-making, and streamline portfolio management.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
          >
            <Shield className="w-16 h-16 text-gold-400 mb-6" />
            <h4 className="text-2xl font-bold text-white mb-3">Risk Management Expertise</h4>
            <p className="text-gray-300 text-center">
              DeFi comes with risks—but I’m here to help you navigate them. From smart contract audits to addressing market volatility and regulatory compliance, I provide actionable solutions to safeguard your investments.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
          >
            <Globe className="w-16 h-16 text-gold-400 mb-6" />
            <h4 className="text-2xl font-bold text-white mb-3">Layer 2 Scaling and Optimization</h4>
            <p className="text-gray-300 text-center">
              Stay ahead of the curve by leveraging Layer 2 ecosystems like Base for cost-effective, high-performance operations.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
          >
            <Target className="w-16 h-16 text-gold-400 mb-6" />
            <h4 className="text-2xl font-bold text-white mb-3">Governance and Growth Advisory</h4>
            <p className="text-gray-300 text-center">
              Make your mark in DeFi governance. I’ll help you maximize your influence on platforms like Balancer and Aerodrome, opening doors to strategic partnerships and long-term opportunities.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
          >
            <Laptop className="w-16 h-16 text-gold-400 mb-6" />
            <h4 className="text-2xl font-bold text-white mb-3">Data-Driven Diversification</h4>
            <p className="text-gray-300 text-center">
              Build a resilient portfolio with my diversified growth plans, designed to deliver consistent returns while adapting to a dynamic market environment.
            </p>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
};

export default Consultancy;