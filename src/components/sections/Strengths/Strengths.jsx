import { Check } from 'lucide-react'
import { strengths } from '../../../data/strengths.js'
import Container from '../../ui/Container/Container.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'

function Strengths() {
  return (
    <section id="profile" className="scroll-mt-16 border-y border-border bg-surface-hover/45 py-14 md:py-18 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <SectionHeading
          eyebrow="Perfil"
          title="Una mirada completa sobre el desarrollo web."
          description="Mi formación full stack me permite entender cómo se relacionan la interfaz, la lógica del servidor y los datos dentro de un mismo producto."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((strength) => (
            <article key={strength.title} className="rounded-[18px] border border-border bg-surface p-5 shadow-card">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-readable">
                  <Check size={14} strokeWidth={3} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{strength.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{strength.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Strengths
