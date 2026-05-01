const Services = () => {
  const services = [
    {
      title: "Life Transition Journeys",
      description:
        "Navigate career pivots, relationship changes, or major life shifts through carefully curated travel experiences that provide clarity and perspective.",
      icon: "🧭",
    },
    {
      title: "Bucket List Curation",
      description:
        "Transform your dreams into meticulously planned adventures. We craft bespoke itineraries that turn aspirations into unforgettable realities.",
      icon: "✨",
    },
    {
      title: "Legacy Travel Planning",
      description:
        "Create meaningful experiences that honor your heritage, celebrate milestones, or establish new family traditions for generations to come.",
      icon: "🏔️",
    },
    {
      title: "Sabbatical Design",
      description:
        "Design transformative extended journeys for executives and professionals seeking renewal, inspiration, and a fresh perspective on their purpose.",
      icon: "🌿",
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Transformative Travel Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't plan vacations. We architect journeys of personal
            transformation, carefully designed for individuals ready to embrace
            change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Each journey is individually crafted, because transformation is
            deeply personal. Investment starts at $5,000 for personalized
            consultation and planning.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
