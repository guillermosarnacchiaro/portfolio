import Footer from '../../components/layout/Footer/Footer.jsx'
import Header from '../../components/layout/Header/Header.jsx'
import About from '../../components/sections/About/About.jsx'
import Contact from '../../components/sections/Contact/Contact.jsx'
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
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home
