import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCode, FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

function Header({ isDarkMode, toggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-gray-800 dark:text-white">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <FiCode className="w-8 h-8 text-blue-500" />
          </motion.div>
          <motion.span 
            className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.span>
        </Link>

        <ul className="hidden md:flex space-x-8">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <NavItem key={item} label={item} onClick={() => scrollToSection(item.toLowerCase())} />
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <motion.button
            className="text-gray-800 dark:text-white focus:outline-none"
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
          </motion.button>
          <motion.button
            className="md:hidden text-gray-800 dark:text-white focus:outline-none"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </nav>

      {isMenuOpen && (
        <MobileMenu
          isOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          scrollToSection={scrollToSection}
        />
      )}
    </motion.header>
  );
}

const NavItem = ({ label, onClick }) => {
  const location = useLocation();
  const isActive = location.hash === `#${label.toLowerCase()}` || (location.pathname === '/' && label === 'Home');

  return (
    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <button
        onClick={onClick}
        className={`text-lg transition-all duration-300 ${
          isActive 
            ? 'font-bold text-blue-500 dark:text-blue-400' 
            : 'text-gray-800 dark:text-white opacity-75 hover:opacity-100'
        }`}
      >
        {label}
      </button>
    </motion.li>
  );
};

const MobileMenu = ({ isOpen, toggleMenu, scrollToSection }) => (
  <motion.div
    className="md:hidden fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
      <motion.div
        key={item}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 * ['Home', 'About', 'Skills', 'Projects', 'Contact'].indexOf(item) }}
      >
        <NavItem
          label={item}
          onClick={() => {
            scrollToSection(item.toLowerCase());
            toggleMenu();
          }}
        />
      </motion.div>
    ))}
  </motion.div>
);

export default Header;