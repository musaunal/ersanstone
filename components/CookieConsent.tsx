'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      // Small delay so it doesn't flash on first paint
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Çerez bildirimi"
      className="fixed bottom-0 left-0 right-0 z-50 bg-stone-900 border-t border-stone-700 px-6 py-5 md:flex md:items-center md:justify-between md:gap-8 shadow-2xl"
    >
      <p className="text-stone-300 text-sm leading-relaxed mb-4 md:mb-0">
        Bu site, Google Analytics aracılığıyla anonim ziyaretçi istatistikleri toplamaktadır.
        Kişisel veri işlenmez. KVKK kapsamında onayınızı istiyoruz.{' '}
        <a
          href="https://ersanstone.com"
          className="text-amber-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gizlilik politikası
        </a>
      </p>
      <div className="flex gap-3 flex-shrink-0">
        <button
          onClick={decline}
          className="px-5 py-2 text-sm text-stone-400 border border-stone-600 hover:border-stone-400 transition-colors"
        >
          Reddet
        </button>
        <button
          onClick={accept}
          className="px-5 py-2 text-sm bg-amber-600 hover:bg-amber-700 text-white transition-colors"
        >
          Kabul Et
        </button>
      </div>
    </div>
  )
}
