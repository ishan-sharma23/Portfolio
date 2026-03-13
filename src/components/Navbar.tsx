import { useState, useEffect, useCallback } from 'react'

interface NavItem {
  id: string
  label: string
}

interface NavbarProps {
  items: NavItem[]
  activeSection: string
}

export default function Navbar({ items, activeSection }: NavbarProps) {
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let lastScroll = 0
    const onScroll = () => {
      const current = window.scrollY
      setHidden(current > lastScroll && current > 80)
      lastScroll = current
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen)
    return () => document.body.classList.remove('nav-open')
  }, [menuOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <nav className={hidden ? 'nav-hidden' : ''}>
      <a href="#hero" className="nav-logo" onClick={closeMenu}>
        Ishan<span>.</span>
      </a>

      <button
        className={`nav-toggle ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span /><span /><span />
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {items.map(item => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
