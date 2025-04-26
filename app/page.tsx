"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, DollarSign, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { EventCarousel } from "@/components/event-carousel"
import { UpcomingPujas } from "@/components/upcoming-pujas"
import { DonationCard } from "@/components/donation-card"
import { ActiveLink } from "@/components/active-link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-festive-white/95 backdrop-blur supports-[backdrop-filter]:bg-festive-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="BARNA Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-festive-red">BARNA</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <ActiveLink href="/" className="text-sm font-medium">
              Home
            </ActiveLink>
            <ActiveLink href="#about" className="text-sm font-medium">
              About
            </ActiveLink>
            <ActiveLink href="#pujas" className="text-sm font-medium">
              Pujas
            </ActiveLink>
            <ActiveLink href="#events" className="text-sm font-medium">
              Events
            </ActiveLink>
            <ActiveLink href="#gallery" className="text-sm font-medium">
              Gallery
            </ActiveLink>
            <ActiveLink href="#contact" className="text-sm font-medium">
              Contact
            </ActiveLink>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="sm" className="hidden md:flex bg-festive-red text-festive-white hover:bg-festive-red/90">
              Donate
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-festive-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-festive-gradient z-10 opacity-90" />
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Durga Puja Celebration"
            width={1920}
            height={800}
            className="w-full h-[70vh] object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container">
              <div className="max-w-2xl space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-festive-white">
                  Celebrate Durga Puja with BARNA
                </h1>
                <p className="text-lg text-festive-white">
                  Join us in celebrating the divine feminine energy and the triumph of good over evil
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-festive-red hover:bg-festive-red/90 text-festive-white">
                    Upcoming Events
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-festive-white text-festive-red border-festive-white hover:bg-festive-white/90"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-festive-yellow/90">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-festive-red mb-6">About BARNA</h2>
                <p className="text-festive-black mb-4">
                  BARNA is a cultural organization dedicated to preserving and celebrating Hindu traditions through
                  various pujas and community events.
                </p>
                <p className="text-festive-black mb-6">
                  Founded with the vision of bringing together the community to honor our rich cultural heritage, BARNA
                  has been organizing grand pujas for over a decade.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-festive-red" />
                    <span className="text-festive-black">Established 2010</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-festive-red" />
                    <span className="text-festive-black">500+ Members</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="BARNA Community"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="pujas" className="py-16 bg-festive-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-festive-red mb-4">Our Pujas</h2>
              <p className="text-festive-black max-w-2xl mx-auto">
                We celebrate various pujas throughout the year, with Durga Puja being our grandest celebration
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Durga Puja",
                  description: "Celebrating the victory of Goddess Durga over the demon Mahishasura",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Kali Puja",
                  description: "Honoring Goddess Kali, the destroyer of evil forces",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Saraswati Puja",
                  description: "Worshipping the goddess of knowledge, music, and arts",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Lakshmi Puja",
                  description: "Seeking blessings from the goddess of wealth and prosperity",
                  image: "/placeholder.svg?height=300&width=400",
                },
              ].map((puja, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-festive-gradient opacity-80 group-hover:opacity-90 transition-opacity z-10" />
                  <Image
                    src={puja.image || "/placeholder.svg"}
                    alt={puja.title}
                    width={400}
                    height={300}
                    className="w-full h-[250px] object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                    <h3 className="text-xl font-bold text-festive-white mb-2">{puja.title}</h3>
                    <p className="text-festive-white text-sm">{puja.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="py-16 bg-festive-yellow/90">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-festive-red mb-4">Past Events</h2>
              <p className="text-festive-black max-w-2xl mx-auto">
                Relive the memories of our past celebrations and cultural events
              </p>
            </div>
            <EventCarousel />
          </div>
        </section>

        <section id="upcoming" className="py-16 bg-festive-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-festive-red mb-4">Upcoming Pujas</h2>
              <p className="text-festive-black max-w-2xl mx-auto">
                Mark your calendars for these upcoming celebrations and join us in the festivities
              </p>
            </div>
            <UpcomingPujas />
          </div>
        </section>

        <section id="donate" className="py-16 bg-festive-gradient text-festive-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Support Our Celebrations</h2>
                <p className="mb-4 text-festive-white">
                  Your generous contributions help us organize grand pujas and cultural events for the community.
                </p>
                <p className="mb-6 text-festive-white">
                  Every donation, big or small, makes a difference in preserving our traditions and bringing the
                  community together.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-5 w-5 text-festive-white" />
                  <span>100% of donations go towards community events</span>
                </div>
              </div>
              <DonationCard />
            </div>
          </div>
        </section>

        <section id="gallery" className="py-16 bg-festive-yellow/90">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-festive-red mb-4">Gallery</h2>
              <p className="text-festive-black max-w-2xl mx-auto">
                Browse through the beautiful moments captured during our celebrations
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="relative h-[200px] rounded-lg overflow-hidden group">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=Gallery+Image+${index + 1}`}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" className="border-festive-red text-festive-red hover:bg-festive-red/10">
                View All Photos
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-festive-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-festive-red mb-6">Contact Us</h2>
                <p className="text-festive-black mb-6">
                  Have questions about our pujas or want to get involved? Reach out to us!
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-festive-red/10 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-festive-red"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-festive-black">Phone</h3>
                      <p className="text-festive-black/70">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-festive-red/10 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-festive-red"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-festive-black">Email</h3>
                      <p className="text-festive-black/70">info@barnaorganization.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-festive-red/10 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-festive-red"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-festive-black">Address</h3>
                      <p className="text-festive-black/70">123 Cultural Center, Community Ave, City, State 12345</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-festive-white p-6 rounded-lg shadow-sm border border-festive-orange">
                <h3 className="text-xl font-bold mb-4 text-festive-red">Send us a message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-festive-black">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-festive-orange bg-festive-white px-3 py-2 text-sm text-festive-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-festive-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-festive-red focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-festive-black">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-festive-orange bg-festive-white px-3 py-2 text-sm text-festive-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-festive-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-festive-red focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-festive-black">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-festive-orange bg-festive-white px-3 py-2 text-sm text-festive-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-festive-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-festive-red focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Message subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-festive-black">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-festive-orange bg-festive-white px-3 py-2 text-sm text-festive-black ring-offset-background placeholder:text-festive-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-festive-red focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button className="w-full bg-festive-red text-festive-white hover:bg-festive-red/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-festive-gradient text-festive-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="BARNA Logo"
                  width={40}
                  height={40}
                  className="rounded-full bg-festive-white"
                />
                <span className="text-xl font-bold">BARNA</span>
              </div>
              <p className="text-festive-white/90 mb-4">
                Celebrating Hindu traditions and bringing the community together through cultural events.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-festive-white hover:text-festive-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-festive-white hover:text-festive-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-festive-white hover:text-festive-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-festive-white hover:text-festive-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-festive-white/80 hover:text-festive-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-festive-white/80 hover:text-festive-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#pujas" className="text-festive-white/80 hover:text-festive-white">
                    Pujas
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="text-festive-white/80 hover:text-festive-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-festive-white/80 hover:text-festive-white">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-festive-white/80 hover:text-festive-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Pujas</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-festive-white/80 hover:text-festive-white">
                    Durga Puja
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-festive-white/80 hover:text-festive-white">
                    Kali Puja
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-festive-white/80 hover:text-festive-white">
                    Saraswati Puja
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-festive-white/80 hover:text-festive-white">
                    Lakshmi Puja
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-festive-white/80 mb-4">
                Subscribe to our newsletter to get updates on upcoming events and pujas.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-festive-orange bg-festive-orange/20 px-3 py-2 text-sm text-festive-white placeholder:text-festive-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-festive-yellow/80 focus-visible:ring-offset-2 focus-visible:ring-offset-festive-red"
                />
                <Button className="w-full bg-festive-yellow text-festive-black hover:bg-festive-yellow/90">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-festive-orange/30 mt-8 pt-8 text-center text-festive-white/60">
            <p>© {new Date().getFullYear()} BARNA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
