"use client"

import { useState } from "react"
import { Edit, Trash2, Search, Loader2, UserPlus, Shield, ShieldAlert, ShieldCheck } from "lucide-react"

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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample user data
const initialUsers = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    role: "admin",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=JS",
    joined: "2023-01-15",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "approver",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=SJ",
    joined: "2023-02-20",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@example.com",
    role: "staff",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=MC",
    joined: "2023-03-10",
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    role: "staff",
    status: "inactive",
    avatar: "/placeholder.svg?height=40&width=40&text=EW",
    joined: "2023-04-05",
  },
  {
    id: 5,
    name: "David Rodriguez",
    email: "david.rodriguez@example.com",
    role: "approver",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=DR",
    joined: "2023-05-12",
  },
  {
    id: 6,
    name: "Lisa Thompson",
    email: "lisa.thompson@example.com",
    role: "staff",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=LT",
    joined: "2023-06-18",
  },
  {
    id: 7,
    name: "Robert Kim",
    email: "robert.kim@example.com",
    role: "admin",
    status: "active",
    avatar: "/placeholder.svg?height=40&width=40&text=RK",
    joined: "2023-07-22",
  },
]

export default function UsersPage() {
  const { toast } = useToast()
  const [users, setUsers] = useState(initialUsers)
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // New/Edit user state
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState({
    id: 0,
    name: "",
    email: "",
    role: "staff",
    status: "active",
    password: "",
    confirmPassword: "",
  })

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCurrentUser((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle select change
  const handleSelectChange = (name, value) => {
    setCurrentUser((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Open dialog for adding new user
  const handleAddNew = () => {
    setIsEditing(false)
    setCurrentUser({
      id: 0,
      name: "",
      email: "",
      role: "staff",
      status: "active",
      password: "",
      confirmPassword: "",
    })
    setIsDialogOpen(true)
  }

  // Open dialog for editing user
  const handleEdit = (user) => {
    setIsEditing(true)
    setCurrentUser({
      ...user,
      password: "",
      confirmPassword: "",
    })
    setIsDialogOpen(true)
  }

  // Handle user save
  const handleSave = () => {
    setIsLoading(true)

    // Validate form
    if (!currentUser.name || !currentUser.email) {
      toast({
        title: "Error",
        description: "Name and email are required fields.",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(currentUser.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    // Validate password for new users
    if (!isEditing && (!currentUser.password || currentUser.password.length < 6)) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    // Validate password confirmation
    if (!isEditing && currentUser.password !== currentUser.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      if (isEditing) {
        // Update existing user
        setUsers((prev) =>
          prev.map((user) =>
            user.id === currentUser.id
              ? {
                  ...currentUser,
                  // Don't update the avatar or joined date
                  avatar: user.avatar,
                  joined: user.joined,
                }
              : user,
          ),
        )

        toast({
          title: "User updated",
          description: `The user "${currentUser.name}" has been updated successfully.`,
          variant: "success",
        })
      } else {
        // Add new user
        const newUser = {
          ...currentUser,
          id: users.length + 1,
          avatar: `/placeholder.svg?height=40&width=40&text=${currentUser.name
            .split(" ")
            .map((n) => n[0])
            .join("")}`,
          joined: new Date().toISOString().split("T")[0],
        }

        setUsers((prev) => [...prev, newUser])

        toast({
          title: "User created",
          description: `The user "${newUser.name}" has been created successfully.`,
          variant: "success",
        })
      }

      setIsLoading(false)
      setIsDialogOpen(false)
    }, 1000)
  }

  // Handle user delete
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setIsLoading(true)

      // Simulate API call
      setTimeout(() => {
        const userToDelete = users.find((user) => user.id === id)
        setUsers((prev) => prev.filter((user) => user.id !== id))

        toast({
          title: "User deleted",
          description: `The user "${userToDelete.name}" has been deleted successfully.`,
          variant: "success",
        })

        setIsLoading(false)
      }, 1000)
    }
  }

  // Get role badge variant
  const getRoleBadgeVariant = (role) => {
    switch (role) {
      case "admin":
        return "destructive"
      case "approver":
        return "default"
      case "staff":
        return "secondary"
      default:
        return "outline"
    }
  }

  // Get role icon
  const getRoleIcon = (role) => {
    switch (role) {
      case "admin":
        return <ShieldAlert className="h-4 w-4 mr-1" />
      case "approver":
        return <ShieldCheck className="h-4 w-4 mr-1" />
      case "staff":
        return <Shield className="h-4 w-4 mr-1" />
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Users</h1>
          <p className="text-gray-500">Manage admin users and permissions</p>
        </div>
        <Button onClick={handleAddNew}>
          <UserPlus className="mr-2 h-4 w-4" /> Add New User
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4">
          <CardTitle>All Users</CardTitle>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search users..."
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
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                    No users found
                  </TableCell>
                </TableRow>
              ) : (
                filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getRoleBadgeVariant(user.role)} className="flex w-fit items-center">
                        {getRoleIcon(user.role)}
                        <span className="capitalize">{user.role}</span>
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.status === "active" ? "outline" : "secondary"} className="capitalize">
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.joined}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(user)}>
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleDelete(user.id)}
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

      {/* Add/Edit User Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditing ? "Edit User" : "Add New User"}</DialogTitle>
            <DialogDescription>
              {isEditing ? "Update the user details below." : "Fill in the details to create a new user."}
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
                placeholder="e.g. John Smith"
                value={currentUser.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="e.g. john.smith@example.com"
                value={currentUser.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="role" className="text-sm font-medium">
                Role
              </label>
              <Select value={currentUser.role} onValueChange={(value) => handleSelectChange("role", value)}>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin (Full Access)</SelectItem>
                  <SelectItem value="approver">Approver (Add & Approve)</SelectItem>
                  <SelectItem value="staff">Staff (Add Only)</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500">Determines what actions the user can perform in the admin panel.</p>
            </div>
            <div className="space-y-2">
              <label htmlFor="status" className="text-sm font-medium">
                Status
              </label>
              <Select value={currentUser.status} onValueChange={(value) => handleSelectChange("status", value)}>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {!isEditing && (
              <>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={currentUser.password}
                    onChange={handleInputChange}
                    required={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="text-sm font-medium">
                    Confirm Password
                  </label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    value={currentUser.confirmPassword}
                    onChange={handleInputChange}
                    required={!isEditing}
                  />
                </div>
              </>
            )}
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

