'use client'

import { motion } from 'framer-motion'
import { FiAward, FiShield, FiStar, FiCreditCard, FiDroplet } from 'react-icons/fi'

const features = [
  {
    icon: FiAward,
    title: '1. Sınıf Kalite',
    desc: 'Tüm ürünlerimizde A kalitesi malzeme kullanılmaktadır.',
  },
  {
    icon: FiShield,
    title: '5 Yıl Garanti',
    desc: '5 yıl boyunca ücretsiz onarım garantisi sunuyoruz.',
  },
  {
    icon: FiStar,
    title: '%100 Memnuniyet',
    desc: 'Ürünü teslim aldıktan sonra ödeme seçeneği sunuyoruz.',
  },
  {
    icon: FiCreditCard,
    title: 'Kolay Ödeme',
    desc: '3 ay taksitli kredi kartı veya 2 ay nakit taksit imkanı.',
  },
  {
    icon: FiDroplet,
    title: 'Bakım Hizmeti',
    desc: 'Şehir merkezinde ilk ay bakım hizmeti ücretsizdir.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Who Are We */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <p className="text-amber-600 text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Hakkımızda
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-5">
            Biz Kimiz?
          </h2>
          <div className="w-14 h-px bg-amber-600 mx-auto mb-7" />
          <p className="text-stone-600 max-w-3xl mx-auto text-lg leading-relaxed">
            2021 yılında kurulan Ersan Stone; mermer, granit, traverten, andezit, oniks ve yapay taş
            başta olmak üzere doğal taş sektörünün birçok alanında hizmet vermektedir. Mezar anıtı,
            çeşme, merdiven, mutfak tezgahı, banyo, pencere ve balkon gibi birbirinden farklı ürünler
            üretmekteyiz.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div id="mission" className="grid md:grid-cols-2 gap-8 mb-28">
          {[
            {
              title: 'Misyonumuz',
              body: 'Müşteri memnuniyetini her zaman ön planda tutarak, en kaliteli doğal taş ürünleri en uygun fiyatlarla sunmak. Siz değerli müşterilerimize en iyi hizmeti vermek için durmaksızın çalışıyoruz.',
            },
            {
              title: 'Vizyonumuz',
              body: 'Doğal taş sektöründe ulusal ve uluslararası pazarda öncü bir marka olmak. Kaliteli işçiliğimiz ve yenilikçi tasarımlarımızla dünya pazarlarına açılmayı hedefliyoruz.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="bg-stone-50 border border-stone-100 p-10"
            >
              <div className="w-8 h-px bg-amber-600 mb-5" />
              <h3 className="font-playfair text-2xl font-bold text-stone-800 mb-4">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Us */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <p className="text-amber-600 text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Avantajlarımız
          </p>
          <h2 className="font-playfair text-4xl font-bold text-stone-800 mb-5">Neden Biz?</h2>
          <div className="w-14 h-px bg-amber-600 mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="text-center p-6 border border-stone-100 hover:border-amber-200 hover:shadow-sm transition-all"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-50 rounded-full mb-5">
                <feature.icon className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-semibold text-stone-800 mb-2">{feature.title}</h4>
              <p className="text-sm text-stone-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
