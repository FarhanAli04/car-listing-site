import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import type { Metadata } from "next"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Footer from "./footer"

import logo from "../public/Logo-removebg-preview.png"

export const metadata: Metadata = {
  title: "Car Listings - Find Your Perfect Vehicle",
  description: "Browse thousands of quality used and new cars with verified history and transparent pricing",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background">
              <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                  {/* Replace Car icon with your logo image */}
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt="Car Listings Logo"
                    width={70}
                    height={50}
                    className="h-auto w-20 max-h-20"
                  />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex md:gap-6">
                  <Link href="/cars" className="text-sm font-medium hover:text-primary">
                    Browse Cars
                  </Link>
                  <Link href="/sell" className="text-sm font-medium hover:text-primary">
                    Sell Your Car
                  </Link>
                  <Link href="/about" className="text-sm font-medium hover:text-primary">
                    About Us
                  </Link>
                  <Link href="/contact" className="text-sm font-medium hover:text-primary">
                    Contact
                  </Link>
                  <Link href="/faq" className="text-sm font-medium hover:text-primary">
                    FAQs
                  </Link>
                </nav>

                <div className="hidden md:flex md:items-center md:gap-2">
                  <Link
                    href="/register"
                    className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Register
                  </Link>
                  <Link href="/login" className="text-sm font-medium hover:text-primary">
                    Sign In
                  </Link>
                  <Link
                    href="/admin/dashboard"
                    className="ml-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
                  >
                    Admin Login
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                    <SheetHeader className="mb-4">
                      <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col space-y-4">
                      <Link href="/cars" className="text-sm font-medium hover:text-primary">
                        Browse Cars
                      </Link>
                      <Link href="/sell" className="text-sm font-medium hover:text-primary">
                        Sell Your Car
                      </Link>
                      <Link href="/about" className="text-sm font-medium hover:text-primary">
                        About Us
                      </Link>
                      <Link href="/contact" className="text-sm font-medium hover:text-primary">
                        Contact
                      </Link>
                      <Link href="/faq" className="text-sm font-medium hover:text-primary">
                        FAQs
                      </Link>
                      <Separator className="my-2" />
                      <Link
                        href="/register"
                        className="flex w-full items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                      >
                        Register
                      </Link>
                      <Link
                        href="/login"
                        className="flex w-full items-center justify-center text-sm font-medium hover:text-primary"
                      >
                        Sign In
                      </Link>
                        <Link
                        href="/admin/dashboard"
                        className="flex w-full items-center justify-center rounded-md border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800 mt-2"
                        >
                        Admin Login
                        </Link>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

