import { useState, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useSmoothScroll from './hooks/useSmoothScroll.js'
import Preloader from './components/Preloader.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [ready, setReady] = useState(false)

  useSmoothScroll()

  useEffect(() => {
    if (ready) {
      // lay out scroll triggers once the preloader is gone
      const t = setTimeout(() => ScrollTrigger.refresh(), 250)
      return () => clearTimeout(t)
    }
  }, [ready])

  return (
    <div className="relative min-h-screen bg-[#05060f] text-white">
      <Preloader onDone={() => setReady(true)} />
      <CustomCursor />
      <div className="noise-overlay" />
      <Navbar ready={ready} />

      <main>
        <Hero ready={ready} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
