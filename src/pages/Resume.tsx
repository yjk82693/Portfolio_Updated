import { Button, Typography } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

const { Title } = Typography

export default function Resume() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0A0E17',
      padding: '120px 48px 80px',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 32,
        }}>
          <Title style={{ color: '#F1F5F9', margin: 0 }}>
            Resume
          </Title>
          <Button
            icon={<DownloadOutlined />}
            href="/resume.pdf"
            download
            type="primary"
            size="large"
            style={{ backgroundColor: '#4A90D9', borderColor: '#4A90D9' }}
          >
            Download PDF
          </Button>
        </div>

        <div style={{
          border: '1px solid #1E2A3A',
          borderRadius: 12,
          overflow: 'hidden',
          height: '85vh',
        }}>
          <iframe
            src="/resume.pdf"
            title="Resume"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </div>
  )
}