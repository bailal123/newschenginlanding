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

export default function App() {
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
