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
    <Card className="w-full bg-white text-foreground">
      <CardHeader>
        <CardTitle>Make a Donation</CardTitle>
        <CardDescription>Support our pujas and cultural events</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="donation-amount">Select Amount</Label>
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
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  {amount === "custom" ? (
                    <span className="text-sm font-medium">Custom</span>
                  ) : (
                    <>
                      <span className="text-sm font-medium">${amount}</span>
                      {amount === "100" && (
                        <span className="flex items-center text-xs mt-1">
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
            <Label htmlFor="custom-amount">Custom Amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
              <Input
                id="custom-amount"
                type="number"
                min="1"
                placeholder="Enter amount"
                className="pl-7"
                value={customAmount}
                onChange={handleCustomAmountChange}
              />
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Your email" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone (Optional)</Label>
          <Input id="phone" placeholder="Your phone number" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Donate Now</Button>
      </CardFooter>
    </Card>
  )
}

