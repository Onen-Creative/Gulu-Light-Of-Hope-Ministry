"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import CloudinaryImage from "../components/CloudinaryImage";
import WhatsAppButton from "../components/WhatsAppButton";
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "../components/Animations";

const stats = [
  { value: "500+", label: "Students Educated" },
  { value: "2", label: "Church Branches" },
  { value: "5", label: "Active Ministries" },
  { value: "1000+", label: "Lives Touched" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[650px] sm:h-[750px] lg:h-[850px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <CloudinaryImage
            src="IMG_20260107_132915_073_ocuiy9"
            alt="Church Community"
            width={1920}
            height={850}
            className="w-full h-full object-cover brightness-[0.3] scale-110 animate-slow-zoom"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 via-black/40 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20"></div>
        </div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-7xl mx-auto text-center">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-5 sm:mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider shadow-2xl">
                <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
                Welcome Home
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-5 sm:mb-6 leading-tight drop-shadow-2xl"
            >
              Gulu Light of Hope
              <br />
              <span className="text-primary-300">
                Bible Church & Outreach Ministries-Uganda
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-5 font-light drop-shadow-xl"
            >
              A Beacon of Hope and Spiritual Nourishment
            </motion.p>

            {/* Core Values */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl mb-5 sm:mb-6 text-gray-200 drop-shadow-lg font-light"
            >
              <span className="text-primary-300 font-semibold">Faith</span> •{" "}
              <span className="text-secondary-300 font-semibold">Passion</span>{" "}
              • <span className="text-green-300 font-semibold">Community</span>{" "}
              • <span className="text-purple-300 font-semibold">Worship</span>
            </motion.p>

            {/* Bible Verse */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="max-w-3xl mx-auto mb-6 sm:mb-8"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/30 p-4 sm:p-6 rounded-2xl shadow-2xl">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl italic mb-2 font-serif drop-shadow-lg">
                  "You are the light of the world. A city set on a hill cannot
                  be hidden."
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-8 sm:w-12 bg-white/40"></div>
                  <p className="text-white/90 font-semibold text-xs sm:text-sm tracking-wide">
                    Matthew 5:14 (NKJV)
                  </p>
                  <div className="h-px w-8 sm:w-12 bg-white/40"></div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto"
            >
              <Link
                href="/about"
                className="bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-50 hover:scale-105 transition-all shadow-lg inline-flex items-center justify-center text-sm sm:text-base md:text-lg"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 hover:scale-105 transition-all shadow-lg text-sm sm:text-base md:text-lg"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ministry Introduction */}
      <FadeIn>
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Gulu Light of Hope Bible Church & Outreach Ministries is a
              faith-based, non-profit, non-political, and non-governmental
              Christian ministry established in accordance with Holy Scripture
              and the laws of the Republic of Uganda. The Ministry exists to
              advance the Gospel of Jesus Christ and to serve communities
              through worship, outreach, education, and holistic community
              development.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Impact Statistics */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
              Our Impact
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center cursor-default"
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base md:text-xl">
                    {stat.label}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Founder's Welcome Message */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-10 sm:mb-12">
              Welcome Message from the Founder & Director
            </h2>
          </FadeIn>
          <SlideInLeft>
            <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-6 sm:mb-0 sm:mr-8 ring-4 ring-primary-200 flex-shrink-0"
                >
                  <CloudinaryImage
                    src="IMG-20260209-WA0023_qy58ex"
                    alt="Pastor James Ekanya"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Pastor James Ekanya
                  </h3>
                  <p className="text-primary-600 font-semibold text-lg">
                    Founding Director
                  </p>
                  <p className="text-gray-600 mt-1">
                    Gulu Light of Hope Bible Church & Outreach Ministries-Uganda
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-base sm:text-lg text-gray-800 leading-relaxed">
                <p className="font-semibold">Dear Beloved,</p>
                <p>
                  It is with great joy and gratitude that I welcome you to Gulu
                  Light of Hope Bible Church & Outreach Ministries.
                </p>
                <p>
                  This ministry was birthed out of a deep calling to proclaim
                  the Gospel of Jesus Christ and to be a living testimony of
                  God's love through worship, discipleship, and compassionate
                  service. Our desire is to see lives transformed, families
                  strengthened, and communities restored through the power of
                  God's Word and the work of the Holy Spirit.
                </p>
                <p>
                  Here in Northern Uganda, we are committed not only to
                  spiritual growth but also to holistic community development—by
                  addressing spiritual, educational, health, and economic needs
                  so that hope may shine in every area of life. We believe the
                  Church is called to be the light of the world, bringing
                  healing, dignity, and purpose to all people.
                </p>
                <p>
                  Whether you are seeking a church home, spiritual renewal, or
                  an opportunity to serve and partner with us, you are warmly
                  welcome. We invite you to worship with us, grow in faith, and
                  join hands with us as we advance God's Kingdom together.
                </p>
                <p>May the Lord bless you richly as you connect with us.</p>
                <p className="font-semibold mt-6">
                  With love in Christ,
                  <br />
                  Pastor James Ekanya
                  <br />
                  <span className="text-primary-600">Founding Director</span>
                  <br />
                  Gulu Light of Hope Bible Church & Outreach Ministries-Uganda
                </p>
              </div>
            </div>
          </SlideInLeft>
        </div>
      </section>

      {/* Call to Action */}
      <FadeIn>
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Join Our Church Family
            </h2>
            <p className="text-lg sm:text-xl mb-6 leading-relaxed">
              We welcome everyone to be part of Gulu Light of Hope Bible Church
              & Outreach Ministries. Whether you are seeking spiritual growth,
              fellowship, or opportunities to serve, there is a place for you.
            </p>
            <p className="text-xl sm:text-2xl font-semibold mb-8">
              Together, we shine God's light and bring hope to our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/about"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center text-lg"
                >
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all shadow-lg text-lg"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </FadeIn>

      <WhatsAppButton />
    </div>
  );
}
