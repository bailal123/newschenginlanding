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
  const [showBelowFold, setShowBelowFold] = useState(false)

  useEffect(() => {
    let done = false
    const enable = () => {
      if (done) return
      done = true
      setShowBelowFold(true)
    }

    // Load sections on interaction (fast for real users)
    ;['scroll', 'click', 'touchstart', 'keydown'].forEach((evt) => {
      window.addEventListener(evt, enable, { once: true, passive: true })
    })

    // Or when idle/after a short delay
    // @ts-ignore
    if ('requestIdleCallback' in window) requestIdleCallback(enable, { timeout: 3000 })
    const t = window.setTimeout(enable, 4000)

    return () => {
      window.clearTimeout(t)
      ;['scroll', 'click', 'touchstart', 'keydown'].forEach((evt) => {
        window.removeEventListener(evt, enable)
      })
    }
  }, [])

  return (
    <div className="min-h-dvh antialiased">
      <Header />
      <Hero />
      {showBelowFold ? (
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
