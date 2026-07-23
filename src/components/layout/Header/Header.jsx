import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Container from '../../ui/Container/Container.jsx'
import ThemeToggle from '../../ui/ThemeToggle/ThemeToggle.jsx'

const links = [
  ['Sobre mí', '#about'],
  ['Proyectos', '#projects'],
  ['Proceso', '#process'],
  ['Contacto', '#contact'],
]

function Header() {
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const mobileNavigationRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveSection(`#${visible.target.id}`)
      },
      { rootMargin: '-25% 0px -65% 0px' },
    )

    links.forEach(([, href]) => {
      const section = document.querySelector(href)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    mobileNavigationRef.current?.querySelector('a')?.focus()

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 768px)')
    const closeOnDesktop = (event) => {
      if (event.matches) setMenuOpen(false)
    }

    desktopQuery.addEventListener('change', closeOnDesktop)
    return () => desktopQuery.removeEventListener('change', closeOnDesktop)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a
          className="grid size-9 place-items-center rounded-xl border border-border bg-surface text-sm font-bold tracking-[-0.04em] text-foreground shadow-card transition-colors duration-200 hover:border-primary/40"
          href="#top"
          aria-label="Ir al inicio"
          onClick={() => setMenuOpen(false)}
        >
          GS<span className="sr-only">Guillermo Sarnacchiaro</span>
        </a>

        <nav className="hidden md:block" aria-label="Navegación principal">
          <ul className="flex items-center gap-6 text-sm text-muted">
            {links.map(([label, href]) => {
              const isActive = activeSection === href
              return (
                <li key={href}>
                  <a
                    className={`relative block py-5 transition-colors duration-200 hover:text-primary-readable after:absolute after:bottom-3 after:left-1/2 after:size-1 after:-translate-x-1/2 after:rounded-full after:bg-primary after:transition-opacity after:duration-200 ${isActive ? 'text-primary-readable after:opacity-100' : 'after:opacity-0'}`}
                    href={href}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-grid size-10 place-items-center rounded-full border border-border bg-surface text-muted transition-colors duration-200 hover:bg-surface-hover hover:text-foreground md:hidden"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <nav
        ref={mobileNavigationRef}
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full border-b border-border bg-background/98 px-5 shadow-card backdrop-blur-xl transition-[opacity,transform,visibility] duration-200 ease-standard md:hidden ${menuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}
        aria-label="Navegación móvil"
      >
        <ul className="mx-auto max-w-7xl py-3">
          {links.map(([label, href]) => {
            const isActive = activeSection === href
            return (
              <li key={href}>
                <a
                  className={`flex min-h-12 items-center justify-between rounded-xl px-3 text-sm font-medium transition-colors duration-200 hover:bg-surface-hover hover:text-primary-readable ${isActive ? 'bg-primary/8 text-primary-readable' : 'text-muted'}`}
                  href={href}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                  {isActive && <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
