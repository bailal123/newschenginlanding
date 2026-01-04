import { motion } from 'framer-motion'
import { Container } from '../components/Container'

const countries = [
  { name: 'France', code: 'FR', popular: true },
  { name: 'Germany', code: 'DE', popular: true },
  { name: 'Italy', code: 'IT', popular: true },
  { name: 'Spain', code: 'ES', popular: true },
  { name: 'Netherlands', code: 'NL', popular: true },
  { name: 'Switzerland', code: 'CH', popular: true },
  { name: 'Austria', code: 'AT' },
  { name: 'Belgium', code: 'BE' },
  { name: 'Czech Republic', code: 'CZ' },
  { name: 'Denmark', code: 'DK' },
  { name: 'Estonia', code: 'EE' },
  { name: 'Finland', code: 'FI' },
  { name: 'Greece', code: 'GR' },
  { name: 'Hungary', code: 'HU' },
  { name: 'Iceland', code: 'IS' },
  { name: 'Latvia', code: 'LV' },
  { name: 'Liechtenstein', code: 'LI' },
  { name: 'Lithuania', code: 'LT' },
  { name: 'Luxembourg', code: 'LU' },
  { name: 'Malta', code: 'MT' },
  { name: 'Norway', code: 'NO' },
  { name: 'Poland', code: 'PL' },
  { name: 'Portugal', code: 'PT' },
  { name: 'Slovakia', code: 'SK' },
  { name: 'Slovenia', code: 'SI' },
  { name: 'Sweden', code: 'SE' },
  { name: 'Croatia', code: 'HR' },
  { name: 'Bulgaria', code: 'BG' },
  { name: 'Romania', code: 'RO' },
]

const popularDestinations = countries.filter(c => c.popular)

export function SchengenCountries() {
  return (
    <section id="countries" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-400/5 rounded-full blur-3xl" />
      </div>
      
      <Container className="relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              29 Schengen Countries
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              One Visa, <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Endless</span>{' '}
              <span className="gold-accent">Destinations</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Unlock access to 29 European countries with a single Schengen visa. 
              Travel freely across the most beautiful destinations in the world.
            </p>
          </motion.div>
        </div>

        {/* Flags Grid - Main Display */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16"
        >
          {/* Central Globe Element */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 shadow-2xl shadow-blue-500/30 flex items-center justify-center animate-pulse-slow">
                <div className="text-center">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-white/90 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-white font-bold text-xs sm:text-sm tracking-wider">SCHENGEN</div>
                </div>
              </div>
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping" style={{ animationDuration: '3s' }} />
              <div className="absolute -inset-4 rounded-full border border-blue-300/20" />
              <div className="absolute -inset-8 rounded-full border border-blue-200/10" />
            </div>
          </div>

          {/* Flags Circular Layout */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
            {countries.map((country, i) => (
              <motion.a
                key={country.code}
                href="https://wa.me/971568456002"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5, rotateY: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                whileHover={{ scale: 1.15, y: -5, zIndex: 50 }}
                className="group relative z-10 hover:z-50"
                style={{ perspective: '1000px' }}
              >
                <div 
                  className={`
                    w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shadow-lg 
                    border-2 transition-all duration-300 cursor-pointer
                    ${country.popular 
                      ? 'border-amber-400/60 shadow-amber-200/50 ring-2 ring-amber-400/20' 
                      : 'border-white/80 hover:border-blue-400/60'}
                    hover:shadow-xl hover:shadow-blue-200/50
                    ${i % 2 === 0 ? 'animate-[flipRight_8s_ease-in-out_infinite]' : 'animate-[flipLeft_8s_ease-in-out_infinite]'}
                  `}
                  style={{ 
                    animationDelay: `${i * 0.2}s`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <img 
                    src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w160/${country.code.toLowerCase()}.png 2x`}
                    alt={`${country.name} flag`}
                    width="64"
                    height="64"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 z-[100] pointer-events-none">
                  <div className="bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg">
                    {country.name}
                    {country.popular && (
                      <span className="ml-1.5 text-amber-400">★</span>
                    )}
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Popular Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Most Popular Destinations
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {popularDestinations.map((country, i) => (
              <motion.a
                key={country.code}
                href="https://wa.me/971568456002"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-5 py-3 bg-white rounded-full border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300"
              >
                <img 
                  src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                  alt={country.name}
                  width="28"
                  height="20"
                  className="w-7 h-5 rounded object-cover shadow-sm"
                  loading="lazy"
                  decoding="async"
                />
                <span className="font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">
                  {country.name}
                </span>
                <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-2xl shadow-blue-500/30">
            <div className="text-white text-center sm:text-left">
              <p className="text-blue-100 text-sm font-medium mb-1">Ready to explore Europe?</p>
              <p className="text-xl sm:text-2xl font-bold">Start Your Visa Application Today</p>
            </div>
            <a href="https://wa.me/971568456002" target="_blank" rel="noopener noreferrer" className="btn-premium bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 shadow-lg">
              Apply Now
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
