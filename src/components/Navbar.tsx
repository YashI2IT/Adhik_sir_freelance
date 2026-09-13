import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const location = useLocation()
  const { scrollY } = useScroll()

  type NavLink = { name: string; path: string; external?: boolean };

  const links: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Journey', path: '/journey' },
    { name: 'Work', path: '/work' },
    { name: 'Impact', path: '/impact' },
    { name: 'Recognition', path: '/recognition' },
    { name: 'Heart of the Cause', path: '/heart-of-the-cause' },
    { name: 'Legacy', path: '/legacy' },
    { name: 'Inner Journey', path: '/inner-journey' },
    { name: 'Gallery', path: '/gallery-media' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setIsOpen(false);
    } else {
      setHidden(false);
    }
    
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden && !isOpen ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isOpen
          ? 'bg-transparent border-b border-transparent'
          : isScrolled
          ? 'bg-bwf-ivory/80 backdrop-blur-md border-b border-bwf-deep/10 shadow-sm'
          : 'bg-bwf-ivory border-b border-transparent'
      }`}
    >
      <div className="w-full px-4 lg:px-6 xl:px-10 flex items-center justify-between h-20 md:h-28 transition-all duration-300">
        
        {/* LOGO - LEFT (flex-shrink: 0) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0 flex items-center z-50 relative"
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
            {/* Noticeably larger logo, slightly scaled down on lg to fit links */}
            <img src="/images/logo.png" alt="Adhik Kadam Logo" className="h-12 md:h-[60px] lg:h-[64px] w-auto object-contain" />
          </Link>
        </motion.div>

        {/* NAVIGATION - CENTER (flexible center area) */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
          }}
          className="hidden lg:flex flex-1 justify-center items-center gap-3 lg:gap-4 xl:gap-6 2xl:gap-8 px-4"
        >
          {links.map((link) =>
            link.external ? (
              <motion.a
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative text-[12px] xl:text-[13px] 2xl:text-[14px] font-medium tracking-wide transition-colors duration-300 group text-bwf-deep/70 hover:text-bwf-deep whitespace-nowrap`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-bwf-teal transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100`} />
              </motion.a>
            ) : (
              <motion.div
                key={link.path}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
              >
                <Link
                  to={link.path}
                  className={`relative text-[12px] xl:text-[13px] 2xl:text-[14px] font-medium tracking-wide transition-colors duration-300 group whitespace-nowrap ${
                    isActive(link.path) ? 'text-bwf-teal' : 'text-bwf-deep/70 hover:text-bwf-deep'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-bwf-teal transition-transform duration-300 origin-left ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              </motion.div>
            )
          )}
        </motion.div>

        {/* SOCIAL ICONS - RIGHT (flex-shrink: 0) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="hidden xl:flex flex-shrink-0 items-center justify-end gap-3"
        >
          <a href="https://www.facebook.com/share/19VP8TJcXH/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            className="w-8 h-8 rounded-full border border-bwf-deep/20 flex items-center justify-center text-bwf-deep/60 hover:bg-bwf-deep hover:text-bwf-ivory hover:border-bwf-deep transition-all duration-300">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/adhik.kadam777?stkn=bTJ6bDZvdW4weWp0" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="w-8 h-8 rounded-full border border-bwf-deep/20 flex items-center justify-center text-bwf-deep/60 hover:bg-bwf-deep hover:text-bwf-ivory hover:border-bwf-deep transition-all duration-300">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="https://x.com/adhikadhik" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
            className="w-8 h-8 rounded-full border border-bwf-deep/20 flex items-center justify-center text-bwf-deep/60 hover:bg-bwf-deep hover:text-bwf-ivory hover:border-bwf-deep transition-all duration-300">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </a>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden p-2 z-50 relative transition-colors duration-300 ${isOpen ? 'text-bwf-ivory' : 'text-bwf-deep'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={30} strokeWidth={1.5} /> : <Menu size={30} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Premium Full-Screen Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden fixed inset-0 bg-[#051315] z-40 overflow-hidden flex flex-col pt-24 pb-8 px-6"
          >
            <div className="absolute inset-0 bg-bwf-deep/20 backdrop-blur-2xl pointer-events-none" />
            
            <motion.div 
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="relative z-10 flex flex-col gap-6 mt-6 h-full overflow-y-auto"
            >
              {links.map((link) => (
                <motion.div
                  key={link.path}
                  variants={{
                    closed: { opacity: 0, x: -20 },
                    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
                  }}
                >
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-display text-4xl sm:text-5xl tracking-wide transition-colors duration-300 block text-bwf-ivory hover:text-bwf-ivory/70`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className={`font-display text-4xl sm:text-5xl tracking-wide transition-colors duration-300 block ${
                        isActive(link.path) ? 'text-bwf-gold italic' : 'text-bwf-ivory hover:text-bwf-ivory/70'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              
              <motion.div 
                variants={{
                  closed: { opacity: 0 },
                  open: { opacity: 1, transition: { delay: 0.6, duration: 0.5 } }
                }}
                className="mt-auto pt-10"
              >
                <div className="w-12 h-[1px] bg-bwf-gold/30 mb-6" />
                <p className="text-bwf-ivory/50 text-[11px] uppercase tracking-widest font-bold mb-4">
                  Follow Adhik
                </p>
                <div className="flex gap-3 mb-6">
                  <a href="https://www.facebook.com/share/19VP8TJcXH/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                    className="w-10 h-10 rounded-full border border-bwf-ivory/20 flex items-center justify-center text-bwf-ivory/60 hover:border-bwf-ivory hover:text-bwf-ivory transition-all duration-300">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/adhik.kadam777?stkn=bTJ6bDZvdW4weWp0" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                    className="w-10 h-10 rounded-full border border-bwf-ivory/20 flex items-center justify-center text-bwf-ivory/60 hover:border-bwf-ivory hover:text-bwf-ivory transition-all duration-300">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a href="https://x.com/adhikadhik" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
                    className="w-10 h-10 rounded-full border border-bwf-ivory/20 flex items-center justify-center text-bwf-ivory/60 hover:border-bwf-ivory hover:text-bwf-ivory transition-all duration-300">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  </a>
                </div>
                <p className="text-bwf-ivory/50 text-[11px] uppercase tracking-widest font-bold mb-3">
                  Get in Touch
                </p>
                <a href="mailto:info@borderlessworldfoundation.org" className="text-bwf-ivory text-sm tracking-wide">
                  info@borderlessworldfoundation.org
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
