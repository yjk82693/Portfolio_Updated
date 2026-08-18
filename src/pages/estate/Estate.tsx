import { useNavigate } from 'react-router-dom'
import { phases } from '../../data/phases'
import { useIsMobile } from '../../hooks/useIsMobile'

function readingTime(slides: number): string {
  const minutes = Math.ceil(slides * 0.75)
  return `~${minutes} min read`
}

export default function Estate() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#FFFFFF',
      padding: isMobile ? '80px 16px 48px' : '100px 32px 64px',
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>

        <p style={{
          color: '#4A90D9',
          fontSize: 12,
          letterSpacing: 3,
          textTransform: 'uppercase',
          marginBottom: 8,
        }}>
          The Estate
        </p>
        <h1 style={{
          color: '#0F172A',
          fontSize: isMobile ? 28 : 36,
          fontWeight: 700,
          margin: 0,
          marginBottom: 32,
        }}>
          A tour of the house
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {phases.map((phase) => (
            <div
              key={phase.id}
              onClick={() => navigate(`/estate/${phase.id}`)}
              style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #E2E8F0',
                borderRadius: 6,
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundColor: '#F8F9FA',
                transition: 'border-color 0.2s, background-color 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = '#4A90D9'
                el.style.backgroundColor = '#EFF6FF'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = '#E2E8F0'
                el.style.backgroundColor = '#F8F9FA'
              }}
            >
              {/* Roman numeral */}
              <div style={{
                width: isMobile ? 48 : 72,
                padding: isMobile ? '20px 0' : '28px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#EFF6FF',
                flexShrink: 0,
              }}>
                <span style={{
                  color: '#4A90D9',
                  fontSize: isMobile ? 16 : 20,
                  fontWeight: 300,
                  fontStyle: 'normal',
                }}>
                  {phase.romanNumeral}
                </span>
              </div>

              {/* Title + subtitle */}
              <div style={{ flex: 1, padding: isMobile ? '14px 16px' : '20px 28px', minWidth: 0 }}>
                <p style={{
                  color: '#0F172A',
                  fontSize: isMobile ? 14 : 17,
                  fontWeight: 600,
                  margin: 0,
                  marginBottom: 2,
                }}>
                  {phase.title}
                </p>
                <p style={{ color: '#64748B', fontSize: isMobile ? 12 : 13, margin: 0 }}>
                  {phase.blurb}
                </p>
              </div>

              {/* Year + moments — hide on mobile if too tight */}
              {!isMobile && (
                <div style={{ padding: '0 24px', flexShrink: 0, textAlign: 'center' }}>
                  <p style={{ color: '#94A3B8', fontSize: 12, margin: 0, letterSpacing: 1 }}>
                    {phase.yearRange}
                  </p>
                  <p style={{ color: '#CBD5E1', fontSize: 11, margin: 0, marginTop: 2 }}>
                    {phase.slides.length} moments · {readingTime(phase.slides.length)}
                  </p>
                </div>
              )}

              {/* Enter */}
              <div style={{ padding: isMobile ? '0 12px' : '0 28px', flexShrink: 0 }}>
                <span style={{ color: '#4A90D9', fontSize: isMobile ? 12 : 13, letterSpacing: 1 }}>
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        <p style={{
          color: '#CBD5E1',
          fontSize: 12,
          letterSpacing: 2,
          textAlign: 'center',
          marginTop: 48,
        }}>
          ENTER ANY ROOM TO BEGIN
        </p>

      </div>
    </div>
  )
}