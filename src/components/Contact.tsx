// // // // // import React from 'react';
// // // // // import { motion } from 'framer-motion';
// // // // // import { Mail, Linkedin, Send, MessageSquare } from 'lucide-react';

// // // // // const Contact = () => {
// // // // //   const handleSubmit = (e: React.FormEvent) => {
// // // // //     e.preventDefault();
// // // // //     // Handle form submission
// // // // //   };

// // // // //   return (
// // // // //     <section className="py-20 bg-gradient-to-b from-dark-900 via-primary-700/10 to-dark-900">
// // // // //       <div className="container mx-auto px-4">
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, y: 20 }}
// // // // //           whileInView={{ opacity: 1, y: 0 }}
// // // // //           className="text-center mb-16"
// // // // //         >
// // // // //           <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
// // // // //             Get in Touch
// // // // //           </h2>
// // // // //           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
// // // // //             Let's discuss how we can transform your Web3 vision into reality
// // // // //           </p>
// // // // //         </motion.div>

// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// // // // //           {/* Contact Form */}
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, x: -20 }}
// // // // //             whileInView={{ opacity: 1, x: 0 }}
// // // // //             className="bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl backdrop-blur-sm border border-primary-600/20"
// // // // //           >
// // // // //             <form onSubmit={handleSubmit} className="space-y-6">
// // // // //               <div>
// // // // //                 <label htmlFor="name" className="block text-white mb-2 font-medium">
// // // // //                   Name
// // // // //                 </label>
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   id="name"
// // // // //                   className="w-full px-4 py-3 bg-dark-900/50 text-white rounded-lg border border-primary-600/20 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all duration-300"
// // // // //                   required
// // // // //                 />
// // // // //               </div>
// // // // //               <div>
// // // // //                 <label htmlFor="email" className="block text-white mb-2 font-medium">
// // // // //                   Email
// // // // //                 </label>
// // // // //                 <input
// // // // //                   type="email"
// // // // //                   id="email"
// // // // //                   className="w-full px-4 py-3 bg-dark-900/50 text-white rounded-lg border border-primary-600/20 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all duration-300"
// // // // //                   required
// // // // //                 />
// // // // //               </div>
// // // // //               <div>
// // // // //                 <label htmlFor="message" className="block text-white mb-2 font-medium">
// // // // //                   Message
// // // // //                 </label>
// // // // //                 <textarea
// // // // //                   id="message"
// // // // //                   rows={4}
// // // // //                   className="w-full px-4 py-3 bg-dark-900/50 text-white rounded-lg border border-primary-600/20 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all duration-300"
// // // // //                   required
// // // // //                 ></textarea>
// // // // //               </div>
// // // // //               <motion.button
// // // // //                 whileHover={{ scale: 1.02 }}
// // // // //                 whileTap={{ scale: 0.98 }}
// // // // //                 className="w-full px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-dark-900 font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold-400/20 transition-all duration-300"
// // // // //                 type="submit"
// // // // //               >
// // // // //                 <Send className="w-5 h-5" />
// // // // //                 Send Message
// // // // //               </motion.button>
// // // // //             </form>
// // // // //           </motion.div>

// // // // //           {/* Contact Information */}
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, x: 20 }}
// // // // //             whileInView={{ opacity: 1, x: 0 }}
// // // // //             className="space-y-8"
// // // // //           >
// // // // //             <div className="bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl backdrop-blur-sm border border-primary-600/20">
// // // // //               <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
// // // // //                 <MessageSquare className="w-6 h-6 text-gold-400" />
// // // // //                 Let's Connect
// // // // //               </h3>
// // // // //               <div className="space-y-6">
// // // // //                 <a
// // // // //                   href="mailto:contact@eliteweb3.com"
// // // // //                   className="flex items-center gap-4 text-gray-300 hover:text-gold-400 transition-colors group"
// // // // //                 >
// // // // //                   <div className="w-12 h-12 bg-dark-900/50 rounded-lg flex items-center justify-center group-hover:bg-gold-400/10 transition-colors">
// // // // //                     <Mail className="w-6 h-6" />
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <p className="font-medium">Email Us</p>
// // // // //                     <p className="text-sm">web3@gmail.com</p>
// // // // //                   </div>
// // // // //                 </a>
// // // // //                 <a
// // // // //                   href="https://linkedin.com"
// // // // //                   target="_blank"
// // // // //                   rel="noopener noreferrer"
// // // // //                   className="flex items-center gap-4 text-gray-300 hover:text-gold-400 transition-colors group"
// // // // //                 >
// // // // //                   <div className="w-12 h-12 bg-dark-900/50 rounded-lg flex items-center justify-center group-hover:bg-gold-400/10 transition-colors">
// // // // //                     <Linkedin className="w-6 h-6" />
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <p className="font-medium">LinkedIn</p>
// // // // //                     <p className="text-sm">Connect with us</p>
// // // // //                   </div>
// // // // //                 </a>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl backdrop-blur-sm border border-primary-600/20">
// // // // //               <h3 className="text-2xl font-bold text-white mb-4">Office Hours</h3>
// // // // //               <p className="text-gray-300 leading-relaxed">
// // // // //                 Monday - Friday
// // // // //                 <br />
// // // // //                 9:00 AM - 6:00 PM (UTC)
// // // // //                 <br />
// // // // //                 <span className="text-gold-400">
// // // // //                   Available 24/7 for urgent consultations
// // // // //                 </span>
// // // // //               </p>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Contact;

