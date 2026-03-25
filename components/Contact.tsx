'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FiPhone, FiMapPin } from 'react-icons/fi'
import { track } from '@/lib/analytics'

const serviceAreas = ['Isparta', 'Burdur', 'Afyonkarahisar', 'Antalya', 'Denizli', 'Konya']

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-stone-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-amber-600 text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Ulaşın
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-5">
            İletişim
          </h2>
          <div className="w-14 h-px bg-amber-600 mx-auto mb-6" />
          <p className="text-stone-500 max-w-xl mx-auto">
            Fiyat teklifi ve destek talepleriniz için bizimle iletişime geçin
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Google Maps embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 overflow-hidden border border-stone-200"
          >
            <iframe
              src="https://maps.google.com/maps?q=37.7753162,30.557042&output=embed&hl=tr&z=17"
              width="100%"
              height="280"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ersan Stone Konum – Isparta Sanayi"
            />
          </motion.div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/905451453200"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track.whatsapp('contact_section')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-5 bg-white border border-stone-100 hover:border-green-200 hover:shadow-sm transition-all"
            >
              <div className="flex-shrink-0 w-11 h-11 bg-green-100 rounded-full flex items-center justify-center">
                <FaWhatsapp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-0.5">WhatsApp</p>
                <p className="text-stone-700 font-medium text-sm">+(90) 545 145 32 00</p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+905451453200"
              onClick={() => track.phone()}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 p-5 bg-white border border-stone-100 hover:border-amber-200 hover:shadow-sm transition-all"
            >
              <div className="flex-shrink-0 w-11 h-11 bg-amber-100 rounded-full flex items-center justify-center">
                <FiPhone className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-0.5">GSM</p>
                <p className="text-stone-700 font-medium text-sm">+(90) 545 145 32 00</p>
              </div>
            </motion.a>

            {/* Address */}
            <motion.address
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="not-italic flex items-center gap-4 p-5 bg-white border border-stone-100"
            >
              <div className="flex-shrink-0 w-11 h-11 bg-stone-100 rounded-full flex items-center justify-center">
                <FiMapPin className="w-5 h-5 text-stone-500" />
              </div>
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-0.5">Adres</p>
                <p className="text-stone-700 font-medium text-sm">Sanayi, 3232. Sk. No:13</p>
                <p className="text-xs text-stone-400">32200 Merkez / Isparta</p>
              </div>
            </motion.address>
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-10"
          >
            <a
              href="https://wa.me/905451453200"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track.whatsapp('contact_cta')}
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-4 font-medium tracking-wide transition-colors"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp ile Ücretsiz Teklif Alın
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-6 mb-10"
          >
            {[
              { href: 'https://wa.me/905451453200', icon: FaWhatsapp, label: 'WhatsApp', color: 'hover:text-green-500', onClick: () => track.whatsapp('header') },
              { href: 'https://instagram.com/ersanstone', icon: FaInstagram, label: 'Instagram', color: 'hover:text-pink-500', onClick: () => track.social('instagram') },
              { href: 'https://www.facebook.com/Ersan-Stone-107310218253862', icon: FaFacebook, label: 'Facebook', color: 'hover:text-blue-500', onClick: () => track.social('facebook') },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                onClick={s.onClick}
                className={`text-stone-400 ${s.color} transition-colors`}
              >
                <s.icon size={22} />
              </a>
            ))}
          </motion.div>

          {/* Service areas */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-stone-200 pt-8 text-center"
          >
            <p className="text-xs text-stone-400 uppercase tracking-widest mb-4">
              Hizmet Bölgelerimiz
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {serviceAreas.map((city) => (
                <span
                  key={city}
                  className="text-sm text-stone-500 border border-stone-200 px-4 py-1.5"
                >
                  {city}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
