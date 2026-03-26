import Link from 'next/link'
import Logo from '@/components/Logo'
import BlogSidebar from '@/components/BlogSidebar'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="border-b border-stone-100 py-4 px-6 flex-shrink-0">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" aria-label="Ersan Stone – Ana Sayfa" className="text-stone-800">
            <Logo />
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm text-stone-500 hover:text-amber-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              className="text-sm bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 transition-colors"
            >
              Ücretsiz Teklif
            </Link>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-6 py-12 flex gap-12 items-start">
        <BlogSidebar />
        <div className="flex-1 min-w-0">{children}</div>
      </div>

      {/* Footer */}
      <footer className="border-t border-stone-100 py-6 text-center flex-shrink-0">
        <p className="text-stone-400 text-xs">
          © {new Date().getFullYear()} Ersan Stone.{' '}
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Ana Sayfa
          </Link>
          {' · '}
          <Link href="/blog" className="hover:text-amber-600 transition-colors">
            Blog
          </Link>
        </p>
      </footer>
    </div>
  )
}
