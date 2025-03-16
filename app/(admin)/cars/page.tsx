"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Plus,
  Search,
  ChevronDown,
  MoreHorizontal,
  Download,
  Trash2,
  Edit,
  Eye,
  CheckCircle2,
  XCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useToast } from "@/hooks/use-toast"

// Sample car data
const carsData = [
  {
    id: 1,
    title: "2020 Toyota RAV4 XLE",
    price: 28500,
    year: "2020",
    mileage: "35,210 km",
    transmission: "Automatic",
    fuel: "Petrol",
    condition: "Used",
    location: "Sydney, NSW",
    status: "active",
    featured: true,
    seller: "Sydney Auto Group",
    dateAdded: "2023-03-15",
    image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "2021 Honda Accord Sport",
    price: 32900,
    year: "2021",
    mileage: "20,150 km",
    transmission: "Automatic",
    fuel: "Petrol",
    condition: "Used",
    location: "Melbourne, VIC",
    status: "active",
    featured: false,
    seller: "John Smith",
    dateAdded: "2023-03-14",
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "2019 BMW 3 Series",
    price: 39500,
    year: "2019",
    mileage: "45,000 km",
    transmission: "Automatic",
    fuel: "Petrol",
    condition: "Used",
    location: "Brisbane, QLD",
    status: "sold",
    featured: false,
    seller: "Premium Motors",
    dateAdded: "2023-03-12",
    image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "2022 Tesla Model 3",
    price: 58900,
    year: "2022",
    mileage: "10,500 km",
    transmission: "Automatic",
    fuel: "Electric",
    condition: "Used",
    location: "Perth, WA",
    status: "pending",
    featured: true,
    seller: "Electric Vehicles Inc",
    dateAdded: "2023-03-10",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "2018 Ford Mustang GT",
    price: 45000,
    year: "2018",
    mileage: "50,200 km",
    transmission: "Manual",
    fuel: "Petrol",
    condition: "Used",
    location: "Adelaide, SA",
    status: "active",
    featured: false,
    seller: "Classic Cars Ltd",
    dateAdded: "2023-03-08",
    image: "https://images.unsplash.com/photo-1584345604476-8ec5f452d1f2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "2021 Hyundai Tucson",
    price: 34500,
    year: "2021",
    mileage: "25,600 km",
    transmission: "Automatic",
    fuel: "Petrol",
    condition: "Used",
    location: "Canberra, ACT",
    status: "active",
    featured: false,
    seller: "Canberra Hyundai",
    dateAdded: "2023-03-07",
    image: "https://images.unsplash.com/photo-1633859036994-777d9f4a2ef2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "2020 Mercedes-Benz C300",
    price: 42500,
    year: "2020",
    mileage: "28,400 km",
    transmission: "Automatic",
    fuel: "Petrol",
    condition: "Used",
    location: "Melbourne, VIC",
    status: "active",
    featured: true,
    seller: "Prestige Auto Melbourne",
    dateAdded: "2023-03-06",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "2021 Audi Q5 Premium",
    price: 47800,
    year: "2021",
    mileage: "15,300 km",
    transmission: "Automatic",
    fuel: "Petrol",
    condition: "Used",
    location: "Sydney, NSW",
    status: "pending",
    featured: false,
    seller: "Luxury Auto Imports",
    dateAdded: "2023-03-05",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "2019 Mazda CX-5 Touring",
    price: 29700,
    year: "2019",
    mileage: "42,100 km",
    transmission: "Automatic",
    fuel: "Petrol",
    condition: "Used",
    location: "Brisbane, QLD",
    status: "active",
    featured: false,
    seller: "Brisbane Mazda",
    dateAdded: "2023-03-04",
    image: "https://images.unsplash.com/photo-1625395005224-0fce68a3cdc8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "2022 Kia Sportage GT-Line",
    price: 36900,
    year: "2022",
    mileage: "12,800 km",
    transmission: "Automatic",
    fuel: "Petrol",
    condition: "Used",
    location: "Perth, WA",
    status: "active",
    featured: true,
    seller: "Perth Kia",
    dateAdded: "2023-03-03",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop",
  },
]

