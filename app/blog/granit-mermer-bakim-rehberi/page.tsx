import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Granit ve Mermer Bakım Rehberi | Ersan Stone',
  description:
    'Granit ve mermer yüzeyler için doğru temizlik ürünleri, leke çıkarma yöntemleri ve uzun ömür için profesyonel bakım önerileri.',
  alternates: {
    canonical: 'https://ersanstone.com/blog/granit-mermer-bakim-rehberi',
  },
  openGraph: {
    title: 'Granit ve Mermer Bakım Rehberi: Taşınızı Onlarca Yıl Koruyun',
    description:
      'Doğru temizleme ürünleri, leke çıkarma ve koruyucu emprenye teknikleri hakkında kapsamlı rehber.',
    url: 'https://ersanstone.com/blog/granit-mermer-bakim-rehberi',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Granit ve Mermer Bakım Rehberi: Taşınızı Onlarca Yıl Koruyun',
  description:
    'Doğal taş yüzeylerin temizlenmesi, emprenye edilmesi ve leke çıkarılması için profesyonel öneriler.',
  url: 'https://ersanstone.com/blog/granit-mermer-bakim-rehberi',
  datePublished: '2025-02-05',
  dateModified: '2025-02-05',
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
          <span>Bakım Rehberi</span>
        </nav>

        <p className="text-amber-600 text-xs tracking-[0.2em] uppercase font-medium mb-4">
          Bakım & Koruma
        </p>
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 leading-tight mb-6">
          Granit ve Mermer Bakım Rehberi: Taşınızı Onlarca Yıl Koruyun
        </h1>
        <p className="text-stone-500 text-sm mb-10">
          Ersan Stone · Şubat 2025 · 7 dakika okuma
        </p>
        <div className="w-14 h-px bg-amber-600 mb-10" />

        <div className="prose prose-stone max-w-none prose-headings:font-playfair prose-headings:text-stone-800 prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline">

          <p>
            Doğal taş, bakımı yapıldığında nesiller boyu güzelliğini korur — yapılmadığında ise yıllar
            içinde matlaşır, leke tutar ve çatlak oluşabilir. Bu rehberde hangi ürünlerin kullanılacağını,
            hangi hatalardan kaçınılacağını ve leke çıkarmak için ne yapılması gerektiğini adım adım
            anlatıyoruz.
          </p>

          <h2>Altın Kural: Asit Yasak</h2>
          <p>
            Bu kuralı ezberlemeniz yeterli: <strong>granit ve mermer yüzeylerde asitli hiçbir madde
            kullanmayın.</strong> Sirke, limon suyu, karbonat, kireç çözücü ve beyazlatıcı — bunların
            hepsi taşın yüzeyini kimyasal olarak aşındırır. Granit buna mermerden çok daha dayanıklıdır,
            ama yine de risk almamak gerekir.
          </p>
          <p>
            Endüstriyel temizleyiciler de tehlikelidir. Banyo temizleyicisi olarak satılan pek çok ürün
            pH değeri 2–3 olan güçlü asitler içerir. Mermer yüzeye bir kez temas ettiğinde mat izler
            kalıcı olabilir.
          </p>

          <h2>Günlük Temizlik</h2>
          <p>Günlük bakım için ihtiyacınız olan tek şey:</p>
          <ul>
            <li>Ilık su</li>
            <li>pH nötr sıvı sabun (bulaşık deterjanı uygundur, az miktarda)</li>
            <li>Yumuşak mikrofiber bez</li>
          </ul>
          <p>
            Sileceği ıslak bırakmayın — doğal taş suyu emerek leke oluşturabilir. Temizledikten sonra
            kuru bir bezle kurulayın. Bu kadar.
          </p>

          <h2>Haftalık / Aylık Bakım</h2>
          <p>
            Piyasada "doğal taş temizleyici" veya "stone cleaner" etiketiyle satılan nötr pH&apos;lı
            ürünler haftalık derine temizlik için idealdir. Bu ürünler taşı parlatmaz ama yüzey
            gözeneklerine giren kiri çeker.
          </p>
          <p>
            Parlak granit veya mermer yüzeylerde <strong>mikrofiber bez dairesel hareketlerle</strong>
            {' '}uygulandığında yüzey parlaklığını korur; tel veya aşındırıcı sünger kullanmayın.
          </p>

          <h2>Emprenye (Sealer) Uygulaması</h2>
          <p>
            Emprenye, taşın gözeneklerini geçici olarak kapatarak leke ve nem emilimini önler. Granit
            için <strong>yılda bir</strong>, mermer için <strong>6 ayda bir</strong> uygulama önerilir.
            Mutfak tezgahı gibi yoğun kullanılan yüzeylerde bu sıklığı artırabilirsiniz.
          </p>
          <p>
            Emprenyenin etkinliğini test etmek çok kolaydır: yüzeye birkaç damla su bırakın. Su
            damlacık halinde kalıyorsa emprenye hâlâ koruyucu. Yüzey emiyorsa yenileme zamanı gelmiştir.
          </p>
          <p>Uygulama adımları:</p>
          <ol>
            <li>Yüzeyi temizleyin ve tamamen kurulayın (en az 30 dakika).</li>
            <li>Emprenyi ince bir bez veya fırça ile yüzeye sürün.</li>
            <li>5–10 dakika bekleyin (ürün talimatlarını takip edin).</li>
            <li>Fazlasını temiz bezle silin — yüzeyde birikmesine izin vermeyin.</li>
            <li>24 saat boyunca yüzeyi ıslatmayın.</li>
          </ol>

          <h2>Leke Çıkarma</h2>

          <h3>Yağ lekeleri (zeytinyağı, tereyağı)</h3>
          <p>
            Az miktarda bulaşık deterjanı ile ılık suyu karıştırın. Leke üzerine uygulayıp 10 dakika
            bekleyin, ardından yumuşakça ovun. Eski yağ lekelerinde <strong>talk pudrası veya
            mısır nişastası</strong> ile poultice (yoğun leke çekici macun) yöntemi kullanılabilir:
            toz ile suyu hamur kıvamına getirin, lekenin üzerine yayın, plastik örtüyle kapatıp
            24 saat bekleyin.
          </p>

          <h3>Su kireç izleri</h3>
          <p>
            <strong>Mermer için:</strong> Kireç çözücü KESİNLİKLE kullanmayın. Plastik bir kazıyıcı
            ile kuru olarak kazıyın, ardından taş polisaj kremi uygulayın.
          </p>
          <p>
            <strong>Granit için:</strong> Çok hafif seyreltilmiş (1:20) amonyak solüsyonu bezi
            ıslatıp silerek kullanılabilir, ardından hemen su ile durulayın.
          </p>

          <h3>Kahve, çay, meyve suyu</h3>
          <p>
            Hızlı müdahale şarttır — kurumadan önce ıslak bezle alın. Kurumaya başlamışsa ılık
            su ve nötr sabunla hafifçe ovalayın. Derine işlemiş lekelerde hidrojen peroksit
            (%3, eczanede satılan) mermer üzerinde dikkatli kullanılabilir; koyu granit yüzeylerde
            renk açabilir.
          </p>

          <h2>Mezar Taşı Bakımı</h2>
          <p>
            Mezar taşları açık hava koşullarında yıllarca dayanmalıdır. Yıllık bakım için:
          </p>
          <ul>
            <li>Yılda bir yumuşak fırça ve sabunlu suyla temizleyin.</li>
            <li>Yosun veya biyolojik birikim varsa su bazlı biyosit spreyi kullanın
              (asitsiz formüller tercih edin).</li>
            <li>Yazı ve oymaların içindeki kiri yumuşak diş fırçasıyla çıkarın.</li>
            <li>Temizlikten sonra açık hava granit emprenyesi uygulayın.</li>
          </ul>
          <p>
            Ersan Stone&apos;un <strong>5 yıl garantisi</strong> malzeme kaynaklı çatlakları kapsar.
            Çatlak oluştuğunda beklemeden bildirin — büyümeden önce onarım çok daha kolaydır.
          </p>

          <div className="not-prose mt-12 p-8 bg-stone-50 border border-stone-200 text-center">
            <p className="font-playfair text-2xl font-bold text-stone-800 mb-3">
              Bakım veya Onarım İçin Bize Ulaşın
            </p>
            <p className="text-stone-500 text-sm mb-6">
              Leke, çatlak veya mat yüzey sorunları için ücretsiz değerlendirme yapıyoruz.
            </p>
            <a
              href="https://wa.me/905451453200"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 text-sm font-medium transition-colors"
            >
              WhatsApp ile Sorun
            </a>
          </div>
        </div>
      </main>

    </>
  )
}
