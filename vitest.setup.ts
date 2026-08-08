import "@testing-library/jest-dom"
import { vi } from "vitest"
import React from "react"

// Mock Next.js Image component
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    const { fill, priority, ...rest } = props
    return React.createElement("img", rest)
  },
}))
