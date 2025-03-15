"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12">
      <div className="w-full max-w-md px-4">
        <Card className="w-full">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-2">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Car Listings Logo"
                width={60}
                height={60}
                className="h-12 w-12"
              />
            </div>
            <CardTitle className="text-2xl font-bold">Forgot Password</CardTitle>
            <CardDescription>Enter your email address and we'll send you a link to reset your password</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input type="email" placeholder="Email" className="pl-10" required />
              </div>
            </div>

            <Button className="w-full">Send Reset Link</Button>

            <Alert className="bg-blue-50 text-blue-800 border-blue-200">
              <AlertDescription>
                If your email address is registered with us, you will receive a password reset link shortly.
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600">
              Remember your password?{" "}
              <Link href="/login" className="font-medium text-primary hover:underline">
                Back to login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

