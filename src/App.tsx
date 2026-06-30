import React from 'react';
import Navigation from './components/ui/Navigation';
import Hero from './components/ui/HeroSection';
import Skills from './components/ui/Skills';
import Projects from './components/ui/Projects';
import About from './components/ui/About';
import Contact from './components/ui/Contact';
import Footer from './components/ui/Footer';
import BackToTop from './components/ui/BackToTop';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      
      <main className="overflow-x-hidden">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default AppLayout;