import { useParams, useNavigate } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { phases } from '../data/phases'

const { Title, Paragraph } = Typography

export default function PhaseDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const phase = phases.find((p) => p.id === id)

  if (!phase) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#0A0E17',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
      }}>
        <p style={{ color: '#F1F5F9', fontSize: 18 }}>Phase not found.</p>
        <Button onClick={() => navigate('/about')} style={{ borderColor: '#4A90D9', color: '#4A90D9' }}>
          Back to About
        </Button>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0A0E17',
      padding: '88px 48px 48px',
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate('/about')}
          style={{
            backgroundColor: 'transparent',
            borderColor: '#1E2A3A',
            color: '#94A3B8',
            marginBottom: 24,
          }}
        >
          Back to About
        </Button>

        <p style={{ color: '#4A90D9', fontSize: 13, letterSpacing: 2, marginBottom: 4 }}>
          PHASE {phase.number}
        </p>
        <Title level={2} style={{ color: '#F1F5F9', marginTop: 0, marginBottom: 8 }}>
          {phase.title}
        </Title>
        <Paragraph style={{ color: '#94A3B8', fontSize: 16, marginBottom: 32 }}>
          {phase.subtitle}
        </Paragraph>

        {phase.image && (
          <img
            src={phase.image}
            alt={phase.title}
            style={{ width: '100%', borderRadius: 12, marginBottom: 32, border: '1px solid #1E2A3A' }}
          />
        )}

        {phase.content.map((paragraph, i) => (
          <Paragraph key={i} style={{ color: '#94A3B8', fontSize: 16, lineHeight: 1.8 }}>
            {paragraph}
          </Paragraph>
        ))}
      </div>
    </div>
  )
}