import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { PageLoader } from '../components/PageLoader.jsx'
import { useImageLoader } from '../hooks/useImageLoader.js'
import { LandingPage } from '../pages/LandingPage.jsx'
import { AboutPage } from '../pages/AboutPage.jsx'
import { ContactFormPage } from '../pages/ContactFormPage.jsx'
import { AtencaoBasicaPage } from '../pages/AtencaoBasicaPage.jsx'
import { MediaComplexidadePage } from '../pages/MediaComplexidadePage.jsx'
import { ProcessosPage } from '../pages/ProcessosPage.jsx'
import { AlmoxarifadoPage } from '../pages/AlmoxarifadoPage.jsx'
import { RegulacaoAPACPage } from '../pages/RegulacaoAPACPage.jsx'
import { ProntuarioEletronicoPage } from '../pages/ProntuarioEletronicoPage.jsx'
import { VigilanciaSanitariaPage } from '../pages/VigilanciaSanitariaPage.jsx'
import { AgenteEndemiasPage } from '../pages/AgenteEndemiasPage.jsx'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        window.requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, location.hash])

  return null
}

export function App() {
  const imagesLoaded = useImageLoader()

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {!imagesLoaded && <PageLoader />}
      <div
        className={`transition-opacity duration-500 ${
          imagesLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Header />
        <ScrollToHash />
        <main className="flex flex-col gap-0">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/contato" element={<ContactFormPage />} />
            <Route path="/atencao-basica" element={<AtencaoBasicaPage />} />
            <Route path="/media-complexidade" element={<MediaComplexidadePage />} />
            <Route path="/processos" element={<ProcessosPage />} />
            <Route path="/almoxarifado" element={<AlmoxarifadoPage />} />
            <Route path="/regulacao-apac" element={<RegulacaoAPACPage />} />
            <Route path="/prontuario-eletronico" element={<ProntuarioEletronicoPage />} />
            <Route path="/vigilancia-sanitaria" element={<VigilanciaSanitariaPage />} />
            <Route path="/agente-endemias" element={<AgenteEndemiasPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}
