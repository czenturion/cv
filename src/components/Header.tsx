import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#tech-stack', label: 'Tech Stack' },
  { href: '#soft-skills', label: 'Soft Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neon-cyan/10 bg-night/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5 md:px-8">
        <a href="#about" className="font-display text-xl font-bold text-neon-cyan text-shadow-neon">
          CZENTURION
        </a>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-5 w-7 flex-col justify-between sm:hidden"
        >
          <span
            className={`h-0.5 bg-neon-cyan transition ${isOpen ? 'translate-y-[9px] rotate-45' : ''}`}
          />
          <span className={`h-0.5 bg-neon-cyan transition ${isOpen ? 'opacity-0' : ''}`} />
          <span
            className={`h-0.5 bg-neon-cyan transition ${isOpen ? '-translate-y-[9px] -rotate-45' : ''}`}
          />
        </button>

        <nav
          className={`${isOpen ? 'block' : 'hidden'} absolute inset-x-0 top-full border-b border-neon-cyan/10 bg-night px-5 py-3 sm:static sm:block sm:border-0 sm:bg-transparent sm:p-0`}
        >
          <ul className="flex flex-col sm:flex-row sm:gap-8">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 font-medium transition hover:text-neon-cyan sm:py-0"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
