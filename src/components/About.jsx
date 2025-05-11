import React from 'react';
import { FaBolt, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt, FaJava, FaDatabase } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiMongodb, SiMysql, SiPostgresql, SiNumpy, SiScikitlearn } from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';
import { TbBinaryTree } from 'react-icons/tb';
import { GrSystem } from 'react-icons/gr';
import { BsDiagram3, BsGlobe } from 'react-icons/bs';

const skills = [
  { name: "JavaScript (ES6+)", icon: <FaJsSquare /> },
  { name: "React & Redux", icon: <FaReact /> },
  { name: "Node.js & Express", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "SQL & NoSQL Databases", icon: <DiDatabase /> },
  { name: "Git & GitHub", icon: <FaGitAlt /> },
  { name: "Java & OOP", icon: <FaJava /> },
  { name: "AI & ML", icon: <SiScikitlearn /> },
  { name: "Data Structures & Algorithms", icon: <TbBinaryTree /> },
  { name: "DBMS & Operating System", icon: <GrSystem /> },
  { name: "Problem Solving", icon: <BsDiagram3 /> },
  { name: "Computer Networks", icon: <BsGlobe /> },
];

const About = () => {
  return (
    <section className="bg-gray-100 py-16 px-4" id="about">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="h-1 w-20 bg-teal-500 mx-auto mb-8 rounded"></div>

        <p className="text-gray-700 text-lg mb-10">
          Hello! I'm Pawan Gope, a dedicated and results-oriented software developer with a passion for creating innovative solutions and user-friendly applications. I have a strong foundation in web development, with expertise in both front-end and back-end technologies. My goal is to leverage my skills to build efficient and scalable applications that enhance user experience and drive business success.
        </p>

        <h3 className="text-2xl font-semibold flex items-center justify-center gap-2 mb-6">
          <FaBolt className="text-teal-500" /> My Skillset
        </h3>

        <div className="bg-white shadow-md rounded-lg p-6 flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-teal-100 text-teal-800 text-sm px-4 py-2 rounded-full font-medium flex items-center gap-2"
            >
              {skill.icon} {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
