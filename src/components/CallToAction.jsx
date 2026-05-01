import React from 'react'

const CallToAction = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-light mb-8 leading-tight">
          Ready to Transform 
          <span className="block text-gray-300">Your Next Chapter?</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Every transformation begins with a conversation. Let's explore how 
          the right travel experience can catalyze the change you're seeking.
        </p>
        
        <div className="bg-white/10 backdrop-blur border border-white/20 p-8 mb-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-medium mb-4">Complimentary Consultation</h3>
          <p className="text-gray-300 mb-6">
            A no-obligation, 20-minute conversation to understand your goals, 
            explore possibilities, and determine if we're the right fit for your journey.
          </p>
          <ul className="text-left space-y-2 text-gray-300">
            <li>• Discuss your current life transition or goals</li>
            <li>• Explore travel experiences that align with your vision</li>
            <li>• Understand our process and investment levels</li>
            <li>• No pressure, just possibilities</li>
          </ul>
        </div>
        
        <a 
          href="#contact"
          className="inline-block bg-white text-gray-900 px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Schedule Your Consultation
        </a>
        
        <p className="mt-6 text-sm text-gray-400">
          Limited availability • Serious inquiries only
        </p>
      </div>
    </section>
  )
}

export default CallToAction