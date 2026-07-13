"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false)

  const primaryItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/timeline", label: "Timeline" },
    { href: "/past-years", label: "Past years" },
  ]

  const secondaryItems = [
    { href: "/csr", label: "CSR" },
    { href: "/#rewards", label: "Rewards & Recognition" },
    { href: "/#gallery", label: "Gallery" },
  ]

  return (
    <nav className="bg-sindoor text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-center items-center space-x-2">
          {primaryItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-5 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                pathname === item.href ? "bg-sindoor-hover" : "hover:bg-sindoor-hover/60"
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Desktop Hover Dropdown */}
          <div className="relative group">
            <button className="px-5 py-4 text-sm font-medium transition-colors hover:bg-sindoor-hover/60 flex items-center gap-1 focus:outline-none">
              More <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 bg-sindoor shadow-xl border border-sindoor-hover/30 rounded-b-md hidden group-hover:block z-50 min-w-[200px] overflow-hidden">
              {secondaryItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-5 py-3 text-sm font-medium transition-colors hover:bg-sindoor-hover/80 text-center ${
                    pathname === item.href ? "bg-sindoor-hover" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between py-3">
            <span className="text-sm font-semibold tracking-wide">Navigation</span>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-sindoor-hover"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu Items */}
          {isMobileMenuOpen && (
            <div className="pb-4 border-t border-sindoor-hover/20">
              <div className="grid grid-cols-2 gap-2 mt-4">
                {primaryItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2.5 text-sm font-medium transition-colors rounded text-center ${
                      pathname === item.href ? "bg-sindoor-hover" : "bg-sindoor-hover/20 hover:bg-sindoor-hover"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Mobile Expandable More Button */}
                <div className="col-span-2">
                  <button
                    onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                    className="w-full px-3 py-2.5 text-sm font-medium transition-colors rounded text-center bg-sindoor-hover/20 hover:bg-sindoor-hover flex items-center justify-center gap-1 focus:outline-none"
                  >
                    More {isMobileMoreOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {isMobileMoreOpen && (
                    <div className="grid grid-cols-2 gap-2 mt-2 bg-black/10 p-2 rounded border border-sindoor-hover/10">
                      {secondaryItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`px-3 py-2 text-xs font-medium transition-colors rounded text-center ${
                            pathname === item.href ? "bg-sindoor-hover" : "hover:bg-sindoor-hover"
                          }`}
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setIsMobileMoreOpen(false)
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
