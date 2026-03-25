'use client'

import { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { track } from '@/lib/analytics'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Show tooltip once after button appears
  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => {
        setShowTooltip(true)
        setTimeout(() => setShowTooltip(false), 3500)
      }, 800)
      return () => clearTimeout(t)
    }
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="bg-stone-900 text-white text-sm px-4 py-2 rounded-sm shadow-lg whitespace-nowrap"
              >
                Ücretsiz teklif alın →
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <a
            href="https://wa.me/905451453200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp ile iletişime geçin"
            onClick={() => track.whatsapp('floating_button')}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg shadow-green-500/30 transition-colors"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
            <FaWhatsapp className="w-7 h-7 text-white relative z-10" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
