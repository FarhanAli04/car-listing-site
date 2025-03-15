"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  BarChart3,
  Users,
  Car,
  DollarSign,
  Bell,
  Search,
  Menu,
  Home,
  Settings,
  LogOut,
  ChevronDown,
  Plus,
  Filter,
  MoreHorizontal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar for desktop */}
      <aside className="hidden w-64 flex-col bg-white shadow-sm md:flex">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/admin/dashboard" className="flex items-center">
            <Car className="mr-2 h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Car Admin</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                    item.title === "Dashboard"
                      ? "bg-primary text-primary-foreground"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t p-4">
          <div className="flex items-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin User" />
              <AvatarFallback>AU</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-500">admin@example.com</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" /> Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="h-14 border-b px-4">
            <SheetTitle className="flex items-center">
              <Car className="mr-2 h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Car Admin</span>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex-1 overflow-auto p-4">
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                      item.title === "Dashboard"
                        ? "bg-primary text-primary-foreground"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t p-4">
            <div className="flex items-center">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin User" />
                <AvatarFallback>AU</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-500">admin@example.com</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex h-14 items-center border-b bg-white px-4 md:px-6">
          <Button variant="ghost" size="icon" className="mr-2 md:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>

          <div className="relative ml-auto flex items-center gap-4 md:ml-0">
            <form className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input type="search" placeholder="Search..." className="w-64 bg-gray-100 pl-8 focus-visible:bg-white" />
            </form>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                3
              </span>
            </Button>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="grid gap-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-gray-500">Welcome back, Admin User!</p>
              </div>
              <div className="flex items-center gap-2">
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add New Car
                </Button>
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Cars</CardTitle>
                  <Car className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,284</div>
                  <p className="text-xs text-gray-500">
                    <span className="text-green-500">+12%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
                  <BarChart3 className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">856</div>
                  <p className="text-xs text-gray-500">
                    <span className="text-green-500">+8%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                  <Users className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3,427</div>
                  <p className="text-xs text-gray-500">
                    <span className="text-green-500">+5%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$24,780</div>
                  <p className="text-xs text-gray-500">
                    <span className="text-green-500">+18%</span> from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Tabs for different sections */}
            <Tabs defaultValue="recent-listings">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="recent-listings">Recent Listings</TabsTrigger>
                  <TabsTrigger value="pending-approval">Pending Approval</TabsTrigger>
                  <TabsTrigger value="recent-users">Recent Users</TabsTrigger>
                </TabsList>

                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>All</DropdownMenuItem>
                      <DropdownMenuItem>Active</DropdownMenuItem>
                      <DropdownMenuItem>Pending</DropdownMenuItem>
                      <DropdownMenuItem>Sold</DropdownMenuItem>
                      <DropdownMenuItem>Expired</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Select defaultValue="newest">
                    <SelectTrigger className="w-[130px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="oldest">Oldest</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <TabsContent value="recent-listings" className="mt-4">
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Car</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Seller</TableHead>
                          <TableHead>Date Added</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentListings.map((listing) => (
                          <TableRow key={listing.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-16 overflow-hidden rounded-md">
                                  <Image
                                    src="https://images.unsplash.com/photo-1581540222194-0def2dda95b8?q=80&w=800&auto=format&fit=crop"
                                    alt={listing.title}
                                    width={64}
                                    height={40}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div>
                                  <div className="font-medium">{listing.title}</div>
                                  <div className="text-xs text-gray-500">
                                    {listing.year} • {listing.mileage}
                                  </div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>${listing.price.toLocaleString()}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  listing.status === "Active"
                                    ? "default"
                                    : listing.status === "Pending"
                                      ? "outline"
                                      : listing.status === "Sold"
                                        ? "secondary"
                                        : "destructive"
                                }
                              >
                                {listing.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{listing.seller}</TableCell>
                            <TableCell>{listing.dateAdded}</TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Actions</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>View Details</DropdownMenuItem>
                                  <DropdownMenuItem>Edit Listing</DropdownMenuItem>
                                  <DropdownMenuItem>Change Status</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pending-approval" className="mt-4">
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Car</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Seller</TableHead>
                          <TableHead>Date Added</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pendingListings.map((listing) => (
                          <TableRow key={listing.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-16 overflow-hidden rounded-md">
                                  <Image
                                    src="https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=800&auto=format&fit=crop"
                                    alt={listing.title}
                                    width={64}
                                    height={40}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div>
                                  <div className="font-medium">{listing.title}</div>
                                  <div className="text-xs text-gray-500">
                                    {listing.year} • {listing.mileage}
                                  </div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>${listing.price.toLocaleString()}</TableCell>
                            <TableCell>
                              <Badge variant="outline">Pending</Badge>
                            </TableCell>
                            <TableCell>{listing.seller}</TableCell>
                            <TableCell>{listing.dateAdded}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button size="sm" variant="outline">
                                  Reject
                                </Button>
                                <Button size="sm">Approve</Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="recent-users" className="mt-4">
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>User</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Joined</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentUsers.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt={user.name} />
                                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="font-medium">{user.name}</div>
                              </div>
                            </TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>
                              <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                            </TableCell>
                            <TableCell>{user.joined}</TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Actions</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                                  <DropdownMenuItem>Edit User</DropdownMenuItem>
                                  <DropdownMenuItem>Change Role</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

// Sample data
const sidebarItems = [
  { title: "Dashboard", href: "/admin/dashboard", icon: Home },
  { title: "Cars", href: "/admin/cars", icon: Car },
  { title: "Users", href: "/admin/users", icon: Users },
  { title: "Categories", href: "/admin/categories", icon: BarChart3 },
  { title: "Settings", href: "/admin/settings", icon: Settings },
]

const recentListings = [
  {
    id: 1,
    title: "2020 Toyota RAV4 XLE",
    year: "2020",
    mileage: "35,210 km",
    price: 28500,
    status: "Active",
    seller: "Sydney Auto Group",
    dateAdded: "2023-03-15",
  },
  {
    id: 2,
    title: "2021 Honda Accord Sport",
    year: "2021",
    mileage: "20,150 km",
    price: 32900,
    status: "Active",
    seller: "John Smith",
    dateAdded: "2023-03-14",
  },
  {
    id: 3,
    title: "2019 BMW 3 Series",
    year: "2019",
    mileage: "45,000 km",
    price: 39500,
    status: "Sold",
    seller: "Premium Motors",
    dateAdded: "2023-03-12",
  },
  {
    id: 4,
    title: "2022 Tesla Model 3",
    year: "2022",
    mileage: "10,500 km",
    price: 58900,
    status: "Pending",
    seller: "Electric Vehicles Inc",
    dateAdded: "2023-03-10",
  },
  {
    id: 5,
    title: "2018 Ford Mustang GT",
    year: "2018",
    mileage: "50,200 km",
    price: 45000,
    status: "Active",
    seller: "Classic Cars Ltd",
    dateAdded: "2023-03-08",
  },
]

const pendingListings = [
  {
    id: 1,
    title: "2022 Tesla Model 3",
    year: "2022",
    mileage: "10,500 km",
    price: 58900,
    seller: "Electric Vehicles Inc",
    dateAdded: "2023-03-10",
  },
  {
    id: 2,
    title: "2021 Audi Q5 Premium",
    year: "2021",
    mileage: "15,300 km",
    price: 47800,
    seller: "Luxury Auto Imports",
    dateAdded: "2023-03-09",
  },
  {
    id: 3,
    title: "2020 Mercedes-Benz C300",
    year: "2020",
    mileage: "28,400 km",
    price: 42500,
    seller: "Sarah Johnson",
    dateAdded: "2023-03-08",
  },
]

const recentUsers = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    role: "User",
    status: "Active",
    joined: "2023-03-15",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "Seller",
    status: "Active",
    joined: "2023-03-14",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@example.com",
    role: "Admin",
    status: "Active",
    joined: "2023-03-10",
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    role: "User",
    status: "Inactive",
    joined: "2023-03-05",
  },
]

