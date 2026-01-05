import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState, useRef } from 'react'
import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { Footer } from './sections/Footer'

// Lazy load non-critical sections (these include framer-motion)
const SchengenCountries = lazy(() => import('./sections/SchengenCountries').then(m => ({ default: m.SchengenCountries })))
const TrustAuthority = lazy(() => import('./sections/TrustAuthority').then(m => ({ default: m.TrustAuthority })))
const ProcessTimeline = lazy(() => import('./sections/ProcessTimeline').then(m => ({ default: m.ProcessTimeline })))
const WhyChooseUs = lazy(() => import('./sections/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })))
const Testimonials = lazy(() => import('./sections/Testimonials').then(m => ({ default: m.Testimonials })))
const FAQ = lazy(() => import('./sections/FAQ').then(m => ({ default: m.FAQ })))
const FinalCTA = lazy(() => import('./sections/FinalCTA').then(m => ({ default: m.FinalCTA })))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })))
const TermsOfService = lazy(() => import('./pages/TermsOfService').then(m => ({ default: m.TermsOfService })))

// Component that loads sections only when near viewport
function LazyLoadOnScroll({ children }: { children: React.ReactNode }) {
  const [load, setLoad] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Use IntersectionObserver to detect when sections are near viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' } // Start loading 200px before visible
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {load ? children : <div className="min-h-[400px]" />}
    </div>
  )
}

function HomePage() {
  return (
    <div className="min-h-dvh antialiased">
      <Header />
      <Hero />
      <LazyLoadOnScroll>
        <Suspense fallback={null}>
          <SchengenCountries />
          <TrustAuthority />
          <ProcessTimeline />
          <WhyChooseUs />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </Suspense>
      </LazyLoadOnScroll>
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
          <Suspense fallback={null}>
            <PrivacyPolicy />
          </Suspense>
        } />
        <Route path="/terms" element={
          <Suspense fallback={null}>
            <TermsOfService />
          </Suspense>
        } />
      </Routes>
    </BrowserRouter>
  )
}
