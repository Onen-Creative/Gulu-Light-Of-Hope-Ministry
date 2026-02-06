import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CloudinaryImage from "../components/CloudinaryImage";
import WhatsAppButton from "../components/WhatsAppButton";
import { FadeIn } from "../components/Animations";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[450px] sm:h-[550px] lg:h-[650px] flex items-center">
        <div className="absolute inset-0">
          <CloudinaryImage
            src="FB_IMG_1770042328626_yszo5s"
            alt="Church Community"
            width={1920}
            height={650}
            className="w-full h-full object-cover brightness-50"
            priority={true}
          />
        </div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-white py-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 drop-shadow-lg leading-tight animate-fade-in">
              Gulu Light of Hope Bible Church
              <br />
              <span className="text-primary-300">& Outreach Ministries</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3 md:mb-4 font-semibold drop-shadow-lg">
              A Beacon of Hope and Spiritual Nourishment
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 text-gray-200 drop-shadow-lg">
              Faith, Passion, Community & Worship
            </p>

            <div className="bg-white/10 backdrop-blur-sm border-l-4 border-white p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto rounded-lg">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl italic mb-2 font-medium">
                "You are the light of the world. A city set on a hill cannot be
                hidden."
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200">Matthew 5:14 (NKJV)</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link
                href="/about"
                className="bg-white text-primary-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-semibold hover:bg-primary-50 hover:scale-105 transition-all shadow-lg inline-flex items-center justify-center text-sm sm:text-base md:text-lg"
              >
                Learn More <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 hover:scale-105 transition-all shadow-lg text-sm sm:text-base md:text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Introduction */}
      <FadeIn>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Gulu Light of Hope Bible Church & Outreach Ministries is a
                faith-based, non-profit, non-political, and non-governmental
                Christian ministry established in accordance with Holy Scripture
                and the laws of the Republic of Uganda. The Ministry exists to advance the Gospel of Jesus Christ and to serve communities through worship, outreach, education, and holistic community development.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Impact Statistics */}
      <FadeIn delay={100}>
        <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl md:text-6xl font-bold mb-2">500+</div>
                  <div className="text-xl">Students Educated</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl md:text-6xl font-bold mb-2">3</div>
                  <div className="text-xl">Church Branches</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl md:text-6xl font-bold mb-2">5</div>
                  <div className="text-xl">Active Ministries</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl md:text-6xl font-bold mb-2">1000+</div>
                  <div className="text-xl">Lives Touched</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Founder's Welcome Message */}
      <FadeIn delay={200}>
        <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
              Welcome Message from the Founder & Director
            </h2>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex flex-col sm:flex-row items-center sm:items-start mb-8">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-6 sm:mb-0 sm:mr-8 ring-4 ring-primary-200 flex-shrink-0">
                  <CloudinaryImage
                    src="FB_IMG_1770033884001_rjyc20"
                    alt="Pastor James Ekanya"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Pastor James Ekanya
                  </h3>
                  <p className="text-primary-600 font-semibold text-lg">
                    Founding Director
                  </p>
                  <p className="text-gray-600 mt-1">
                    Gulu Light of Hope Bible Church & Outreach Ministries
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
                <p className="font-semibold">Dear Beloved,</p>
                <p>
                  It is with great joy and gratitude that I welcome you to Gulu Light of Hope Bible Church & Outreach Ministries.
                </p>
                <p>
                  This ministry was birthed out of a deep calling to proclaim the Gospel of Jesus Christ and to be a living testimony of God's love through worship, discipleship, and compassionate service. Our desire is to see lives transformed, families strengthened, and communities restored through the power of God's Word and the work of the Holy Spirit.
                </p>
                <p>
                  Here in Northern Uganda, we are committed not only to spiritual growth but also to holistic community development—by addressing spiritual, educational, health, and economic needs so that hope may shine in every area of life. We believe the Church is called to be the light of the world, bringing healing, dignity, and purpose to all people.
                </p>
                <p>
                  Whether you are seeking a church home, spiritual renewal, or an opportunity to serve and partner with us, you are warmly welcome. We invite you to worship with us, grow in faith, and join hands with us as we advance God's Kingdom together.
                </p>
                <p>
                  May the Lord bless you richly as you connect with us.
                </p>
                <p className="font-semibold mt-6">
                  With love in Christ,<br />
                  Pastor James Ekanya<br />
                  <span className="text-primary-600">Founding Director</span><br />
                  Gulu Light of Hope Bible Church & Outreach Ministries
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Call to Action */}
      <FadeIn delay={300}>
        <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Church Family
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              We welcome everyone to be part of Gulu Light of Hope Bible Church & Outreach Ministries. Whether you are seeking spiritual growth, fellowship, or opportunities to serve, there is a place for you in our church family.
            </p>
            <p className="text-2xl font-semibold mb-8">
              Together, we shine God's light and bring hope to our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all shadow-lg inline-flex items-center justify-center text-lg">
                Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 hover:scale-105 transition-all shadow-lg text-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
