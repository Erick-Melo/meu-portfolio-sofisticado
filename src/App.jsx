import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

// Componente wrapper para as seções principais em uma única página (SPA style)
const MainPageLayout = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
};

function App() {
  const location = useLocation(); // Hook para AnimatePresence

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 ease-in-out">
        <Navbar />
        <main className="flex-grow pt-16"> {/* Padding-top para compensar a Navbar fixa */}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<MainPageLayout />} />
              {/* Adicionar outras rotas se necessário, por exemplo, para páginas de detalhes de projetos */}
              {/* <Route path="/projeto/:id" element={<ProjectDetailsPage />} /> */}
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

// É necessário um componente RouterWrapper para usar useLocation dentro do escopo do Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
