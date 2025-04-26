"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Sample event data
const events = [
  {
    id: 1,
    title: "Durga Puja 2023",
    description: "A grand celebration of Durga Puja with cultural performances and traditional rituals",
    date: "October 2023",
    image: "/placeholder.svg?height=500&width=800&text=Durga+Puja+2023",
  },
  {
    id: 2,
    title: "Saraswati Puja 2023",
    description: "Celebrating the goddess of knowledge and arts with music and dance performances",
    date: "February 2023",
    image: "/placeholder.svg?height=500&width=800&text=Saraswati+Puja+2023",
  },
  {
    id: 3,
    title: "Kali Puja 2022",
    description: "A night of devotion and celebration honoring Goddess Kali",
    date: "November 2022",
    image: "/placeholder.svg?height=500&width=800&text=Kali+Puja+2022",
  },
  {
    id: 4,
    title: "Lakshmi Puja 2022",
    description: "A beautiful celebration seeking blessings for prosperity and abundance",
    date: "October 2022",
    image: "/placeholder.svg?height=500&width=800&text=Lakshmi+Puja+2022",
  },
]

export function EventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, currentIndex])

  return (
    <div
      className="relative rounded-xl overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative h-[500px] w-full">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-festive-gradient opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-festive-white">
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              <p className="text-festive-white mb-2">{event.description}</p>
              <p className="text-sm text-festive-white/70">{event.date}</p>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-festive-red/50 text-festive-white hover:bg-festive-red/70 z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-festive-red/50 text-festive-white hover:bg-festive-red/70 z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {events.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex ? "bg-festive-yellow/80 w-4" : "bg-festive-white/50",
            )}
            onClick={() => goToSlide(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
