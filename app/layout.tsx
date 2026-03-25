import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  // Title: brand + primary keyword + location (max ~60 chars)
  title: 'Ersan Stone | Mermer & Doğal Taş Ürünleri – Isparta',

  // Description: service + location + CTA, under 155 chars
  description:
    'Isparta\'da mermer, granit ve traverten ile mezar anıtı, mutfak tezgahı, banyo ve merdiven üretimi. 5 yıl garanti. Ücretsiz teklif için WhatsApp\'tan ulaşın.',

  keywords:
    'mermer Isparta, granit mezar taşı, mezar anıtı Isparta, mermer mutfak tezgahı, traverten merdiven, doğal taş Isparta, mezarlık taşı, Ersan Stone',

  metadataBase: new URL('https://ersanstone.com'),

  // Canonical — prevents www vs non-www duplicate content
  alternates: {
    canonical: 'https://ersanstone.com',
  },

  openGraph: {
    title: 'Ersan Stone | Mermer & Doğal Taş Ürünleri – Isparta',
    description:
      'Mermer, granit ve traverten ile mezar anıtı, mutfak tezgahı, banyo ve merdiven üretimi. Isparta\'da 5 yıl garantili doğal taş işçiliği.',
    url: 'https://ersanstone.com',
    siteName: 'Ersan Stone',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://ersanstone.com/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Ersan Stone – Mermer ve Doğal Taş Ürünleri Isparta',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ersan Stone | Mermer & Doğal Taş – Isparta',
    description:
      'Mezar anıtı, mutfak tezgahı, banyo ve merdiven. Isparta\'da mermer ve granit işçiliği.',
    images: ['https://ersanstone.com/images/hero.jpg'],
  },
}

// LocalBusiness structured data — feeds Google's knowledge graph
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Ersan Stone',
  description:
    'Mermer, granit, traverten, andezit, oniks ve yapay taş ürünleri. Mezar anıtı, mutfak tezgahı, banyo, merdiven ve balkon imalatı.',
  url: 'https://ersanstone.com',
  telephone: '+905451453200',
  image: 'https://ersanstone.com/images/hero.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Isparta',
    addressRegion: 'Isparta',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    // Update these with exact coordinates once confirmed
    latitude: '37.7648',
    longitude: '30.5566',
  },
  priceRange: '₺₺',
  foundingDate: '2021',
  sameAs: [
    'https://instagram.com/ersanstone',
    'https://www.facebook.com/Ersan-Stone-107310218253862',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+905451453200',
    contactType: 'sales',
    availableLanguage: 'Turkish',
    contactOption: 'TollFree',
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
