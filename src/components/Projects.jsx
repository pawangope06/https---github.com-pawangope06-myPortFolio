import React from 'react';
import img1 from '../assets/Myntra.png';
import img2 from '../assets/Todo.png';
import img3 from '../assets/Uber.png';
import img4 from '../assets/SMS.png';

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-featured e-commerce website with product listings and cart functionality using JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: img1,
    github: 'https://github.com/pawangope06/Myntra-Clone-JS',
  },
  {
    title: 'ToDo App',
    description:
      'A full-stack todo app with real-time updates, task categories, and priorities. Built with the MERN stack.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: img2,
    github: 'https://github.com/pawangope06/TODO-App-MERN',
  },
  {
    title: 'Uber Clone',
    description:
      'Ride-sharing app clone with real-time location tracking, ride booking, and driver matching.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Maps API'],
    image: img3,
    github: 'https://github.com/pawangope06/Uber-Youtube',
  },
  {
    title: 'SMS Spam Detection',
    description:
      'A machine learning project that detects spam messages using Python and Scikit-learn.',
    tags: ['Python', 'Machine Learning', 'Scikit-learn'],
    image: img4,
    github: 'https://github.com/pawangope06/sms-spam-classifier',
  },
];

const Projects = () => {
  return (
    <section className="bg-white py-16 px-4" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <div className="h-1 w-20 bg-teal-500 mx-auto mb-12 rounded"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-gray-50 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="flex flex-col justify-between p-6 text-left flex-1">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded transition mt-auto"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
