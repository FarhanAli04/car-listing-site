"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { Eye, EyeOff, Mail, Lock, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showRegistrationSuccess, setShowRegistrationSuccess] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  // Form validation errors
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    // Check if user was redirected from registration
    const registered = searchParams.get("registered")
    if (registered === "true") {
      setShowRegistrationSuccess(true)
    }
  }, [searchParams])

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
      // In a real app, you would make an API call to authenticate the user
      // For this demo, we'll simulate a successful login after a delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Get user data from localStorage (in a real app, this would come from your API)
      const userData = JSON.parse(localStorage.getItem("userData") || "{}")

      // Verify the email matches (simple check for demo purposes)
      if (userData.email && userData.email !== formData.email) {
        throw new Error("Email not found. Please check your credentials.")
      }

      // Set authentication status
      localStorage.setItem("isAuthenticated", "true")

      // Show success message
      toast({
        title: "Login successful!",
        description: `Welcome back, ${userData.firstName || "User"}!`,
        variant: "success",
      })

      // Redirect to account page
      router.push("/account")
    } catch (error) {
      toast({
        title: "Login failed",
        description: error.message || "Invalid email or password. Please try again.",
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
            <CardTitle className="text-xl md:text-2xl font-bold">Sign In</CardTitle>
            <CardDescription>Enter your email and password to access your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {showRegistrationSuccess && (
              <Alert className="bg-green-50 text-green-800 border-green-200 mb-4">
                <AlertDescription>
                  Your account has been created successfully! Please sign in with your credentials.
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
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
              </div>
              <div className="space-y-2">
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
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, rememberMe: checked }))}
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            <Separator>
              <span className="px-2 py-1 my-2 text-xs text-gray-500 text-center block mx-auto">OR CONTINUE WITH</span>
            </Separator>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <Image
                  src="/placeholder.svg?height=20&width=20"
                  alt="Google"
                  width={20}
                  height={20}
                  className="mr-2 h-5 w-5"
                />
                Google
              </Button>
              <Button variant="outline" className="w-full">
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
          <CardFooter className="flex flex-col items-center gap-2">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-medium text-primary hover:underline">
                Sign up now
              </Link>
            </p>
            <p className="text-xs text-gray-500">Create an account to access all features</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

