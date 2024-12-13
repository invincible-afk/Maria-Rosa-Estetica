import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: '1',
    title: 'Los beneficios de los tratamientos naturales',
    excerpt: 'Descubre cómo los tratamientos naturales pueden mejorar tu piel y bienestar general...',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=800',
    author: 'María Rosa'
  },
  {
    id: '2',
    title: 'Rutina de cuidado facial para primavera',
    excerpt: 'Prepara tu piel para la primavera con estos consejos especializados...',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
    author: 'Elena García'
  }
];

const Blog = () => {
  return (
    <div className="pt-20 min-h-screen bg-primary-beige">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-playfair text-4xl text-primary-gold mb-12">Blog</h1>
        
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full md:w-48 object-cover"
                    src={post.image}
                    alt={post.title}
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-primary-gold font-semibold">
                    {new Date(post.date).toLocaleDateString('es-ES')}
                  </div>
                  <h2 className="font-playfair text-2xl mt-2">{post.title}</h2>
                  <p className="mt-2 text-gray-600">{post.excerpt}</p>
                  <div className="mt-4">
                    <span className="text-secondary-gray font-lato">Por {post.author}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;