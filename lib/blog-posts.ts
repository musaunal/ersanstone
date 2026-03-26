export type BlogPost = {
  href: string
  title: string
  description: string
  date: string
  readTime: string
  tag: string
}

export const blogPosts: BlogPost[] = [
  {
    href: '/blog/isparta-mezar-tasi-rehberi',
    title: "Isparta'da Mezar Taşı Seçimi: Bilmeniz Gereken Her Şey",
    description: 'Granit mi mermer mi? Boyutlar, fiyat faktörleri ve bakım önerileri.',
    date: 'Kasım 2024',
    readTime: '6 dk',
    tag: 'Mezar Taşı',
  },
  {
    href: '/blog/mutfak-tezgahi-secimi',
    title: 'Mutfak Tezgahı Seçimi: Granit, Mermer mi Yoksa Quartz mi?',
    description: 'Her malzemenin güçlü ve zayıf yönleri. Doğru taşı seçin.',
    date: 'Ocak 2025',
    readTime: '5 dk',
    tag: 'Mutfak',
  },
  {
    href: '/blog/granit-mermer-bakim-rehberi',
    title: 'Granit ve Mermer Bakım Rehberi: Taşınızı Onlarca Yıl Koruyun',
    description: 'Doğru temizlik, emprenye ve leke çıkarma yöntemleri.',
    date: 'Şubat 2025',
    readTime: '7 dk',
    tag: 'Bakım',
  },
  {
    href: '/blog/mermeri-mahveden-hatalar',
    title: 'Mermer Tezgahınızı Mahveden 6 Hata (Ve Nasıl Önlersiniz)',
    description: 'Çoğu ev sahibinin farkında olmadan yaptığı hatalar ve kalıcı hasar almadan önce yapmanız gerekenler.',
    date: 'Mart 2025',
    readTime: '5 dk',
    tag: 'Bakım',
  },
  {
    href: '/blog/dogal-tas-mi-seramik-mi',
    title: 'Doğal Taş mı, Seramik mi? Çoğu Ev Sahibi Yanlış Seçiyor',
    description: 'Seramiğin görmezden gelinen dezavantajları ve doğal taşın sizi şaşırtacak avantajları.',
    date: 'Mart 2025',
    readTime: '6 dk',
    tag: 'Rehber',
  },
]
