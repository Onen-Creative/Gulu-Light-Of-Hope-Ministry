import { Globe, Heart, Users } from "lucide-react";
import CloudinaryImage from "../../components/CloudinaryImage";
import { FadeIn } from "../../components/Animations";
import Link from "next/link";

export default function Partnership() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center pt-16">
        <div className="absolute inset-0">
          <CloudinaryImage
            src="IMG-20260209-WA0006_yywtft"
            alt="Partnership"
            width={1920}
            height={600}
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg leading-tight">
              Partnership & Affiliation
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Working together to advance God's Kingdom
            </p>
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
