import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#tech-stack', label: 'Tech Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
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
    <>
      {/* Overlay: dims the page under the open menu, tap closes the menu.
          Outside <header>: its backdrop-blur would make `fixed` relative to the header */}
      <div
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
        className={`${isOpen ? 'visible opacity-100' : 'invisible opacity-0'} fixed inset-x-0 top-16 bottom-0 z-40 bg-night/70 transition-[opacity,visibility] duration-300 ease-out sm:hidden`}
      />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-neon-cyan/10 bg-night/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5 md:px-8">
          <a
            href="#about"
            className="font-display text-xl font-bold text-neon-cyan text-shadow-neon"
          >
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
            {/* Opening: waits 50ms, then fades out in 75ms. Closing: waits 75ms, then fades in for 75ms,
              so it is fully back when the outer lines finish their 150ms turn */}
            <span
              className={`h-0.5 bg-neon-cyan transition-opacity duration-75 ${isOpen ? 'opacity-0 delay-50' : 'delay-75'}`}
            />
            <span
              className={`h-0.5 bg-neon-cyan transition ${isOpen ? '-translate-y-[9px] -rotate-45' : ''}`}
            />
          </button>

          {/* `invisible` instead of `hidden`: display can't be animated, opacity and visibility can.
            Plain `transition` in Tailwind 4 skips visibility, so the properties are listed by hand */}
          <nav
            className={`${isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'} absolute inset-x-0 top-full border-b border-neon-cyan/10 bg-night px-5 py-3 transition-[opacity,translate,visibility] duration-300 ease-out sm:visible sm:static sm:translate-y-0 sm:border-0 sm:bg-transparent sm:p-0 sm:opacity-100 sm:transition-none`}
          >
            {/* On mobile the links sit on the right, near the menu button, for one-hand use */}
            <ul className="flex flex-col text-right sm:flex-row sm:gap-5 sm:text-left md:gap-8">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 font-medium transition hover:text-neon-cyan sm:py-0"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
