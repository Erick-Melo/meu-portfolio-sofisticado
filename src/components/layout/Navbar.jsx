import React from 'react';
import { Link } from 'react-router-dom'; // Usando react-router-dom para navegação
import { motion } from 'framer-motion';
import ThemeSwitcher from '../common/ThemeSwitcher';

const Navbar = () => {
  const navItems = [
    // { name: 'Início', path: '/' },
    // { name: 'Sobre Mim', path: '/sobre' },
    // { name: 'Projetos', path: '/projetos' },
    // { name: 'Habilidades', path: '/habilidades' },
    // { name: 'Contato', path: '/contato' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50 top-0 left-0"
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
          Erick Melo
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 rounded-md text-sm font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          {/* <ThemeSwitcher /> */}
        </div>
        <div className="md:hidden flex items-center">
          {/* <ThemeSwitcher /> */}
          {/* Botão para menu mobile pode ser adicionado aqui */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
