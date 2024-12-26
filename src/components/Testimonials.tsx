import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-900 via-primary-700/10 to-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
            Client Testimonials
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Trusted by industry leaders in the Web3 space
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-dark-800 to-primary-700/20 p-8 rounded-xl backdrop-blur-sm border border-primary-600/20"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gold-400 opacity-50" />
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold-400"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 opacity-20"></div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                  <p className="text-gold-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;