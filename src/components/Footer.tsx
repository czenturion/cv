const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 text-center text-sm text-white/70">
      &copy; {year} CZENTURION
    </footer>
  )
}
