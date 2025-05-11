import React from 'react';
import img1 from '../assets/HeroImage.jpg';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20 text-center" id="home">
      <div className="max-w-4xl mx-auto px-4">
        <img
          src={img1}
          alt="Profile"
          className="rounded-full mx-auto border-4 border-teal-500 w-32 h-32 shadow-lg transition-transform transform hover:scale-105 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64"
        />
        <h1 className="text-3xl sm:text-4xl font-bold mt-6">Hi, I'm Pawan Gope</h1>
        <p className="text-base sm:text-lg mt-4 text-gray-600">
          A Passionate <span className="text-teal-600 font-medium">Full-Stack Developer</span> crafting dynamic web applications.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://drive.google.com/file/d/1AhJ8dbqQR8X7ypz04B-kgFiiJBkGqCQd/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-5 py-2 rounded hover:bg-blue-400 transition-transform transform hover:scale-105 mb-4 sm:mb-0"
          >
            View My Resume
          </a>
          <a
            href="https://www.linkedin.com/in/pawangope06/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black px-5 py-2 rounded hover:bg-gray-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
