import { Code2, Database, Server, Wrench } from 'lucide-react'
import Container from '../../ui/Container/Container.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'

const skillGroups = [
  { icon: Code2, title: 'Frontend', items: 'React · JavaScript · HTML · CSS · Tailwind', size: 'sm:col-span-4' },
  { icon: Server, title: 'Backend', items: 'Node.js · Express · APIs REST · JWT', size: 'sm:col-span-2' },
  { icon: Database, title: 'Datos', items: 'MongoDB · Mongoose · Modelado CRUD', size: 'sm:col-span-3' },
  { icon: Wrench, title: 'Herramientas', items: 'Git · GitHub · Vite · Postman · Vercel', size: 'sm:col-span-3' },
]

function About() {
  return (
    <section id="about" className="border-t border-border py-14 md:py-18 lg:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Sobre mí" title="Pienso el producto antes que el código." />
          <div className="mt-6 max-w-xl space-y-4 leading-[1.7] text-muted">
            <p>
              Soy desarrollador Full Stack orientado a la construcción de aplicaciones web completas. Trabajo tanto en la experiencia de usuario como en la lógica del servidor, la persistencia de datos y la organización del código.
            </p>
            <p>
              Me interesa crear productos claros, funcionales y mantenibles, aplicando lo aprendido en proyectos que resuelven necesidades concretas.
            </p>
          </div>
        </div>

        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-readable">Tecnologías</p>
          <div className="grid gap-3 sm:grid-cols-6">
            {skillGroups.map(({ icon: Icon, title, items, size }) => (
              <article className={`rounded-[18px] border border-border bg-surface p-5 transition-[transform,box-shadow] duration-200 ease-standard motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-card ${size}`} key={title}>
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-xl bg-primary/10 text-primary-readable">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted">{items}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
