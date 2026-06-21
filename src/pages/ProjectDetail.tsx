import { useParams, Link, useNavigate } from 'react-router-dom'
import { Button, Tag, Typography } from 'antd'
import { ArrowLeftOutlined, GithubOutlined, PlayCircleOutlined, FileTextOutlined } from '@ant-design/icons'
import { projects } from '../data/projects'

const { Title, Paragraph } = Typography

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)

  if (!project) {
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
        <p style={{ color: '#F1F5F9', fontSize: 18 }}>Project not found.</p>
        <Link to="/">
          <Button style={{ borderColor: '#4A90D9', color: '#4A90D9' }}>
            Back to Home
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0A0E17',
      padding: '120px 48px 80px',
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate('/#projects')}
          style={{
            backgroundColor: 'transparent',
            borderColor: '#1E2A3A',
            color: '#94A3B8',
            marginBottom: 32,
          }}
        >
          Back to Projects
        </Button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Title style={{ color: '#F1F5F9', margin: 0 }}>
            {project.title}
          </Title>
          <Tag color={project.status === 'complete' ? 'green' : 'gold'}>
            {project.status === 'complete' ? 'Complete' : 'In Progress'}
          </Tag>
        </div>

        <Paragraph style={{ color: '#94A3B8', fontSize: 16, marginTop: 16 }}>
          {project.description}
        </Paragraph>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
          {project.stack.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: 13,
                padding: '4px 14px',
                borderRadius: 14,
                border: '1px solid #1E2A3A',
                color: '#4A90D9',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              borderRadius: 12,
              marginTop: 32,
              border: '1px solid #1E2A3A',
            }}
          />
        )}

        <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
          {project.github && (
            <Button
              icon={<GithubOutlined />}
              href={project.github}
              target="_blank"
              size="large"
              style={{ borderColor: '#1E2A3A', color: '#F1F5F9', backgroundColor: 'transparent' }}
            >
              View on GitHub
            </Button>
          )}
          {project.demo && (
            <Button
              icon={<PlayCircleOutlined />}
              href={project.demo}
              target="_blank"
              size="large"
              type="primary"
              style={{ backgroundColor: '#4A90D9', borderColor: '#4A90D9' }}
            >
              Play Demo
            </Button>
          )}
          {project.readme && (
            <Button
              icon={<FileTextOutlined />}
              href={project.readme}
              target="_blank"
              size="large"
              style={{ borderColor: '#1E2A3A', color: '#F1F5F9', backgroundColor: 'transparent' }}
            >
              README
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}