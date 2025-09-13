import { Header } from "@/components/shared/header"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Award, Camera, Download, Eye } from "lucide-react"
import Image from "next/image"

export default function PastYearsPage() {
  const pastEvents = [
    {
      year: "2023",
      title: "Durga Puja 2023 - Golden Jubilee Special",
      description:
        "A magnificent celebration featuring traditional pandal decorations, cultural performances, and community feast attended by over 800 people.",
      category: "Festival",
      attendees: 800,
      photos: 156,
      highlights: [
        "Traditional Dhak performances",
        "Children's cultural program",
        "Community feast for 1000+",
        "Award ceremony",
      ],
    },
    {
      year: "2023",
      title: "Rabindra Jayanti Celebration",
      description:
        "An evening dedicated to Rabindranath Tagore's works with poetry recitations, songs, and dance performances by community artists.",
      category: "Cultural",
      attendees: 250,
      photos: 89,
      highlights: [
        "Poetry recitation competition",
        "Rabindra Sangeet performances",
        "Art exhibition",
        "Literary discussions",
      ],
    },
    {
      year: "2022",
      title: "Durga Puja 2022 - Post-Pandemic Revival",
      description:
        "Our triumphant return to full-scale celebrations after COVID-19, marking resilience and community spirit.",
      category: "Festival",
      attendees: 650,
      photos: 134,
      highlights: [
        "Health safety protocols",
        "Hybrid virtual participation",
        "Community solidarity",
        "Thanksgiving ceremonies",
      ],
    },
    {
      year: "2022",
      title: "Bengali New Year (Poila Boishakh)",
      description:
        "Traditional New Year celebration with cultural programs, traditional food, and community bonding activities.",
      category: "Cultural",
      attendees: 300,
      photos: 67,
      highlights: ["Traditional Bengali breakfast", "Folk dance performances", "Alpana competition", "Cultural quiz"],
    },
    {
      year: "2021",
      title: "Virtual Durga Puja 2021",
      description:
        "Innovative virtual celebration during pandemic, connecting Bengali families worldwide through digital platforms.",
      category: "Festival",
      attendees: 1200,
      photos: 45,
      highlights: ["Global virtual participation", "Online cultural programs", "Digital pandal tour", "Virtual aarti"],
    },
    {
      year: "2021",
      title: "Community Support Initiative",
      description:
        "COVID-19 relief efforts providing food, medical supplies, and emotional support to affected community members.",
      category: "Welfare",
      attendees: 150,
      photos: 78,
      highlights: ["Food distribution", "Medical aid", "Mental health support", "Volunteer coordination"],
    },
    {
      year: "2020",
      title: "35th Anniversary Celebration",
      description:
        "Milestone celebration honoring 35 years of cultural preservation and community service with special recognition ceremonies.",
      category: "Milestone",
      attendees: 450,
      photos: 112,
      highlights: ["Founder recognition", "Historical exhibition", "Legacy awards", "Time capsule ceremony"],
    },
    {
      year: "2019",
      title: "Durga Puja 2019 - Eco-Friendly Initiative",
      description:
        "Environmentally conscious celebration featuring eco-friendly decorations and sustainable practices.",
      category: "Festival",
      attendees: 750,
      photos: 189,
      highlights: ["Eco-friendly pandal", "Sustainable decorations", "Waste management", "Environmental awareness"],
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      Festival: "bg-purple-100 text-purple-800",
      Cultural: "bg-blue-100 text-blue-800",
      Welfare: "bg-green-100 text-green-800",
      Milestone: "bg-yellow-100 text-yellow-800",
      Educational: "bg-indigo-100 text-indigo-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-red-100 text-red-800 mb-4 text-xs sm:text-sm">Celebrating Our Heritage</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Past Years Archive</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Relive the memorable moments, celebrations, and achievements from BARNA's rich history of cultural events,
              festivals, and community initiatives over the years.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 sm:py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <Button
              variant="outline"
              className="border-red-800 text-red-800 bg-red-50 text-xs sm:text-sm px-3 sm:px-4 py-2"
            >
              All Events
            </Button>
            <Button
              variant="outline"
              className="hover:bg-purple-50 bg-transparent text-xs sm:text-sm px-3 sm:px-4 py-2"
            >
              Festivals
            </Button>
            <Button variant="outline" className="hover:bg-blue-50 bg-transparent text-xs sm:text-sm px-3 sm:px-4 py-2">
              Cultural Programs
            </Button>
            <Button variant="outline" className="hover:bg-green-50 bg-transparent text-xs sm:text-sm px-3 sm:px-4 py-2">
              Welfare Activities
            </Button>
            <Button
              variant="outline"
              className="hover:bg-yellow-50 bg-transparent text-xs sm:text-sm px-3 sm:px-4 py-2"
            >
              Milestones
            </Button>
          </div>
        </div>
      </section>

      {/* Past Events Grid */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={`/ceholder-svg-height-250.jpg?height=250&width=400`}
                    alt={event.title}
                    width={400}
                    height={250}
                    className="w-full h-36 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-2 sm:space-x-4">
                      <Button
                        size="sm"
                        className="bg-white text-black hover:bg-gray-100 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
                      >
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black bg-transparent text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
                      >
                        <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <Badge
                    className={`absolute top-2 sm:top-3 left-2 sm:left-3 text-xs ${getCategoryColor(event.category)}`}
                  >
                    {event.category}
                  </Badge>
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {event.year}
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg line-clamp-2">{event.title}</CardTitle>
                  <CardDescription className="line-clamp-3 text-sm">{event.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs sm:text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {event.attendees} attendees
                      </div>
                      <div className="flex items-center">
                        <Camera className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {event.photos} photos
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-xs sm:text-sm text-gray-900 mb-2">Event Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {event.highlights.slice(0, 3).map((highlight, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                        {event.highlights.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{event.highlights.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Archive Statistics */}
      <section className="py-8 sm:py-12 lg:py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Archive Statistics</h3>
            <p className="text-base sm:text-lg text-gray-600">
              A comprehensive overview of our documented events and memories over the years.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-800 mb-2">150+</div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-600">Total Events</div>
              <div className="text-xs sm:text-sm text-gray-500">Documented since 2015</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-600">Total Attendees</div>
              <div className="text-xs sm:text-sm text-gray-500">Across all events</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2">2,500+</div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-600">Photos Archived</div>
              <div className="text-xs sm:text-sm text-gray-500">High-quality memories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-2">39</div>
              <div className="text-sm sm:text-base lg:text-lg text-gray-600">Durga Puja Festivals</div>
              <div className="text-xs sm:text-sm text-gray-500">Annual celebrations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Memories */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Featured Memories</h3>
            <p className="text-base sm:text-lg text-gray-600">
              Special moments that define our community's journey and cultural heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Historic moment"
                  width={500}
                  height={300}
                  className="w-full h-48 sm:h-64 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-yellow-600 text-white text-xs">
                  Historic
                </Badge>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg sm:text-xl">First Durga Puja (1987)</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-gray-500">
                  Foundation Year Celebration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-sm sm:text-base">
                  The very first Durga Puja celebration organized by our founding members in a small community hall,
                  marking the beginning of our cultural journey that continues to this day.
                </CardDescription>
                <Button variant="outline" className="w-full bg-transparent text-sm">
                  <Camera className="w-4 h-4 mr-2" />
                  View Historic Photos
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Community achievement"
                  width={500}
                  height={300}
                  className="w-full h-48 sm:h-64 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-gold-600 text-white text-xs">
                  Achievement
                </Badge>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg sm:text-xl">Silver Jubilee (2010)</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-gray-500">25 Years Milestone</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-sm sm:text-base">
                  A grand celebration marking 25 years of cultural preservation, featuring special performances by
                  renowned artists from Bengal and recognition of founding members' contributions.
                </CardDescription>
                <Button variant="outline" className="w-full bg-transparent text-sm">
                  <Award className="w-4 h-4 mr-2" />
                  View Celebration Highlights
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
