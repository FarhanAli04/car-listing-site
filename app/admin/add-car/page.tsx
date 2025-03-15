"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Car, Save, ArrowRight, ArrowLeft, Upload, Info, Trash2, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"

export default function AddCarPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [activeStep, setActiveStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [savedProgress, setSavedProgress] = useState(false)

  // Form data state
  const [formData, setFormData] = useState({
    // Basic Information
    title: "",
    price: "",
    condition: "",
    year: "",
    make: "",
    model: "",
    trim: "",
    vin: "",

    // Details
    mileage: "",
    transmission: "",
    fuel: "",
    engine: "",
    drivetrain: "",
    exteriorColor: "",
    interiorColor: "",
    seats: "",

    // Features & Description
    features: [] as string[],
    description: "",

    // Images & Location
    images: [] as string[],
    location: "",

    // Seller Information
    sellerName: "",
    sellerType: "",
    sellerPhone: "",
    sellerEmail: "",

    // Status
    status: "draft",
  })

  // Available options for selects
  const conditions = ["New", "Used", "Certified Pre-Owned"]
  const years = Array.from({ length: 30 }, (_, i) => (new Date().getFullYear() - i).toString())
  const makes = ["Toyota", "Honda", "Ford", "BMW", "Mercedes-Benz", "Audi", "Tesla", "Hyundai", "Mazda", "Volkswagen"]
  const transmissions = ["Automatic", "Manual", "CVT", "Semi-Automatic", "Dual-Clutch"]
  const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid", "Plug-in Hybrid", "LPG"]
  const drivetrains = ["Front-Wheel Drive", "Rear-Wheel Drive", "All-Wheel Drive", "Four-Wheel Drive"]
  const sellerTypes = ["Dealer", "Private Seller", "Manufacturer"]
  const statuses = ["Draft", "Pending", "Published", "Sold", "Archived"]

  // Available features
  const availableFeatures = [
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
    "Ventilated Seats",
    "Third Row Seating",
    "Alloy Wheels",
    "Tow Package",
    "Keyless Entry",
    "Push Button Start",
    "Apple CarPlay",
    "Android Auto",
    "Blind Spot Monitoring",
    "Lane Departure Warning",
    "Adaptive Cruise Control",
    "Parking Sensors",
    "360-Degree Camera",
    "Premium Sound System",
    "Wireless Charging",
    "Heads-Up Display",
  ]

  // Handle input changes
  const handleChange = (field: string, value: string | string[] | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
    setSavedProgress(false)
  }

  // Handle feature toggle
  const handleFeatureToggle = (feature: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        features: [...prev.features, feature],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        features: prev.features.filter((f) => f !== feature),
      }))
    }
    setSavedProgress(false)
  }

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // In a real app, you would upload the files to a server
      // For this demo, we'll just create URLs for the selected files
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file))

      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...newImages],
      }))
      setSavedProgress(false)
    }
  }

  // Handle image removal
  const handleRemoveImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }))
    setSavedProgress(false)
  }

  // Handle background removal for an image
  const handleRemoveBackground = (index: number) => {
    // In a real app, you would call an API to remove the background
    toast({
      title: "Processing image",
      description: "Background removal is being processed...",
    })

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Background removed",
        description: "Image background has been successfully removed.",
        variant: "success",
      })
    }, 2000)
  }

  // Save progress
  const handleSaveProgress = () => {
    setIsSaving(true)

    // In a real app, you would save the form data to a database
    setTimeout(() => {
      setIsSaving(false)
      setSavedProgress(true)

      toast({
        title: "Progress saved",
        description: "Your car listing progress has been saved as a draft.",
        variant: "success",
      })
    }, 1500)
  }

  // Submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // In a real app, you would submit the form data to a database
    setTimeout(() => {
      setIsLoading(false)

      toast({
        title: "Car listing created",
        description: "Your car listing has been successfully created and is pending approval.",
        variant: "success",
      })

      router.push("/admin/cars")
    }, 2000)
  }

  // Navigate to next step
  const goToNextStep = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1)
    }
  }

  // Navigate to previous step
  const goToPrevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Add New Car</h1>
          <p className="text-gray-500">Create a new car listing</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleSaveProgress} disabled={isSaving}>
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Draft
              </>
            )}
          </Button>
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit for Approval"
            )}
          </Button>
        </div>
      </div>

      {savedProgress && (
        <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
          <Info className="h-4 w-4" />
          <AlertTitle>Progress Saved</AlertTitle>
          <AlertDescription>
            Your car listing progress has been saved as a draft. You can continue editing or come back later.
          </AlertDescription>
        </Alert>
      )}

      <div className="mb-6">
        <div className="flex items-center justify-between">
          <Badge variant={activeStep >= 1 ? "default" : "outline"}>1. Basic Information</Badge>
          <div className="h-px w-full max-w-[100px] bg-gray-200"></div>
          <Badge variant={activeStep >= 2 ? "default" : "outline"}>2. Details</Badge>
          <div className="h-px w-full max-w-[100px] bg-gray-200"></div>
          <Badge variant={activeStep >= 3 ? "default" : "outline"}>3. Features & Description</Badge>
          <div className="h-px w-full max-w-[100px] bg-gray-200"></div>
          <Badge variant={activeStep >= 4 ? "default" : "outline"}>4. Images & Location</Badge>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Information */}
            {activeStep === 1 && (
              <div className="space-y-6">
                <CardHeader className="p-0">
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>Enter the basic details about the vehicle</CardDescription>
                </CardHeader>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium">
                      Listing Title
                    </label>
                    <Input
                      id="title"
                      placeholder="e.g. 2020 Toyota RAV4 XLE AWD"
                      value={formData.title}
                      onChange={(e) => handleChange("title", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="price" className="text-sm font-medium">
                      Price ($)
                    </label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="e.g. 25000"
                      value={formData.price}
                      onChange={(e) => handleChange("price", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="condition" className="text-sm font-medium">
                      Condition
                    </label>
                    <Select value={formData.condition} onValueChange={(value) => handleChange("condition", value)}>
                      <SelectTrigger id="condition">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        {conditions.map((condition) => (
                          <SelectItem key={condition} value={condition}>
                            {condition}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="year" className="text-sm font-medium">
                      Year
                    </label>
                    <Select value={formData.year} onValueChange={(value) => handleChange("year", value)}>
                      <SelectTrigger id="year">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="make" className="text-sm font-medium">
                      Make
                    </label>
                    <Select value={formData.make} onValueChange={(value) => handleChange("make", value)}>
                      <SelectTrigger id="make">
                        <SelectValue placeholder="Select make" />
                      </SelectTrigger>
                      <SelectContent>
                        {makes.map((make) => (
                          <SelectItem key={make} value={make}>
                            {make}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="model" className="text-sm font-medium">
                      Model
                    </label>
                    <Input
                      id="model"
                      placeholder="e.g. RAV4, Accord, F-150"
                      value={formData.model}
                      onChange={(e) => handleChange("model", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="trim" className="text-sm font-medium">
                      Trim
                    </label>
                    <Input
                      id="trim"
                      placeholder="e.g. XLE, Sport, Limited"
                      value={formData.trim}
                      onChange={(e) => handleChange("trim", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="vin" className="text-sm font-medium">
                      VIN (Vehicle Identification Number)
                    </label>
                    <Input
                      id="vin"
                      placeholder="e.g. 1HGCM82633A123456"
                      value={formData.vin}
                      onChange={(e) => handleChange("vin", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="status" className="text-sm font-medium">
                    Status
                  </label>
                  <Select value={formData.status} onValueChange={(value) => handleChange("status", value)}>
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      {statuses.map((status) => (
                        <SelectItem key={status.toLowerCase()} value={status.toLowerCase()}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 2: Details */}
            {activeStep === 2 && (
              <div className="space-y-6">
                <CardHeader className="p-0">
                  <CardTitle>Vehicle Details</CardTitle>
                  <CardDescription>Enter the detailed specifications of the vehicle</CardDescription>
                </CardHeader>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="mileage" className="text-sm font-medium">
                      Mileage (km)
                    </label>
                    <Input
                      id="mileage"
                      placeholder="e.g. 35210"
                      value={formData.mileage}
                      onChange={(e) => handleChange("mileage", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="transmission" className="text-sm font-medium">
                      Transmission
                    </label>
                    <Select
                      value={formData.transmission}
                      onValueChange={(value) => handleChange("transmission", value)}
                    >
                      <SelectTrigger id="transmission">
                        <SelectValue placeholder="Select transmission" />
                      </SelectTrigger>
                      <SelectContent>
                        {transmissions.map((transmission) => (
                          <SelectItem key={transmission} value={transmission}>
                            {transmission}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="fuel" className="text-sm font-medium">
                      Fuel Type
                    </label>
                    <Select value={formData.fuel} onValueChange={(value) => handleChange("fuel", value)}>
                      <SelectTrigger id="fuel">
                        <SelectValue placeholder="Select fuel type" />
                      </SelectTrigger>
                      <SelectContent>
                        {fuelTypes.map((fuelType) => (
                          <SelectItem key={fuelType} value={fuelType}>
                            {fuelType}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="engine" className="text-sm font-medium">
                      Engine
                    </label>
                    <Input
                      id="engine"
                      placeholder="e.g. 2.5L 4-Cylinder"
                      value={formData.engine}
                      onChange={(e) => handleChange("engine", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="drivetrain" className="text-sm font-medium">
                      Drivetrain
                    </label>
                    <Select value={formData.drivetrain} onValueChange={(value) => handleChange("drivetrain", value)}>
                      <SelectTrigger id="drivetrain">
                        <SelectValue placeholder="Select drivetrain" />
                      </SelectTrigger>
                      <SelectContent>
                        {drivetrains.map((drivetrain) => (
                          <SelectItem key={drivetrain} value={drivetrain}>
                            {drivetrain}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="seats" className="text-sm font-medium">
                      Seats
                    </label>
                    <Input
                      id="seats"
                      type="number"
                      placeholder="e.g. 5"
                      value={formData.seats}
                      onChange={(e) => handleChange("seats", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="exteriorColor" className="text-sm font-medium">
                      Exterior Color
                    </label>
                    <Input
                      id="exteriorColor"
                      placeholder="e.g. Magnetic Grey"
                      value={formData.exteriorColor}
                      onChange={(e) => handleChange("exteriorColor", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interiorColor" className="text-sm font-medium">
                      Interior Color
                    </label>
                    <Input
                      id="interiorColor"
                      placeholder="e.g. Black"
                      value={formData.interiorColor}
                      onChange={(e) => handleChange("interiorColor", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Features & Description */}
            {activeStep === 3 && (
              <div className="space-y-6">
                <CardHeader className="p-0">
                  <CardTitle>Features & Description</CardTitle>
                  <CardDescription>Select features and add a detailed description</CardDescription>
                </CardHeader>

                <div className="space-y-4">
                  <label className="text-sm font-medium">Features</label>
                  <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                    {availableFeatures.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox
                          id={`feature-${feature.toLowerCase().replace(/\s+/g, "-")}`}
                          checked={formData.features.includes(feature)}
                          onCheckedChange={(checked) => handleFeatureToggle(feature, checked as boolean)}
                        />
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

                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Description
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Provide a detailed description of the vehicle..."
                    className="min-h-[200px]"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 4: Images & Location */}
            {activeStep === 4 && (
              <div className="space-y-6">
                <CardHeader className="p-0">
                  <CardTitle>Images & Location</CardTitle>
                  <CardDescription>Upload images and specify the location</CardDescription>
                </CardHeader>

                <div className="space-y-4">
                  <label className="text-sm font-medium">Upload Images</label>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative rounded-lg border bg-gray-50 p-2">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Car image ${index + 1}`}
                          className="h-40 w-full rounded-md object-cover"
                        />
                        <div className="absolute right-4 top-4 flex gap-2">
                          <Button
                            variant="destructive"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleRemoveImage(index)}
                            type="button"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="secondary"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleRemoveBackground(index)}
                            type="button"
                          >
                            <Car className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="mt-2 text-center text-sm">
                          {index === 0 ? "Main Image" : `Image ${index + 1}`}
                        </div>
                      </div>
                    ))}

                    <label className="flex h-44 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="mb-3 h-10 w-10 text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG or WEBP (MAX. 10MB)</p>
                      </div>
                      <input type="file" className="hidden" accept="image/*" multiple onChange={handleImageUpload} />
                    </label>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium">
                      Location
                    </label>
                    <Input
                      id="location"
                      placeholder="e.g. Sydney, NSW"
                      value={formData.location}
                      onChange={(e) => handleChange("location", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Seller Information</h3>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="sellerName" className="text-sm font-medium">
                        Seller Name
                      </label>
                      <Input
                        id="sellerName"
                        placeholder="e.g. Sydney Auto Group"
                        value={formData.sellerName}
                        onChange={(e) => handleChange("sellerName", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="sellerType" className="text-sm font-medium">
                        Seller Type
                      </label>
                      <Select value={formData.sellerType} onValueChange={(value) => handleChange("sellerType", value)}>
                        <SelectTrigger id="sellerType">
                          <SelectValue placeholder="Select seller type" />
                        </SelectTrigger>
                        <SelectContent>
                          {sellerTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="sellerPhone" className="text-sm font-medium">
                        Seller Phone
                      </label>
                      <Input
                        id="sellerPhone"
                        placeholder="e.g. (02) 9876 5432"
                        value={formData.sellerPhone}
                        onChange={(e) => handleChange("sellerPhone", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="sellerEmail" className="text-sm font-medium">
                        Seller Email
                      </label>
                      <Input
                        id="sellerEmail"
                        type="email"
                        placeholder="e.g. sales@example.com"
                        value={formData.sellerEmail}
                        onChange={(e) => handleChange("sellerEmail", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 flex justify-between">
              <Button type="button" variant="outline" onClick={goToPrevStep} disabled={activeStep === 1}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              {activeStep < 4 ? (
                <Button type="button" onClick={goToNextStep}>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit for Approval"
                  )}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

