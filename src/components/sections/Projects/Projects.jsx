import { projects } from '../../../data/projects.js'
import FeaturedProject from '../../projects/FeaturedProject/FeaturedProject.jsx'
import Container from '../../ui/Container/Container.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'

function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 border-y border-border bg-gradient-to-b from-surface-hover/55 via-background to-background py-14 md:py-18 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Proyecto destacado"
          title="Una aplicación construida de extremo a extremo."
          description="Desde la experiencia de usuario hasta la API y la persistencia de datos, WordWork reúne las decisiones principales de un producto web completo."
        />
        <div className="mt-10 lg:mt-12">
          <FeaturedProject project={projects[0]} />
        </div>
      </Container>
    </section>
  )
}

export default Projects
