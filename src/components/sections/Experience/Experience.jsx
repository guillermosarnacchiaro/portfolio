import Container from '../../ui/Container/Container.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'

const milestones = [
  {
    date: '2025–2026',
    title: 'Formación en desarrollo web',
    description: 'Fundamentos frontend, backend y bases de datos aplicados en proyectos prácticos.',
  },
  {
    date: '2026',
    title: 'Desarrollo de WordWork',
    description: 'Aplicación full stack de comunicación laboral, desde la interfaz hasta el despliegue.',
  },
  {
    date: 'Actualidad',
    title: 'Construcción de productos propios',
    description: 'Profundizando arquitectura, experiencia de usuario y calidad de implementación.',
  },
]

function Experience() {
  return (
    <section id="experience" className="border-t border-border py-14 md:py-18 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <SectionHeading
          eyebrow="Experiencia y trayectoria"
          title="Aprender construyendo."
          description="Una evolución enfocada en transformar conocimientos técnicos en aplicaciones completas."
        />
        <ol className="relative border-l border-border">
          {milestones.map((milestone) => (
            <li className="relative pb-8 pl-8 last:pb-0" key={milestone.date}>
              <span className="absolute -left-[5px] top-2 size-2.5 rounded-full border-2 border-background bg-primary" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-readable">{milestone.date}</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{milestone.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted">{milestone.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

export default Experience
