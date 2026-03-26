import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Doğal Taş mı, Seramik mi? Çoğu Ev Sahibi Yanlış Seçiyor | Ersan Stone',
  description:
    'Seramiğin görmezden gelinen dezavantajları, doğal taşın sizi şaşırtacak avantajları ve satın alma kararınızı kolaylaştıracak dürüst karşılaştırma.',
  alternates: { canonical: 'https://ersanstone.com/blog/dogal-tas-mi-seramik-mi' },
  openGraph: {
    title: 'Doğal Taş mı, Seramik mi? Çoğu Ev Sahibi Yanlış Seçiyor',
    description: 'Seramiğin görmezden gelinen dezavantajları ve doğal taşın sizi şaşırtacak avantajları.',
    url: 'https://ersanstone.com/blog/dogal-tas-mi-seramik-mi',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Doğal Taş mı, Seramik mi? Çoğu Ev Sahibi Yanlış Seçiyor',
  description: 'Seramik ve doğal taşın dürüst karşılaştırması: uzun vadeli maliyet, değer etkisi ve bakım gerçekleri.',
  url: 'https://ersanstone.com/blog/dogal-tas-mi-seramik-mi',
  datePublished: '2025-03-18',
  dateModified: '2025-03-18',
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
          <span>Doğal Taş vs Seramik</span>
        </nav>

        <p className="text-amber-600 text-xs tracking-[0.2em] uppercase font-medium mb-4">Rehber</p>
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 leading-tight mb-6">
          Doğal Taş mı, Seramik mi?<br className="hidden sm:block" />
          <span className="text-stone-500 text-3xl font-normal"> Çoğu Ev Sahibi Yanlış Seçiyor</span>
        </h1>
        <p className="text-stone-500 text-sm mb-10">Ersan Stone · Mart 2025 · 6 dakika okuma</p>
        <div className="w-14 h-px bg-amber-600 mb-10" />

        <div className="prose prose-stone max-w-none prose-headings:font-playfair prose-headings:text-stone-800 prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline">

          <p>
            &ldquo;Seramik daha ucuz ve bakımsız&rdquo; — bu cümleyi duyduğunuzda büyük ihtimalle haklısınız.
            Ama &ldquo;ucuz&rdquo; ve &ldquo;daha avantajlı&rdquo; aynı şey değil. Yıllarca sektörde çalışan biri olarak
            şunu söyleyebilirim: <strong>doğal taşın uzun vadeli maliyeti ve değeri çoğu zaman seramikten
            üstündür</strong> — ama kimse bunu satarken anlatmaz.
          </p>

          <div className="not-prose bg-stone-900 text-white px-6 py-5 my-8">
            <p className="text-sm leading-relaxed">
              <span className="text-amber-400 font-semibold">Bu yazı ne değil:</span> Doğal taş satmak için yazılmış bir tanıtım yazısı.
              Her iki malzemenin de doğru olduğu durumlar var — aşağıda dürüstçe anlatıyoruz.
            </p>
          </div>

          <h2>Seramiğin Söylemediği Dezavantajlar</h2>

          <h3>1. Derz sorunu hiç bitmez</h3>
          <p>
            Seramik döşemenin en büyük gizli maliyeti: <strong>derz bakımı</strong>. Zamanla derz çatlıyor,
            kararıyor, küfleniyor. Mutfak veya banyoda yılda en az bir kez derz temizleyici kullanmak
            gerekiyor — ve 10–15 yıl sonra çoğu zaman tamamen yenileniyor. Doğal taşta derz alanı çok daha
            az (büyük levhalar) veya hiç yok (tezgahlarda tek parça).
          </p>

          <h3>2. Yüzey hasarı onarılamaz</h3>
          <p>
            Seramik çatladığında ya tek bir karo değiştirilir (ve eşi genellikle bulunamaz, ton farkı olur)
            ya da tüm alan yenilenir. Granit veya mermer yüzeyler ise <strong>cilalama ve polisajla
            onarılabilir</strong>. Çizik, mat leke, küçük çatlaklar profesyonel müdahaleyle büyük ölçüde
            giderilebilir — seramikte bu mümkün değil.
          </p>

          <h3>3. 20 yıl sonra modası geçiyor</h3>
          <p>
            Seramiğin deseni, rengi, boyutu bir trend. 2005&apos;lerin küçük kareli beyaz mutfak seramiği
            bugün nasıl görünüyor, hatırlıyor musunuz? Siyah absoluto granit veya beyaz Afyon mermeri ise
            20 yıl önce de güzeldi, 20 yıl sonra da güzel olacak. Doğal taş zaman aşımına uğramaz.
          </p>

          <h2>Doğal Taşın Söylenmeden Bırakılan Avantajları</h2>

          <h3>Evin yeniden satış değeri</h3>
          <p>
            Emlak danışmanları bunu biliyor ama çok az kişi araştırıyor: granit mutfak tezgahı veya
            mermer banyo, evin satış fiyatını doğrudan etkiliyor. &ldquo;Doğal taş tezgahlı&rdquo; ilanlar
            seramik ilanlardan ortalama <strong>%8–12 daha yüksek fiyata</strong> satılıyor
            (Türkiye gayrimenkul piyasasında da bu eğilim görülüyor). Yatırımınızın bir kısmı geri dönüyor.
          </p>

          <h3>Her levha eşsizdir</h3>
          <p>
            Granit levhalar milyonlarca yıllık jeolojik süreçlerin ürünüdür. Desen, damar, renk geçişleri —
            hiçbiri birbirinin aynısı değil. Seramiğin dijital baskı desenleri ne kadar gerçekçi görünse de,
            iki adım yaklaşıldığında fark anlaşılıyor. Özgünlük hâlâ değer taşıyor.
          </p>

          <h3>Isı ve soğuk depolaması</h3>
          <p>
            Granit ve mermer, ısıyı kademeli olarak emer ve dağıtır. Bu nedenle doğal taş mutfaklar
            yaz aylarında serin hissettiriyor. Açık mavi granit tezgahlı bir mutfakta hamur yoğurmak
            pişircilerin neden tercih ettiği bir şeydir — seramikte bu his yok.
          </p>

          <h2>Seramiğin Gerçekten Üstün Olduğu Durumlar</h2>
          <p>Doğal taş her zaman doğru seçim değil. Seramiği tercih etmeniz mantıklı olduğu durumlar:</p>
          <ul>
            <li><strong>Dış cephe ve bahçe:</strong> Dona dayanıklı seramik açık havada daha az bakım gerektirir.</li>
            <li><strong>Çok yüksek trafik alanları</strong> (AVM, koridorlar): Porselen seramik yoğun trafiğe çok dayanıklıdır.</li>
            <li><strong>Kiracı dönüşümlü mülkler:</strong> Hasar durumunda tek karo değişimi ekonomik çözüm olabilir.</li>
            <li><strong>Çok dar bütçe ve kısa vadeli kullanım:</strong> Seramik başlangıç maliyetinde avantajlı.</li>
          </ul>

          <h2>Karar Vermeden Önce Sorun Kendinize</h2>
          <p>Bu üç soruyu yanıtlayın:</p>
          <ol>
            <li><strong>Bu evi kaç yıl kullanacaksınız?</strong> 10 yıldan uzunsa doğal taş genellikle daha ekonomik.</li>
            <li><strong>Bakımı kendiniz mi yapacaksınız?</strong> Evet ise granit idealdir; emprenye yılda bir, temizlik çok kolay.</li>
            <li><strong>Estetik önceliğiniz ne?</strong> Eşsizlik ve sıcaklık mı — doğal taş. Tekdüze temiz görünüm mü — seramik veya quartz.</li>
          </ol>

          <hr />

          <p>
            Her iki malzemede de çalışıyoruz. Projenizi anlattığınızda hangisinin daha uygun olduğunu
            dürüstçe söyleriz — satmak istediğimiz şeyi değil, işinize yarayacak şeyi.
          </p>

          <div className="not-prose mt-12 p-8 bg-stone-50 border border-stone-200 text-center">
            <p className="font-playfair text-2xl font-bold text-stone-800 mb-3">
              Hangi Malzeme Sizin İçin Doğru?
            </p>
            <p className="text-stone-500 text-sm mb-6">
              Projenizi ve bütçenizi anlatın, tarafsız önerimizi alalım.
            </p>
            <a href="https://wa.me/905451453200" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 text-sm font-medium transition-colors">
              WhatsApp ile Danışın
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
