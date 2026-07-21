import { Atom, Database, Layers3, Server } from 'lucide-react'
import { m, useReducedMotion } from 'framer-motion'

const technologies = [
  {
    name: 'React',
    area: 'Frontend',
    icon: Atom,
    duration: 4.8,
    position: 'lg:left-6 lg:top-0',
  },
  {
    name: 'Full Stack',
    area: 'Frontend · Backend · Database',
    icon: Layers3,
    duration: 5.6,
    featured: true,
    position: 'lg:left-[148px] lg:top-[104px]',
  },
  {
    name: 'Node.js',
    area: 'Backend',
    icon: Server,
    duration: 5.2,
    position: 'lg:right-0 lg:top-[216px]',
  },
  {
    name: 'MongoDB',
    area: 'Database',
    icon: Database,
    duration: 5.9,
    position: 'lg:bottom-0 lg:left-3',
  },
]

function HeroTechFlow() {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className="relative min-w-0 lg:h-[344px] lg:w-full lg:max-w-[480px] lg:-translate-y-8 lg:justify-self-end"
      aria-label="Tecnologías que forman mi perfil full stack"
    >
      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible lg:block lg:p-0">
        {technologies.map(({ name, area, icon: Icon, duration, featured, position }) => (
          <m.article
            className={`relative z-10 flex h-24 w-40 shrink-0 snap-start items-center gap-3 rounded-[18px] border border-border bg-surface/75 p-4 shadow-card-hover backdrop-blur-xl transition-colors duration-200 sm:w-auto ${position} lg:absolute lg:w-44 ${featured ? 'lg:h-26 lg:w-48' : ''}`}
            key={name}
            animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
            transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className={`grid shrink-0 place-items-center rounded-xl bg-primary/10 text-primary-readable ${featured ? 'size-11' : 'size-10'}`}>
              <Icon size={featured ? 24 : 22} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground">{name}</p>
              <p className="mt-1 text-xs leading-4 text-muted">{area}</p>
            </div>
          </m.article>
        ))}
      </div>
    </div>
  )
}

export default HeroTechFlow
