import { projects } from '../../../data/projects.js'
import EcommerceProject from '../../projects/EcommerceProject/EcommerceProject.jsx'
import FeaturedProject from '../../projects/FeaturedProject/FeaturedProject.jsx'
import Container from '../../ui/Container/Container.jsx'
import SectionHeading from '../../ui/SectionHeading/SectionHeading.jsx'

function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 border-y border-border bg-gradient-to-b from-surface-hover/55 via-background to-background py-14 md:py-18 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Proyectos destacados"
          title="Productos digitales construidos de extremo a extremo."
          description="Aplicaciones que combinan interfaces cuidadas, experiencias responsive y decisiones técnicas orientadas a cada producto."
        />
        <div className="mt-10 grid gap-10 lg:mt-12 lg:gap-14">
          <FeaturedProject project={projects[0]} />
          <EcommerceProject project={projects[1]} />
        </div>
      </Container>
    </section>
  )
}

export default Projects
