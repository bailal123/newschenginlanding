import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '../components/Container'

// Pre-generated static particle positions (deterministic for SSR/hydration)
const PARTICLES = [
  { left: 15, top: 25, delay: 0.5 }, { left: 85, top: 10, delay: 1.2 },
  { left: 30, top: 70, delay: 2.1 }, { left: 60, top: 45, delay: 0.8 },
  { left: 10, top: 55, delay: 3.5 }, { left: 90, top: 80, delay: 1.8 },
  { left: 45, top: 15, delay: 4.2 }, { left: 75, top: 65, delay: 0.3 },
  { left: 20, top: 90, delay: 2.7 }, { left: 55, top: 35, delay: 1.5 },
  { left: 5, top: 40, delay: 3.1 }, { left: 95, top: 60, delay: 4.8 },
  { left: 40, top: 85, delay: 0.9 }, { left: 70, top: 20, delay: 2.4 },
  { left: 25, top: 50, delay: 3.8 }, { left: 80, top: 75, delay: 1.1 },
  { left: 50, top: 5, delay: 4.5 }, { left: 35, top: 95, delay: 2.0 },
  { left: 65, top: 30, delay: 3.3 }, { left: 12, top: 68, delay: 4.0 },
]

export function Hero() {
  const reduceMotion = useReducedMotion()

  const fadeUp = {
    initial: reduceMotion ? {} : { opacity: 0, y: 40 },
    animate: reduceMotion ? {} : { opacity: 1, y: 0 },
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/media/video.mp4" type="video/mp4" />
        </video>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.2),transparent)]" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {PARTICLES.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse-slow"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <Container>
        <div className="relative flex items-center min-h-[85vh] pt-20 pb-12">
          <div className="w-full max-w-4xl">
            {/* Badge */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-4 flex-wrap"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-dark border border-white/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-white/90 tracking-wider uppercase">Dubai-Based Experts</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-dark border border-white/10">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs font-semibold text-white/90">Trusted by Thousands</span>
              </div>
              {/* Google Rating Badge */}
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 border border-white/20 shadow-lg">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-slate-900">4.9</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">(2,847)</span>
                </div>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              {...fadeUp}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight mb-4"
            >
              Schengen Appointment in{' '}
              <span className="relative inline-block">
                <span className="gold-accent">Dubai</span>
                <svg className="absolute -bottom-0.5 left-0 w-full h-1.5" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                  <path d="M1 5.5C47.6667 2.16667 141 -2.4 199 5.5" stroke="url(#gold-line)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gold-line" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="#d4af37"/>
                      <stop offset="1" stopColor="#f5d77b"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              <span className="text-gradient-light">Planning to Travel to Europe?</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-sm sm:text-base text-white/70 max-w-2xl mb-6 leading-relaxed"
            >
              Get expert assistance for your Schengen appointment in Dubai — fast, reliable, and stress-free.
              Our Dubai-based team helps you prepare documents, book your appointment, and get ready for your trip.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <a href="https://wa.me/971568456002" target="_blank" rel="noopener noreferrer" className="btn-premium btn-gold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book Now
              </a>
              <a href="tel:+971568456002" className="btn-premium btn-secondary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Free Consultation
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 1, delay: 1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {[
                { icon: '🏆', label: '10+ Years', desc: 'Of Experience' },
                { icon: '📅', label: 'Quick Booking', desc: 'Fast Appointments' },
                { icon: '📋', label: 'Expert Docs', desc: 'Document Preparation' },
                { icon: '🛡️', label: 'Trusted Team', desc: 'Dubai-Based' },
              ].map((item, i) => (
                <div key={i} className="glass-dark rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all hover:bg-white/5">
                  <div className="flex flex-col items-center text-center gap-2">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-white">{item.label}</div>
                      <div className="text-xs text-white/50">{item.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Disclaimer */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-5 p-3 rounded-xl glass-dark border border-white/10"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center gap-2 shrink-0">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm font-medium text-white">Secure Payments</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  {/* Visa */}
                  <div className="h-9 px-3 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <svg className="h-5" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="32" rx="4" fill="white"/>
                      <path d="M18.5 21H16L17.75 11H20.25L18.5 21Z" fill="#1434CB"/>
                      <path d="M27.5 11.25C27 11 26.25 10.75 25.25 10.75C22.75 10.75 21 12.25 21 14.25C21 15.75 22.25 16.5 23.25 17C24.25 17.5 24.5 17.75 24.5 18.25C24.5 19 23.5 19.25 22.75 19.25C21.5 19.25 20.75 19 20 18.75L19.5 18.5L19 21.25C19.75 21.5 21 21.75 22.25 21.75C25 21.75 26.75 20.25 26.75 18C26.75 16.75 26 15.75 24.5 15C23.75 14.5 23.25 14.25 23.25 13.75C23.25 13.25 23.75 12.75 24.75 12.75C25.5 12.75 26.25 13 26.75 13.25L27 13.25L27.5 11.25Z" fill="#1434CB"/>
                      <path d="M32 11H30C29.5 11 29 11.25 28.75 11.75L25 21H27.75L28.25 19.5H31.5L31.75 21H34.25L32 11ZM29 17.5L30 14.25L30.5 17.5H29Z" fill="#1434CB"/>
                      <path d="M14.5 11L12 18L11.75 16.75C11.25 15.25 9.75 13.5 8 12.5L10.25 21H13L17.5 11H14.5Z" fill="#1434CB"/>
                      <path d="M10.25 11H6L6 11.25C9.25 12 11.5 14 12.25 16.5L11.5 11.75C11.25 11.25 10.75 11 10.25 11Z" fill="#F9A000"/>
                    </svg>
                  </div>
                  {/* Mastercard */}
                  <div className="h-9 px-3 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <svg className="h-6" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="32" rx="4" fill="white"/>
                      <circle cx="19" cy="16" r="9" fill="#EB001B"/>
                      <circle cx="29" cy="16" r="9" fill="#F79E1B"/>
                      <path d="M24 9.5C26.1 11.1 27.5 13.4 27.5 16C27.5 18.6 26.1 20.9 24 22.5C21.9 20.9 20.5 18.6 20.5 16C20.5 13.4 21.9 11.1 24 9.5Z" fill="#FF5F00"/>
                    </svg>
                  </div>
                  {/* Apple Pay */}
                  <div className="h-9 px-3 rounded-lg bg-black flex items-center justify-center shadow-sm">
                    <svg className="h-5" viewBox="0 0 50 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.6 2.7C10.2 1.9 10.6 0.9 10.5 0C9.6 0 8.5 0.6 7.9 1.4C7.3 2.1 6.8 3.1 6.9 4C7.9 4.1 8.9 3.5 9.6 2.7Z" fill="white"/>
                      <path d="M10.5 4.2C9.1 4.1 7.9 5 7.2 5C6.5 5 5.4 4.2 4.3 4.3C2.8 4.3 1.4 5.1 0.7 6.4C-0.8 9 0.3 12.8 1.8 15C2.5 16.1 3.4 17.3 4.5 17.3C5.6 17.2 6 16.5 7.3 16.5C8.6 16.5 8.9 17.3 10.1 17.2C11.3 17.2 12 16.1 12.7 15C13.5 13.8 13.8 12.6 13.9 12.5C13.8 12.5 11.3 11.5 11.3 8.6C11.2 6.2 13.2 5 13.3 4.9C12.2 3.3 10.5 4.2 10.5 4.2Z" fill="white"/>
                      <path d="M21.5 1.1C24.8 1.1 27.1 3.4 27.1 6.7C27.1 10 24.7 12.4 21.4 12.4H17.7V17.2H14.9V1.1H21.5ZM17.7 10H20.8C23.1 10 24.4 8.7 24.4 6.7C24.4 4.7 23.1 3.4 20.8 3.4H17.7V10Z" fill="white"/>
                      <path d="M28.1 13.8C28.1 11.6 29.8 10.2 32.8 10L36.2 9.8V8.8C36.2 7.3 35.2 6.4 33.5 6.4C32 6.4 31 7.2 30.8 8.3H28.3C28.4 6 30.5 4.2 33.6 4.2C36.7 4.2 38.8 6 38.8 8.6V17.2H36.3V15.1H36.2C35.5 16.5 33.9 17.4 32.2 17.4C29.7 17.4 28.1 15.9 28.1 13.8ZM36.2 12.5V11.5L33.2 11.7C31.6 11.8 30.7 12.5 30.7 13.7C30.7 14.9 31.6 15.5 33 15.5C34.8 15.5 36.2 14.2 36.2 12.5Z" fill="white"/>
                      <path d="M41.1 21V18.8C41.3 18.8 41.8 18.9 42.1 18.9C43.3 18.9 43.9 18.4 44.3 17.2L44.5 16.5L39.5 1.1H42.5L46 13.6H46.1L49.6 1.1H52.5L47.3 17.3C46.2 20.5 44.9 21.1 42.3 21.1C42.1 21 41.3 21 41.1 21Z" fill="white"/>
                    </svg>
                  </div>
                  {/* Google Pay */}
                  <div className="h-9 px-3 rounded-lg bg-white flex items-center justify-center shadow-sm border border-slate-200">
                    <svg className="h-5" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.8 10.1V15.9H22V1.9H26.6C27.8 1.9 28.9 2.3 29.7 3.1C30.6 3.9 31 4.9 31 6C31 7.2 30.6 8.1 29.7 8.9C28.9 9.7 27.9 10.1 26.6 10.1H23.8ZM23.8 3.6V8.4H26.7C27.4 8.4 28 8.2 28.4 7.7C28.9 7.2 29.1 6.7 29.1 6C29.1 5.3 28.9 4.8 28.4 4.3C28 3.8 27.4 3.6 26.7 3.6H23.8Z" fill="#5F6368"/>
                      <path d="M35.5 5.6C36.9 5.6 38 6 38.8 6.8C39.6 7.6 40 8.7 40 10V15.9H38.2V14.5H38.1C37.3 15.6 36.3 16.1 35 16.1C33.9 16.1 33 15.8 32.2 15.1C31.5 14.4 31.1 13.6 31.1 12.6C31.1 11.5 31.5 10.7 32.3 10C33.1 9.4 34.2 9 35.5 9C36.7 9 37.6 9.2 38.3 9.6V9.2C38.3 8.5 38 7.9 37.5 7.4C37 6.9 36.4 6.7 35.6 6.7C34.5 6.7 33.6 7.2 33 8.1L31.4 7.1C32.3 5.8 33.7 5.6 35.5 5.6ZM33 12.7C33 13.2 33.2 13.6 33.6 14C34 14.3 34.5 14.5 35 14.5C35.8 14.5 36.5 14.2 37.1 13.6C37.7 13 38 12.3 38 11.5C37.4 11.1 36.6 10.8 35.5 10.8C34.7 10.8 34 11 33.5 11.4C33.2 11.7 33 12.2 33 12.7Z" fill="#5F6368"/>
                      <path d="M49.8 5.9L44.3 18.8H42.4L44.3 14.6L40.5 5.9H42.5L45.3 12.7H45.4L48.1 5.9H49.8Z" fill="#5F6368"/>
                      <path d="M16.2 8.8C16.2 8.2 16.2 7.6 16.1 7H8.5V10.3H12.9C12.7 11.4 12.1 12.4 11.2 13V15.2H13.8C15.3 13.8 16.2 11.5 16.2 8.8Z" fill="#4285F4"/>
                      <path d="M8.5 17.3C10.9 17.3 12.9 16.5 13.8 15.2L11.2 13C10.5 13.5 9.6 13.8 8.5 13.8C6.2 13.8 4.3 12.3 3.6 10.3H1V12.6C2.4 15.4 5.3 17.3 8.5 17.3Z" fill="#34A853"/>
                      <path d="M3.6 10.3C3.2 9.2 3.2 8 3.6 6.9V4.6H1C-0.3 7.1 -0.3 10.1 1 12.6L3.6 10.3Z" fill="#FBBC04"/>
                      <path d="M8.5 3.4C9.7 3.4 10.7 3.8 11.6 4.6L13.9 2.3C12.4 0.9 10.6 0 8.5 0C5.3 0 2.4 1.9 1 4.6L3.6 6.9C4.3 4.9 6.2 3.4 8.5 3.4Z" fill="#EA4335"/>
                    </svg>
                  </div>
                  {/* PayPal */}
                  <div className="h-9 px-3 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <svg className="h-5" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.5 4.2H19.8C19.6 4.2 19.4 4.3 19.3 4.5L18.1 12.2C18.1 12.3 18.2 12.4 18.3 12.4H19.6C19.8 12.4 19.9 12.3 20 12.1L20.3 10.2C20.3 10 20.5 9.9 20.7 9.9H21.6C23.5 9.9 24.6 8.9 24.9 7.1C25 6.3 24.9 5.6 24.5 5.2C24 4.6 23.4 4.2 22.5 4.2ZM22.8 7.2C22.7 8.1 21.9 8.1 21.3 8.1H20.9L21.2 6.2C21.2 6.1 21.3 6 21.4 6H21.6C22 6 22.4 6 22.6 6.3C22.8 6.4 22.8 6.7 22.8 7.2Z" fill="#003087"/>
                      <path d="M32.4 7.1H31.1C31 7.1 30.9 7.2 30.9 7.3L30.8 7.8L30.7 7.6C30.4 7.2 29.7 7 29.1 7C27.4 7 26 8.3 25.7 10C25.5 10.9 25.7 11.7 26.2 12.3C26.6 12.8 27.3 13.1 28 13.1C29.2 13.1 29.9 12.3 29.9 12.3L29.8 12.8C29.8 12.9 29.9 13 30 13H31.1C31.3 13 31.5 12.9 31.5 12.7L32.2 7.4C32.3 7.3 32.2 7.1 32.4 7.1ZM30.3 10.1C30.2 10.9 29.5 11.5 28.7 11.5C28.3 11.5 27.9 11.3 27.7 11.1C27.5 10.8 27.5 10.4 27.5 10C27.6 9.2 28.3 8.6 29.1 8.6C29.5 8.6 29.8 8.8 30.1 9C30.3 9.3 30.4 9.7 30.3 10.1Z" fill="#003087"/>
                      <path d="M40.4 7.1H39.1C38.9 7.1 38.8 7.2 38.7 7.4L37.3 9.7L36.7 7.5C36.6 7.3 36.5 7.1 36.2 7.1H34.9C34.8 7.1 34.7 7.3 34.7 7.4L35.9 12L34.8 13.5C34.7 13.6 34.8 13.8 34.9 13.8H36.2C36.4 13.8 36.5 13.7 36.6 13.6L40.5 7.5C40.7 7.3 40.6 7.1 40.4 7.1Z" fill="#003087"/>
                      <path d="M45.9 4.2H43.2C43 4.2 42.8 4.3 42.7 4.5L41.5 12.2C41.5 12.3 41.6 12.4 41.7 12.4H43.1C43.2 12.4 43.3 12.3 43.3 12.2L43.7 10.2C43.7 10 43.9 9.9 44.1 9.9H45C46.9 9.9 48 8.9 48.3 7.1C48.4 6.3 48.3 5.6 47.9 5.2C47.4 4.6 46.8 4.2 45.9 4.2ZM46.2 7.2C46.1 8.1 45.3 8.1 44.7 8.1H44.3L44.6 6.2C44.6 6.1 44.7 6 44.8 6H45C45.4 6 45.8 6 46 6.3C46.2 6.4 46.2 6.7 46.2 7.2Z" fill="#009CDE"/>
                      <path d="M55.8 7.1H54.5C54.4 7.1 54.3 7.2 54.3 7.3L54.2 7.8L54.1 7.6C53.8 7.2 53.1 7 52.5 7C50.8 7 49.4 8.3 49.1 10C48.9 10.9 49.1 11.7 49.6 12.3C50 12.8 50.7 13.1 51.4 13.1C52.6 13.1 53.3 12.3 53.3 12.3L53.2 12.8C53.2 12.9 53.3 13 53.4 13H54.5C54.7 13 54.9 12.9 54.9 12.7L55.6 7.4C55.6 7.3 55.5 7.1 55.8 7.1ZM53.7 10.1C53.6 10.9 52.9 11.5 52.1 11.5C51.7 11.5 51.3 11.3 51.1 11.1C50.9 10.8 50.9 10.4 50.9 10C51 9.2 51.7 8.6 52.5 8.6C52.9 8.6 53.2 8.8 53.5 9C53.7 9.3 53.8 9.7 53.7 10.1Z" fill="#009CDE"/>
                      <path d="M57.2 4.4L56 12.2C56 12.3 56.1 12.4 56.2 12.4H57.4C57.6 12.4 57.8 12.3 57.8 12.1L59 4.5C59 4.4 58.9 4.3 58.8 4.3H57.5C57.3 4.2 57.2 4.3 57.2 4.4Z" fill="#009CDE"/>
                      <path d="M4.1 15.3L4.4 13.3L3.7 13.3H0.5L2.7 0.5C2.7 0.4 2.8 0.4 2.8 0.3C2.9 0.3 2.9 0.3 3 0.3H8.6C10.4 0.3 11.6 0.7 12.3 1.5C12.6 1.8 12.8 2.2 12.9 2.6C13 3 13 3.5 12.9 4.1V4.4L13.1 4.5C13.4 4.7 13.6 4.8 13.8 5C14.1 5.4 14.3 5.8 14.4 6.4C14.5 6.9 14.5 7.5 14.3 8.2C14.1 9 13.8 9.7 13.4 10.2C13 10.7 12.6 11.1 12 11.4C11.5 11.7 10.9 11.9 10.2 12H8.7C8.3 12 7.9 12.2 7.6 12.5C7.3 12.8 7.2 13.2 7.1 13.6L7 13.8L6.4 17.6L6.4 17.8C6.4 17.8 6.4 17.9 6.3 17.9H4.1V15.3Z" fill="#003087"/>
                      <path d="M13.5 4.2C13.5 4.3 13.5 4.5 13.4 4.6C12.7 8 10.7 9.2 8.1 9.2H6.8C6.5 9.2 6.2 9.5 6.1 9.8L5.3 14.9L5.1 16.2C5.1 16.4 5.2 16.6 5.4 16.6H8.1C8.4 16.6 8.6 16.4 8.7 16.1V15.9L9.2 12.8V12.5C9.3 12.2 9.5 12 9.8 12H10.2C12.5 12 14.2 11 14.8 8.2C15 7 14.9 6 14.3 5.3C14.1 5 13.9 4.6 13.5 4.2Z" fill="#009CDE"/>
                      <path d="M12.7 3.9C12.6 3.9 12.5 3.8 12.4 3.8C12.3 3.8 12.2 3.7 12.1 3.7C11.6 3.6 11.1 3.6 10.5 3.6H7.5C7.4 3.6 7.3 3.6 7.2 3.7C7 3.8 6.9 4 6.9 4.2L6.2 8.9V9.1C6.3 8.8 6.6 8.5 6.9 8.5H8.2C11.1 8.5 13.3 7.2 14 3.6C14 3.5 14 3.4 14 3.3C13.8 3.2 13.6 3.1 13.4 3C13.2 3 13 3.9 12.7 3.9Z" fill="#012169"/>
                    </svg>
                  </div>
                  {/* MADA */}
                  <div className="h-9 px-3 rounded-lg bg-white flex items-center justify-center shadow-sm border border-slate-200">
                    <svg className="h-4" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.5 5L4 15H7L8 12.5H13L14 15H17L12.5 5H8.5ZM9 10L10.5 6.5L12 10H9Z" fill="#004B87"/>
                      <path d="M19 5V15H22V11.5L25.5 15H29.5L25 10.5L29 5H25.5L22 9V5H19Z" fill="#004B87"/>
                      <path d="M34 5C31.2 5 29 7.2 29 10C29 12.8 31.2 15 34 15C35.4 15 36.7 14.4 37.6 13.5V15H40V5H37.6V6.5C36.7 5.6 35.4 5 34 5ZM34.3 7.8C35.8 7.8 37 9 37 10.5C37 12 35.8 13.2 34.3 13.2C32.8 13.2 31.6 12 31.6 10.5C31.6 9 32.8 7.8 34.3 7.8Z" fill="#004B87"/>
                      <path d="M47 5C44.2 5 42 7.2 42 10C42 12.8 44.2 15 47 15C48.4 15 49.7 14.4 50.6 13.5V15H53V5H50.6V6.5C49.7 5.6 48.4 5 47 5ZM47.3 7.8C48.8 7.8 50 9 50 10.5C50 12 48.8 13.2 47.3 13.2C45.8 13.2 44.6 12 44.6 10.5C44.6 9 45.8 7.8 47.3 7.8Z" fill="#004B87"/>
                      <rect x="55" y="5" width="5" height="10" rx="2" fill="#48B749"/>
                    </svg>
                  </div>
                  {/* Tabby */}
                  <div className="h-9 px-4 rounded-lg bg-[#3BFFC1] flex items-center justify-center shadow-sm">
                    <span className="text-sm font-bold text-[#292929] tracking-tight">tabby</span>
                  </div>
                  {/* Tamara */}
                  <div className="h-9 px-3 rounded-lg bg-white flex items-center justify-center shadow-sm border border-slate-200">
                    <img src="/media/tamara-1-min.png" alt="Tamara" className="h-5 object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-white/40 uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-9 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-white/70"
            />
          </div>
        </div>
      </motion.div> */}
    </section>
  )
}
