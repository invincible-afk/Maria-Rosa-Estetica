import React from 'react';
import { motion } from 'framer-motion';
import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-primary-dark-lavender rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="font-playfair text-xl mb-2 text-gray-800 dark:text-gray-200">{service.title}</h3>
        <p className="font-opensans text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-lato text-primary-gold dark:text-primary-dark-gold text-lg">{service.price}</span>
          <span className="font-lato text-secondary-gray dark:text-secondary-dark-gray">{service.duration}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;