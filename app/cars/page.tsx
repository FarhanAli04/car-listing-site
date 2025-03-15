"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Filter, Grid3X3, List } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function CarsPage() {
  // State for search and filters
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState("any-price")
  const [yearFilter, setYearFilter] = useState("any-year")
  const [bodyType, setBodyType] = useState("any-body")
  const [sortBy, setSortBy] = useState("newest")
  const [filteredCars, setFilteredCars] = useState(cars)

  // Apply filters when any filter changes
  useEffect(() => {
    let results = [...cars]

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      results = results.filter(
        (car) =>
          car.title.toLowerCase().includes(term) ||
          car.location.toLowerCase().includes(term) ||
          car.fuel.toLowerCase().includes(term) ||
          car.transmission.toLowerCase().includes(term),
      )
    }

    // Apply price filter
    if (priceRange !== "any-price") {
      switch (priceRange) {
        case "under-10000":
          results = results.filter((car) => car.price < 10000)
          break
        case "10000-20000":
          results = results.filter((car) => car.price >= 10000 && car.price <= 20000)
          break
        case "20000-30000":
          results = results.filter((car) => car.price >= 20000 && car.price <= 30000)
          break
        case "30000-50000":
          results = results.filter((car) => car.price >= 30000 && car.price <= 50000)
          break
        case "over-50000":
          results = results.filter((car) => car.price > 50000)
          break
        default:
          if (priceRange.includes("-")) {
            const [min, max] = priceRange.split("-")
            if (min === "min") {
              results = results.filter((car) => car.price <= Number.parseInt(max))
            } else if (max === "max") {
              results = results.filter((car) => car.price >= Number.parseInt(min))
            } else {
              results = results.filter((car) => car.price >= Number.parseInt(min) && car.price <= Number.parseInt(max))
            }
          }
          break
      }
    }

    // Apply year filter
    if (yearFilter !== "any-year" && yearFilter !== "older") {
      results = results.filter((car) => car.year.includes(yearFilter))
    } else if (yearFilter === "older") {
      results = results.filter((car) => Number.parseInt(car.year) < 2018)
    }

    // Apply body type filter
    if (bodyType !== "any-body") {
      // In a real app, we would have a bodyType property on each car
      // For this demo, we'll just filter based on some assumptions
      if (bodyType === "suv" && results.some((car) => car.title.includes("RAV4"))) {
        results = results.filter((car) => car.title.includes("RAV4"))
      } else if (bodyType === "sedan" && results.some((car) => car.title.includes("Accord"))) {
        results = results.filter((car) => car.title.includes("Accord") || car.title.includes("Series"))
      } else {
        results = results.filter((car) => car.title.toLowerCase().includes(bodyType))
      }
    }

    // Apply sorting
    switch (sortBy) {
      case "newest":
        results.sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year))
        break
      case "oldest":
        results.sort((a, b) => Number.parseInt(a.year) - Number.parseInt(b.year))
        break
      case "price-low":
        results.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        results.sort((a, b) => b.price - a.price)
        break
      case "mileage-low":
        results.sort((a, b) => {
          const mileageA = Number.parseInt(a.mileage.replace(/,/g, ""))
          const mileageB = Number.parseInt(b.mileage.replace(/,/g, ""))
          return mileageA - mileageB
        })
        break
    }

    setFilteredCars(results)
  }, [searchTerm, priceRange, yearFilter, bodyType, sortBy])

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault()
    // The search is already applied via the useEffect
  }

  // Handle filter reset
  const handleResetFilters = () => {
    setSearchTerm("")
    setPriceRange("any-price")
    setYearFilter("any-year")
    setBodyType("any-body")
    setSortBy("newest")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Find Your Car</h1>
          <p className="text-gray-500">Browse our selection of quality vehicles</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-6 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 rounded-lg bg-white p-4 shadow-sm">
          <div className="flex w-full sm:w-auto flex-1 flex-wrap items-center gap-4">
            <form onSubmit={handleSearch} className="w-full sm:w-auto sm:flex-1 max-w-xs">
              <Input
                placeholder="Search by make, model, or keyword"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
                aria-label="Search cars"
              />
            </form>

            <div className="hidden md:flex md:items-center md:gap-2">
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any-price">Any Price</SelectItem>
                  <SelectItem value="under-10000">Under $10,000</SelectItem>
                  <SelectItem value="10000-20000">$10,000 - $20,000</SelectItem>
                  <SelectItem value="20000-30000">$20,000 - $30,000</SelectItem>
                  <SelectItem value="30000-50000">$30,000 - $50,000</SelectItem>
                  <SelectItem value="over-50000">Over $50,000</SelectItem>
                </SelectContent>
              </Select>

              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any-year">Any Year</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2019">2019</SelectItem>
                  <SelectItem value="older">2018 & Older</SelectItem>
                </SelectContent>
              </Select>

              <Select value={bodyType} onValueChange={setBodyType}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Body Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any-body">Any Body Type</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="hatchback">Hatchback</SelectItem>
                  <SelectItem value="truck">Truck</SelectItem>
                  <SelectItem value="coupe">Coupe</SelectItem>
                  <SelectItem value="convertible">Convertible</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto md:hidden">
                  <Filter className="mr-2 h-4 w-4" /> Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>Narrow down your car search</SheetDescription>
                </SheetHeader>
                <div className="mt-6 grid gap-6">
                  {/* Mobile Filters */}
                  <div>
                    <h3 className="mb-2 font-medium">Price Range</h3>
                    <Select value={priceRange} onValueChange={setPriceRange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any-price">Any Price</SelectItem>
                        <SelectItem value="under-10000">Under $10,000</SelectItem>
                        <SelectItem value="10000-20000">$10,000 - $20,000</SelectItem>
                        <SelectItem value="20000-30000">$20,000 - $30,000</SelectItem>
                        <SelectItem value="30000-50000">$30,000 - $50,000</SelectItem>
                        <SelectItem value="over-50000">Over $50,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <h3 className="mb-2 font-medium">Year</h3>
                    <Select value={yearFilter} onValueChange={setYearFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any-year">Any Year</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2019">2019</SelectItem>
                        <SelectItem value="older">2018 & Older</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <h3 className="mb-2 font-medium">Body Type</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {["SUV", "Sedan", "Hatchback", "Truck", "Coupe", "Convertible"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox
                            id={`body-${type.toLowerCase()}`}
                            checked={bodyType === type.toLowerCase()}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setBodyType(type.toLowerCase())
                              } else if (bodyType === type.toLowerCase()) {
                                setBodyType("any-body")
                              }
                            }}
                          />
                          <label
                            htmlFor={`body-${type.toLowerCase()}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 font-medium">Make</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {["Toyota", "Honda", "Ford", "BMW", "Mercedes", "Audi", "Tesla", "Hyundai"].map((make) => (
                        <div key={make} className="flex items-center space-x-2">
                          <Checkbox
                            id={`make-${make.toLowerCase()}`}
                            checked={searchTerm === make}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSearchTerm(make)
                              } else if (searchTerm === make) {
                                setSearchTerm("")
                              }
                            }}
                          />
                          <label
                            htmlFor={`make-${make.toLowerCase()}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {make}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 font-medium">Fuel Type</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {["Petrol", "Diesel", "Electric", "Hybrid"].map((fuel) => (
                        <div key={fuel} className="flex items-center space-x-2">
                          <Checkbox
                            id={`fuel-${fuel.toLowerCase()}`}
                            checked={searchTerm === fuel.toLowerCase()}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSearchTerm(fuel.toLowerCase())
                              } else if (searchTerm === fuel.toLowerCase()) {
                                setSearchTerm("")
                              }
                            }}
                          />
                          <label
                            htmlFor={`fuel-${fuel.toLowerCase()}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {fuel}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={handleResetFilters} type="button">
                      Reset
                    </Button>
                    <Button
                      type="button"
                      onClick={() => {
                        // The filters are already applied via useEffect
                        // Close the sheet after applying filters
                        document.querySelector("[data-radix-collection-item]")?.click()
                      }}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex w-full sm:w-auto items-center gap-2 mt-4 sm:mt-0">
            <Button variant="outline" size="icon" className="hidden md:flex">
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="hidden md:flex">
              <List className="h-4 w-4" />
            </Button>
            <Select value={sortBy} onValueChange={setSortBy} className="w-full sm:w-[160px]">
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="mileage-low">Mileage: Low to High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[300px_1fr]">
          {/* Desktop Filters */}
          <div className="hidden md:block">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">Filters</h2>

              <Accordion type="multiple" defaultValue={["price", "make", "body", "fuel"]}>
                <AccordionItem value="price">
                  <AccordionTrigger>Price Range</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          placeholder="Min"
                          type="number"
                          onChange={(e) => {
                            const value = e.target.value
                            if (value && !isNaN(Number.parseInt(value))) {
                              // Apply min price filter logic here
                              const newPriceRange =
                                value === ""
                                  ? "any-price"
                                  : priceRange === "any-price"
                                    ? `${value}-max`
                                    : `${value}-${priceRange.split("-")[1]}`
                              setPriceRange(newPriceRange)
                            }
                          }}
                        />
                        <Input
                          placeholder="Max"
                          type="number"
                          onChange={(e) => {
                            const value = e.target.value
                            if (value && !isNaN(Number.parseInt(value))) {
                              // Apply max price filter logic here
                              const newPriceRange =
                                value === ""
                                  ? "any-price"
                                  : priceRange === "any-price"
                                    ? `min-${value}`
                                    : `${priceRange.split("-")[0]}-${value}`
                              setPriceRange(newPriceRange)
                            }
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        {[
                          { label: "Under $10,000", value: "under-10000" },
                          { label: "$10,000 - $20,000", value: "10000-20000" },
                          { label: "$20,000 - $30,000", value: "20000-30000" },
                          { label: "$30,000 - $50,000", value: "30000-50000" },
                          { label: "Over $50,000", value: "over-50000" },
                        ].map((range) => (
                          <div key={range.value} className="flex items-center space-x-2">
                            <Checkbox
                              id={`price-${range.value}`}
                              checked={priceRange === range.value}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setPriceRange(range.value)
                                } else if (priceRange === range.value) {
                                  setPriceRange("any-price")
                                }
                              }}
                            />
                            <label
                              htmlFor={`price-${range.value}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {range.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="make">
                  <AccordionTrigger>Make</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {[
                        "Toyota",
                        "Honda",
                        "Ford",
                        "BMW",
                        "Mercedes",
                        "Audi",
                        "Tesla",
                        "Hyundai",
                        "Mazda",
                        "Volkswagen",
                      ].map((make) => (
                        <div key={make} className="flex items-center space-x-2">
                          <Checkbox
                            id={`filter-make-${make.toLowerCase()}`}
                            onCheckedChange={(checked) => {
                              // In a real app, you would have a makeFilter state
                              // For this demo, we'll filter based on the car title
                              if (checked) {
                                setSearchTerm(make)
                              } else if (searchTerm === make) {
                                setSearchTerm("")
                              }
                            }}
                            checked={searchTerm === make}
                          />
                          <label
                            htmlFor={`filter-make-${make.toLowerCase()}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {make}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="body">
                  <AccordionTrigger>Body Type</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {[
                        { label: "SUV", value: "suv" },
                        { label: "Sedan", value: "sedan" },
                        { label: "Hatchback", value: "hatchback" },
                        { label: "Truck", value: "truck" },
                        { label: "Coupe", value: "coupe" },
                        { label: "Convertible", value: "convertible" },
                        { label: "Wagon", value: "wagon" },
                        { label: "Van", value: "van" },
                      ].map((type) => (
                        <div key={type.value} className="flex items-center space-x-2">
                          <Checkbox
                            id={`filter-body-${type.value}`}
                            checked={bodyType === type.value}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setBodyType(type.value)
                              } else if (bodyType === type.value) {
                                setBodyType("any-body")
                              }
                            }}
                          />
                          <label
                            htmlFor={`filter-body-${type.value}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {type.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="fuel">
                  <AccordionTrigger>Fuel Type</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {["Petrol", "Diesel", "Electric", "Hybrid", "Plug-in Hybrid"].map((fuel) => (
                        <div key={fuel} className="flex items-center space-x-2">
                          <Checkbox
                            id={`filter-fuel-${fuel.toLowerCase()}`}
                            onCheckedChange={(checked) => {
                              // In a real app, you would have a fuelFilter state
                              // For this demo, we'll filter based on the car fuel property
                              if (checked) {
                                // Find cars with this fuel type
                                const fuelTerm = fuel.toLowerCase()
                                setSearchTerm(fuelTerm)
                              } else if (searchTerm === fuel.toLowerCase()) {
                                setSearchTerm("")
                              }
                            }}
                            checked={searchTerm === fuel.toLowerCase()}
                          />
                          <label
                            htmlFor={`filter-fuel-${fuel.toLowerCase()}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {fuel}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="year">
                  <AccordionTrigger>Year</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          placeholder="From"
                          type="number"
                          onChange={(e) => {
                            const value = e.target.value
                            if (value && !isNaN(Number.parseInt(value))) {
                              // Apply year filter logic
                              // For simplicity, we'll just set the year filter to the input value
                              setYearFilter(value)
                            }
                          }}
                        />
                        <Input
                          placeholder="To"
                          type="number"
                          onChange={(e) => {
                            const value = e.target.value
                            if (value && !isNaN(Number.parseInt(value))) {
                              // In a real app, you would handle year range
                              // For this demo, we'll just use the "To" value
                              setYearFilter(value)
                            }
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        {[
                          { label: "2023", value: "2023" },
                          { label: "2022", value: "2022" },
                          { label: "2021", value: "2021" },
                          { label: "2020", value: "2020" },
                          { label: "2019", value: "2019" },
                          { label: "2018 & Older", value: "older" },
                        ].map((year) => (
                          <div key={year.value} className="flex items-center space-x-2">
                            <Checkbox
                              id={`filter-year-${year.value}`}
                              checked={yearFilter === year.value}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setYearFilter(year.value)
                                } else if (yearFilter === year.value) {
                                  setYearFilter("any-year")
                                }
                              }}
                            />
                            <label
                              htmlFor={`filter-year-${year.value}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {year.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={handleResetFilters}>
                  Reset All
                </Button>
                <Button
                  onClick={() => {
                    // The filters are already applied via useEffect
                    // This button can be used to trigger any additional filter logic
                    // For example, you might want to save the current filters or update the URL

                    // For demonstration, we'll just log the current filters
                    console.log("Applied filters:", {
                      searchTerm,
                      priceRange,
                      yearFilter,
                      bodyType,
                      sortBy,
                    })
                  }}
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Car Listings */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-500">
                Showing {filteredCars.length} of {cars.length} results
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCars.map((car) => (
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
                    <div className="mb-3 grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <span className="text-gray-500">Year:</span>
                        <span className="ml-1 font-medium">{car.year}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500">Mileage:</span>
                        <span className="ml-1 font-medium">{car.mileage}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500">Fuel:</span>
                        <span className="ml-1 font-medium">{car.fuel}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500">Trans:</span>
                        <span className="ml-1 font-medium">{car.transmission}</span>
                      </div>
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

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-primary text-white hover:bg-primary/90">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  4
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample data
const cars = [
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
    image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=800&auto=format&fit=crop",
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
    image: "https://media.ed.edmunds-media.com/hyundai/tucson/2020/oem/2020_hyundai_tucson_4dr-suv_ultimate_fq_oem_1_1600.jpg",
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
    featured: true,
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
  {
    id: 9,
    title: "2019 Mazda CX-5 Touring",
    price: 29700,
    year: "2019",
    mileage: "42,100 km",
    transmission: "Auto",
    fuel: "Petrol",
    condition: "Used",
    location: "Brisbane, QLD",
    featured: false,
    image: "https://www.cnet.com/a/img/resize/2eb5aa7b6f3f3d3f804f87ce50d64cbd5e8fba7b/hub/2019/01/03/579d1c89-4780-4475-9ece-e03c857dcca8/2019-mazda-cx-5-ogi.jpg?auto=webp&fit=crop&height=675&width=1200",
  },
  {
    id: 10,
    title: "2022 Kia Sportage GT-Line",
    price: 36900,
    year: "2022",
    mileage: "12,800 km",
    transmission: "Auto",
    fuel: "Petrol",
    condition: "Used",
    location: "Perth, WA",
    featured: true,
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "2020 Volkswagen Golf GTI",
    price: 38500,
    year: "2020",
    mileage: "30,600 km",
    transmission: "Auto",
    fuel: "Petrol",
    condition: "Used",
    location: "Adelaide, SA",
    featured: false,
    image: "https://hips.hearstapps.com/hmg-prod/images/2020-volkswagen-golf-gti-mmp-1-1565810908.jpg?crop=1.00xw:0.816xh;0,0.141xh&resize=1200:*",
  },
  {
    id: 12,
    title: "2021 Subaru Outback Premium",
    price: 35700,
    year: "2021",
    mileage: "22,400 km",
    transmission: "Auto",
    fuel: "Petrol",
    condition: "Used",
    location: "Hobart, TAS",
    featured: false,
    image: "https://images.unsplash.com/photo-1626443252351-4f3a387d6d43?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 13,
    title: "2019 Lexus RX 350",
    price: 52300,
    year: "2019",
    mileage: "38,900 km",
    transmission: "Auto",
    fuel: "Petrol",
    condition: "Used",
    location: "Darwin, NT",
    featured: true,
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 14,
    title: "2022 Nissan Pathfinder",
    price: 44900,
    year: "2022",
    mileage: "8,700 km",
    transmission: "Auto",
    fuel: "Petrol",
    condition: "Used",
    location: "Gold Coast, QLD",
    featured: false,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 15,
    title: "2020 Jeep Grand Cherokee",
    price: 47500,
    year: "2020",
    mileage: "32,100 km",
    transmission: "Auto",
    fuel: "Diesel",
    condition: "Used",
    location: "Newcastle, NSW",
    featured: false,
    image: "https://www.cnet.com/a/img/resize/e758f545daf337f94d7e52ef172e2eb90bfa4c34/hub/2019/09/05/9fde721e-2cd8-4575-8bc3-628c812f0a8e/ogi1-2020-jeep-grand-cherokee-001.jpg?auto=webp&fit=crop&height=675&width=1200",
  },
]

