import {
  Church,
  Users,
  Globe,
  Calendar,
  GraduationCap,
  Clock,
  MapPin,
} from "lucide-react";
import CloudinaryImage from "../../components/CloudinaryImage";
import { FadeIn } from "../../components/Animations";

export default function Ministries() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <CloudinaryImage
            src="IMG-20260209-WA0049_byz4dm"
            alt="Ministries"
            width={1920}
            height={700}
            className="w-full h-full object-cover brightness-[0.75] scale-110 animate-slow-zoom"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/20 via-black/10 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-600/5 to-purple-600/5"></div>
        </div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-7xl mx-auto text-center">
            {/* Animated Badge */}
            <div className="mb-6 sm:mb-8 animate-fade-in-down">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider shadow-2xl">
                <span className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse"></span>
                Serving Together
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 sm:mb-8 leading-tight animate-fade-in-up">
              <span className="block drop-shadow-2xl">
                Our Ministries
              </span>
            </h1>
            
            {/* Subtitle with Animation */}
            <div className="max-w-5xl mx-auto mb-6 sm:mb-8 animate-fade-in-up animation-delay-200">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-light drop-shadow-xl">
                Serving God and community through{" "}
                <span className="text-secondary-300 font-semibold">worship</span>,{" "}
                <span className="text-purple-300 font-semibold">discipleship</span>, and{" "}
                <span className="text-blue-300 font-semibold">outreach</span>
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

      {/* Ministries */}
      <FadeIn>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Our Ministries
            </h2>
            <div className="space-y-16">
              {/* Church Ministry */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform">
                  <CloudinaryImage
                    src="IMG-20260216-WA0038_q8v2ww"
                    alt="Church Ministry"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-100 p-4 rounded-full mr-4">
                      <Church className="h-10 w-10 text-primary-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      Church Ministry
                    </h3>
                  </div>
                  <p className="text-xl text-gray-800 leading-relaxed">
                    The spiritual foundation of the Ministry, centered on
                    worship, prayer, Bible-based teaching, discipleship,
                    evangelism, and pastoral care for all believers.
                  </p>
                </div>
              </div>

              {/* Youth Ministry */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-secondary-100 p-4 rounded-full mr-4">
                      <Users className="h-10 w-10 text-secondary-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      Youth Ministry
                    </h3>
                  </div>
                  <p className="text-xl text-gray-800 leading-relaxed">
                    Focused on discipleship and mentorship, leadership
                    development, life skills training, and spiritual growth for
                    young people.
                  </p>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2 hover:scale-105 transition-transform">
                  <CloudinaryImage
                    src="IMG_20260107_135406_623_ytsdbg"
                    alt="Youth Ministry"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Missions & Church Planting */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform">
                  <CloudinaryImage
                    src="FB_IMG_1770033273318_mojjty"
                    alt="Missions"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-4 rounded-full mr-4">
                      <Globe className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      Missions & Church Planting
                    </h3>
                  </div>
                  <p className="text-xl text-gray-800 leading-relaxed">
                    Evangelism and outreach to unreached communities,
                    establishment of church branches, and support for mission
                    work.
                  </p>
                </div>
              </div>

              {/* Annual Believers Conference */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-100 p-4 rounded-full mr-4">
                      <Calendar className="h-10 w-10 text-purple-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      Annual Believers Conference
                    </h3>
                  </div>
                  <p className="text-xl text-gray-800 leading-relaxed">
                    A time of spiritual renewal through teaching, worship,
                    leadership training, and fellowship.
                  </p>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2 hover:scale-105 transition-transform">
                  <CloudinaryImage
                    src="IMG-20260209-WA0006_yywtft"
                    alt="Conference"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Pastoral & Leadership Training */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform">
                  <CloudinaryImage
                    src="IMG-20260209-WA0049_byz4dm"
                    alt="Training"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-100 p-4 rounded-full mr-4">
                      <GraduationCap className="h-10 w-10 text-orange-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      Pastoral & Leadership Training
                    </h3>
                  </div>
                  <p className="text-xl text-gray-800 leading-relaxed mb-6">
                    Biblical and practical training for pastors and church
                    leaders, nurturing spiritual maturity, integrity, and
                    effective ministry service.
                  </p>
                  <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Pastoral Training
                    </h4>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      In collaboration with our sister Church, Light of Hope
                      Bible Church & Aspire Ministry in Arizona, in the United
                      States of America, we are a center for training Pastors
                      and church leaders. Pastor Dr. Michael Turner, the senior
                      Pastor of Light of Hope Bible Church in Arizona- USA, a
                      great soul with an even greater heart, is passionate about
                      pastoral training. He is giving pastors and Church leaders
                      thorough lessons on theological studies and the
                      fundamental principles of the Christian faith. These
                      teachings are both in person as well as online through
                      zoom sessions. Many church leaders in Uganda especially in
                      Northern Uganda, are witnessing miraculous changes in the
                      lives of so many people with many turning to Christianity
                      with the help of these teachings. God's grace is truly
                      working here in Uganda beautifully.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Programs & Schedules */}
      <FadeIn delay={100}>
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Programs & Schedules
            </h2>

            {/* Weekly Programs */}
            <div className="mb-16">
              <div className="flex items-center justify-center mb-12">
                <div className="bg-primary-100 p-4 rounded-full mr-4">
                  <Clock className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Weekly Programs
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Morning Devotion
                  </h4>
                  <p className="text-lg text-gray-700 mb-2">Monday – Friday</p>
                  <p className="text-xl font-semibold text-primary-600">
                    7:00 – 8:00 AM
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Online Devotion
                  </h4>
                  <p className="text-lg text-gray-700 mb-2">
                    with Light of Hope Bible Church, Arizona
                  </p>
                  <p className="text-lg text-gray-700 mb-2">Monday – Friday</p>
                  <p className="text-xl font-semibold text-secondary-600">
                    5:00 – 6:00 PM
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Midweek Service
                  </h4>
                  <p className="text-lg text-gray-700 mb-2">Wednesday</p>
                  <p className="text-xl font-semibold text-green-600">
                    Evening
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Women's Bible Study
                  </h4>
                  <p className="text-lg text-gray-700 mb-2">Thursday</p>
                  <p className="text-xl font-semibold text-purple-600">
                    5:00 – 6:00 PM
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Sunday Worship Service
                  </h4>
                  <p className="text-lg text-gray-700 mb-2">Sunday</p>
                  <p className="text-xl font-semibold text-orange-600">
                    Morning
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Cell Fellowship & Home Visits
                  </h4>
                  <p className="text-lg text-gray-700 mb-2">Sunday</p>
                  <p className="text-xl font-semibold text-blue-600">
                    2:00 – 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Monthly Programs */}
            <div>
              <div className="flex items-center justify-center mb-12">
                <div className="bg-secondary-100 p-4 rounded-full mr-4">
                  <Calendar className="h-10 w-10 text-secondary-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Monthly Programs
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Prayer & Fasting
                  </h4>
                  <p className="text-xl font-semibold text-primary-600 mb-4">
                    First Saturday of every month
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A dedicated time for corporate prayer and fasting, seeking
                    God's guidance and blessing for the ministry and community.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Pastors & Leaders Review Meeting
                  </h4>
                  <p className="text-xl font-semibold text-secondary-600 mb-4">
                    Last Sunday of the month
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Leadership gathering for ministry review, planning, and
                    spiritual development of pastors and church leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Church Branches */}
      <FadeIn delay={200}>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Church Branches
            </h2>
            <div className="space-y-16">
              {/* Pawel Branch */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform">
                  <CloudinaryImage
                    src="IMG_20260107_132926_334_ysnf9h"
                    alt="Pawel Branch"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-100 p-4 rounded-full mr-4">
                      <Church className="h-10 w-10 text-primary-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      Pawel Branch
                    </h3>
                  </div>
                  <div className="flex items-start mb-6">
                    <MapPin className="h-6 w-6 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-xl text-gray-700">
                      Gulu District (Headquarters)
                    </p>
                  </div>
                  <p className="text-xl text-gray-800 leading-relaxed mb-6">
                    The main church and administrative center, hosting worship
                    services, leadership training, discipleship programs, and
                    ministry coordination.
                  </p>

                  {/* Pastor Message */}
                  <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-primary-200">
                        <CloudinaryImage
                          src="IMG-20260210-WA0001_vobr9f"
                          alt="Pastor Moses Okot & his wife Mrs. Paska Okot"
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">
                          Pastor Moses Okot & his Wife Mrs. Paska Okot
                        </h4>
                        <p className="text-primary-600 font-semibold text-sm">
                          Branch Pastor
                        </p>
                      </div>
                    </div>
                    <p className="text-base text-gray-800 leading-relaxed">
                      Welcome to Pawel Branch, the headquarters of our ministry.
                      Here, we are committed to building a strong foundation of
                      faith through worship, discipleship, and service. Our
                      vision is to see lives transformed by the Gospel and
                      communities renewed through the power of Christ. We invite
                      you to join us as we grow together in faith and reach out
                      to those in need with the love of Jesus.
                    </p>
                  </div>
                </div>
              </div>

              {/* Arapai Branch */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-secondary-100 p-4 rounded-full mr-4">
                      <Church className="h-10 w-10 text-secondary-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      Arapai Branch
                    </h3>
                  </div>
                  <div className="flex items-start mb-6">
                    <MapPin className="h-6 w-6 text-secondary-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-xl text-gray-700">
                      Lamogi Sub-county, Amuru District
                    </p>
                  </div>
                  <p className="text-xl text-gray-800 leading-relaxed mb-6">
                    A growing rural fellowship that began as a neighborhood
                    outreach and has developed into a vibrant worshipping
                    community with weekly fellowship meetings and Sunday
                    services, and land donated for permanent church
                    construction.
                  </p>

                  {/* Pastor Message */}
                  <div className="bg-secondary-50 border-l-4 border-secondary-600 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-secondary-200">
                        <CloudinaryImage
                          src="IMG-20260216-WA0007_bsgsel"
                          alt="Branch Pastor"
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">
                          Pastor Andrew Ouma
                        </h4>
                        <p className="text-secondary-600 font-semibold text-sm">
                          Branch Pastor
                        </p>
                      </div>
                    </div>
                    <p className="text-base text-gray-800 leading-relaxed">
                      Greetings from Arapai Branch! It is a privilege to serve
                      this wonderful community where God is doing remarkable
                      things. What started as a small neighborhood gathering has
                      grown into a thriving church family. We are witnessing
                      lives being transformed, families being restored, and hope
                      being rekindled through the Gospel. Our mission is to
                      continue spreading the light of Christ in this rural
                      community, nurturing believers in their faith journey, and
                      reaching the unreached with the message of salvation. We
                      are grateful for the land donated for our permanent church
                      building and look forward to expanding our ministry to
                      serve more people. Come and be part of this exciting
                      journey as we build God's Kingdom together.
                    </p>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2 hover:scale-105 transition-transform">
                  <CloudinaryImage
                    src="IMG-20260216-WA0035_xf6rfo"
                    alt="Arapai Branch"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Church Planting Commitment */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-12 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-6">
                  Our Commitment to Church Planting
                </h3>
                <p className="text-xl text-gray-800 text-center max-w-4xl mx-auto leading-relaxed">
                  As the ministry expands, we are committed to establishing more
                  church branches to reach as many believers as possible. Our
                  vision is to plant churches in unreached communities
                  throughout Northern Uganda and beyond, bringing the light of
                  Christ to every corner where God leads us. We believe in
                  empowering local leaders and building sustainable faith
                  communities that will continue to grow and multiply for
                  generations to come.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
