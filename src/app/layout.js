import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bespoke Projects - Property, Made Personal",
  description:
    "Residential and commercial transformations tailored to the end user. We Build for the Buyer, not the Market.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed py-4 top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <a href="/" className="flex items-center">
                  <Image
                    src="/images/logo/bespoke-projects-logo.png"
                    alt="Bespoke Projects"
                    href="/"
                    width={150}
                    height={40}
                    className="h-16 w-auto"
                  />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a
                    href="/"
                    className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none"
                  >
                    About
                  </a>
                  <a
                    href="/how-it-works"
                    className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none"
                  >
                    How It Works
                  </a>
                  <a
                    href="/projects"
                    className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none"
                  >
                    Projects
                  </a>
                  <a
                    href="/contact"
                    className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">{children}</main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Bespoke Projects</h3>
                <p className="text-gray-300">Property, Made Personal.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Contact</h4>
                <p className="text-gray-300">info@bespoke-projects.com</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Services</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>Residential Development</li>
                  <li>Commercial Refurbishment</li>
                  <li>Tailored Solutions</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
              © 2025 Bespoke Projects. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
