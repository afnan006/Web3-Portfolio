// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Users, Target, Globe, Laptop } from 'lucide-react';

// // const About = () => {
// //   return (
// //     <section className="py-20 bg-gradient-to-b from-dark-900 via-primary-700/10 to-dark-900">
// //       <div className="container mx-auto px-4">
// //         {/* About Section Title */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           className="text-center mb-16"
// //         >
// //           <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
// //             About Us
// //           </h2>
// //           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
// //             We're at the forefront of innovation, leveraging blockchain technology to create secure, decentralized solutions.
// //           </p>
// //         </motion.div>

// //         {/* About Content */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           className="grid grid-cols-1 md:grid-cols-2 gap-16"
// //         >
// //           <div>
// //             <h3 className="text-3xl font-bold text-white mb-4">
// //               Our Mission
// //             </h3>
// //             <p className="text-gray-300 text-lg">
// //               We aim to empower businesses and individuals by unlocking the potential of Web3 technologies, creating a decentralized future that is secure, transparent, and accessible to all.
// //             </p>
// //           </div>
// //           <div>
// //             <h3 className="text-3xl font-bold text-white mb-4">
// //               Our Vision
// //             </h3>
// //             <p className="text-gray-300 text-lg">
// //               Our vision is to be the leading innovator in the blockchain space, providing advanced DeFi solutions, NFTs, and smart contracts to revolutionize the digital economy.
// //             </p>
// //           </div>
// //         </motion.div>

// //         {/* Key Highlights */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           className="text-center mt-16"
// //         >
// //           <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
// //             Why Choose Us?
// //           </h3>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             <motion.div
// //               whileHover={{ scale: 1.05 }}
// //               className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
// //             >
// //               <Users className="w-16 h-16 text-gold-400 mb-6" />
// //               <h4 className="text-2xl font-bold text-white mb-3">Expert Team</h4>
// //               <p className="text-gray-300 text-center">
// //                 Our team consists of experienced professionals dedicated to providing high-quality solutions.
// //               </p>
// //             </motion.div>

// //             <motion.div
// //               whileHover={{ scale: 1.05 }}
// //               className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
// //             >
// //               <Target className="w-16 h-16 text-gold-400 mb-6" />
// //               <h4 className="text-2xl font-bold text-white mb-3">Focused Approach</h4>
// //               <p className="text-gray-300 text-center">
// //                 We focus on delivering blockchain solutions that meet your specific needs and drive results.
// //               </p>
// //             </motion.div>

// //             <motion.div
// //               whileHover={{ scale: 1.05 }}
// //               className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
// //             >
// //               <Globe className="w-16 h-16 text-gold-400 mb-6" />
// //               <h4 className="text-2xl font-bold text-white mb-3">Global Reach</h4>
// //               <p className="text-gray-300 text-center">
// //                 Our blockchain solutions are scalable and designed to make an impact on a global scale.
// //               </p>
// //             </motion.div>

// //             <motion.div
// //               whileHover={{ scale: 1.05 }}
// //               className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
// //             >
// //               <Laptop className="w-16 h-16 text-gold-400 mb-6" />
// //               <h4 className="text-2xl font-bold text-white mb-3">Cutting-edge Tech</h4>
// //               <p className="text-gray-300 text-center">
// //                 We use the latest blockchain technologies and development frameworks to ensure the best results.
// //               </p>
// //             </motion.div>
// //           </div>
// //         </motion.div>

// //         {/* Contact CTA */}
// //         <div className="text-center mt-16">
// //           <motion.button
// //             className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg text-dark-900 font-bold text-lg shadow-lg hover:shadow-gold-400/20 transition-all duration-300 transform hover:scale-105"
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //           >
// //             Contact Us
// //           </motion.button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default About;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Users, Target, Globe, Laptop } from 'lucide-react';

// const About = () => {
//   return (
//     <section className="py-20 bg-gradient-to-b from-dark-900 via-primary-700/10 to-dark-900">
//       <div className="container mx-auto px-4">
//         {/* About Section Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
//             About Me
//           </h2>
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//             I’m a Web3.0 Analyst with a sharp focus on crafting high-impact strategies for institutional finance. With hands-on experience in deploying $5 million on the Base ecosystem, I specialize in building diversified portfolios that blend high-growth potential, stable returns, and long-term appreciation.
//           </p>
//         </motion.div>

