"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample upcoming puja data
const upcomingPujas = {
  "2024": [
    {
      id: 1,
      title: "Durga Puja 2024",
      date: "October 9-13, 2024",
      time: "6:00 AM - 10:00 PM",
      location: "BARNA Cultural Center",
      description:
        "Join us for the grand celebration of Durga Puja with traditional rituals, cultural performances, and community feasts.",
      registrationOpen: true,
    },
    {
      id: 2,
      title: "Kali Puja 2024",
      date: "November 1, 2024",
      time: "6:00 PM - 12:00 AM",
      location: "BARNA Cultural Center",
      description:
        "A night of devotion and celebration honoring Goddess Kali with traditional rituals and prasad distribution.",
      registrationOpen: false,
    },
  ],
  "2025": [
    {
      id: 3,
      title: "Saraswati Puja 2025",
      date: "February 4, 2025",
      time: "8:00 AM - 8:00 PM",
      location: "BARNA Cultural Center",
      description:
        "Celebrate the goddess of knowledge and arts with traditional rituals, cultural performances, and special programs for students.",
      registrationOpen: false,
    },
    {
      id: 4,
      title: "Lakshmi Puja 2025",
      date: "October 31, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "BARNA Cultural Center",
      description:
        "Join us for Lakshmi Puja to seek blessings for prosperity and abundance with traditional rituals and prasad distribution.",
      registrationOpen: false,
    },
  ],
}

export function UpcomingPujas() {
  const [activeTab, setActiveTab] = useState("2024")

  return (
    <Tabs defaultValue="2024" className="w-full" onValueChange={setActiveTab}>
      <div className="flex justify-center mb-6">
        <TabsList className="bg-festive-yellow/10">
          <TabsTrigger
            value="2024"
            className="data-[state=active]:bg-festive-red data-[state=active]:text-festive-white"
          >
            2024
          </TabsTrigger>
          <TabsTrigger
            value="2025"
            className="data-[state=active]:bg-festive-red data-[state=active]:text-festive-white"
          >
            2025
          </TabsTrigger>
        </TabsList>
      </div>

      {Object.entries(upcomingPujas).map(([year, pujas]) => (
        <TabsContent key={year} value={year} className="mt-0">
          <div className="grid gap-6 md:grid-cols-2">
            {pujas.map((puja) => (
              <Card key={puja.id} className="overflow-hidden border-festive-orange">
                <CardHeader className="bg-festive-yellow/70 pb-4">
                  <CardTitle className="text-festive-red">{puja.title}</CardTitle>
                  <CardDescription className="text-festive-black">
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="h-4 w-4 text-festive-red" />
                      <span>{puja.date}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 bg-festive-white">
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-festive-red mt-0.5" />
                      <span className="text-festive-black">{puja.time}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-festive-red mt-0.5" />
                      <span className="text-festive-black">{puja.location}</span>
                    </div>
                    <p className="text-festive-black/70">{puja.description}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t border-festive-orange p-4 bg-festive-white">
                  <div className="text-sm text-festive-black/70">
                    {puja.registrationOpen ? (
                      <span className="text-green-600 font-medium">Registration Open</span>
                    ) : (
                      <span>Registration opens soon</span>
                    )}
                  </div>
                  <Button
                    variant={puja.registrationOpen ? "default" : "outline"}
                    disabled={!puja.registrationOpen}
                    className={
                      puja.registrationOpen
                        ? "bg-festive-red text-festive-white hover:bg-festive-red/90"
                        : "border-festive-red text-festive-red hover:bg-festive-red/10"
                    }
                  >
                    {puja.registrationOpen ? "Register Now" : "Coming Soon"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
