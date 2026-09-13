import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { LegalModal, LegalDocType } from './LegalModal'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [legalModal, setLegalModal] = useState<LegalDocType>(null)


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } }
  }

  const FooterHeading = ({ title }: { title: string }) => (
    <div className="flex items-center gap-2.5 mb-6">
      <div className="w-[2px] h-[11px] bg-bwf-gold shrink-0" />
      <h3 className="text-[10px] font-bold tracking-[0.22em] uppercase text-bwf-ivory/90">{title}</h3>
    </div>
  )

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <li>
      <Link
        to={to}
        className="text-bwf-ivory/55 text-[13px] hover:text-bwf-ivory transition-colors duration-250 inline-block py-1 font-medium tracking-wide"
      >
        {children}
      </Link>
    </li>
  )

  const SocialIcon = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full border border-bwf-ivory/20 flex items-center justify-center text-bwf-ivory/60 hover:border-bwf-ivory hover:text-[#051315] hover:bg-bwf-ivory transition-all duration-300"
    >
      {children}
    </a>
  )

  return (
    <>
      <footer className="bg-[#051315] text-bwf-ivory overflow-hidden">

        {/* ── Main content ─────────────────────────────────── */}
        <motion.div
          className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <div className="border-t border-bwf-ivory/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">

            {/* ── Brand ───────────────────────── */}
            <motion.div
              variants={itemVariants}
              className="py-10 lg:py-12 pr-0 sm:pr-8 border-b sm:border-b-0 border-bwf-ivory/10 sm:border-r"
            >
              <Link to="/" className="mb-5 block">
                <img
                  src="/images/logo.png"
                  alt="Borderless World Foundation"
                  className="h-16 w-auto object-contain"
                />
              </Link>

              <div className="mb-5 space-y-1.5">
                <p className="text-bwf-ivory/75 text-[13px] font-semibold tracking-[0.06em]">
                  Joining Hands. Building Bridges.
                </p>
                <div className="flex items-center gap-1.5 text-bwf-ivory/40 text-[10px] tracking-[0.18em] uppercase font-medium">
                  {['Rescue', 'Rebuild', 'Revive', 'Return'].map((w, i, arr) => (
                    <span key={w} className="flex items-center gap-1.5">
                      <span>{w}</span>
                      {i < arr.length - 1 && <span className="text-bwf-gold/50">·</span>}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-6 h-px bg-bwf-gold/35 mb-5" />

              <p className="text-bwf-ivory/30 text-[12px] italic font-display leading-relaxed max-w-[220px]">
                "Every ending is a new beginning when we walk with purpose."
              </p>
            </motion.div>

            {/* ── Navigation ──────────────────── */}
            <motion.div
              variants={itemVariants}
              className="py-10 lg:py-12 sm:px-8 border-b lg:border-b-0 border-bwf-ivory/10 lg:border-r"
            >
              <FooterHeading title="Navigation" />
              <ul className="flex flex-col gap-0.5">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Adhik</NavLink>
                <NavLink to="/journey">His Journey</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </ul>
            </motion.div>

            {/* ── Explore ─────────────────────── */}
            <motion.div
              variants={itemVariants}
              className="py-10 lg:py-12 lg:px-8 border-b sm:border-b-0 border-bwf-ivory/10 sm:border-r"
            >
              <FooterHeading title="Explore" />
              <ul className="flex flex-col gap-0.5">
                <NavLink to="/work">His Work</NavLink>
                <NavLink to="/impact">His Impact</NavLink>
                <NavLink to="/recognition">Recognition</NavLink>
                <NavLink to="/heart-of-the-cause">The Heart of the Cause</NavLink>
                <NavLink to="/legacy">Legacy</NavLink>
                <NavLink to="/inner-journey">The Inner Journey</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </ul>
            </motion.div>

            {/* ── Connect ─────────────────────── */}
            <motion.div
              variants={itemVariants}
              className="py-10 lg:py-12 sm:pl-8"
            >
              <FooterHeading title="Connect" />
              <p className="text-bwf-ivory/50 text-[13px] mb-6 leading-relaxed tracking-wide">
                Follow his work and stay connected with the community.
              </p>
              <div className="flex gap-3">
                <SocialIcon href="https://www.facebook.com/share/19VP8TJcXH/?mibextid=wwXIfr" label="Facebook">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com/adhik.kadam777?stkn=bTJ6bDZvdW4weWp0" label="Instagram">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="https://x.com/adhikadhik" label="X (Twitter)">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </SocialIcon>
              </div>
            </motion.div>
          </div>




          {/* ── Bottom bar ────────────────────────────────── */}
          <motion.div
            variants={itemVariants}
            className="py-6 sm:py-5 border-t border-bwf-ivory/10 flex flex-col lg:flex-row justify-between items-center gap-5 sm:gap-4 text-center lg:text-left"
          >
            <p className="text-[11px] text-bwf-ivory/40 tracking-widest uppercase">
              &copy; {currentYear} Philanthropist Adhik Kadam
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-5 text-[11px] text-bwf-ivory/40 tracking-wide font-medium">
              <button onClick={() => setLegalModal('privacy')} className="hover:text-bwf-ivory transition-colors">Privacy Policy</button>
              <span className="text-bwf-ivory/15 hidden sm:inline">|</span>
              <button onClick={() => setLegalModal('grievance')} className="hover:text-bwf-ivory transition-colors">Grievance</button>
              <span className="text-bwf-ivory/15 hidden sm:inline">|</span>
              <button onClick={() => setLegalModal('terms')} className="hover:text-bwf-ivory transition-colors">Terms & Conditions</button>
            </div>
          </motion.div>
        </motion.div>
      </footer>

      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </>
  )
}