//         {/* About Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-16"
//         >
//           <div>
//             <h3 className="text-3xl font-bold text-white mb-4">
//               My Expertise
//             </h3>
//             <p className="text-gray-300 text-lg">
//               By leveraging Layer 2 solutions like the Base ecosystem, I help clients achieve cost-efficient operations while navigating the intricate world of decentralized finance. My strategies prioritize early adoption opportunities, liquidity growth, and governance-driven decision-making using tools like Aerodrome and Balancer.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-3xl font-bold text-white mb-4">
//               Risk Management
//             </h3>
//             <p className="text-gray-300 text-lg">
//               Risk management is at the core of everything I do. I craft actionable responses to tackle smart contract risks, volatility, and regulatory hurdles, ensuring compliance and sustainability. My automated AI systems empower clients to track real-time data, optimize portfolios, and implement rebalancing strategies with precision.
//             </p>
//           </div>
//         </motion.div>

//         {/* Key Highlights */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-center mt-16"
//         >
//           <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
//             Why Choose Me?
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
//             >
//               <Users className="w-16 h-16 text-gold-400 mb-6" />
//               <h4 className="text-2xl font-bold text-white mb-3">Expertise</h4>
//               <p className="text-gray-300 text-center">
//                 I have extensive experience in providing high-quality blockchain solutions.
//               </p>
//             </motion.div>

//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
//             >
//               <Target className="w-16 h-16 text-gold-400 mb-6" />
//               <h4 className="text-2xl font-bold text-white mb-3">Focused Approach</h4>
//               <p className="text-gray-300 text-center">
//                 I focus on delivering blockchain solutions that meet your specific needs and drive results.
//               </p>
//             </motion.div>

//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
//             >
//               <Globe className="w-16 h-16 text-gold-400 mb-6" />
//               <h4 className="text-2xl font-bold text-white mb-3">Global Reach</h4>
//               <p className="text-gray-300 text-center">
//                 My blockchain solutions are scalable and designed to make an impact on a global scale.
//               </p>
//             </motion.div>

//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
//             >
//               <Laptop className="w-16 h-16 text-gold-400 mb-6" />
//               <h4 className="text-2xl font-bold text-white mb-3">Cutting-edge Tech</h4>
//               <p className="text-gray-300 text-center">
//                 I use the latest blockchain technologies and development frameworks to ensure the best results.
//               </p>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Contact CTA */}
//         <div className="text-center mt-16">
//           <motion.button
//             className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg text-dark-900 font-bold text-lg shadow-lg hover:shadow-gold-400/20 transition-all duration-300 transform hover:scale-105"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Contact Me
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-900 via-primary-700/10 to-dark-900">
      <div className="container mx-auto px-4">
        {/* About Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I’m a Web3.0 Analyst with a sharp focus on crafting high-impact strategies for institutional finance. With hands-on experience in deploying $5 million on the Base ecosystem, I specialize in building diversified portfolios that blend high-growth potential, stable returns, and long-term appreciation.
          </p>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              My Expertise
            </h3>
            <p className="text-gray-300 text-lg">
              By leveraging Layer 2 solutions like the Base ecosystem, I help clients achieve cost-efficient operations while navigating the intricate world of decentralized finance. My strategies prioritize early adoption opportunities, liquidity growth, and governance-driven decision-making using tools like Aerodrome and Balancer.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Risk Management
            </h3>
            <p className="text-gray-300 text-lg">
              Risk management is at the core of everything I do. I craft actionable responses to tackle smart contract risks, volatility, and regulatory hurdles, ensuring compliance and sustainability. My automated AI systems empower clients to track real-time data, optimize portfolios, and implement rebalancing strategies with precision.
            </p>
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
            Why Work With Me?
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            With deep expertise in Web3.0 analysis, I’ve successfully managed multimillion-dollar portfolios and built innovative systems that redefine how institutions approach decentralized finance. My consultancy empowers you to make informed decisions, navigate challenges, and achieve sustainable success.
          </p>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-16">
            Let’s collaborate to turn your DeFi vision into reality—schedule a call today and take the first step toward a smarter, more profitable future.
          </p>
        </motion.div>

        
      </div>
    </section>
  );
};

export default About;