import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Find answers to common questions about our services, car buying process, and more.
          </p>

          <div className="mx-auto mt-8 max-w-md">
            <div className="relative">
              <Input
                placeholder="Search for answers..."
                className="bg-white/10 pl-10 text-white placeholder:text-gray-300"
              />
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-300" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="buying">Buying</TabsTrigger>
            <TabsTrigger value="selling">Selling</TabsTrigger>
            <TabsTrigger value="financing">Financing</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <div className="rounded-lg border bg-white p-6">
              <h2 className="mb-6 text-2xl font-bold">General Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {generalFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="buying">
            <div className="rounded-lg border bg-white p-6">
              <h2 className="mb-6 text-2xl font-bold">Buying a Car</h2>
              <Accordion type="single" collapsible className="w-full">
                {buyingFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="selling">
            <div className="rounded-lg border bg-white p-6">
              <h2 className="mb-6 text-2xl font-bold">Selling Your Car</h2>
              <Accordion type="single" collapsible className="w-full">
                {sellingFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="financing">
            <div className="rounded-lg border bg-white p-6">
              <h2 className="mb-6 text-2xl font-bold">Financing & Insurance</h2>
              <Accordion type="single" collapsible className="w-full">
                {financingFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="support">
            <div className="rounded-lg border bg-white p-6">
              <h2 className="mb-6 text-2xl font-bold">Customer Support</h2>
              <Accordion type="single" collapsible className="w-full">
                {supportFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 rounded-lg bg-primary/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Still Have Questions?</h2>
          <p className="mb-6 text-gray-600">
            Our customer support team is here to help you with any questions you may have.
          </p>
          <div className="flex justify-center gap-4">
            <Button>Contact Support</Button>
            <Button variant="outline">Visit Help Center</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample FAQ data
const generalFAQs = [
  {
    question: "What is Car Listings?",
    answer:
      "Car Listings is an online marketplace that connects car buyers with sellers. We provide a platform for individuals and dealerships to list their vehicles for sale, and for buyers to browse, compare, and purchase cars with ease.",
  },
  {
    question: "How do I create an account?",
    answer:
      "Creating an account is simple. Click on the 'Sign Up' button in the top right corner of the homepage, fill in your details, and verify your email address. Once verified, you can start browsing cars, save favorites, and contact sellers.",
  },
  {
    question: "Is Car Listings available nationwide?",
    answer:
      "Yes, Car Listings is available across all of Australia. You can search for vehicles in any state or territory, and filter results based on your location preferences.",
  },
  {
    question: "Are all listings verified?",
    answer:
      "We take listing quality seriously. While we cannot physically inspect every vehicle, we have measures in place to verify seller information and flag suspicious listings. We also encourage buyers to perform their due diligence before making a purchase.",
  },
  {
    question: "How do I report a suspicious listing?",
    answer:
      "If you come across a listing that seems suspicious or fraudulent, please click the 'Report Listing' button on the listing page. Our team will review the report and take appropriate action.",
  },
]

const buyingFAQs = [
  {
    question: "How do I search for a car?",
    answer:
      "You can search for cars using the search bar on our homepage or by browsing through categories. Use filters to narrow down results based on make, model, price range, year, body type, and more.",
  },
  {
    question: "Can I test drive a car before buying?",
    answer:
      "Yes, we highly recommend test driving a car before purchasing. You can arrange a test drive directly with the seller through our messaging system or by contacting them via the provided phone number.",
  },
  {
    question: "How do I know if a car has a clean history?",
    answer:
      "Many listings include vehicle history reports. If not provided, we recommend asking the seller for one or purchasing a report from a reputable provider using the vehicle's VIN number before making a decision.",
  },
  {
    question: "Is negotiation on price possible?",
    answer:
      "Yes, price negotiation is common in car buying. You can discuss the price directly with the seller through our messaging system or during in-person meetings.",
  },
  {
    question: "What should I check when inspecting a used car?",
    answer:
      "We recommend checking the exterior for damage, inspecting the interior condition, testing all electronics, checking under the hood, taking it for a test drive, and reviewing the service history and documentation. Consider having a mechanic inspect the vehicle before purchasing.",
  },
]

const sellingFAQs = [
  {
    question: "How do I list my car for sale?",
    answer:
      "To list your car, create an account, click on 'Sell Your Car', and follow the step-by-step process. You'll need to provide details about your vehicle, upload photos, set a price, and provide contact information.",
  },
  {
    question: "How much does it cost to list a car?",
    answer:
      "We offer both free and premium listing options. Free listings include basic features, while premium listings offer enhanced visibility, featured placement, and additional photos. Check our pricing page for current rates.",
  },
  {
    question: "How long will my listing be active?",
    answer:
      "Standard listings remain active for 60 days. Premium listings can be active for up to 90 days. You can renew or remove your listing at any time from your account dashboard.",
  },
  {
    question: "What photos should I include in my listing?",
    answer:
      "Include clear photos of the exterior (front, back, sides), interior (dashboard, seats, cargo area), engine bay, and any notable features or imperfections. High-quality photos increase buyer interest.",
  },
  {
    question: "How do I handle test drives and viewings?",
    answer:
      "Arrange viewings in safe, public locations during daylight hours. For test drives, verify the potential buyer has a valid driver's license, consider accompanying them, and check your insurance coverage for test drives.",
  },
]

const financingFAQs = [
  {
    question: "Do you offer financing options?",
    answer:
      "Yes, we partner with multiple lenders to offer financing options for qualified buyers. You can apply for pre-approval through our website or discuss financing options with our partner dealerships.",
  },
  {
    question: "What credit score do I need to qualify for financing?",
    answer:
      "Financing approval depends on various factors including credit score, income, and down payment. While a higher credit score typically results in better rates, we work with lenders who specialize in various credit situations.",
  },
  {
    question: "Can I get pre-approved for a car loan?",
    answer:
      "Yes, you can apply for pre-approval through our website. Pre-approval gives you a clear budget and strengthens your negotiating position when shopping for a car.",
  },
  {
    question: "What documents do I need for financing?",
    answer:
      "Typically, you'll need proof of identity (driver's license), proof of income (pay stubs or tax returns), proof of residence (utility bills), and details about your employment and credit history.",
  },
  {
    question: "Do you offer insurance services?",
    answer:
      "Yes, we partner with insurance providers to offer competitive rates on auto insurance. You can request quotes through our website or speak with our insurance specialists.",
  },
]

const supportFAQs = [
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support team through the 'Contact Us' page, by email at support@carlistings.com, or by phone at 1800 CAR FIND during business hours.",
  },
  {
    question: "What are your business hours?",
    answer:
      "Our customer support team is available Monday through Friday from 9am to 6pm, and Saturday from 10am to 4pm. We are closed on Sundays and public holidays.",
  },
  {
    question: "How do I change my account information?",
    answer:
      "You can update your account information by logging in, clicking on your profile icon, and selecting 'Account Settings'. From there, you can edit your personal information, change your password, and update notification preferences.",
  },
  {
    question: "Can I delete my account?",
    answer:
      "Yes, you can delete your account by going to 'Account Settings' and selecting 'Delete Account'. Please note that this action is permanent and will remove all your data from our system.",
  },
  {
    question: "How do I report issues with the website?",
    answer:
      "If you encounter any technical issues with our website, please contact our support team with details about the problem, including the device and browser you're using, and any error messages you received.",
  },
]

