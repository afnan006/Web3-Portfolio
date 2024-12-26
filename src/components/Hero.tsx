import React from 'react';
import { motion } from 'framer-motion';
import { Bitcoin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-dark-900 via-primary-700 to-dark-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark-900/80 to-dark-900" />
        
        {/* Animated Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 bg-gold-400 rounded-full"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-display font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-transparent bg-clip-text">
            Unleashing Blockchain Potential
          </span>
          <br />
          <span className="text-white">for Elite Web3 Visionaries</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering the future through innovative blockchain solutions, advanced DeFi strategies, and cutting-edge Web3 development.
        </motion.p>

        {/* Floating Icons */}
        <motion.div 
          className="absolute left-1/4 -top-20"
          animate={{ 
            y: [0, -30, 0],
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Bitcoin className="w-16 h-16 text-gold-400 opacity-80" />
        </motion.div>
        <motion.div 
          className="absolute right-1/4 -bottom-20"
          animate={{ 
            y: [0, 30, 0],
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Bitcoin className="w-16 h-16 text-primary-400 opacity-80" />
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 mt-12">
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg text-dark-900 font-bold text-lg shadow-lg hover:shadow-gold-400/20 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Consultation
          </motion.button>
          <motion.button
            className="px-8 py-4 bg-transparent text-gold-400 rounded-lg font-bold text-lg border-2 border-gold-400 hover:bg-gold-400 hover:text-dark-900 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;