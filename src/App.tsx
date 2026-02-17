import React from 'react';
import Navigation from './components/ui/Navigation';
import Hero from './components/ui/Hero';
import Skills from './components/ui/Skills';
import Projects from './components/ui/Projects';
import About from './components/ui/About';
import Contact from './components/ui/Contact';
import Footer from './components/ui/Footer';
import AnimatedBackground from './components/ui/AnimatedBackground';
import BackToTop from './components/ui/BackToTop';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-black text-white relative">
      <AnimatedBackground />
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default AppLayout;