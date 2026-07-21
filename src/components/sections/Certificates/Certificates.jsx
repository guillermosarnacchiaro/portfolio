import { GraduationCap } from 'lucide-react'
import Container from '../../ui/Container/Container.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'

function Certificates() {
  return (
    <section id="certificates" className="border-t border-border py-14 md:py-18 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Formación" title="Una base técnica aplicada." />
        <article className="mt-10 max-w-2xl rounded-card border border-border bg-surface p-6 shadow-card sm:p-8">
          <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary-readable">
            <GraduationCap size={22} aria-hidden="true" />
          </span>
          <p className="mt-6 text-sm font-medium text-primary-readable">2025–2026 · Universidad Tecnológica Nacional</p>
          <h3 className="mt-2 text-xl font-semibold text-foreground">Diplomatura en Desarrollo Web</h3>
          <p className="mt-3 leading-7 text-muted">
            Formación full stack con React, Express y MongoDB. WordWork fue desarrollado como trabajo integrador final.
          </p>
        </article>
      </Container>
    </section>
  )
}

export default Certificates
