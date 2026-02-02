import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import CloudinaryImage from "./CloudinaryImage";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Ministry Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <CloudinaryImage
                src="logo_gulu_light_of_hope_a4mdo4"
                alt="GULOHBCOM Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold">GULOHBCOM</h3>
                <p className="text-sm text-gray-300">
                  Faith, Passion, Community & Worship
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-base">
              Gulu Light of Hope Bible Church & Outreach Ministries - A Beacon
              of Hope and Spiritual Nourishment, advancing the Gospel of Jesus
              Christ and serving communities through worship, outreach,
              education, and community development.
            </p>
            <div className="bg-white/5 backdrop-blur-sm border-l-4 border-primary-500 p-4 rounded-lg mb-6">
              <p className="italic text-gray-200 mb-2 text-base">
                "You are the light of the world. A city set on a hill cannot be
                hidden."
              </p>
              <p className="text-sm text-gray-400 font-semibold">
                Matthew 5:14 (NKJV)
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white/10 hover:bg-primary-600 p-3 rounded-full transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-primary-600 p-3 rounded-full transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-primary-600 p-3 rounded-full transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-primary-600 p-3 rounded-full transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-primary-400 transition-colors flex items-center group text-base"
                >
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-primary-400 transition-colors flex items-center group text-base"
                >
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-300 hover:text-primary-400 transition-colors flex items-center group text-base"
                >
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="text-gray-300 hover:text-primary-400 transition-colors flex items-center group text-base"
                >
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-primary-400 transition-colors flex items-center group text-base"
                >
                  <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary-400">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="bg-primary-600/20 p-2 rounded-lg group-hover:bg-primary-600 transition-colors">
                  <MapPin className="h-5 w-5 text-primary-400 group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 text-base leading-relaxed">
                    Adak Village, Gulu District
                    <br />
                    Northern Uganda
                    <br />
                    P.O. Box: 361143, Gulu
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="bg-primary-600/20 p-2 rounded-lg group-hover:bg-primary-600 transition-colors">
                  <Phone className="h-5 w-5 text-primary-400 group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <a
                    href="tel:+256782509058"
                    className="text-gray-300 hover:text-primary-400 transition-colors block text-base"
                  >
                    +256 782 509 058
                  </a>
                  <a
                    href="tel:+256779756720"
                    className="text-gray-300 hover:text-primary-400 transition-colors block text-base"
                  >
                    +256 779 756 720
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="bg-primary-600/20 p-2 rounded-lg group-hover:bg-primary-600 transition-colors">
                  <Mail className="h-5 w-5 text-primary-400 group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <a
                    href="mailto:gulohbcom@gmail.com"
                    className="text-gray-300 hover:text-primary-400 transition-colors text-base break-all"
                  >
                    gulohbcom@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Gulu Light of Hope Bible Church &
              Outreach Ministries. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
