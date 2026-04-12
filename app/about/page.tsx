import type { Metadata } from 'next';
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";
import CloudinaryImage from "../../components/CloudinaryImage";
import { FadeIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "../../components/Animations";

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Gulu Light of Hope Bible Church & Outreach Ministries – our vision, mission, core values, and what we believe.',
  openGraph: { title: 'About Us | GULOHBCOM', description: 'Our vision, mission, core values and beliefs.' },
};

const coreValues = [
  { icon: Heart, title: "Faith", text: "We firmly trust in the life-transforming power of God, grounded in His Word, sustained through prayer, and expressed in wholehearted worship." },
  { icon: Target, title: "Passion", text: "We serve God with joy and dedication, driven by a deep love for His Kingdom and a commitment to advancing His work in every generation." },
  { icon: Users, title: "Community", text: "We build a Christ-centered family where unity, genuine relationships, and a true sense of belonging are nurtured and celebrated." },
  { icon: BookOpen, title: "Authentic Worship", text: "We glorify God through sincere worship that flows from the heart—expressed in music, prayer, and fellowship that honors His presence." },
  { icon: Heart, title: "Compassionate Service", text: "We follow the example of Jesus by serving others with humility, love, and practical care, bringing hope and healing to those in need.", span: true },
];

const beliefs = [
  { title: "The Bible", text: "We believe that the Bible is the verbally inspired word of God and without mistakes as originally written. It is the complete revelation of His will for salvation and the only unfailing rule of faith and practice for the Christian life." },
  { title: "God", text: "We believe in one God, creator of all things, eternally existing in three persons: Father, Son, and Holy Spirit. We believe that these three are co-eternal and of equal dignity and power." },
  { title: "Jesus", text: "We believe in the deity of Jesus Christ who was miraculously conceived by the Holy Spirit and born of a virgin. He lived a sinless life and died on the cross as a substitute for our sins. After His death, He bodily rose from the grave and ascended to the right hand of the Father. We firmly believe in His imminent return." },
  { title: "Humanity", text: "We believe that mankind was created by God and for God. However, through disobedience, every person has experienced spiritual death, resulting in separation from God. Physical death is an additional consequence. We also believe that all individuals are sinners by nature and in their actions." },
  { title: "Salvation", text: "We believe that the Lord Jesus Christ died for our sins and was raised from the dead to offer us new life. All who believe in Him are declared righteous because of His sacrificial death and His life-giving resurrection, and are therefore in a right relationship with God." },
  { title: "Holy Spirit", text: "We believe in the present ministry of the Holy Spirit indwelling all believers and thus enabling and empowering the life and ministry of the believer." },
  { title: "After Life", text: "We believe in the bodily resurrection of everyone who has lived, the everlasting blessedness of those in right relationship with God, and the everlasting punishment of those who have rejected God's forgiveness and new life in His Son." },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <CloudinaryImage
            src="IMG-20260209-WA0008_ghwmf3"
            alt="About Us"
            width={1920}
            height={700}
            className="w-full h-full object-cover brightness-[0.75] scale-110 animate-slow-zoom"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 via-black/10 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-secondary-600/5"></div>
        </div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-7xl mx-auto text-center">
            {/* Animated Badge */}
            <div className="mb-8 animate-fade-in-down">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-sm sm:text-base font-semibold uppercase tracking-wider shadow-2xl">
                <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
                Our Story
              </span>
            </div>
            
            {/* Main Heading with Gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 sm:mb-8 leading-tight animate-fade-in-up">
              <span className="block drop-shadow-2xl">
                About Us
              </span>
            </h1>
            
            {/* Subtitle with Animation */}
            <div className="max-w-5xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light drop-shadow-xl">
                A Christ-centered ministry committed to
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light drop-shadow-xl mt-2">
                <span className="text-primary-300 font-semibold">proclaiming the Gospel</span> and{" "}
                <span className="text-secondary-300 font-semibold">serving communities</span>
              </p>
            </div>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 animate-fade-in animation-delay-400">
              <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-white/50"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-white/50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <CloudinaryImage
                  src="IMG_20260107_132926_334_ysnf9h"
                  alt="Ministry Community"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </SlideInLeft>
            <SlideInRight>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                Gulu Light of Hope Bible Church & Outreach Ministries is a Christ-centered ministry based in Northern Uganda, committed to proclaiming the Gospel of Jesus Christ and demonstrating God's love through worship, discipleship, and holistic community development.
              </p>
              <p className="text-xl text-gray-800 mb-6 leading-relaxed">
                We are a growing, multi-generational church family passionate about spiritual transformation and practical service. Our mission is to bring hope, healing, and lasting impact to individuals, families, and communities through faith in Jesus Christ.
              </p>
              <p className="text-xl text-gray-800 leading-relaxed">
                Beyond worship services, we actively serve our community through education, counselling, evangelism, youth and children's ministries, health and wellness initiatives, agricultural projects, and outreach to the vulnerable.
              </p>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Goal */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all h-full">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary-100 p-4 rounded-full mr-4">
                    <Eye className="h-10 w-10 text-secondary-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-secondary-800">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                  To be a beacon of hope and spiritual nourishment, guiding individuals and communities into a deeper relationship with God while fostering transformation through faith, love, and service.
                </p>
                <div className="bg-secondary-50 border-l-4 border-secondary-600 p-4 rounded">
                  <p className="italic text-gray-800 mb-2">"Arise, shine; for your light has come! And the glory of the LORD is risen upon you."</p>
                  <p className="text-sm text-gray-600 font-semibold">Isaiah 60:1 (NKJV)</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all h-full">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 p-4 rounded-full mr-4">
                    <Target className="h-10 w-10 text-primary-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary-800">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-800 leading-relaxed">
                  To see God clearly, know Him intimately, worship Him authentically, serve Him completely, and love others unconditionally. Guided by the Bible as our ultimate authority, we seek transformation through the power of the Holy Spirit, nurturing personal relationships with God through prayer, His Word, and Christ-like service.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all h-full">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-4 rounded-full mr-4">
                    <Award className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-green-800">Our Goal</h3>
                </div>
                <p className="text-lg text-gray-800 leading-relaxed">
                  To cultivate a spiritually vibrant and inclusive church community that reflects the teachings of Jesus Christ. Through discipleship, outreach, and development programs, we aim to empower individuals, strengthen families, and transform communities for God's glory.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">Core Values</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map(({ icon: Icon, title, text, span }) => (
              <StaggerItem key={title} className={span ? "md:col-span-2 lg:col-span-1" : ""}>
                <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all h-full">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
                  <p className="text-lg text-gray-800 leading-relaxed">{text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">What We Believe</h2>
          </FadeIn>
          <StaggerContainer className="space-y-6">
            {beliefs.map(({ title, text }) => (
              <StaggerItem key={title}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all">
                  <h3 className="text-2xl font-bold text-primary-600 mb-4">{title}</h3>
                  <p className="text-lg text-gray-800 leading-relaxed">{text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
