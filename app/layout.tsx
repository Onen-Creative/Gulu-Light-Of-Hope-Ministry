import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gulohbcom.org'),
  title: {
    default: 'Gulu Light of Hope Bible Church & Outreach Ministries',
    template: '%s | GULOHBCOM',
  },
  description:
    'Gulu Light of Hope Bible Church & Outreach Ministries (GULOHBCOM) – A Christ-centered ministry in Northern Uganda committed to worship, discipleship, education, and holistic community development.',
  keywords: [
    'Gulu Light of Hope Bible Church',
    'GULOHBCOM',
    'church Uganda',
    'ministry Northern Uganda',
    'Christian outreach Uganda',
    'Beacon of Hope Junior School',
    'Gulu church',
    'Pastor James Ekanya',
    'community development Uganda',
    'church Gulu District',
  ],
  authors: [{ name: 'Gulu Light of Hope Bible Church & Outreach Ministries' }],
  creator: 'GULOHBCOM',
  publisher: 'GULOHBCOM',
  icons: {
    icon: 'https://res.cloudinary.com/dhzo74l5w/image/upload/logo_gulu_light_of_hope_a4mdo4.png',
    shortcut: 'https://res.cloudinary.com/dhzo74l5w/image/upload/logo_gulu_light_of_hope_a4mdo4.png',
    apple: 'https://res.cloudinary.com/dhzo74l5w/image/upload/logo_gulu_light_of_hope_a4mdo4.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    url: 'https://gulohbcom.org',
    siteName: 'Gulu Light of Hope Bible Church & Outreach Ministries',
    title: 'Gulu Light of Hope Bible Church & Outreach Ministries',
    description:
      'A Beacon of Hope and Spiritual Nourishment in Northern Uganda – Faith, Passion, Community & Worship.',
    images: [
      {
        url: 'https://res.cloudinary.com/your-cloud/image/upload/IMG_20260107_132915_073_ocuiy9.jpg',
        width: 1200,
        height: 630,
        alt: 'Gulu Light of Hope Bible Church',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gulu Light of Hope Bible Church & Outreach Ministries',
    description: 'A Beacon of Hope and Spiritual Nourishment in Northern Uganda.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://gulohbcom.org',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Church',
              name: 'Gulu Light of Hope Bible Church & Outreach Ministries',
              alternateName: 'GULOHBCOM',
              url: 'https://gulohbcom.org',
              description:
                'A Christ-centered ministry in Northern Uganda committed to worship, discipleship, education, and holistic community development.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Adak Village',
                addressLocality: 'Gulu',
                addressRegion: 'Northern Uganda',
                addressCountry: 'UG',
                postalCode: '361143',
              },
              telephone: ['+256782509058', '+256779756720'],
              email: 'gulohbcom@gmail.com',
              founder: { '@type': 'Person', name: 'Pastor James Ekanya' },
              sameAs: ['https://www.facebook.com/gulohbcom'],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
