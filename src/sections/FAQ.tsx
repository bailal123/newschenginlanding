import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Container } from '../components/Container'

const faqs = [
  {
    question: 'What services do you offer for Schengen appointments in Dubai?',
    answer: 'We provide comprehensive support including document preparation, form filling, appointment booking, and complete guidance throughout your Schengen application process. Our Dubai-based team helps you prepare everything needed for a successful embassy visit.',
  },
  {
    question: 'How long does the Schengen appointment booking process take?',
    answer: 'Appointment availability varies by embassy and season. We work to secure the best available slots quickly. After your initial consultation, we provide a realistic timeline based on your destination country and current embassy workload.',
  },
  {
    question: 'What documents do I need for my Schengen appointment?',
    answer: 'Common requirements include: valid passport, recent photos, travel insurance, flight/accommodation bookings, bank statements (last 3-6 months), employment/business documents, and residency proof. We provide a personalized checklist tailored to your specific situation.',
  },
  {
    question: 'Can you help with tourism, business, and family travel?',
    answer: 'Yes! Whether it is tourism, business, or family travel, we guide you through every step. Our team has experience with all types of Schengen applications and will ensure your documents match your travel purpose.',
  },
  {
    question: 'Are you affiliated with any embassy or government authority?',
    answer: 'No. We are a private travel service provider offering document and appointment assistance. We are not affiliated with any embassy or government authority. Our role is to help you prepare and navigate the process smoothly.',
  },
  {
    question: 'Why should I choose your agency over others in Dubai?',
    answer: 'With 10+ years of experience, we are among the best travel agencies in Dubai for Schengen support. Our Dubai-based team offers personalized service, quick appointment booking, expert document preparation, and trusted guidance throughout your journey.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden section-gradient-light">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Got Questions?<br />
              <span className="gold-accent">We Have Answers.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Everything you need to know about Schengen appointments in Dubai, 
              our services, and how we can help. Can't find your answer? 
              Contact us directly.
            </p>
            
            <a href="#contact" className="btn-premium btn-primary">
              Ask a Question
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </motion.div>

          {/* Right Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`rounded-2xl border transition-all ${
                    isOpen 
                      ? 'bg-white border-blue-200 shadow-lg shadow-blue-500/5' 
                      : 'bg-white/50 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex items-center justify-between w-full px-6 py-5 text-left"
                  >
                    <span className={`font-semibold pr-4 ${isOpen ? 'text-blue-900' : 'text-slate-900'}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <svg 
                        className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
