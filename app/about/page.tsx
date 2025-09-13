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
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-red-100 text-red-800 mb-4">Established 1985</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About BARNA</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For nearly four decades, we have been the cornerstone of Bengali culture preservation and community
              building, fostering traditions that connect generations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1985 by a group of passionate Bengali immigrants, BARNA began as a small gathering of
                families who wanted to preserve their rich cultural heritage while building a new life in their adopted
                homeland.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as informal cultural meetings in community centers has grown into a vibrant organization
                serving over 500 families, organizing major festivals, educational programs, and social welfare
                initiatives.
              </p>
              <p className="text-lg text-gray-600">
                Today, we stand as a bridge between tradition and modernity, ensuring that Bengali culture continues to
                thrive for future generations while embracing the diversity of our multicultural community.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="BARNA founding members"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-red-800">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  To preserve, promote, and celebrate Bengali culture, language, and traditions while fostering
                  community unity, cultural education, and social welfare among Bengali families and the broader
                  community.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-red-800">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our organization and shape our community initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-red-800 mx-auto mb-4" />
                <CardTitle className="text-xl">Cultural Heritage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Preserving and celebrating the rich traditions, language, arts, and customs of Bengali culture.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-red-800 mx-auto mb-4" />
                <CardTitle className="text-xl">Community Unity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Building strong bonds among community members and fostering a sense of belonging and togetherness.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-12 h-12 text-red-800 mx-auto mb-4" />
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Striving for the highest standards in all our cultural programs, events, and community services.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="w-12 h-12 text-red-800 mx-auto mb-4" />
                <CardTitle className="text-xl">Inclusivity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Welcoming all individuals and families who appreciate Bengali culture, regardless of background.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h3>
            <p className="text-lg text-gray-600">
              Meet the dedicated individuals who guide our organization and community initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Rajesh Chatterjee", position: "President", experience: "15 years in BARNA leadership" },
              {
                name: "Mrs. Priya Banerjee",
                position: "Vice President",
                experience: "BARNA cultural program coordinator",
              },
              { name: "Mr. Amit Ghosh", position: "Secretary", experience: "BARNA event management specialist" },
              { name: "Mrs. Sunita Roy", position: "Treasurer", experience: "BARNA financial planning expert" },
              {
                name: "Dr. Kamal Bose",
                position: "Cultural Director",
                experience: "BARNA arts and literature advocate",
              },
              { name: "Ms. Ritu Sharma", position: "Youth Coordinator", experience: "BARNA youth program developer" },
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-red-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-red-700 font-medium">{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription>{member.experience}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
