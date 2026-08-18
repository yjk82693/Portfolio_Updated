import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { phases } from '../../data/phases'
import ImageCarousel from '../../components/ui/ImageCarousel'

export default function PhaseDetail() {
  const { phase: phaseId } = useParams()
  const navigate = useNavigate()
  const [slideIdx, setSlideIdx] = useState(0)

  const phase = phases.find(p => p.id === phaseId)
  const phaseIndex = phases.findIndex(p => p.id === phaseId)
  const nextPhase = phases[phaseIndex + 1]

  if (!phase) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <p style={{ color: '#0F172A' }}>Phase not found.</p>
      </div>
    )
  }

  const slide = phase.slides[slideIdx]

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#FFFFFF',
      padding: '100px 32px 64px',
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>

        <button
          onClick={() => navigate('/estate')}
          style={{
            background: 'none',
            border: 'none',
            color: '#94A3B8',
            fontSize: 13,
            cursor: 'pointer',
            marginBottom: 32,
            padding: 0,
            letterSpacing: 1,
          }}
        >
          ← back to the hall
        </button>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
          <span style={{ color: '#4A90D9', fontSize: 28, fontWeight: 300 }}>
            {phase.romanNumeral}
          </span>
          <h1 style={{ color: '#0F172A', fontSize: 32, fontWeight: 700, margin: 0 }}>
            {phase.title}
          </h1>
          <span style={{ color: '#94A3B8', fontSize: 13 }}>{phase.yearRange}</span>
        </div>

        {/* Image carousel for current slide */}
        <div style={{ marginBottom: 0 }}>
          <ImageCarousel
            images={slide.image ? [slide.image] : []}
            height={280}
          />
        </div>

        {/* Slide counter */}
        <div style={{ padding: '12px 0 0' }}>
          <span style={{ color: '#4A90D9', fontSize: 12, letterSpacing: 2 }}>
            moment {slideIdx + 1} / {phase.slides.length}
          </span>
        </div>

        {/* Slide text */}
        <div style={{
          border: '1px solid #E2E8F0',
          borderRadius: 8,
          backgroundColor: '#F8F9FA',
          padding: '20px 24px',
          marginTop: 12,
        }}>
          <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
            {slide.text}
          </p>
        </div>

        {/* Dots + next room */}
        {phase.slides.length > 1 && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 16,
          }}>
            <div style={{ display: 'flex', gap: 8 }}>
              {phase.slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIdx(i)}
                  style={{
                    width: i === slideIdx ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: i === slideIdx ? '#4A90D9' : '#E2E8F0',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'width 0.2s',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              {slideIdx > 0 && (
                <button
                  onClick={() => setSlideIdx(i => i - 1)}
                  style={{
                    background: 'none',
                    border: '1px solid #E2E8F0',
                    borderRadius: 6,
                    padding: '6px 14px',
                    color: '#4A90D9',
                    fontSize: 13,
                    cursor: 'pointer',
                  }}
                >
                  ← prev
                </button>
              )}
              {slideIdx < phase.slides.length - 1 && (
                <button
                  onClick={() => setSlideIdx(i => i + 1)}
                  style={{
                    background: 'none',
                    border: '1px solid #E2E8F0',
                    borderRadius: 6,
                    padding: '6px 14px',
                    color: '#4A90D9',
                    fontSize: 13,
                    cursor: 'pointer',
                  }}
                >
                  next →
                </button>
              )}
              {nextPhase && slideIdx === phase.slides.length - 1 && (
                <button
                  onClick={() => {
                    navigate(`/estate/${nextPhase.id}`)
                    setSlideIdx(0)
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#4A90D9',
                    fontSize: 13,
                    cursor: 'pointer',
                    letterSpacing: 1,
                  }}
                >
                  next room: {nextPhase.title} →
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}