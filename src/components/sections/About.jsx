import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase } from 'react-icons/fi';

function About() {
  const skills = [
    { name: 'React', icon: <FiCode /> },
    { name: 'Node.js', icon: <FiServer /> },
    { name: 'C++', icon: <FiCode /> },
    { name: 'Python', icon: <FiCode /> },
    { name: 'Full Stack', icon: <FiDatabase /> },
  ];

  return (
    <section id="about" className="py-20 text-center">
      <motion.div 
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-extrabold mb-12 text-gray-900 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          <motion.div 
            className="w-64 h-64 rounded-full overflow-hidden shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="profile.png" 
              alt="Himansh Negi" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="max-w-2xl text-left">
            <motion.p 
              className="text-lg mb-6 text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hello! I'm Himansh Negi, a passionate full-stack developer with a year of experience, including an enriching internship at 9squarelabs. My journey in web development has been driven by a fascination with creating seamless, efficient, and user-friendly digital experiences.
            </motion.p>
            <motion.p 
              className="text-lg mb-6 text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I specialize in full-stack development, with a strong focus on React for front-end and Node.js for back-end solutions. My proficiency in C++ and Python adds versatility to my toolkit, allowing me to tackle diverse challenges in software development.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.icon}
                  <span className="text-gray-800 dark:text-white">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
