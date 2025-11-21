import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Project from './components/Project'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
      {/* Smooth scrolling container */}
      <Hero />
      <About />
      <Education />
      <Project />
      <Skills />
      <Certifications />
      <Contact />
      {/* Footer */}
      <footer className="bg-black pb-12 pt-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Shridhar P Bhovi — Crafted with precision.
      </footer>
    </div>
  )
}

export default App
