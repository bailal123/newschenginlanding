import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FAQ } from './sections/FAQ'
import { FinalCTA } from './sections/FinalCTA'
import { Footer } from './sections/Footer'
import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { ProcessTimeline } from './sections/ProcessTimeline'
import { SchengenCountries } from './sections/SchengenCountries'
import { Testimonials } from './sections/Testimonials'
import { TrustAuthority } from './sections/TrustAuthority'
import { WhyChooseUs } from './sections/WhyChooseUs'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from './pages/TermsOfService'

function HomePage() {
  return (
    <div className="min-h-dvh antialiased">
      <Header />
      <Hero />
      <SchengenCountries />
      <TrustAuthority />
      <ProcessTimeline />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  )
}
