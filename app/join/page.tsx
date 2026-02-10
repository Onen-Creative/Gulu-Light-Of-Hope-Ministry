import { Heart, Users, Lightbulb, ArrowRight } from "lucide-react";
import CloudinaryImage from "../../components/CloudinaryImage";
import { FadeIn } from "../../components/Animations";
import Link from "next/link";

export default function Join() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[450px] sm:h-[550px] lg:h-[650px] flex items-center pt-16">
        <div className="absolute inset-0">
          <CloudinaryImage
            src="FB_IMG_1770042328626_yszo5s"
            alt="Join Us"
            width={1920}
            height={650}
            className="w-full h-full object-cover brightness-50"
            priority={true}
          />
        </div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 drop-shadow-lg leading-tight">
              Join Our Church Family
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-8">
              We welcome everyone to be part of Gulu Light of Hope Bible Church & Outreach Ministries.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold drop-shadow-lg">
              Whether you are seeking spiritual growth, fellowship, or opportunities to serve, there is a place for you in our church family.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <FadeIn>
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Together, We Shine God's Light
            </h2>
            <p className="text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
              and bring hope to our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Spiritual Growth</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Grow in your faith through worship, Bible study, and discipleship programs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
              <div className="bg-secondary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fellowship</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Connect with a loving community of believers who support and encourage one another.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Opportunities to Serve</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Use your gifts and talents to serve God and make a difference in the community.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white p-12 rounded-2xl shadow-2xl text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Join us in our Mission
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              The Gulu Light of Hope Bible Church community is committed to spreading the light and love of Jesus Christ throughout the Northern Uganda and beyond. We invite you to join us in this mission whether through participation in our outreach programs or by becoming part of our congregation. Discover the vibrant community we have built and the spiritual nourishment we offer by exploring our believes and values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center text-lg">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/ministries"
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all shadow-lg text-lg">
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>
    </div>
  );
}
