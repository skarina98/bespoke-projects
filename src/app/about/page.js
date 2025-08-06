export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-40 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
              Tailored Property Development, <br />
              From Start to Finish.
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Approach
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Bespoke Projects is a SME property developer focused on
                residential and commercial refurbishment. We acquire buildings
                with potential and work with individual buyers or investors to
                shape the final outcome to their needs.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every project is different. Sometimes it's a family downsizing
                to a more manageable home. Other times it's a commercial
                investor with a specific layout or licensing goal. Our role is
                to take overlooked buildings and deliver finished properties
                that feel intentional, not generic.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We don't do volume. We don't follow templates. We don't sell
                off-plan. We build a handful of projects a year — each one
                guided by the end user.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/about-us.jpeg')",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-40">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Personalised
              </h3>
              <p className="text-gray-600 text-sm">
                Each project is tailored to the specific needs and vision of the
                end user.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Efficient
              </h3>
              <p className="text-gray-600 text-sm">
                Streamlined process from acquisition to completion, maximising
                value for all parties.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quality
              </h3>
              <p className="text-gray-600 text-sm">
                High-quality finishes and attention to detail in every aspect of
                our developments.
              </p>
            </div>
          </div>

          {/* Featured Projects Preview */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Take a glimpse at some of our recent transformations and see how
                we bring bespoke visions to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/projects" className="group block">
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden relative">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{
                      backgroundImage:
                        "url('/images/mid-terrace-victorian.jpeg')",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      Residential Transformation
                    </h3>
                    <p className="text-white/90 text-sm">
                      Modern family home renovation
                    </p>
                  </div>
                </div>
              </a>

              <a href="/projects" className="group block">
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden relative">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{
                      backgroundImage: "url('/images/corporate-building2.jpg')",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      Commercial to Resi
                    </h3>
                    <p className="text-white/90 text-sm">
                      Offices transformed to residential flats
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center mt-8">
              <a
                href="/projects"
                className="inline-flex items-center text-gray-900 font-semibold hover:text-blue-600 transition-colors duration-200"
              >
                View All Projects
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Bespoke Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can transform a property to perfectly suit your
            needs.
          </p>
          <a
            href="/contact"
            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
