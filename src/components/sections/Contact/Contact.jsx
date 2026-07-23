import { BriefcaseBusiness, Code2, Download, Mail, MapPin } from 'lucide-react'
import Button from '../../ui/Button/Button.jsx'
import Container from '../../ui/Container/Container.jsx'

function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-background py-14 md:py-18 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-card border border-border bg-surface p-8 shadow-card sm:p-12 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-readable">Contacto</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1.5 text-sm font-medium text-success-readable">
              <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
              Disponible para nuevas oportunidades
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">¿Construimos algo juntos?</h2>
            <p className="mt-4 leading-7 text-muted">
              Estoy disponible para oportunidades laborales, proyectos freelance y colaboraciones donde pueda aportar y continuar creciendo como desarrollador.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-subtle">
              <p className="flex items-center gap-2"><MapPin size={16} aria-hidden="true" /> CABA, Argentina</p>
              <p>Remoto, híbrido o presencial</p>
              <p>Disponible para entrevistas</p>
            </div>
          </div>
          <div className="relative z-10 mt-8 flex max-w-lg flex-wrap gap-3 lg:mt-0 lg:justify-end">
            <Button as="a" href="mailto:guillermo.sarnacchiaro@gmail.com">
              <Mail size={17} aria-hidden="true" /> Enviar email
            </Button>
            <Button as="a" variant="secondary" href="https://www.linkedin.com/in/guillermo-matias-sarnacchiaro-a66365203" target="_blank" rel="noreferrer" aria-label="Abrir LinkedIn en una pestaña nueva">
              <BriefcaseBusiness size={17} aria-hidden="true" /> LinkedIn
            </Button>
            <Button as="a" variant="ghost" href="https://github.com/guillermosarnacchiaro" target="_blank" rel="noreferrer" aria-label="Abrir GitHub en una pestaña nueva">
              <Code2 size={17} aria-hidden="true" /> GitHub
            </Button>
            <Button as="a" variant="secondary" href="/cv/guillermo-sarnacchiaro-cv.pdf" download>
              <Download size={17} aria-hidden="true" /> Descargar CV
            </Button>
          </div>
          <div className="pointer-events-none absolute -right-16 -top-24 size-64 rounded-full bg-primary/8 blur-3xl" />
        </div>
      </Container>
    </section>
  )
}

export default Contact
