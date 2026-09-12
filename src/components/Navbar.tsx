import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/19VP8TJcXH/?mibextid=wwXIfr',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/adhik.kadam777?stkn=bTJ6bDZvdW4weWp0',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/adhikadhik',
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const location = useLocation()
  const { scrollY } = useScroll()

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Adhik', path: '/about' },
    { name: 'His Journey', path: '/journey' },
    { name: 'His Work', path: '/work' },
    { name: 'His Impact', path: '/impact' },
    { name: 'Recognition', path: '/recognition' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() || 0
    if (latest > previous && latest > 150) {
      setHidden(true)
      setIsOpen(false)
    } else {
      setHidden(false)
    }
    setIsScrolled(latest > 20)
  })

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      animate={hidden && !isOpen ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? 'bg-transparent'
          : isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-[0_1px_30px_rgba(5,19,21,0.08)] border-b border-bwf-deep/5'
          : 'bg-white border-b border-bwf-deep/5'
      }`}
    >
      {/* ── Top strip: social + tagline ──────────────── */}
      <div className={`hidden lg:flex items-center justify-between px-10 xl:px-16 py-2 border-b border-bwf-deep/5 transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden py-0 border-0' : 'opacity-100'}`}>
        <p className="text-[10px] tracking-[0.25em] uppercase text-bwf-deep/40 font-medium">
          Peacebuilder · Social Entrepreneur · Humanitarian
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-7 h-7 flex items-center justify-center text-bwf-deep/40 hover:text-bwf-deep transition-colors duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── Main bar: logo + nav + social ────────────── */}
      <div className="w-full px-6 md:px-8 lg:px-10 xl:px-16 flex items-center justify-between h-[68px] md:h-[76px]">

        {/* Logo */}
        <Link to="/" className="shrink-0 z-50 relative flex items-center" onClick={() => setIsOpen(false)}>
          <img
            src="/images/logo.png"
            alt="BWF Logo"
            className="h-[56px] md:h-[64px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav — centered */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-3 py-2 text-[12.5px] font-semibold tracking-wide transition-colors duration-200 rounded-sm group ${
                isActive(link.path)
                  ? 'text-bwf-teal'
                  : 'text-bwf-deep/65 hover:text-bwf-deep'
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-3 right-3 h-[1.5px] bg-bwf-gold rounded-full transition-transform duration-300 origin-left ${
                  isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Right side: social icons (desktop only) + hamburger */}
        <div className="flex items-center gap-3">
          {/* Social icons — desktop */}
          <div className="hidden lg:flex items-center gap-1.5 pl-2 border-l border-bwf-deep/10 ml-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-full flex items-center justify-center text-bwf-deep/50 hover:text-bwf-deep hover:bg-bwf-deep/8 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Hamburger (tablet + mobile) */}
          <button
            className={`lg:hidden p-2 z-50 relative transition-colors duration-300 ${isOpen ? 'text-bwf-ivory' : 'text-bwf-deep'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* ── Full-screen mobile menu ───────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden fixed inset-0 bg-[#051315] z-40 flex flex-col"
          >
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.3)_0%,transparent_60%)] pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full pt-28 pb-10 px-8 overflow-y-auto">
              {/* Nav links */}
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
                  closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
                }}
                className="flex flex-col gap-2"
              >
                {links.map((link) => (
                  <motion.div
                    key={link.path}
                    variants={{
                      closed: { opacity: 0, y: 16 },
                      open: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
                    }}
                  >
                    <Link
                      to={link.path}
                      className={`font-display text-[2.6rem] sm:text-5xl leading-tight tracking-wide block transition-colors duration-200 ${
                        isActive(link.path) ? 'text-bwf-gold italic' : 'text-bwf-ivory hover:text-bwf-ivory/60'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Bottom section */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="mt-auto pt-10 border-t border-bwf-ivory/10"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-bwf-ivory/40 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Get in Touch</p>
                    <a href="mailto:info@borderlessworldfoundation.org" className="text-bwf-ivory/80 text-sm tracking-wide hover:text-bwf-ivory transition-colors">
                      info@borderlessworldfoundation.org
                    </a>
                  </div>

                  <div className="flex gap-3">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-10 h-10 rounded-full border border-bwf-ivory/20 flex items-center justify-center text-bwf-ivory/60 hover:border-bwf-gold hover:text-bwf-gold transition-all duration-300"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
