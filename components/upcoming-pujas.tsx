"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample upcoming puja data
const upcomingPujas = {
  "2026": [
    {
      id: 5,
      title: "Durga Puja 2026",
      date: "October 16-20, 2026",
      time: "6:00 AM - 10:00 PM",
      location: "Billava Bhavan",
...
      location: "Billava Bhavan",
      description:
        "A night of devotion and celebration honoring Goddess Kali with traditional rituals and prasad distribution.",
      registrationOpen: false,
    },
  ],
}

export function UpcomingPujas() {
  const [activeTab, setActiveTab] = useState("2026")

  return (
    <Tabs defaultValue="2026" className="w-full" onValueChange={setActiveTab}>
      <div className="flex justify-center mb-6">
        <TabsList className="bg-festive-yellow/10">
          <TabsTrigger
            value="2026"
            className="data-[state=active]:bg-festive-red data-[state=active]:text-festive-white"
          >
            2026
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
                    <a
                      href="https://maps.app.goo.gl/BstT6mPXVEPPjfWV6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 text-festive-black hover:text-red-800 transition-colors"
                    >
                      <MapPin className="h-4 w-4 text-festive-red mt-0.5" />
                      <span className="break-words">
                        {puja.location}
                        <br />
                        <span className="text-xs text-gray-500">beside Narayana Nethralaya</span>
                      </span>
                    </a>
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
