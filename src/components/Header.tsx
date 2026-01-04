import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Container } from './Container'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      const handleScroll = () => setMobileMenuOpen(false)
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [mobileMenuOpen])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-slate-900/20' 
        : 'bg-transparent'
    }`}>
      <Container>
        <div className="flex items-center justify-between py-4">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <img src="/media/logo.png" alt="SchengenDubai" className="w-14 h-14 rounded-xl shadow-lg shadow-amber-500/30 object-contain" />
            <span className="text-lg font-bold text-white tracking-tight">Schengen<span className="text-amber-400">Dubai</span></span>
          </motion.a>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            <a href="#countries" className="text-sm font-medium text-white/80 hover:text-white transition">Countries</a>
            <a href="#process" className="text-sm font-medium text-white/80 hover:text-white transition">Services</a>
            <a href="#testimonials" className="text-sm font-medium text-white/80 hover:text-white transition">Reviews</a>
            <a href="#faq" className="text-sm font-medium text-white/80 hover:text-white transition">FAQ</a>
            <a href="#contact" className="btn-premium btn-gold text-sm py-2.5 px-5">Book Now</a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-4 pt-2 space-y-1 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 mx-0 p-4">
                <a 
                  href="#countries" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-white hover:bg-white/10 transition font-medium"
                >
                  Countries
                </a>
                <a 
                  href="#process" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-white hover:bg-white/10 transition font-medium"
                >
                  Services
                </a>
                <a 
                  href="#testimonials" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-white hover:bg-white/10 transition font-medium"
                >
                  Reviews
                </a>
                <a 
                  href="#faq" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-white hover:bg-white/10 transition font-medium"
                >
                  FAQ
                </a>
                <div className="pt-3 mt-2 border-t border-white/10">
                  <a 
                    href="#contact" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center btn-premium btn-gold py-3"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  )
}
