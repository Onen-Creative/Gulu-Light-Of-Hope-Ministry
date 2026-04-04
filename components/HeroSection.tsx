'use client';

import { motion } from 'framer-motion';
import CloudinaryImage from './CloudinaryImage';

interface HeroProps {
  src?: string;
  gradient?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  verse?: string;
  verseRef?: string;
  badge?: string;
  height?: string;
}

export default function HeroSection({
  src,
  gradient = 'from-primary-800 via-primary-700 to-secondary-700',
  title,
  titleHighlight,
  subtitle,
  verse,
  verseRef,
  badge,
  height = 'h-[380px] sm:h-[460px] lg:h-[540px]',
}: HeroProps) {
  return (
    <section className={`relative ${height} flex items-center pt-16 overflow-hidden`}>
      {/* Background */}
      <div className="absolute inset-0">
        {src ? (
          <CloudinaryImage
            src={src}
            alt={title}
            width={1920}
            height={600}
            className="w-full h-full object-cover"
            priority={true}
          />
        ) : null}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} ${src ? 'opacity-75' : 'opacity-100'}`} />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Content */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-medium mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-300 animate-pulse" />
              {badge}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 drop-shadow-lg leading-tight"
          >
            {title}
            {titleHighlight && (
              <>
                <br />
                <span className="text-primary-300">{titleHighlight}</span>
              </>
            )}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow mb-6 text-white/90"
            >
              {subtitle}
            </motion.p>
          )}

          {verse && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-5 rounded-2xl max-w-2xl mx-auto"
            >
              <p className="text-sm sm:text-base md:text-lg italic mb-1.5 text-white/95">"{verse}"</p>
              {verseRef && <p className="text-xs sm:text-sm font-semibold text-primary-200">{verseRef}</p>}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40L60 34C120 28 240 16 360 13C480 10 600 16 720 19C840 22 960 22 1080 19C1200 16 1320 10 1380 7L1440 4V40H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
