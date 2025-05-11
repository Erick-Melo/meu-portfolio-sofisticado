import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section 
      id="inicio"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6 pt-20 md:pt-24"
    >
      <motion.h1 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 120 }}
        className="text-5xl md:text-7xl font-bold mb-4"
      >
        Olá, eu sou o Érick José Coelho de Melo
      </motion.h1>
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl md:text-2xl mb-8 max-w-2xl"
      >
        Desenvolvedor Front-end apaixonado por criar soluções web modernas e interativas. Bem-vindo ao meu portfólio!
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a
          href="https://www.linkedin.com/in/erickjosecmelo/"
          target="_blank"
          className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
        >
          Entre em Contato
        </a>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
