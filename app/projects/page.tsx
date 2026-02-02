import {
  Church,
  GraduationCap,
  BookOpen,
  Sprout,
  Calendar,
  MapPin,
  Users,
  TrendingUp,
  CheckCircle,
  User,
} from "lucide-react";
import CloudinaryImage from "../../components/CloudinaryImage";

export default function Projects() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <CloudinaryImage
            src="FB_IMG_1770043335394_hily57"
            alt="Ministry Projects"
            width={1920}
            height={400}
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Ministry Projects
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            The Ministry adopts a holistic approach to Christian service,
            addressing spiritual, emotional, physical, and social needs.
          </p>
          <div className="bg-white/10 backdrop-blur-sm border-l-4 border-white p-6 rounded-lg max-w-3xl mx-auto mt-8">
            <p className="text-lg italic mb-2">
              "Beloved, I pray that you may prosper in all things and be in
              health…"
            </p>
            <p className="text-gray-200 font-semibold">3 John 1:2 (NKJV)</p>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 text-center">
            Ongoing Projects
          </h2>

          {/* Inspiring Introduction */}
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                Transforming Lives Through Faith and Action
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-4 sm:mb-6">
                These are not just projects—they are testimonies of God's
                faithfulness and our commitment to serve His people. Each
                initiative represents countless hours of prayer, dedication, and
                the unwavering belief that through Christ, we can make a lasting
                difference in our communities.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
                From spiritual nourishment to education, from literacy to
                agriculture, every program is designed to uplift, empower, and
                transform lives. We are witnessing God's hand at work as
                families are strengthened, children are educated, and
                communities are renewed with hope and purpose.
              </p>
            </div>
          </div>

          {/* Church Ministry & Branches */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <CloudinaryImage
                  src="FB_IMG_1770034070592_zrgpyk"
                  alt="Church Ministry"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <Church className="h-12 w-12 text-primary-600 mr-4" />
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Church Ministry & Branches
                  </h3>
                </div>
                <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                  Church ministry is the spiritual foundation of GULOHBCOM,
                  dedicated to worship, teaching, discipleship, evangelism, and
                  pastoral care in accordance with Holy Scripture.
                </p>
                <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
                  <p className="text-lg italic mb-2 text-gray-800">
                    "And He Himself gave some to be pastors and teachers…"
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    Ephesians 4:11–12 (NKJV)
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pawel Branch */}
              <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-xl">
                <h4 className="text-2xl font-bold text-primary-800 mb-4">
                  Pawel Branch (Headquarters)
                </h4>
                <div className="flex items-center text-gray-700 mb-6">
                  <MapPin className="h-5 w-5 mr-2 text-primary-600" />
                  <span className="text-lg">
                    Adak Village, Gulu District, Northern Uganda
                  </span>
                </div>
                <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                  The Pawel Branch serves as the central worship,
                  administration, and discipleship center of the Ministry.
                </p>

                <div className="bg-white p-6 rounded-xl mb-6">
                  <h5 className="font-bold text-gray-900 mb-4 text-lg">
                    Church Programs:
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary-600" />{" "}
                      Sunday Worship
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary-600" />{" "}
                      Bible Teaching
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary-600" />{" "}
                      Prayer Ministry
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary-600" />{" "}
                      Women's Fellowship
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary-600" />{" "}
                      Youth Ministry
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary-600" />{" "}
                      Children's Ministry
                    </div>
                  </div>
                </div>

                <div className="bg-primary-100 p-6 rounded-xl">
                  <h6 className="font-bold text-primary-900 mb-3 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Impact Metrics
                  </h6>
                  <ul className="text-gray-800 space-y-2">
                    <li>• Founding worship center of the Ministry</li>
                    <li>• Oversees all outreach projects</li>
                    <li>• Continuous discipleship and care</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-primary-200 p-6 rounded-xl mt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <CloudinaryImage
                        src="FB_IMG_1770033148665_v4dnfk"
                        alt="Pawel Branch Pastor"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h6 className="font-bold text-gray-900 text-lg">
                        Pastor [Name]
                      </h6>
                      <p className="text-sm text-gray-600">
                        Branch Pastor - Pawel Branch
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-800 leading-relaxed">
                    The Pawel Branch exists to nurture believers through
                    faithful preaching of the Word of God, prayer, discipleship,
                    and fellowship. In alignment with the Ministry Constitution,
                    our commitment is to build a spiritually vibrant and
                    inclusive church community that equips believers to serve
                    God and transform their communities.
                  </p>
                </div>
              </div>

              {/* Arapai Branch */}
              <div className="bg-gradient-to-br from-secondary-50 to-white p-8 rounded-2xl shadow-xl">
                <h4 className="text-2xl font-bold text-secondary-800 mb-4">
                  Arapai Branch
                </h4>
                <div className="flex items-center text-gray-700 mb-6">
                  <MapPin className="h-5 w-5 mr-2 text-secondary-600" />
                  <span className="text-lg">
                    Arapai Village, Lamogi Sub-county, Amuru District
                  </span>
                </div>
                <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                  What began as a simple neighborhood outreach quickly blossomed
                  into a spiritual awakening with over 12 villagers coming to
                  faith in Christ, now grown to 80+ committed believers.
                </p>

                <div className="bg-white p-6 rounded-xl mb-6">
                  <h5 className="font-bold text-gray-900 mb-4 text-lg">
                    Church Programs:
                  </h5>
                  <div className="grid grid-cols-1 gap-2 text-gray-700">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-secondary-600" />{" "}
                      Sunday Worship Services
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-secondary-600" />{" "}
                      Weekly Fellowship
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-secondary-600" />{" "}
                      Evangelism Missions
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-secondary-600" />{" "}
                      Community Prayer
                    </div>
                  </div>
                </div>

                <div className="bg-secondary-100 p-6 rounded-xl">
                  <h6 className="font-bold text-secondary-900 mb-3 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Impact Metrics
                  </h6>
                  <ul className="text-gray-800 space-y-2">
                    <li>• 12+ new believers at inception</li>
                    <li>• 80+ committed members</li>
                    <li>• Land donated for permanent church</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-secondary-200 p-6 rounded-xl mt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <CloudinaryImage
                        src="FB_IMG_1770033148665_v4dnfk"
                        alt="Arapai Branch Pastor"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h6 className="font-bold text-gray-900 text-lg">
                        Pastor [Name]
                      </h6>
                      <p className="text-sm text-gray-600">
                        Branch Pastor - Arapai Branch
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-800 leading-relaxed">
                    The Arapai Branch stands as a testimony to God's
                    transforming power. In line with the Ministry's vision and
                    mission, we are committed to deepening faith, discipling
                    believers, and serving the community holistically.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Beacon of Hope Junior School */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-12 w-12 text-primary-600 mr-4" />
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Beacon of Hope Junior School
                  </h3>
                </div>
                <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg mb-6">
                  <p className="text-lg italic mb-2 text-gray-800">
                    "Train up a child in the way he should go…"
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    Proverbs 22:6 (NKJV)
                  </p>
                </div>
                <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                  An education ministry offering Nursery to Primary Seven
                  education, serving over 500 learners with quality Christian
                  education.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h5 className="font-bold text-gray-900 mb-4 text-lg flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary-600" />
                    Impact Metrics
                  </h5>
                  <ul className="text-lg text-gray-800 space-y-3">
                    <li>• 500+ learners enrolled</li>
                    <li>• Full Nursery–P7 operation</li>
                    <li>• Christian values integrated</li>
                    <li>• Local employment created</li>
                  </ul>
                </div>

                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl shadow-lg mt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <CloudinaryImage
                        src="FB_IMG_1770033096622_hvmhqg"
                        alt="Head Teacher"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-lg">
                        [Name]
                      </h5>
                      <p className="text-sm text-gray-600">
                        Head Teacher - Beacon of Hope Junior School
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Beacon of Hope Junior School exists to educate and nurture
                    children holistically. Guided by the Ministry's
                    constitutional mandate, we combine academic excellence with
                    Christian values to shape disciplined, responsible, and
                    God-fearing learners.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
                <CloudinaryImage
                  src="FB_IMG_1770032905674_qmjwer"
                  alt="Beacon of Hope Junior School"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Adult Literacy Program */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <CloudinaryImage
                  src="FB_IMG_1770033273318_mojjty"
                  alt="Adult Literacy Program"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <BookOpen className="h-12 w-12 text-primary-600 mr-4" />
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Functional Adult Literacy Program
                  </h3>
                </div>
                <div className="bg-secondary-50 border-l-4 border-secondary-600 p-6 rounded-lg mb-6">
                  <p className="text-lg italic mb-2 text-gray-800">
                    "My people are destroyed for lack of knowledge."
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    Hosea 4:6 (NKJV)
                  </p>
                </div>
                <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                  This program addresses illiteracy among adults and youth by
                  integrating education, life skills, entrepreneurship, and
                  Bible-based teaching.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h5 className="font-bold text-gray-900 mb-4 text-lg">
                    Impact:
                  </h5>
                  <ul className="text-lg text-gray-800 space-y-3">
                    <li>• Adults and youth trained</li>
                    <li>• Improved literacy and numeracy</li>
                    <li>• Spiritual and economic empowerment</li>
                  </ul>
                </div>

                <div className="bg-secondary-50 border-2 border-secondary-200 p-6 rounded-xl shadow-lg mt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <CloudinaryImage
                        src="FB_IMG_1770033884001_rjyc20"
                        alt="Adult Literacy Project Lead"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-lg">
                        [Name]
                      </h5>
                      <p className="text-sm text-gray-600">
                        Project Lead - Adult Literacy Program
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    This program restores dignity, confidence, and hope by
                    equipping learners with literacy skills, spiritual
                    grounding, and practical tools for daily life.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Agricultural Outreach */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-6">
                  <Sprout className="h-12 w-12 text-green-600 mr-4" />
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Agricultural Outreach – Gardens
                  </h3>
                </div>
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-6">
                  <p className="text-lg italic mb-2 text-gray-800">
                    "The land shall not be sold permanently, for the land is
                    Mine."
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    Leviticus 25:23 (NKJV)
                  </p>
                </div>
                <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                  The Gardens Project promotes food security, nutrition, and
                  sustainable agriculture while demonstrating biblical
                  stewardship.
                </p>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h5 className="font-bold text-gray-900 mb-4 text-lg">
                    Impact:
                  </h5>
                  <ul className="text-lg text-gray-800 space-y-3">
                    <li>• Food production for households</li>
                    <li>• Support to vulnerable families</li>
                    <li>• Stewardship training</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl shadow-lg mt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <CloudinaryImage
                        src="FB_IMG_1770033884001_rjyc20"
                        alt="Agriculture Project Lead"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-lg">
                        [Name]
                      </h5>
                      <p className="text-sm text-gray-600">
                        Project Lead - Agricultural Outreach
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Through agriculture, we demonstrate biblical stewardship and
                    service while supporting the physical needs of our
                    community.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
                <CloudinaryImage
                  src="FB_IMG_1770032946503_mggvt8"
                  alt="Agricultural Outreach"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Projects */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Future Projects
          </h2>

          {/* Vision Statement */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
                Building Tomorrow's Legacy Today
              </h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6">
                With God, all things are possible. These future projects are not
                mere dreams—they are divine appointments waiting to unfold. We
                move forward with unwavering faith, knowing that the same God
                who has brought us this far will continue to provide, guide, and
                bless every step of the journey ahead.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6">
                Each planned initiative represents our commitment to sustainable
                growth and long-term community transformation. We are laying
                foundations today for the blessings of tomorrow, trusting in
                God's perfect timing and provision.
              </p>
              <div className="bg-white/10 backdrop-blur-sm border-l-4 border-white p-4 sm:p-6 rounded-lg">
                <p className="text-lg sm:text-xl italic mb-2">
                  "For I know the plans I have for you, declares the LORD, plans
                  to prosper you and not to harm you, plans to give you hope and
                  a future."
                </p>
                <p className="text-base sm:text-lg font-semibold">
                  Jeremiah 29:11 (NIV)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border-l-4 border-primary-600 p-4 sm:p-6 rounded-lg max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <p className="text-base sm:text-lg md:text-xl italic mb-2 text-gray-800 text-center">
              "Plans succeed with good counsel."
            </p>
            <p className="text-sm sm:text-base text-gray-600 font-semibold text-center">
              Proverbs 20:18 (NKJV)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <Calendar className="h-12 w-12 sm:h-16 sm:w-16 text-primary-600 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Goat Farming Project
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                Income generation and community empowerment through sustainable
                livestock farming
              </p>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-sm sm:text-base px-3 sm:px-4 py-2 rounded-full font-semibold">
                Coming Soon
              </span>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <Calendar className="h-12 w-12 sm:h-16 sm:w-16 text-primary-600 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Health Center
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                Comprehensive healthcare services bringing healing and hope to
                our community
              </p>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-sm sm:text-base px-3 sm:px-4 py-2 rounded-full font-semibold">
                Coming Soon
              </span>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <Calendar className="h-12 w-12 sm:h-16 sm:w-16 text-primary-600 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Secondary School
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                Extended education opportunities shaping future leaders with
                Christian values
              </p>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-sm sm:text-base px-3 sm:px-4 py-2 rounded-full font-semibold">
                Coming Soon
              </span>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <Calendar className="h-12 w-12 sm:h-16 sm:w-16 text-primary-600 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Main Church Facility
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                A permanent sanctuary for worship, fellowship, and spiritual
                growth
              </p>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-sm sm:text-base px-3 sm:px-4 py-2 rounded-full font-semibold">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
