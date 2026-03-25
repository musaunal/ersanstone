'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'

const contactItems = [
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+(90) 545 145 32 00',
    href: 'https://wa.me/905451453200',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    hoverColor: 'hover:text-green-600',
  },
  {
    icon: FiPhone,
    label: 'GSM',
    value: '+(90) 545 145 32 00',
    href: 'tel:+905451453200',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    hoverColor: 'hover:text-amber-600',
  },
]

const socialLinks = [
  {
    href: 'https://wa.me/905451453200',
    icon: FaWhatsapp,
    label: 'WhatsApp',
    color: 'hover:text-green-500',
  },
  {
    href: 'https://instagram.com/ersanstone',
    icon: FaInstagram,
    label: 'Instagram',
    color: 'hover:text-pink-500',
  },
  {
    href: 'https://www.facebook.com/Ersan-Stone-107310218253862',
    icon: FaFacebook,
    label: 'Facebook',
    color: 'hover:text-blue-500',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-white">
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

        <div className="max-w-2xl mx-auto">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contactItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('https') ? '_blank' : undefined}
                rel={item.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-4 p-6 border border-stone-100 hover:border-amber-200 hover:shadow-sm transition-all group`}
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 ${item.iconBg} rounded-full flex items-center justify-center`}
                >
                  <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className={`text-stone-700 font-medium ${item.hoverColor} transition-colors`}>
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <a
              href="https://wa.me/905451453200"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-4 font-medium tracking-wide transition-colors"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp ile Mesaj Gönderin
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-6 mt-10"
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`text-stone-400 ${s.color} transition-colors`}
              >
                <s.icon size={22} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
