import { Container } from '../components/Container'

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <Container>
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <picture>
                <source srcSet="/media/logo.webp" type="image/webp" />
                <img src="/media/logo.png" alt="SchengenDubai" width="40" height="40" loading="lazy" className="w-10 h-10 rounded-xl object-contain" />
              </picture>
              <span className="text-xl font-bold">Schengen<span className="text-amber-400">Dubai</span></span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Schengen appointment services in Dubai. Expert document preparation, 
              quick booking, and complete guidance for your European journey.
            </p>
            <div className="flex gap-3">
              {['facebook', 'instagram', 'linkedin', 'twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-white/50 rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Countries', 'Process', 'FAQ', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white transition text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@schengenagentdubai.com
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +971 56 845 6002
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Dubai, UAE
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-slate-200">Disclaimer:</strong> Schengen Agent Dubai is a private appointment assistance service. We are not affiliated with any government embassy or consulate. We assist clients in preparing and organizing their documentation and securing appointment slots. Visa approval decisions are made solely by the respective embassies and consulates. Our services do not guarantee visa approval.
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-slate-300 text-sm">
              Copyright © {new Date().getFullYear()} Schengen Agent Dubai UAE - Operated by RIEAYAH ALMALAKIA TECHNICAL SERVICES EST. All rights reserved.
            </p>
            <p className="text-slate-400 text-xs mt-1">
              Developed by <span className="text-amber-400">Belal Bakrly</span>
            </p>
          </div>
          <div className="flex gap-6 text-sm text-slate-300">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
