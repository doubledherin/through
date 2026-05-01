import React, { useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Gradient background that allows video to bleed through */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-sm"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-light tracking-wide text-white drop-shadow-lg">
            Through
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-white/90 hover:text-white transition-colors drop-shadow-md">Services</a>
            <a href="#about" className="text-white/90 hover:text-white transition-colors drop-shadow-md">About</a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors drop-shadow-md">Contact</a>
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#services" className="block py-2 text-white/90 hover:text-white transition-colors">Services</a>
            <a href="#about" className="block py-2 text-white/90 hover:text-white transition-colors">About</a>
            <a href="#contact" className="block py-2 text-white/90 hover:text-white transition-colors">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation