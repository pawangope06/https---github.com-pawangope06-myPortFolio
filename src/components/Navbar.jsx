import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left - Brand */}
        <button
          onClick={handleScrollToTop}
          className="text-2xl font-bold text-teal-600 hover:text-teal-800 transition"
        >
          Pawan Portfolio
        </button>

        {/* Right - Navigation Links */}
        <div className="flex items-center space-x-6 hidden md:flex">
          <a
            href="#about"
            className="text-gray-700 font-medium hover:text-teal-500 transition"
          >
            About
          </a>
          <a
            href="#education"
            className="text-gray-700 font-medium hover:text-teal-500 transition"
          >
            Education
          </a>
          <a
            href="#projects"
            className="text-gray-700 font-medium hover:text-teal-500 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-700 font-medium hover:text-teal-500 transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-teal-600"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? 'X' : '☰'}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
          <a
            href="#about"
            className="text-gray-700 font-medium hover:text-teal-500 transition block"
          >
            About
          </a>
          <a
            href="#education"
            className="text-gray-700 font-medium hover:text-teal-500 transition block"
          >
            Education
          </a>
          <a
            href="#projects"
            className="text-gray-700 font-medium hover:text-teal-500 transition block"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-700 font-medium hover:text-teal-500 transition block"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
