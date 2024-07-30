import React from 'react';

const projectList = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    link: '#'
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    link: '#'
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    link: '#'
  }
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-white text-center animate-slideIn">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
