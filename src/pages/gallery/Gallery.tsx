import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../../data/projects'
import type { Project } from '../../data/projects'

type FilterCategory = 'all' | 'frontend' | 'fullstack' | 'backend' | 'game' | 'tools'

const filters: { label: string; value: FilterCategory }[] = [
  { label: 'all', value: 'all' },
  { label: 'frontend', value: 'frontend' },
  { label: 'full-stack', value: 'fullstack' },
  { label: 'backend', value: 'backend' },
  { label: 'game', value: 'game' },
  { label: 'tools', value: 'tools' },
]

const categoryColors: Record<string, string> = {
  frontend: '#4A90D9',
  fullstack: '#7C6A3A',
  backend: '#2D7A4F',
  game: '#9333EA',
  tools: '#D97706',
}

const categoryBg: Record<string, string> = {
  frontend: '#EFF6FF',
  fullstack: '#FEFCE8',
  backend: '#F0FDF4',
  game: '#FAF5FF',
  tools: '#FFF7ED',
}

function getFilteredCount(category: FilterCategory): number {
  if (category === 'all') return projects.length
  if (category === 'frontend') return projects.filter(p => p.category === 'frontend' || p.category === 'fullstack').length
  if (category === 'backend') return projects.filter(p => p.category === 'backend' || p.category === 'fullstack').length
  return projects.filter(p => p.category === category).length
}

export default function Gallery() {
  const [active, setActive] = useState<FilterCategory>('all')
  const navigate = useNavigate()

  const filtered = active === 'all'
    ? projects
    : projects.filter(p => {
        if (active === 'frontend') return p.category === 'frontend' || p.category === 'fullstack'
        if (active === 'backend') return p.category === 'backend' || p.category === 'fullstack'
        return p.category === active
      })

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#FFFFFF',
      padding: '100px 32px 64px',
    }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>

        <p style={{
          color: '#4A90D9',
          fontSize: 12,
          letterSpacing: 3,
          textTransform: 'uppercase',
          marginBottom: 8,
        }}>
          The Gallery
        </p>
        <h1 style={{
          color: '#0F172A',
          fontSize: 36,
          fontWeight: 700,
          margin: 0,
          marginBottom: 32,
        }}>
          Selected works
        </h1>

        {/* Filter bar */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              style={{
                backgroundColor: active === f.value ? '#4A90D9' : 'transparent',
                border: `1px solid ${active === f.value ? '#4A90D9' : '#E2E8F0'}`,
                borderRadius: 20,
                padding: '6px 16px',
                color: active === f.value ? '#FFFFFF' : '#64748B',
                fontSize: 12,
                cursor: 'pointer',
                letterSpacing: 1,
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              {f.label}
              <span style={{
                fontSize: 10,
                opacity: 0.7,
                backgroundColor: active === f.value ? '#FFFFFF22' : '#F1F5F9',
                borderRadius: 10,
                padding: '0px 5px',
                color: active === f.value ? '#FFFFFF' : '#94A3B8',
              }}>
                {getFilteredCount(f.value)}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {filtered.map(project => (
            <ProjectCard
              key={project.slug}
              project={project}
              onClick={() => navigate(`/gallery/${project.slug}`)}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  const tagColor = categoryColors[project.category] ?? '#64748B'
  const thumbBg = categoryBg[project.category] ?? '#F8F9FA'

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? '#4A90D9' : '#E2E8F0'}`,
        borderRadius: 8,
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: '#FFFFFF',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        boxShadow: hovered ? '0 4px 20px rgba(74,144,217,0.1)' : '0 1px 3px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Thumbnail */}
      <div style={{
        height: 160,
        backgroundColor: thumbBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <span style={{
            color: tagColor,
            fontSize: 11,
            letterSpacing: 2,
            opacity: 0.4,
            textTransform: 'uppercase',
          }}>
            {project.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 8,
        }}>
          <p style={{ color: '#0F172A', fontSize: 15, fontWeight: 600, margin: 0 }}>
            {project.title}
          </p>
          <span style={{
            color: tagColor,
            fontSize: 10,
            letterSpacing: 1,
            border: `1px solid ${tagColor}`,
            borderRadius: 3,
            padding: '1px 6px',
            marginLeft: 8,
            flexShrink: 0,
            opacity: 0.8,
          }}>
            {project.category}
          </span>
        </div>

        <p style={{
          color: '#64748B',
          fontSize: 13,
          lineHeight: 1.6,
          margin: 0,
          marginBottom: 16,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical' as any,
          overflow: 'hidden',
          flex: 1,
        }}>
          {project.blurb}
        </p>

        <div style={{ display: 'flex', gap: 16, marginTop: 'auto' }}>
          {project.screenshots && (
            <span style={{ color: '#4A90D9', fontSize: 12, letterSpacing: 1 }}>
              step inside →
            </span>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              style={{ color: '#4A90D9', fontSize: 12, letterSpacing: 1 }}
            >
              try it ↗
            </a>
          )}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              style={{ color: '#94A3B8', fontSize: 12, letterSpacing: 1 }}
            >
              code ↗
            </a>
          ) : (
            <span style={{ color: '#CBD5E1', fontSize: 12, letterSpacing: 1 }}>
              no public repo
            </span>
          )}
        </div>
      </div>
    </div>
  )
}