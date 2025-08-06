import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bespoke Projects - Property, Made Personal",
  description:
    "Residential and commercial transformations tailored to the end user. We Build for the Buyer, not the Market.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
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
                <p className="text-gray-300">info@bespoke-projects.co.uk</p>
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
