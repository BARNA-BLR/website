"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()

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
    <nav className="bg-red-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-3 text-sm font-medium transition-colors ${
                pathname === item.href ? "bg-red-900" : "hover:bg-red-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
