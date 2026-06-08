"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Ministries", href: "/ministries" },
    { name: "Projects", href: "/projects" },
    { name: "Media", href: "/media" },
    { name: "Partnership", href: "/partnership" },
    { name: "Join Us", href: "/join" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white shadow-xl border-b border-gray-100" 
          : "bg-white/95 backdrop-blur-lg shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-primary-100 group-hover:ring-primary-300 transition-all duration-300">
              <img
                src="https://res.cloudinary.com/dhzo74l5w/image/upload/w_80,h_80,c_fit/logo_gulu_light_of_hope_a4mdo4.png"
                alt="GULOHBCOM Logo"
                className="w-full h-full object-contain p-1 bg-white transition-transform group-hover:scale-110 duration-300"
              />
            </div>
            <div className="hidden sm:block flex-shrink-0">
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent group-hover:from-primary-700 group-hover:to-secondary-700 transition-all whitespace-nowrap">
                GULOHBCOM
              </h1>
              <p className="text-xs text-gray-600 font-medium whitespace-nowrap">
                Light of Hope
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 group ${
                  isActive(item.href)
                    ? "text-white shadow-lg"
                    : "text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                }`}
              >
                {isActive(item.href) && (
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg shadow-md" />
                )}
                <span className="relative z-10">{item.name}</span>
                {!isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:w-3/4 transition-all duration-300" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-[600px] opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-5 py-3.5 text-base font-semibold rounded-xl transition-all duration-300 transform ${
                  isActive(item.href)
                    ? "bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg scale-105"
                    : "text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 hover:text-primary-600 hover:scale-102 active:scale-98"
                }`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? 'slideDown 0.3s ease-out forwards' : 'none'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center justify-between">
                  {item.name}
                  {isActive(item.href) && (
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  )}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
