import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';

const Booking = () => {
  return (
    <div className="pt-20 min-h-screen bg-primary-beige">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="font-playfair text-4xl text-primary-gold mb-8">Reserva tu Cita</h1>
          
          <form className="space-y-6">
            <div>
              <label className="block font-lato text-gray-700 mb-2">Servicio</label>
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold">
                <option value="">Selecciona un servicio</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title} - {service.duration} - {service.price}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block font-lato text-gray-700 mb-2">Fecha</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold"
              />
            </div>
            
            <div>
              <label className="block font-lato text-gray-700 mb-2">Hora</label>
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold">
                <option value="">Selecciona una hora</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
              </select>
            </div>
            
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
              <label className="block font-lato text-gray-700 mb-2">Teléfono</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold"
              />
            </div>
            
            <button
              type="submit"
              className="bg-primary-gold text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Confirmar Reserva
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Booking;