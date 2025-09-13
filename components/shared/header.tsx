"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Announcement Banner */}
      <div className="bg-yellow-400 text-black py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-xs sm:text-sm font-semibold mx-4 sm:mx-8">
            🎉 Special Announcement: Durga Puja 2024 Registration Now Open! Limited Spots Available - Register Today!
          </span>
          <span className="text-xs sm:text-sm font-semibold mx-4 sm:mx-8">
            📅 Cultural Workshop Series Starting November 15th - Bengali Language, Dance & Music Classes
          </span>
          <span className="text-xs sm:text-sm font-semibold mx-4 sm:mx-8">
            🏆 Annual Awards Ceremony - December 20th, 2024 - Nominate Outstanding Community Members
          </span>
        </div>
      </div>

      {/* Top Header Bar - Hidden on mobile */}
      <div className="hidden md:block bg-red-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>Welcome to BARNA</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <Link href="#" className="hover:text-red-200 transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="hover:text-red-200 transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="hover:text-red-200 transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="hover:text-red-200 transition-colors">
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>info@barna.org</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>(+91) 9876543210</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-red-800 shadow-lg flex-shrink-0">
                <Image
                  src="/barna-logo.jpg"
                  alt="BARNA Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">BARNA</h1>
                <p className="text-red-700 font-medium text-sm sm:text-base truncate">বার্না সাংস্কৃতিক সংস্থা</p>
              </div>
            </Link>

            {/* Desktop Membership Button */}
            <Button className="hidden sm:block bg-red-800 hover:bg-red-900 text-white px-4 sm:px-6 py-2">
              Membership
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="sm:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="sm:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <Button className="bg-red-800 hover:bg-red-900 text-white w-full">Membership</Button>
                <div className="flex justify-center space-x-4 pt-2">
                  <Link href="#" className="text-red-800 hover:text-red-600">
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-red-800 hover:text-red-600">
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-red-800 hover:text-red-600">
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-red-800 hover:text-red-600">
                    <Youtube className="w-5 h-5" />
                  </Link>
                </div>
                <div className="text-center text-sm text-gray-600 space-y-1">
                  <div>info@barna.org</div>
                  <div>(+91) 9876543210</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
