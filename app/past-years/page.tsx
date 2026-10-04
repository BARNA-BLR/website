import { Header } from "@/components/shared/header"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Camera } from "lucide-react"
import Image from "next/image"
import { PastYearsGallery } from "@/components/past-years-gallery"

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


export default function PastYearsPage() {
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
          <PastYearsGallery
            events={pastEvents}
          />
        </div>
      </section>




      <Footer />
    </div>
  )
}
