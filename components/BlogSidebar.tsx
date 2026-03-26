'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { blogPosts } from '@/lib/blog-posts'

export default function BlogSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-6">
        {/* Article list */}
        <div>
          <p className="text-xs text-stone-400 uppercase tracking-widest mb-4 font-medium">
            Tüm Yazılar
          </p>
          <nav className="space-y-1">
            {blogPosts.map((post) => {
              const active = pathname === post.href
              return (
                <Link
                  key={post.href}
                  href={post.href}
                  className={`block px-3 py-2.5 text-sm leading-snug rounded transition-colors ${
                    active
                      ? 'bg-amber-50 text-amber-700 font-medium border-l-2 border-amber-600'
                      : 'text-stone-500 hover:text-stone-800 hover:bg-stone-50'
                  }`}
                >
                  <span className="block text-xs mb-0.5 font-normal opacity-60">{post.tag}</span>
                  {post.title}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-stone-900 p-5 text-center">
          <p className="text-white text-sm font-medium mb-1">Ücretsiz Teklif</p>
          <p className="text-stone-400 text-xs mb-4 leading-relaxed">
            Projenizi anlatın, aynı gün fiyat gönderelim.
          </p>
          <a
            href="https://wa.me/905451453200"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 transition-colors"
          >
            WhatsApp'ta Yaz
          </a>
        </div>
      </div>
    </aside>
  )
}
