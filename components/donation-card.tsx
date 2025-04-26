"use client"

import type React from "react"

import { useState } from "react"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function DonationCard() {
  const [donationAmount, setDonationAmount] = useState<string>("100")
  const [customAmount, setCustomAmount] = useState<string>("")

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationAmount("custom")
    setCustomAmount(e.target.value)
  }

  return (
    <Card className="w-full bg-festive-white text-festive-black border-2 border-festive-yellow/80">
      <CardHeader className="bg-festive-yellow/20">
        <CardTitle className="text-festive-red">Make a Donation</CardTitle>
        <CardDescription className="text-festive-black">Support our pujas and cultural events</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-2">
          <Label htmlFor="donation-amount" className="text-festive-black">
            Select Amount
          </Label>
          <RadioGroup
            id="donation-amount"
            value={donationAmount}
            onValueChange={setDonationAmount}
            className="grid grid-cols-3 gap-4"
          >
            {["50", "100", "250", "500", "1000", "custom"].map((amount) => (
              <div key={amount}>
                <RadioGroupItem value={amount} id={`amount-${amount}`} className="peer sr-only" />
                <Label
                  htmlFor={`amount-${amount}`}
                  className="flex flex-col items-center justify-between rounded-md border-2 border-festive-orange/30 bg-festive-white p-4 hover:bg-festive-yellow/10 hover:text-festive-black peer-data-[state=checked]:border-festive-red [&:has([data-state=checked])]:border-festive-red"
                >
                  {amount === "custom" ? (
                    <span className="text-sm font-medium">Custom</span>
                  ) : (
                    <>
                      <span className="text-sm font-medium">${amount}</span>
                      {amount === "100" && (
                        <span className="flex items-center text-xs mt-1 text-festive-red">
                          <Check className="h-3 w-3 mr-1" /> Popular
                        </span>
                      )}
                    </>
                  )}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {donationAmount === "custom" && (
          <div className="space-y-2">
            <Label htmlFor="custom-amount" className="text-festive-black">
              Custom Amount
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-festive-black">$</span>
              <Input
                id="custom-amount"
                type="number"
                min="1"
                placeholder="Enter amount"
                className="pl-7 border-festive-orange text-festive-black"
                value={customAmount}
                onChange={handleCustomAmountChange}
              />
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="name" className="text-festive-black">
            Name
          </Label>
          <Input id="name" placeholder="Your name" className="border-festive-orange text-festive-black" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-festive-black">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Your email"
            className="border-festive-orange text-festive-black"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-festive-black">
            Phone (Optional)
          </Label>
          <Input id="phone" placeholder="Your phone number" className="border-festive-orange text-festive-black" />
        </div>
      </CardContent>
      <CardFooter className="bg-festive-yellow/5">
        <Button className="w-full bg-festive-red text-festive-white hover:bg-festive-red/90">Donate Now</Button>
      </CardFooter>
    </Card>
  )
}
