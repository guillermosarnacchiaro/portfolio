import { ArrowUpRight } from 'lucide-react'
import Container from '../../ui/Container/Container.jsx'

const links = [
  ['GitHub', 'https://github.com/guillermosarnacchiaro'],
  ['LinkedIn', 'https://www.linkedin.com/in/guillermo-matias-sarnacchiaro-a66365203'],
  ['Email', 'mailto:guillermo.sarnacchiaro@gmail.com'],
]

function Footer() {
  return (
    <footer className="border-t border-border py-10 text-sm text-subtle">
      <Container>
        <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <a className="grid size-9 place-items-center rounded-xl border border-border bg-surface text-xs font-bold text-foreground" href="#top" aria-label="Volver al inicio">GS</a>
            <p className="mt-4 text-foreground">Guillermo Sarnacchiaro</p>
            <p className="mt-1">Full Stack Developer · CABA, Argentina</p>
          </div>
          <nav aria-label="Enlaces sociales">
            <ul className="flex flex-wrap gap-x-5 gap-y-3">
              {links.map(([label, href]) => (
                <li key={label}>
                  <a className="inline-flex items-center gap-1 transition-colors duration-200 hover:text-primary-readable" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} aria-label={href.startsWith('http') ? `${label}, abre en una pestaña nueva` : label}>
                    {label} <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 text-xs sm:flex-row sm:justify-between">
          <p>© 2026 Guillermo Sarnacchiaro</p>
          <p>Construido con React, Tailwind CSS y Framer Motion</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
