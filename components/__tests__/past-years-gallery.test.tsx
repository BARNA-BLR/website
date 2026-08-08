import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import { PastYearsGallery } from "@/components/past-years-gallery"

const mockEvents = [
  {
    year: "2023",
    title: "Durga Puja 2023 - Golden Jubilee Special",
    description: "A magnificent celebration featuring traditional pandal decorations.",
    category: "Festival",
    attendees: 800,
    photos: 5,
    highlights: ["Traditional Dhak performances", "Children's cultural program"],
  },
  {
    year: "2022",
    title: "Rabindra Jayanti Celebration",
    description: "An evening dedicated to Rabindranath Tagore's works.",
    category: "Cultural",
    attendees: 250,
    photos: 3,
    highlights: ["Poetry recitation competition"],
  },
]

describe("PastYearsGallery Component", () => {
  it("renders event cards correctly", () => {
    render(<PastYearsGallery events={mockEvents} />)

    expect(screen.getByText("Durga Puja 2023 - Golden Jubilee Special")).toBeInTheDocument()
    expect(screen.getByText("Rabindra Jayanti Celebration")).toBeInTheDocument()
    expect(screen.getByText("800 attendees")).toBeInTheDocument()
    expect(screen.getByText("250 attendees")).toBeInTheDocument()
  })

  it("opens the photo modal when an event card is clicked", async () => {
    const user = userEvent.setup()
    render(<PastYearsGallery events={mockEvents} />)

    // Click on the first event card
    const cardTitle = screen.getByText("Durga Puja 2023 - Golden Jubilee Special")
    await user.click(cardTitle)

    // Verify modal headers and photo grid items appear
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.getAllByText("5 photos").length).toBeGreaterThan(0)
    
    // Check that photo buttons are rendered inside modal
    const photoButtons = screen.getAllByRole("button", { name: /Event photo/i })
    expect(photoButtons.length).toBe(5)
  })

  it("opens full image viewer when a thumbnail inside modal is clicked", async () => {
    const user = userEvent.setup()
    render(<PastYearsGallery events={mockEvents} />)

    // Open modal
    await user.click(screen.getByText("Durga Puja 2023 - Golden Jubilee Special"))

    // Click the first thumbnail in modal
    const photoButtons = screen.getAllByRole("button", { name: /Event photo/i })
    await user.click(photoButtons[0])

    // Verify full image viewer overlay
    expect(screen.getByText("1 / 5")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Next image/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Previous image/i })).toBeInTheDocument()
  })

  it("navigates images in full viewer using next/previous controls", async () => {
    const user = userEvent.setup()
    render(<PastYearsGallery events={mockEvents} />)

    // Open modal and viewer
    await user.click(screen.getByText("Durga Puja 2023 - Golden Jubilee Special"))
    const photoButtons = screen.getAllByRole("button", { name: /Event photo/i })
    await user.click(photoButtons[0])

    // Click Next image
    const nextBtn = screen.getByRole("button", { name: /Next image/i })
    await user.click(nextBtn)
    expect(screen.getByText("2 / 5")).toBeInTheDocument()

    // Click Previous image
    const prevBtn = screen.getByRole("button", { name: /Previous image/i })
    await user.click(prevBtn)
    expect(screen.getByText("1 / 5")).toBeInTheDocument()
  })
})
