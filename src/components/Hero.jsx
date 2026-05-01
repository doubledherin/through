import React from 'react'
import heroVideo from '../assets/3894202891-preview.mp4'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight drop-shadow-lg">
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                Life's Journey
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed font-light drop-shadow-md">
              When life presents you with a crossroads, let us curate the perfect travel experience 
              to illuminate your path forward. For discerning individuals ready to invest in 
              transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="#contact"
                className="bg-white text-gray-900 px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Begin Your Journey
              </a>
              
              <a 
                href="#services"
                className="border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm text-center"
              >
                Explore Services
              </a>
            </div>
            
            <div className="mt-12 text-sm text-white/80">
              <p>Complimentary 20-minute consultation available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero