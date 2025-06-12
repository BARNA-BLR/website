"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Award,
  Heart,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CulturalAssociationWebsite() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const images = [
    { src: "/placeholder.svg?height=400&width=600", alt: "Cultural celebration 1" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Durga Puja festival" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Community gathering" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Traditional dance performance" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Bengali cultural event" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Top Header Bar */}
      <div className="bg-red-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>Welcome to Bengal Cultural Association</span>
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
                <span>info@bengalcultural.org</span>
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
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-red-800 rounded-full flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-xs font-bold">BCA</div>
                  <div className="text-xs">2024</div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Bengal Cultural Association</h1>
                <p className="text-red-700 font-medium">বাঙালি সাংস্কৃতিক সংস্থা</p>
              </div>
            </div>
            <Button className="bg-red-800 hover:bg-red-900 text-white px-6 py-2">Membership</Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <Link href="#" className="bg-red-900 px-4 py-3 text-sm font-medium">
              Home
            </Link>
            <Link href="#" className="hover:bg-red-700 px-4 py-3 text-sm font-medium transition-colors">
              About Us
            </Link>
            <Link href="#" className="hover:bg-red-700 px-4 py-3 text-sm font-medium transition-colors">
              CSR
            </Link>
            <Link href="#" className="hover:bg-red-700 px-4 py-3 text-sm font-medium transition-colors">
              Awards
            </Link>
            <Link href="#" className="hover:bg-red-700 px-4 py-3 text-sm font-medium transition-colors">
              Timeline
            </Link>
            <Link href="#" className="hover:bg-red-700 px-4 py-3 text-sm font-medium transition-colors">
              Past years
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-red-100 text-red-800 mb-4">Celebrating Heritage Since 1985</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Preserving Bengali Culture & Traditions</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join our vibrant community celebrating Bengali culture through festivals, arts, literature, and social
                activities. Experience the rich heritage of Bengal in the heart of the city.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-red-800 hover:bg-red-900">Join Our Community</Button>
                <Button variant="outline" className="border-red-800 text-red-800 hover:bg-red-50">
                  Upcoming Events
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="w-full h-[400px] object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentSlide ? "bg-white" : "bg-white/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the various ways we celebrate and preserve Bengali culture through our diverse programs and
              activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="w-12 h-12 text-red-800 mx-auto mb-4" />
                <CardTitle className="text-xl">Cultural Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Durga Puja, Kali Puja, Poila Boishakh, and other traditional festivals celebrated with grandeur and
                  authenticity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-red-800 mx-auto mb-4" />
                <CardTitle className="text-xl">Community Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Language classes, cultural workshops, and social gatherings that bring our community together.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-12 h-12 text-red-800 mx-auto mb-4" />
                <CardTitle className="text-xl">Arts & Literature</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Poetry recitations, drama performances, music concerts, and art exhibitions showcasing Bengali talent.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-red-800 mx-auto mb-4" />
                <CardTitle className="text-xl">Social Welfare</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Community support programs, educational scholarships, and charitable initiatives for those in need.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
            <p className="text-lg text-gray-600">
              Don't miss these exciting cultural celebrations and community gatherings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge className="bg-red-800 text-white">Festival</Badge>
                  <span className="text-sm text-gray-500">Oct 15-19, 2024</span>
                </div>
                <CardTitle className="text-xl">Durga Puja 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Join us for the grandest celebration of the year with traditional rituals, cultural programs, and
                  community feast.
                </CardDescription>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  Community Center, Main Hall
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge className="bg-orange-600 text-white">Workshop</Badge>
                  <span className="text-sm text-gray-500">Nov 5, 2024</span>
                </div>
                <CardTitle className="text-xl">Bengali Language Class</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Learn to read, write, and speak Bengali with our experienced instructors. All ages welcome.
                </CardDescription>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  Education Wing, Room 201
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge className="bg-green-600 text-white">Cultural</Badge>
                  <span className="text-sm text-gray-500">Nov 12, 2024</span>
                </div>
                <CardTitle className="text-xl">Rabindra Sangeet Evening</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  An evening dedicated to the timeless songs of Rabindranath Tagore performed by local artists.
                </CardDescription>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  Auditorium, Main Stage
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Moments from Our Community</h3>
            <p className="text-lg text-gray-600">Capturing the joy and spirit of our cultural celebrations.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative group cursor-pointer">
                <Image
                  src={`/placeholder.svg?height=200&width=200`}
                  alt={`Gallery image ${i}`}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg group-hover:opacity-75 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-red-800 text-red-800 hover:bg-red-50">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Become Part of Our Cultural Family</h3>
          <p className="text-xl mb-8 text-red-100">
            Join hundreds of families who celebrate Bengali heritage together. Experience the warmth of community and
            the richness of our traditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-800 hover:bg-red-50 px-8 py-3">Apply for Membership</Button>
            <Button variant="outline" className="border-white text-white hover:bg-red-700 px-8 py-3">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Bengal Cultural Association</h4>
              <p className="text-gray-400 mb-4">Preserving and promoting Bengali culture and traditions since 1985.</p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Cultural Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Language Classes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Youth Programs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Senior Activities
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>123 Cultural Center St, City</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(+91) 9876543210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@bengalcultural.org</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bengal Cultural Association. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
