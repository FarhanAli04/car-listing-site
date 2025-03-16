"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BarChart3, Users, Car, DollarSign, ArrowUpRight, MoreHorizontal, Calendar, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AdminDashboardPage() {
  const [period, setPeriod] = useState("month")

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-500">Welcome back, Admin User!</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-[180px]">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button asChild>
            <Link href="/cars/add">Add New Car</Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Cars</CardTitle>
            <Car className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                12%
              </span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
            <BarChart3 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">856</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                8%
              </span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,427</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                5%
              </span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,780</div>
            <div className="flex items-center pt-1 text-xs text-muted-foreground">
              <span className="flex items-center text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                18%
              </span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Tables */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Sales Overview */}
        <Card className="border-2 lg:col-span-4">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
            <CardDescription>Monthly car sales and revenue trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full rounded-md border border-dashed flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Sales chart visualization would appear here</p>
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card className="border-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Where your visitors are coming from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Direct</span>
                    <span className="text-sm text-muted-foreground">45%</span>
                  </div>
                  <div className="mt-1 h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[45%] rounded-full bg-primary"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Organic Search</span>
                    <span className="text-sm text-muted-foreground">30%</span>
                  </div>
                  <div className="mt-1 h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[30%] rounded-full bg-secondary"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Social Media</span>
                    <span className="text-sm text-muted-foreground">15%</span>
                  </div>
                  <div className="mt-1 h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[15%] rounded-full bg-green-500"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Referrals</span>
                    <span className="text-sm text-muted-foreground">10%</span>
                  </div>
                  <div className="mt-1 h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[10%] rounded-full bg-yellow-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Tabs */}
      <Tabs defaultValue="recent-listings">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="recent-listings">Recent Listings</TabsTrigger>
            <TabsTrigger value="pending-approval">Pending Approval</TabsTrigger>
            <TabsTrigger value="recent-users">Recent Users</TabsTrigger>
          </TabsList>

          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        <TabsContent value="recent-listings" className="mt-4">
          <Card className="border-2">
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
                              src={listing.image || "/placeholder.svg?height=40&width=64"}
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
            <CardFooter className="flex items-center justify-center py-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/cars">View All Listings</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="pending-approval" className="mt-4">
          <Card className="border-2">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Car</TableHead>
                    <TableHead>Price</TableHead>
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
                              src={listing.image || "/placeholder.svg?height=40&width=64"}
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
            <CardFooter className="flex items-center justify-center py-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/cars/pending">View All Pending</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="recent-users" className="mt-4">
          <Card className="border-2">
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
                            <AvatarImage src={user.avatar} alt={user.name} />
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
            <CardFooter className="flex items-center justify-center py-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/users">View All Users</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Sample data
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
    image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop",
  },
]

const pendingListings = [
  {
    id: 4,
    title: "2022 Tesla Model 3",
    year: "2022",
    mileage: "10,500 km",
    price: 58900,
    seller: "Electric Vehicles Inc",
    dateAdded: "2023-03-10",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "2021 Audi Q5 Premium",
    year: "2021",
    mileage: "15,300 km",
    price: 47800,
    seller: "Luxury Auto Imports",
    dateAdded: "2023-03-09",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "2020 Mercedes-Benz C300",
    year: "2020",
    mileage: "28,400 km",
    price: 42500,
    seller: "Sarah Johnson",
    dateAdded: "2023-03-08",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop",
  },
]

const recentUsers = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    role: "Admin",
    status: "Active",
    joined: "2023-03-15",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "Approver",
    status: "Active",
    joined: "2023-03-14",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@example.com",
    role: "Admin",
    status: "Active",
    joined: "2023-03-10",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    role: "Staff",
    status: "Inactive",
    joined: "2023-03-05",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
  },
]

