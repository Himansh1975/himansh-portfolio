import React from 'react';

const projectList = [
  {
    title: 'Algorithm Visualizer',
    description: 'A comprehensive tool to visualize various algorithms for educational purposes.',
    link: 'https://himansh1975.github.io/AlgoWiz/',
    image: 'project1.png' // Actual image URL
  },
  {
    title: 'Weather App',
    description: 'A sleek app that provides weather forecasts for multiple locations.',
    link: '#',
    image: 'https://via.placeholder.com/300?text=Weather+App' // Mock image URL
  },
  {
    title: 'Cosmic Task Manager',
    description: 'An intuitive task manager to organize and prioritize your tasks efficiently.',
    link: 'https://himansh1975.github.io/cosmic-task/',
    image: 'project3.png' // Mock image URL
  }
];

function Projects() {
  return (
    <section id="projects" className="py-20 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold mb-12 text-gray-900 dark:text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3 hover:scale-105 duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
              <a 
                href={project.link} 
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
