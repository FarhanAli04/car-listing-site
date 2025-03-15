import Image from "next/image"
import Link from "next/link"
import { Users, Award, ShieldCheck, Car } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-4xl font-bold">Our Story</h1>
              <p className="text-lg text-gray-300">
                We're on a mission to transform the car buying experience by providing transparency, trust, and
                exceptional service to our customers.
              </p>
            </div>
            <div className="relative hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop"
                alt="Team Photo"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
          <p className="mb-8 text-lg text-gray-600">
            At Car Listings, we believe that buying a car should be an exciting and transparent experience. Our mission
            is to connect car buyers with trusted sellers, providing all the tools and information needed to make
            confident decisions. We're committed to transforming the automotive marketplace through innovation,
            integrity, and exceptional customer service.
          </p>
          <div className="flex justify-center">
            <Button asChild>
              <Link href="/cars">Browse Our Cars</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Values</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Customer First</h3>
                <p className="text-gray-600">
                  We put our customers at the center of everything we do, focusing on their needs and providing
                  exceptional service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Transparency</h3>
                <p className="text-gray-600">
                  We believe in complete transparency in all our dealings, providing honest information about every
                  vehicle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our business, from our platform to our customer service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                  <Car className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
                <p className="text-gray-600">
                  We continuously innovate to improve the car buying experience, leveraging technology to solve industry
                  challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Our Journey</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Car Listings was founded in 2015 by a group of automotive enthusiasts who recognized the need for a more
                transparent and user-friendly car buying platform. Frustrated by their own experiences with traditional
                dealerships and classified ads, they set out to create a solution that would address the pain points of
                both buyers and sellers.
              </p>
              <p>
                Starting with just a small team and a handful of listings in Sydney, we've grown to become one of
                Australia's leading automotive marketplaces. Our platform now features thousands of vehicles from
                private sellers and dealerships across the country, with millions of users visiting our site each month.
              </p>
              <p>
                Throughout our growth, we've remained committed to our founding principles of transparency, trust, and
                exceptional service. We've continuously innovated our platform, introducing features like verified
                vehicle histories, detailed search filters, and secure messaging to make the car buying process as
                smooth and stress-free as possible.
              </p>
              <p>
                Today, we're proud to have helped thousands of Australians find their perfect vehicle, and we're just
                getting started. Our vision is to become the most trusted automotive marketplace in the country, known
                for our integrity, innovation, and commitment to customer satisfaction.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-6">
              <Image
                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?q=80&w=300&auto=format&fit=crop"
                alt="Company History 1"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=300&auto=format&fit=crop"
                alt="Company History 2"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="mt-6 space-y-6 sm:mt-12">
              <Image
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=300&auto=format&fit=crop"
                alt="Company History 3"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?q=80&w=300&auto=format&fit=crop"
                alt="Company History 4"
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Meet Our Leadership Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6">
                  <div className="mb-4 aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                  <p className="mb-3 text-primary">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">What Our Customers Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-gray-600">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
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

      {/* CTA Section */}
      <div className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Find Your Perfect Car?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Join thousands of satisfied customers who have found their dream cars through our platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/cars">Browse Cars</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample data
const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "Chief Executive Officer",
    bio: "With over 15 years of experience in the automotive industry, Sarah leads our company with a passion for innovation and customer satisfaction.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
  {
    name: "Michael Chen",
    position: "Chief Technology Officer",
    bio: "Michael brings extensive expertise in software development and is responsible for our cutting-edge platform and technological innovations.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "David Wilson",
    position: "Chief Marketing Officer",
    bio: "David has a proven track record in digital marketing and is dedicated to building our brand and connecting with car buyers nationwide.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Emma Rodriguez",
    position: "Customer Experience Director",
    bio: "Emma ensures that every customer interaction exceeds expectations, leading our support team with empathy and efficiency.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
]

const testimonials = [
  {
    name: "James Thompson",
    location: "Sydney",
    rating: 5,
    text: "Car Listings made finding my dream car so easy. The detailed search filters helped me narrow down exactly what I wanted, and the seller was responsive and professional.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Olivia Parker",
    location: "Melbourne",
    rating: 5,
    text: "I was hesitant about buying a car online, but Car Listings provided all the information I needed to make a confident decision. The vehicle history report was particularly helpful.",
    avatar: "https://randomuser.me/api/portraits/women/62.jpg",
  },
  {
    name: "Robert Kim",
    location: "Brisbane",
    rating: 4,
    text: "Selling my car through Car Listings was quick and hassle-free. I received multiple inquiries within days and sold at a fair price. Would definitely use again.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
]

