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

// Sample fuel type data
const initialFuelTypes = [
  {
    id: 1,
    name: "Petrol",
    slug: "petrol",
    description: "Gasoline fuel for internal combustion engines",
    count: 35,
    status: "active",
  },
  {
    id: 2,
    name: "Diesel",
    slug: "diesel",
    description: "Diesel fuel for compression ignition engines",
    count: 20,
    status: "active",
  },
  { id: 3, name: "Electric", slug: "electric", description: "Battery electric vehicles", count: 15, status: "active" },
  {
    id: 4,
    name: "Hybrid",
    slug: "hybrid",
    description: "Combines internal combustion engine with electric motor",
    count: 18,
    status: "active",
  },
  {
    id: 5,
    name: "Plug-in Hybrid",
    slug: "plugin-hybrid",
    description: "Hybrid with larger battery that can be charged externally",
    count: 8,
    status: "active",
  },
  { id: 6, name: "LPG", slug: "lpg", description: "Liquefied petroleum gas", count: 3, status: "active" },
  { id: 7, name: "CNG", slug: "cng", description: "Compressed natural gas", count: 1, status: "inactive" },
  {
    id: 8,
    name: "Hydrogen",
    slug: "hydrogen",
    description: "Hydrogen fuel cell vehicles",
    count: 0,
    status: "inactive",
  },
]

export default function FuelTypesPage() {
  const { toast } = useToast()
  const [fuelTypes, setFuelTypes] = useState(initialFuelTypes)
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // New/Edit fuel type state
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [currentFuelType, setCurrentFuelType] = useState({
    id: 0,
    name: "",
    slug: "",
    description: "",
    status: "active",
  })

  // Filter fuel types based on search term
  const filteredFuelTypes = fuelTypes.filter(
    (fuelType) =>
      fuelType.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fuelType.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fuelType.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCurrentFuelType((prev) => ({
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
    setCurrentFuelType((prev) => ({
      ...prev,
      name,
      slug: generateSlug(name),
    }))
  }

  // Open dialog for adding new fuel type
  const handleAddNew = () => {
    setIsEditing(false)
    setCurrentFuelType({ id: 0, name: "", slug: "", description: "", status: "active" })
    setIsDialogOpen(true)
  }

  // Open dialog for editing fuel type
  const handleEdit = (fuelType) => {
    setIsEditing(true)
    setCurrentFuelType(fuelType)
    setIsDialogOpen(true)
  }

  // Handle fuel type save
  const handleSave = () => {
    setIsLoading(true)

    // Validate form
    if (!currentFuelType.name || !currentFuelType.slug) {
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
        // Update existing fuel type
        setFuelTypes((prev) => prev.map((type) => (type.id === currentFuelType.id ? currentFuelType : type)))

        toast({
          title: "Fuel type updated",
          description: `The fuel type "${currentFuelType.name}" has been updated successfully.`,
          variant: "success",
        })
      } else {
        // Add new fuel type
        const newFuelType = {
          ...currentFuelType,
          id: fuelTypes.length + 1,
          count: 0,
        }

        setFuelTypes((prev) => [...prev, newFuelType])

        toast({
          title: "Fuel type created",
          description: `The fuel type "${newFuelType.name}" has been created successfully.`,
          variant: "success",
        })
      }

      setIsLoading(false)
      setIsDialogOpen(false)
    }, 1000)
  }

  // Handle fuel type delete
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this fuel type?")) {
      setIsLoading(true)

      // Simulate API call
      setTimeout(() => {
        const fuelTypeToDelete = fuelTypes.find((type) => type.id === id)
        setFuelTypes((prev) => prev.filter((type) => type.id !== id))

        toast({
          title: "Fuel type deleted",
          description: `The fuel type "${fuelTypeToDelete.name}" has been deleted successfully.`,
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
          <h1 className="text-2xl font-bold">Fuel Types</h1>
          <p className="text-gray-500">Manage car fuel types</p>
        </div>
        <Button onClick={handleAddNew}>
          <Plus className="mr-2 h-4 w-4" /> Add New Fuel Type
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4">
          <CardTitle>All Fuel Types</CardTitle>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search fuel types..."
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
              {filteredFuelTypes.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                    No fuel types found
                  </TableCell>
                </TableRow>
              ) : (
                filteredFuelTypes.map((fuelType) => (
                  <TableRow key={fuelType.id}>
                    <TableCell className="font-medium">{fuelType.name}</TableCell>
                    <TableCell>{fuelType.slug}</TableCell>
                    <TableCell className="max-w-xs truncate">{fuelType.description}</TableCell>
                    <TableCell>{fuelType.count}</TableCell>
                    <TableCell>
                      <Badge variant={fuelType.status === "active" ? "default" : "secondary"}>
                        {fuelType.status === "active" ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(fuelType)}>
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleDelete(fuelType.id)}
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

      {/* Add/Edit Fuel Type Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditing ? "Edit Fuel Type" : "Add New Fuel Type"}</DialogTitle>
            <DialogDescription>
              {isEditing ? "Update the fuel type details below." : "Fill in the details to create a new fuel type."}
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
                placeholder="e.g. Petrol"
                value={currentFuelType.name}
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
                placeholder="e.g. petrol"
                value={currentFuelType.slug}
                onChange={handleInputChange}
                required
              />
              <p className="text-xs text-gray-500">The slug is used in the URL, e.g., /cars/fuel-type/petrol</p>
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Input
                id="description"
                name="description"
                placeholder="e.g. Gasoline fuel for internal combustion engines"
                value={currentFuelType.description}
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
                value={currentFuelType.status}
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