// // // // import React from 'react';
// // // // import { motion } from 'framer-motion';

// // // // const Contact = () => {
// // // //   const handleSubmit = (e: React.FormEvent) => {
// // // //     e.preventDefault();
// // // //     // Handle form submission
// // // //   };

// // // //   return (
// // // //     <section className="py-20 bg-gradient-to-b from-dark-900 via-primary-700/10 to-dark-900">
// // // //       <div className="container mx-auto px-4">
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           className="text-center mb-16"
// // // //         >
// // // //           <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
// // // //             Book a Call
// // // //           </h2>
// // // //           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
// // // //             Take the first step toward unlocking the full potential of decentralized finance! Whether you’re seeking innovative strategies, automated solutions, or expert insights, I’m here to guide you.
// // // //           </p>
// // // //         </motion.div>

// // // //         <div className="text-gray-300 text-lg max-w-2xl mx-auto mb-16">
// // // //           <h3 className="text-3xl font-bold text-white mb-4">Why Schedule a Call?</h3>
// // // //           <ul className="list-disc list-inside mb-8">
// // // //             <li>Tailored Advice: Get personalized recommendations that align with your financial goals.</li>
// // // //             <li>Expert Insights: Leverage my experience in managing multimillion-dollar DeFi portfolios.</li>
// // // //             <li>Clear Action Plans: Walk away with actionable strategies to navigate the complexities of DeFi.</li>
// // // //             <li>Cutting-Edge Solutions: Discover how automated AI systems can optimize your investments in real time.</li>
// // // //           </ul>

// // // //           <h3 className="text-3xl font-bold text-white mb-4">Let’s Talk If You’re:</h3>
// // // //           <ul className="list-disc list-inside mb-8">
// // // //             <li>A hedge fund, family office, or corporate treasury looking to explore DeFi.</li>
// // // //             <li>Interested in risk management, governance strategies, or diversified growth plans.</li>
// // // //             <li>Ready to scale your operations with Layer 2 solutions for cost-efficient success.</li>
// // // //           </ul>

// // // //           <h3 className="text-3xl font-bold text-white mb-4">How It Works:</h3>
// // // //           <ol className="list-decimal list-inside">
// // // //             <li>Choose a Time: Select a slot that works best for you.</li>
// // // //             <li>Share Your Goals: Briefly tell me what you’d like to achieve.</li>
// // // //             <li>Let’s Strategize: We’ll dive into your needs and explore solutions that deliver results.</li>
// // // //           </ol>
// // // //         </div>

// // // //         {/* Contact CTA */}
// // // //         <div className="text-center mt-16">
// // // //           <motion.button
// // // //             className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg text-dark-900 font-bold text-lg shadow-lg hover:shadow-gold-400/20 transition-all duration-300 transform hover:scale-105"
// // // //             whileHover={{ scale: 1.05 }}
// // // //             whileTap={{ scale: 0.95 }}
// // // //           >
// // // //             Schedule a Call
// // // //           </motion.button>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Contact;
// // // import React from 'react';
// // // import { motion } from 'framer-motion';
// // // import { Mail, Linkedin } from 'lucide-react';

// // // const Contact = () => {
// // //   const handleSubmit = (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     // Handle form submission
// // //   };

// // //   return (
// // //     <section className="py-20 bg-gradient-to-b from-dark-900 via-primary-700/10 to-dark-900">
// // //       <div className="container mx-auto px-4">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           className="text-center mb-16"
// // //         >
// // //           <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
// // //             Book a Call
// // //           </h2>
// // //           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
// // //             Take the first step toward unlocking the full potential of decentralized finance! Whether you’re seeking innovative strategies, automated solutions, or expert insights, I’m here to guide you.
// // //           </p>
// // //         </motion.div>

// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
// // //           <motion.div
// // //             whileHover={{ scale: 1.05 }}
// // //             className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
// // //           >
// // //             <h3 className="text-3xl font-bold text-white mb-4">Why Schedule a Call?</h3>
// // //             <ul className="list-disc list-inside text-gray-300 text-lg">
// // //               <li>Tailored Advice: Get personalized recommendations that align with your financial goals.</li>
// // //               <li>Expert Insights: Leverage my experience in managing multimillion-dollar DeFi portfolios.</li>
// // //               <li>Clear Action Plans: Walk away with actionable strategies to navigate the complexities of DeFi.</li>
// // //               <li>Cutting-Edge Solutions: Discover how automated AI systems can optimize your investments in real time.</li>
// // //             </ul>
// // //           </motion.div>

// // //           <motion.div
// // //             whileHover={{ scale: 1.05 }}
// // //             className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
// // //           >
// // //             <h3 className="text-3xl font-bold text-white mb-4">Let’s Talk If You’re:</h3>
// // //             <ul className="list-disc list-inside text-gray-300 text-lg">
// // //               <li>A hedge fund, family office, or corporate treasury looking to explore DeFi.</li>
// // //               <li>Interested in risk management, governance strategies, or diversified growth plans.</li>
// // //               <li>Ready to scale your operations with Layer 2 solutions for cost-efficient success.</li>
// // //             </ul>
// // //           </motion.div>

// // //           <motion.div
// // //             whileHover={{ scale: 1.05 }}
// // //             className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
// // //           >
// // //             <h3 className="text-3xl font-bold text-white mb-4">How It Works:</h3>
// // //             <ol className="list-decimal list-inside text-gray-300 text-lg">
// // //               <li>Choose a Time: Select a slot that works best for you.</li>
// // //               <li>Share Your Goals: Briefly tell me what you’d like to achieve.</li>
// // //               <li>Let’s Strategize: We’ll dive into your needs and explore solutions that deliver results.</li>
// // //             </ol>
// // //           </motion.div>

// // //           <motion.div
// // //             whileHover={{ scale: 1.05 }}
// // //             className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
// // //           >
// // //             <h3 className="text-3xl font-bold text-white mb-4">Contact Information</h3>
// // //             <div className="flex flex-col items-center text-gray-300 text-lg">
// // //               <div className="flex items-center mb-4">
// // //                 <Mail className="w-6 h-6 text-gold-400 mr-2" />
// // //                 <a href="mailto:your-email@example.com" className="hover:underline">your-email@example.com</a>
// // //               </div>
// // //               <div className="flex items-center">
// // //                 <Linkedin className="w-6 h-6 text-gold-400 mr-2" />
// // //                 <a href="https://www.linkedin.com/in/your-profile" className="hover:underline">LinkedIn Profile</a>
// // //               </div>
// // //             </div>
// // //           </motion.div>
// // //         </div>

// // //         {/* Contact CTA */}
// // //         <div className="text-center mt-16">
// // //           <motion.button
// // //             className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg text-dark-900 font-bold text-lg shadow-lg hover:shadow-gold-400/20 transition-all duration-300 transform hover:scale-105"
// // //             whileHover={{ scale: 1.05 }}
// // //             whileTap={{ scale: 0.95 }}
// // //           >
// // //             Schedule a Call
// // //           </motion.button>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Contact;
// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Mail, Linkedin } from 'lucide-react';

// // const Contact = () => {
// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     // Handle form submission
// //   };

// //   return (
// //     <section className="py-20 bg-gradient-to-b from-dark-900 via-primary-700/10 to-dark-900">
// //       <div className="container mx-auto px-4">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           className="text-center mb-16"
// //         >
// //           <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
// //             Book a Call
// //           </h2>
// //           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
// //             Take the first step toward unlocking the full potential of decentralized finance! Whether you’re seeking innovative strategies, automated solutions, or expert insights, I’m here to guide you.
// //           </p>
// //         </motion.div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
// //           <motion.div
// //             whileHover={{ scale: 1.05 }}
// //             className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
// //           >
// //             <h3 className="text-3xl font-bold text-white mb-4">Let’s Talk If You’re:</h3>
// //             <ul className="list-disc list-inside text-gray-300 text-lg">
// //               <li>A hedge fund, family office, or corporate treasury looking to explore DeFi.</li>
// //               <li>Interested in risk management, governance strategies, or diversified growth plans.</li>
// //               <li>Ready to scale your operations with Layer 2 solutions for cost-efficient success.</li>
// //             </ul>
// //           </motion.div>

