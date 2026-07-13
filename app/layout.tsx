import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Hind_Siliguri } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-bengali',
})

export const metadata: Metadata = {
  title: 'BARNA - Bengali Association for Recreation and Nourishment of Arts',
  description: 'BARNA (বার্না সাংস্কৃতিক সংস্থা) is a vibrant community organization celebrating and preserving Bengali culture, arts, literature, traditions, and community welfare.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.className} ${GeistMono.variable} ${hindSiliguri.variable}`}>
      <head />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
