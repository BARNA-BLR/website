"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <>
      {/* Announcement Banner */}
      <div className="bg-yellow-400 text-black py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-sm font-semibold mx-8">
            🎉 Special Announcement: Durga Puja 2024 Registration Now Open! Limited Spots Available - Register Today!
          </span>
          <span className="text-sm font-semibold mx-8">
            📅 Cultural Workshop Series Starting November 15th - Bengali Language, Dance & Music Classes
          </span>
          <span className="text-sm font-semibold mx-8">
            🏆 Annual Awards Ceremony - December 20th, 2024 - Nominate Outstanding Community Members
          </span>
        </div>
      </div>

      {/* Top Header Bar */}
      <div className="bg-red-800 text-white py-2 px-4">
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
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-red-800 shadow-lg">
                <Image
                  src="/barna-logo.jpg"
                  alt="BARNA Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">BARNA</h1>
                <p className="text-red-700 font-medium">বার্না সাংস্কৃতিক সংস্থা</p>
              </div>
            </Link>
            <Button className="bg-red-800 hover:bg-red-900 text-white px-6 py-2">Membership</Button>
          </div>
        </div>
      </header>
    </>
  )
}
