import { useNavigate } from 'react-router-dom'
import { butlerFacts } from '../data/butlerFacts'
import { useIsMobile } from '../hooks/useIsMobile'

const skillGroups = [
  { label: 'Languages', skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C', 'C++', 'C#'] },
  { label: 'Frameworks', skills: ['React', 'Next.js', 'Vite', 'Node.js', 'Express', 'Spring', 'Prisma', 'Ant Design'] },
  { label: 'Data & Infra', skills: ['MySQL', 'Redis', 'SQLite', 'REST API', 'AWS'] },
  { label: 'Tools', skills: ['Unity', 'Pygame', 'Git', 'Linux'] },
]

const expTypeLabel: Record<string, { label: string; color: string }> = {
  'NHN': { label: 'INTERN', color: '#4A90D9' },
  'Lunexio': { label: 'INTERN', color: '#4A90D9' },
  'Penn State University': { label: 'ACADEMIC', color: '#7C6A3A' },
  'Kim & Chang Law Firm': { label: 'INTERN', color: '#4A90D9' },
  'Republic of Korea Army': { label: 'MILITARY', color: '#94A3B8' },
  'CoconeM': { label: 'INTERN', color: '#4A90D9' },
}

export default function Report() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#FFFFFF',
      padding: isMobile ? '80px 20px 40px' : '80px 32px 40px',
    }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', width: '100%' }}>

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 24,
          flexWrap: 'wrap',
          gap: 12,
          borderBottom: '1px solid #E2E8F0',
          paddingBottom: 20,
        }}>
          <div>
            <h1 style={{ color: '#0F172A', fontSize: isMobile ? 22 : 28, fontWeight: 700, margin: 0, marginBottom: 6 }}>
              {butlerFacts.name}
            </h1>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="tel:8147532650" style={{ color: '#94A3B8', fontSize: 12, letterSpacing: 1 }}>
                814-753-2650
              </a>
              <a href={`mailto:${butlerFacts.email}`} style={{ color: '#94A3B8', fontSize: 12, letterSpacing: 1 }}>
                {butlerFacts.email}
              </a>
              <a href={butlerFacts.github} target="_blank" rel="noreferrer" style={{ color: '#4A90D9', fontSize: 12, letterSpacing: 1 }}>
                github ↗
              </a>
              <a href={butlerFacts.linkedin} target="_blank" rel="noreferrer" style={{ color: '#4A90D9', fontSize: 12, letterSpacing: 1 }}>
                linkedin ↗
              </a>
            </div>
          </div>
          <a
            href="/resume.pdf"
            download
            style={{
              backgroundColor: '#4A90D9',
              color: '#FFFFFF',
              borderRadius: 6,
              padding: '8px 20px',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
              whiteSpace: 'nowrap',
            }}
          >
            Download PDF ↓
          </a>
        </div>

        {/* Education */}
        <div style={{ marginBottom: 20 }}>
          <p style={{ color: '#94A3B8', fontSize: 11, letterSpacing: 2, margin: 0, marginBottom: 8 }}>
            EDUCATION
          </p>
          <div style={{
            border: '1px solid #E2E8F0',
            borderRadius: 6,
            padding: '14px 20px',
            backgroundColor: '#F8F9FA',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'flex-start' : 'center',
            flexDirection: isMobile ? 'column' : 'row',
            gap: 8,
          }}>
            <div>
              <p style={{ color: '#0F172A', fontSize: 15, fontWeight: 600, margin: 0 }}>
                Penn State University
              </p>
              <p style={{ color: '#64748B', fontSize: 13, margin: 0 }}>
                B.S. Computer Science & Mathematics · GPA 3.55/4.00 · Dean's List
              </p>
              <p style={{ color: '#94A3B8', fontSize: 11, margin: 0, marginTop: 2 }}>
                Data Structures · System Programming · Algorithms · Linear Algebra · Number Theory
              </p>
            </div>
            <p style={{ color: '#94A3B8', fontSize: 12, margin: 0, letterSpacing: 1, flexShrink: 0 }}>
              Expected May 2027
            </p>
          </div>
        </div>

        {/* Experience + Projects — single column on mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: 20,
          marginBottom: 20,
        }}>

          {/* Experience */}
          <div>
            <p style={{ color: '#94A3B8', fontSize: 11, letterSpacing: 2, margin: 0, marginBottom: 8 }}>
              EXPERIENCE
            </p>
            <div
              onClick={() => navigate('/estate')}
              style={{
                border: '1px solid #E2E8F0',
                borderRadius: 6,
                padding: '14px 20px',
                backgroundColor: '#F8F9FA',
                cursor: 'pointer',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#4A90D9')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#E2E8F0')}
            >
              {butlerFacts.experience.map((exp, i) => {
                const tag = expTypeLabel[exp.where]
                return (
                  <div key={i}>
                    {i > 0 && <div style={{ borderTop: '1px solid #E2E8F0', margin: '10px 0' }} />}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1 }}>
                        <p style={{ color: '#0F172A', fontSize: 13, fontWeight: 600, margin: 0 }}>
                          {exp.role}
                        </p>
                        <p style={{ color: '#64748B', fontSize: 12, margin: 0 }}>
                          {exp.where} · <span style={{ color: '#94A3B8' }}>{exp.when}</span>
                        </p>
                      </div>
                      {tag && (
                        <span style={{
                          fontSize: 10,
                          letterSpacing: 1,
                          color: tag.color,
                          border: `1px solid ${tag.color}`,
                          borderRadius: 3,
                          padding: '1px 6px',
                          marginLeft: 8,
                          flexShrink: 0,
                          opacity: 0.8,
                        }}>
                          {tag.label}
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
              <p style={{ color: '#4A90D9', fontSize: 11, margin: 0, marginTop: 14, letterSpacing: 1 }}>
                full story in the estate →
              </p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <p style={{ color: '#94A3B8', fontSize: 11, letterSpacing: 2, margin: 0, marginBottom: 8 }}>
              PROJECTS
            </p>
            <div
              onClick={() => navigate('/gallery')}
              style={{
                border: '1px solid #E2E8F0',
                borderRadius: 6,
                padding: '14px 20px',
                backgroundColor: '#F8F9FA',
                cursor: 'pointer',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#4A90D9')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#E2E8F0')}
            >
              {butlerFacts.projects.map((p, i) => (
                <div key={i}>
                  {i > 0 && <div style={{ borderTop: '1px solid #E2E8F0', margin: '10px 0' }} />}
                  <p style={{ color: '#0F172A', fontSize: 13, fontWeight: 600, margin: 0 }}>
                    {p.title}
                  </p>
                  <p style={{ color: '#64748B', fontSize: 12, margin: 0 }}>
                    {p.tech.join(', ')}
                  </p>
                </div>
              ))}
              <p style={{ color: '#4A90D9', fontSize: 11, margin: 0, marginTop: 14, letterSpacing: 1 }}>
                see all works in the gallery →
              </p>
            </div>
          </div>

        </div>

        {/* Skills + Languages */}
        <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: 16 }}>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? 20 : 32,
            alignItems: 'start',
          }}>

            {/* Grouped skills */}
            <div style={{ flex: 1 }}>
              <p style={{ color: '#94A3B8', fontSize: 11, letterSpacing: 2, marginBottom: 12 }}>
                SKILLS
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {skillGroups.map(group => (
                  <div key={group.label} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    flexDirection: isMobile ? 'column' : 'row',
                  }}>
                    <span style={{
                      color: '#94A3B8',
                      fontSize: 10,
                      letterSpacing: 1,
                      whiteSpace: 'nowrap',
                      minWidth: isMobile ? 'auto' : 120,
                      paddingTop: 2,
                    }}>
                      {group.label.toUpperCase()}
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                      {group.skills.map(skill => (
                        <span
                          key={skill}
                          style={{
                            border: '1px solid #E2E8F0',
                            borderRadius: 3,
                            padding: '1px 7px',
                            color: '#64748B',
                            fontSize: 11,
                            letterSpacing: 1,
                            backgroundColor: '#F8F9FA',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages & Cert */}
            <div style={{ minWidth: isMobile ? 'auto' : 180 }}>
              <p style={{ color: '#94A3B8', fontSize: 11, letterSpacing: 2, marginBottom: 12 }}>
                LANGUAGES & CERT
              </p>
              <p style={{ color: '#64748B', fontSize: 12, margin: 0, marginBottom: 4 }}>Korean · Fluent</p>
              <p style={{ color: '#64748B', fontSize: 12, margin: 0, marginBottom: 4 }}>English · Fluent</p>
              <p style={{ color: '#64748B', fontSize: 12, margin: 0, marginBottom: 10 }}>Japanese · Basic</p>
              <p style={{ color: '#94A3B8', fontSize: 11, margin: 0, letterSpacing: 1 }}>SQL DEVELOPER</p>
              <p style={{ color: '#94A3B8', fontSize: 11, margin: 0 }}>Korean Gov. Certified</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}