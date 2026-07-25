import { m, useReducedMotion } from 'framer-motion'
import { processSteps } from '../../../data/process.js'
import Container from '../../ui/Container/Container.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'

function Process() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="process" className="scroll-mt-16 bg-background py-14 md:py-18 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Proceso"
          title="De una necesidad a un producto funcional."
          description="Organizo cada proyecto en etapas claras para mantener el foco tanto en la experiencia de usuario como en la calidad técnica."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5 lg:mt-12">
          {processSteps.map((step) => (
            <m.article
              key={step.number}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="rounded-[18px] border border-border bg-surface p-5 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="text-sm font-bold text-primary-readable">{step.number}</span>
              <h3 className="mt-5 font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
            </m.article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Process
