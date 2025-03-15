"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import logo from "../public/Logo-removebg-preview.png"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary py-8 md:py-12 text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={logo || "/placeholder.svg"}
                alt="Lala's Car Sales Logo"
                width={70}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-secondary-foreground/70 mb-4">
              We're dedicated to providing the best car buying experience with transparent pricing and verified vehicle
              histories.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-secondary-foreground/70 hover:text-secondary-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-secondary-foreground/70 hover:text-secondary-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-secondary-foreground/70 hover:text-secondary-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-secondary-foreground/70 hover:text-secondary-foreground">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-secondary-foreground/70">
              <li>
                <Link href="/cars" className="hover:text-secondary-foreground">
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link href="/sell" className="hover:text-secondary-foreground">
                  Sell Your Car
                </Link>
              </li>
              <li>
                <Link href="/financing" className="hover:text-secondary-foreground">
                  Financing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-secondary-foreground/70">
              <li>
                <Link href="/blog" className="hover:text-secondary-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-secondary-foreground">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-secondary-foreground">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-secondary-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-secondary-foreground/70">
              <li>123 Auto Drive, Car City, CC 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@lalascarsales.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/70">
          <p>© {currentYear} Lala's Car Sales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