// //           <motion.div
// //             whileHover={{ scale: 1.05 }}
// //             className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
// //           >
// //             <h3 className="text-3xl font-bold text-white mb-4">How It Works:</h3>
// //             <ol className="list-decimal list-inside text-gray-300 text-lg">
// //               <li>Choose a Time: Select a slot that works best for you.</li>
// //               <li>Share Your Goals: Briefly tell me what you’d like to achieve.</li>
// //               <li>Let’s Strategize: We’ll dive into your needs and explore solutions that deliver results.</li>
// //             </ol>
// //           </motion.div>
// //         </div>

// //         <motion.div
// //           whileHover={{ scale: 1.05 }}
// //           className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300 mb-16"
// //         >
// //           <h3 className="text-3xl font-bold text-white mb-4">Why Schedule a Call?</h3>
// //           <ul className="list-disc list-inside text-gray-300 text-lg">
// //             <li>Tailored Advice: Get personalized recommendations that align with your financial goals.</li>
// //             <li>Expert Insights: Leverage my experience in managing multimillion-dollar DeFi portfolios.</li>
// //             <li>Clear Action Plans: Walk away with actionable strategies to navigate the complexities of DeFi.</li>
// //             <li>Cutting-Edge Solutions: Discover how automated AI systems can optimize your investments in real time.</li>
// //           </ul>
// //         </motion.div>

// //         <motion.div
// //           whileHover={{ scale: 1.05 }}
// //           className="flex flex-col md:flex-row items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
// //         >
// //           <div className="flex flex-col items-start text-gray-300 text-lg mb-8 md:mb-0 md:mr-8">
// //             <div className="flex items-center mb-4">
// //               <Mail className="w-6 h-6 text-gold-400 mr-2" />
// //               <a href="mailto:your-email@example.com" className="hover:underline">your-email@example.com</a>
// //             </div>
// //             <div className="flex items-center">
// //               <Linkedin className="w-6 h-6 text-gold-400 mr-2" />
// //               <a href="https://www.linkedin.com/in/your-profile" className="hover:underline">LinkedIn Profile</a>
// //             </div>
// //           </div>
// //           <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-1/2">
// //             <input
// //               type="text"
// //               placeholder="Name"
// //               className="mb-4 px-4 py-2 bg-dark-900 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
// //             />
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               className="mb-4 px-4 py-2 bg-dark-900 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
// //             />
// //             <textarea
// //               placeholder="Message"
// //               className="mb-4 px-4 py-2 bg-dark-900 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
// //               rows={4}
// //             />
// //             <motion.button
// //               type="submit"
// //               className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg text-dark-900 font-bold text-lg shadow-lg hover:shadow-gold-400/20 transition-all duration-300 transform hover:scale-105"
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               Book a Call
// //             </motion.button>
// //           </form>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Linkedin } from 'lucide-react';

// const Contact = () => {
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//   };

//   return (
//     <section className="py-20 bg-gradient-to-b from-dark-900 via-primary-700/10 to-dark-900">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
//             Book a Call
//           </h2>
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//             Take the first step toward unlocking the full potential of decentralized finance! Whether you’re seeking innovative strategies, automated solutions, or expert insights, I’m here to guide you.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
//           >
//             <h3 className="text-3xl font-bold text-white mb-4">Let’s Talk If You’re:</h3>
//             <ul className="list-disc list-inside text-gray-300 text-lg">
//               <li>A hedge fund, family office, or corporate treasury looking to explore DeFi.</li>
//               <li>Interested in risk management, governance strategies, or diversified growth plans.</li>
//               <li>Ready to scale your operations with Layer 2 solutions for cost-efficient success.</li>
//             </ul>
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
//           >
//             <h3 className="text-3xl font-bold text-white mb-4">How It Works:</h3>
//             <ol className="list-decimal list-inside text-gray-300 text-lg">
//               <li>Choose a Time: Select a slot that works best for you.</li>
//               <li>Share Your Goals: Briefly tell me what you’d like to achieve.</li>
//               <li>Let’s Strategize: We’ll dive into your needs and explore solutions that deliver results.</li>
//             </ol>
//           </motion.div>
//         </div>

