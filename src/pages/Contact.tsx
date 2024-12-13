import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20 min-h-screen bg-primary-beige">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="font-playfair text-4xl text-primary-gold mb-8">Contacto</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block font-lato text-gray-700 mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold"
                  />
                </div>
                <div>
                  <label className="block font-lato text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold"
                  />
                </div>
                <div>
                  <label className="block font-lato text-gray-700 mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary-gold text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary-gold" />
                <span className="font-lato">Calle Los Almendros 123, Rivadavia, San Juan</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-primary-gold" />
                <span className="font-lato">+54 264 527 4235</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-primary-gold" />
                <span className="font-lato">estetica@mariarosa.com</span>
              </div>
              <div>
                <a
                  href="https://wa.me/542645274235" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
                >
                  Reserva tu cita
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
