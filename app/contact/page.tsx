import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-12 md:py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-gray-300">
            Have questions about our vehicles or services? Our team is here to help you find your perfect car.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold">Get In Touch</h2>
            <div className="space-y-4 md:space-y-6">
              <Card>
                <CardContent className="flex items-start gap-4 p-4 md:p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="mt-1 text-gray-500">(02) 9876 5432</p>
                    <p className="text-gray-500">1800 CAR FIND</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-4 md:p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="mt-1 text-gray-500">info@carlistings.com</p>
                    <p className="text-gray-500">support@carlistings.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-4 md:p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="mt-1 text-gray-500">123 Auto Drive</p>
                    <p className="text-gray-500">Sydney, NSW 2000</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-4 md:p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="mt-1 text-gray-500">Monday - Friday: 9am - 6pm</p>
                    <p className="text-gray-500">Saturday: 10am - 4pm</p>
                    <p className="text-gray-500">Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-4 md:p-6">
                <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold">Send Us a Message</h2>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                        Phone
                      </label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="What is this regarding?" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" required />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 md:mt-12">
          <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold">Our Location</h2>
          <div className="h-[300px] md:h-[400px] overflow-hidden rounded-lg border">
            <Image
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?q=80&w=1200&auto=format&fit=crop"
              alt="Map Location"
              width={1200}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8 md:mt-12">
          <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="mb-2 text-lg font-semibold">How do I schedule a test drive?</h3>
                <p className="text-gray-600">
                  You can schedule a test drive by contacting us directly through phone, email, or by filling out the
                  contact form on this page. Alternatively, you can also request a test drive directly from any vehicle
                  listing page.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="mb-2 text-lg font-semibold">Do you offer financing options?</h3>
                <p className="text-gray-600">
                  Yes, we offer a variety of financing options to suit different needs and budgets. Our finance team
                  works with multiple lenders to help you find the best rates and terms for your situation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="mb-2 text-lg font-semibold">Can I trade in my current vehicle?</h3>
                <p className="text-gray-600">
                  We accept trade-ins and will provide you with a fair market value for your current vehicle. This
                  amount can then be applied toward the purchase of your new car.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="mb-2 text-lg font-semibold">Do you ship vehicles interstate?</h3>
                <p className="text-gray-600">
                  Yes, we can arrange for vehicle shipping to any location in Australia. Shipping costs will vary based
                  on distance and specific requirements. Contact our team for a detailed quote.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

