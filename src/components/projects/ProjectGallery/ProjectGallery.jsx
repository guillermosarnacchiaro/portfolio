import { useState } from 'react'
import { wordworkScreens } from '../../../data/wordwork.js'

function ProjectGallery() {
  const [activeScreen, setActiveScreen] = useState(wordworkScreens[0])

  return (
    <section className="mt-14" aria-labelledby="wordwork-gallery-title">
      <div className="mb-6 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-readable">Interfaces reales</p>
        <h3 id="wordwork-gallery-title" className="mt-3 text-2xl font-semibold tracking-tight text-foreground">WordWork en funcionamiento</h3>
        <p className="mt-3 leading-7 text-muted">Recorré las pantallas públicas de acceso y recuperación de la aplicación.</p>
      </div>

      <div className="overflow-hidden rounded-card border border-border bg-surface shadow-card">
        <div className="border-b border-border px-5 py-4">
          <p className="font-semibold text-foreground">{activeScreen.title}</p>
          <p className="mt-1 text-sm text-subtle">{activeScreen.description}</p>
        </div>
        <div className={`bg-surface-hover/55 p-3 sm:p-6 ${activeScreen.id === 'responsive' ? 'flex justify-center' : ''}`}>
          <img
            key={activeScreen.id}
            src={activeScreen.image}
            alt={`Captura real de WordWork: ${activeScreen.title}`}
            className={activeScreen.id === 'responsive'
              ? 'h-auto w-full max-w-sm rounded-xl border border-border bg-surface object-contain'
              : 'aspect-video w-full rounded-xl border border-border bg-surface object-cover object-top'}
            loading={activeScreen.id === 'login' ? 'eager' : 'lazy'}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2" aria-label="Seleccionar captura de WordWork">
        {wordworkScreens.map((screen) => (
          <button
            key={screen.id}
            type="button"
            onClick={() => setActiveScreen(screen)}
            aria-pressed={activeScreen.id === screen.id}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${activeScreen.id === screen.id ? 'border-primary bg-primary text-white' : 'border-border bg-surface text-muted hover:border-primary/40 hover:text-primary-readable'}`}
          >
            {screen.title}
          </button>
        ))}
      </div>
    </section>
  )
}

export default ProjectGallery
