import React from 'react';
import { motion } from 'framer-motion';
import backgroundVideo from '../img/background-nosotros.webm'; // Asegúrate de tener configurado el soporte para importar videos

const AboutUs = () => {
  return (
    <div className="relative pt-20 min-h-screen bg-primary-beige bg-opacity-10">

      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 backdrop-blur-md"
        >
          <h1 className="font-playfair text-4xl text-primary-gold mb-8">Sobre Nosotros</h1>
          <div className="prose max-w-none">
            <p className="font-opensans text-lg mb-6">
              En nuestra estética creemos en un enfoque holístico de la belleza y el bienestar.
              Nuestra misión es proporcionar tratamientos personalizados que no solo mejoren
              tu apariencia, sino que también contribuyan a tu bienestar general.
            </p>
            <p className="font-opensans text-lg mb-6">
              Con más de 6 años de experiencia en el sector de la estética,
              nos enorgullece ofrecer servicios de la más alta calidad utilizando
              productos naturales y técnicas innovadoras.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Overlay para oscurecer el fondo */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-5" />
    </div>
  );
};

export default AboutUs;
