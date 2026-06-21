import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const navLinkStyle = (path: string) => ({
    color: location.pathname === path ? '#4A90D9' : '#94A3B8',
    fontSize: 15,
  })

  const navLinks = (
    <>
      <Link to="/projects" style={navLinkStyle('/projects')} onClick={() => setDrawerOpen(false)}>Projects</Link>
      <Link to="/about" style={navLinkStyle('/about')} onClick={() => setDrawerOpen(false)}>About</Link>
      <Link to="/contact" style={navLinkStyle('/contact')} onClick={() => setDrawerOpen(false)}>Contact</Link>
      <Link to="/resume" onClick={() => setDrawerOpen(false)}>
        <Button type="primary" style={{ backgroundColor: '#4A90D9', borderColor: '#4A90D9' }}>
          Resume
        </Button>
      </Link>
    </>
  )

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
      padding: '0 24px',
      backgroundColor: scrolled || location.pathname !== '/' ? '#111827' : 'transparent',
      borderBottom: scrolled || location.pathname !== '/' ? '1px solid #1E2A3A' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <Link to="/" style={{ fontSize: 20, fontWeight: 700, color: '#4A90D9' }}>
        YK
      </Link>

      {isMobile ? (
        <>
          <MenuOutlined
            style={{ color: '#F1F5F9', fontSize: 22, cursor: 'pointer' }}
            onClick={() => setDrawerOpen(true)}
          />
          <Drawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            placement="right"
            styles={{
              body: { backgroundColor: '#111827', display: 'flex', flexDirection: 'column', gap: 24, paddingTop: 32 },
              header: { backgroundColor: '#111827', borderBottom: '1px solid #1E2A3A' },
            }}
            closeIcon={<span style={{ color: '#F1F5F9' }}>✕</span>}
          >
            {navLinks}
          </Drawer>
        </>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {navLinks}
        </div>
      )}
    </nav>
  )
}