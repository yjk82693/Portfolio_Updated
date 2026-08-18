import { useState } from 'react'

type ScreenshotItem = {
  image: string
  caption: string
}

type ImageCarouselProps = {
  images?: string[]
  screenshots?: ScreenshotItem[]
  height?: number
  category?: string
}

export default function ImageCarousel({ images = [], screenshots = [], height = 320, category }: ImageCarouselProps) {
  const [idx, setIdx] = useState(0)

  const items: ScreenshotItem[] = screenshots.length > 0
    ? screenshots
    : images.map(img => ({ image: img, caption: '' }))

  const hasItems = items.length > 0
  const current = items[idx]

  return (
    <div>
      <div style={{
        width: '100%',
        height,
        backgroundColor: '#F0F4F8',
        border: '1px solid #E2E8F0',
        borderRadius: current?.caption ? '8px 8px 0 0' : 8,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {hasItems ? (
          <>
            <img
              src={current.image}
              alt={current.caption ?? `Screenshot ${idx + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

            {items.length > 1 && (
              <>
                <button
                  onClick={() => setIdx(i => Math.max(0, i - 1))}
                  disabled={idx === 0}
                  style={{
                    position: 'absolute', left: 16,
                    width: 36, height: 36,
                    borderRadius: '50%',
                    background: '#FFFFFFcc',
                    border: '1px solid #E2E8F0',
                    color: idx === 0 ? '#CBD5E1' : '#4A90D9',
                    cursor: idx === 0 ? 'default' : 'pointer',
                    fontSize: 16,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >‹</button>

                <button
                  onClick={() => setIdx(i => Math.min(items.length - 1, i + 1))}
                  disabled={idx === items.length - 1}
                  style={{
                    position: 'absolute', right: 16,
                    width: 36, height: 36,
                    borderRadius: '50%',
                    background: '#FFFFFFcc',
                    border: '1px solid #E2E8F0',
                    color: idx === items.length - 1 ? '#CBD5E1' : '#4A90D9',
                    cursor: idx === items.length - 1 ? 'default' : 'pointer',
                    fontSize: 16,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >›</button>

                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  backgroundColor: '#0F172Acc',
                  borderRadius: 4,
                  padding: '3px 8px',
                }}>
                  <span style={{ color: '#F1F5F9', fontSize: 11, letterSpacing: 1 }}>
                    {idx + 1} / {items.length}
                  </span>
                </div>

                <div style={{
                  position: 'absolute', bottom: 12,
                  display: 'flex', gap: 6,
                }}>
                  {items.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      style={{
                        width: i === idx ? 20 : 6,
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: i === idx ? '#4A90D9' : '#CBD5E1',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        transition: 'width 0.2s',
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
          }}>
            <div style={{
              width: 48,
              height: 48,
              borderRadius: 8,
              border: '2px dashed #CBD5E1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ color: '#CBD5E1', fontSize: 20 }}>⊕</span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: 12, letterSpacing: 1, margin: 0 }}>
              {category ? `${category.toUpperCase()} · ` : ''}SCREENSHOT PENDING
            </p>
            <p style={{ color: '#CBD5E1', fontSize: 11, margin: 0 }}>
              Add images to projects.ts
            </p>
          </div>
        )}
      </div>

      {/* Caption */}
      {hasItems && current?.caption && (
        <div style={{
          border: '1px solid #E2E8F0',
          borderTop: 'none',
          borderRadius: '0 0 8px 8px',
          padding: '12px 16px',
          backgroundColor: '#F8F9FA',
        }}>
          <p style={{ color: '#64748B', fontSize: 13, margin: 0, lineHeight: 1.5 }}>
            {current.caption}
          </p>
        </div>
      )}
    </div>
  )
}