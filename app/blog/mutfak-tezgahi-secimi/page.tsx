import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mutfak Tezgahı Seçimi: Granit, Mermer mi Quartz mi? | Ersan Stone',
  description:
    'Mutfak tezgahı için doğru taşı seçmek: granit, mermer ve quartz arasındaki farklar, dayanıklılık, bakım ve fiyat karşılaştırması. Isparta\'dan uzman görüşü.',
  alternates: {
    canonical: 'https://ersanstone.com/blog/mutfak-tezgahi-secimi',
  },
  openGraph: {
    title: 'Mutfak Tezgahı Seçimi: Granit, Mermer mi Quartz mi?',
    description:
      'Her malzemenin güçlü ve zayıf yönleri. Mutfak kullanımına göre doğru taşı seçin.',
    url: 'https://ersanstone.com/blog/mutfak-tezgahi-secimi',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Mutfak Tezgahı Seçimi: Granit, Mermer mi Yoksa Quartz mi?',
  description:
    'Mutfak tezgahı malzemelerinin karşılaştırması: granit, mermer ve quartz arasındaki farklar, dayanıklılık, bakım kolaylığı ve fiyat.',
  url: 'https://ersanstone.com/blog/mutfak-tezgahi-secimi',
  datePublished: '2025-01-10',
  dateModified: '2025-01-10',
  author: { '@type': 'Organization', name: 'Ersan Stone', url: 'https://ersanstone.com' },
  publisher: { '@type': 'Organization', name: 'Ersan Stone', url: 'https://ersanstone.com' },
}

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main>
        <nav className="text-xs text-stone-400 mb-8 flex gap-2">
          <Link href="/" className="hover:text-amber-600 transition-colors">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-amber-600 transition-colors">Blog</Link>
          <span>/</span>
          <span>Mutfak Tezgahı</span>
        </nav>

        <p className="text-amber-600 text-xs tracking-[0.2em] uppercase font-medium mb-4">
          Satın Alma Rehberi
        </p>
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 leading-tight mb-6">
          Mutfak Tezgahı Seçimi: Granit, Mermer mi Yoksa Quartz mi?
        </h1>
        <p className="text-stone-500 text-sm mb-10">
          Ersan Stone · Ocak 2025 · 5 dakika okuma
        </p>
        <div className="w-14 h-px bg-amber-600 mb-10" />

        <div className="prose prose-stone max-w-none prose-headings:font-playfair prose-headings:text-stone-800 prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline">

          <p>
            Mutfak tezgahı, günde onlarca kez temas ettiğiniz, kesme, ısı, nem ve lekeye maruz kalan bir
            yüzeydir. Doğru malzeme seçimi hem estetik hem de pratik anlamda yıllarca memnuniyet sağlar.
            Granit, mermer ve quartz — üçü de sıkça tercih edilir, ama birbirinden çok farklıdır.
          </p>

          <h2>Hızlı Karşılaştırma</h2>

          <table>
            <thead>
              <tr>
                <th>Özellik</th>
                <th>Granit</th>
                <th>Mermer</th>
                <th>Quartz</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Isı dayanımı</td>
                <td>Çok yüksek</td>
                <td>Yüksek</td>
                <td>Orta (siyahlaşabilir)</td>
              </tr>
              <tr>
                <td>Çizilme direnci</td>
                <td>Yüksek</td>
                <td>Orta</td>
                <td>Yüksek</td>
              </tr>
              <tr>
                <td>Leke tutma</td>
                <td>Düşük (emprenye ile)</td>
                <td>Yüksek (gözenekli)</td>
                <td>Çok düşük</td>
              </tr>
              <tr>
                <td>Asit (limon, sirke) etkisi</td>
                <td>Minimal</td>
                <td>Yüzey matlaşır</td>
                <td>Minimal</td>
              </tr>
              <tr>
                <td>Bakım kolaylığı</td>
                <td>Yüksek</td>
                <td>Orta (yıllık emprenye)</td>
                <td>Çok yüksek</td>
              </tr>
              <tr>
                <td>Doğallık / desen</td>
                <td>Doğal, eşsiz</td>
                <td>Doğal, lüks görünüm</td>
                <td>Üretilmiş, tekdüze</td>
              </tr>
              <tr>
                <td>Fiyat (görece)</td>
                <td>Orta</td>
                <td>Orta–Yüksek</td>
                <td>Yüksek</td>
              </tr>
            </tbody>
          </table>

          <h2>Granit: En Pratik Seçim</h2>
          <p>
            Aktif kullanılan bir mutfak için granit çoğu durumda en iyi dengei sunar. Siyah absoluto granit
            veya granit gri gibi koyu renkli çeşitler leke ve çizgi saklamada üstündür. Yılda bir
            <strong> emprenye (sealer)</strong> uygulaması yapıldığında onlarca yıl yeni gibi kalır.
          </p>
          <p>
            Dikkat edilmesi gereken tek nokta: sıcak tava doğrudan yüzeye konulabilir, ancak uzun süre
            bırakılırsa yavaş ısı dağılımı teorik olarak mikro çatlağa yol açabilir. Alışkanlık olarak
            bir altlık kullanmak yeterlidir.
          </p>

          <h2>Mermer: Estetik Ama Dikkat İster</h2>
          <p>
            Beyaz mermer (Carrara, Afyon beyazı) mutfaklarda inanılmaz güzel görünür. Ancak gerçekçi
            olmak gerekir: mermer <strong>gözeneklidir</strong>. Üzerine dökülen domates sosu, kahve
            veya limon suyu emprenyesiz mermer yüzeyinde kalıcı lekeye dönüşebilir.
          </p>
          <p>
            Eğer mermer istiyorsanız: 6 ayda bir yüksek kaliteli taş emprenyesi uygulayın, asitli
            temizleyicilerden tamamen kaçının ve kesme tahtası kullanmayı alışkanlık haline getirin.
            Yoğun pişirme yapan bir mutfakta mermeri tavsiye etmiyoruz — ama fotoğraf çekimi yapılan
            ya da hafif kullanılan mutfaklarda esirgenmeyecek bir güzellik sunar.
          </p>

          <h2>Quartz: Bakımsız Ama Yapay</h2>
          <p>
            Quartz (%93 doğal kuvars + %7 reçine bağlayıcı) en az bakım gerektiren seçenektir.
            Gözeneksiz yapısı sayesinde leke tutmaz, emprenye gerektirmez. Ancak gerçek taşın
            eşsiz damarları yoktur — her levha birbirine benzer. Aynı zamanda <strong>yüksek ısıya
            karşı hassastır</strong>; sıcak tava doğrudan bırakılırsa reçine bağlayıcı yanabilir ve
            yüzey kalıcı olarak hasar görür.
          </p>

          <h2>Hangi Mutfak Tipi için Hangi Taş?</h2>
          <ul>
            <li><strong>Yoğun, pratik mutfak:</strong> Granit (koyu renk tercih edin)</li>
            <li><strong>Lüks, estetik öncelikli mutfak:</strong> Mermer (profesyonel bakımla)</li>
            <li><strong>Kiracı / az bakım isteyenler:</strong> Quartz</li>
            <li><strong>Bütçe kısıtlı ama taş doku isteyen:</strong> Granit gri veya traverten</li>
          </ul>

          <h2>Isparta'da Tezgah Fiyatları</h2>
          <p>
            Fiyat; tezgahın m² alanına, kenar profiline (düz, kavisli, oymalı), lavabo kesimi sayısına
            ve nakliye mesafesine göre değişir. En net fiyat için boyutlarınızı bizimle paylaşın —
            aynı gün teklif gönderiyoruz.
          </p>

          <div className="not-prose mt-12 p-8 bg-stone-50 border border-stone-200 text-center">
            <p className="font-playfair text-2xl font-bold text-stone-800 mb-3">
              Mutfak Tezgahı Teklifi Alın
            </p>
            <p className="text-stone-500 text-sm mb-6">
              Ölçülerinizi ve malzeme tercihinizi WhatsApp&apos;tan bildirin, fiyatlandıralım.
            </p>
            <a
              href="https://wa.me/905451453200"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 text-sm font-medium transition-colors"
            >
              WhatsApp ile Teklif Alın
            </a>
          </div>
        </div>
      </main>

    </>
  )
}
