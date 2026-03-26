'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'
import clsx from 'clsx'
import Logo from '@/components/Logo'

const navLinks = [
  { href: '#about', label: 'Hakkımızda' },
  { href: '#services', label: 'Hizmetler' },
  { href: '#portfolio', label: 'Referanslar' },
  { href: '#faq', label: 'SSS' },
  { href: '#contact', label: 'İletişim' },
  { href: '/blog', label: 'Blog' },
]

const socialLinks = [
  {
    href: 'https://wa.me/905451453200',
    icon: FaWhatsapp,
    hoverColor: 'hover:text-green-400',
    label: 'WhatsApp',
  },
  {
    href: 'https://instagram.com/ersanstone',
    icon: FaInstagram,
    hoverColor: 'hover:text-pink-400',
    label: 'Instagram',
  },
  {
    href: 'https://www.facebook.com/Ersan-Stone-107310218253862',
    icon: FaFacebook,
    hoverColor: 'hover:text-blue-400',
    label: 'Facebook',
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo — currentColor in the SVG inherits this anchor's text color */}
        <a
          href="#"
          aria-label="Ersan Stone – Ana Sayfa"
          className={clsx(
            'transition-colors',
            scrolled ? 'text-stone-800' : 'text-white'
          )}
        >
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const className = clsx(
              'text-sm font-medium tracking-wide transition-colors',
              scrolled ? 'text-stone-600 hover:text-amber-600' : 'text-white/90 hover:text-white'
            )
            return link.href.startsWith('/') ? (
              <Link key={link.href} href={link.href} className={className}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className={className}>
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={clsx(
                'transition-colors',
                s.hoverColor,
                scrolled ? 'text-stone-500' : 'text-white/80'
              )}
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          className={clsx(
            'md:hidden transition-colors',
            scrolled ? 'text-stone-800' : 'text-white'
          )}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          'md:hidden overflow-hidden transition-all duration-300 bg-white shadow-lg',
          menuOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <nav className="flex flex-col divide-y divide-stone-100">
          {navLinks.map((link) => {
            const className = 'px-6 py-4 text-stone-700 hover:text-amber-600 hover:bg-stone-50 transition-colors'
            return link.href.startsWith('/') ? (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={className}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={className}>
                {link.label}
              </a>
            )
          })}
          <div className="flex gap-5 px-6 py-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={clsx('text-stone-500 transition-colors', s.hoverColor)}
              >
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
