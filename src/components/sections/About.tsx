import { Typography, Row, Col } from 'antd'
import { useNavigate } from 'react-router-dom'
import { phases } from '../../data/phases'

const { Title, Paragraph } = Typography

export default function About() {
  const navigate = useNavigate()

  return (
    <section
      style={{
        backgroundColor: '#111827',
        minHeight: '100vh',
        padding: '88px 48px 48px',
      }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <p style={{ color: '#4A90D9', fontSize: 13, letterSpacing: 2, marginBottom: 4 }}>
          GET TO KNOW ME
        </p>
        <Title level={2} style={{ color: '#F1F5F9', marginTop: 0, marginBottom: 20 }}>
          About Me
        </Title>

        <Paragraph style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.8, maxWidth: 800 }}>
          I'm a Computer Science and Mathematics student at Penn State, expecting to graduate
          in May 2027. My path into tech started with a love for games — growing up inspired by
          the creativity of Disney and Nintendo pushed me to pursue computer science as a way to
          build things that bring people joy.
        </Paragraph>

        <Paragraph style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.8, maxWidth: 800 }}>
          Today I work across full-stack web development and game development. I'm currently
          a Learning Assistant for CMPSC 204 at Penn State, and I work with Lunexio, a Korean
          industrial AI company focused on manufacturing and engineering solutions. I've also
          interned at CoconeM in Seoul and Kim & Chang, and served in the Republic of Korea Army.
        </Paragraph>

        <Paragraph style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.8, maxWidth: 800 }}>
          My long-term goal is to build a company that blends creativity and technology the way
          Disney and Nintendo have — using AI to make creativity more accessible and help people
          bring their own stories and ideas to life.
        </Paragraph>

        {/* Story of My Life section */}
        <div style={{ marginTop: 56 }}>
          <p style={{ color: '#4A90D9', fontSize: 13, letterSpacing: 2, marginBottom: 4 }}>
            MY JOURNEY
          </p>
          <Title level={3} style={{ color: '#F1F5F9', marginTop: 0, marginBottom: 24 }}>
            Story of My Life
          </Title>

          <Row gutter={[20, 20]}>
            {phases.map((phase) => (
              <Col key={phase.id} xs={24} sm={12} lg={6}>
                <div
                  onClick={() => navigate(`/about/${phase.id}`)}
                  style={{
                    border: '1px solid #1E2A3A',
                    borderRadius: 12,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    backgroundColor: '#0A0E17',
                    height: '100%',
                  }}
                >
                  <div style={{
                    height: 140,
                    backgroundColor: '#111827',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {phase.image ? (
                      <img
                        src={phase.image}
                        alt={phase.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <span style={{ color: '#4A90D9', fontSize: 32, fontWeight: 700 }}>
                        {phase.number}
                      </span>
                    )}
                  </div>
                  <div style={{ padding: 16 }}>
                    <p style={{ color: '#F1F5F9', fontSize: 15, fontWeight: 600, margin: 0 }}>
                      Phase {phase.number}: {phase.title}
                    </p>
                    <p style={{ color: '#94A3B8', fontSize: 13, marginTop: 6, marginBottom: 0 }}>
                      {phase.subtitle}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  )
}