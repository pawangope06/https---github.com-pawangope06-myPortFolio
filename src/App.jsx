import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Education from './components/Education'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/> {/* id=hero */}
      <Projects/> {/* id="projects" */}
      <About/>{/* id="about" */}
      <Education/>{/* id="education" */}
      <Contact/>{/* id="contact" */}
      <footer className="bg-gray-100 text-gray-700 py-8 border-t border-gray-300">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <p className="mb-2 text-sm">&copy; {new Date().getFullYear()} <span className="font-semibold">Pawan Gope</span>. All rights reserved.</p>
    <p className="text-sm flex items-center justify-center gap-1">
      Made with <span className="text-red-500 animate-pulse text-lg">&hearts;</span> by{" "}
      <span className="text-teal-600 font-medium">Pawan Gope</span>
    </p>
  </div>
</footer>

    </>
  )
}

export default App