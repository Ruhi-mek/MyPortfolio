import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillSection from './components/SkillSection'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
    </div>
  )
}

export default App


