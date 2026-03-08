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
