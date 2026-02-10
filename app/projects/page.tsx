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

      {/* Community Outreach Introduction */}
      <FadeIn>
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Community Outreach
              </h2>
              <p className="text-xl sm:text-2xl text-primary-600 font-semibold mb-4 sm:mb-6">
                "Serving our neighbors with Love & compassion"
              </p>
              <p className="text-lg sm:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6">
                Embrace community outreach at Gulu Light of Hope Bible Church &
                Outreach Ministries.
              </p>
              <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                At Gulu Light of Hope Bible Church, we believe that faith is
                cultivated not only within the walls of our church but also
                through active engagement with our community. Our community
                outreach programs are designed to spread the love and teachings
                of Jesus Christ beyond the sanctuary, providing Hope and
                inspiration to all we serve. We aim to foster a community where
                faith, hope, and love flourish.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  A welcoming and compassionate Environment
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Our Church is rooted in the values of compassion, sincerity,
                  and nurturing care. We strive to create a welcoming
                  environment where everyone feels known and loved. Our approach
                  is non-judgmental making faith accessible and inclusive to
                  all.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Engage in acts of service and Generosity
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                  Living out our faith means embodying the teaching of Christ
                  through acts of service, generosity and compassion. Our
                  outreach initiatives focus on:
                </p>
                <ul className="space-y-2 text-base sm:text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Providing support and resources to those in need within our
                    community.
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Fostering partnerships with local organizations to extend
                    our reach and effectiveness
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Community support and spiritual growth
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Spiritual growth is at the heart of our ministry. We offer a
                variety of programs designed to nurture your faith journey, from
                weekly sermon to intimate prayer gatherings. Our community
                support extends beyond Sunday's services, providing on-going
                pastoral care guidance. To request personal prayer or support,
                please visit our contact page and send us your prayer request.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Projects */}
      <FadeIn delay={100}>
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 sm:mb-16">
              Our Projects
            </h2>
            <div className="space-y-12 sm:space-y-16 md:space-y-20">
              {/* Church Building Project */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform">
                  <CloudinaryImage
                    src="IMG_20260107_170618_426_xk3yrg"
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

                {/* Impact Statement */}
                <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                  <h3 className="text-2xl font-bold text-secondary-600 mb-4">
                    Our Impact on the Community
                  </h3>
                  <p className="text-lg text-gray-800 leading-relaxed mb-4">
                    Through our education initiatives, we have transformed the
                    lives of over 500 students and their families in Northern
                    Uganda. Our holistic approach combines quality
                    Christ-centered education with practical support, ensuring
                    that vulnerable children have access to learning
                    opportunities that would otherwise be out of reach.
                  </p>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Beyond academic excellence, we are building a generation of
                    godly leaders who will impact their communities for Christ.
                    Our beneficiaries are experiencing improved literacy rates,
                    better health outcomes, and increased economic opportunities
                    for their families. The ripple effect of education is
                    creating lasting change in entire communities.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
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
                      Nursery to Primary Seven, over 500 learners,
                      Christ-centered education in Pawel, Gulu District.
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

                {/* Messages from Leadership */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  {/* Administrative Director */}
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden mr-6 ring-4 ring-secondary-200 flex-shrink-0">
                        <CloudinaryImage
                          src="IMG-20260209-WA0024_ezrszx"
                          alt="Administrative Director"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">
                          Mrs. Beatrice Acan
                        </h4>
                        <p className="text-secondary-600 font-semibold">
                          Administrative Director
                        </p>
                        <p className="text-gray-600 text-sm">
                          Beacon of Hope Junior School
                        </p>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                      As Administrative Director of Beacon of Hope Junior
                      School, I am honored to serve in a ministry that
                      transforms lives through Christ-centered education. Our
                      school stands as a testament to God's faithfulness and His
                      heart for the children of Northern Uganda.
                    </p>
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed mt-4">
                      In alignment with our ministry's constitution, we are
                      committed to providing holistic education that nurtures
                      the spiritual, academic, physical, and social development
                      of every child. We believe that true education goes beyond
                      textbooks—it shapes character, builds faith, and prepares
                      young hearts to serve God and their communities.
                    </p>
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed mt-4">
                      Our administrative team works diligently to ensure that
                      Beacon of Hope Junior School operates with excellence,
                      integrity, and compassion. We maintain high educational
                      standards while creating an environment where children
                      experience God's love daily. Through qualified teachers,
                      proper infrastructure, and a Christ-centered curriculum,
                      we are building a generation of godly leaders.
                    </p>
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed mt-4">
                      I am deeply grateful to our partners, donors, and
                      supporters who make this ministry possible. Your
                      investment in these children's lives creates ripples of
                      transformation that will impact families and communities
                      for generations. Together, we are fulfilling the Great
                      Commission by making disciples and demonstrating God's
                      love through practical service.
                    </p>
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed mt-4 font-semibold">
                      May God continue to bless this ministry and use it for His
                      glory.
                    </p>
                  </div>

                  {/* Head Teacher */}
                  <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6">
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6 ring-4 ring-secondary-200 flex-shrink-0">
                        <CloudinaryImage
                          src="IMG-20260210-WA0023_kmlhmq"
                          alt="M/s. Margaret Oyella"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center sm:text-left">
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                          M/s. Margaret Oyella
                        </h4>
                        <p className="text-secondary-600 font-semibold text-sm sm:text-base">
                          Head Teacher
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          Beacon of Hope Junior School
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
                      <p className="font-semibold">Dear beloved,</p>
                      <p>
                        Welcome to Beacon of Hope Junior School, a Christian
                        Nursery and Primary School.
                      </p>
                      <p>
                        My journey in life has been shaped by witnessing and
                        experiencing many challenges and limitations. These
                        experiences have taught me that life can be difficult,
                        yet with God at the center, it is possible not only to
                        endure but to excel. This conviction continues to guide
                        my calling in education and leadership.
                      </p>
                      <p>
                        At Beacon of Hope Junior School, we are committed to
                        nurturing learners in an environment grounded in hope,
                        integrity, compassion, excellence, and faith in God. We
                        believe education goes beyond academic achievement; it
                        is about shaping character, strengthening values, and
                        preparing children to face life with confidence,
                        resilience, and purpose.
                      </p>
                      <p>
                        My heart as a Head Teacher is to see every child excel
                        academically while, above all, growing in their
                        relationship with Jesus Christ. Our desire is that each
                        learner leaves our school equipped with knowledge,
                        strong moral foundations, and a living faith that will
                        guide them throughout their lives.
                      </p>
                      <p>
                        We value strong partnerships with parents and the wider
                        community, recognizing that raising children is a shared
                        responsibility. Together, we seek to develop
                        responsible, God-fearing individuals who will positively
                        impact society locally and globally.
                      </p>
                      <p>Thank you for being part of our school family.</p>
                      <p className="font-semibold">Shalom.</p>
                    </div>
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform">
                  <CloudinaryImage
                    src="FB_IMG_1770042328626_yszo5s"
                    alt="Health Center"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="bg-red-100 p-3 sm:p-4 rounded-full mr-3 sm:mr-4">
                      <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-red-600" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                      Health Center Project
                    </h2>
                  </div>
                  <ul className="space-y-3 sm:space-y-4 text-lg sm:text-xl text-gray-800">
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
      <FadeIn delay={200}>
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="bg-primary-100 p-3 sm:p-4 rounded-full mr-3 sm:mr-4">
                  <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-primary-600" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                  Future Projects
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white p-8 sm:p-10 md:p-12 rounded-xl sm:rounded-2xl shadow-xl text-center hover:shadow-2xl hover:scale-105 transition-all">
                <div className="bg-primary-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Goat Farming Project
                </h3>
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                  Planned income-generating project to support ministry
                  sustainability and community livelihoods.
                </p>
              </div>

              <div className="bg-white p-8 sm:p-10 md:p-12 rounded-xl sm:rounded-2xl shadow-xl text-center hover:shadow-2xl hover:scale-105 transition-all">
                <div className="bg-secondary-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-secondary-600" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Secondary School
                </h3>
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                  Expansion of educational services to include secondary
                  education, providing quality Christ-centered learning for
                  older students.
                </p>
              </div>

              <div className="bg-white p-8 sm:p-10 md:p-12 rounded-xl sm:rounded-2xl shadow-xl text-center hover:shadow-2xl hover:scale-105 transition-all">
                <div className="bg-red-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-red-600" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Health Center Facility
                </h3>
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                  Construction of a comprehensive health center to provide
                  accessible medical care and wellness services to the
                  community.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
