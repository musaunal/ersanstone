import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mermer Tezgahınızı Mahveden 6 Hata | Ersan Stone',
  description:
    'Çoğu ev sahibinin farkında olmadan yaptığı 6 kritik hata ve mermeri kalıcı hasardan korumak için yapmanız gerekenler.',
  alternates: { canonical: 'https://ersanstone.com/blog/mermeri-mahveden-hatalar' },
  openGraph: {
    title: 'Mermer Tezgahınızı Mahveden 6 Hata',
    description: 'Sirke mi kullandınız? Islak bez mi bıraktınız? İşte farkında olmadan yaptığınız hatalar.',
    url: 'https://ersanstone.com/blog/mermeri-mahveden-hatalar',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Mermer Tezgahınızı Mahveden 6 Hata (Ve Nasıl Önlersiniz)',
  description: 'Ev sahiplerinin farkında olmadan mermere zarar veren yaygın hatalar ve bunlardan kaçınmanın yolları.',
  url: 'https://ersanstone.com/blog/mermeri-mahveden-hatalar',
  datePublished: '2025-03-10',
  dateModified: '2025-03-10',
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
          <span>Mermer Hataları</span>
        </nav>

        <p className="text-amber-600 text-xs tracking-[0.2em] uppercase font-medium mb-4">Bakım &amp; Koruma</p>
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 leading-tight mb-6">
          Mermer Tezgahınızı Mahveden 6 Hata<br className="hidden sm:block" />
          <span className="text-stone-500 text-3xl font-normal"> (Ve Nasıl Önlersiniz)</span>
        </h1>
        <p className="text-stone-500 text-sm mb-10">Ersan Stone · Mart 2025 · 5 dakika okuma</p>
        <div className="w-14 h-px bg-amber-600 mb-10" />

        <div className="prose prose-stone max-w-none prose-headings:font-playfair prose-headings:text-stone-800 prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline">

          <p>
            Mermer, evinize değer katan, onlarca yıl güzelliğini koruyabilen bir malzemedir — ama yalnızca
            doğru bakım yapılırsa. Atölyemize gelen onarım taleplerinin büyük çoğunluğu, çok basit önlemlerle
            tamamen önlenebilecek hasarlardan kaynaklanıyor. İşte en sık karşılaştığımız 6 hata:
          </p>

          {/* Callout */}
          <div className="not-prose bg-amber-50 border-l-4 border-amber-500 px-5 py-4 my-8">
            <p className="text-sm text-amber-800 font-medium">
              Bu hatalardan birini yaptıysanız panik yapmayın — aşağıda her biri için ne yapmanız gerektiğini de açıklıyoruz.
            </p>
          </div>

          <h2>Hata 1: Sirke veya Limon Suyu ile Temizlemek</h2>
          <p>
            &ldquo;Doğal temizleyici&rdquo; arayanlar sıklıkla bu hataya düşüyor. Sirke (%5 asetik asit) ve limon suyu
            (sitrik asit), mermer yüzeyindeki kalsit kristalleriyle kimyasal reaksiyona giriyor. Sonuç: yüzeyde
            soluk, mat lekeler — ve bunlar cilalanmadan geri dönmüyor.
          </p>
          <p>
            <strong>Ne yapmalısınız:</strong> Günlük temizlik için yalnızca pH nötr sıvı sabun ve ılık su kullanın.
            Piyasada &ldquo;doğal taş temizleyici&rdquo; etiketiyle satılan ürünler güvenlidir.
          </p>

          <h2>Hata 2: Islak Bez veya Sünger Bırakmak</h2>
          <p>
            Mermer gözeneklidir. Uzun süre ıslak kalan bir bez veya sünger, nemini taşa aktarır. Bu nem zamanla
            taşın içinde mikrop ve küf oluşmasına, yüzeyde soluk beyaz halkalar görünmesine yol açar.
          </p>
          <p>
            <strong>Ne yapmalısınız:</strong> Temizlikten sonra yüzeyi daima kuru bir bezle silin. Tezgah
            kenarlarını da unutmayın — su oradan da emilebilir.
          </p>

          <h2>Hata 3: Doğrudan Tezgah Üzerinde Kesmek</h2>
          <p>
            Mermer granit kadar sert değildir (Mohs sertlik skalasında 3–4 arası, granit 6–7). Bıçak darbeleri
            yüzeyde iz bırakır ve bu izler zamanla birleşerek mat bir görünüme dönüşür. Daha kötüsü: bıçak
            çizikleri emprenyeyi de bozar, lekelere açık noktalar oluşturur.
          </p>
          <p>
            <strong>Ne yapmalısınız:</strong> Her zaman kesme tahtası kullanın. Alışkanlık haline getirmek
            için tezgah kenarına dekoratif bir kesme tahtası tutun.
          </p>

          <h2>Hata 4: Sıcak Tava veya Çaydanlık Koymak</h2>
          <p>
            &ldquo;Taş değil mi, dayanır&rdquo; düşüncesi yaygın ama yanlış. Mermer ısı değişimlerine karşı hassastır.
            200°C üzerindeki bir tava aniden soğuk mermere temas ettiğinde termal şok yaşanır; bu, gözle
            görülemeyen mikro çatlaklara ve uzun vadede yüzey kırılmalarına neden olabilir.
          </p>
          <p>
            <strong>Ne yapmalısınız:</strong> Sıcak kaplara her zaman silikon altlık veya kalın bez koyun.
            Bu kural granit için de geçerlidir.
          </p>

          <h2>Hata 5: Emprenye Yapmamak (veya Yanlış Zamanda Yapmak)</h2>
          <p>
            Emprenye uygulanmamış mermer, adeta açık bir kapı gibi leke çeker. Birçok ev sahibi tezgahı
            aldıklarında &ldquo;emprenye yapıldı&rdquo; bilgisiyle rahatlar — ve bir daha düşünmez. Oysa emprenye
            bozulur; mermer için <strong>her 6 ayda bir</strong> yenilenmesi gerekir.
          </p>
          <p>
            <strong>Test edin:</strong> Yüzeye 3–4 damla su bırakın. Eğer su 5 dakika içinde emiliyorsa
            emprenye zamanı gelmiştir. Su damlacık halinde duruyorsa koruma hâlâ aktif.
          </p>

          <h2>Hata 6: Banyo Temizleyicisi Kullanmak</h2>
          <p>
            Bu en sık yapılan ve en çok hasar veren hatadır. Marketlerde satılan banyo temizleyicilerinin
            büyük çoğunluğu asidik formüllüdür (pH 2–3). Mermer banyolarında kireç çözücü kullanıldığında
            yüzey bazen tek kullanımda bile kalıcı hasar görür: renk açılır, parlaklık kaybolur ve yüzey
            pürüzlü bir dokuya dönüşür.
          </p>
          <p>
            <strong>Ne yapmalısınız:</strong> Banyo temizleyicisi almadan önce etiketi okuyun. &ldquo;Mermer
            güvenli&rdquo; (marble safe) veya &ldquo;pH nötr&rdquo; yazmıyorsa kullanmayın. Kireç birikintisi için
            yalnızca mekanik yöntemler (plastik kazıyıcı) ve ardından polisaj uygulayın.
          </p>

          <hr />

          <h2>Hasar Oluştuysa Ne Yapmalı?</h2>
          <p>
            Mat leke veya yüzey çizikleri çoğu durumda giderilebilir. Küçük alanlar için taş polisaj
            tozu (mermer tozu + oksalik asit bazlı) ve elektrikli zımpara ile yüzey yenilenebilir.
            Ancak büyük alanlarda veya derin hasarlarda profesyonel cilalama gerekir.
          </p>
          <p>
            Bize fotoğraf göndermeniz yeterli — WhatsApp üzerinden hasarın onarılabilir olup olmadığını
            ve yaklaşık maliyetini aynı gün bildiririz.
          </p>

          <div className="not-prose mt-12 p-8 bg-stone-50 border border-stone-200 text-center">
            <p className="font-playfair text-2xl font-bold text-stone-800 mb-3">
              Hasarlı Mermeri Onarmak İstiyorsunuz?
            </p>
            <p className="text-stone-500 text-sm mb-6">
              Fotoğraf gönderin, ücretsiz değerlendirme yapalım.
            </p>
            <a href="https://wa.me/905451453200" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 text-sm font-medium transition-colors">
              WhatsApp ile Fotoğraf Gönderin
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
