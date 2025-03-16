"use client"

import type React from "react"
import { LayoutDashboard, Car, Tag, Layers, Fuel, Users, Settings } from "lucide-react"
import { AdminSidebar } from "./components/admin-sidebar"
import { ThemeProvider } from "@/components/theme-provider"

// Admin navigation items
const adminNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    roles: ["admin", "approver", "staff"],
  },
  {
    title: "Cars",
    href: "/cars",
    icon: Car,
    roles: ["admin", "approver", "staff"],
    subItems: [
      { title: "All Cars", href: "/cars" },
      { title: "Add New Car", href: "/cars/add" },
      { title: "Pending Approval", href: "/cars/pending" },
    ],
  },
  {
    title: "Categories",
    href: "/categories",
    icon: Tag,
    roles: ["admin", "approver"],
  },
  {
    title: "Car Types",
    href: "/car-types",
    icon: Layers,
    roles: ["admin", "approver"],
  },
  {
    title: "Brands",
    href: "/brands",
    icon: Car,
    roles: ["admin", "approver"],
  },
  {
    title: "Fuel Types",
    href: "/fuel-types",
    icon: Fuel,
    roles: ["admin", "approver"],
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
    roles: ["admin"],
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    roles: ["admin"],
  },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="flex min-h-screen bg-gray-100 dark:bg-lalas-dark">
        <AdminSidebar />
        <div className="flex-1 md:ml-64 transition-all duration-300">
          <main className="container mx-auto p-4 md:p-6">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  )
}

