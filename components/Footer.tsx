import Logo from '@/components/Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-stone-900 py-10">
      <div className="container mx-auto px-6 text-center">
        {/* Logo in white — currentColor inherits text-white */}
        <div className="flex justify-center mb-3 text-white">
          <Logo />
        </div>
        <p className="text-stone-500 text-sm">
          © {year} Ersan Stone. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  )
}
