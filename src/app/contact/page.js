export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-40 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your bespoke project? Let's discuss how we can
              transform a property to perfectly suit your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Start a Conversation
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential Development</option>
                    <option value="commercial">Commercial Refurbishment</option>
                    <option value="mixed-use">Mixed-Use Development</option>
                    <option value="investment">Investment Property</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="City or region of interest"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-4 px-8 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-gray-50 rounded-lg p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Contact Information
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Email
                    </h4>
                    <a
                      href="mailto:info@bespoke-projects.com"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      info@bespoke-projects.uk
                    </a>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      What We Do
                    </h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Residential property development</li>
                      <li>• Commercial refurbishment</li>
                      <li>• Tailored property solutions</li>
                      <li>• Investment property development</li>
                      <li>• Planning and design consultation</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Our Process
                    </h4>
                    <p className="text-gray-600 mb-4">
                      We work with individual buyers and investors to create
                      bespoke properties that meet their specific needs and
                      requirements.
                    </p>
                    <a
                      href="/how-it-works"
                      className="text-gray-900 font-semibold hover:underline"
                    >
                      Learn more about our process →
                    </a>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Response Time
                    </h4>
                    <p className="text-gray-600">
                      We typically respond to all inquiries within 24 hours
                      during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help you create the perfect space for your
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@bespoke-projects.com"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Email Us
            </a>
            <a
              href="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              View Our Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
