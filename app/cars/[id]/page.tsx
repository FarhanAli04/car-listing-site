import Link from "next/link"
import Image from "next/image"
import { Calendar, Fuel, Gauge, Car, Users, Cog, Heart, Share2, Phone, Mail, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function CarDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the car data based on the ID
  // For this demo, we'll use a static list of cars and find the one with the matching ID
  const cars = [
    {
      id: "1",
      title: "2020 Toyota RAV4 XLE AWD",
      price: 28500,
      location: "Sydney, NSW",
      condition: "Used",
      year: "2020",
      make: "Toyota",
      model: "RAV4",
      trim: "XLE AWD",
      mileage: "35,210 km",
      transmission: "Automatic",
      fuel: "Petrol",
      engine: "2.5L 4-Cylinder",
      drivetrain: "All-Wheel Drive",
      exteriorColor: "Magnetic Grey",
      interiorColor: "Black",
      seats: 5,
      vin: "JTMB6RFV4LD015370",
      features: [
        "Adaptive Cruise Control",
        "Lane Departure Warning",
        "Blind Spot Monitoring",
        "Backup Camera",
        "Bluetooth",
        "Apple CarPlay",
        "Android Auto",
        "Sunroof",
        "Heated Seats",
        "Keyless Entry",
        "Push Button Start",
        "Dual-Zone Climate Control",
      ],
      description:
        "This 2020 Toyota RAV4 XLE AWD is in excellent condition with low kilometers. It comes with a comprehensive set of features including Toyota Safety Sense 2.0, a power moonroof, and dual-zone automatic climate control. The vehicle has been well-maintained and has a clean history report. Perfect for families or anyone looking for a reliable, fuel-efficient SUV with all-wheel drive capability.",
      sellerName: "Sydney Auto Group",
      sellerType: "Dealer",
      sellerPhone: "(02) 9876 5432",
      sellerEmail: "sales@sydneyautogroup.com.au",
      images: [
        "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG95b3RhJTIwcmF2NHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1633859036994-777d9f4a2ef2?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1597007466933-962f7e4cd161?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=800&auto=format&fit=crop",
      ],
    },
    {
      id: "2",
      title: "2021 Honda Accord Sport",
      price: 32900,
      location: "Melbourne, VIC",
      condition: "Used",
      year: "2021",
      make: "Honda",
      model: "Accord",
      trim: "Sport",
      mileage: "20,150 km",
      transmission: "Automatic",
      fuel: "Petrol",
      engine: "1.5L Turbo 4-Cylinder",
      drivetrain: "Front-Wheel Drive",
      exteriorColor: "Crystal Black Pearl",
      interiorColor: "Black",
      seats: 5,
      vin: "1HGCV1F34MA012345",
      features: [
        "Honda Sensing Suite",
        "Adaptive Cruise Control",
        "Lane Keeping Assist",
        "Collision Mitigation Braking",
        "8-inch Touchscreen",
        "Apple CarPlay",
        "Android Auto",
        "Dual-Zone Climate Control",
        "Power Moonroof",
        "19-inch Alloy Wheels",
        "LED Headlights",
        "Sport Mode",
      ],
      description:
        "This 2021 Honda Accord Sport offers a perfect blend of performance, efficiency, and technology. With its turbocharged engine and sport-tuned suspension, it delivers an engaging driving experience while maintaining excellent fuel economy. The interior features premium materials and the latest technology, including a responsive touchscreen and smartphone integration. This well-maintained example has low kilometers and is in excellent condition throughout.",
      sellerName: "Melbourne Honda",
      sellerType: "Dealer",
      sellerPhone: "(03) 9876 5432",
      sellerEmail: "sales@melbournehonda.com.au",
      images: [
        "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9uZGElMjBhY2NvcmR8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1583267746897-2cf415887172?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=800&auto=format&fit=crop",
      ],
    },
    {
      id: "3",
      title: "2019 BMW 3 Series",
      price: 39500,
      location: "Brisbane, QLD",
      condition: "Used",
      year: "2019",
      make: "BMW",
      model: "3 Series",
      trim: "330i M Sport",
      mileage: "45,000 km",
      transmission: "Automatic",
      fuel: "Petrol",
      engine: "2.0L Turbo 4-Cylinder",
      drivetrain: "Rear-Wheel Drive",
      exteriorColor: "Alpine White",
      interiorColor: "Black",
      seats: 5,
      vin: "WBA5R1C50KAE12345",
      features: [
        "M Sport Package",
        "Live Cockpit Professional",
        "Navigation System",
        "Harman Kardon Sound System",
        "Adaptive LED Headlights",
        "Parking Assistant",
        "Driving Assistant Professional",
        "Heated Front Seats",
        "Ambient Lighting",
        "19-inch M Sport Wheels",
        "Sport Suspension",
        "Wireless Charging",
      ],
      description:
        "This 2019 BMW 330i M Sport represents the ultimate driving machine with its perfect balance of luxury, technology, and performance. The turbocharged engine delivers exhilarating acceleration while the M Sport suspension provides precise handling. Inside, you'll find premium materials and cutting-edge technology, including the latest BMW iDrive system. This well-maintained example comes with a full service history and is ready for its new owner.",
      sellerName: "Premium Auto Brisbane",
      sellerType: "Dealer",
      sellerPhone: "(07) 3876 5432",
      sellerEmail: "sales@premiumautobrisbane.com.au",
      images: [
        "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIwM3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1556189250-b4234b8ec129?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556189250-ed69b98adaec?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=800&auto=format&fit=crop",
      ],
    },
    {
      id: "4",
      title: "2022 Tesla Model 3",
      price: 58900,
      location: "Perth, WA",
      condition: "Used",
      year: "2022",
      make: "Tesla",
      model: "Model 3",
      trim: "Long Range",
      mileage: "10,500 km",
      transmission: "Automatic",
      fuel: "Electric",
      engine: "Dual Motor Electric",
      drivetrain: "All-Wheel Drive",
      exteriorColor: "Pearl White",
      interiorColor: "Black",
      seats: 5,
      vin: "5YJ3E1EA8NF123456",
      features: [
        "Autopilot",
        "15-inch Touchscreen",
        "Premium Audio System",
        "Glass Roof",
        "Heated Front and Rear Seats",
        "Navigation",
        "Wireless Charging",
        "Premium Connectivity",
        "Power-Adjustable Front Seats",
        "LED Fog Lamps",
        "19-inch Sport Wheels",
        "Home Charging Equipment Included",
      ],
      description:
        "This 2022 Tesla Model 3 Long Range offers impressive performance and range in a sleek, minimalist package. With its dual-motor all-wheel-drive system, it delivers instant acceleration and confident handling in all conditions. The spacious, tech-forward interior features a stunning glass roof and the intuitive 15-inch touchscreen that controls virtually all vehicle functions. With low kilometers and in like-new condition, this Model 3 represents significant savings over buying new while still offering the latest Tesla technology and features.",
      sellerName: "Electric Vehicles Perth",
      sellerType: "Dealer",
      sellerPhone: "(08) 6543 2109",
      sellerEmail: "sales@evperth.com.au",
      images: [
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551826152-d7248d8b8a40?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?q=80&w=800&auto=format&fit=crop",
      ],
    },
    {
      id: "5",
      title: "2018 Ford Mustang GT",
      price: 45000,
      location: "Adelaide, SA",
      condition: "Used",
      year: "2018",
      make: "Ford",
      model: "Mustang",
      trim: "GT Premium",
      mileage: "50,200 km",
      transmission: "Manual",
      fuel: "Petrol",
      engine: "5.0L V8",
      drivetrain: "Rear-Wheel Drive",
      exteriorColor: "Race Red",
      interiorColor: "Ebony",
      seats: 4,
      vin: "1FA6P8CF5J5123456",
      features: [
        "5.0L Coyote V8 Engine",
        "6-Speed Manual Transmission",
        "Performance Package",
        "Brembo Brakes",
        "SYNC 3 Infotainment",
        "Apple CarPlay & Android Auto",
        "Heated & Cooled Front Seats",
        "Premium Audio System",
        "Rear View Camera",
        "Dual-Zone Climate Control",
        "19-inch Wheels",
        "Active Valve Performance Exhaust",
      ],
      description:
        "This 2018 Ford Mustang GT Premium is an iconic American muscle car that delivers exhilarating performance with its 5.0L V8 engine and 6-speed manual transmission. The Performance Package adds upgraded Brembo brakes, a Torsen limited-slip differential, and unique chassis tuning for enhanced handling. Inside, you'll find premium amenities including heated and cooled leather seats, the user-friendly SYNC 3 infotainment system, and a premium audio system. This well-maintained example in striking Race Red has been meticulously cared for and is ready to deliver thrills to its next owner.",
      sellerName: "Classic Motors Adelaide",
      sellerType: "Dealer",
      sellerPhone: "(08) 8765 4321",
      sellerEmail: "sales@classicmotorsadelaide.com.au",
      images: [
        "https://images.unsplash.com/photo-1584345604476-8ec5f452d1f2?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584345604476-8ec5f452d1f2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZCUyMG11c3Rhbmd8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584345604476-8ec5f452d1f2?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1547245324-d777c6f05e80?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?q=80&w=800&auto=format&fit=crop",
      ],
    },
    {
      id: "6",
      title: "2021 Hyundai Tucson",
      price: 34500,
      location: "Canberra, ACT",
      condition: "Used",
      year: "2021",
      make: "Hyundai",
      model: "Tucson",
      trim: "Highlander",
      mileage: "25,600 km",
      transmission: "Automatic",
      fuel: "Petrol",
      engine: "1.6L Turbo 4-Cylinder",
      drivetrain: "All-Wheel Drive",
      exteriorColor: "Deep Sea Blue",
      interiorColor: "Black",
      seats: 5,
      vin: "KM8J3CAL6MU123456",
      features: [
        "Panoramic Sunroof",
        "10.25-inch Touchscreen",
        "Digital Instrument Cluster",
        "Blind-Spot View Monitor",
        "Surround View Monitor",
        "Heated & Ventilated Front Seats",
        "Heated Rear Seats",
        "Wireless Charging",
        "BOSE Premium Audio",
        "Smart Power Tailgate",
        "19-inch Alloy Wheels",
        "Remote Smart Parking Assist",
      ],
      description:
        "This 2021 Hyundai Tucson Highlander represents the pinnacle of Hyundai's popular SUV lineup. With its striking design, turbocharged performance, and comprehensive suite of technology and comfort features, it offers exceptional value in the compact SUV segment. The spacious interior features premium materials and the latest technology, including a large touchscreen and digital instrument cluster. This low-kilometer example is in excellent condition and comes with the remainder of Hyundai's comprehensive 5-year warranty for peace of mind ownership.",
      sellerName: "Canberra Hyundai",
      sellerType: "Dealer",
      sellerPhone: "(02) 6123 4567",
      sellerEmail: "sales@canberrahyundai.com.au",
      images: [
        "/placeholder.svg?height=600&width=800&text=Hyundai+Tucson+Front",
        "/placeholder.svg?height=600&width=800&text=Hyundai+Tucson+Side",
        "/placeholder.svg?height=600&width=800&text=Hyundai+Tucson+Rear",
        "/placeholder.svg?height=600&width=800&text=Hyundai+Tucson+Interior",
        "/placeholder.svg?height=600&width=800&text=Hyundai+Tucson+Engine",
        "/placeholder.svg?height=600&width=800&text=Hyundai+Tucson+Trunk",
      ],
    },
    {
      id: "7",
      title: "2020 Mercedes-Benz C300",
      price: 42500,
      location: "Melbourne, VIC",
      condition: "Used",
      year: "2020",
      make: "Mercedes-Benz",
      model: "C-Class",
      trim: "C300",
      mileage: "28,400 km",
      transmission: "Automatic",
      fuel: "Petrol",
      engine: "2.0L Turbo 4-Cylinder",
      drivetrain: "Rear-Wheel Drive",
      exteriorColor: "Selenite Grey",
      interiorColor: "Black",
      seats: 5,
      vin: "WDDWF4KB1LR123456",
      features: [
        "AMG Line Package",
        "10.25-inch Infotainment Display",
        "12.3-inch Digital Instrument Cluster",
        "Burmester Surround Sound System",
        "Panoramic Sunroof",
        "Heated Front Seats",
        "Wireless Charging",
        "Active Parking Assist",
        "360-Degree Camera",
        "Multibeam LED Headlights",
        "19-inch AMG Alloy Wheels",
        "Ambient Lighting",
      ],
      description:
        "This 2020 Mercedes-Benz C300 embodies luxury, performance, and technology in a refined package. The turbocharged engine delivers smooth, responsive power while the sophisticated suspension provides the perfect balance of comfort and handling. Inside, you'll find premium materials and cutting-edge technology, including the intuitive MBUX infotainment system. This well-maintained example comes with the desirable AMG Line package, enhancing both its appearance and driving dynamics. With low kilometers and in excellent condition, it represents significant value in the luxury sedan segment.",
      sellerName: "Prestige Auto Melbourne",
      sellerType: "Dealer",
      sellerPhone: "(03) 9876 5432",
      sellerEmail: "sales@prestigeautomelbourne.com.au",
      images: [
        "/placeholder.svg?height=600&width=800&text=Mercedes+C300+Front",
        "/placeholder.svg?height=600&width=800&text=Mercedes+C300+Side",
        "/placeholder.svg?height=600&width=800&text=Mercedes+C300+Rear",
        "/placeholder.svg?height=600&width=800&text=Mercedes+C300+Interior",
        "/placeholder.svg?height=600&width=800&text=Mercedes+C300+Engine",
        "/placeholder.svg?height=600&width=800&text=Mercedes+C300+Wheels",
      ],
    },
    {
      id: "8",
      title: "2021 Audi Q5 Premium",
      price: 47800,
      location: "Sydney, NSW",
      condition: "Used",
      year: "2021",
      make: "Audi",
      model: "Q5",
      trim: "Premium Plus",
      mileage: "15,300 km",
      transmission: "Automatic",
      fuel: "Petrol",
      engine: "2.0L Turbo 4-Cylinder",
      drivetrain: "All-Wheel Drive",
      exteriorColor: "Navarra Blue",
      interiorColor: "Rock Gray",
      seats: 5,
      vin: "WA1BNAFY8M2123456",
      features: [
        "S Line Exterior Package",
        "Virtual Cockpit Plus",
        "MMI Navigation Plus",
        "Bang & Olufsen 3D Sound System",
        "Panoramic Sunroof",
        "Heated & Ventilated Front Seats",
        "Audi Pre Sense",
        "Adaptive Cruise Control",
        "Park Assist",
        "Matrix LED Headlights",
        "20-inch Alloy Wheels",
        "Ambient Lighting",
      ],
      description:
        "This 2021 Audi Q5 Premium Plus combines sophisticated design, advanced technology, and refined performance in a versatile luxury SUV package. The turbocharged engine and quattro all-wheel drive system deliver confident performance in all conditions, while the premium interior offers exceptional comfort and cutting-edge features. This low-kilometer example includes the desirable S Line exterior package and a comprehensive suite of driver assistance systems. Well-maintained and in excellent condition, it represents the perfect blend of luxury, technology, and practicality.",
      sellerName: "Audi Sydney",
      sellerType: "Dealer",
      sellerPhone: "(02) 9876 5432",
      sellerEmail: "sales@audisydney.com.au",
      images: [
        "/placeholder.svg?height=600&width=800&text=Audi+Q5+Front",
        "/placeholder.svg?height=600&width=800&text=Audi+Q5+Side",
        "/placeholder.svg?height=600&width=800&text=Audi+Q5+Rear",
        "/placeholder.svg?height=600&width=800&text=Audi+Q5+Interior",
        "/placeholder.svg?height=600&width=800&text=Audi+Q5+Engine",
        "/placeholder.svg?height=600&width=800&text=Audi+Q5+Trunk",
      ],
    },
  ]

  // Find the car with the matching ID
  const car = cars.find((c) => c.id === params.id) || cars[0]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="mb-4 md:mb-6">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link href="/cars" className="text-gray-500 hover:text-primary">
              Cars
            </Link>
            <span className="text-gray-500">/</span>
            <Link href={`/cars?make=${car.make.toLowerCase()}`} className="text-gray-500 hover:text-primary">
              {car.make}
            </Link>
            <span className="text-gray-500">/</span>
            <Link href={`/cars?model=${car.model.toLowerCase()}`} className="text-gray-500 hover:text-primary">
              {car.model}
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-500">
              {car.year} {car.make} {car.model}
            </span>
          </div>

          <h1 className="mt-2 text-2xl md:text-3xl font-bold">{car.title}</h1>
          <div className="mt-1 flex flex-wrap items-center gap-3">
            <Badge variant="secondary">{car.condition}</Badge>
            <span className="text-gray-500">{car.location}</span>
            <span className="text-gray-500">VIN: {car.vin}</span>
          </div>
        </div>

        <div className="grid gap-6 lg:gap-8 lg:grid-cols-[2fr_1fr]">
          {/* Left Column - Car Images and Details */}
          <div>
            {/* Main Image */}
            <div className="mb-4 overflow-hidden rounded-lg">
              <Image
                src={car.images[0] || "/placeholder.svg?height=600&width=800"}
                alt={car.title}
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="mb-6 md:mb-8 flex space-x-2 overflow-x-auto pb-2">
              {car.images.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 ${index === 0 ? "border-primary" : "border-transparent"}`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${car.title} - Image ${index + 1}`}
                    width={120}
                    height={90}
                    className="h-16 w-20 md:h-20 md:w-28 object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Car Details Tabs */}
            <Tabs defaultValue="overview" className="mt-6 md:mt-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="description">Description</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-4 md:mt-6">
                <div className="rounded-lg border bg-white p-4 md:p-6">
                  <h3 className="mb-4 text-lg md:text-xl font-semibold">Vehicle Details</h3>
                  <div className="grid gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Year</p>
                        <p className="font-medium">{car.year}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Make</p>
                        <p className="font-medium">{car.make}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Model</p>
                        <p className="font-medium">{car.model}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Mileage</p>
                        <p className="font-medium">{car.mileage}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cog className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Transmission</p>
                        <p className="font-medium">{car.transmission}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Fuel className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Fuel Type</p>
                        <p className="font-medium">{car.fuel}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cog className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Engine</p>
                        <p className="font-medium">{car.engine}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Drivetrain</p>
                        <p className="font-medium">{car.drivetrain}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Seats</p>
                        <p className="font-medium">{car.seats}</p>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4 md:my-6" />

                  <h3 className="mb-4 text-lg md:text-xl font-semibold">Color</h3>
                  <div className="grid gap-y-4 sm:grid-cols-2">
                    <div>
                      <p className="text-sm text-gray-500">Exterior Color</p>
                      <p className="font-medium">{car.exteriorColor}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Interior Color</p>
                      <p className="font-medium">{car.interiorColor}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-4 md:mt-6">
                <div className="rounded-lg border bg-white p-4 md:p-6">
                  <h3 className="mb-4 text-lg md:text-xl font-semibold">Features & Options</h3>
                  <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="description" className="mt-4 md:mt-6">
                <div className="rounded-lg border bg-white p-4 md:p-6">
                  <h3 className="mb-4 text-lg md:text-xl font-semibold">Description</h3>
                  <p className="whitespace-pre-line text-gray-700">{car.description}</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Price and Contact */}
          <div>
            <Card className="mb-6">
              <CardContent className="p-4 md:p-6">
                <div className="mb-4 flex items-end justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="text-2xl md:text-3xl font-bold">${car.price.toLocaleString()}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <Button className="mt-2 w-full">Contact Seller</Button>

                <Separator className="my-4 md:my-6" />

                <div className="mb-4">
                  <h3 className="mb-2 text-base md:text-lg font-semibold">{car.sellerName}</h3>
                  <p className="text-sm text-gray-500">{car.sellerType}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span>{car.sellerPhone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span>{car.sellerEmail}</span>
                  </div>
                </div>

                <Separator className="my-4 md:my-6" />

                <div>
                  <h3 className="mb-4 text-base md:text-lg font-semibold">Send a Message</h3>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" required />
                    <Input placeholder="Your Email" type="email" required />
                    <Input placeholder="Your Phone" type="tel" />
                    <Textarea
                      placeholder={`I'm interested in this ${car.year} ${car.make} ${car.model}. Please contact me with more information.`}
                      className="min-h-[100px]"
                      required
                    />
                    <Button className="w-full">
                      <MessageSquare className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="mb-4 text-base md:text-lg font-semibold">Similar Vehicles</h3>
                <div className="space-y-4">
                  {cars
                    .filter(
                      (c) =>
                        c.id !== car.id &&
                        (c.make === car.make ||
                          c.model === car.model ||
                          (c.price > car.price * 0.8 && c.price < car.price * 1.2)),
                    )
                    .slice(0, 3)
                    .map((similarCar) => (
                      <div key={similarCar.id} className="flex gap-3">
                        <div className="h-16 w-24 md:h-20 md:w-28 flex-shrink-0 overflow-hidden rounded-md">
                          <Image
                            src={similarCar.images[0] || "/placeholder.svg?height=80&width=112"}
                            alt={similarCar.title}
                            width={112}
                            height={80}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <h4 className="font-medium">
                            <Link href={`/cars/${similarCar.id}`} className="hover:text-primary">
                              {similarCar.title}
                            </Link>
                          </h4>
                          <p className="text-sm text-gray-500">{similarCar.mileage}</p>
                          <p className="font-semibold">${similarCar.price.toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

