import React from 'react';
import { motion } from 'framer-motion';
import type { Category, Service } from '../../types';
import ServiceGrid from './ServiceGrid';

interface CategorySectionProps {
  category: Category;
  services: Service[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, services }) => {
  const categoryServices = services.filter(service => service.categoryId === category.id);

  if (categoryServices.length === 0) return null;

  return (
    <motion.section 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <h2 className="font-playfair text-3xl text-primary-gold dark:text-primary-dark-gold mb-2">
          {category.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 font-lato">
          {category.description}
        </p>
      </div>
      <ServiceGrid services={categoryServices} />
    </motion.section>
  );
};

export default CategorySection;