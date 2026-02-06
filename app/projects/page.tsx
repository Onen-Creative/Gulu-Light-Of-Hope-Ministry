import { Church, GraduationCap, Sprout, Heart, TrendingUp } from "lucide-react";
import CloudinaryImage from "../../components/CloudinaryImage";
import { FadeIn } from "../../components/Animations";

export default function Projects() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[350px] sm:h-[450px] lg:h-[500px] flex items-center pt-16">
        <div className="absolute inset-0">
          <CloudinaryImage
            src="FB_IMG_1770033186707_b4al7q"
            alt="Projects"
            width={1920}
            height={500}
            className="w-full h-full object-cover brightness-50"
            priority={true}
          />
        </div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg leading-tight animate-fade-in">
              Our Projects
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Holistic community development through faith and service
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <FadeIn>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {/* Church Building Project */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform">
                  <CloudinaryImage
                    src="FB_IMG_1770043335394_hily57"
                    alt="Church Building"
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
                    <h2 className="text-4xl font-bold text-gray-900">
                      Church Building Project
                    </h2>
                  </div>
                  <p className="text-xl text-gray-800 leading-relaxed">
                    Construction of a permanent, safe, and spacious main church
                    facility to support worship, discipleship, and community
                    ministry.
                  </p>
                </div>
              </div>

              {/* Education Projects */}
              <div className="bg-gradient-to-br from-secondary-50 to-white p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center mb-8">
                  <div className="bg-secondary-100 p-4 rounded-full mr-4">
                    <GraduationCap className="h-12 w-12 text-secondary-600" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Education Projects
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform">
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
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Nursery to Primary Seven, over 500 learners, Christ-centered
                      education in Pawel, Gulu District.
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform">
                    <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                      <CloudinaryImage
                        src="FB_IMG_1770033173611_yif6k7"
                        alt="Scholarship Program"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Scholarship & Child Sponsorship
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Support for vulnerable children through school fees,
                      supplies, mentorship, and spiritual guidance.
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform">
                    <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                      <CloudinaryImage
                        src="FB_IMG_1770410350073_ulis3l"
                        alt="Adult Literacy"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Functional Adult Literacy Program
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Reading, writing, numeracy, and life skills for adults.
                    </p>
                  </div>
                </div>
              </div>

              {/* Agriculture Program */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-4 rounded-full mr-4">
                      <Sprout className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">
                      Agriculture Program
                    </h2>
                  </div>
                  <ul className="space-y-4 text-xl text-gray-800">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      Sustainable farming training
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      Demonstration gardens
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">•</span>
                      Food security and income-generating activities
                    </li>
                  </ul>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2 hover:scale-105 transition-transform">
                  <CloudinaryImage
                    src="FB_IMG_1770032946503_mggvt8"
                    alt="Agriculture"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Health Center Project */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform">
                  <CloudinaryImage
                    src="FB_IMG_1770042328626_yszo5s"
                    alt="Health Center"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-red-100 p-4 rounded-full mr-4">
                      <Heart className="h-10 w-10 text-red-600" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">
                      Health Center Project
                    </h2>
                  </div>
                  <ul className="space-y-4 text-xl text-gray-800">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3">•</span>
                      Primary healthcare services
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3">•</span>
                      Health education and wellness programs
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3">•</span>
                      Medical outreach camps
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Future Projects */}
      <FadeIn delay={100}>
        <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary-100 p-4 rounded-full mr-4">
                  <TrendingUp className="h-12 w-12 text-primary-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Future Projects
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-12 rounded-2xl shadow-xl text-center hover:shadow-2xl hover:scale-105 transition-all">
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Goat Farming Project
                </h3>
                <p className="text-xl text-gray-800 leading-relaxed">
                  Planned income-generating project to support ministry
                  sustainability and community livelihoods.
                </p>
              </div>

              <div className="bg-white p-12 rounded-2xl shadow-xl text-center hover:shadow-2xl hover:scale-105 transition-all">
                <div className="bg-secondary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-10 w-10 text-secondary-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Secondary School
                </h3>
                <p className="text-xl text-gray-800 leading-relaxed">
                  Expansion of educational services to include secondary education, providing quality Christ-centered learning for older students.
                </p>
              </div>

              <div className="bg-white p-12 rounded-2xl shadow-xl text-center hover:shadow-2xl hover:scale-105 transition-all">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Health Center Facility
                </h3>
                <p className="text-xl text-gray-800 leading-relaxed">
                  Construction of a comprehensive health center to provide accessible medical care and wellness services to the community.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
