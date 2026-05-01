import TestimonialSlider from "./TestimonialSlider"

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
              Your Guide Through
              <span className="block">Life’s Transitions</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                For over a decade, I’ve helped accomplished individuals navigate
                life’s most significant transitions through the transformative
                power of travel. Whether you’re facing a career pivot, personal
                evolution, or simply ready to cross dreams off your list, I
                believe the right journey can provide the clarity you seek.
              </p>

              <p>
                My approach combines deep psychological insight with luxury
                travel expertise, creating experiences that don’t just take you
                somewhere—they take you somewhere within yourself. Each journey
                is meticulously crafted to align with your personal goals,
                values, and the change you wish to create.
              </p>

              <p>
                I work exclusively with a select number of clients each year,
                ensuring every detail receives the attention it deserves. Your
                transformation begins long before departure and continues well
                after your return.
              </p>
            </div>

            <div className="mt-8 flex items-center space-x-6">
              <div className="text-sm text-gray-500">
                <p className="font-medium">Certifications:</p>
                <p>Certified Travel Consultant • Life Transition Coach</p>
              </div>
            </div>
          </div>

          <TestimonialSlider />
        </div>
      </div>
    </section>
  )
}

export default About
