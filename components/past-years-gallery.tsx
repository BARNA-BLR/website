"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Users, Camera, Download, Eye, ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

interface PastEvent {
  year: string
  title: string
  description: string
  category: string
  attendees: number
  photos: number
  highlights: string[]
}

interface PastYearsGalleryProps {
  events: PastEvent[]
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Festival: "bg-purple-100 text-purple-800",
    Cultural: "bg-blue-100 text-blue-800",
    Welfare: "bg-green-100 text-green-800",
    Milestone: "bg-yellow-100 text-yellow-800",
    Educational: "bg-indigo-100 text-indigo-800",
  }
  return colors[category] || "bg-gray-100 text-gray-800"
}

const getEventImage = (category: string, title: string) => {
  if (category === "Festival") {
    if (title.toLowerCase().includes("kali")) return "/images/kali_puja.jpg"
    if (title.toLowerCase().includes("saraswati")) return "/images/saraswati_puja.jpg"
    return "/images/durga_puja_hero.jpg"
  }
  if (category === "Welfare") {
    return "/images/csr_activity.jpg"
  }
  if (category === "Cultural") {
    return "/images/cultural_performance.jpg"
  }
  return "/images/community_gathering.jpg"
}

// Placeholder image URLs using picsum.photos for variety
const getPlaceholderImages = (eventIndex: number, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${eventIndex}-${i}`,
    src: `https://picsum.photos/seed/${eventIndex * 100 + i + 1}/800/600`,
    alt: `Event photo ${i + 1}`,
  }))
}

export function PastYearsGallery({
  events,
}: PastYearsGalleryProps) {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const [viewingImage, setViewingImage] = useState<number | null>(null)

  const selectedEventData = selectedEvent !== null ? events[selectedEvent] : null
  const galleryImages = selectedEvent !== null
    ? getPlaceholderImages(selectedEvent, Math.min(selectedEventData?.photos ?? 0, 12))
    : []

  const handlePrev = () => {
    if (viewingImage !== null && viewingImage > 0) {
      setViewingImage(viewingImage - 1)
    }
  }

  const handleNext = () => {
    if (viewingImage !== null && viewingImage < galleryImages.length - 1) {
      setViewingImage(viewingImage + 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (viewingImage !== null) {
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "Escape") setViewingImage(null)
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {events.map((event, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all duration-300 group cursor-pointer"
            onClick={() => setSelectedEvent(index)}
          >
            <div className="relative overflow-hidden">
              <Image
                src={getEventImage(event.category, event.title)}
                alt={event.title}
                width={400}
                height={250}
                loading="lazy"
                className="w-full h-36 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-2 sm:space-x-4">
                  <Button
                    size="sm"
                    className="bg-white text-black hover:bg-gray-100 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedEvent(index)
                    }}
                  >
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
                    onClick={(e) => e.stopPropagation()}
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

      {/* Photo Gallery Modal */}
      <Dialog
        open={selectedEvent !== null && viewingImage === null}
        onOpenChange={(open) => {
          if (!open) setSelectedEvent(null)
        }}
      >
        <DialogContent
          className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto p-0"
          onKeyDown={handleKeyDown}
        >
          {selectedEventData && (
            <>
              <DialogHeader className="p-6 pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className={`text-xs ${getCategoryColor(selectedEventData.category)}`}>
                    {selectedEventData.category}
                  </Badge>
                  <span className="text-xs text-gray-500">{selectedEventData.year}</span>
                </div>
                <DialogTitle className="text-xl sm:text-2xl">
                  {selectedEventData.title}
                </DialogTitle>
                <DialogDescription className="text-sm text-gray-600">
                  {selectedEventData.description}
                </DialogDescription>
                <div className="flex items-center gap-4 text-sm text-gray-500 pt-1">
                  <span className="flex items-center gap-1">
                    <Camera className="w-4 h-4" />
                    {galleryImages.length} photos
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {selectedEventData.attendees} attendees
                  </span>
                </div>
              </DialogHeader>

              <div className="px-6 pb-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {galleryImages.map((image, idx) => (
                    <button
                      key={image.id}
                      className="group/thumb relative aspect-square overflow-hidden rounded-lg border border-gray-200 hover:border-red-400 transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      onClick={() => setViewingImage(idx)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 22vw"
                        className="object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/30 transition-colors duration-200 flex items-center justify-center">
                        <Eye className="w-5 h-5 text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Full Image Viewer Overlay */}
      {viewingImage !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setViewingImage(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-label="Image viewer"
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation()
              setViewingImage(null)
            }}
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/50 px-3 py-1 rounded-full">
            {viewingImage + 1} / {galleryImages.length}
          </div>

          {/* Previous button */}
          <button
            className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 ${
              viewingImage === 0 ? "opacity-30 pointer-events-none" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation()
              handlePrev()
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image */}
          <div
            className="relative w-[90vw] h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[viewingImage]?.src ?? ""}
              alt={galleryImages[viewingImage]?.alt ?? ""}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Next button */}
          <button
            className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 ${
              viewingImage === galleryImages.length - 1 ? "opacity-30 pointer-events-none" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Event title */}
          {selectedEventData && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/50 px-4 py-2 rounded-full max-w-[80vw] truncate">
              {selectedEventData.title}
            </div>
          )}
        </div>
      )}
    </>
  )
}
