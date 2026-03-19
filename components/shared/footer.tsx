import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center text-center">
          <div className="w-full">
            <h4 className="text-lg font-bold mb-4">BARNA</h4>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Preserving and promoting Bengali culture and traditions since 2020.
            </p>
            <div className="flex justify-center space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="w-full">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400 text-sm sm:text-base">
              <div className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="break-words">123 Cultural Center St, City</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>(+91) 9876543210</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="break-all">info@barna.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; 2026 BARNA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
