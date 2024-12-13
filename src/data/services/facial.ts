import type { Service } from '../../types';

export const facialServices: Service[] = [
  {
    id: 'facial-1',
    categoryId: 'facial',
    title: 'Tratamiento Facial Rejuvenecedor',
    description: 'Un tratamiento completo que combina limpieza profunda, exfoliación y máscaras nutritivas para una piel radiante.',
    price: '5.000$',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'facial-2',
    categoryId: 'facial',
    title: 'Hidratación Profunda',
    description: 'Tratamiento intensivo para pieles deshidratadas que restaura el equilibrio y la luminosidad.',
    price: '5.000$',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  }
];