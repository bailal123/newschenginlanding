import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { Container } from '../components/Container'

export function FinalCTA() {
  const reduceMotion = useReducedMotion()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    country: '',
    destination: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Track form submission conversion
    window.trackFormSubmit?.()
    
    setSubmitted(true)
  }

  const fadeUp = {
    initial: reduceMotion ? {} : { opacity: 0, y: 30 },
    whileInView: reduceMotion ? {} : { opacity: 1, y: 0 },
    viewport: { once: true },
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden section-gradient-dark">
      {/* Decorative Elements */}
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      
      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-6 border border-white/10">
              Start Today
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Start Your Journey.<br />
              <span className="gold-accent">Get Professional Help.</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Get professional help for your Schengen appointment in Dubai from trusted experts.
              Simple process, quick results, and complete guidance every step of the way.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                { icon: '⚡', text: 'Response within 24 hours' },
                { icon: '📋', text: 'Expert document preparation' },
                { icon: '📅', text: 'Quick appointment booking' },
                { icon: '💬', text: 'Dubai-based trusted team' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-white/80">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:+971568456002" 
                onClick={() => window.trackCallClick?.()}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 hover:bg-white/15 transition"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">+971 56 845 6002</span>
              </a>
              <a 
                href="https://wa.me/971568456002" 
                onClick={() => window.trackWhatsAppClick?.()}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/30 transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/20">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                  <p className="text-slate-600 mb-6">
                    Our visa experts will contact you within 24 hours with your 
                    personalized eligibility assessment.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Submit another request →
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Limited slots, book yours today</h3>
                    <p className="text-slate-500 text-sm">Get a clear answer about your Schengen visa assistance today.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input-premium"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">WhatsApp or Email</label>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        className="input-premium"
                        placeholder="+971... or email@example.com"
                      />
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* <div>
                        <label htmlFor="country-select" className="block text-sm font-medium text-slate-700 mb-1.5">Residency Country</label>
                        <select
                          id="country-select"
                          aria-label="Select your residency country"
                          required
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="input-premium"
                        >
                          <option value="">Select country</option>
                          <option value="UAE">UAE</option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Kuwait">Kuwait</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Oman">Oman</option>
                          <option value="Other">Other</option>
                        </select>
                      </div> */}
                      <div>
                        <label htmlFor="destination-select" className="block text-sm font-medium text-slate-700 mb-1.5">Destination</label>
                        <select
                          id="destination-select"
                          aria-label="Select your destination country"
                          required
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          className="input-premium"
                        >
                          <option value="">Select destination</option>
                          <option value="Austria">Austria</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Croatia">Croatia</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Denmark">Denmark</option>
                          <option value="Estonia">Estonia</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="Germany">Germany</option>
                          <option value="Greece">Greece</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Iceland">Iceland</option>
                          <option value="Italy">Italy</option>
                          <option value="Latvia">Latvia</option>
                          <option value="Liechtenstein">Liechtenstein</option>
                          <option value="Lithuania">Lithuania</option>
                          <option value="Luxembourg">Luxembourg</option>
                          <option value="Malta">Malta</option>
                          <option value="Netherlands">Netherlands</option>
                          <option value="Norway">Norway</option>
                          <option value="Poland">Poland</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Slovakia">Slovakia</option>
                          <option value="Slovenia">Slovenia</option>
                          <option value="Spain">Spain</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="Multiple">Multiple Countries</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <button type="submit" className="btn-premium btn-gold w-full mt-2">
                      Check My Eligibility
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                    
                    <p className="text-xs text-slate-400 text-center">
                      By submitting, you agree to our Privacy Policy and consent to be contacted about your visa consultant inquiry.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
