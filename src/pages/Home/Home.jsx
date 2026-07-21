import Footer from '../../components/layout/Footer/Footer.jsx'
import Header from '../../components/layout/Header/Header.jsx'
import About from '../../components/sections/About/About.jsx'
import Certificates from '../../components/sections/Certificates/Certificates.jsx'
import Contact from '../../components/sections/Contact/Contact.jsx'
import Experience from '../../components/sections/Experience/Experience.jsx'
import Hero from '../../components/sections/Hero/Hero.jsx'
import Projects from '../../components/sections/Projects/Projects.jsx'

function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido principal</a>
      <Header />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home
