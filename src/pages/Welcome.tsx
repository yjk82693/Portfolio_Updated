import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useIsMobile } from '../hooks/useIsMobile'

export default function Welcome() {
  const navigate = useNavigate()
  const [chosen, setChosen] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const isMobile = useIsMobile()

  const handleChoice = (path: string) => {
    setChosen(true)
    setTimeout(() => navigate(path), 200)
  }

  return (
    <div style={{
      height: '100vh',
      backgroundColor: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>

      {/* Hero */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'stretch',
        width: '100%',
        overflow: 'hidden',
      }}>

        {/* Left — Portrait */}
        {!isMobile && (
          <div style={{
            width: '40%',
            backgroundColor: '#F8F9FA',
            borderRight: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
          }}>
            {/* Placeholder behind image */}
            <div style={{
              position: 'absolute',
              width: 140,
              height: 140,
              borderRadius: '50%',
              border: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ color: '#CBD5E1', fontSize: 13, letterSpacing: 1 }}>portrait</span>
            </div>
            <img
              src="/headshot.jpeg"
              alt="Yoojun Kim"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                position: 'relative',
                zIndex: 1,
              }}
              onError={e => {
                (e.target as HTMLImageElement).style.display = 'none'
              }}
            />
          </div>
        )}

        {/* Right — Text */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          padding: isMobile ? '80px 24px 24px' : '80px 64px',
          backgroundColor: '#FFFFFF',
          overflowY: isMobile ? 'auto' : 'hidden',
        }}>
          <div style={{ maxWidth: 560, width: '100%' }}>
            <p style={{
              color: '#4A90D9',
              fontSize: 12,
              letterSpacing: 3,
              marginBottom: 12,
              textTransform: 'uppercase',
            }}>
              Welcome
            </p>
            <h1 style={{
              color: '#0F172A',
              fontSize: isMobile ? 32 : 48,
              fontWeight: 700,
              lineHeight: 1.15,
              margin: 0,
              marginBottom: 16,
            }}>
              Hello, I'm{' '}
              <span style={{ color: '#4A90D9' }}>Yoojun Kim.</span>
            </h1>
            <p style={{
              color: '#64748B',
              fontSize: isMobile ? 15 : 17,
              lineHeight: 1.8,
              margin: 0,
              marginBottom: 16,
            }}>
              Inspired by the creativity of Disney and Nintendo, I pursued computer science
              to develop innovative technologies. My focus is on using AI to make creativity
              more accessible, empowering people to bring their stories and ideas to life.
              My friend Sharvis — an AI concierge — is also here to show you around,
              if you'd like a guided tour.
            </p>
            {!isMobile && (
              <p style={{
                color: '#64748B',
                fontSize: 17,
                lineHeight: 1.8,
                margin: 0,
                marginBottom: 32,
              }}>
                I'm a CS & Math student at Penn State (GPA 3.55), currently seeking a software
                engineering internship. I've shipped full-stack systems, Unity games, and AI tools
                across internships at NHN, Lunexio, CoconeM, and Kim & Chang.
              </p>
            )}

            {/* Skill tags */}
            <div style={{ marginBottom: 8 }}>
              <p style={{
                color: '#94A3B8',
                fontSize: 11,
                letterSpacing: 2,
                marginBottom: 12,
                textTransform: 'uppercase',
              }}>
                Stack
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {[
                  'TypeScript', 'React', 'Next.js', 'Node.js',
                  'Unity', 'C#', 'Python', 'Java', 'Spring',
                  'Prisma', 'MySQL', 'AWS',
                ].map(skill => (
                  <span
                    key={skill}
                    style={{
                      border: '1px solid #E2E8F0',
                      borderRadius: 4,
                      padding: '4px 10px',
                      color: '#64748B',
                      fontSize: 12,
                      backgroundColor: '#F8F9FA',
                      letterSpacing: 0.5,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div> {/* closes hero */}

      {/* Butler Fork — flush to bottom */}
      {!chosen && (
        <div style={{
          width: '100%',
          backgroundColor: '#0F0D0A',
          borderTop: '1px solid #1E2A3A',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          minHeight: isMobile ? 100 : 200,
        }}>

          {/* Butler avatar — hidden on mobile */}
          {!isMobile && (
            <div style={{
              width: 180,
              borderRight: '1px solid #1E2A3A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <img
                src="/butler/neutral.png"
                alt="Sharvis"
                style={{ width: 140, height: 140, objectFit: 'contain' }}
              />
            </div>
          )}

          {/* Butler content */}
          <div style={{
            flex: 1,
            padding: isMobile ? '20px' : '32px 40px',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            gap: isMobile ? 16 : 24,
          }}>
            {!showOptions ? (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  {isMobile && (
                    <img
                      src="/butler/neutral.png"
                      alt="Sharvis"
                      style={{ width: 32, height: 32, objectFit: 'contain', flexShrink: 0 }}
                    />
                  )}
                  <p style={{ color: '#94A3B8', fontSize: isMobile ? 14 : 16, lineHeight: 1.6, margin: 0 }}>
                    Good day. I'm Sharvis, the butler. Shall I give you the quick tour of his résumé — or show you around properly?
                  </p>
                </div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <button
                    onClick={() => handleChoice('/report')}
                    style={{
                      backgroundColor: '#1E2A3A',
                      border: '1px solid #4A90D9',
                      borderRadius: 6,
                      padding: isMobile ? '10px 16px' : '14px 28px',
                      color: '#4A90D9',
                      fontSize: isMobile ? 13 : 15,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Quick tour → Resume
                  </button>
                  <button
                    onClick={() => setShowOptions(true)}
                    style={{
                      backgroundColor: '#C9A84C',
                      border: 'none',
                      borderRadius: 6,
                      padding: isMobile ? '10px 16px' : '14px 28px',
                      color: '#0A0908',
                      fontSize: isMobile ? 13 : 15,
                      fontWeight: 600,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Show me around
                  </button>
                </div>
              </>
            ) : (
              <>
                <p style={{ color: '#94A3B8', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                  Where shall we begin?
                </p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                  <button
                    onClick={() => setShowOptions(false)}
                    style={{
                      backgroundColor: 'transparent',
                      border: '1px solid #2a2318',
                      borderRadius: 6,
                      padding: '10px 14px',
                      color: '#4a3f2f',
                      fontSize: 13,
                      cursor: 'pointer',
                    }}
                  >
                    ←
                  </button>
                  <div
                    onClick={() => handleChoice('/estate')}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = '#C9A84C')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = '#2a2318')}
                    style={{
                      border: '1px solid #2a2318',
                      borderRadius: 6,
                      padding: '10px 16px',
                      cursor: 'pointer',
                      backgroundColor: '#150f08',
                    }}
                  >
                    <p style={{ color: '#C9A84C', fontSize: 11, letterSpacing: 1, margin: 0, marginBottom: 2 }}>
                      THE ESTATE
                    </p>
                    <p style={{ color: '#94A3B8', fontSize: 12, margin: 0 }}>
                      Story — five chapters
                    </p>
                  </div>
                  <div
                    onClick={() => handleChoice('/gallery')}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = '#C9A84C')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = '#2a2318')}
                    style={{
                      border: '1px solid #2a2318',
                      borderRadius: 6,
                      padding: '10px 16px',
                      cursor: 'pointer',
                      backgroundColor: '#150f08',
                    }}
                  >
                    <p style={{ color: '#C9A84C', fontSize: 11, letterSpacing: 1, margin: 0, marginBottom: 2 }}>
                      THE GALLERY
                    </p>
                    <p style={{ color: '#94A3B8', fontSize: 12, margin: 0 }}>
                      Works — eight projects
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  )
}