import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">BARNA</h4>
            <p className="text-gray-400 mb-4">Preserving and promoting Bengali culture and traditions since 1985.</p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-white">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Cultural Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Language Classes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Youth Programs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Senior Activities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Cultural Center St, City</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>(+91) 9876543210</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@barna.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BARNA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
