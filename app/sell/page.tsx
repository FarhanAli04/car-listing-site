import { AccordionContent } from "@/components/ui/accordion"
import { AccordionTrigger } from "@/components/ui/accordion"
import { AccordionItem } from "@/components/ui/accordion"
import { Accordion } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"
import { Check, Upload, Info, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"

export default function SellPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">Sell Your Car</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            List your vehicle on our platform and connect with thousands of potential buyers. Our simple process makes
            selling your car quick and hassle-free.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* How It Works Section */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Create Your Listing</h3>
                <p className="text-gray-600">
                  Fill out our easy-to-use form with details about your vehicle, upload photos, and set your price.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Connect with Buyers</h3>
                <p className="text-gray-600">
                  Receive inquiries from interested buyers through our secure messaging system or by phone.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Complete the Sale</h3>
                <p className="text-gray-600">
                  Arrange viewings, negotiate the price, and finalize the sale with our helpful documentation templates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Listing Options */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold">Choose Your Listing Package</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>For casual sellers</CardDescription>
                <div className="mt-2 text-3xl font-bold">Free</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>30-day listing</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>Up to 5 photos</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>Basic listing details</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>Email contact</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full" variant="outline">
                  Select Basic
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardHeader>
                <div className="mb-2 w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Most Popular
                </div>
                <CardTitle>Premium</CardTitle>
                <CardDescription>For faster results</CardDescription>
                <div className="mt-2 text-3xl font-bold">$29.99</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>60-day listing</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>Up to 20 photos</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>Featured in search results</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>Phone and email contact</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>Vehicle history report</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full">Select Premium</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle>Ultimate</CardTitle>
                <CardDescription>For serious sellers</CardDescription>
                <div className="mt-2 text-3xl font-bold">$49.99</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>90-day listing</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>Unlimited photos</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>Top of search results</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>Featured on homepage</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>Professional photography</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-green-500" />
                    <span>Dedicated sales advisor</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full" variant="outline">
                  Select Ultimate
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Listing Form */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold">Create Your Listing</h2>

          <Tabs defaultValue="vehicle-details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="vehicle-details">Vehicle Details</TabsTrigger>
              <TabsTrigger value="photos">Photos & Description</TabsTrigger>
              <TabsTrigger value="contact">Contact & Pricing</TabsTrigger>
            </TabsList>

            <TabsContent value="vehicle-details" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Vehicle Information</CardTitle>
                  <CardDescription>Enter the basic details about your vehicle</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="make" className="text-sm font-medium">
                          Make
                        </label>
                        <Select>
                          <SelectTrigger id="make">
                            <SelectValue placeholder="Select make" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="toyota">Toyota</SelectItem>
                            <SelectItem value="honda">Honda</SelectItem>
                            <SelectItem value="ford">Ford</SelectItem>
                            <SelectItem value="bmw">BMW</SelectItem>
                            <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                            <SelectItem value="audi">Audi</SelectItem>
                            <SelectItem value="tesla">Tesla</SelectItem>
                            <SelectItem value="hyundai">Hyundai</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="model" className="text-sm font-medium">
                          Model
                        </label>
                        <Input id="model" placeholder="e.g. Corolla, Civic, F-150" />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="space-y-2">
                        <label htmlFor="year" className="text-sm font-medium">
                          Year
                        </label>
                        <Select>
                          <SelectTrigger id="year">
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                              <SelectItem key={year} value={year.toString()}>
                                {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="body-type" className="text-sm font-medium">
                          Body Type
                        </label>
                        <Select>
                          <SelectTrigger id="body-type">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="suv">SUV</SelectItem>
                            <SelectItem value="sedan">Sedan</SelectItem>
                            <SelectItem value="hatchback">Hatchback</SelectItem>
                            <SelectItem value="truck">Truck</SelectItem>
                            <SelectItem value="coupe">Coupe</SelectItem>
                            <SelectItem value="convertible">Convertible</SelectItem>
                            <SelectItem value="wagon">Wagon</SelectItem>
                            <SelectItem value="van">Van</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="condition" className="text-sm font-medium">
                          Condition
                        </label>
                        <Select>
                          <SelectTrigger id="condition">
                            <SelectValue placeholder="Select condition" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="like-new">Like New</SelectItem>
                            <SelectItem value="excellent">Excellent</SelectItem>
                            <SelectItem value="good">Good</SelectItem>
                            <SelectItem value="fair">Fair</SelectItem>
                            <SelectItem value="salvage">Salvage</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="space-y-2">
                        <label htmlFor="mileage" className="text-sm font-medium">
                          Mileage (km)
                        </label>
                        <Input id="mileage" type="number" placeholder="e.g. 45000" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="transmission" className="text-sm font-medium">
                          Transmission
                        </label>
                        <Select>
                          <SelectTrigger id="transmission">
                            <SelectValue placeholder="Select transmission" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="automatic">Automatic</SelectItem>
                            <SelectItem value="manual">Manual</SelectItem>
                            <SelectItem value="cvt">CVT</SelectItem>
                            <SelectItem value="semi-auto">Semi-Automatic</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="fuel-type" className="text-sm font-medium">
                          Fuel Type
                        </label>
                        <Select>
                          <SelectTrigger id="fuel-type">
                            <SelectValue placeholder="Select fuel type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="petrol">Petrol</SelectItem>
                            <SelectItem value="diesel">Diesel</SelectItem>
                            <SelectItem value="electric">Electric</SelectItem>
                            <SelectItem value="hybrid">Hybrid</SelectItem>
                            <SelectItem value="plugin-hybrid">Plug-in Hybrid</SelectItem>
                            <SelectItem value="lpg">LPG</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="exterior-color" className="text-sm font-medium">
                          Exterior Color
                        </label>
                        <Input id="exterior-color" placeholder="e.g. Silver, Black, White" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="interior-color" className="text-sm font-medium">
                          Interior Color
                        </label>
                        <Input id="interior-color" placeholder="e.g. Black, Beige, Gray" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="vin" className="text-sm font-medium">
                        VIN (Vehicle Identification Number)
                      </label>
                      <Input id="vin" placeholder="e.g. 1HGCM82633A123456" />
                      <p className="text-xs text-gray-500">
                        The VIN can usually be found on your registration or insurance documents.
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <Button>Continue to Photos & Description</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="photos" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Photos & Description</CardTitle>
                  <CardDescription>Add photos and describe your vehicle</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Upload Photos</label>
                      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                        <div className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4 hover:bg-gray-50">
                          <Upload className="mb-2 h-8 w-8 text-gray-400" />
                          <p className="text-center text-sm text-gray-500">Main Photo</p>
                          <p className="text-center text-xs text-gray-400">Click to upload</p>
                        </div>

                        {Array.from({ length: 5 }).map((_, index) => (
                          <div
                            key={index}
                            className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4 hover:bg-gray-50"
                          >
                            <Upload className="mb-2 h-8 w-8 text-gray-400" />
                            <p className="text-center text-sm text-gray-500">Additional Photo</p>
                            <p className="text-center text-xs text-gray-400">Click to upload</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500">
                        Upload clear photos of the exterior, interior, and any notable features or imperfections.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="title" className="text-sm font-medium">
                        Listing Title
                      </label>
                      <Input id="title" placeholder="e.g. 2020 Toyota RAV4 XLE AWD - Low KM, One Owner" />
                      <p className="text-xs text-gray-500">
                        A good title includes year, make, model, trim, and key selling points.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="description" className="text-sm font-medium">
                        Description
                      </label>
                      <Textarea
                        id="description"
                        placeholder="Describe your vehicle in detail. Include information about its condition, features, maintenance history, and any modifications."
                        className="min-h-[200px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Features</label>
                      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                        {[
                          "Air Conditioning",
                          "Power Windows",
                          "Power Locks",
                          "Cruise Control",
                          "Navigation System",
                          "Bluetooth",
                          "Backup Camera",
                          "Sunroof/Moonroof",
                          "Leather Seats",
                          "Heated Seats",
                          "Third Row Seating",
                          "Alloy Wheels",
                          "Tow Package",
                        ].map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <Checkbox id={`feature-${feature.toLowerCase().replace(/\s+/g, "-")}`} />
                            <label
                              htmlFor={`feature-${feature.toLowerCase().replace(/\s+/g, "-")}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {feature}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline">Back to Vehicle Details</Button>
                      <Button>Continue to Contact & Pricing</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact & Pricing</CardTitle>
                  <CardDescription>Set your price and contact preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="price" className="text-sm font-medium">
                        Asking Price ($)
                      </label>
                      <Input id="price" type="number" placeholder="e.g. 25000" />
                      <div className="flex items-center space-x-2">
                        <Checkbox id="negotiable" />
                        <label
                          htmlFor="negotiable"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Price is negotiable
                        </label>
                      </div>
                    </div>

                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertTitle>Pricing Tip</AlertTitle>
                      <AlertDescription>
                        Based on similar vehicles in your area, the suggested price range is $24,000 - $28,000.
                      </AlertDescription>
                    </Alert>

                    <Separator />

                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Contact Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="Your email address" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <Input id="phone" type="tel" placeholder="Your phone number" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="location" className="text-sm font-medium">
                        Location
                      </label>
                      <Input id="location" placeholder="City, State/Province" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Contact Preferences</label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="contact-email" defaultChecked />
                          <label
                            htmlFor="contact-email"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Allow email contact
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="contact-phone" defaultChecked />
                          <label
                            htmlFor="contact-phone"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Allow phone contact
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="contact-text" />
                          <label
                            htmlFor="contact-text"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Allow text messages
                          </label>
                        </div>
                      </div>
                    </div>

                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Important</AlertTitle>
                      <AlertDescription>
                        By submitting this listing, you confirm that all information provided is accurate and that you
                        are the legal owner of the vehicle or authorized to sell it.
                      </AlertDescription>
                    </Alert>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary hover:underline">
                          Terms and Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline">Back to Photos & Description</Button>
                      <Button>Submit Listing</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold">Success Stories</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "David Wilson",
                car: "2018 BMW X5",
                days: 4,
                quote:
                  "I listed my BMW on a Thursday and had it sold by Monday! The process was incredibly smooth and I got a great price.",
              },
              {
                name: "Sarah Thompson",
                car: "2020 Honda CR-V",
                days: 7,
                quote:
                  "As a first-time seller, I was nervous about the process. The step-by-step listing guide made it easy, and I sold my car within a week.",
              },
              {
                name: "Michael Rodriguez",
                car: "2019 Ford F-150",
                days: 3,
                quote:
                  "The premium listing was worth every penny. My truck was featured on the homepage and I had multiple offers within days.",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">Sold: {testimonial.car}</p>
                    </div>
                  </div>
                  <p className="mb-2 text-gray-700">"{testimonial.quote}"</p>
                  <p className="text-sm font-medium text-primary">Sold in {testimonial.days} days</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How much does it cost to list my car?",
                  answer:
                    "We offer three listing options: Basic (free), Premium ($29.99), and Ultimate ($49.99). Each offers different features and visibility options to help you sell your car faster.",
                },
                {
                  question: "How long will my listing be active?",
                  answer:
                    "Depending on your package, listings remain active for 30 days (Basic), 60 days (Premium), or 90 days (Ultimate). You can renew or upgrade your listing at any time.",
                },
                {
                  question: "What information do I need to create a listing?",
                  answer:
                    "You'll need basic vehicle details (make, model, year, mileage), photos of your car, a description highlighting key features, and your contact information. Having the VIN and service history available will help create a more trustworthy listing.",
                },
                {
                  question: "How do I handle test drives and viewings?",
                  answer:
                    "We recommend meeting potential buyers in public places during daylight hours. Always verify their driver's license before test drives and consider having a friend accompany you. Our platform allows you to communicate with buyers to arrange convenient and safe viewing times.",
                },
                {
                  question: "What documents do I need to sell my car?",
                  answer:
                    "You'll need the vehicle title (free of liens), service records, a bill of sale, and release of liability form. We provide templates for the bill of sale and release of liability in your seller dashboard.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

