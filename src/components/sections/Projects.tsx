import { useState } from 'react'
import { Row, Col, Typography, Pagination } from 'antd'
import FilterBar from '../ui/FilterBar'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

const { Title } = Typography

type FilterCategory = 'all' | 'game' | 'web' | 'tools'

const PAGE_SIZE = 6

export default function Projects() {
  const [active, setActive] = useState<FilterCategory>('all')
  const [page, setPage] = useState(1)

  const filtered = active === 'all'
    ? projects
    : projects.filter((p) => p.category === active)

  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleFilterChange = (category: FilterCategory) => {
    setActive(category)
    setPage(1)
  }

  return (
    <section
      style={{
        backgroundColor: '#0A0E17',
        minHeight: '100vh',
        padding: '88px 48px 48px',
      }}
    >
      <style>{`
        .custom-segmented .ant-segmented-item-label {
          color: #94A3B8 !important;
        }
        .custom-segmented .ant-segmented-item-selected .ant-segmented-item-label {
          color: #F1F5F9 !important;
        }
        .custom-segmented .ant-segmented-item-selected {
          background-color: #4A90D9 !important;
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ color: '#4A90D9', fontSize: 13, letterSpacing: 2, marginBottom: 4 }}>
          MY WORK
        </p>
        <Title level={2} style={{ color: '#F1F5F9', marginTop: 0, marginBottom: 20 }}>
          Projects
        </Title>

        <div style={{ marginBottom: 24 }}>
          <FilterBar active={active} onChange={handleFilterChange} />
        </div>

        <Row gutter={[20, 20]}>
          {paginated.map((project) => (
            <Col key={project.id} xs={24} md={12} lg={8}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>

        {filtered.length > PAGE_SIZE && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
            <Pagination
              current={page}
              pageSize={PAGE_SIZE}
              total={filtered.length}
              onChange={setPage}
              showSizeChanger={false}
            />
          </div>
        )}
      </div>
    </section>
  )
}