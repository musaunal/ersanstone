import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Isparta'da Mezar Taşı Seçimi Rehberi 2024 | Ersan Stone",
  description:
    "Granit mi mermer mi? Mezar taşı boyutları, fiyatları ve bakımı hakkında bilmeniz gereken her şey. Isparta'da 5 yıl garantili mezar anıtı için Ersan Stone.",
  alternates: { canonical: 'https://ersanstone.com/blog/isparta-mezar-tasi-rehberi' },
  openGraph: {
    title: "Isparta'da Mezar Taşı Seçimi Rehberi 2024",
    description:
      "Granit mi mermer mi? Mezar taşı boyutları, fiyatları ve bakımı. Isparta'da doğal taş seçerken dikkat etmeniz gerekenler.",
    url: 'https://ersanstone.com/blog/isparta-mezar-tasi-rehberi',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Isparta'da Mezar Taşı Seçimi Rehberi",
  description: 'Granit mi mermer mi? Mezar taşı seçerken dikkat edilmesi gereken boyut, malzeme, fiyat ve bakım bilgileri.',
  url: 'https://ersanstone.com/blog/isparta-mezar-tasi-rehberi',
  datePublished: '2024-11-01',
  dateModified: '2024-11-01',
  author: { '@type': 'Organization', name: 'Ersan Stone', url: 'https://ersanstone.com' },
  publisher: { '@type': 'Organization', name: 'Ersan Stone', url: 'https://ersanstone.com' },
}

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main>
        <nav className="text-xs text-stone-400 mb-8 flex gap-2">
          <Link href="/" className="hover:text-amber-600 transition-colors">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-amber-600 transition-colors">Blog</Link>
          <span>/</span>
          <span>Mezar Taşı Rehberi</span>
        </nav>

        <p className="text-amber-600 text-xs tracking-[0.2em] uppercase font-medium mb-4">Satın Alma Rehberi</p>
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 leading-tight mb-6">
          Isparta&apos;da Mezar Taşı Seçimi: Bilmeniz Gereken Her Şey
        </h1>
        <p className="text-stone-500 text-sm mb-10">Ersan Stone · Kasım 2024 · 6 dakika okuma</p>
        <div className="w-14 h-px bg-amber-600 mb-10" />

        <div className="prose prose-stone max-w-none prose-headings:font-playfair prose-headings:text-stone-800 prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline">
          <p>
            Bir yakınınızı kaybettiğinizde, mezar taşı seçimi hem duygusal hem de pratik açıdan zor bir karardır.
            Doğru malzemeyi seçmek, yıllar sonra hâlâ güzel duran ve bakım gerektirmeyen bir anıt anlamına gelir.
            Bu rehberde granit ile mermer arasındaki farkı, yaygın boyutları, fiyat faktörlerini ve bakım önerilerini açıklıyoruz.
          </p>

          <h2>Granit mi, Mermer mi?</h2>
          <p>
            Bu soruyu her gün duyuyoruz. Kısa cevap: mezar taşı için <strong>granit neredeyse her zaman daha iyi bir seçimdir</strong>. İşte nedeni:
          </p>
          <table>
            <thead><tr><th>Özellik</th><th>Granit</th><th>Mermer</th></tr></thead>
            <tbody>
              <tr><td>Hava koşullarına dayanıklılık</td><td>Çok yüksek</td><td>Orta</td></tr>
              <tr><td>Asit yağmuru etkisi</td><td>Minimal</td><td>Yüzey aşınması</td></tr>
              <tr><td>Renk ve parlaklık kalıcılığı</td><td>10–15 yıl+</td><td>5–8 yıl</td></tr>
              <tr><td>Yazı ve oyma kalıcılığı</td><td>Uzun ömürlü</td><td>Zamanla solar</td></tr>
              <tr><td>Fiyat</td><td>Biraz daha yüksek</td><td>Daha uygun</td></tr>
            </tbody>
          </table>
          <p>
            Mermer, mutfak tezgahı, banyo veya iç mekân uygulamalarında mükemmeldir — dokusu ve beyazlığı eşsizdir.
            Ancak dışarıda, doğrudan yağmur ve güneş alan bir mezarlık ortamında granit onlarca yıl bakım gerektirmeden ayakta kalır.
          </p>

          <h2>Standart Mezar Taşı Boyutları</h2>
          <p>
            Türkiye&apos;deki mezarlıkların büyük çoğunluğunda mezar boyutu 60–70 cm genişlik, 200–230 cm uzunluktur.
            Anıtın (dikey taşın) boyutları mezarlık yönetmeliğine göre değişir; Isparta&apos;da çoğu alan için üst sınır <strong>80 cm yükseklik</strong>tir.
          </p>
          <p>Sipariş vermeden önce mezarlık yönetiminden izin belgesi almanızı öneririz — bazı bölgelerde özel boyut veya renk kısıtlamaları olabilir.</p>

          <h2>Fiyatı Etkileyen Faktörler</h2>
          <p>&ldquo;Mezar taşı ne kadar?&rdquo; sorusunun tek bir cevabı yoktur. Fiyat şu unsurlara göre değişir:</p>
          <ul>
            <li><strong>Malzeme:</strong> Granit çeşidi (siyah absoluto, granit gri, yeşil, kırmızı vb.)</li>
            <li><strong>Boyut:</strong> Mezar kapağı alanı + anıt yüksekliği</li>
            <li><strong>İşçilik:</strong> Lazer yazı, kabartma portre, oyma desen</li>
            <li><strong>Nakliye:</strong> Isparta merkez ile çevre illere göre farklılaşır</li>
            <li><strong>Montaj:</strong> Tesviye, harç, sabitleme</li>
          </ul>
          <p>Bize ulaşın; boyutları ve isteklerinizi bildirin, aynı gün net fiyat teklifi gönderelim.</p>

          <h2>Bakım Önerileri</h2>
          <p>Granit mezar taşları düşük bakım gerektirir, ancak birkaç basit adım ömrünü uzatır:</p>
          <ul>
            <li>Yılda bir kez hafif sabunlu su ve yumuşak fırçayla temizleyin.</li>
            <li>Asitli temizleyicilerden kaçının (sirke, limon suyu) — graniti matlaştırır.</li>
            <li>Bitki kalıntıları veya yosun birikirse su bazlı biyosit uygulayın.</li>
            <li>Çatlak oluştuğunda beklemeden haber verin — Ersan Stone&apos;un 5 yıllık garantisi malzeme kaynaklı çatlakları kapsar.</li>
          </ul>

          <h2>Neden Ersan Stone?</h2>
          <p>
            2021&apos;den bu yana Isparta, Burdur, Afyonkarahisar, Antalya, Denizli ve Konya&apos;da yüzlerce mezar anıtı teslim ettik.
            Kendi atölyemizde üretim yapıyoruz — aracı yok, fiyat şişirmesi yok. Tüm işlerimizde <strong>5 yıl garanti</strong> veriyoruz.
          </p>

          <div className="not-prose mt-12 p-8 bg-stone-50 border border-stone-200 text-center">
            <p className="font-playfair text-2xl font-bold text-stone-800 mb-3">Ücretsiz Ölçü ve Fiyat Teklifi Alın</p>
            <p className="text-stone-500 text-sm mb-6">Boyutları ve malzeme tercihini WhatsApp&apos;tan bildirin, aynı gün fiyatlandıralım.</p>
            <a href="https://wa.me/905451453200" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 text-sm font-medium transition-colors">
              WhatsApp ile Teklif Alın
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
