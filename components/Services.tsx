'use client'

import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Mezar Taşı & Anıt',
    keyword: 'Granit ve mermer mezar anıtı — Isparta',
    desc: 'Sevdiklerinizin anısını en kaliteli granit ve mermer malzemelerle ölümsüzleştiriyoruz. Özel tasarım, kabartma yazı ve fotoğraf baskısı seçenekleriyle hizmetinizdeyiz.',
    href: '#portfolio',
  },
  {
    number: '02',
    title: 'Mutfak Tezgahı',
    keyword: 'Mermer ve granit mutfak tezgahı — Isparta',
    desc: 'Doğal taşın estetik güzelliğini mutfağınıza taşıyoruz. Beyaz mermer, siyah granit ve traverten seçenekleriyle mutfağınızı yeniden tasarlıyoruz.',
    href: '#portfolio',
  },
  {
    number: '03',
    title: 'Banyo & Hamam',
    keyword: 'Mermer banyo ve hamam kaplaması — Isparta',
    desc: 'Banyolarınızı ve hamamlarınızı lüks mermer kaplamalarla dönüştürüyoruz. Zemin, duvar ve tezgah uygulamalarında geniş malzeme yelpazemizle çözüm sunuyoruz.',
    href: '#portfolio',
  },
  {
    number: '04',
    title: 'Merdiven Basamağı',
    keyword: 'Doğal taş mermer merdiven — Isparta',
    desc: 'İç ve dış mekan merdiven basamaklarınızı granit, mermer ve andezit ile uzun ömürlü ve şık bir görünüme kavuşturuyoruz.',
    href: '#portfolio',
  },
  {
    number: '05',
    title: 'Balkon & Döşeme',
    keyword: 'Doğal taş balkon ve zemin kaplaması — Isparta',
    desc: 'Balkon, teras ve bahçe zeminlerini traverten, granit ve andezit taşlarla kaplıyoruz. Dış mekana dayanıklı, estetik ve uzun ömürlü çözümler.',
    href: '#portfolio',
  },
  {
    number: '06',
    title: 'Çeşme & Dekoratif',
    keyword: 'Mermer çeşme ve dekoratif taş ürünleri — Isparta',
    desc: 'Bahçe çeşmeleri, havuz kenarları ve dekoratif taş objeler üretiyoruz. Özel tasarım talepleriniz için bizimle iletişime geçin.',
    href: '#contact',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
}

export default function Services() {
  return (
    <section id="services" className="py-28 bg-stone-900">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-amber-500 text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Hizmetlerimiz
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-5">
            Ne Yapıyoruz?
          </h2>
          <div className="w-14 h-px bg-amber-500 mx-auto mb-6" />
          <p className="text-stone-400 max-w-xl mx-auto">
            Isparta ve çevre illerde mermer, granit ve traverten ile kapsamlı doğal taş çözümleri
          </p>
        </motion.div>

        {/* Service grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-700">
          {services.map((service, i) => (
            <motion.a
              key={service.number}
              href={service.href}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="group bg-stone-900 p-8 hover:bg-stone-800 transition-colors block"
            >
              <span className="text-4xl font-playfair font-bold text-stone-700 group-hover:text-amber-600 transition-colors leading-none block mb-5">
                {service.number}
              </span>
              <h3 className="font-semibold text-white text-lg mb-1">{service.title}</h3>
              <p className="text-xs text-amber-500/80 mb-4 tracking-wide">{service.keyword}</p>
              <p className="text-stone-400 text-sm leading-relaxed">{service.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs text-stone-500 group-hover:text-amber-500 transition-colors uppercase tracking-wider">
                Referansları Gör
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
