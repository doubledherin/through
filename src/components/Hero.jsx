import heroVideo from "../assets/3894202891-preview.mp4"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0">
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 w-full">
          <div className="w-full lg:max-w-2xl">
            {/* Text content positioned in middle on mobile, left on desktop */}
            <div className="text-center lg:text-left -mt-12 lg:mt-0">
              <h1 className="text-3xl sm:text-4xl lg:text-7xl font-light text-white mb-3 lg:mb-8 leading-tight drop-shadow-lg">
                Transform Yourself
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                  Through Travel
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-2xl text-white/90 mb-4 lg:mb-12 leading-relaxed font-light drop-shadow-md max-w-xs sm:max-w-lg mx-auto lg:mx-0 lg:max-w-none">
                When life presents you with a crossroads, let us curate the
                perfect travel experience to illuminate your path forward. For
                discerning individuals ready to invest in transformation.
              </p>

              {/* Desktop CTAs */}
              <div className="hidden lg:flex flex-col sm:flex-row gap-3 lg:gap-6 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="bg-white text-gray-900 px-6 py-3 lg:px-8 lg:py-4 text-sm lg:text-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
                  Begin Your Journey
                </a>

                <a
                  href="#services"
                  className="border-2 border-white text-white px-6 py-3 lg:px-8 lg:py-4 text-sm lg:text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm text-center">
                  Explore Services
                </a>
              </div>

              <div className="hidden lg:block mt-3 lg:mt-12 text-xs lg:text-sm text-white/80">
                <p>Complimentary 20-minute consultation available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile CTAs - Fixed at bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-sm">
        <div className="px-4 pb-6 pt-4">
          <div className="flex flex-col gap-3">
            <a
              href="#contact"
              className="bg-white text-gray-900 px-6 py-3 text-sm font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg text-center rounded-md">
              Begin Your Journey
            </a>

            <a
              href="#services"
              className="border-2 border-white text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 text-center rounded-md">
              Explore Services
            </a>
          </div>

          <div className="mt-2 text-center text-xs text-white/80">
            <p>Complimentary 20-minute consultation available</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
