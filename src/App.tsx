import { useState, useEffect, useCallback, useMemo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollProgress, useActiveSection } from './hooks'

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'education', 'certifications', 'contact']

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const progress = useScrollProgress()
  const activeSection = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 700)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const navItems = useMemo(() => [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certs' },
    { id: 'contact', label: 'Contact' },
  ], [])

  return (
    <>
      {/* Preloader */}
      <div className={`preloader ${loaded ? 'hidden' : ''}`}>
        <span className="preloader-text">IS.</span>
      </div>

      {/* Scroll progress */}
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <Navbar items={navItems} activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />

      {/* Back to top */}
      <button
        className={`back-to-top ${showTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  )
}
