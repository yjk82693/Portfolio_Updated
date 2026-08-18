import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const location = useLocation()

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinkStyle = (path: string) => ({
    color: location.pathname === path ? '#4A90D9' : '#94A3B8',
    fontSize: 13,
    letterSpacing: 1.5,
    textTransform: 'uppercase' as const,
  })

  const navLinks = (
    <>
      <Link to="/" style={navLinkStyle('/')} onClick={() => setDrawerOpen(false)}>
        Home
      </Link>
      <Link to="/estate" style={navLinkStyle('/estate')} onClick={() => setDrawerOpen(false)}>
        The Estate
      </Link>
      <Link to="/gallery" style={navLinkStyle('/gallery')} onClick={() => setDrawerOpen(false)}>
        Gallery
      </Link>
      <Link to="/report" style={navLinkStyle('/report')} onClick={() => setDrawerOpen(false)}>
        Report
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
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      backgroundColor: '#0F172A',
      borderBottom: '1px solid #1E2A3A',
    }}>
      <Link to="/" style={{
        fontSize: 16,
        fontWeight: 700,
        color: '#4A90D9',
        letterSpacing: 3,
        textTransform: 'uppercase',
      }}>
        YK
      </Link>

      {isMobile ? (
        <>
          <MenuOutlined
            style={{ color: '#94A3B8', fontSize: 20, cursor: 'pointer' }}
            onClick={() => setDrawerOpen(true)}
          />
          <Drawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            placement="right"
            styles={{
              body: {
                backgroundColor: '#0F172A',
                display: 'flex',
                flexDirection: 'column',
                gap: 28,
                paddingTop: 40,
              },
              header: {
                backgroundColor: '#0F172A',
                borderBottom: '1px solid #1E2A3A',
              },
            }}
            closeIcon={<span style={{ color: '#94A3B8' }}>✕</span>}
          >
            {navLinks}
          </Drawer>
        </>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {navLinks}
        </div>
      )}
    </nav>
  )
}