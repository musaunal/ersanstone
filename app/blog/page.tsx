import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Blog – Doğal Taş Rehberi | Ersan Stone',
  description:
    'Granit, mermer ve doğal taş hakkında satın alma rehberleri, bakım önerileri ve sektör bilgileri. Ersan Stone uzmanlarından pratik bilgiler.',
  alternates: { canonical: 'https://ersanstone.com/blog' },
}

export default function BlogIndex() {
  return (
    <main>
      <p className="text-amber-600 text-xs tracking-[0.2em] uppercase font-medium mb-4">
        Rehber &amp; İpuçları
      </p>
      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-4">
        Blog
      </h1>
      <div className="w-14 h-px bg-amber-600 mb-12" />

      <div className="divide-y divide-stone-100">
        {blogPosts.map((post) => (
          <article key={post.href} className="py-8 first:pt-0">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5">
                {post.tag}
              </span>
              <span className="text-xs text-stone-400">{post.date}</span>
              <span className="text-xs text-stone-400">·</span>
              <span className="text-xs text-stone-400">{post.readTime} okuma</span>
            </div>
            <h2 className="font-playfair text-xl font-bold text-stone-800 mb-2 leading-snug">
              <Link href={post.href} className="hover:text-amber-600 transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-4">{post.description}</p>
            <Link href={post.href} className="text-sm text-amber-600 font-medium hover:underline">
              Devamını Oku →
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}
