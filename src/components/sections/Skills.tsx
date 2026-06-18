import { Typography } from 'antd'

const { Title } = Typography

const skillGroups = [
  {
    category: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'C#', 'C++', 'Java'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Vite', 'Ant Design', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Prisma', 'SQLite', 'REST API'],
  },
  {
    category: 'Game Dev',
    skills: ['Unity', 'C#', 'Pygame', 'Game Design'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'AWS'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        backgroundColor: '#111827',
        padding: '100px 48px',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ color: '#4A90D9', fontSize: 14, letterSpacing: 2, marginBottom: 8 }}>
          WHAT I WORK WITH
        </p>
        <Title style={{ color: '#F1F5F9', marginTop: 0, marginBottom: 48 }}>
          Skills
        </Title>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p style={{
                color: '#4A90D9',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 1.5,
                marginBottom: 12,
              }}>
                {group.category.toUpperCase()}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '6px 16px',
                      borderRadius: 20,
                      border: '1px solid #1E2A3A',
                      backgroundColor: '#0A0E17',
                      color: '#F1F5F9',
                      fontSize: 14,
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
    </section>
  )
}