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
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-red-100 text-red-800 mb-4 text-xs sm:text-sm">Current Festival Schedule</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">{currentFestival.name}</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Join us for five days of devotion, culture, and community celebration. Here's your complete guide to all
              the events and activities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-base sm:text-lg text-gray-700">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-red-800" />
                {currentFestival.dates}
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-red-800" />
                <span className="break-words">{currentFestival.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Schedule */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-8 sm:space-y-12">
            {festivalSchedule.map((day, dayIndex) => (
              <div key={dayIndex} className="relative">
                {/* Day Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{day.title}</h2>
                  <p className="text-base sm:text-lg text-red-800 font-medium">{day.day}</p>
                </div>

                {/* Events Timeline */}
                <div className="relative">
                  {/* Timeline Line - Hidden on mobile, visible on larger screens */}
                  <div className="hidden sm:block absolute left-16 lg:left-20 top-0 bottom-0 w-0.5 bg-red-200"></div>

                  <div className="space-y-6 sm:space-y-8">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="relative flex flex-col sm:flex-row sm:items-start">
                        {/* Timeline Dot - Hidden on mobile */}
                        <div className="hidden sm:block absolute left-[60px] lg:left-[76px] w-3 h-3 bg-red-800 rounded-full border-2 border-white shadow-lg"></div>

                        {/* Time */}
                        <div className="w-full sm:w-12 lg:w-16 flex-shrink-0 mb-2 sm:mb-0 sm:text-right">
                          <span className="text-sm font-bold text-red-800 bg-red-50 px-2 py-1 rounded sm:bg-transparent sm:px-0 sm:py-0">
                            {event.time}
                          </span>
                        </div>

                        {/* Event Content */}
                        <div className="sm:ml-8 lg:ml-12 flex-1">
                          <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader className="pb-3">
                              <div className="flex items-start justify-between">
                                <div className="flex items-start space-x-3 min-w-0 flex-1">
                                  <event.icon className="w-4 h-4 sm:w-5 sm:h-5 text-red-800 flex-shrink-0 mt-1" />
                                  <div className="min-w-0 flex-1">
                                    <CardTitle className="text-base sm:text-lg text-gray-900 break-words">
                                      {event.event}
                                    </CardTitle>
                                    <CardDescription className="text-sm sm:text-base text-gray-600 mt-1 break-words">
                                      {event.description}
                                    </CardDescription>
                                  </div>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <div className="flex items-center text-xs sm:text-sm text-gray-600">
                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                                <span className="break-words">{event.location}</span>
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
      <section className="py-8 sm:py-12 lg:py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Important Information</h3>
            <p className="text-base sm:text-lg text-gray-600">
              Please note these important details for a smooth festival experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center">
              <CardHeader className="pb-4">
                <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-red-800 mx-auto mb-4" />
                <CardTitle className="text-lg sm:text-xl">Timings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Pandal remains open from 6:00 AM to 10:00 PM daily. Special late hours on Ashtami until 11:00 PM.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-4">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg sm:text-xl">Volunteers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Volunteer registration is open. Contact the organizing committee to help with various festival
                  activities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-4">
                <Utensils className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg sm:text-xl">Food & Prasad</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
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
