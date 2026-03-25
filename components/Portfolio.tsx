'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import clsx from 'clsx'

type ImageItem = { src: string; alt: string }

type Category = {
  id: string
  label: string
  images: ImageItem[]
}

// Descriptive, keyword-rich alt texts drive Google Images traffic for craftsmen
const categories: Category[] = [
  {
    id: 'mezar',
    label: 'Mezar Anıtları',
    images: Array.from({ length: 40 }, (_, i) => ({
      src: `/images/mezarlar/r${i + 1}.jpg`,
      alt: `Granit mezar taşı Isparta – Ersan Stone referans ${i + 1}`,
    })),
  },
  {
    id: 'mutfak',
    label: 'Mutfak',
    images: Array.from({ length: 13 }, (_, i) => ({
      src: `/images/mutfak/mu${i + 1}.jpg`,
      alt: `Mermer mutfak tezgahı Isparta – Ersan Stone referans ${i + 1}`,
    })),
  },
  {
    id: 'banyo',
    label: 'Banyo',
    images: [
      { src: '/images/mutfak/b1.jpeg', alt: 'Mermer banyo kaplaması Isparta – Ersan Stone referans 1' },
      { src: '/images/mutfak/b2.jpeg', alt: 'Mermer banyo kaplaması Isparta – Ersan Stone referans 2' },
    ],
  },
  {
    id: 'hamam',
    label: 'Hamam',
    images: [
      { src: '/images/mutfak/h1.jpeg', alt: 'Mermer hamam Isparta – Ersan Stone referans 1' },
      { src: '/images/mutfak/h2.jpeg', alt: 'Mermer hamam Isparta – Ersan Stone referans 2' },
    ],
  },
  {
    id: 'merdiven',
    label: 'Merdiven',
    images: Array.from({ length: 4 }, (_, i) => ({
      src: `/images/mutfak/m${i + 1}.jpg`,
      alt: `Mermer merdiven basamağı Isparta – Ersan Stone referans ${i + 1}`,
    })),
  },
  {
    id: 'balkon',
    label: 'Balkon',
    images: Array.from({ length: 5 }, (_, i) => ({
      src: `/images/mutfak/bl${i + 1}.jpg`,
      alt: `Doğal taş balkon kaplaması Isparta – Ersan Stone referans ${i + 1}`,
    })),
  },
]

export default function Portfolio() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const current = categories[activeIdx]

  function openLightbox(i: number) {
    setLightboxIndex(i)
    setLightboxOpen(true)
  }

  return (
    <section id="portfolio" className="py-28 bg-stone-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-amber-600 text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Projelerimiz
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-5">
            Referanslarımız
          </h2>
          <div className="w-14 h-px bg-amber-600 mx-auto mb-6" />
          <p className="text-stone-500 max-w-xl mx-auto">
            Tamamladığımız çalışmalardan seçmeler
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveIdx(i)}
              className={clsx(
                'px-5 py-2 text-sm font-medium transition-colors',
                activeIdx === i
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-amber-300 hover:text-amber-600'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3"
          >
            {current.images.map((img, i) => (
              <motion.button
                key={img.src}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.025, 0.4) }}
                onClick={() => openLightbox(i)}
                className="relative aspect-square overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                aria-label={img.alt}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={current.images.map((img) => ({ src: img.src, alt: img.alt }))}
      />
    </section>
  )
}
