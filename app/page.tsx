"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { Calendar, Users, Award, Heart, Camera, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/shared/header"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"

export default function HomePage() {
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
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <Badge className="bg-red-100 text-red-800 mb-4 text-xs sm:text-sm">Celebrating Heritage Since 1985</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Preserving Bengali Culture & Traditions
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                Join our vibrant community celebrating Bengali culture through festivals, arts, literature, and social
                activities. Experience the rich heritage of Bengal in the heart of the city with BARNA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-red-800 hover:bg-red-900 w-full sm:w-auto">Join Our Community</Button>
                <Button
                  variant="outline"
                  className="border-red-800 text-red-800 hover:bg-red-50 bg-transparent w-full sm:w-auto"
                >
                  Upcoming Events
                </Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
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
                        className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
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
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What We Offer</h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the various ways we celebrate and preserve Bengali culture through our diverse programs and
              activities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-red-800 mx-auto mb-4" />
                <CardTitle className="text-lg sm:text-xl">Cultural Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Durga Puja, Kali Puja, Poila Boishakh, and other traditional festivals celebrated with grandeur and
                  authenticity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-red-800 mx-auto mb-4" />
                <CardTitle className="text-lg sm:text-xl">Community Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Language classes, cultural workshops, and social gatherings that bring our community together.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-red-800 mx-auto mb-4" />
                <CardTitle className="text-lg sm:text-xl">Arts & Literature</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Poetry recitations, drama performances, music concerts, and art exhibitions showcasing Bengali talent.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-red-800 mx-auto mb-4" />
                <CardTitle className="text-lg sm:text-xl">Social Welfare</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Community support programs, educational scholarships, and charitable initiatives for those in need.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-8 sm:py-12 lg:py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
            <p className="text-base sm:text-lg text-gray-600">
              Don't miss these exciting cultural celebrations and community gatherings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <Badge className="bg-red-800 text-white w-fit">Festival</Badge>
                  <span className="text-sm text-gray-500">Oct 15-19, 2024</span>
                </div>
                <CardTitle className="text-lg sm:text-xl">Durga Puja 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-sm sm:text-base">
                  Join us for the grandest celebration of the year with traditional rituals, cultural programs, and
                  community feast.
                </CardDescription>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="break-words">Community Center, Main Hall</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <Badge className="bg-orange-600 text-white w-fit">Workshop</Badge>
                  <span className="text-sm text-gray-500">Nov 5, 2024</span>
                </div>
                <CardTitle className="text-lg sm:text-xl">Bengali Language Class</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-sm sm:text-base">
                  Learn to read, write, and speak Bengali with our experienced instructors. All ages welcome.
                </CardDescription>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="break-words">Education Wing, Room 201</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <Badge className="bg-green-600 text-white w-fit">Cultural</Badge>
                  <span className="text-sm text-gray-500">Nov 12, 2024</span>
                </div>
                <CardTitle className="text-lg sm:text-xl">Rabindra Sangeet Evening</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-sm sm:text-base">
                  An evening dedicated to the timeless songs of Rabindranath Tagore performed by local artists.
                </CardDescription>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="break-words">Auditorium, Main Stage</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rewards & Recognition Section */}
      <section id="rewards" className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Rewards & Recognition</h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Celebrating outstanding contributions to our community and Bengali culture preservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Award className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-600 mx-auto mb-4" />
                <CardTitle className="text-lg sm:text-xl">Cultural Excellence Award</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Recognizing individuals who have made exceptional contributions to preserving and promoting Bengali
                  arts and culture.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Users className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg sm:text-xl">Community Service Award</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Honoring volunteers and members who have dedicated their time and effort to community welfare and
                  development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-lg sm:text-xl">Youth Achievement Award</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Celebrating young talents who excel in academics, arts, sports, or community service while maintaining
                  cultural values.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Community Gallery</h3>
            <p className="text-base sm:text-lg text-gray-600">
              Capturing precious moments from our cultural celebrations, festivals, and community events.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Durga Puja 2023", category: "Festival", images: 45 },
              { title: "Rabindra Jayanti Celebration", category: "Cultural", images: 32 },
              { title: "Bengali New Year", category: "Festival", images: 28 },
              { title: "Youth Cultural Program", category: "Performance", images: 38 },
              { title: "Community Picnic", category: "Social", images: 52 },
              { title: "Language Workshop", category: "Educational", images: 24 },
              { title: "Kali Puja 2023", category: "Festival", images: 41 },
              { title: "Senior Citizens Meet", category: "Social", images: 19 },
              { title: "Dance Competition", category: "Performance", images: 35 },
            ].map((album, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={`/ceholder-svg-height-250.jpg?height=250&width=400`}
                    alt={album.title}
                    width={400}
                    height={250}
                    className="w-full h-36 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Camera className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                  </div>
                  <Badge className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-red-800 text-white text-xs">
                    {album.category}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base sm:text-lg line-clamp-2">{album.title}</CardTitle>
                  <CardDescription className="flex items-center text-xs sm:text-sm text-gray-600">
                    <Camera className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    {album.images} photos
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button className="bg-red-800 hover:bg-red-900 text-white px-6 sm:px-8 py-3 w-full sm:w-auto">
              View All Albums
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Become Part of Our Cultural Family</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-red-100">
            Join hundreds of families who celebrate Bengali heritage together with BARNA. Experience the warmth of
            community and the richness of our traditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-800 hover:bg-red-50 px-6 sm:px-8 py-3 w-full sm:w-auto">
              Apply for Membership
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-red-700 px-6 sm:px-8 py-3 bg-transparent w-full sm:w-auto"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
