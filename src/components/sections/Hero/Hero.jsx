import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Badge from '../../ui/Badge/Badge.jsx'
import Button from '../../ui/Button/Button.jsx'
import Container from '../../ui/Container/Container.jsx'
import HeroTechFlow from './HeroTechFlow.jsx'

function Hero() {
  return (
    <section id="top" className="hero-background overflow-hidden pt-20 pb-20 sm:pt-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(440px,0.75fr)] lg:gap-12">
        <div className="max-w-[740px]">
          <Badge className="mb-6 gap-2">
            <span className="availability-dot size-2 rounded-full bg-success" aria-hidden="true" />
            Disponible para nuevos proyectos
          </Badge>
          <div className="mb-4">
            <p className="font-medium text-primary-readable">React · Node.js · MongoDB</p>
            <p className="mt-1 text-sm text-muted">Full Stack Web Developer · CABA</p>
          </div>
          <h1 className="text-4xl leading-[1.05] font-bold tracking-[-0.045em] text-foreground min-[400px]:text-5xl sm:text-6xl">
            Construyo experiencias web pensadas como{' '}
            <span className="animated-gradient-text bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              productos
            </span>{' '}
            reales.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-[1.7] text-muted sm:text-xl">
            Desarrollo aplicaciones web modernas, accesibles y escalables,
            cuidando tanto la experiencia de usuario como la arquitectura técnica.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button as="a" className="w-full sm:w-auto" href="#projects">
              Ver proyectos <ArrowUpRight size={17} aria-hidden="true" />
            </Button>
            <Button as="a" className="w-full sm:w-auto" variant="secondary" href="#contact">
              Contactarme <ArrowRight size={17} aria-hidden="true" />
            </Button>
          </div>
        </div>

        <HeroTechFlow />
      </Container>
    </section>
  )
}

export default Hero
