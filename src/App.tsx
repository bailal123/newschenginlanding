import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { Footer } from './sections/Footer'

// Lazy load non-critical sections
const SchengenCountries = lazy(() => import('./sections/SchengenCountries').then(m => ({ default: m.SchengenCountries })))
const TrustAuthority = lazy(() => import('./sections/TrustAuthority').then(m => ({ default: m.TrustAuthority })))
const ProcessTimeline = lazy(() => import('./sections/ProcessTimeline').then(m => ({ default: m.ProcessTimeline })))
const WhyChooseUs = lazy(() => import('./sections/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })))
const Testimonials = lazy(() => import('./sections/Testimonials').then(m => ({ default: m.Testimonials })))
const FAQ = lazy(() => import('./sections/FAQ').then(m => ({ default: m.FAQ })))
const FinalCTA = lazy(() => import('./sections/FinalCTA').then(m => ({ default: m.FinalCTA })))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })))
const TermsOfService = lazy(() => import('./pages/TermsOfService').then(m => ({ default: m.TermsOfService })))

// Minimal loading fallback
const SectionLoader = () => <div className="min-h-[200px]" />

function HomePage() {
  // Defer loading below-fold sections until user scrolls or after delay
  const [loadSections, setLoadSections] = useState(false)

  useEffect(() => {
    let loaded = false
    const load = () => {
      if (loaded) return
      loaded = true
      setLoadSections(true)
    }

    // Load on scroll (user is exploring)
    const onScroll = () => {
      if (window.scrollY > 100) load()
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Or after a short delay as fallback
    const timer = setTimeout(load, 2000)

    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="min-h-dvh antialiased">
      <Header />
      <Hero />
      {loadSections ? (
        <Suspense fallback={<SectionLoader />}>
          <SchengenCountries />
          <TrustAuthority />
          <ProcessTimeline />
          <WhyChooseUs />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </Suspense>
      ) : (
        <SectionLoader />
      )}
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={
          <Suspense fallback={<SectionLoader />}>
            <PrivacyPolicy />
          </Suspense>
        } />
        <Route path="/terms" element={
          <Suspense fallback={<SectionLoader />}>
            <TermsOfService />
          </Suspense>
        } />
      </Routes>
    </BrowserRouter>
  )
}
