"use client"

import { Header } from "@/components/shared/header"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Users, Heart, Award, CheckCircle2, Sparkles } from "lucide-react"

export default function MembershipPage() {
  const upcomingBenefits = [
    "Entry for your family to all major cultural festivals (Durga Puja, Kali Puja, Saraswati Puja)",
    "Access to traditional community Bhog and festive gatherings",
    "Opportunities for youth and adults to participate in cultural performances & workshops",
    "Voting rights and active involvement in organizational decision-making",
    "Special invitations to annual celebrations, picnics, and social welfare programs",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/40 via-red-50/30 to-orange-50/40 flex flex-col justify-between">
      <div>
        <Header />
        <Navbar />

        {/* Rich Festive Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-red-900 via-red-800 to-amber-900 text-white py-12 sm:py-20 shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-4">
            <Badge className="bg-amber-400 text-red-950 hover:bg-amber-300 font-semibold px-3 py-1 text-xs sm:text-sm shadow-sm inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Join Our Cultural Family
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-amber-100 drop-shadow-sm">
              Membership Plans Coming Soon
            </h1>
            <p className="text-base sm:text-xl text-red-100 max-w-2xl mx-auto font-light leading-relaxed">
              We are updating our membership tiers and online registration process. Full details will be unveiled here soon!
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 space-y-10 sm:space-y-12">
            
            {/* Contact Callout Box */}
            <Card className="border-2 border-amber-300/80 bg-gradient-to-br from-amber-500/10 via-red-500/10 to-orange-500/10 shadow-lg rounded-2xl overflow-hidden backdrop-blur-sm">
              <CardContent className="p-8 sm:p-10 text-center space-y-5">
                <div className="w-14 h-14 bg-gradient-to-br from-red-800 to-amber-700 text-amber-200 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Phone className="w-7 h-7" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-red-950">
                  Need Immediate Membership Assistance?
                </h2>
                <p className="text-base text-gray-700 max-w-xl mx-auto leading-relaxed">
                  If you have questions regarding current memberships, renewals, or upcoming registrations, feel free to contact our team directly.
                </p>
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <a
                    href="tel:+918045678901"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-red-800 hover:bg-red-900 text-white font-medium text-base shadow-md transition-transform hover:-translate-y-0.5"
                  >
                    <Phone className="w-5 h-5 text-amber-300" />
                    +91 80 4567 8901
                  </a>
                  <a
                    href="mailto:contact@barna.co.in"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-medium text-base shadow-md transition-transform hover:-translate-y-0.5"
                  >
                    <Mail className="w-5 h-5 text-amber-200" />
                    contact@barna.co.in
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Why Join BARNA - Feature Cards */}
            <div className="space-y-8">
              <div className="text-center space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-red-950">Member Community Benefits</h3>
                <p className="text-gray-600 text-base">
                  Discover what membership with BARNA offers to Bengali families across the region:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card className="border-t-4 border-t-red-700 border-x border-b border-red-100 bg-white/90 hover:bg-white shadow-md hover:shadow-xl transition-all">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 bg-red-100 text-red-800 rounded-xl flex items-center justify-center mx-auto">
                      <Heart className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900">Cultural Preservation</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Stay connected with authentic Bengali traditions, heritage festivals, literature, and art.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-amber-600 border-x border-b border-amber-100 bg-white/90 hover:bg-white shadow-md hover:shadow-xl transition-all">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-xl flex items-center justify-center mx-auto">
                      <Users className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900">Vibrant Community</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Connect and celebrate alongside over 500 Bengali families in a warm, welcoming environment.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-orange-600 border-x border-b border-orange-100 bg-white/90 hover:bg-white shadow-md hover:shadow-xl transition-all">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 bg-orange-100 text-orange-800 rounded-xl flex items-center justify-center mx-auto">
                      <Award className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900">Grand Events</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Participate in vibrant annual Pujas, musical concerts, youth programs, and social welfare.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* What to Expect Card */}
              <div className="bg-gradient-to-r from-red-900 via-red-800 to-amber-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-amber-400 flex-shrink-0" />
                  <h4 className="font-bold text-xl sm:text-2xl text-amber-100">What to expect with BARNA Membership</h4>
                </div>
                <ul className="grid grid-cols-1 gap-3.5">
                  {upcomingBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-base text-red-100">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
