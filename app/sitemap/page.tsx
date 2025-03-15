import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold">Sitemap</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="mb-4 text-xl font-semibold">Main Pages</h2>
            <ul className="space-y-2">
              {mainPages.map((page) => (
                <li key={page.title} className="rounded-md hover:bg-gray-100">
                  <Link href={page.url} className="flex items-center p-2">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                    <span>{page.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold">Car Categories</h2>
            <ul className="space-y-2">
              {carCategories.map((category) => (
                <li key={category.title} className="rounded-md hover:bg-gray-100">
                  <Link href={category.url} className="flex items-center p-2">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                    <span>{category.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold">Car Makes</h2>
            <ul className="space-y-2">
              {carMakes.map((make) => (
                <li key={make.title} className="rounded-md hover:bg-gray-100">
                  <Link href={make.url} className="flex items-center p-2">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                    <span>{make.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold">User Account</h2>
            <ul className="space-y-2">
              {userAccount.map((page) => (
                <li key={page.title} className="rounded-md hover:bg-gray-100">
                  <Link href={page.url} className="flex items-center p-2">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                    <span>{page.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold">Resources</h2>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.title} className="rounded-md hover:bg-gray-100">
                  <Link href={resource.url} className="flex items-center p-2">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                    <span>{resource.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold">Legal</h2>
            <ul className="space-y-2">
              {legal.map((page) => (
                <li key={page.title} className="rounded-md hover:bg-gray-100">
                  <Link href={page.url} className="flex items-center p-2">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                    <span>{page.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold">Site Structure</h2>
          <div className="overflow-auto rounded-lg border bg-white p-6">
            <div className="sitemap-tree">
              <ul className="space-y-2">
                <li>
                  <div className="flex items-center font-medium">
                    <span className="mr-2 inline-block h-4 w-4 rounded-full bg-primary"></span>
                    Home
                  </div>
                  <ul className="ml-6 mt-2 space-y-2 border-l border-gray-200 pl-4">
                    <li>
                      <div className="flex items-center">
                        <span className="mr-2 inline-block h-3 w-3 rounded-full bg-gray-300"></span>
                        Cars
                      </div>
                      <ul className="ml-6 mt-2 space-y-2 border-l border-gray-200 pl-4">
                        <li>
                          <div className="flex items-center">
                            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gray-300"></span>
                            Car Details
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gray-300"></span>
                            Search Results
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <span className="mr-2 inline-block h-3 w-3 rounded-full bg-gray-300"></span>
                        Sell Your Car
                      </div>
                      <ul className="ml-6 mt-2 space-y-2 border-l border-gray-200 pl-4">
                        <li>
                          <div className="flex items-center">
                            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gray-300"></span>
                            Create Listing
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gray-300"></span>
                            Pricing
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <span className="mr-2 inline-block h-3 w-3 rounded-full bg-gray-300"></span>
                        About
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <span className="mr-2 inline-block h-3 w-3 rounded-full bg-gray-300"></span>
                        Contact
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <span className="mr-2 inline-block h-3 w-3 rounded-full bg-gray-300"></span>
                        FAQ
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <span className="mr-2 inline-block h-3 w-3 rounded-full bg-gray-300"></span>
                        User Account
                      </div>
                      <ul className="ml-6 mt-2 space-y-2 border-l border-gray-200 pl-4">
                        <li>
                          <div className="flex items-center">
                            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gray-300"></span>
                            Dashboard
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gray-300"></span>
                            My Listings
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gray-300"></span>
                            Saved Cars
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gray-300"></span>
                            Messages
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gray-300"></span>
                            Settings
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample data
const mainPages = [
  { title: "Home", url: "/" },
  { title: "Cars", url: "/cars" },
  { title: "Sell Your Car", url: "/sell" },
  { title: "About Us", url: "/about" },
  { title: "Contact Us", url: "/contact" },
  { title: "FAQ", url: "/faq" },
  { title: "Sitemap", url: "/sitemap" },
]

const carCategories = [
  { title: "SUVs", url: "/cars?category=suvs" },
  { title: "Sedans", url: "/cars?category=sedans" },
  { title: "Hatchbacks", url: "/cars?category=hatchbacks" },
  { title: "Trucks", url: "/cars?category=trucks" },
  { title: "Luxury Cars", url: "/cars?category=luxury" },
  { title: "Electric Vehicles", url: "/cars?category=electric" },
  { title: "Hybrid Vehicles", url: "/cars?category=hybrid" },
  { title: "Convertibles", url: "/cars?category=convertibles" },
]

const carMakes = [
  { title: "Toyota", url: "/cars?make=toyota" },
  { title: "Honda", url: "/cars?make=honda" },
  { title: "Ford", url: "/cars?make=ford" },
  { title: "BMW", url: "/cars?make=bmw" },
  { title: "Mercedes-Benz", url: "/cars?make=mercedes" },
  { title: "Audi", url: "/cars?make=audi" },
  { title: "Tesla", url: "/cars?make=tesla" },
  { title: "Hyundai", url: "/cars?make=hyundai" },
]

const userAccount = [
  { title: "Dashboard", url: "/account" },
  { title: "My Listings", url: "/account/listings" },
  { title: "Saved Cars", url: "/account/saved" },
  { title: "Messages", url: "/account/messages" },
  { title: "Settings", url: "/account/settings" },
]

const resources = [
  { title: "Car Buying Guide", url: "/resources/buying-guide" },
  { title: "Selling Tips", url: "/resources/selling-tips" },
  { title: "Vehicle Inspection Checklist", url: "/resources/inspection-checklist" },
  { title: "Financing Options", url: "/resources/financing" },
  { title: "Blog", url: "/blog" },
]

const legal = [
  { title: "Terms of Service", url: "/legal/terms" },
  { title: "Privacy Policy", url: "/legal/privacy" },
  { title: "Cookie Policy", url: "/legal/cookies" },
  { title: "Disclaimer", url: "/legal/disclaimer" },
]

