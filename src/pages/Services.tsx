import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { categories } from '../data/categories';
import CategorySection from '../components/services/CategorySection';

const Services = () => {
  return (
    <div className="pt-20 min-h-screen bg-primary-beige dark:bg-primary-dark-beige transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-playfair text-4xl text-primary-gold dark:text-primary-dark-gold text-center mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 font-lato max-w-2xl mx-auto">
            Descubre nuestra gama completa de tratamientos personalizados para realzar tu belleza natural
            y bienestar integral.
          </p>
        </motion.div>
        
        {categories.map(category => (
          <CategorySection 
            key={category.id} 
            category={category} 
            services={services}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;