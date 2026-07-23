import { ArrowUpRight, Check, Code2, Star } from 'lucide-react'
import { m, useReducedMotion } from 'framer-motion'
import Badge from '../../ui/Badge/Badge.jsx'
import Button from '../../ui/Button/Button.jsx'
import WordWorkPreview from '../WordWorkPreview/WordWorkPreview.jsx'
import ProjectArchitecture from '../ProjectArchitecture/ProjectArchitecture.jsx'
import ProjectFeatures from '../ProjectFeatures/ProjectFeatures.jsx'
import ProjectGallery from '../ProjectGallery/ProjectGallery.jsx'

function FeaturedProject({ project }) {
  const reduceMotion = useReducedMotion()

  return (
    <div>
      <article className="overflow-hidden rounded-card border border-border bg-surface shadow-card">
      <div className="grid items-stretch lg:grid-cols-[2fr_3fr]">
        <div className="flex flex-col p-5 min-[380px]:p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="gap-1.5 text-foreground">
              <Star size={12} className="text-warning" fill="currentColor" aria-hidden="true" />
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
            <Button as="a" className="w-full sm:w-auto" href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`Ver ${project.name}, abre en una pestaña nueva`}>
              Ver proyecto <ArrowUpRight size={17} aria-hidden="true" />
            </Button>
            <Button as="a" className="w-full sm:w-auto" variant="secondary" href={project.frontendUrl} target="_blank" rel="noreferrer" aria-label="Ver código frontend en GitHub, abre en una pestaña nueva">
              <Code2 size={17} aria-hidden="true" /> Código frontend
            </Button>
            <Button as="a" className="w-full sm:w-auto" variant="ghost" href={project.backendUrl} target="_blank" rel="noreferrer" aria-label="Ver código backend en GitHub, abre en una pestaña nueva">
              Backend
            </Button>
          </div>
        </div>

        <div className="overflow-hidden border-t border-border bg-gradient-to-br from-primary/8 via-secondary/5 to-transparent p-3 min-[380px]:p-5 sm:p-8 lg:border-t-0 lg:border-l lg:p-10">
          <m.div
            className="origin-center drop-shadow-[0_28px_40px_rgba(37,99,235,0.10)]"
            initial={reduceMotion ? undefined : { rotate: -2 }}
            animate={reduceMotion ? undefined : { y: [0, -4, 0], rotate: -2 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <WordWorkPreview />
          </m.div>
          <p className="mt-4 text-center text-xs leading-5 text-subtle">
            Vista conceptual basada en la interfaz de WordWork.
          </p>
        </div>
      </div>
      </article>
      <ProjectGallery />
      <ProjectFeatures />
      <ProjectArchitecture />
    </div>
  )
}

export default FeaturedProject
