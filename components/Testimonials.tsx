'use client'

import { motion } from 'framer-motion'

// Replace these with real customer quotes as you collect them
const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    location: 'Isparta',
    service: 'Mezar Taşı',
    text: 'Babamın mezar taşını Ersan Stone yaptı. Hem kalitesi hem işçiliği mükemmeldi, zamanında teslim ettiler. Fiyatları da çok makul. Gönül rahatlığıyla tavsiye ederim.',
  },
  {
    name: 'Fatma Demir',
    location: 'Burdur',
    service: 'Mutfak Tezgahı',
    text: 'Mermer mutfak tezgahımızı yaptırdık. Çok geniş model seçeneği vardı, istediğimizi bulduk. Montaj ekibi özenli çalıştı, hiçbir sorun yaşamadık.',
  },
  {
    name: 'Mehmet Kaya',
    location: 'Isparta',
    service: 'Mezar Anıtı',
    text: '5 yıl garanti verdiler ve sözlerini tuttular. Küçük bir çatlak oluştuğunda tereddütsüz gelip ücretsiz tamir ettiler. Güvenilir, dürüst bir firma.',
  },
  {
    name: 'Ayşe Çelik',
    location: 'Afyonkarahisar',
    service: 'Merdiven',
    text: 'Evimin merdivenlerini granitle kapladılar. Görüntüsü harika, çok dayanıklı. Afyon\'dan sipariş verdim, nakliye ve montajı da sorunsuz hallettiler.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-amber-600 text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Müşteri Yorumları
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-5">
            Müşterilerimiz Ne Diyor?
          </h2>
          <div className="w-14 h-px bg-amber-600 mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-stone-50 border border-stone-100 p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-amber-500 fill-amber-500" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-stone-600 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-stone-200 pt-4">
                <p className="font-semibold text-stone-800 text-sm">{t.name}</p>
                <p className="text-xs text-stone-400 mt-0.5">
                  {t.location} &middot; {t.service}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google review CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://share.google/PEHGt47ivdSZOiG5w"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-amber-600 transition-colors border border-stone-200 hover:border-amber-300 px-5 py-2.5"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" />
            </svg>
            Google&apos;da Yorum Yapın
          </a>
        </motion.div>
      </div>
    </section>
  )
}
