import { useState } from 'react'
import ImageCarousel from './ImageCarousel'

type Screenshot = {
  image: string
  caption: string
}

export type ScreenshotGroup = {
  label: string
  screenshots: Screenshot[]
}

type LayeredScreenshotsProps = {
  groups: ScreenshotGroup[]
  height?: number
  category?: string
}

export default function LayeredScreenshots({ groups, height = 320, category }: LayeredScreenshotsProps) {
  const [activeIdx, setActiveIdx] = useState(0)

  if (groups.length === 0) return null

  const activeGroup = groups[activeIdx]

  return (
    <div>
      {groups.length > 1 && (
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          {groups.map((g, i) => (
            <button
              key={g.label}
              onClick={() => setActiveIdx(i)}
              style={{
                background: i === activeIdx ? '#4A90D9' : '#FFFFFF',
                color: i === activeIdx ? '#FFFFFF' : '#64748B',
                border: `1px solid ${i === activeIdx ? '#4A90D9' : '#E2E8F0'}`,
                borderRadius: 20,
                padding: '6px 16px',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 0.5,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {g.label}
            </button>
          ))}
        </div>
      )}

      {/* key forces the carousel to remount and reset its index when the group changes */}
      <ImageCarousel
        key={activeGroup.label}
        screenshots={activeGroup.screenshots}
        height={height}
        category={category}
      />
    </div>
  )
}