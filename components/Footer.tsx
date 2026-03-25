export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-stone-900 py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="font-playfair text-stone-200 text-xl mb-2 tracking-wide">Ersan Stone</p>
        <p className="text-stone-500 text-sm">
          © {year} Ersan Stone. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  )
}
