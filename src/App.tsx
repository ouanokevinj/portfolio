import './index.css'
import Navbar from './components/navbar.tsx';
import Hero from './components/hero.tsx';
import AboutMe from './components/about.tsx';
import Skill from './components/skills.tsx';
import Projects from './components/project.tsx';
import Contact from './components/contact.tsx'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skill />
      <Projects />
      <Contact />
    </>
  )
}

export default App
