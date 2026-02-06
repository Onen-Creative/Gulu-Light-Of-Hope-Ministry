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
      <section className="relative h-[350px] sm:h-[450px] lg:h-[500px] flex items-center pt-16">
        <div className="absolute inset-0">
          <CloudinaryImage
            src="FB_IMG_1770043335394_hily57"
            alt="Ministries"
            width={1920}
            height={500}
            className="w-full h-full object-cover brightness-50"
            priority={true}
          />
        </div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg leading-tight">
              Ministry
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Serving God and our community through worship, programs, and
              outreach
            </p>
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
                  src="FB_IMG_1770043335394_hily57"
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
                  The spiritual foundation of the Ministry, centered on worship,
                  prayer, Bible-based teaching, discipleship, evangelism, and
                  pastoral care for all believers.
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
                  src="FB_IMG_1770033119193_kjrl48"
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
                  src="FB_IMG_1770410350073_ulis3l"
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
                  src="FB_IMG_1770410409552_otn5uo"
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
                <p className="text-xl text-gray-800 leading-relaxed">
                  Biblical and practical training for pastors and church
                  leaders, nurturing spiritual maturity, integrity, and
                  effective ministry service.
                </p>
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
                <p className="text-xl font-semibold text-green-600">Evening</p>
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
                <p className="text-xl font-semibold text-orange-600">Morning</p>
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
                  src="FB_IMG_1770043335394_hily57"
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
                <p className="text-xl text-gray-800 leading-relaxed">
                  The main church and administrative center, hosting worship
                  services, leadership training, discipleship programs, and
                  ministry coordination.
                </p>
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
                <p className="text-xl text-gray-800 leading-relaxed">
                  A growing rural fellowship that began as a neighborhood
                  outreach and has developed into a vibrant worshipping
                  community with weekly fellowship meetings and Sunday services,
                  and land donated for permanent church construction.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2 hover:scale-105 transition-transform">
                <CloudinaryImage
                  src="FB_IMG_1770043270970_egq4lf"
                  alt="Arapai Branch"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Pabbo Branch */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform">
                <CloudinaryImage
                  src="FB_IMG_1770034070592_zrgpyk"
                  alt="Pabbo Branch"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-4 rounded-full mr-4">
                    <Church className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Pabbo Branch
                  </h3>
                </div>
                <div className="flex items-start mb-6">
                  <MapPin className="h-6 w-6 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-xl text-gray-700">
                    Pabbo Town Council, Amuru District
                  </p>
                </div>
                <p className="text-xl text-gray-800 leading-relaxed">
                  An extension ministry serving believers and the surrounding
                  community through worship services, evangelism, discipleship,
                  and pastoral care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>
    </div>
  );
}
