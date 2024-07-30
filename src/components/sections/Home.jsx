import React from 'react';
import HeroSection from './HeroSection';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
