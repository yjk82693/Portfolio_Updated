import { Button, Typography } from 'antd'
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0A0E17',
      padding: '0 48px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 1100,
        width: '100%',
        gap: 64,
      }}>

        {/* Left: Text */}
        <div style={{ flex: 1 }}>
          <p style={{ color: '#4A90D9', fontSize: 16, marginBottom: 12, letterSpacing: 2 }}>
            HELLO, I'M
          </p>
          <Title style={{ color: '#F1F5F9', fontSize: 56, margin: 0, lineHeight: 1.1 }}>
            Yoojun Kim
          </Title>
          <Title level={3} style={{ color: '#94A3B8', fontWeight: 400, marginTop: 12 }}>
            Full-Stack Developer & Game Developer
          </Title>
          <Paragraph style={{ color: '#94A3B8', fontSize: 16, maxWidth: 480, marginTop: 16 }}>
            CS + Math student at Penn State. I build full-stack web applications
            and games — driven by the creativity of Disney and Nintendo.
          </Paragraph>

          <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
            <Button
              type="primary"
              size="large"
              style={{ backgroundColor: '#4A90D9', borderColor: '#4A90D9' }}
              onClick={() => scrollTo('projects')}
            >
              View Projects
            </Button>
            <Button
              size="large"
              ghost
              style={{ borderColor: '#4A90D9', color: '#4A90D9' }}
              onClick={() => scrollTo('contact')}
            >
              Contact Me
            </Button>
          </div>

          <div style={{ display: 'flex', gap: 24, marginTop: 32 }}>
            <a href="https://github.com/yjk82693" target="_blank" rel="noreferrer">
              <GithubOutlined style={{ fontSize: 24, color: '#94A3B8' }} />
            </a>
            <a href="https://linkedin.com/in/yoojunkim" target="_blank" rel="noreferrer">
              <LinkedinOutlined style={{ fontSize: 24, color: '#94A3B8' }} />
            </a>
          </div>
        </div>

        {/* Right: Logo */}
        <div style={{
          width: 320,
          height: 320,
          borderRadius: '50%',
          overflow: 'hidden',
          border: '2px solid #1E2A3A',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#111827',
        }}>
          <img
            src="/logo.png"
            alt="Yoojun Kim"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

      </div>
    </section>
  )
}