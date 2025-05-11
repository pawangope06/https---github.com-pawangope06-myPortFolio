import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import hitLogo from '../assets/images.png';
import dpsLogo from '../assets/download.jpeg';

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering with specialization in AI and ML",
    institution: "Haldia Institute of Technology",
    year: "2022–2026",
    marksLabel: "CGPA",
    marksValue: "8.89",
    logo: hitLogo,
    description:
      "Currently pursuing a degree with a focus on Artificial Intelligence and Machine Learning. Engaged in various projects.",
  },
  {
    degree: "Intermediate in Science",
    institution: "Delhi Public School, Dhanbad",
    year: "2022",
    marksLabel: "Percentage",
    marksValue: "85%",
    logo: dpsLogo,
    description:
      "Completed my intermediate education with a focus on Science, achieving a score of 85%.",
  },
];

const Education = () => {
  return (
    <section className="bg-gray-100 py-16 px-4" id="education">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="inline-flex items-center gap-2">
            <FaGraduationCap className="text-teal-500" />
            Education & Certifications
          </span>
        </h2>
        <div className="h-1 w-24 bg-teal-500 mx-auto mb-10 rounded"></div>

        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:scale-105 transition-all flex flex-col sm:flex-row items-start gap-6"
            >
              <img
                src={edu.logo}
                alt={`${edu.institution} logo`}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-sm text-teal-600 mb-1">
                  {edu.institution} | {edu.year}
                </p>
                <p className="text-sm text-gray-800 font-medium mb-2">
                  {edu.marksLabel}: <span className="text-black">{edu.marksValue}</span>
                </p>
                <p className="text-gray-700">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
