"use client"

import Link from "next/link"
import Image from "next/image"
import {
  LayoutDashboard,
  Car,
  Tag,
  Layers,
  BadgePercent,
  Users,
  Settings,
  LogOut,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 flex flex-col bg-lalas-dark text-white transition-all duration-300 
          ${collapsed ? "w-16" : "w-64"} 
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Logo and Toggle */}
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
          {!collapsed && (
            <Link href="/admin/dashboard" className="flex items-center">
              <div className="relative h-8 w-32 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-dM7TCDYRHQjZKoyTrLLfMBnpJIsZaM.jpeg"
                  alt="Lala's Car Sales Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          )}
          {collapsed && (
            <Link href="/admin/dashboard" className="mx-auto">
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-dM7TCDYRHQjZKoyTrLLfMBnpJIsZaM.jpeg"
                  alt="Lala's Car Sales Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Link>
          )}
          <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setCollapsed(!collapsed)}>
            <ChevronRight className={`h-5 w-5 transition-transform ${collapsed ? "rotate-180" : ""}`} />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            <li>
              <Link
                href="/admin/dashboard"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10"
              >
                <LayoutDashboard className="mr-3 h-5 w-5 text-lalas-red" />
                {!collapsed && <span>Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link
                href="/admin/cars"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10"
              >
                <Car className="mr-3 h-5 w-5 text-lalas-red" />
                {!collapsed && <span>Cars</span>}
              </Link>
            </li>
            <li>
              <Link
                href="/admin/categories"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10"
              >
                <Tag className="mr-3 h-5 w-5 text-lalas-red" />
                {!collapsed && <span>Categories</span>}
              </Link>
            </li>
            <li>
              <Link
                href="/admin/car-types"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10"
              >
                <Layers className="mr-3 h-5 w-5 text-lalas-red" />
                {!collapsed && <span>Car Types</span>}
              </Link>
            </li>
            <li>
              <Link
                href="/admin/brands"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10"
              >
                <BadgePercent className="mr-3 h-5 w-5 text-lalas-red" />
                {!collapsed && <span>Brands</span>}
              </Link>
            </li>
            <li>
              <Link
                href="/admin/users"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10"
              >
                <Users className="mr-3 h-5 w-5 text-lalas-red" />
                {!collapsed && <span>Users</span>}
              </Link>
            </li>
            <li>
              <Link
                href="/admin/settings"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10"
              >
                <Settings className="mr-3 h-5 w-5 text-lalas-red" />
                {!collapsed && <span>Settings</span>}
              </Link>
            </li>
          </ul>
        </nav>

        {/* User Profile */}
        <div className="border-t border-white/10 p-4">
          <div className="flex items-center">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-lalas-blue">
              <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Admin User"
                fill
                className="object-cover"
              />
            </div>
            {!collapsed && (
              <div className="ml-3">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-300">admin@example.com</p>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            className={`mt-4 flex w-full items-center justify-${collapsed ? "center" : "start"} text-sm text-gray-300 hover:text-white`}
          >
            <LogOut className="mr-2 h-4 w-4 text-lalas-red" />
            {!collapsed && <span>Logout</span>}
          </Button>
        </div>
      </div>
    </>
  )
}

