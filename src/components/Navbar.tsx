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
      <div className="w-full px-6 md:px-8 lg:px-12 flex items-center justify-between h-20 md:h-24 transition-all duration-300">
        <Link to="/" className="flex items-center shrink-0 z-50 relative" onClick={() => setIsOpen(false)}>
          <img 
            src="/images/logo.png" 
            alt="BWF Logo" 
            className={`h-[65px] md:h-[75px] w-auto object-contain transition-all duration-300 ${isOpen ? 'scale-105 origin-left' : ''}`} 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-[13px] md:text-[14px] font-medium transition-colors duration-300 group ${
                isActive(link.path) ? 'text-bwf-teal' : 'text-bwf-deep/70 hover:text-bwf-deep'
              }`}
            >
              {link.name}
              {/* Subtle hover indicator */}
              <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-bwf-teal transition-transform duration-300 origin-left ${
                isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 z-50 relative transition-colors duration-300 ${isOpen ? 'text-bwf-ivory' : 'text-bwf-deep'}`}
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
            className="md:hidden fixed inset-0 bg-[#051315] z-40 overflow-hidden flex flex-col pt-24 pb-8 px-6"
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
                  <Link
                    to={link.path}
                    className={`font-display text-4xl sm:text-5xl tracking-wide transition-colors duration-300 block ${
                      isActive(link.path) ? 'text-bwf-gold italic' : 'text-bwf-ivory hover:text-bwf-ivory/70'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
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
