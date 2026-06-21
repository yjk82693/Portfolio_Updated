import { Typography, Button } from 'antd'
import { MailOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

export default function Contact() {
  return (
    <section
      style={{
        backgroundColor: '#0A0E17',
        minHeight: '100vh',
        padding: '88px 48px 48px',
      }}
    >
      <div style={{
        maxWidth: 700,
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <p style={{ color: '#4A90D9', fontSize: 13, letterSpacing: 2, marginBottom: 4 }}>
          LET'S CONNECT
        </p>
        <Title level={2} style={{ color: '#F1F5F9', marginTop: 0, marginBottom: 16 }}>
          Get In Touch
        </Title>
        <Paragraph style={{ color: '#94A3B8', fontSize: 16, marginBottom: 32 }}>
          I'm currently looking for internship opportunities. Feel free to reach out
          if you'd like to connect, collaborate, or just talk about tech and games.
        </Paragraph>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <Button
            icon={<MailOutlined />}
            href="mailto:yjk5965@psu.edu"
            size="large"
            type="primary"
            style={{ backgroundColor: '#4A90D9', borderColor: '#4A90D9' }}
          >
            Email Me
          </Button>
          <Button
            icon={<GithubOutlined />}
            href="https://github.com/yjk82693"
            target="_blank"
            size="large"
            style={{ borderColor: '#1E2A3A', color: '#F1F5F9', backgroundColor: 'transparent' }}
          >
            GitHub
          </Button>
          <Button
            icon={<LinkedinOutlined />}
            href="https://linkedin.com/in/yoojunkim"
            target="_blank"
            size="large"
            style={{ borderColor: '#1E2A3A', color: '#F1F5F9', backgroundColor: 'transparent' }}
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  )
}