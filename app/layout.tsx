import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Ersan Stone - Doğal Taş ve Mermer Ürünleri',
  description:
    'Ersan Stone olarak mermer, granit, traverten ve doğal taştan mezar anıtı, mutfak tezgahı, banyo, merdiven ve dekoratif ürünler üretiyoruz.',
  keywords: 'mermer, granit, traverten, mezar anıtı, mutfak tezgahı, doğal taş, Ersan Stone, Isparta',
  metadataBase: new URL('https://ersanstone.com'),
  openGraph: {
    title: 'Ersan Stone',
    description: 'Doğal Taş ve Mermer Ürünleri',
    url: 'https://ersanstone.com',
    siteName: 'Ersan Stone',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-206331695-1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-206331695-1');
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
