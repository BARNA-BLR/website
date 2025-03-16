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
        <TabsList>
          <TabsTrigger value="2024">2024</TabsTrigger>
          <TabsTrigger value="2025">2025</TabsTrigger>
        </TabsList>
      </div>

      {Object.entries(upcomingPujas).map(([year, pujas]) => (
        <TabsContent key={year} value={year} className="mt-0">
          <div className="grid gap-6 md:grid-cols-2">
            {pujas.map((puja) => (
              <Card key={puja.id} className="overflow-hidden">
                <CardHeader className="bg-primary/10 pb-4">
                  <CardTitle>{puja.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{puja.date}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-primary mt-0.5" />
                      <span>{puja.time}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary mt-0.5" />
                      <span>{puja.location}</span>
                    </div>
                    <p className="text-muted-foreground">{puja.description}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-4">
                  <div className="text-sm text-muted-foreground">
                    {puja.registrationOpen ? (
                      <span className="text-green-600 font-medium">Registration Open</span>
                    ) : (
                      <span>Registration opens soon</span>
                    )}
                  </div>
                  <Button variant={puja.registrationOpen ? "default" : "outline"} disabled={!puja.registrationOpen}>
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

