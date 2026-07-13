import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        red: {
          50: "#FDF2F1",
          100: "#FCE5E2",
          200: "#F8CCC7",
          300: "#F2A9A0",
          400: "#EA7E72",
          500: "#DF5244",
          600: "#D2372A",
          700: "#C8392B",
          800: "#B22E21",
          900: "#8E251A",
        },
        cream: {
          50: "#fefdf8",
          100: "#fefbf0",
          200: "#fdf6d9",
          300: "#fcf0c2",
          400: "#fae394",
          500: "#f8d666",
          600: "#dfc15c",
          700: "#b9a14d",
          800: "#94813d",
          900: "#796a32",
        },
        sindoor: {
          DEFAULT: "#C8392B",
          hover: "#B22E21",
          light: "#FDF2F1",
        },
        saffron: {
          DEFAULT: "#E6831A",
          light: "#FFF8F1",
        },
        gold: {
          DEFAULT: "#E6A817",
          light: "#FEFAF0",
        },
        "deep-green": {
          DEFAULT: "#1A3A2A",
          light: "#F2F6F4",
        },
        festive: {
          red: "#C8392B",
          orange: "#E6831A",
          yellow: "#E6A817",
          white: "#FFFFFF",
          black: "#1A1A1A",
        },
      },
      backgroundImage: {
        "festive-gradient": "linear-gradient(to right, #E6831A, #C8392B)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        bengali: ["var(--font-bengali)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
