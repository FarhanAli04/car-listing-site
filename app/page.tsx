// Change the component to a client component
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ChevronRight, Star, Phone, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HomePage() {
  // Add state for search inputs
  const [searchInputs, setSearchInputs] = useState({
    all: { keyword: "", location: "", maxPrice: "" },
    used: { keyword: "", location: "", maxPrice: "" },
    new: { keyword: "", location: "", maxPrice: "" },
    certified: { keyword: "", location: "", maxPrice: "" },
  })

  // Handle input changes
  const handleInputChange = (tab, field, value) => {
    setSearchInputs((prev) => ({
      ...prev,
      [tab]: {
        ...prev[tab],
        [field]: value,
      },
    }))
  }

  // Handle search form submission
  const handleSearch = (e, tab) => {
    e.preventDefault()

    // Get the search parameters for the selected tab
    const params = searchInputs[tab]

    // Build the query string
    const queryParams = new URLSearchParams()

    if (params.keyword) queryParams.append("keyword", params.keyword)
    if (params.location) queryParams.append("location", params.location)
    if (params.maxPrice) queryParams.append("maxPrice", params.maxPrice)

    // Add the tab as a filter parameter if it's not "all"
    if (tab !== "all") {
      queryParams.append("condition", tab)
    }

    // Navigate to the cars page with the search parameters
    window.location.href = `/cars?${queryParams.toString()}`
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-12 md:py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                Find Your Perfect Car
              </h1>
              <p className="text-base md:text-lg text-gray-300">
                Browse thousands of quality used cars with verified history and transparent pricing
              </p>

              <div className="mt-4 flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/cars">Browse Cars</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10" asChild>
                  <Link href="/sell">Sell Your Car</Link>
                </Button>
              </div>
            </div>

            <div className="relative hidden md:block">
              <Image
                src="https://www.theglobeandmail.com/resizer/v2/KZ3BISJQJBDBROWUL375KNRXGM.jpg?auth=7aa37fbe9ad7cd91d04cac93b00646c62bf561f0ef635fb0ca955b0f61d7c2a5&width=600&height=400&quality=80&smart=true"
                alt="Featured Car"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="mt-6 sm:mt-8 md:mt-12 rounded-xl bg-white p-3 sm:p-4 md:p-6 shadow-lg mx-auto w-full max-w-7xl">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2 p-1 sm:p-1.5 md:p-2 rounded-md">
                <TabsTrigger value="all" className="px-2 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base font-medium">
                  All Cars
                </TabsTrigger>
                <TabsTrigger value="used" className="px-2 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base font-medium">
                  Used
                </TabsTrigger>
                <TabsTrigger value="new" className="px-2 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base font-medium">
                  New
                </TabsTrigger>
                <TabsTrigger
                  value="certified"
                  className="px-2 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base font-medium"
                >
                  Certified
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4">
                <form onSubmit={(e) => handleSearch(e, "all")} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <Input
                    placeholder="Make, model, or keyword"
                    className="w-full"
                    value={searchInputs.all.keyword}
                    onChange={(e) => handleInputChange("all", "keyword", e.target.value)}
                  />
                  <Input
                    placeholder="Location"
                    className="w-full"
                    value={searchInputs.all.location}
                    onChange={(e) => handleInputChange("all", "location", e.target.value)}
                  />
                  <Input
                    placeholder="Max Price"
                    type="number"
                    className="w-full"
                    value={searchInputs.all.maxPrice}
                    onChange={(e) => handleInputChange("all", "maxPrice", e.target.value)}
                  />
                  <Button type="submit" className="w-full">
                    <Search className="mr-2 h-4 w-4" /> Search
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="used" className="mt-4">
                <form onSubmit={(e) => handleSearch(e, "used")} className="grid gap-4 md:grid-cols-4">
                  <Input
                    placeholder="Make, model, or keyword"
                    className="w-full"
                    value={searchInputs.used.keyword}
                    onChange={(e) => handleInputChange("used", "keyword", e.target.value)}
                  />
                  <Input
                    placeholder="Location"
                    className="w-full"
                    value={searchInputs.used.location}
                    onChange={(e) => handleInputChange("used", "location", e.target.value)}
                  />
                  <Input
                    placeholder="Max Price"
                    type="number"
                    className="w-full"
                    value={searchInputs.used.maxPrice}
                    onChange={(e) => handleInputChange("used", "maxPrice", e.target.value)}
                  />
                  <Button type="submit" className="w-full">
                    <Search className="mr-2 h-4 w-4" /> Search Used
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="new" className="mt-4">
                <form
                  onSubmit={(e) => handleSearch(e, "new")}
                  className="grid gap-4 md:grid-cols-4 mt-6 md:mt-5 pt-4 md:pt-2"
                >
                  <Input
                    placeholder="Make, model, or keyword"
                    className="w-full"
                    value={searchInputs.new.keyword}
                    onChange={(e) => handleInputChange("new", "keyword", e.target.value)}
                  />
                  <Input
                    placeholder="Location"
                    className="w-full"
                    value={searchInputs.new.location}
                    onChange={(e) => handleInputChange("new", "location", e.target.value)}
                  />
                  <Input
                    placeholder="Max Price"
                    type="number"
                    className="w-full"
                    value={searchInputs.new.maxPrice}
                    onChange={(e) => handleInputChange("new", "maxPrice", e.target.value)}
                  />
                  <Button type="submit" className="w-full">
                    <Search className="mr-2 h-4 w-4" /> Search New
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="certified" className="mt-4">
                <form onSubmit={(e) => handleSearch(e, "certified")} className="grid gap-4 md:grid-cols-4">
                  <Input
                    placeholder="Make, model, or keyword"
                    className="w-full"
                    value={searchInputs.certified.keyword}
                    onChange={(e) => handleInputChange("certified", "keyword", e.target.value)}
                  />
                  <Input
                    placeholder="Location"
                    className="w-full"
                    value={searchInputs.certified.location}
                    onChange={(e) => handleInputChange("certified", "location", e.target.value)}
                  />
                  <Input
                    placeholder="Max Price"
                    type="number"
                    className="w-full"
                    value={searchInputs.certified.maxPrice}
                    onChange={(e) => handleInputChange("certified", "maxPrice", e.target.value)}
                  />
                  <Button type="submit" className="w-full">
                    <Search className="mr-2 h-4 w-4" /> Search Certified
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 md:mb-8 text-center text-2xl md:text-3xl font-bold">Browse by Category</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {/* SUVs */}
            <Link
              href={`/cars?category=suvs`}
              className="group flex flex-col items-center rounded-lg p-4 text-center transition-all hover:bg-gray-100"
            >
              <div className="mb-3 rounded-full bg-gray-100 p-4 transition-all group-hover:bg-white">
                <Image
                  src={`/placeholder.svg?height=60&width=60&text=SUV`}
                  alt="SUVs"
                  width={60}
                  height={60}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <span className="font-medium">SUVs</span>
            </Link>

            {/* Sedans */}
            <Link
              href={`/cars?category=sedans`}
              className="group flex flex-col items-center rounded-lg p-4 text-center transition-all hover:bg-gray-100"
            >
              <div className="mb-3 rounded-full bg-gray-100 p-4 transition-all group-hover:bg-white">
                <Image
                  src={`/placeholder.svg?height=60&width=60&text=Sedan`}
                  alt="Sedans"
                  width={60}
                  height={60}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <span className="font-medium">Sedans</span>
            </Link>

            {/* Trucks */}
            <Link
              href={`/cars?category=trucks`}
              className="group flex flex-col items-center rounded-lg p-4 text-center transition-all hover:bg-gray-100"
            >
              <div className="mb-3 rounded-full bg-gray-100 p-4 transition-all group-hover:bg-white">
                <Image
                  src={`/placeholder.svg?height=60&width=60&text=Truck`}
                  alt="Trucks"
                  width={60}
                  height={60}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <span className="font-medium">Trucks</span>
            </Link>

            {/* Luxury */}
            <Link
              href={`/cars?category=luxury`}
              className="group flex flex-col items-center rounded-lg p-4 text-center transition-all hover:bg-gray-100"
            >
              <div className="mb-3 rounded-full bg-gray-100 p-4 transition-all group-hover:bg-white">
                <Image
                  src={`/placeholder.svg?height=60&width=60&text=Luxury`}
                  alt="Luxury"
                  width={60}
                  height={60}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <span className="font-medium">Luxury</span>
            </Link>

            {/* Electric */}
            <Link
              href={`/cars?category=electric`}
              className="group flex flex-col items-center rounded-lg p-4 text-center transition-all hover:bg-gray-100"
            >
              <div className="mb-3 rounded-full bg-gray-100 p-4 transition-all group-hover:bg-white">
                <Image
                  src={`/placeholder.svg?height=60&width=60&text=Electric`}
                  alt="Electric"
                  width={60}
                  height={60}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <span className="font-medium">Electric</span>
            </Link>

            {/* Hybrid */}
            <Link
              href={`/cars?category=hybrid`}
              className="group flex flex-col items-center rounded-lg p-4 text-center transition-all hover:bg-gray-100"
            >
              <div className="mb-3 rounded-full bg-gray-100 p-4 transition-all group-hover:bg-white">
                <Image
                  src={`/placeholder.svg?height=60&width=60&text=Hybrid`}
                  alt="Hybrid"
                  width={60}
                  height={60}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <span className="font-medium">Hybrid</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="bg-gray-50 py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6 md:mb-8 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Cars</h2>
            <Link href="/cars" className="flex items-center text-primary hover:underline">
              View all <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredCars.map((car) => (
              <Card key={car.id} className="overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image src={car.image || "/placeholder.svg"} alt={car.title} fill className="object-cover" />
                  <div className="absolute bottom-2 left-2 rounded bg-primary px-2 py-1 text-xs font-semibold text-white">
                    {car.condition}
                  </div>
                  {car.featured && (
                    <div className="absolute right-2 top-2 rounded bg-yellow-500 px-2 py-1 text-xs font-semibold text-white">
                      Featured
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-1 text-lg font-semibold">
                    <Link href={`/cars/${car.id}`} className="hover:text-primary">
                      {car.title}
                    </Link>
                  </h3>
                  <p className="mb-3 text-sm text-gray-500">{car.location}</p>
                  <div className="mb-3 flex items-center text-sm">
                    <span className="mr-3">{car.year}</span>
                    <span className="mr-3">{car.mileage}</span>
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">${car.price.toLocaleString()}</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/cars/${car.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 md:mb-8 text-center text-2xl md:text-3xl font-bold">What Our Customers Say</h2>
          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-gray-700">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl md:text-3xl font-bold">Contact Us</h2>
              <p className="mb-6 text-gray-600">
                Have questions about a specific vehicle or need assistance with your car search? Our team is here to
                help you find your perfect match.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-primary" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-primary" />
                  <span>contact@carlistings.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-primary" />
                  <span>123 Auto Drive, Car City, CC 12345</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 md:p-6 shadow-lg">
              <h3 className="mb-4 text-xl font-semibold">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="First Name" required />
                  <Input placeholder="Last Name" required />
                </div>
                <Input placeholder="Email" type="email" required />
                <Input placeholder="Phone" type="tel" />
                <textarea
                  className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your Message"
                  required
                ></textarea>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const categories = [
  { name: "SUVs", slug: "suvs" },
  { name: "Sedans", slug: "sedans" },
  { name: "Trucks", slug: "trucks" },
  { name: "Luxury", slug: "luxury" },
  { name: "Electric", slug: "electric" },
  { name: "Hybrid", slug: "hybrid" },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Sydney",
    rating: 5,
    text: "Found my dream car in just a few days. The process was smooth and the customer service was excellent!",
  },
  {
    name: "Michael Chen",
    location: "Melbourne",
    rating: 4,
    text: "Great selection of vehicles and very transparent pricing. Would definitely recommend to friends and family.",
  },
  {
    name: "Emma Wilson",
    location: "Brisbane",
    rating: 5,
    text: "The team went above and beyond to help me find a car that fit my budget and needs. Very impressed!",
  },
]

// Featured cars data
const featuredCars = [
  {
    id: 1,
    title: "2020 Toyota RAV4 XLE",
    price: 28500,
    year: "2020",
    mileage: "35,210 km",
    transmission: "Auto",
    fuel: "Petrol",
    condition: "Used",
    location: "Sydney, NSW",
    featured: true,
    image: "https://hips.hearstapps.com/hmg-prod/images/2020-toyota-rav4-mmp-1-1570472132.jpg?crop=0.762xw:0.622xh;0.210xw,0.272xh&resize=2048:*",
  },
  {
    id: 2,
    title: "2021 Honda Accord Sport",
    price: 32900,
    year: "2021",
    mileage: "20,150 km",
    transmission: "Auto",
    fuel: "Petrol",
    condition: "Used",
    location: "Melbourne, VIC",
    featured: false,
    image: "https://cdn.jdpower.com/JDPA_2021%20Honda%20Accord%20Touring%20Silver%20Front.jpg",
  },
  {
    id: 3,
    title: "2019 BMW 3 Series",
    price: 39500,
    year: "2019",
    mileage: "45,000 km",
    transmission: "Auto",
    fuel: "Petrol",
    condition: "Used",
    location: "Brisbane, QLD",
    featured: false,
    image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "2022 Tesla Model 3",
    price: 58900,
    year: "2022",
    mileage: "10,500 km",
    transmission: "Auto",
    fuel: "Electric",
    condition: "Used",
    location: "Perth, WA",
    featured: true,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "2018 Ford Mustang GT",
    price: 45000,
    year: "2018",
    mileage: "50,200 km",
    transmission: "Manual",
    fuel: "Petrol",
    condition: "Used",
    location: "Adelaide, SA",
    featured: false,
    image: "https://www.motortrend.com/uploads/sites/5/2018/06/2018-Ford-Mustang-GT-front-three-quarter-in-motion-02.jpg",
  },
  {
    id: 6,
    title: "2021 Hyundai Tucson",
    price: 34500,
    year: "2021",
    mileage: "25,600 km",
    transmission: "Auto",
    fuel: "Petrol",
    condition: "Used",
    location: "Canberra, ACT",
    featured: false,
    image: "https://propakistani.pk/wp-content/uploads/2020/09/Large-43083-2022Tucson-scaled-1-scaled-e1600156513669.jpg",
  },
  {
    id: 7,
    title: "2020 Mercedes-Benz C300",
    price: 42500,
    year: "2020",
    mileage: "28,400 km",
    transmission: "Auto",
    fuel: "Petrol",
    condition: "Used",
    location: "Melbourne, VIC",
    featured: false,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "2021 Audi Q5 Premium",
    price: 47800,
    year: "2021",
    mileage: "15,300 km",
    transmission: "Auto",
    fuel: "Petrol",
    condition: "Used",
    location: "Sydney, NSW",
    featured: false,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800&auto=format&fit=crop",
  },
]

