"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const announcements = [
    "🎉 Special Announcement: Durga Puja 2026 Registration Now Open! Limited Spots Available - Register Today!",
    "📅 Cultural Workshop Series Starting November 15th - Bengali Language, Dance & Music Classes",
    "🏆 Annual Awards Ceremony - December 20th, 2026 - Nominate Outstanding Community Members"
  ]
  const [announcementIndex, setAnnouncementIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [announcements.length])

  return (
    <>
      {/* Announcement Banner */}
      <div className="bg-yellow-400 text-black py-2 overflow-hidden h-10 flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={announcementIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="text-xs sm:text-sm font-semibold px-4 text-center truncate absolute"
          >
            {announcements[announcementIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top Header Bar - Hidden on mobile */}
      <div className="hidden md:block bg-sindoor text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>Welcome to BARNA</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <Link href="https://facebook.com" target="_blank" className="hover:text-red-200 transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-red-200 transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-red-200 transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="https://youtube.com" target="_blank" className="hover:text-red-200 transition-colors">
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
                <span>+91 80 4567 8901</span>
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
            <Link href="/membership">
              <Button className="hidden sm:block bg-sindoor hover:bg-sindoor-hover text-white px-4 sm:px-6 py-2">
                Membership
              </Button>
            </Link>

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
                <Link href="/membership" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="bg-sindoor hover:bg-sindoor-hover text-white w-full">Membership</Button>
                </Link>
                <div className="flex justify-center space-x-4 pt-2">
                  <Link href="https://facebook.com" target="_blank" className="text-sindoor hover:text-red-600">
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link href="https://instagram.com" target="_blank" className="text-sindoor hover:text-red-600">
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link href="https://twitter.com" target="_blank" className="text-sindoor hover:text-red-600">
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link href="https://youtube.com" target="_blank" className="text-sindoor hover:text-red-600">
                    <Youtube className="w-5 h-5" />
                  </Link>
                </div>
                <div className="text-center text-sm text-gray-600 space-y-1">
                  <div>info@barna.org</div>
                  <div>+91 80 4567 8901</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
