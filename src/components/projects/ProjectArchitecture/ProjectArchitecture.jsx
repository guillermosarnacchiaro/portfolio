import { ArrowRight } from 'lucide-react'
import { architectureItems } from '../../../data/wordwork.js'

function ProjectArchitecture() {
  return (
    <section className="mt-14 rounded-card border border-border bg-surface-hover/55 p-5 sm:p-8" aria-labelledby="wordwork-architecture-title">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-readable">Arquitectura</p>
        <h3 id="wordwork-architecture-title" className="mt-3 text-2xl font-semibold tracking-tight text-foreground">Arquitectura de WordWork</h3>
        <p className="mt-3 leading-7 text-muted">Una aplicación separada por responsabilidades, con una interfaz en React, una API REST en Express y persistencia de datos en MongoDB.</p>
      </div>

      <ol className="mt-8 grid gap-3 lg:grid-cols-5">
        {architectureItems.map((item, index) => (
          <li key={item.name} className="relative min-w-0">
            <div className="h-full rounded-[18px] border border-border bg-surface p-4 shadow-card">
              <span className="text-xs font-semibold text-primary-readable">0{index + 1}</span>
              <h4 className="mt-3 font-semibold text-foreground">{item.name}</h4>
              <p className="mt-1 text-sm text-subtle">{item.detail}</p>
            </div>
            {index < architectureItems.length - 1 && (
              <ArrowRight className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 text-subtle lg:block" size={18} aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}

export default ProjectArchitecture
