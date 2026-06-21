export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#111827',
      borderTop: '1px solid #1E2A3A',
      padding: '24px 48px',
      textAlign: 'center',
    }}>
      <p style={{ color: '#94A3B8', fontSize: 14, margin: 0 }}>
        © {new Date().getFullYear()} Yoojun Kim. Built with React, TypeScript & Ant Design.
      </p>
    </footer>
  )
}