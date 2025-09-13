import { Header } from "@/components/shared/header"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, GraduationCap, Users, Leaf, HandHeart, BookOpen } from "lucide-react"
import Image from "next/image"

export default function CSRPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-red-100 text-red-800 mb-4">Corporate Social Responsibility</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Giving Back to Our Community</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to social responsibility extends beyond cultural preservation to creating positive impact
              in education, healthcare, environment, and community welfare through BARNA's initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* CSR Focus Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our CSR Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We focus our social responsibility efforts on key areas where we can make the most meaningful impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Education Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Providing scholarships, educational resources, and mentorship programs for underprivileged students in
                  our community.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Healthcare Initiatives</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Organizing health camps, awareness programs, and supporting medical treatment for those in need.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Environmental Conservation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tree plantation drives, waste management programs, and promoting sustainable practices in our
                  community.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Senior Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Supporting elderly community members with healthcare, social activities, and companionship programs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <HandHeart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Disaster Relief</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Providing emergency assistance and relief materials during natural disasters and community crises.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Offering vocational training, language classes, and professional development workshops for community
                  members.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Initiatives */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Recent Initiatives</h3>
            <p className="text-lg text-gray-600">
              Highlighting our latest community service projects and their impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Education scholarship program"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-3 left-3 bg-blue-600 text-white">Education</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Annual Scholarship Program 2024</CardTitle>
                <CardDescription className="text-sm text-gray-500">Completed - September 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Awarded scholarships worth $50,000 to 25 deserving students from underprivileged families, covering
                  tuition fees, books, and educational materials for the academic year.
                </CardDescription>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Impact: 25 students supported</span>
                  <span>Investment: $50,000</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Health camp initiative"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-3 left-3 bg-red-600 text-white">Healthcare</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Community Health Camp</CardTitle>
                <CardDescription className="text-sm text-gray-500">Completed - August 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Organized free health checkups, vaccination drives, and health awareness sessions in partnership with
                  local hospitals, serving over 300 community members.
                </CardDescription>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Impact: 300+ people served</span>
                  <span>Investment: $15,000</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Tree plantation drive"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-3 left-3 bg-green-600 text-white">Environment</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Green Bengal Initiative</CardTitle>
                <CardDescription className="text-sm text-gray-500">Ongoing - Started July 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Planted 1,000 trees across local parks and community spaces, promoting environmental awareness and
                  sustainable living practices among community members.
                </CardDescription>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Impact: 1,000 trees planted</span>
                  <span>Investment: $8,000</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Skill development workshop"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-3 left-3 bg-indigo-600 text-white">Skills</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Digital Literacy Program</CardTitle>
                <CardDescription className="text-sm text-gray-500">Ongoing - Started June 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Providing computer and digital skills training to senior citizens and unemployed youth, helping them
                  adapt to the digital age and improve employment opportunities.
                </CardDescription>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Impact: 80 participants</span>
                  <span>Investment: $12,000</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h3>
            <p className="text-lg text-gray-600">
              Measuring the positive change we've created in our community over the years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-800 mb-2">$250K+</div>
              <div className="text-lg text-gray-600">Total CSR Investment</div>
              <div className="text-sm text-gray-500">Since 2020</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-lg text-gray-600">Students Supported</div>
              <div className="text-sm text-gray-500">Through scholarships</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2,500+</div>
              <div className="text-lg text-gray-600">Trees Planted</div>
              <div className="text-sm text-gray-500">Environmental initiatives</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">1,000+</div>
              <div className="text-lg text-gray-600">Lives Impacted</div>
              <div className="text-sm text-gray-500">Through various programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our CSR Efforts</h3>
          <p className="text-xl mb-8 text-red-100">
            Be part of BARNA's mission to create positive change in the community. Your contribution, whether time or
            resources, can make a significant difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-800 hover:bg-red-50 px-8 py-3">Volunteer With Us</Button>
            <Button variant="outline" className="border-white text-white hover:bg-red-700 px-8 py-3 bg-transparent">
              Donate to Causes
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