export default function CarsPage() {
  const { toast } = useToast()
  const [cars, setCars] = useState(carsData)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedCars, setSelectedCars] = useState<number[]>([])
  const [sortBy, setSortBy] = useState("newest")

  // Filter cars based on search term and status
  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      car.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.seller.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || car.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Sort cars based on selected option
  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      case "oldest":
        return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
      case "price-high":
        return b.price - a.price
      case "price-low":
        return a.price - b.price
      case "title-asc":
        return a.title.localeCompare(b.title)
      case "title-desc":
        return b.title.localeCompare(a.title)
      default:
        return 0
    }
  })

  // Handle car selection
  const toggleCarSelection = (id: number) => {
    setSelectedCars((prev) => (prev.includes(id) ? prev.filter((carId) => carId !== id) : [...prev, id]))
  }

  // Handle select all cars
  const toggleSelectAll = () => {
    if (selectedCars.length === sortedCars.length) {
      setSelectedCars([])
    } else {
      setSelectedCars(sortedCars.map((car) => car.id))
    }
  }

  // Handle bulk actions
  const handleBulkAction = (action: string) => {
    if (selectedCars.length === 0) {
      toast({
        title: "No cars selected",
        description: "Please select at least one car to perform this action.",
        variant: "destructive",
      })
      return
    }

    switch (action) {
      case "delete":
        // In a real app, you would call an API to delete the cars
        setCars((prev) => prev.filter((car) => !selectedCars.includes(car.id)))
        toast({
          title: "Cars deleted",
          description: `${selectedCars.length} car(s) have been deleted successfully.`,
          variant: "success",
        })
        setSelectedCars([])
        break
      case "feature":
        // In a real app, you would call an API to feature the cars
        setCars((prev) => prev.map((car) => (selectedCars.includes(car.id) ? { ...car, featured: true } : car)))
        toast({
          title: "Cars featured",
          description: `${selectedCars.length} car(s) have been featured successfully.`,
          variant: "success",
        })
        break
      case "unfeature":
        // In a real app, you would call an API to unfeature the cars
        setCars((prev) => prev.map((car) => (selectedCars.includes(car.id) ? { ...car, featured: false } : car)))
        toast({
          title: "Cars unfeatured",
          description: `${selectedCars.length} car(s) have been unfeatured successfully.`,
          variant: "success",
        })
        break
      case "approve":
        // In a real app, you would call an API to approve the cars
        setCars((prev) =>
          prev.map((car) =>
            selectedCars.includes(car.id) && car.status === "pending" ? { ...car, status: "active" } : car,
          ),
        )
        toast({
          title: "Cars approved",
          description: `${selectedCars.length} car(s) have been approved successfully.`,
          variant: "success",
        })
        setSelectedCars([])
        break
      case "reject":
        // In a real app, you would call an API to reject the cars
        setCars((prev) =>
          prev.map((car) =>
            selectedCars.includes(car.id) && car.status === "pending" ? { ...car, status: "rejected" } : car,
          ),
        )
        toast({
          title: "Cars rejected",
          description: `${selectedCars.length} car(s) have been rejected successfully.`,
          variant: "success",
        })
        setSelectedCars([])
        break
      case "export":
        // In a real app, you would generate and download a CSV file
        toast({
          title: "Export started",
          description: `Exporting data for ${selectedCars.length} car(s).`,
          variant: "success",
        })
        break
      default:
        break
    }
  }

  // Get status badge variant
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "active":
        return "default"
      case "pending":
        return "outline"
      case "sold":
        return "secondary"
      case "rejected":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Cars</h1>
          <p className="text-gray-500">Manage your car listings</p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/cars/add">
              <Plus className="mr-2 h-4 w-4" /> Add New Car
            </Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4">
          <CardTitle>All Cars</CardTitle>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search cars..."
                className="pl-8 w-full sm:w-[250px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="sold">Sold</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="title-asc">Title: A-Z</SelectItem>
                <SelectItem value="title-desc">Title: Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {/* Bulk Actions */}
          {selectedCars.length > 0 && (
            <div className="mb-4 flex items-center justify-between bg-muted p-2 rounded-md">
              <span className="text-sm font-medium">{selectedCars.length} item(s) selected</span>
              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Actions <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Bulk Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleBulkAction("feature")}>
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Feature Selected
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleBulkAction("unfeature")}>
                      <XCircle className="mr-2 h-4 w-4" /> Unfeature Selected
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleBulkAction("approve")}>
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Approve Selected
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleBulkAction("reject")}>
                      <XCircle className="mr-2 h-4 w-4" /> Reject Selected
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleBulkAction("export")}>
                      <Download className="mr-2 h-4 w-4" /> Export Selected
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => handleBulkAction("delete")}
                      className="text-red-600 focus:text-red-600"
                    >
                      <Trash2 className="mr-2 h-4 w-4" /> Delete Selected
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline" size="sm" onClick={() => setSelectedCars([])}>
                  Clear Selection
                </Button>
              </div>
            </div>
          )}

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <Checkbox
                      checked={selectedCars.length === sortedCars.length && sortedCars.length > 0}
                      onCheckedChange={toggleSelectAll}
                      aria-label="Select all cars"
                    />
                  </TableHead>
                  <TableHead>Car</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Featured</TableHead>
                  <TableHead>Seller</TableHead>
                  <TableHead>Date Added</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedCars.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="h-24 text-center">
                      No cars found.
                    </TableCell>
                  </TableRow>
                ) : (
                  sortedCars.map((car) => (
                    <TableRow key={car.id}>
                      <TableCell>
                        <Checkbox
                          checked={selectedCars.includes(car.id)}
                          onCheckedChange={() => toggleCarSelection(car.id)}
                          aria-label={`Select ${car.title}`}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-16 overflow-hidden rounded-md">
                            <Image
                              src={car.image || "/placeholder.svg?height=40&width=64"}
                              alt={car.title}
                              width={64}
                              height={40}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{car.title}</div>
                            <div className="text-xs text-gray-500">
                              {car.year} • {car.mileage}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>${car.price.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusBadgeVariant(car.status)} className="capitalize">
                          {car.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {car.featured ? (
                          <Badge variant="secondary">Featured</Badge>
                        ) : (
                          <span className="text-gray-500 text-sm">-</span>
                        )}
                      </TableCell>
                      <TableCell>{car.seller}</TableCell>
                      <TableCell>{car.dateAdded}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href={`/cars/${car.id}`}>
                                <Eye className="mr-2 h-4 w-4" /> View
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href={`/cars/edit/${car.id}`}>
                                <Edit className="mr-2 h-4 w-4" /> Edit
                              </Link>
                            </DropdownMenuItem>
                            {car.status === "pending" && (
                              <>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                  onClick={() => {
                                    setCars((prev) =>
                                      prev.map((c) => (c.id === car.id ? { ...c, status: "active" } : c)),
                                    )
                                    toast({
                                      title: "Car approved",
                                      description: "The car has been approved successfully.",
                                      variant: "success",
                                    })
                                  }}
                                >
                                  <CheckCircle2 className="mr-2 h-4 w-4" /> Approve
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => {
                                    setCars((prev) =>
                                      prev.map((c) => (c.id === car.id ? { ...c, status: "rejected" } : c)),
                                    )
                                    toast({
                                      title: "Car rejected",
                                      description: "The car has been rejected successfully.",
                                      variant: "success",
                                    })
                                  }}
                                >
                                  <XCircle className="mr-2 h-4 w-4" /> Reject
                                </DropdownMenuItem>
                              </>
                            )}
                            <DropdownMenuSeparator />
                            {car.featured ? (
                              <DropdownMenuItem
                                onClick={() => {
                                  setCars((prev) => prev.map((c) => (c.id === car.id ? { ...c, featured: false } : c)))
                                  toast({
                                    title: "Car unfeatured",
                                    description: "The car has been removed from featured listings.",
                                    variant: "success",
                                  })
                                }}
                              >
                                <XCircle className="mr-2 h-4 w-4" /> Unfeature
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem
                                onClick={() => {
                                  setCars((prev) => prev.map((c) => (c.id === car.id ? { ...c, featured: true } : c)))
                                  toast({
                                    title: "Car featured",
                                    description: "The car has been added to featured listings.",
                                    variant: "success",
                                  })
                                }}
                              >
                                <CheckCircle2 className="mr-2 h-4 w-4" /> Feature
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              onClick={() => {
                                setCars((prev) => prev.filter((c) => c.id !== car.id))
                                toast({
                                  title: "Car deleted",
                                  description: "The car has been deleted successfully.",
                                  variant: "success",
                                })
                              }}
                              className="text-red-600 focus:text-red-600"
                            >
                              <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="mt-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

