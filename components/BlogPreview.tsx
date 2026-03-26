import Link from 'next/link'
import { blogPosts } from '@/lib/blog-posts'

// Show the 3 most recent posts
const featured = blogPosts.slice(-3).reverse()

export default function BlogPreview() {
  return (
    <section id="blog" className="py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-amber-600 text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Rehber &amp; İpuçları
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-stone-800 mb-5">
            Doğal Taş Rehberi
          </h2>
          <div className="w-14 h-px bg-amber-600 mx-auto mb-6" />
          <p className="text-stone-500 max-w-xl mx-auto">
            Doğru malzeme seçimi, bakım ve fiyatlandırma hakkında uzman bilgisi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {featured.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group border border-stone-100 hover:border-amber-200 hover:shadow-md transition-all p-6 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5">
                  {post.tag}
                </span>
                <span className="text-xs text-stone-400">{post.readTime} okuma</span>
              </div>
              <h3 className="font-playfair text-lg font-bold text-stone-800 group-hover:text-amber-700 transition-colors leading-snug mb-3 flex-1">
                {post.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-4 line-clamp-2">
                {post.description}
              </p>
              <span className="text-sm text-amber-600 font-medium group-hover:underline">
                Devamını Oku →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block border border-stone-300 hover:border-amber-500 hover:text-amber-600 text-stone-600 text-sm font-medium px-8 py-3 transition-colors"
          >
            Tüm Yazıları Gör
          </Link>
        </div>
      </div>
    </section>
  )
}
