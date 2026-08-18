import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ButlerSummon from './components/layout/ButlerSummon'
import Welcome from './pages/Welcome'
import Estate from './pages/estate/Estate'
import PhaseDetail from './pages/estate/PhaseDetail'
import Gallery from './pages/gallery/Gallery'
import ProjectDetail from './pages/gallery/ProjectDetail'
import Report from './pages/Report'

function AppContent() {
  const location = useLocation()
  const isWelcome = location.pathname === '/'

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/estate" element={<Estate />} />
          <Route path="/estate/:phase" element={<PhaseDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:slug" element={<ProjectDetail />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </main>
      {!isWelcome && <ButlerSummon />}
      {!isWelcome && <Footer />}
    </>
  )
}

function App() {
  return <AppContent />
}

export default App