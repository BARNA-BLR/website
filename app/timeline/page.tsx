import { Header } from "@/components/shared/header"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, Music, Utensils, Star, Calendar } from "lucide-react"

export default function TimelinePage() {
  // Current festival schedule - easily updatable for different festivals
  const currentFestival = {
    name: "Durga Puja 2024",
    dates: "October 15-19, 2024",
    location: "BARNA Community Center",
  }

  const festivalSchedule = [
    {
      day: "Day 1 - October 15, 2024",
      title: "Shashthi - Festival Inauguration",
      events: [
        {
          time: "6:00 AM",
          event: "Bodhon & Amantran",
          description: "Awakening of the Goddess and invitation ceremony",
          location: "Main Pandal",
          icon: Star,
        },
        {
          time: "10:00 AM",
          event: "Shashthi Puja",
          description: "Traditional morning prayers and rituals",
          location: "Main Pandal",
          icon: Star,
        },
        {
          time: "6:00 PM",
          event: "Evening Aarti",
          description: "Community evening prayers with dhak and conch",
          location: "Main Pandal",
          icon: Music,
        },
        {
          time: "7:30 PM",
          event: "Cultural Program",
          description: "Opening ceremony with traditional dance performances",
          location: "Main Stage",
          icon: Music,
        },
      ],
    },
    {
      day: "Day 2 - October 16, 2024",
      title: "Saptami - Community Celebration",
      events: [
        {
          time: "7:00 AM",
          event: "Saptami Puja",
          description: "Morning rituals and prayers",
          location: "Main Pandal",
          icon: Star,
        },
        {
          time: "12:00 PM",
          event: "Community Lunch",
          description: "Traditional Bengali feast for all attendees",
          location: "Community Hall",
          icon: Utensils,
        },
        {
          time: "4:00 PM",
          event: "Children's Program",
          description: "Cultural activities and competitions for kids",
          location: "Youth Center",
          icon: Users,
        },
        {
          time: "7:00 PM",
          event: "Rabindra Sangeet Evening",
          description: "Musical performances of Tagore's compositions",
          location: "Main Stage",
          icon: Music,
        },
      ],
    },
    {
      day: "Day 3 - October 17, 2024",
      title: "Ashtami - Grand Celebration",
      events: [
        {
          time: "6:00 AM",
          event: "Ashtami Puja",
          description: "Most auspicious day prayers and rituals",
          location: "Main Pandal",
          icon: Star,
        },
        {
          time: "11:00 AM",
          event: "Kumari Puja",
          description: "Worship of young girls as manifestation of Devi",
          location: "Main Pandal",
          icon: Star,
        },
        {
          time: "1:00 PM",
          event: "Grand Feast",
          description: "Special community lunch with traditional dishes",
          location: "Community Hall",
          icon: Utensils,
        },
        {
          time: "6:00 PM",
          event: "Dhunuchi Dance",
          description: "Traditional incense dance competition",
          location: "Main Pandal",
          icon: Music,
        },
        {
          time: "8:00 PM",
          event: "Cultural Extravaganza",
          description: "Grand cultural program with guest artists",
          location: "Main Stage",
          icon: Music,
        },
      ],
    },
    {
      day: "Day 4 - October 18, 2024",
      title: "Navami - Devotional Day",
      events: [
        {
          time: "7:00 AM",
          event: "Navami Puja",
          description: "Morning prayers and special rituals",
          location: "Main Pandal",
          icon: Star,
        },
        {
          time: "10:00 AM",
          event: "Homa Yajna",
          description: "Sacred fire ceremony for blessings",
          location: "Main Pandal",
          icon: Star,
        },
        {
          time: "2:00 PM",
          event: "Community Service",
          description: "Food distribution to underprivileged families",
          location: "Community Outreach",
          icon: Users,
        },
        {
          time: "7:00 PM",
          event: "Devotional Music",
          description: "Bhajans and devotional songs",
          location: "Main Stage",
          icon: Music,
        },
      ],
    },
    {
      day: "Day 5 - October 19, 2024",
      title: "Dashami - Farewell Ceremony",
      events: [
        {
          time: "8:00 AM",
          event: "Dashami Puja",
          description: "Final day prayers and rituals",
          location: "Main Pandal",
          icon: Star,
        },
        {
          time: "11:00 AM",
          event: "Sindur Khela",
          description: "Traditional vermillion play by married women",
          location: "Main Pandal",
          icon: Users,
        },
        {
          time: "1:00 PM",
          event: "Final Community Feast",
          description: "Last meal together before immersion",
          location: "Community Hall",
          icon: Utensils,
        },
        {
          time: "4:00 PM",
          event: "Visarjan Procession",
          description: "Farewell procession to the immersion site",
          location: "Procession Route",
          icon: Users,
        },
        {
          time: "6:00 PM",
          event: "Immersion Ceremony",
          description: "Final farewell to Goddess Durga",
          location: "River/Lake",
          icon: Star,
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-red-100 text-red-800 mb-4">Current Festival Schedule</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{currentFestival.name}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Join us for five days of devotion, culture, and community celebration. Here's your complete guide to all
              the events and activities.
            </p>
            <div className="flex justify-center items-center space-x-6 text-lg text-gray-700">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-red-800" />
                {currentFestival.dates}
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-red-800" />
                {currentFestival.location}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-12">
            {festivalSchedule.map((day, dayIndex) => (
              <div key={dayIndex} className="relative">
                {/* Day Header */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{day.title}</h2>
                  <p className="text-lg text-red-800 font-medium">{day.day}</p>
                </div>

                {/* Events Timeline */}
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-20 top-0 bottom-0 w-0.5 bg-red-200"></div>

                  <div className="space-y-8">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="relative flex items-start">
                        {/* Timeline Dot */}
                        <div className="absolute left-[76px] w-3 h-3 bg-red-800 rounded-full border-2 border-white shadow-lg"></div>

                        {/* Time */}
                        <div className="w-16 flex-shrink-0 text-right">
                          <span className="text-sm font-bold text-red-800">{event.time}</span>
                        </div>

                        {/* Event Content */}
                        <div className="ml-12 flex-1">
                          <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader className="pb-3">
                              <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-3">
                                  <event.icon className="w-5 h-5 text-red-800 flex-shrink-0 mt-1" />
                                  <div>
                                    <CardTitle className="text-lg text-gray-900">{event.event}</CardTitle>
                                    <CardDescription className="text-gray-600 mt-1">
                                      {event.description}
                                    </CardDescription>
                                  </div>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="w-4 h-4 mr-1" />
                                {event.location}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Important Information</h3>
            <p className="text-lg text-gray-600">
              Please note these important details for a smooth festival experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-red-800 mx-auto mb-4" />
                <CardTitle className="text-xl">Timings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Pandal remains open from 6:00 AM to 10:00 PM daily. Special late hours on Ashtami until 11:00 PM.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Volunteers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Volunteer registration is open. Contact the organizing committee to help with various festival
                  activities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Utensils className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Food & Prasad</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Free community meals available daily. Special prasad distribution after each puja ceremony.
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
