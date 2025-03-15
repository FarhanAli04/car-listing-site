"use client"

import { useState } from "react"
import { Plus, Edit, Trash2, Search, Loader2, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample brand data
const initialBrands = [
  {
    id: 1,
    name: "Toyota",
    slug: "toyota",
    logo: "https://www.carlogos.org/car-logos/toyota-logo-2019-3700x1200.png",
    count: 24,
    status: "active",
  },
  {
    id: 2,
    name: "Honda",
    slug: "honda",
    logo: "https://www.carlogos.org/car-logos/honda-logo-2000-full-1920x1080.png",
    count: 18,
    status: "active",
  },
  {
    id: 3,
    name: "Ford",
    slug: "ford",
    logo: "https://www.carlogos.org/car-logos/ford-logo-2017-1500x1101.png",
    count: 15,
    status: "active",
  },
  {
    id: 4,
    name: "BMW",
    slug: "bmw",
    logo: "https://www.carlogos.org/car-logos/bmw-logo-2020-gray-1500x1500.png",
    count: 12,
    status: "active",
  },
  {
    id: 5,
    name: "Mercedes-Benz",
    slug: "mercedes",
    logo: "https://www.carlogos.org/car-logos/mercedes-benz-logo-2011-1920x1080.png",
    count: 10,
    status: "active",
  },
  {
    id: 6,
    name: "Audi",
    slug: "audi",
    logo: "https://www.carlogos.org/car-logos/audi-logo-2016-1920x1080.png",
    count: 8,
    status: "active",
  },
  {
    id: 7,
    name: "Tesla",
    slug: "tesla",
    logo: "https://www.carlogos.org/car-logos/tesla-logo-2007-2000x2000.png",
    count: 6,
    status: "active",
  },
  {
    id: 8,
    name: "Hyundai",
    slug: "hyundai",
    logo: "https://www.carlogos.org/car-logos/hyundai-logo-2017-3000x1500.png",
    count: 14,
    status: "active",
  },
  {
    id: 9,
    name: "Mazda",
    slug: "mazda",
    logo: "https://www.carlogos.org/car-logos/mazda-logo-2018-1920x1080.png",
    count: 7,
    status: "inactive",
  },
  {
    id: 10,
    name: "Volkswagen",
    slug: "volkswagen",
    logo: "https://www.carlogos.org/car-logos/volkswagen-logo-2019-1500x1500.png",
    count: 9,
    status: "active",
  },
]

export default function BrandsPage() {
  const { toast } = useToast()
  const [brands, setBrands] = useState(initialBrands)
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // New/Edit brand state
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [currentBrand, setCurrentBrand] = useState({ id: 0, name: "", slug: "", logo: "", status: "active" })

  // Filter brands based on search term
  const filteredBrands = brands.filter(
    (brand) =>
      brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.slug.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCurrentBrand((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Generate slug from name
  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")
  }

  // Auto-generate slug when name changes
  const handleNameChange = (e) => {
    const name = e.target.value
    setCurrentBrand((prev) => ({
      ...prev,
      name,
      slug: generateSlug(name),
    }))
  }

  // Handle logo upload
  const handleLogoUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      // In a real app, you would upload the file to a server
      // For this demo, we'll just create a URL for the selected file
      const logoUrl = URL.createObjectURL(e.target.files[0])

      setCurrentBrand((prev) => ({
        ...prev,
        logo: logoUrl,
      }))
    }
  }

  // Open dialog for adding new brand
  const handleAddNew = () => {
    setIsEditing(false)
    setCurrentBrand({ id: 0, name: "", slug: "", logo: "", status: "active" })
    setIsDialogOpen(true)
  }

  // Open dialog for editing brand
  const handleEdit = (brand) => {
    setIsEditing(true)
    setCurrentBrand(brand)
    setIsDialogOpen(true)
  }

  // Handle brand save
  const handleSave = () => {
    setIsLoading(true)

    // Validate form
    if (!currentBrand.name || !currentBrand.slug) {
      toast({
        title: "Error",
        description: "Name and slug are required fields.",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      if (isEditing) {
        // Update existing brand
        setBrands((prev) => prev.map((brand) => (brand.id === currentBrand.id ? currentBrand : brand)))

        toast({
          title: "Brand updated",
          description: `The brand "${currentBrand.name}" has been updated successfully.`,
          variant: "success",
        })
      } else {
        // Add new brand
        const newBrand = {
          ...currentBrand,
          id: brands.length + 1,
          count: 0,
          logo: currentBrand.logo || `/placeholder.svg?height=40&width=40&text=${currentBrand.name.charAt(0)}`,
        }

        setBrands((prev) => [...prev, newBrand])

        toast({
          title: "Brand created",
          description: `The brand "${newBrand.name}" has been created successfully.`,
          variant: "success",
        })
      }

      setIsLoading(false)
      setIsDialogOpen(false)
    }, 1000)
  }

  // Handle brand delete
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this brand?")) {
      setIsLoading(true)

      // Simulate API call
      setTimeout(() => {
        const brandToDelete = brands.find((brand) => brand.id === id)
        setBrands((prev) => prev.filter((brand) => brand.id !== id))

        toast({
          title: "Brand deleted",
          description: `The brand "${brandToDelete.name}" has been deleted successfully.`,
          variant: "success",
        })

        setIsLoading(false)
      }, 1000)
    }
  }

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Brands</h1>
          <p className="text-gray-500">Manage car brands</p>
        </div>
        <Button onClick={handleAddNew}>
          <Plus className="mr-2 h-4 w-4" /> Add New Brand
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4">
          <CardTitle>All Brands</CardTitle>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search brands..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Brand</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Cars</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBrands.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                    No brands found
                  </TableCell>
                </TableRow>
              ) : (
                filteredBrands.map((brand) => (
                  <TableRow key={brand.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={brand.logo} alt={brand.name} />
                          <AvatarFallback>{brand.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{brand.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{brand.slug}</TableCell>
                    <TableCell>{brand.count}</TableCell>
                    <TableCell>
                      <Badge variant={brand.status === "active" ? "default" : "secondary"}>
                        {brand.status === "active" ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(brand)}>
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleDelete(brand.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add/Edit Brand Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditing ? "Edit Brand" : "Add New Brand"}</DialogTitle>
            <DialogDescription>
              {isEditing ? "Update the brand details below." : "Fill in the details to create a new brand."}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="e.g. Toyota"
                value={currentBrand.name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="slug" className="text-sm font-medium">
                Slug
              </label>
              <Input
                id="slug"
                name="slug"
                placeholder="e.g. toyota"
                value={currentBrand.slug}
                onChange={handleInputChange}
                required
              />
              <p className="text-xs text-gray-500">The slug is used in the URL, e.g., /cars/brand/toyota</p>
            </div>
            <div className="space-y-2">
              <label htmlFor="logo" className="text-sm font-medium">
                Logo
              </label>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={currentBrand.logo} alt={currentBrand.name} />
                  <AvatarFallback>{currentBrand.name ? currentBrand.name.charAt(0) : "B"}</AvatarFallback>
                </Avatar>
                <label className="flex cursor-pointer items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <Upload className="h-4 w-4" />
                  <span>Upload Logo</span>
                  <input type="file" className="hidden" accept="image/*" onChange={handleLogoUpload} />
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="status" className="text-sm font-medium">
                Status
              </label>
              <select
                id="status"
                name="status"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={currentBrand.status}
                onChange={handleInputChange}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {isEditing ? "Updating..." : "Creating..."}
                </>
              ) : (
                <>{isEditing ? "Update" : "Create"}</>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

