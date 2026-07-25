import { ArrowUpRight, Check, Code2, Heart, ShoppingBag } from 'lucide-react'
import lumaEditorial from '../../../assets/luma-editorial.png'
import Badge from '../../ui/Badge/Badge.jsx'
import Button from '../../ui/Button/Button.jsx'

function EcommerceProject({ project }) {
  return (
    <article className="overflow-hidden rounded-card border border-border bg-surface shadow-card lg:min-h-[670px]">
      <div className="grid h-full items-stretch lg:grid-cols-[2fr_3fr]">
        <div className="flex flex-col p-5 min-[380px]:p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="gap-1.5 text-foreground">
              <ShoppingBag size={13} className="text-primary-readable" aria-hidden="true" />
              {project.category}
            </Badge>
            <span className="text-xs font-medium text-subtle">{project.status}</span>
          </div>

          <h3 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {project.name}
          </h3>
          <p className="mt-4 max-w-xl leading-[1.7] text-muted">{project.description}</p>

          <ul className="mt-7 grid gap-3 text-sm text-muted">
            {project.highlights.map((highlight) => (
              <li className="flex items-start gap-3" key={highlight}>
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary-readable">
                  <Check size={13} strokeWidth={2.5} aria-hidden="true" />
                </span>
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-1.5" aria-label="Tecnologías utilizadas">
            {project.technologies.map((technology) => (
              <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-normal text-subtle" key={technology}>
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-subtle" aria-label="Características técnicas del proyecto">
            {project.proofPoints.map((point) => (
              <span className="flex items-center gap-1.5" key={point}>
                <span className="size-1 rounded-full bg-primary" aria-hidden="true" /> {point}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              as="a"
              className="w-full sm:w-auto"
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ver ${project.name}, abre en una pestaña nueva`}
            >
              Ver proyecto <ArrowUpRight size={17} aria-hidden="true" />
            </Button>
            <Button
              as="a"
              className="w-full sm:w-auto"
              variant="secondary"
              href={project.frontendUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ver código frontend de ${project.name} en GitHub, abre en una pestaña nueva`}
            >
              <Code2 size={17} aria-hidden="true" /> Código frontend
            </Button>
          </div>
        </div>

        <div className="flex min-h-96 flex-col items-center justify-center overflow-hidden border-t border-border bg-[#e7e0d5] p-3 min-[380px]:p-5 sm:p-8 lg:border-t-0 lg:border-l lg:p-10">
          <div className="w-full max-w-2xl">
            <div className="overflow-hidden rounded-sm border border-black/10 bg-[#f8f5ef] shadow-[0_28px_70px_rgba(39,35,31,0.18)]">
              <div className="flex h-7 items-center gap-1.5 border-b border-black/10 bg-white/70 px-3" aria-hidden="true">
                <span className="size-1.5 rounded-full bg-[#c9bfb4]" />
                <span className="size-1.5 rounded-full bg-[#d9d0c7]" />
                <span className="size-1.5 rounded-full bg-[#e5ded7]" />
                <span className="mx-auto mr-8 h-3 w-2/5 rounded-full bg-black/5" />
              </div>

              <div className="flex items-center justify-between border-b border-black/10 px-4 py-3 text-[#22201e] sm:px-5">
                <span className="text-[8px] uppercase tracking-[0.16em]">Colección</span>
                <span className="text-sm font-semibold tracking-[0.28em] sm:text-base">LUMA</span>
                <div className="flex items-center gap-2.5">
                  <Heart size={13} strokeWidth={1.5} aria-hidden="true" />
                  <ShoppingBag size={13} strokeWidth={1.5} aria-hidden="true" />
                </div>
              </div>

              <div className="grid min-h-72 grid-cols-[44%_56%]">
                <div className="flex flex-col items-start justify-center bg-[#f4efe7] p-4 text-[#22201e] sm:p-6">
                  <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-[#776e65] sm:text-[8px]">Nueva colección</p>
                  <p className="mt-3 font-serif text-[clamp(1.45rem,3vw,2.15rem)] leading-[0.95] tracking-tight">
                    La forma de lo esencial
                  </p>
                  <p className="mt-3 text-[8px] leading-relaxed text-[#776e65] sm:text-[9px]">
                    Siluetas precisas y texturas que trascienden temporadas.
                  </p>
                  <span className="mt-5 border border-[#22201e] bg-[#22201e] px-3 py-2 text-[7px] font-semibold uppercase tracking-[0.12em] text-white">
                    Ver colección
                  </span>
                </div>
                <div className="relative min-h-72 overflow-hidden bg-[#c9bbaa]">
                  <img
                    className="absolute inset-0 size-full object-cover object-[56%_center]"
                    src={lumaEditorial}
                    alt="Vista editorial de la colección de indumentaria LUMA"
                  />
                  <span className="absolute bottom-3 right-3 text-[7px] font-medium uppercase tracking-[0.14em] text-white/90">
                    Edición 01—26
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-xs leading-5 text-[#62594F]">
              Vista conceptual basada en la interfaz de Luma.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default EcommerceProject
