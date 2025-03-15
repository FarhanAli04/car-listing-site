"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { User, Settings, Car, Heart, MessageSquare, LogOut, Edit, ChevronRight, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

export default function AccountPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("dashboard")
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    joinDate: "",
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to access your account.",
        variant: "destructive",
      })
      router.push("/login")
      return
    }

    // Load user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem("userData") || "{}")
    if (storedUserData && storedUserData.firstName) {
      setUserData(storedUserData)
    }

    setIsLoading(false)
  }, [router, toast])

  const handleLogout = () => {
    // Clear authentication status
    localStorage.removeItem("isAuthenticated")

    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
      variant: "success",
    })

    // Redirect to home page
    router.push("/")
  }

  // Generate avatar fallback from user's initials
  const getInitials = () => {
    if (userData.firstName && userData.lastName) {
      return `${userData.firstName.charAt(0)}${userData.lastName.charAt(0)}`.toUpperCase()
    }
    return "U"
  }

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid gap-6 md:gap-8 md:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <div className="hidden md:block">
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="mb-6 flex flex-col items-center">
                  <div className="mb-4 relative">
                    <Avatar className="h-20 w-20 md:h-24 md:w-24">
                      <AvatarImage
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt={`${userData.firstName} ${userData.lastName}`}
                      />
                      <AvatarFallback>{getInitials()}</AvatarFallback>
                    </Avatar>
                    <button className="absolute bottom-0 right-0 rounded-full bg-primary p-1 text-white">
                      <Edit className="h-4 w-4" />
                    </button>
                  </div>
                  <h2 className="text-xl font-bold">
                    {userData.firstName} {userData.lastName}
                  </h2>
                  <p className="text-sm text-gray-500">Member since {userData.joinDate || "Jan 2023"}</p>
                </div>

                <nav>
                  <ul className="space-y-1">
                    {[
                      { icon: User, label: "Dashboard", value: "dashboard" },
                      { icon: Car, label: "My Listings", value: "listings" },
                      { icon: Heart, label: "Saved Cars", value: "saved" },
                      { icon: MessageSquare, label: "Messages", value: "messages" },
                      { icon: Settings, label: "Settings", value: "settings" },
                    ].map((item) => (
                      <li key={item.value}>
                        <button
                          className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium ${
                            activeTab === item.value
                              ? "bg-primary text-primary-foreground"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                          onClick={() => setActiveTab(item.value)}
                        >
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                <Separator className="my-6" />

                <button
                  className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </button>
              </CardContent>
            </Card>
          </div>

          {/* Mobile Tabs */}
          <div className="md:hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt={`${userData.firstName} ${userData.lastName}`}
                  />
                  <AvatarFallback>{getInitials()}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-lg font-bold">
                    {userData.firstName} {userData.lastName}
                  </h2>
                  <p className="text-xs text-gray-500">Member since {userData.joinDate || "Jan 2023"}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>

            <Tabs defaultValue="dashboard" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="dashboard">
                  <User className="h-4 w-4 md:mr-2" />
                  <span className="sr-only md:not-sr-only md:inline">Dashboard</span>
                </TabsTrigger>
                <TabsTrigger value="listings">
                  <Car className="h-4 w-4 md:mr-2" />
                  <span className="sr-only md:not-sr-only md:inline">Listings</span>
                </TabsTrigger>
                <TabsTrigger value="saved">
                  <Heart className="h-4 w-4 md:mr-2" />
                  <span className="sr-only md:not-sr-only md:inline">Saved</span>
                </TabsTrigger>
                <TabsTrigger value="messages">
                  <MessageSquare className="h-4 w-4 md:mr-2" />
                  <span className="sr-only md:not-sr-only md:inline">Messages</span>
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <Settings className="h-4 w-4 md:mr-2" />
                  <span className="sr-only md:not-sr-only md:inline">Settings</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Main Content */}
          <div>
            {activeTab === "dashboard" && (
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/sell">
                      <Plus className="mr-2 h-4 w-4" /> List a Car
                    </Link>
                  </Button>
                </div>

                {/* Overview Cards */}
                <div className="grid gap-3 md:gap-4 grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Active Listings</p>
                          <p className="text-2xl font-bold">3</p>
                        </div>
                        <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                          <Car className="h-5 w-5" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Saved Cars</p>
                          <p className="text-2xl font-bold">12</p>
                        </div>
                        <div className="rounded-full bg-red-100 p-3 text-red-600">
                          <Heart className="h-5 w-5" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Unread Messages</p>
                          <p className="text-2xl font-bold">5</p>
                        </div>
                        <div className="rounded-full bg-green-100 p-3 text-green-600">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Profile Views</p>
                          <p className="text-2xl font-bold">128</p>
                        </div>
                        <div className="rounded-full bg-purple-100 p-3 text-purple-600">
                          <User className="h-5 w-5" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card>
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest actions and updates</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0">
                    <div className="space-y-4">
                      {[
                        {
                          icon: Car,
                          title: "New listing created",
                          description: "You listed 2019 BMW 3 Series for $39,500",
                          time: "2 days ago",
                          iconBg: "bg-blue-100 text-blue-600",
                        },
                        {
                          icon: Heart,
                          title: "Car saved",
                          description: "You saved 2022 Tesla Model 3 to your favorites",
                          time: "3 days ago",
                          iconBg: "bg-red-100 text-red-600",
                        },
                        {
                          icon: MessageSquare,
                          title: "New message",
                          description: "You received a message about 2020 Toyota RAV4",
                          time: "5 days ago",
                          iconBg: "bg-green-100 text-green-600",
                        },
                        {
                          icon: User,
                          title: "Profile updated",
                          description: "You updated your profile information",
                          time: "1 week ago",
                          iconBg: "bg-purple-100 text-purple-600",
                        },
                      ].map((activity, index) => (
                        <div key={index} className="flex items-start">
                          <div className={`mr-4 rounded-full p-2 ${activity.iconBg}`}>
                            <activity.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{activity.title}</p>
                            <p className="text-sm text-gray-500">{activity.description}</p>
                          </div>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 md:p-6 pt-0">
                    <Button variant="outline" className="w-full">
                      View All Activity
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            )}

            {activeTab === "listings" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold">My Listings</h1>
                  <Button asChild>
                    <Link href="/sell">
                      <Plus className="mr-2 h-4 w-4" /> Add New Listing
                    </Link>
                  </Button>
                </div>

                <div className="grid gap-4">
                  {[
                    {
                      id: 1,
                      title: "2020 Toyota RAV4 XLE",
                      price: 28500,
                      status: "Active",
                      views: 245,
                      inquiries: 12,
                      image: "/placeholder.svg?height=120&width=200",
                    },
                    {
                      id: 2,
                      title: "2019 BMW 3 Series",
                      price: 39500,
                      status: "Active",
                      views: 187,
                      inquiries: 8,
                      image: "/placeholder.svg?height=120&width=200",
                    },
                    {
                      id: 3,
                      title: "2018 Ford Mustang GT",
                      price: 45000,
                      status: "Sold",
                      views: 320,
                      inquiries: 15,
                      image: "/placeholder.svg?height=120&width=200",
                    },
                  ].map((listing) => (
                    <Card key={listing.id}>
                      <CardContent className="p-0">
                        <div className="flex flex-col sm:flex-row">
                          <div className="h-48 w-full sm:h-auto sm:w-48">
                            <Image
                              src={listing.image || "/placeholder.svg"}
                              alt={listing.title}
                              width={200}
                              height={120}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-1 flex-col p-4">
                            <div className="mb-2 flex items-center justify-between">
                              <h3 className="text-lg font-semibold">{listing.title}</h3>
                              <Badge variant={listing.status === "Active" ? "default" : "secondary"}>
                                {listing.status}
                              </Badge>
                            </div>
                            <p className="mb-4 text-2xl font-bold">${listing.price.toLocaleString()}</p>
                            <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <p className="text-gray-500">Views</p>
                                <p className="font-medium">{listing.views}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Inquiries</p>
                                <p className="font-medium">{listing.inquiries}</p>
                              </div>
                            </div>
                            <div className="mt-auto flex flex-wrap gap-2">
                              <Button variant="outline" size="sm">
                                <Edit className="mr-2 h-4 w-4" /> Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                <MessageSquare className="mr-2 h-4 w-4" /> Messages
                              </Button>
                              <Button variant="destructive" size="sm">
                                Delete
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "saved" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold">Saved Cars</h1>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((id) => (
                    <Card key={id} className="overflow-hidden">
                      <div className="relative">
                        <Image
                          src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop"
                          alt="Saved Car"
                          width={300}
                          height={200}
                          className="h-48 w-full object-cover"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-2 rounded-full bg-white/80 text-red-500 hover:bg-white hover:text-red-600"
                        >
                          <Heart className="h-5 w-5 fill-current" />
                        </Button>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="mb-1 text-lg font-semibold">2022 Tesla Model 3</h3>
                        <p className="mb-2 text-xl font-bold">$58,900</p>
                        <div className="mb-4 flex flex-wrap gap-2 text-sm text-gray-500">
                          <span>2022</span>
                          <span>•</span>
                          <span>10,500 km</span>
                          <span>•</span>
                          <span>Electric</span>
                        </div>
                        <Button className="w-full">View Details</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "messages" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold">Messages</h1>

                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {[1, 2, 3, 4, 5].map((id) => (
                        <div key={id} className="flex items-start gap-4 p-4 hover:bg-gray-50">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium">Sarah Johnson</p>
                              <p className="text-xs text-gray-500">2 days ago</p>
                            </div>
                            <p className="text-sm text-gray-500">Re: 2020 Toyota RAV4 XLE</p>
                            <p className="text-sm">
                              Hi, I'm interested in your Toyota RAV4. Is it still available? I'd like to schedule a test
                              drive...
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge>New</Badge>
                            <Button variant="ghost" size="icon">
                              <ChevronRight className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold">Account Settings</h1>

                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your account details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col items-center sm:flex-row sm:items-start">
                      <div className="mb-4 sm:mb-0 sm:mr-6">
                        <Avatar className="h-24 w-24">
                          <AvatarImage
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt={`${userData.firstName} ${userData.lastName}`}
                          />
                          <AvatarFallback>{getInitials()}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1 space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="text-sm font-medium">First Name</label>
                            <input
                              type="text"
                              defaultValue={userData.firstName}
                              className="mt-1 w-full rounded-md border border-gray-300 p-2"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Last Name</label>
                            <input
                              type="text"
                              defaultValue={userData.lastName}
                              className="mt-1 w-full rounded-md border border-gray-300 p-2"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Email</label>
                          <input
                            type="email"
                            defaultValue={userData.email}
                            className="mt-1 w-full rounded-md border border-gray-300 p-2"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Phone</label>
                          <input
                            type="tel"
                            defaultValue={userData.phone || "(123) 456-7890"}
                            className="mt-1 w-full rounded-md border border-gray-300 p-2"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Location</label>
                          <input
                            type="text"
                            defaultValue="Sydney, NSW"
                            className="mt-1 w-full rounded-md border border-gray-300 p-2"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">About</label>
                          <textarea
                            defaultValue="Car enthusiast and collector. Looking for my next dream car!"
                            className="mt-1 h-24 w-full rounded-md border border-gray-300 p-2"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Manage your notification preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-gray-500">Receive email updates about your account</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">SMS Notifications</p>
                        <p className="text-sm text-gray-500">Receive text messages for important updates</p>
                      </div>
                      <Switch />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">New Listing Alerts</p>
                        <p className="text-sm text-gray-500">Get notified when new cars match your search criteria</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Security</CardTitle>
                    <CardDescription>Manage your account security</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-medium">Change Password</p>
                      <div className="mt-2 space-y-2">
                        <input
                          type="password"
                          placeholder="Current Password"
                          className="w-full rounded-md border border-gray-300 p-2"
                        />
                        <input
                          type="password"
                          placeholder="New Password"
                          className="w-full rounded-md border border-gray-300 p-2"
                        />
                        <input
                          type="password"
                          placeholder="Confirm New Password"
                          className="w-full rounded-md border border-gray-300 p-2"
                        />
                      </div>
                      <Button className="mt-2">Update Password</Button>
                    </div>
                    <Separator />
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                      <Button variant="outline" className="mt-2">
                        Enable 2FA
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-600">Danger Zone</CardTitle>
                    <CardDescription>Irreversible account actions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <Button variant="destructive" className="mt-4">
                      Delete Account
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

