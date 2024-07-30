import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-white">
          <FiCode className="w-8 h-8 text-blue-500" />
          <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Portfolio
          </span>
        </Link>

        <ul className="hidden md:flex space-x-8">
          <NavItem to="/" label="Home" />
          <NavItem href="#about" label="About" />
          <NavItem href="#skills" label="Skills" />
          <NavItem href="#projects" label="Projects" />
          <NavItem href="#contact" label="Contact" />
        </ul>

        <motion.button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const NavItem = ({ to, href, label }) => {
  const Component = to ? Link : 'a';
  const props = to ? { to } : { href };

  return (
    <li>
      <Component
        {...props}
        className="text-white opacity-75 hover:opacity-100 transition-opacity duration-300"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {label}
        </motion.div>
      </Component>
    </li>
  );
};

const MobileMenu = ({ isOpen, toggleMenu }) => (
  <motion.div
    className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-lg z-40"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex flex-col items-center justify-center h-full space-y-8">
      <NavItem to="/" label="Home" onClick={toggleMenu} />
      <NavItem href="#about" label="About" onClick={toggleMenu} />
      <NavItem href="#skills" label="Skills" onClick={toggleMenu} />
      <NavItem href="#projects" label="Projects" onClick={toggleMenu} />
      <NavItem href="#contact" label="Contact" onClick={toggleMenu} />
    </div>
  </motion.div>
);

export default Header;