//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300 mb-16 mx-auto"
//           style={{ maxWidth: '600px' }}
//         >
//           <h3 className="text-3xl font-bold text-white mb-4">Why Schedule a Call?</h3>
//           <ul className="list-disc list-inside text-gray-300 text-lg">
//             <li>Tailored Advice: Get personalized recommendations that align with your financial goals.</li>
//             <li>Expert Insights: Leverage my experience in managing multimillion-dollar DeFi portfolios.</li>
//             <li>Clear Action Plans: Walk away with actionable strategies to navigate the complexities of DeFi.</li>
//             <li>Cutting-Edge Solutions: Discover how automated AI systems can optimize your investments in real time.</li>
//           </ul>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
//           >
//             <form onSubmit={handleSubmit} className="flex flex-col w-full">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="mb-4 px-4 py-2 bg-dark-900 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="mb-4 px-4 py-2 bg-dark-900 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
//               />
//               <textarea
//                 placeholder="Message"
//                 className="mb-4 px-4 py-2 bg-dark-900 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
//                 rows={4}
//               />
//               <motion.button
//                 type="submit"
//                 className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg text-dark-900 font-bold text-lg shadow-lg hover:shadow-gold-400/20 transition-all duration-300 transform hover:scale-105"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Book a Call
//               </motion.button>
//             </form>
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
//           >
//             <h3 className="text-3xl font-bold text-white mb-4">Contact Information</h3>
//             <div className="flex flex-col items-start text-gray-300 text-lg">
//               <div className="flex items-center mb-4">
//                 <Mail className="w-6 h-6 text-gold-400 mr-2" />
//                 <a href="mailto:your-email@example.com" className="hover:underline">your-email@example.com</a>
//               </div>
//               <div className="flex items-center">
//                 <Linkedin className="w-6 h-6 text-gold-400 mr-2" />
//                 <a href="https://www.linkedin.com/in/your-profile" className="hover:underline">LinkedIn Profile</a>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Calendar } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendlyPopup = () => {
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/afnan04sum/30min?hide_gdpr_banner=1' });
    return false;
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
            Book a Call
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Take the first step toward unlocking the full potential of decentralized finance! Whether you’re seeking innovative strategies, automated solutions, or expert insights, I’m here to guide you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Let’s Talk If You’re:</h3>
            <ul className="list-disc list-inside text-gray-300 text-lg">
              <li>A hedge fund, family office, or corporate treasury looking to explore DeFi.</li>
              <li>Interested in risk management, governance strategies, or diversified growth plans.</li>
              <li>Ready to scale your operations with Layer 2 solutions for cost-efficient success.</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-white mb-4">How It Works:</h3>
            <ol className="list-decimal list-inside text-gray-300 text-lg">
              <li>Choose a Time: Select a slot that works best for you.</li>
              <li>Share Your Goals: Briefly tell me what you’d like to achieve.</li>
              <li>Let’s Strategize: We’ll dive into your needs and explore solutions that deliver results.</li>
            </ol>
          </motion.div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300 mb-16 mx-auto"
          style={{ maxWidth: '600px' }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">Why Schedule a Call?</h3>
          <ul className="list-disc list-inside text-gray-300 text-lg">
            <li>Tailored Advice: Get personalized recommendations that align with your financial goals.</li>
            <li>Expert Insights: Leverage my experience in managing multimillion-dollar DeFi portfolios.</li>
            <li>Clear Action Plans: Walk away with actionable strategies to navigate the complexities of DeFi.</li>
            <li>Cutting-Edge Solutions: Discover how automated AI systems can optimize your investments in real time.</li>
          </ul>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
          >
            <form onSubmit={handleSubmit} className="flex flex-col w-full">
              <input
                type="text"
                placeholder="Name"
                className="mb-4 px-4 py-2 bg-dark-900 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="mb-4 px-4 py-2 bg-dark-900 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <textarea
                placeholder="Message"
                className="mb-4 px-4 py-2 bg-dark-900 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
                rows={4}
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg text-dark-900 font-bold text-lg shadow-lg hover:shadow-gold-400/20 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Leave a Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl shadow-lg transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Contact Information</h3>
            <div className="flex flex-col items-start text-gray-300 text-lg">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-gold-400 mr-2" />
                <a href="mailto:your-email@example.com" className="hover:underline">your-email@example.com</a>
              </div>
              <div className="flex items-center mb-4">
                <Linkedin className="w-6 h-6 text-gold-400 mr-2" />
                <a href="https://www.linkedin.com/in/your-profile" className="hover:underline">LinkedIn Profile</a>
              </div>
              <motion.button
                onClick={openCalendlyPopup}
                className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg text-dark-900 font-bold text-lg shadow-lg hover:shadow-gold-400/20 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a meet with me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="py-8 border-t border-primary-600/20 text-center">
           <p className="text-gray-300">
             &copy; {new Date().getFullYear()} Elite Web3. All rights reserved.
           </p>
         </div>
    </section>
  );
};

export default Contact;