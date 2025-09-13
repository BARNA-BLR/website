"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/csr", label: "CSR" },
    { href: "/#rewards", label: "Rewards & Recognition" },
    { href: "/timeline", label: "Timeline" },
    { href: "/past-years", label: "Past years" },
    { href: "/#gallery", label: "Gallery" },
  ]

  return (
    <nav className="bg-red-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                pathname === item.href ? "bg-red-900" : "hover:bg-red-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between py-3">
            <span className="text-sm font-medium">Navigation</span>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-red-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu Items */}
          {isMobileMenuOpen && (
            <div className="pb-4 border-t border-red-700">
              <div className="grid grid-cols-2 gap-2 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors rounded text-center ${
                      pathname === item.href ? "bg-red-900" : "hover:bg-red-700"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
