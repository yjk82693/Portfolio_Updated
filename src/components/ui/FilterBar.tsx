import { Segmented } from 'antd'

type FilterCategory = 'all' | 'game' | 'web' | 'tools'

type FilterBarProps = {
  active: FilterCategory
  onChange: (category: FilterCategory) => void
}

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <Segmented
      value={active}
      onChange={(value) => onChange(value as FilterCategory)}
      options={[
        { label: 'All', value: 'all' },
        { label: 'Game Dev', value: 'game' },
        { label: 'Web Dev', value: 'web' },
        { label: 'Tools', value: 'tools' },
      ]}
      style={{
        backgroundColor: '#0A0E17',
        border: '1px solid #1E2A3A',
        padding: 4,
        position: 'sticky',
        top: 80,
        zIndex: 10,
      }}
      className="custom-segmented"
    />
  )
}