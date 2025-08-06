export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-40 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
              Selected Examples
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each of our projects starts with a building that's seen better
              days — and ends with a finished space shaped by its future owner's
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Residential Example 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gray-200">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/images/mid-terrace-victorian.jpeg')",
                  }}
                ></div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Residential
                  </span>
                  <span className="ml-2 text-gray-500 text-sm">
                    Leamington Spa
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Downsizer Home
                </h3>
                <div className="mb-4">
                  <p className="text-gray-600 mb-2">
                    <strong>Type:</strong> Victorian mid-terrace
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Buyer Type:</strong> Downsizing couple
                  </p>
                </div>
                <p className="text-gray-600 mb-4">
                  We acquired a tired 3-bedroom Victorian terrace in Southville
                  with structural issues and extensive internal disrepair. The
                  buyer was a retired couple looking to downsize from a large
                  rural home into something modern, manageable, and close to
                  family.
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Works Completed:
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Ground-floor bedroom with en-suite wet room</li>
                    <li>• Open-plan living area with improved natural light</li>
                    <li>• Widened doorways and step-free access</li>
                    <li>
                      • Low-maintenance finishes (Amtico flooring, composite
                      decking)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Residential Example 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gray-200">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/dilapidated-flat.jpeg')",
                  }}
                ></div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Residential
                  </span>
                  <span className="ml-2 text-gray-500 text-sm">Derby</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  First-Time Buyer Family
                </h3>
                <div className="mb-4">
                  <p className="text-gray-600 mb-2">
                    <strong>Type:</strong> 1950s ex-local authority semi
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Buyer Type:</strong> Young family
                  </p>
                </div>
                <p className="text-gray-600 mb-4">
                  A family-friendly transformation of a dated semi-detached
                  property, creating modern living spaces perfect for family
                  life.
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Works Completed:
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Knocked-through kitchen-diner with garden access</li>
                    <li>• Bifold doors and family-friendly rear landscaping</li>
                    <li>• New heating system, insulation, and rewire</li>
                    <li>• Soft, durable finishes throughout</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Residential Example 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gray-200">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/renovated-house.jpeg')",
                  }}
                ></div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Residential
                  </span>
                  <span className="ml-2 text-gray-500 text-sm">Reading</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Young Professional Flat
                </h3>
                <div className="mb-4">
                  <p className="text-gray-600 mb-2">
                    <strong>Type:</strong> Top-floor flat in converted Victorian
                    house
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Buyer Type:</strong> Solo buyer in tech
                  </p>
                </div>
                <p className="text-gray-600 mb-4">
                  A clever reconfiguration of a challenging top-floor space to
                  maximise usable area and create a bright, modern home for a
                  young professional.
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Works Completed:
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Lease extension and fire door upgrades</li>
                    <li>
                      • Reconfigured layout to increase usable head height
                    </li>
                    <li>• Bespoke eaves storage and bright finishes</li>
                    <li>• Fully mortgageable, turnkey result</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Residential Example 4 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gray-200">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/country-house.jpeg')",
                  }}
                ></div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Residential
                  </span>
                  <span className="ml-2 text-gray-500 text-sm">York</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Live/Work Cottage
                </h3>
                <div className="mb-4">
                  <p className="text-gray-600 mb-2">
                    <strong>Type:</strong> Two-bed period cottage with cellar
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Buyer Type:</strong> Creative professional
                  </p>
                </div>
                <p className="text-gray-600 mb-4">
                  A unique transformation of a period property to accommodate
                  both living and working requirements while preserving its
                  character.
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Works Completed:
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Cellar excavation and tanking for studio use</li>
                    <li>• French doors added to garden</li>
                    <li>• Mezzanine storage and light-enhancing finishes</li>
                    <li>
                      • Period details retained, acoustic insulation added
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Commercial Example 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gray-200">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/corporate-building.png')",
                  }}
                ></div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Commercial
                  </span>
                  <span className="ml-2 text-gray-500 text-sm">
                    Gloucester City Centre
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Residential Conversion
                </h3>
                <div className="mb-4">
                  <p className="text-gray-600 mb-2">
                    <strong>Type:</strong> Former dental practice
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Buyer Type:</strong> BTL Investor
                  </p>
                </div>
                <p className="text-gray-600 mb-4">
                  We purchased a vacant commercial unit formerly used as a
                  dental practice, spread over three floors, with outdated
                  fittings and no residential planning in place. A buyer in our
                  network was seeking a 6-bed licensed HMO with en-suites in
                  Gloucester.
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Works Completed:
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• C4 planning, full fire safety, 6 en-suites</li>
                    <li>• Redesign of layout for compliance</li>
                    <li>
                      • High-spec communal areas, low-maintenance finishes
                    </li>
                    <li>• Delivered licensed and cash-flowing asset</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Commercial Example 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gray-200">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/corporate-building2.jpg')",
                  }}
                ></div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Commercial
                  </span>
                  <span className="ml-2 text-gray-500 text-sm">
                    Weston-super-Mare
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Commercial-to-Resi Flats
                </h3>
                <div className="mb-4">
                  <p className="text-gray-600 mb-2">
                    <strong>Type:</strong> Ground-floor retail + upper storage
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Buyer Type:</strong> BTL investor
                  </p>
                </div>
                <p className="text-gray-600 mb-4">
                  A successful conversion of a mixed-use commercial property
                  into high-quality residential units, maximising rental
                  potential and investment returns.
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Works Completed:
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Class MA change of use</li>
                    <li>• 2 self-contained flats with private access</li>
                    <li>• Full upgrade to EPC B</li>
                    <li>• Delivered tenanted and income-producing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Bespoke Project?
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
