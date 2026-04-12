import { Globe, Heart, Users } from "lucide-react";
import CloudinaryImage from "../../components/CloudinaryImage";
import { FadeIn } from "../../components/Animations";
import Link from "next/link";

export default function Partnership() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <CloudinaryImage
            src="IMG-20260209-WA0003_qosdxt"
            alt="Partnership"
            width={1920}
            height={700}
            className="w-full h-full object-cover brightness-[0.75] scale-110 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-black/10 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-teal-600/5"></div>
        </div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-7xl mx-auto text-center">
            {/* Animated Badge */}
            <div className="mb-6 sm:mb-8 animate-fade-in-down">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider shadow-2xl">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Together in Mission
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 sm:mb-8 leading-tight animate-fade-in-up">
              <span className="block drop-shadow-2xl">
                Partnership & Affiliation
              </span>
            </h1>
            
            {/* Subtitle with Animation */}
            <div className="max-w-5xl mx-auto mb-6 sm:mb-8 animate-fade-in-up animation-delay-200">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-light drop-shadow-xl">
                Working together to advance{" "}
                <span className="text-green-300 font-semibold">God's Kingdom</span> through{" "}
                <span className="text-teal-300 font-semibold">collaboration</span> and{" "}
                <span className="text-blue-300 font-semibold">shared vision</span>
              </p>
            </div>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 animate-fade-in animation-delay-400">
              <div className="h-px w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent to-white/50"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="h-px w-12 sm:w-16 md:w-24 bg-gradient-to-l from-transparent to-white/50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Affiliation */}
      <FadeIn>
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform">
                <CloudinaryImage
                  src="IMG-20260209-WA0003_qosdxt"
                  alt="Affiliation"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                  <div className="bg-primary-100 p-3 sm:p-4 rounded-full mb-4 sm:mb-0 sm:mr-4">
                    <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Our Affiliation
                  </h2>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
                  Gulu Light of Hope Bible Church & Outreach Ministries is
                  affiliated with{" "}
                  <span className="font-semibold text-primary-600">
                    Light of Hope Bible Church, Arizona, USA
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Partnerships */}
      <FadeIn delay={100}>
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
                <div className="bg-secondary-100 p-3 sm:p-4 rounded-full mb-4 sm:mb-0 sm:mr-4">
                  <Users className="h-8 w-8 sm:h-10 sm:w-10 text-secondary-600" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                  Partnerships
                </h2>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
                We welcome partnerships with churches, organizations,
                individuals, and donors who share our vision for spiritual
                growth, community transformation, and sustainable development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12 md:mt-16">
              <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
                <div className="bg-primary-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Churches
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Partner with us in ministry, missions, and church planting
                  initiatives.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
                <div className="bg-secondary-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Users className="h-8 w-8 sm:h-10 sm:w-10 text-secondary-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Organizations
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Collaborate on community development and outreach programs.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
                <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Individuals & Donors
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Support our mission through prayer, volunteering, and
                  financial contributions.
                </p>
              </div>
            </div>

            <div className="text-center mt-8 sm:mt-10 md:mt-12">
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg inline-flex items-center text-base sm:text-lg"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
