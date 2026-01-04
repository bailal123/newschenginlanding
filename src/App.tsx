import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
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
  return (
    <div className="min-h-dvh antialiased">
      <Header />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <SchengenCountries />
        <TrustAuthority />
        <ProcessTimeline />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </Suspense>
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
