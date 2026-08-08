import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { UpcomingPujas } from "@/components/upcoming-pujas"

describe("UpcomingPujas Component", () => {
  it("renders upcoming puja events", () => {
    render(<UpcomingPujas />)

    expect(screen.getByText(/Durga Puja 2026/i)).toBeInTheDocument()
    expect(screen.getByText(/Kali Puja 2026/i)).toBeInTheDocument()
  })

  it("displays schedule details for events", () => {
    render(<UpcomingPujas />)

    // Check for event dates
    expect(screen.getByText(/October 16-20, 2026/i)).toBeInTheDocument()
    expect(screen.getByText(/November 8, 2026/i)).toBeInTheDocument()
  })
})
