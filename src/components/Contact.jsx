import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    transition: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert(
      "Thank you for your interest. We will contact you within 24 hours to schedule your consultation.",
    )
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">
              Begin Your
              <span className="block">Transformation</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The first step toward any meaningful change is reaching out. Tell
              us about where you are and where you want to go.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  What to Expect
                </h3>
                <p className="text-gray-600">
                  Within 24 hours, you'll receive a personal response to
                  schedule your complimentary consultation at a time that works
                  for your schedule.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Investment Range
                </h3>
                <p className="text-gray-600">
                  Comprehensive travel planning and transformation coaching
                  typically ranges from $5,000 to $25,000, depending on scope
                  and duration.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Direct Contact
                </h3>
                <p className="text-gray-600">
                  Email: hello@through-travel.com
                  <br />
                  Phone: Available during consultation scheduling
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="transition"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  What transition are you navigating?
                </label>
                <select
                  id="transition"
                  name="transition"
                  value={formData.transition}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent">
                  <option value="">Select one...</option>
                  <option value="career">Career change or pivot</option>
                  <option value="relationship">Relationship transition</option>
                  <option value="life-stage">Life stage transition</option>
                  <option value="bucket-list">Bucket list achievement</option>
                  <option value="sabbatical">
                    Sabbatical or extended break
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your vision
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What changes are you seeking? What dreams are you ready to pursue?"
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 text-lg font-medium hover:bg-gray-800 transition-colors duration-300">
                Request Consultation
              </button>

              <p className="text-sm text-gray-600 text-center">
                By submitting, you agree to receive communication about your
                consultation.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
