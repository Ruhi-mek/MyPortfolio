import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillSection from './components/SkillSection'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content-wrapper">
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}

export default App


