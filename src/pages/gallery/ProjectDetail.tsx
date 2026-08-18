import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../../data/projects'
import ImageCarousel from '../../components/ui/ImageCarousel'

const categoryColors: Record<string, string> = {
  frontend: '#4A90D9',
  fullstack: '#7C6A3A',
  backend: '#2D7A4F',
  game: '#9333EA',
  tools: '#D97706',
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <p style={{ color: '#0F172A' }}>Project not found.</p>
      </div>
    )
  }

  const screenshots = project.screenshots ?? []
  const tagColor = categoryColors[project.category] ?? '#64748B'
  const prevProject = project.evolvedFrom ? projects.find(p => p.slug === project.evolvedFrom) : null
  const nextProject = project.evolvedInto ? projects.find(p => p.slug === project.evolvedInto) : null

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#FFFFFF',
      padding: '100px 32px 64px',
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>

        {/* Back */}
        <button
          onClick={() => navigate('/gallery')}
          style={{
            background: 'none', border: 'none',
            color: '#94A3B8', fontSize: 13,
            cursor: 'pointer', marginBottom: 32,
            padding: 0, letterSpacing: 1,
          }}
        >
          ← back to the gallery
        </button>

        {/* Title + category */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 8,
        }}>
          <h1 style={{ color: '#0F172A', fontSize: 32, fontWeight: 700, margin: 0 }}>
            {project.title}
          </h1>
          <span style={{
            color: tagColor,
            fontSize: 11,
            letterSpacing: 2,
            border: `1px solid ${tagColor}`,
            borderRadius: 3,
            padding: '2px 8px',
            opacity: 0.8,
          }}>
            {project.category.toUpperCase()}
          </span>
        </div>

        {/* Description */}
        <p style={{ color: '#64748B', fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
          {project.description}
        </p>

        {/* Links */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 40 }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#4A90D9',
                border: '1px solid #4A90D9',
                borderRadius: 6,
                padding: '8px 20px',
                fontSize: 13,
                letterSpacing: 1,
              }}
            >
              code ↗
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: '#4A90D9',
                color: '#FFFFFF',
                borderRadius: 6,
                padding: '8px 20px',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 1,
              }}
            >
              try it ↗
            </a>
          )}
        </div>

        {/* Screenshot area */}
        {project.slug === 'portfolio-v2' ? (
          <div style={{
            width: '100%',
            height: 320,
            backgroundColor: '#0F0D0A',
            border: '1px solid #2a2318',
            borderRadius: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            marginBottom: 40,
          }}>
            <img
              src="/butler/happy.png"
              alt="Sharvis"
              style={{ width: 220, height: 220, objectFit: 'contain' }}
            />
            <p style={{
              color: '#d4b87a',
              fontSize: 14,
              letterSpacing: 0.5,
              margin: 0,
              textAlign: 'center',
              maxWidth: 320,
              lineHeight: 1.6,
            }}>
              You're already viewing this one, sir.<br />
              <span style={{ color: '#4a3f2f', fontSize: 12 }}>
                Look around — Sharvis is at your service.
              </span>
            </p>
          </div>
        ) : (
          <div style={{ marginBottom: 40 }}>
            <ImageCarousel
              screenshots={screenshots}
              height={320}
              category={project.category}
            />
          </div>
        )}

        {/* Lineage */}
        {(prevProject || nextProject) && (
          <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: 24 }}>
            <p style={{ color: '#94A3B8', fontSize: 11, letterSpacing: 2, marginBottom: 16 }}>
              LINEAGE
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              {prevProject && (
                <>
                  <div
                    onClick={() => navigate(`/gallery/${prevProject.slug}`)}
                    style={{
                      border: '1px solid #E2E8F0',
                      borderRadius: 6,
                      padding: '10px 16px',
                      cursor: 'pointer',
                      backgroundColor: '#F8F9FA',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = '#4A90D9')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = '#E2E8F0')}
                  >
                    <p style={{ color: '#94A3B8', fontSize: 11, letterSpacing: 1, margin: 0, marginBottom: 2 }}>
                      ORIGIN
                    </p>
                    <p style={{ color: '#0F172A', fontSize: 14, fontWeight: 600, margin: 0 }}>
                      {prevProject.title}
                    </p>
                  </div>
                  <span style={{ color: '#4A90D9', fontSize: 20 }}>→</span>
                </>
              )}

              <div style={{
                border: '1px solid #4A90D9',
                borderRadius: 6,
                padding: '10px 16px',
                backgroundColor: '#EFF6FF',
              }}>
                <p style={{ color: '#4A90D9', fontSize: 11, letterSpacing: 1, margin: 0, marginBottom: 2 }}>
                  CURRENT
                </p>
                <p style={{ color: '#0F172A', fontSize: 14, fontWeight: 600, margin: 0 }}>
                  {project.title}
                </p>
              </div>

              {nextProject && (
                <>
                  <span style={{ color: '#4A90D9', fontSize: 20 }}>→</span>
                  <div
                    onClick={() => navigate(`/gallery/${nextProject.slug}`)}
                    style={{
                      border: '1px solid #E2E8F0',
                      borderRadius: 6,
                      padding: '10px 16px',
                      cursor: 'pointer',
                      backgroundColor: '#F8F9FA',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = '#4A90D9')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = '#E2E8F0')}
                  >
                    <p style={{ color: '#94A3B8', fontSize: 11, letterSpacing: 1, margin: 0, marginBottom: 2 }}>
                      EVOLVED INTO
                    </p>
                    <p style={{ color: '#0F172A', fontSize: 14, fontWeight: 600, margin: 0 }}>
                      {nextProject.title}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}