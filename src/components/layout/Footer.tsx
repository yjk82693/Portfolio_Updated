export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#F8F9FA',
      borderTop: '1px solid #E2E8F0',
      padding: '20px 32px',
      textAlign: 'center',
    }}>
      <p style={{ color: '#94A3B8', fontSize: 13, margin: 0, letterSpacing: 1 }}>
        © {new Date().getFullYear()} YOOJUN KIM · BUILT WITH REACT & TYPESCRIPT
      </p>
    </footer>
  )
}