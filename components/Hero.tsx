'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  // JS-based parallax — works on iOS Safari (CSS background-attachment:fixed does not)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero image — priority forces preload, fixing LCP score */}
      <motion.div className="absolute inset-0 scale-110" style={{ y }}>
        <Image
          src="/images/hero.webp"
          alt="Ersan Stone – Isparta mezar yapımı, mermer ve doğal taş işleri"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, letterSpacing: '0.2em' }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-sm uppercase tracking-[0.3em] text-amber-400 mb-4 font-medium"
        >
          Isparta Mezar Yapımı &bull; Doğal Taş & Mermer
        </motion.p>

        {/* H1: brand + primary service keyword for SEO */}
        <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold mb-3 leading-tight">
          Ersan Stone
        </h1>
        <p className="text-base text-white/60 tracking-wide mb-3 font-light">
          Mermer · Granit · Traverten · Doğal Taş
        </p>
        <p className="text-lg md:text-xl text-white/85 font-light leading-relaxed mb-10">
          Ölümün Ayırdığı Sevdiklerinize,
          <br className="hidden sm:block" /> Ölümsüz Eserler Sunalım
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3.5 text-sm font-medium tracking-wider uppercase transition-colors"
          >
            Referanslarımız
          </a>
          <a
            href="#contact"
            className="border border-white/70 hover:bg-white hover:text-stone-800 text-white px-8 py-3.5 text-sm font-medium tracking-wider uppercase transition-colors"
          >
            İletişime Geçin
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase">Keşfet</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
