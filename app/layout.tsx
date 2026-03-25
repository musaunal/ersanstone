import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { faqSchema } from '@/components/FAQ'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  // Primary keyword confirmed from Google Business: "Isparta Mezar Yapımı"
  title: 'Isparta Mezar Yapımı | Ersan Stone – Granit & Mermer Anıt',

  description:
    'Isparta mezar yapımı ve granit mezar taşı üretiminde uzman Ersan Stone. Mutfak tezgahı, banyo, merdiven ve balkon uygulamaları. 5 yıl garanti. Ücretsiz teklif.',

  keywords:
    'Isparta mezar yapımı, granit mezar taşı Isparta, mermer mezar anıtı, mezarlık taşı Isparta, mermer mutfak tezgahı, doğal taş Isparta, Ersan Stone',

  metadataBase: new URL('https://ersanstone.com'),

  alternates: {
    canonical: 'https://ersanstone.com',
  },

  openGraph: {
    title: 'Isparta Mezar Yapımı | Ersan Stone – Granit & Mermer Anıt',
    description:
      'Isparta\'da granit ve mermer mezar yapımı. Mutfak tezgahı, banyo, merdiven uygulamaları. 5 yıl garantili doğal taş işçiliği.',
    url: 'https://ersanstone.com',
    siteName: 'Ersan Stone',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://ersanstone.com/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Isparta Mezar Yapımı – Ersan Stone Granit ve Mermer Anıt',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Isparta Mezar Yapımı | Ersan Stone',
    description:
      'Granit ve mermer mezar taşı, mutfak tezgahı, banyo ve merdiven. Isparta\'da 5 yıl garantili doğal taş işçiliği.',
    images: ['https://ersanstone.com/images/hero.jpg'],
  },
}

// LocalBusiness structured data — feeds Google's knowledge graph
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Isparta Mezar Yapımı / Ersan Stone',
  legalName: 'Ersan Stone Madencilik İnşaat Makine San. Tic. Ltd. Şti.',
  description:
    'Isparta\'da granit ve mermer mezar yapımı, mezar taşı imalatı. Ayrıca mutfak tezgahı, banyo, hamam, merdiven ve balkon doğal taş uygulamaları.',
  url: 'https://ersanstone.com',
  telephone: '+905451453200',
  image: 'https://ersanstone.com/images/hero.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sanayi, 3232. Sk. No:13',
    addressLocality: 'Isparta',
    addressRegion: 'Isparta',
    postalCode: '32200',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '37.7753162',
    longitude: '30.557042',
  },
  hasMap: 'https://maps.app.goo.gl/DD34xd8oNqiERYJs7',
  priceRange: '₺₺',
  foundingDate: '2021',
  sameAs: [
    'https://maps.app.goo.gl/DD34xd8oNqiERYJs7',
    'https://instagram.com/ersanstone',
    'https://www.facebook.com/Ersan-Stone-107310218253862',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+905451453200',
    contactType: 'sales',
    availableLanguage: 'Turkish',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        {/* LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* FAQPage structured data — enables rich snippet Q&A in Google results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Google Analytics GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T6QF3WXQ7L" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T6QF3WXQ7L');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
