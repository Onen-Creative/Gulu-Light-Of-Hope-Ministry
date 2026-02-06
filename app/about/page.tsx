import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";
import CloudinaryImage from "../../components/CloudinaryImage";
import { FadeIn } from "../../components/Animations";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[350px] sm:h-[450px] lg:h-[500px] flex items-center pt-16">
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg leading-tight animate-fade-in">
              About Us
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              A Christ-centered ministry committed to proclaiming the Gospel and
              serving communities
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <FadeIn>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <CloudinaryImage
                  src="FB_IMG_1770034070592_zrgpyk"
                  alt="Ministry Community"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Who We Are
                </h2>
                <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                  Gulu Light of Hope Bible Church & Outreach Ministries is a
                  Christ-centered ministry based in Northern Uganda, committed to
                  proclaiming the Gospel of Jesus Christ and demonstrating God's
                  love through worship, discipleship, and holistic community
                  development.
                </p>
                <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                  We are a growing, multi-generational church family passionate
                  about spiritual transformation and practical service. Our
                  mission is to bring hope, healing, and lasting impact to
                  individuals, families, and communities through faith in Jesus
                  Christ.
                </p>
                <p className="text-xl text-gray-800 leading-relaxed">
                  Beyond worship services, we actively serve our community through
                  education, counselling, evangelism, youth and children's
                  ministries, health and wellness initiatives, agricultural
                  projects, and outreach to the vulnerable.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Vision, Mission, Goal */}
      <FadeIn delay={100}>
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Vision */}
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary-100 p-4 rounded-full mr-4">
                    <Eye className="h-10 w-10 text-secondary-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-secondary-800">
                    Our Vision
                  </h3>
                </div>
                <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                  To be a beacon of hope and spiritual nourishment, guiding
                  individuals and communities into a deeper relationship with God
                  while fostering transformation through faith, love, and service.
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

              {/* Mission */}
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 p-4 rounded-full mr-4">
                    <Target className="h-10 w-10 text-primary-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary-800">
                    Our Mission
                  </h3>
                </div>
                <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                  To see God clearly, know Him intimately, worship Him
                  authentically, serve Him completely, and love others
                  unconditionally. Guided by the Bible as our ultimate authority,
                  we seek transformation through the power of the Holy Spirit,
                  nurturing personal relationships with God through prayer, His
                  Word, and Christ-like service.
                </p>
              </div>

              {/* Goal */}
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-4 rounded-full mr-4">
                    <Award className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-green-800">Our Goal</h3>
                </div>
                <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                  To cultivate a spiritually vibrant and inclusive church
                  community that reflects the teachings of Jesus Christ. Through
                  discipleship, outreach, and development programs, we aim to
                  empower individuals, strengthen families, and transform
                  communities for God's glory.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Core Values */}
      <FadeIn delay={200}>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Core Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Faith</h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  We firmly trust in the life-transforming power of God, grounded
                  in His Word, sustained through prayer, and expressed in
                  wholehearted worship.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Passion</h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  We serve God with joy and dedication, driven by a deep love for
                  His Kingdom and a commitment to advancing His work in every
                  generation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Community
                </h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  We build a Christ-centered family where unity, genuine
                  relationships, and a true sense of belonging are nurtured and
                  celebrated.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Authentic Worship
                </h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  We glorify God through sincere worship that flows from the
                  heart—expressed in music, prayer, and fellowship that honors His
                  presence.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all md:col-span-2 lg:col-span-1">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Compassionate Service
                </h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  We follow the example of Jesus by serving others with humility,
                  love, and practical care, bringing hope and healing to those in
                  need.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
