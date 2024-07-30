import React from 'react';

const skills = [
  { name: 'React', level: 'Expert' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'HTML & CSS', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Advanced' },
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 text-center animate-slideIn">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
