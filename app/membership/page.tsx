"use client"

import { useState } from "react"
import { Header } from "@/components/shared/header"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react"

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    membershipType: "",
    familySize: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone || !formData.membershipType) {
      alert("Please fill in all required fields.")
      return
    }
    setSubmitted(true)
  }

  const membershipTiers = [
    {
      name: "Annual Family Membership",
      price: "₹3,000 / year",
      description: "Perfect for families wanting to actively participate in all annual events and cultural programs.",
      benefits: [
        "Free entry for family to Durga Puja, Kali Puja, & Saraswati Puja",
        "Access to community Bhog and festive lunches",
        "Participation in cultural performances and rehearsals",
        "Invitation to general body meetings",
      ],
      popular: true,
    },
    {
      name: "Life Membership",
      price: "₹25,000 (One-time)",
      description: "For long-term community members seeking a permanent role in preserving Bengali culture.",
      benefits: [
        "All benefits of Annual Membership for lifetime",
        "Priority seating at major cultural events",
        "Special recognition in annual journals and souvenirs",
        "Voting rights in organizational elections",
      ],
      popular: false,
    },
    {
      name: "Patron Membership",
      price: "₹50,000+ (One-time)",
      description: "For individuals wanting to extend extraordinary philanthropic support to our cultural mission.",
      benefits: [
        "All benefits of Lifetime Membership",
        "Exclusive invitation to Patron Dinners with guest artists",
        "Prime logo/name placement on promotional materials",
        "Lifetime exemption from special event charges",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="bg-red-100 text-red-800 mb-4 text-xs sm:text-sm">Join Our Cultural Family</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Membership Application</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Become a valued member of BARNA. Connect with Bengali heritage, participate in our grand celebrations, and build lifelong bonds with over 500 families.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Membership Tiers column */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Select a Membership Tier</h2>
              <div className="grid grid-cols-1 gap-6">
                {membershipTiers.map((tier, index) => (
                  <Card 
                    key={index} 
                    className={`relative border-2 transition-all ${
                      tier.popular 
                        ? "border-sindoor bg-sindoor-light/20 shadow-md" 
                        : "border-gray-200 bg-white hover:border-sindoor/30"
                    }`}
                  >
                    {tier.popular && (
                      <Badge className="absolute top-4 right-4 bg-sindoor text-white flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Most Popular
                      </Badge>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">{tier.name}</CardTitle>
                      <div className="text-2xl font-bold text-sindoor mt-2">{tier.price}</div>
                      <CardDescription className="mt-2 text-sm">{tier.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-xs text-gray-900 uppercase tracking-wider mb-2">Key Benefits:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {tier.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <div>
              <Card className="sticky top-24 border-2 border-festive-orange/30 shadow-lg">
                <CardHeader className="bg-sindoor text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <ShieldCheck className="w-5 h-5" /> Interest Form
                  </CardTitle>
                  <CardDescription className="text-red-100 text-xs sm:text-sm">
                    Submit your details and our team will get in touch with you shortly.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {submitted ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Thank You!</h3>
                      <p className="text-sm text-gray-600">
                        Your membership application has been received. Our executive committee will review it and contact you within 48 hours.
                      </p>
                      <Button 
                        onClick={() => {
                          setSubmitted(false)
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            membershipType: "",
                            familySize: "",
                            message: "",
                          })
                        }}
                        className="w-full bg-sindoor hover:bg-sindoor-hover text-white mt-4"
                      >
                        Submit Another Form
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                        <Input 
                          id="name" 
                          placeholder="Your Name" 
                          required 
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your.email@example.com" 
                          required 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                        <Input 
                          id="phone" 
                          placeholder="10-digit mobile number" 
                          required 
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tier">Membership Tier <span className="text-red-500">*</span></Label>
                        <Select 
                          value={formData.membershipType} 
                          onValueChange={(val) => setFormData({ ...formData, membershipType: val })}
                        >
                          <SelectTrigger id="tier">
                            <SelectValue placeholder="Select Tier" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="annual">Annual Family (₹3,000/yr)</SelectItem>
                            <SelectItem value="life">Life Membership (₹25,000)</SelectItem>
                            <SelectItem value="patron">Patron Membership (₹50,000+)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="size">Family Size</Label>
                        <Select 
                          value={formData.familySize} 
                          onValueChange={(val) => setFormData({ ...formData, familySize: val })}
                        >
                          <SelectTrigger id="size">
                            <SelectValue placeholder="Number of Members" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 (Individual)</SelectItem>
                            <SelectItem value="2">2 Members</SelectItem>
                            <SelectItem value="3-4">3 - 4 Members</SelectItem>
                            <SelectItem value="5+">5+ Members</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message / Notes (Optional)</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us a bit about your family or ask any questions." 
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-sindoor hover:bg-sindoor-hover text-white font-medium py-3 rounded-lg">
                        Submit Application
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
