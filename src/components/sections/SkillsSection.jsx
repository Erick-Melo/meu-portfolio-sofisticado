import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Database, Server, Cloud, Settings } from 'lucide-react'; // Ícones de exemplo

// O usuário deve substituir isso por suas habilidades reais e níveis de proficiência
const skillsData = {
  frontend: [
    { name: 'React', level: 90, icon: <Code size={24} className="text-blue-500" /> },
    { name: 'Vue.js', level: 80, icon: <Code size={24} className="text-green-500" /> },
    { name: 'TailwindCSS', level: 95, icon: <Settings size={24} className="text-teal-500" /> },
    { name: 'JavaScript (ES6+)', level: 90, icon: <Code size={24} className="text-yellow-500" /> },
    { name: 'TypeScript', level: 85, icon: <Code size={24} className="text-blue-400" /> },
  ],
  backend: [
    { name: 'Node.js', level: 85, icon: <Server size={24} className="text-green-600" /> },
    { name: 'Python (Flask/Django)', level: 75, icon: <Code size={24} className="text-yellow-600" /> },
    { name: 'Java (Spring Boot)', level: 70, icon: <Code size={24} className="text-red-500" /> },
    // { name: 'Express.js', level: 80, icon: <Server size={24} className="text-gray-500" /> },
  ],
  databases: [
    { name: 'PostgreSQL', level: 80, icon: <Database size={24} className="text-blue-700" /> },
    { name: 'MongoDB', level: 75, icon: <Database size={24} className="text-green-700" /> },
    { name: 'MySQL', level: 70, icon: <Database size={24} className="text-orange-500" /> },
  ],
  toolsAndOthers: [
    { name: 'Git & GitHub', level: 90, icon: <Briefcase size={24} className="text-gray-700" /> },
    { name: 'Docker', level: 70, icon: <Cloud size={24} className="text-blue-600" /> },
    { name: 'REST APIs', level: 85, icon: <Settings size={24} className="text-purple-500" /> },
    { name: 'Jest / React Testing Library', level: 75, icon: <Code size={24} className="text-red-400" /> },
  ],
};

const SkillBar = ({ name, level, icon }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        </div>
        <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
        <motion.div 
          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    { title: 'Frontend Development', skills: skillsData.frontend, icon: <Code size={32} className="text-indigo-500" /> },
    { title: 'Backend Development', skills: skillsData.backend, icon: <Server size={32} className="text-green-500" /> },
    { title: 'Databases', skills: skillsData.databases, icon: <Database size={32} className="text-blue-500" /> },
    { title: 'Tools & Outras Tecnologias', skills: skillsData.toolsAndOthers, icon: <Briefcase size={32} className="text-gray-500" /> },
  ];

  return (
    <motion.section 
      id="habilidades"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
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
          Minhas Habilidades
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3 text-gray-800 dark:text-white">{category.title}</h3>
              </div>
              <div>
                {category.skills.map(skill => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
