// Create a responsive footer component
"use client"

import Link from "next/link"
import { Car, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 py-8 md:py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Car Listings</span>
            </div>
            <p className="text-gray-400 mb-4">
              We're dedicated to providing the best car buying experience with transparent pricing and verified vehicle
              histories.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/cars" className="hover:text-white">
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link href="/sell" className="hover:text-white">
                  Sell Your Car
                </Link>
              </li>
              <li>
                <Link href="/financing" className="hover:text-white">
                  Financing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-white">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Auto Drive, Car City, CC 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@carlistings.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} Car Listings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

