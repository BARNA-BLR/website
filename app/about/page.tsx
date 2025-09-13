import { Header } from "@/components/shared/header"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Award, Calendar } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-red-100 text-red-800 mb-4 text-xs sm:text-sm">Established 1985</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">About BARNA</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              For nearly four decades, we have been the cornerstone of Bengali culture preservation and community
              building, fostering traditions that connect generations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600">
                <p>
                  Founded in 1985 by a group of passionate Bengali immigrants, BARNA began as a small gathering of
                  families who wanted to preserve their rich cultural heritage while building a new life in their
                  adopted homeland.
                </p>
                <p>
                  What started as informal cultural meetings in community centers has grown into a vibrant organization
                  serving over 500 families, organizing major festivals, educational programs, and social welfare
                  initiatives.
                </p>
                <p>
                  Today, we stand as a bridge between tradition and modernity, ensuring that Bengali culture continues
                  to thrive for future generations while embracing the diversity of our multicultural community.
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="BARNA founding members"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-8 sm:py-12 lg:py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="text-center">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl text-red-800">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base sm:text-lg">
                  To preserve, promote, and celebrate Bengali culture, language, and traditions while fostering
                  community unity, cultural education, and social welfare among Bengali families and the broader
                  community.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl text-red-800">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base sm:text-lg">
                  To be the leading cultural organization that bridges generations, preserves Bengali heritage, and
                  creates a vibrant, inclusive community where traditions flourish and cultural values are passed on to
                  future generations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our organization and shape our community initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-red-800 mx-auto mb-4" />
                <CardTitle className="text-lg sm:text-xl">Cultural Heritage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Preserving and celebrating the rich traditions, language, arts, and customs of Bengali culture.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-red-800 mx-auto mb-4" />
                <CardTitle className="text-lg sm:text-xl">Community Unity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Building strong bonds among community members and fostering a sense of belonging and togetherness.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-red-800 mx-auto mb-4" />
                <CardTitle className="text-lg sm:text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Striving for the highest standards in all our cultural programs, events, and community services.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-red-800 mx-auto mb-4" />
                <CardTitle className="text-lg sm:text-xl">Inclusivity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Welcoming all individuals and families who appreciate Bengali culture, regardless of background.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
