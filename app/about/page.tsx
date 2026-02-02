import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";
import CloudinaryImage from "../../components/CloudinaryImage";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[350px] sm:h-[450px] lg:h-[500px] flex items-center">
        <div className="absolute inset-0">
          <CloudinaryImage
            src="FB_IMG_1770032905674_qmjwer"
            alt="About Us"
            width={1920}
            height={500}
            className="w-full h-full object-cover brightness-50"
            priority={true}
          />
        </div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg leading-tight">
              About GULOHBCOM
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Gulu Light of Hope Bible Church & Outreach Ministries is established
              to govern the affairs, spiritual mandate, and operations of the
              Ministry, inspired by the Holy Scriptures.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <CloudinaryImage
                src="FB_IMG_1770033821604_tseidl"
                alt="Ministry Community"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Foundation
              </h2>
              <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                The Ministry is committed to advancing the Gospel of Jesus
                Christ and serving communities through worship, outreach,
                evangelism, education, and community development.
              </p>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
                <p className="text-lg italic mb-2 text-gray-800">
                  "For we are God's fellow workers…"
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  1 Corinthians 3:9 (NKJV)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goal */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Our Direction
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-4 rounded-full mr-4">
                  <Target className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-3xl font-bold text-primary-800">Mission</h3>
              </div>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                "To see God clearly, know Him intimately, worship Him
                authentically, serve Him completely, and love others
                unconditionally. Through the Bible, our ultimate authority, we
                strive for transformation and renewal by the Holy Spirit."
              </p>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded">
                <p className="italic text-gray-800 mb-2">
                  "You shall love the Lord your God… and your neighbor as
                  yourself."
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  Mark 12:30–31 (NKJV)
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-secondary-100 p-4 rounded-full mr-4">
                  <Eye className="h-10 w-10 text-secondary-600" />
                </div>
                <h3 className="text-3xl font-bold text-secondary-800">
                  Vision
                </h3>
              </div>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                "To be a beacon of hope and spiritual nourishment, guiding
                individuals and communities into a deeper relationship with God.
                We aim to foster an environment where people can encounter God's
                transformative power."
              </p>
              <div className="bg-secondary-50 border-l-4 border-secondary-600 p-4 rounded">
                <p className="italic text-gray-800 mb-2">
                  "Arise, shine; for your light has come! And the glory of the
                  LORD is risen upon you."
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  Isaiah 60:1 (NKJV)
                </p>
              </div>
            </div>

            {/* Goal */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-4 rounded-full mr-4">
                  <Award className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-green-800">Goal</h3>
              </div>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                "To cultivate a spiritually vibrant and inclusive church
                community that reflects the teachings of Jesus Christ. We aim to
                empower individuals to grow in their faith, serve their
                communities, and share God's message of love and grace."
              </p>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                <p className="italic text-gray-800 mb-2">
                  "That you may be filled with the knowledge of His will…"
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  Colossians 1:9–10 (NKJV)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Faith</h3>
              <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                We believe in the transformative power of God, grounded in the
                teachings of the Bible and sustained through prayer and worship.
              </p>
              <p className="text-primary-600 font-semibold">Romans 1:16</p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Passion</h3>
              <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                We are passionate in our approach to every aspect of ministry,
                driven by our love for God and a desire to see His kingdom grow.
              </p>
              <p className="text-primary-600 font-semibold">Colossians 3:23</p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Community
              </h3>
              <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                We build community by valuing relationships and creating a
                welcoming church family where everyone is encouraged to grow in
                their faith.
              </p>
              <p className="text-primary-600 font-semibold">Acts 2:42</p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Worship</h3>
              <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                We worship authentically, glorifying God with music, prayer, and
                fellowship, recognizing His greatness and expressing our
                gratitude.
              </p>
              <p className="text-primary-600 font-semibold">John 4:23</p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service</h3>
              <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                We serve others with compassion and humility, following Jesus'
                example of love and selflessness in all that we do.
              </p>
              <p className="text-primary-600 font-semibold">Mark 10:45</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Commitment */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-lg">
              Our Commitment
            </h2>
            <p className="text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed drop-shadow-lg">
              The Ministry is committed to advancing the Gospel of Jesus Christ
              and serving communities through worship, outreach, evangelism,
              education, and community development. We exist to provide
              spiritual leadership, doctrinal oversight, pastoral care, and
              holistic ministry that addresses the spiritual, emotional,
              physical, and social needs of individuals and communities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
