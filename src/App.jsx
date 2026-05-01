import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import CallToAction from './components/CallToAction'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <CallToAction />
      <Contact />
    </div>
  )
}

export default App