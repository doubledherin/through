import { useState, useEffect } from "react"

const TestimonialSlider = () => {
  const testimonials = [
    {
      quote:
        "The journey she planned didn't just change my perspective on travel—it fundamentally shifted how I see myself and my possibilities. Worth every penny of the investment.",
      author: "Sarah M., Executive Director",
    },
    {
      quote:
        "After 15 years in corporate finance, I was burned out and lost. The sabbatical journey Through designed gave me the clarity to pivot into sustainable investing. I've never been happier.",
      author: "David Chen, Investment Director",
    },
    {
      quote:
        "When my marriage ended, I thought my world was over. The solo adventure Through curated helped me rediscover my strength and independence. I came back a completely different person.",
      author: "Maria Rodriguez, Entrepreneur",
    },
    {
      quote:
        "I'd been talking about climbing Kilimanjaro for years. Through didn't just plan the climb—they designed an entire African experience that exceeded every dream I had. Pure magic.",
      author: "James Wellington III, Retired CEO",
    },
    {
      quote:
        "The legacy trip Through planned for my family's 50th anniversary brought three generations together in ways we never imagined. The memories will last forever.",
      author: "Eleanor Patterson, Philanthropist",
    },
    {
      quote:
        "Turning 50 felt like a crisis until Through designed my 'Renaissance Year.' Six transformative destinations that helped me rediscover my passion for life and art.",
      author: "Alexandra Kim, Art Curator",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      setProgress(0)
    }, 5000) // Change testimonial every 5 seconds

    const progressTimer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2))
    }, 100)

    return () => {
      clearInterval(timer)
      clearInterval(progressTimer)
    }
  }, [setProgress, testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setProgress(0)
  }

  return (
    <div className="bg-white p-8 shadow-xl relative">
      <div className="relative min-h-[12rem]">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}>
            <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-6">
              "{testimonial.quote}"
            </blockquote>
            <cite className="block text-gray-900 font-medium">
              — {testimonial.author}
            </cite>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center space-x-3 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
              index === currentIndex
                ? "bg-gray-900"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress indicator */}
      <div className="mt-4 text-center text-sm text-gray-500">
        {currentIndex + 1} of {testimonials.length}
      </div>
    </div>
  )
}

export default TestimonialSlider
