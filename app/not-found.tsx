import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 – Sayfa Bulunamadı | Ersan Stone',
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-amber-600 text-sm tracking-[0.2em] uppercase font-medium mb-4">
          404
        </p>
        <h1 className="font-playfair text-5xl font-bold text-stone-800 mb-4">
          Sayfa Bulunamadı
        </h1>
        <div className="w-14 h-px bg-amber-600 mx-auto mb-6" />
        <p className="text-stone-500 mb-8">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
        </p>
        <Link
          href="/"
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-sm font-medium tracking-wider uppercase transition-colors"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </main>
  )
}
