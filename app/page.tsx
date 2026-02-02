import Link from "next/link";
import { ArrowRight, Heart, Users, BookOpen, Lightbulb } from "lucide-react";
import CloudinaryImage from "../components/CloudinaryImage";

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
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 drop-shadow-lg leading-tight">
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
                className="bg-white text-primary-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all shadow-lg inline-flex items-center justify-center text-sm sm:text-base md:text-lg"
              >
                Learn More <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all shadow-lg text-sm sm:text-base md:text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Our Ministry
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Gulu Light of Hope Bible Church & Outreach Ministries is a
              faith-based, non-profit, non-political, and non-governmental
              Christian ministry established in accordance with Holy Scripture
              and the laws of the Republic of Uganda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Faith</h3>
              <p className="text-gray-700 leading-relaxed">
                Grounded in the transformative power of God and sustained
                through prayer and worship.
              </p>
            </div>

            <div className="text-center bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Passion</h3>
              <p className="text-gray-700 leading-relaxed">
                Driven by our love for God and a desire to see His kingdom grow
                in every aspect of ministry.
              </p>
            </div>

            <div className="text-center bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Community
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Building relationships and creating a welcoming church family
                where everyone grows in faith.
              </p>
            </div>

            <div className="text-center bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Worship</h3>
              <p className="text-gray-700 leading-relaxed">
                Glorifying God authentically with music, prayer, and fellowship,
                expressing our gratitude.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <CloudinaryImage
                src="FB_IMG_1770033119193_kjrl48"
                alt="Vision"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                "To be a beacon of hope and spiritual nourishment, guiding
                individuals and communities into a deeper relationship with God.
                We aim to foster an environment where people can encounter God's
                transformative power, experience authentic worship, and build
                meaningful connections rooted in faith, love, and service."
              </p>
              <div className="bg-white/80 backdrop-blur-sm border-l-4 border-primary-600 p-6 rounded-lg">
                <p className="text-lg italic mb-2 text-gray-800">
                  "Arise, shine; for your light has come! And the glory of the
                  LORD is risen upon you."
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  Isaiah 60:1 (NKJV)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Messages from Our Leaders
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Senior Pastor Message */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl shadow-xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6 ring-4 ring-primary-200 flex-shrink-0">
                  <CloudinaryImage
                    src="FB_IMG_1770033884001_rjyc20"
                    alt="Pastor James Ekanya"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Pastor James Ekanya
                  </h3>
                  <p className="text-primary-600 font-semibold text-sm sm:text-base">
                    Senior Pastor & Founder
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                As the Senior Pastor of Gulu Light of Hope Bible Church &
                Outreach Ministries, I welcome you to a ministry established to
                advance the Gospel of Jesus Christ in obedience to the Great
                Commission.
              </p>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded mb-4">
                <p className="italic text-gray-800 mb-2">
                  "Go therefore and make disciples of all the nations…"
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  Matthew 28:19 (NKJV)
                </p>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">
                Our commitment is to faithfully teach and preach the Word of
                God, to cultivate a culture of prayer and worship, and to equip
                believers for service and discipleship.
              </p>
            </div>

            {/* Co-Founder Message */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl shadow-xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6 ring-4 ring-secondary-200 flex-shrink-0">
                  <CloudinaryImage
                    src="FB_IMG_1770033096622_hvmhqg"
                    alt="Mrs. Acan Beatrice"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Mrs. Acan Beatrice
                  </h3>
                  <p className="text-secondary-600 font-semibold text-sm sm:text-base">
                    Ministry Co-Founder
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                Gulu Light of Hope Bible Church & Outreach Ministries is founded
                on biblical principles of faith, love, compassion, and service.
                We are committed to nurturing families, strengthening women and
                children, and building a welcoming church community.
              </p>
              <div className="bg-secondary-50 border-l-4 border-secondary-600 p-4 rounded mb-4">
                <p className="italic text-gray-800 mb-2">
                  "Above all things have fervent love for one another…"
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  1 Peter 4:8 (NKJV)
                </p>
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">
                Our work reflects a holistic approach to ministry, following the
                example of Jesus Christ by serving both spiritual and practical
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Ministry Projects
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              The Ministry adopts a holistic approach to Christian service,
              addressing spiritual, emotional, physical, and social needs.
            </p>
            <div className="bg-white border-l-4 border-primary-600 p-6 rounded-lg max-w-3xl mx-auto mt-8">
              <p className="text-lg italic mb-2 text-gray-800">
                "Beloved, I pray that you may prosper in all things and be in
                health…"
              </p>
              <p className="text-sm text-gray-600 font-semibold">
                3 John 1:2 (NKJV)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <CloudinaryImage
                  src="FB_IMG_1770043335394_hily57"
                  alt="Church Ministry"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Church Ministry & Branches
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Two active branches serving communities with worship,
                discipleship, and pastoral care.
              </p>
              <Link
                href="/projects"
                className="text-primary-600 hover:text-primary-800 font-semibold inline-flex items-center text-lg"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <CloudinaryImage
                  src="FB_IMG_1770033186707_b4al7q"
                  alt="Beacon of Hope Junior School"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Beacon of Hope Junior School
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Quality Christian education serving 500+ learners from Nursery
                to Primary Seven.
              </p>
              <Link
                href="/projects"
                className="text-primary-600 hover:text-primary-800 font-semibold inline-flex items-center text-lg"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <CloudinaryImage
                  src="FB_IMG_1770033273318_mojjty"
                  alt="Adult Literacy Program"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Adult Literacy Program
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Empowering adults and youth with literacy, life skills, and
                entrepreneurship training.
              </p>
              <Link
                href="/projects"
                className="text-primary-600 hover:text-primary-800 font-semibold inline-flex items-center text-lg"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="bg-primary-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg inline-flex items-center text-lg"
            >
              View All Projects <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
