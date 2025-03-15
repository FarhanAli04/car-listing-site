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

// Sample category data
const initialCategories = [
  { id: 1, name: "SUVs", slug: "suvs", count: 24, status: "active" },
  { id: 2, name: "Sedans", slug: "sedans", count: 18, status: "active" },
  { id: 3, name: "Hatchbacks", slug: "hatchbacks", count: 12, status: "active" },
  { id: 4, name: "Trucks", slug: "trucks", count: 8, status: "active" },
  { id: 5, name: "Luxury Cars", slug: "luxury", count: 15, status: "active" },
  { id: 6, name: "Electric Vehicles", slug: "electric", count: 10, status: "active" },
  { id: 7, name: "Hybrid Vehicles", slug: "hybrid", count: 7, status: "active" },
  { id: 8, name: "Convertibles", slug: "convertibles", count: 5, status: "active" },
  { id: 9, name: "Vans", slug: "vans", count: 3, status: "inactive" },
  { id: 10, name: "Wagons", slug: "wagons", count: 2, status: "inactive" },
]

export default function CategoriesPage() {
  const { toast } = useToast()
  const [categories, setCategories] = useState(initialCategories)
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // New/Edit category state
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [currentCategory, setCurrentCategory] = useState({ id: 0, name: "", slug: "", status: "active" })

  // Filter categories based on search term
  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.slug.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCurrentCategory((prev) => ({
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
    setCurrentCategory((prev) => ({
      ...prev,
      name,
      slug: generateSlug(name),
    }))
  }

  // Open dialog for adding new category
  const handleAddNew = () => {
    setIsEditing(false)
    setCurrentCategory({ id: 0, name: "", slug: "", status: "active" })
    setIsDialogOpen(true)
  }

  // Open dialog for editing category
  const handleEdit = (category) => {
    setIsEditing(true)
    setCurrentCategory(category)
    setIsDialogOpen(true)
  }

  // Handle category save
  const handleSave = () => {
    setIsLoading(true)

    // Validate form
    if (!currentCategory.name || !currentCategory.slug) {
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
        // Update existing category
        setCategories((prev) => prev.map((cat) => (cat.id === currentCategory.id ? currentCategory : cat)))

        toast({
          title: "Category updated",
          description: `The category "${currentCategory.name}" has been updated successfully.`,
          variant: "success",
        })
      } else {
        // Add new category
        const newCategory = {
          ...currentCategory,
          id: categories.length + 1,
          count: 0,
        }

        setCategories((prev) => [...prev, newCategory])

        toast({
          title: "Category created",
          description: `The category "${newCategory.name}" has been created successfully.`,
          variant: "success",
        })
      }

      setIsLoading(false)
      setIsDialogOpen(false)
    }, 1000)
  }

  // Handle category delete
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this category?")) {
      setIsLoading(true)

      // Simulate API call
      setTimeout(() => {
        const categoryToDelete = categories.find((cat) => cat.id === id)
        setCategories((prev) => prev.filter((cat) => cat.id !== id))

        toast({
          title: "Category deleted",
          description: `The category "${categoryToDelete.name}" has been deleted successfully.`,
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
          <h1 className="text-2xl font-bold">Categories</h1>
          <p className="text-gray-500">Manage car categories</p>
        </div>
        <Button onClick={handleAddNew}>
          <Plus className="mr-2 h-4 w-4" /> Add New Category
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4">
          <CardTitle>All Categories</CardTitle>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search categories..."
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
                <TableHead>Cars</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCategories.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                    No categories found
                  </TableCell>
                </TableRow>
              ) : (
                filteredCategories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell className="font-medium">{category.name}</TableCell>
                    <TableCell>{category.slug}</TableCell>
                    <TableCell>{category.count}</TableCell>
                    <TableCell>
                      <Badge variant={category.status === "active" ? "default" : "secondary"}>
                        {category.status === "active" ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(category)}>
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleDelete(category.id)}
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

      {/* Add/Edit Category Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditing ? "Edit Category" : "Add New Category"}</DialogTitle>
            <DialogDescription>
              {isEditing ? "Update the category details below." : "Fill in the details to create a new category."}
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
                placeholder="e.g. SUVs"
                value={currentCategory.name}
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
                placeholder="e.g. suvs"
                value={currentCategory.slug}
                onChange={handleInputChange}
                required
              />
              <p className="text-xs text-gray-500">The slug is used in the URL, e.g., /cars/category/suvs</p>
            </div>
            <div className="space-y-2">
              <label htmlFor="status" className="text-sm font-medium">
                Status
              </label>
              <select
                id="status"
                name="status"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={currentCategory.status}
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

