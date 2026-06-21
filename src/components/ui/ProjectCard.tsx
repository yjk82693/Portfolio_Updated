import { Card, Tag } from 'antd'
import { useNavigate } from 'react-router-dom'
import type { Project } from '../../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  const navigate = useNavigate()

  return (
    <Card
      hoverable
      onClick={() => navigate(`/projects/${project.id}`)}
      style={{
        backgroundColor: '#0A0E17',
        borderColor: '#1E2A3A',
        borderRadius: 12,
        height: '100%',
        cursor: 'pointer',
      }}
      styles={{ body: { padding: 18 } }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h3 style={{ color: '#F1F5F9', fontSize: 17, fontWeight: 600, margin: 0 }}>
          {project.title}
        </h3>
        <Tag
          color={project.status === 'complete' ? 'green' : 'gold'}
          style={{ marginLeft: 8 }}
        >
          {project.status === 'complete' ? 'Complete' : 'In Progress'}
        </Tag>
      </div>

      <p style={{ color: '#94A3B8', fontSize: 13.5, marginTop: 10, minHeight: 54, lineHeight: 1.5 }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
        {project.stack.map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: 11.5,
              padding: '2px 9px',
              borderRadius: 10,
              border: '1px solid #1E2A3A',
              color: '#4A90D9',
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </Card>
  )
}