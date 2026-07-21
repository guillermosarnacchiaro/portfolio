import Container from '../ui/Container/Container.jsx'
import SectionHeading from '../ui/SectionHeading/SectionHeading.jsx'

function SectionPlaceholder({ id, eyebrow, title, description }) {
  return (
    <section id={id} className="border-t border-border py-20 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
      </Container>
    </section>
  )
}

export default SectionPlaceholder
