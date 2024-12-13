import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-primary-beige dark:bg-primary-dark-beige transition-colors duration-200">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/sobre-nosotros" element={<AboutUs />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;