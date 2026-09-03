import type { Metadata } from 'next'

// Update this URL to change where the QR code sends visitors — no need to reprint the code.
const REDIRECT_URL = 'https://youtube.com/shorts/bgYAHUwzYHQ?si=PnVgbqsWpn3U1wNW'

export const metadata: Metadata = {
  title: 'Yönlendiriliyor... | Ersan Stone',
  robots: { index: false, follow: false },
}

export default function QRRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${REDIRECT_URL}`} />
      <main className="min-h-screen bg-stone-50 flex items-center justify-center px-6">
        <p className="text-stone-500 text-sm">
          Yönlendiriliyor... Yönlendirme çalışmazsa{' '}
          <a href={REDIRECT_URL} className="text-amber-600 underline">
            buraya tıklayın
          </a>
          .
        </p>
      </main>
    </>
  )
}
