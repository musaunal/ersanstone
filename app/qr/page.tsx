import type { Metadata } from 'next'

// Update this URL to change where the QR code sends visitors — no need to reprint the code.
const REDIRECT_URL =
  'https://drive.google.com/file/d/1P7Fg5V0H4drWZ5N4j61p1VlIL6xPmd7B/view?usp=sharing'

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
