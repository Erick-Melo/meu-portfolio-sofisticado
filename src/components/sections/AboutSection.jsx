import React from 'react';
import { motion } from 'framer-motion';
import theMan from '../../assets/images/the-man.jpg'

const AboutSection = () => {
  return (
    <motion.section 
      id="sobre"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-16 md:py-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Sobre Mim
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <img 
              src={theMan}
              alt="Foto de [Seu Nome]" 
              className="rounded-full shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-2/3 text-center md:text-left"
          >
            <p className="text-lg mb-4">
              Sou um desenvolvedor Front-end com 3 anos de experiência, focado em construir interfaces de usuário intuitivas e aplicações web robustas. Minha paixão é transformar ideias complexas em realidade digital, utilizando as tecnologias mais recentes e eficazes.
            </p>
            <p className="text-lg mb-4">
              Tenho um forte conhecimento em React, Vue.js, Node.js, Python e Java, e estou sempre buscando aprender novas ferramentas e frameworks para aprimorar minhas habilidades. Acredito na importância de um código limpo, bem documentado e testável.
            </p>
            <p className="text-lg">
              Fora do trabalho, gosto de correr, treinar e viajar para novos lugares, o que me ajuda a manter a criatividade e a perspectiva.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
