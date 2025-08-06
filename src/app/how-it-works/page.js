export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-40 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
              A Development Process <br /> That Starts With You
            </h1>
            <p className="text-xl text-gray-600 mx-auto">
              Our streamlined approach ensures your vision becomes reality
              efficiently and effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    We Buy the Right Property
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We acquire run-down or underused assets with strong potential
                  all across the UK. Our expertise in identifying properties
                  with hidden value ensures we find the perfect foundation for
                  your bespoke project.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/images/dilapidated-house.jpeg')",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/images/family-buyer.jpeg')",
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    We Match It With the Right Client
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Once we have exchanged contracts on our purchase, we reach out
                  to buyers or investors in our network who've shown interest in
                  that area. We ensure the perfect match between property
                  potential and client requirements.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    We Co-Create the Design
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Once we have decided to work together, you guide the layout,
                  specification, and features to suit your lifestyle or
                  investment model. We then carry out all the necessary works,
                  ensuring every detail reflects your vision.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/images/blueprint.jpeg')",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/images/new-family.jpeg')",
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    We Build It. You Buy It.
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Once complete, you purchase the property at a fixed,
                  pre-agreed price. This approach ensures transparency and
                  eliminates the uncertainty often associated with traditional
                  property development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique approach delivers benefits for both developers and end
              users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fixed Pricing
              </h3>
              <p className="text-gray-600 text-sm">
                No hidden costs or unexpected expenses during the development
                process.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
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
                Efficient Timeline
              </h3>
              <p className="text-gray-600 text-sm">
                Streamlined process reduces delays and ensures timely
                completion.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
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
                Quality Assured
              </h3>
              <p className="text-gray-600 text-sm">
                High-quality finishes and attention to detail throughout the
                process.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Personal Touch
              </h3>
              <p className="text-gray-600 text-sm">
                Every project is tailored to your specific needs and
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our process can work for you.
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
