import { m, useReducedMotion } from 'framer-motion'
import { wordworkFeatures } from '../../../data/wordwork.js'

function ProjectFeatures() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="mt-14" aria-labelledby="wordwork-features-title">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-readable">Funcionalidades</p>
        <h3 id="wordwork-features-title" className="mt-3 text-2xl font-semibold tracking-tight text-foreground">Una experiencia completa de mensajería</h3>
      </div>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {wordworkFeatures.map(({ title, description, icon: Icon }) => (
          <m.article
            key={title}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            className="rounded-[18px] border border-border bg-surface p-5 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary-readable">
              <Icon size={20} aria-hidden="true" />
            </div>
            <h4 className="mt-4 font-semibold text-foreground">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
          </m.article>
        ))}
      </div>
    </section>
  )
}

export default ProjectFeatures
