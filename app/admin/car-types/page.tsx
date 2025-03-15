"use client"

import { useState } from "react"
import { Plus, Edit, Trash2, Search, Loader2 } from "lucide-react"

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

// Sample car type data
const initialCarTypes = [
  {
    id: 1,
    name: "Sedan",
    slug: "sedan",
    description: "A traditional car with four doors and a trunk",
    count: 18,
    status: "active",
  },
  {
    id: 2,
    name: "SUV",
    slug: "suv",
    description: "Sport Utility Vehicle with higher ground clearance",
    count: 24,
    status: "active",
  },
  {
    id: 3,
    name: "Hatchback",
    slug: "hatchback",
    description: "Compact car with a rear door that opens upward",
    count: 12,
    status: "active",
  },
  {
    id: 4,
    name: "Coupe",
    slug: "coupe",
    description: "Two-door car with a fixed roof and sloping rear",
    count: 8,
    status: "active",
  },
  {
    id: 5,
    name: "Convertible",
    slug: "convertible",
    description: "Car with a retractable or removable roof",
    count: 5,
    status: "active",
  },
  { id: 6, name: "Wagon", slug: "wagon", description: "Car with extended rear cargo area", count: 4, status: "active" },
  { id: 7, name: "Truck", slug: "truck", description: "Vehicle with an open cargo area", count: 10, status: "active" },
  {
    id: 8,
    name: "Van",
    slug: "van",
    description: "Box-shaped vehicle for transporting people or goods",
    count: 3,
    status: "active",
  },
  { id: 9, name: "Minivan", slug: "minivan", description: "Van designed for family use", count: 2, status: "inactive" },
  {
    id: 10,
    name: "Crossover",
    slug: "crossover",
    description: "Combines features of SUV and passenger car",
    count: 15,
    status: "active",
  },
]

export default function CarTypesPage() {
  const { toast } = useToast()
  const [carTypes, setCarTypes] = useState(initialCarTypes)
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // New/Edit car type state
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [currentCarType, setCurrentCarType] = useState({ id: 0, name: "", slug: "", description: "", status: "active" })

  // Filter car types based on search term
  const filteredCarTypes = carTypes.filter(
    (carType) =>
      carType.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      carType.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
      carType.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCurrentCarType((prev) => ({
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
    setCurrentCarType((prev) => ({
      ...prev,
      name,
      slug: generateSlug(name),
    }))
  }

  // Open dialog for adding new car type
  const handleAddNew = () => {
    setIsEditing(false)
    setCurrentCarType({ id: 0, name: "", slug: "", description: "", status: "active" })
    setIsDialogOpen(true)
  }

  // Open dialog for editing car type
  const handleEdit = (carType) => {
    setIsEditing(true)
    setCurrentCarType(carType)
    setIsDialogOpen(true)
  }

  // Handle car type save
  const handleSave = () => {
    setIsLoading(true)

    // Validate form
    if (!currentCarType.name || !currentCarType.slug) {
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
        // Update existing car type
        setCarTypes((prev) => prev.map((type) => (type.id === currentCarType.id ? currentCarType : type)))

        toast({
          title: "Car type updated",
          description: `The car type "${currentCarType.name}" has been updated successfully.`,
          variant: "success",
        })
      } else {
        // Add new car type
        const newCarType = {
          ...currentCarType,
          id: carTypes.length + 1,
          count: 0,
        }

        setCarTypes((prev) => [...prev, newCarType])

        toast({
          title: "Car type created",
          description: `The car type "${newCarType.name}" has been created successfully.`,
          variant: "success",
        })
      }

      setIsLoading(false)
      setIsDialogOpen(false)
    }, 1000)
  }

  // Handle car type delete
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this car type?")) {
      setIsLoading(true)

      // Simulate API call
      setTimeout(() => {
        const carTypeToDelete = carTypes.find((type) => type.id === id)
        setCarTypes((prev) => prev.filter((type) => type.id !== id))

        toast({
          title: "Car type deleted",
          description: `The car type "${carTypeToDelete.name}" has been deleted successfully.`,
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
          <h1 className="text-2xl font-bold">Car Types</h1>
          <p className="text-gray-500">Manage car body types</p>
        </div>
        <Button onClick={handleAddNew}>
          <Plus className="mr-2 h-4 w-4" /> Add New Car Type
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4">
          <CardTitle>All Car Types</CardTitle>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search car types..."
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
                <TableHead>Name</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Cars</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCarTypes.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                    No car types found
                  </TableCell>
                </TableRow>
              ) : (
                filteredCarTypes.map((carType) => (
                  <TableRow key={carType.id}>
                    <TableCell className="font-medium">{carType.name}</TableCell>
                    <TableCell>{carType.slug}</TableCell>
                    <TableCell className="max-w-xs truncate">{carType.description}</TableCell>
                    <TableCell>{carType.count}</TableCell>
                    <TableCell>
                      <Badge variant={carType.status === "active" ? "default" : "secondary"}>
                        {carType.status === "active" ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(carType)}>
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleDelete(carType.id)}
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

      {/* Add/Edit Car Type Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditing ? "Edit Car Type" : "Add New Car Type"}</DialogTitle>
            <DialogDescription>
              {isEditing ? "Update the car type details below." : "Fill in the details to create a new car type."}
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
                placeholder="e.g. SUV"
                value={currentCarType.name}
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
                placeholder="e.g. suv"
                value={currentCarType.slug}
                onChange={handleInputChange}
                required
              />
              <p className="text-xs text-gray-500">The slug is used in the URL, e.g., /cars/type/suv</p>
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Input
                id="description"
                name="description"
                placeholder="e.g. Sport Utility Vehicle with higher ground clearance"
                value={currentCarType.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="status" className="text-sm font-medium">
                Status
              </label>
              <select
                id="status"
                name="status"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={currentCarType.status}
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

