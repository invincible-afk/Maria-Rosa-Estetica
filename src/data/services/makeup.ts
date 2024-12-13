import type { Service } from '../../types';

export const makeupServices: Service[] = [
  {
    id: 'makeup-1',
    categoryId: 'makeup',
    title: 'Maquillaje Profesional',
    description: 'Servicio personalizado de maquillaje para eventos especiales, bodas, graduaciones y ocasiones importantes.',
    price: 'Desde 5.000$',
    duration: '60-90 min',
    image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'makeup-2',
    categoryId: 'makeup',
    title: 'Maquillaje Social',
    description: 'Maquillaje elegante y duradero para eventos sociales y celebraciones.',
    price: 'Desde 5.000$',
    duration: '45-60 min',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=800'
  }
];