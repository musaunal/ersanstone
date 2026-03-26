import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import CookieConsent from '@/components/CookieConsent'
import BlogPreview from '@/components/BlogPreview'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </main>
  )
}
