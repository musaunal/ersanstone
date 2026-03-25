'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Mezar taşı fiyatları nedir?',
    a: 'Fiyatlarımız malzeme türü (granit, mermer, andezit), boyut ve işçilik detaylarına göre değişmektedir. Aynı gün ücretsiz fiyat teklifi için WhatsApp\'tan bize ulaşabilirsiniz.',
  },
  {
    q: 'Teslim süresi ne kadar?',
    a: 'Sipariş büyüklüğü ve malzeme seçimine göre teslim süremiz genellikle 7 ila 21 iş günü arasındadır. Acil siparişler için özel çözümler sunabiliyoruz.',
  },
  {
    q: 'Hangi şehirlere hizmet veriyorsunuz?',
    a: 'Merkez üssümüz Isparta olmak üzere Burdur, Afyonkarahisar, Antalya ve çevre illere hizmet vermekteyiz. Nakliye ve montaj dahil fiyat için iletişime geçin.',
  },
  {
    q: 'Garanti süresi nedir?',
    a: 'Tüm ürünlerimizde 5 yıl işçilik garantisi sunuyoruz. Garanti kapsamında meydana gelen hasarları ücretsiz olarak onarıyoruz.',
  },
  {
    q: 'Ödeme seçenekleri nelerdir?',
    a: 'Kredi kartıyla 3 taksit veya nakit 2 taksit imkanı sunuyoruz. Bunların yanı sıra, ürünü teslim aldıktan sonra ödeme seçeneğimiz de mevcuttur.',
  },
  {
    q: 'Hangi malzemeleri kullanıyorsunuz?',
    a: 'Mermer, granit, traverten, andezit, oniks ve yapay taş seçeneklerimiz mevcuttur. Tüm malzemelerimiz 1. sınıf A kalitesidir. Geniş renk ve doku yelpazemizle her projeye uygun çözüm sunuyoruz.',
  },
  {
    q: 'Özel tasarım yapıyor musunuz?',
    a: 'Evet. Fotoğraf baskısı, lazer kazıma, kabartma yazı ve özel şekil gibi kişiselleştirme seçeneklerimiz mevcuttur. Tasarım konusunda size ücretsiz danışmanlık sağlıyoruz.',
  },
]

// FAQPage schema lives here so it's co-located with the component data
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="py-28 bg-stone-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-amber-600 text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Merak Edilenler
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-5">
            Sıkça Sorulan Sorular
          </h2>
          <div className="w-14 h-px bg-amber-600 mx-auto" />
        </motion.div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto divide-y divide-stone-200">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-stone-800 group-hover:text-amber-600 transition-colors">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center transition-all ${
                    openIndex === i
                      ? 'bg-amber-600 border-amber-600 rotate-45'
                      : 'group-hover:border-amber-400'
                  }`}
                >
                  <svg
                    className={`w-3 h-3 transition-colors ${openIndex === i ? 'text-white' : 'text-stone-500'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-stone-500 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
