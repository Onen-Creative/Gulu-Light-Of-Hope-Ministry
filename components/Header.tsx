"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import CloudinaryImage from "./CloudinaryImage";

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
    { name: "Ministry", href: "/ministries" },
    { name: "Projects", href: "/projects" },
    { name: "Media", href: "/media" },
    { name: "Partnership", href: "/partnership" },
    { name: "Join Us", href: "/join" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-3">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <CloudinaryImage
                src="logo_gulu_light_of_hope_a4mdo4"
                alt="GULOHBCOM Logo"
                width={40}
                height={40}
                className="object-contain transition-transform group-hover:scale-110 duration-300"
              />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                GULOHBCOM
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-600">
                Faith, Passion, Community & Worship
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-xs font-medium rounded-lg transition-all duration-300 ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-gray-700 hover:text-primary-600"
                }`}
              >
                {isActive(item.href) && (
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg" />
                )}
                <span className="relative">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-primary-600 to-secondary-600 text-white"
                      : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
