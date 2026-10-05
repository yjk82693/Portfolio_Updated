import { useState } from 'react'
import { phases } from '../../data/phases'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function Estate() {
  const isMobile = useIsMobile()
  const [openId, setOpenId] = useState<string | null>(null)

  const NODE = isMobile ? 30 : 40
  const PAD = NODE + 16

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
          marginBottom: 12,
        }}>
          A tour of the house
        </h1>
        <p style={{ color: '#64748B', fontSize: 14, margin: 0, marginBottom: 40 }}>
          Five chapters, in order. Select one to read it.
        </p>

        <div style={{ position: 'relative', paddingLeft: PAD }}>
          <div style={{
            position: 'absolute',
            left: NODE / 2 - 1,
            top: 20,
            bottom: 20,
            width: 2,
            backgroundColor: '#E2E8F0',
          }} />

          {phases.map(phase => {
            const isOpen = openId === phase.id
            return (
              <div key={phase.id} style={{ position: 'relative', marginBottom: 16 }}>
                <div style={{
                  position: 'absolute',
                  left: -PAD,
                  top: 14,
                  width: NODE,
                  height: NODE,
                  borderRadius: '50%',
                  backgroundColor: isOpen ? '#4A90D9' : '#FFFFFF',
                  border: '2px solid #4A90D9',
                  color: isOpen ? '#FFFFFF' : '#4A90D9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: isMobile ? 11 : 14,
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  zIndex: 1,
                }}>
                  {phase.romanNumeral}
                </div>

                <div style={{
                  border: `1px solid ${isOpen ? '#4A90D9' : '#E2E8F0'}`,
                  borderRadius: 8,
                  backgroundColor: isOpen ? '#FFFFFF' : '#F8F9FA',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s, background-color 0.2s',
                }}>
                  <button
                    onClick={() => setOpenId(isOpen ? null : phase.id)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 12,
                      padding: isMobile ? '14px 16px' : '18px 24px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ minWidth: 0 }}>
                      <p style={{
                        color: '#0F172A',
                        fontSize: isMobile ? 15 : 17,
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
                      {!isMobile && (
                        <span style={{ color: '#94A3B8', fontSize: 12, letterSpacing: 1 }}>
                          {phase.yearRange}
                        </span>
                      )}
                      <span style={{ color: '#4A90D9', fontSize: 18, lineHeight: 1 }}>
                        {isOpen ? '\u2212' : '+'}
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: isMobile ? '0 16px 18px' : '0 24px 24px',
                      borderTop: '1px solid #E2E8F0',
                    }}>
                      {isMobile && (
                        <p style={{ color: '#94A3B8', fontSize: 12, letterSpacing: 1, margin: '14px 0 0' }}>
                          {phase.yearRange}
                        </p>
                      )}
                      {phase.slides.map((slide, i) => (
                        <p key={i} style={{
                          color: '#374151',
                          fontSize: 15,
                          lineHeight: 1.8,
                          margin: '16px 0 0',
                        }}>
                          {slide.text}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
