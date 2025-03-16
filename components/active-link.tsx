"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ActiveLinkProps {
  href: string
  className?: string
  children: React.ReactNode
}

export function ActiveLink({ href, className, children }: ActiveLinkProps) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (href === "/") {
        setIsActive(window.scrollY < 100)
        return
      }

      const section = document.querySelector(href)
      if (section) {
        const rect = section.getBoundingClientRect()
        const isInView = rect.top <= 100 && rect.bottom >= 100
        setIsActive(isInView)
      }
    }

    handleScroll() // Check initial state
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [href])

  return (
    <Link
      href={href}
      className={cn(
        className,
        isActive ? "text-primary" : "text-muted-foreground transition-colors hover:text-primary",
      )}
    >
      {children}
    </Link>
  )
}

