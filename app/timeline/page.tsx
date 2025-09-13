import { Header } from "@/components/shared/header"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Award, Building, Heart, Star } from "lucide-react"

export default function TimelinePage() {
  const timelineEvents = [
    {
      year: "1985",
      title: "Foundation of BARNA",
      description:
        "A small group of 15 Bengali families came together to establish BARNA with the vision of preserving Bengali culture and traditions.",
      icon: Building,
      category: "Foundation",
    },
    {
      year: "1987",
      title: "First Durga Puja Celebration",
      description:
        "Organized our inaugural Durga Puja festival, which became the cornerstone event that brought the entire community together.",
      icon: Star,
      category: "Cultural",
    },
    {
      year: "1992",
      title: "Community Center Establishment",
      description:
        "Acquired our first permanent venue, providing a dedicated space for cultural activities, meetings, and community gatherings.",
      icon: Building,
      category: "Infrastructure",
    },
    {
      year: "1995",
      title: "Youth Program Launch",
      description:
        "Initiated specialized programs for children and youth, including Bengali language classes, dance, and music training.",
      icon: Users,
      category: "Education",
    },
    {
      year: "2000",
      title: "Millennium Celebration",
      description:
        "Hosted a grand millennium celebration featuring cultural performances, art exhibitions, and community feast for over 500 attendees.",
      icon: Star,
      category: "Cultural",
    },
    {
      year: "2005",
      title: "First Scholarship Program",
      description:
        "Launched our educational scholarship program, supporting deserving students from the Bengali community in their academic pursuits.",
      icon: Award,
      category: "Education",
    },
    {
      year: "2010",
      title: "Silver Jubilee Celebration",
      description:
        "Celebrated 25 years of cultural preservation and community service with a week-long festival featuring renowned artists from Bengal.",
      icon: Award,
      category: "Milestone",
    },
    {
      year: "2012",
      title: "Senior Citizens Program",
      description:
        "Established dedicated programs for elderly community members, including health camps, social activities, and support services.",
      icon: Heart,
      category: "Welfare",
    },
    {
      year: "2015",
      title: "Digital Transformation",
      description:
        "Launched our official website and social media presence, connecting with Bengali communities worldwide and modernizing our outreach.",
      icon: Building,
      category: "Technology",
    },
    {
      year: "2018",
      title: "Community Outreach Expansion",
      description:
        "Extended our services beyond the Bengali community, partnering with other cultural organizations for multicultural events.",
      icon: Users,
      category: "Expansion",
    },
    {
      year: "2020",
      title: "COVID-19 Relief Efforts",
      description:
        "Organized extensive relief efforts during the pandemic, providing food, medical supplies, and emotional support to affected families.",
      icon: Heart,
      category: "Welfare",
    },
    {
      year: "2022",
      title: "New Cultural Center",
      description:
        "Inaugurated our expanded cultural center with modern facilities, including an auditorium, library, and multipurpose halls.",
      icon: Building,
      category: "Infrastructure",
    },
    {
      year: "2024",
      title: "40th Anniversary Preparations",
      description:
        "Currently preparing for our ruby anniversary celebration, planning special events and initiatives to mark four decades of service.",
      icon: Star,
      category: "Milestone",
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      Foundation: "bg-red-100 text-red-800",
      Cultural: "bg-purple-100 text-purple-800",
      Infrastructure: "bg-blue-100 text-blue-800",
      Education: "bg-green-100 text-green-800",
      Milestone: "bg-yellow-100 text-yellow-800",
      Welfare: "bg-pink-100 text-pink-800",
      Technology: "bg-indigo-100 text-indigo-800",
      Expansion: "bg-orange-100 text-orange-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-red-100 text-red-800 mb-4">Journey Through Time</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Timeline</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the remarkable journey of BARNA from its humble beginnings in 1985 to becoming a cornerstone of
              Bengali culture preservation and community service.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-200"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-red-800 rounded-full border-4 border-white shadow-lg"></div>

                  {/* Event Content */}
                  <div className="ml-16 flex-1">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <event.icon className="w-6 h-6 text-red-800" />
                            <span className="text-2xl font-bold text-red-800">{event.year}</span>
                          </div>
                          <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                        </div>
                        <CardTitle className="text-xl text-gray-900">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 text-base leading-relaxed">
                          {event.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Journey in Numbers</h3>
            <p className="text-lg text-gray-600">
              Key milestones and achievements over nearly four decades of service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-800 mb-2">39</div>
              <div className="text-lg text-gray-600">Years of Service</div>
              <div className="text-sm text-gray-500">Since 1985</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-lg text-gray-600">Member Families</div>
              <div className="text-sm text-gray-500">Active community</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">39</div>
              <div className="text-lg text-gray-600">Durga Puja Festivals</div>
              <div className="text-sm text-gray-500">Annual celebrations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-lg text-gray-600">Cultural Events</div>
              <div className="text-sm text-gray-500">Programs organized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Looking Ahead</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              As we approach our 40th anniversary, we continue to evolve and expand our mission while staying true to
              our core values.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="w-12 h-12 text-red-800 mx-auto mb-4" />
                <CardTitle className="text-xl">2025 Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Launch new youth leadership programs, expand digital outreach, and establish partnerships with
                  international Bengali organizations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Plans for a dedicated Bengali library, expanded community kitchen, and modern audio-visual facilities
                  for enhanced cultural programs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Expand CSR initiatives, increase scholarship programs, and develop sustainable community welfare
                  projects for long-term impact.
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
