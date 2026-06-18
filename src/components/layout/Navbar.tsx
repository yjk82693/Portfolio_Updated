import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from 'antd'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 48px',
      backgroundColor: scrolled ? '#111827' : 'transparent',
      borderBottom: scrolled ? '1px solid #1E2A3A' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <Link to="/" style={{ fontSize: 20, fontWeight: 700, color: '#4A90D9' }}>
        YK
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        {location.pathname === '/' && (
          <>
            <span
              onClick={() => scrollTo('projects')}
              style={{ color: '#94A3B8', cursor: 'pointer', fontSize: 15 }}
            >
              Projects
            </span>
            <span
              onClick={() => scrollTo('about')}
              style={{ color: '#94A3B8', cursor: 'pointer', fontSize: 15 }}
            >
              About
            </span>
            <span
              onClick={() => scrollTo('contact')}
              style={{ color: '#94A3B8', cursor: 'pointer', fontSize: 15 }}
            >
              Contact
            </span>
          </>
        )}
        <Link to="/resume">
          <Button
            type="primary"
            style={{ backgroundColor: '#4A90D9', borderColor: '#4A90D9' }}
          >
            Resume
          </Button>
        </Link>
      </div>
    </nav>
  )
}