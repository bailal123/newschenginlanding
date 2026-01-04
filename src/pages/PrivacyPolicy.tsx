import { Container } from '../components/Container'
import { motion } from 'framer-motion'

export function PrivacyPolicy() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-slate-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

            <div className="prose prose-invert prose-slate max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">1. Introduction</h2>
                <p className="text-slate-300 leading-relaxed">
                  Welcome to Schengen Agent Dubai ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">2. Information We Collect</h2>
                <p className="text-slate-300 leading-relaxed mb-4">We may collect the following types of information:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, nationality, passport details, travel dates, and other information you provide when filling out our forms.</li>
                  <li><strong>Payment Information:</strong> Credit card details, billing address, and transaction history processed through secure payment gateways.</li>
                  <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, and other analytical data.</li>
                  <li><strong>Communication Data:</strong> Records of correspondence when you contact us via email, phone, or WhatsApp.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">3. How We Use Your Information</h2>
                <p className="text-slate-300 leading-relaxed mb-4">We use the collected information for:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Processing your visa appointment requests and document preparation</li>
                  <li>Communicating with you about your application status</li>
                  <li>Sending appointment confirmations and reminders</li>
                  <li>Processing payments for our services</li>
                  <li>Improving our website and services</li>
                  <li>Responding to your inquiries and support requests</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">4. Information Sharing</h2>
                <p className="text-slate-300 leading-relaxed mb-4">We may share your information with:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li><strong>Embassy/Consulate Systems:</strong> To book your visa appointments as requested</li>
                  <li><strong>Payment Processors:</strong> To process your payments securely (Tabby, Tamara, Visa, Mastercard, etc.)</li>
                  <li><strong>Service Providers:</strong> Third parties who assist in our operations</li>
                  <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                </ul>
                <p className="text-slate-300 leading-relaxed mt-4">
                  We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">5. Data Security</h2>
                <p className="text-slate-300 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes SSL encryption, secure servers, and restricted access to personal data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">6. Data Retention</h2>
                <p className="text-slate-300 leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Typically, we retain client records for up to 3 years after the last transaction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">7. Your Rights</h2>
                <p className="text-slate-300 leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Access your personal data we hold</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data (subject to legal requirements)</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Request a copy of your data in a portable format</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">8. Cookies</h2>
                <p className="text-slate-300 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">9. Third-Party Links</h2>
                <p className="text-slate-300 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any linked websites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">10. Changes to This Policy</h2>
                <p className="text-slate-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">11. Contact Us</h2>
                <p className="text-slate-300 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-4 p-6 bg-slate-900/50 rounded-xl border border-slate-800">
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
              <a href="/privacy" className="text-amber-400">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}
