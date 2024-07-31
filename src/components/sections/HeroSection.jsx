import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';

function HeroSection({ isDarkMode }) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section 
      className={`relative flex flex-col items-center justify-center min-h-screen overflow-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20' : 'bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100'
      }`}
      aria-labelledby="hero-heading"
    >
      {/* Animated shapes */}
      <ParallaxShape className="top-0 left-0" color={isDarkMode ? "rgba(59, 130, 246, 0.5)" : "rgba(59, 130, 246, 0.2)"} />
      <ParallaxShape className="bottom-0 right-0" color={isDarkMode ? "rgba(99, 102, 241, 0.5)" : "rgba(99, 102, 241, 0.2)"} />
      <ParallaxShape className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" color={isDarkMode ? "rgba(139, 92, 246, 0.5)" : "rgba(139, 92, 246, 0.2)"} />

      {/* Content */}
      <div className={`relative z-20 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'} max-w-4xl px-4`}>
        <motion.h1
          id="hero-heading"
          className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ perspective: 1000 }}
        >
          <motion.span
            initial={{ y: 100, rotateX: -90 }}
            animate={{ y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Welcome to My
          </motion.span>
          <br />
          <motion.span
            initial={{ y: 100, rotateX: -90 }}
            animate={{ y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Digital Playground
          </motion.span>
        </motion.h1>
        <motion.p
          className={`text-2xl md:text-3xl mb-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} max-w-xl mx-auto leading-relaxed`}
          initial={{ opacity: 0, y: -30 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Dive into a world of innovative web solutions and creative designs. Let's build something extraordinary together!
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.a
            href="#projects"
            className={`group ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600' 
                : 'bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500'
            } text-white px-8 py-4 rounded-full flex items-center space-x-2 transition duration-300 shadow-lg transform-gpu relative overflow-hidden`}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Explore My Projects"
          >
            <span className="text-lg font-semibold">Explore My Projects</span>
            <motion.span
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <FiArrowRight />
            </motion.span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-50 transform scale-0 group-hover:scale-150 transition-transform duration-500"></span>
          </motion.a>
          <div className="flex space-x-6">
            <SocialLink href="https://github.com/himansh1975" icon={<FiGithub />} label="GitHub" isDarkMode={isDarkMode} />
            <SocialLink href="https://linkedin.com/in/himansh-negi" icon={<FiLinkedin />} label="LinkedIn" isDarkMode={isDarkMode} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        aria-hidden="true"
      >
        <div className={`w-8 h-12 border-2 ${isDarkMode ? 'border-white' : 'border-gray-800'} rounded-full flex justify-center`}>
          <motion.div
            className={`w-1 h-4 ${isDarkMode ? 'bg-white' : 'bg-gray-800'} rounded-full mt-2`}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
          />
        </div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon, label, isDarkMode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-3xl ${isDarkMode ? 'text-white hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'} transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300`}
      whileHover={{ scale: 1.3, rotate: 10, color: "#1DA1F2" }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}

function ParallaxShape({ className, color }) {
  return (
    <motion.div
      className={`absolute w-80 h-80 rounded-full mix-blend-multiply filter blur-xl ${className}`}
      style={{ background: color }}
      animate={{
        scale: [1, 1.3, 1.6, 1.3, 1],
        rotate: [0, 120, 240, 360],
        borderRadius: ["30%", "50%", "30%", "50%", "30%"],
        y: [-20, 20, -20]
      }}
      transition={{
        duration: 20,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
        repeat: Infinity,
        repeatDelay: 0
      }}
      aria-hidden="true"
    />
  );
}

export default HeroSection;
