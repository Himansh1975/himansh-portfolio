import React from 'react';
import HeroSection from './HeroSection';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function Home({ isDarkMode }) {
  return (
    <div>
      <HeroSection isDarkMode={isDarkMode} />
      <div className='bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-black '>
        <About isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default Home;