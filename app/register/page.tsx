"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Mail, Lock, User, Phone, Car, Bell, Heart, BadgePercent, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

export default function RegisterPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })

  // Form validation errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: "",
  })

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  // Validate form
  const validateForm = () => {
    let isValid = true
    const newErrors = { ...errors }

    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
      isValid = false
    }

    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
      isValid = false
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
      isValid = false
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required"
      isValid = false
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
      isValid = false
    }

    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
      isValid = false
    }

    // Validate terms agreement
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // In a real app, you would make an API call to register the user
      // For this demo, we'll simulate a successful registration after a delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Store user data in localStorage (in a real app, this would be handled by your auth system)
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        joinDate: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" }),
      }

      // Save to localStorage
      localStorage.setItem("userData", JSON.stringify(userData))

      // Show success message
      toast({
        title: "Account created successfully!",
        description: "Please sign in with your new account.",
        variant: "success",
      })

      // Redirect to login page
      router.push("/login?registered=true")
    } catch (error) {
      toast({
        title: "Registration failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-8 md:py-12 px-4">
      <div className="w-full max-w-md">
        <Card className="w-full">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-2">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Car Listings Logo"
                width={60}
                height={60}
                className="h-10 w-10 md:h-12 md:w-12"
              />
            </div>
            <CardTitle className="text-xl md:text-2xl font-bold">Create an Account</CardTitle>
            <CardDescription>Enter your details to create your account</CardDescription>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              <div className="flex items-start space-x-2">
                <div className="rounded-full bg-primary/10 p-1.5 text-primary">
                  <Car className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Saved Searches</p>
                  <p className="text-xs text-gray-500">Save your favorite searches for quick access</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="rounded-full bg-primary/10 p-1.5 text-primary">
                  <Bell className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Price Alerts</p>
                  <p className="text-xs text-gray-500">Get notified when prices drop</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="rounded-full bg-primary/10 p-1.5 text-primary">
                  <Heart className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Favorite Cars</p>
                  <p className="text-xs text-gray-500">Save cars to compare later</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="rounded-full bg-primary/10 p-1.5 text-primary">
                  <BadgePercent className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Exclusive Deals</p>
                  <p className="text-xs text-gray-500">Access member-only discounts</p>
                </div>
              </div>
            </div>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="pl-10"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                </div>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="pl-10"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                </div>
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="pl-10"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="pl-10"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="pl-10 pr-10"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
                {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="pl-10 pr-10"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
                {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToTerms: checked }))}
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {errors.agreeToTerms && <p className="mt-1 text-xs text-red-500">{errors.agreeToTerms}</p>}

              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>

              <Separator>
                <span className="px-2 py-1 my-2 text-xs text-gray-500 text-center block mx-auto">OR SIGN UP WITH</span>
              </Separator>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full" type="button">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Google"
                    width={20}
                    height={20}
                    className="mr-2 h-5 w-5"
                  />
                  Google
                </Button>
                <Button variant="outline" className="w-full" type="button">
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="mr-2 h-5 w-5"
                  />
                  Facebook
                </Button>
              </div>
            </CardContent>
          </form>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

