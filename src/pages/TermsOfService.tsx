import { Container } from '../components/Container'
import { motion } from 'framer-motion'

export function TermsOfService() {
  return (
    <div className="min-h-dvh bg-slate-950 text-white">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-slate-900/20">
        <Container>
          <div className="flex items-center justify-between py-4">
            <a href="/" className="flex items-center gap-3">
              <img src="./public/media/logo.png" alt="SchengenDubai" className="w-10 h-10 rounded-xl shadow-lg shadow-amber-500/30 object-contain" />
              <span className="text-lg font-bold text-white tracking-tight">Schengen<span className="text-amber-400">Dubai</span></span>
            </a>
            <a href="/" className="text-sm font-medium text-white/80 hover:text-white transition">← Back to Home</a>
          </div>
        </Container>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
            <p className="text-slate-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' , year: 'numeric' })}</p>

            <div className="prose prose-invert prose-slate max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">1. Agreement to Terms</h2>
                <p className="text-slate-300 leading-relaxed">
                  By accessing or using the services of Schengen Agent Dubai ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">2. Description of Services</h2>
                <p className="text-slate-300 leading-relaxed mb-4">Schengen Agent Dubai provides the following services:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Visa appointment booking assistance for Schengen countries</li>
                  <li>Document preparation and review</li>
                  <li>Application form completion assistance</li>
                  <li>Travel insurance guidance</li>
                  <li>General consultation on visa requirements</li>
                </ul>
                <p className="text-slate-300 leading-relaxed mt-4 font-semibold bg-amber-500/10 p-4 rounded-lg border border-amber-500/20">
                  <strong>Important:</strong> We are a private appointment assistance service. We are NOT affiliated with any government embassy, consulate, or visa application center. Visa approval decisions are made solely by the respective embassies and consulates.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">3. No Guarantee of Visa Approval</h2>
                <p className="text-slate-300 leading-relaxed">
                  Our services assist with appointment booking and document preparation only. We do not and cannot guarantee visa approval. The final decision on visa applications rests solely with the respective embassy or consulate. By using our services, you acknowledge and accept this limitation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">4. User Responsibilities</h2>
                <p className="text-slate-300 leading-relaxed mb-4">When using our services, you agree to:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Submit genuine documents only</li>
                  <li>Respond promptly to requests for additional information</li>
                  <li>Attend scheduled appointments on time</li>
                  <li>Comply with all embassy/consulate requirements</li>
                  <li>Not use our services for any unlawful purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">5. Fees and Payment</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Our service fees are clearly displayed before you confirm your booking. Payment terms:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Full payment is required at the time of booking</li>
                  <li>We accept Visa, Mastercard, Apple Pay, Google Pay, PayPal, Mada, Tabby, and Tamara</li>
                  <li>All prices are in AED unless otherwise stated</li>
                  <li>Embassy/consulate fees are separate and paid directly to them</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">6. Refund Policy</h2>
                <p className="text-slate-300 leading-relaxed mb-4">Our refund policy is as follows:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li><strong>Before Appointment Booking:</strong> Full refund minus processing fees</li>
                  <li><strong>After Appointment Booking:</strong> 50% refund if cancelled more than 48 hours before the appointment</li>
                  <li><strong>Within 48 Hours:</strong> No refund for cancellations within 48 hours of the appointment</li>
                  <li><strong>Visa Rejection:</strong> No refund is provided if your visa application is rejected</li>
                  <li><strong>No-Show:</strong> No refund for missed appointments</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">7. Rescheduling</h2>
                <p className="text-slate-300 leading-relaxed">
                  Appointment rescheduling is subject to availability and may incur additional fees. Rescheduling requests must be made at least 72 hours before the original appointment date. We cannot guarantee that rescheduling will always be possible.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">8. Limitation of Liability</h2>
                <p className="text-slate-300 leading-relaxed">
                  To the maximum extent permitted by law, Schengen Agent Dubai shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses, resulting from your use of our services, visa rejection, delayed appointments, or any other matter related to our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">9. Intellectual Property</h2>
                <p className="text-slate-300 leading-relaxed">
                  All content on our website, including text, graphics, logos, and images, is the property of Schengen Agent Dubai and is protected by intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">10. Privacy</h2>
                <p className="text-slate-300 leading-relaxed">
                  Your use of our services is also governed by our <a href="/privacy" className="text-amber-400 hover:underline">Privacy Policy</a>, which describes how we collect, use, and protect your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">11. Modifications to Terms</h2>
                <p className="text-slate-300 leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">12. Governing Law</h2>
                <p className="text-slate-300 leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in Dubai, UAE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">13. Contact Information</h2>
                <p className="text-slate-300 leading-relaxed">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-6 bg-slate-900/50 rounded-xl border border-slate-800">
                  <p className="text-slate-300"><strong>Business Name:</strong> RIEAYAH ALMALAKIA TECHNICAL SERVICES EST</p>
                  <p className="text-slate-300"><strong>Email:</strong> info@schengenagentdubai.com</p>
                  <p className="text-slate-300"><strong>Phone:</strong> +971 56 845 6002</p>
                  <p className="text-slate-300"><strong>WhatsApp:</strong> +971 56 845 6002</p>
                  <p className="text-slate-300"><strong>Location:</strong> Dubai, UAE</p>
                </div>
              </section>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-white/10">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Schengen Agent Dubai UAE. All rights reserved.
            </p>
             <p className="text-slate-600 text-xs mt-1">
              Developed by <span className="text-amber-400/80">Belal Bakrly</span>
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
              <a href="/terms" className="text-amber-400">Terms of Service</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}
