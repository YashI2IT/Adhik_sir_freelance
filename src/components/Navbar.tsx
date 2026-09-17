import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

// --- Navigation Data Structure ---

type NavChild = {
  name: string
  path: string
  external?: boolean
}

type NavItem = {
  name: string
  path?: string
  external?: boolean
  children?: NavChild[]
}

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About Adhik', path: '/about' },
  {
    name: 'Journey',
    children: [
      { name: 'His Journey', path: '/journey' },
      { name: 'The Inner Journey', path: '/inner-journey' },
    ],
  },
  {
    name: 'Work & Impact',
    children: [
      { name: 'His Work', path: '/work' },
      { name: 'His Impact', path: '/impact' },
    ],
  },
  { name: 'Recognition', path: '/recognition' },
  {
    name: 'Reflections',
    children: [
      { name: 'The Heart of the Cause', path: '/heart-of-the-cause' },
      { name: 'From Service to Witnessing', path: '/from-service-to-witnessing' },
      { name: 'Curing the Gash', path: '/curing-the-gash' },
      { name: 'Daughters Return to Their Soil', path: '/daughters-return-to-their-soil' },
      { name: 'Legacy Emerged', path: '/legacy' },
    ],
  },
  { name: 'Gallery & Media', path: '/gallery-media' },
  { name: 'Contact', path: '/contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Mobile accordion state
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)
  
  const location = useLocation()
  const { scrollY } = useScroll()

  const isActive = (path?: string) => path ? location.pathname === path : false
  const isChildActive = (children?: NavChild[]) => 
    children ? children.some(child => location.pathname === child.path) : false

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

  // Close menus on route change or Escape
  useEffect(() => {
    setIsOpen(false)
    setExpandedMenu(null)
  }, [location.pathname])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur()
        }
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

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
          ? 'bg-[#F7F6F1]/90 backdrop-blur-md border-b border-[#0D343A]/10 shadow-sm'
          : 'bg-[#F7F6F1] border-b border-transparent'
      }`}
    >
      <div className="w-full px-4 lg:px-6 xl:px-8 2xl:px-12 flex items-center justify-between h-20 md:h-24 transition-all duration-300">
        
        {/* LOGO - LEFT */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0 flex items-center z-50 relative"
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center" aria-label="Home">
            <img src="/images/logo.png" alt="Adhik Kadam Logo" className="h-12 md:h-14 lg:h-16 w-auto object-contain" />
          </Link>
        </motion.div>

        {/* NAVIGATION - CENTER (Desktop) */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
          }}
          className="hidden xl:flex flex-1 justify-center items-center gap-5 2xl:gap-8 px-4"
        >
          {navItems.map((item) => {
            const hasChildren = !!item.children
            const active = isActive(item.path) || isChildActive(item.children)
            const isHovered = expandedMenu === item.name

            return (
              <motion.div
                key={item.name}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                className="relative"
                onMouseEnter={() => hasChildren && setExpandedMenu(item.name)}
                onMouseLeave={() => hasChildren && setExpandedMenu(null)}
              >
                {hasChildren ? (
                  // Dropdown Trigger
                  <button 
                    className={`flex items-center gap-1.5 py-6 text-[12px] 2xl:text-[13px] font-medium tracking-wide transition-colors duration-300 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12636B] rounded-sm ${
                      active ? 'text-[#12636B]' : 'text-[#0D343A]/70 hover:text-[#0D343A]'
                    }`}
                    aria-haspopup="true"
                    aria-expanded={isHovered}
                    onClick={() => setExpandedMenu(isHovered ? null : item.name)}
                  >
                    {item.name}
                    <ChevronDown size={12} className={`transition-transform duration-300 ${isHovered ? '-rotate-180' : ''} ${active ? 'text-[#12636B]' : 'opacity-70'}`} />
                    
                    {/* Active Indicator Line */}
                    <span className={`absolute bottom-4 left-0 w-full h-[1px] bg-[#12636B] transition-transform duration-300 origin-left ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`} />
                  </button>
                ) : (
                  // Direct Link
                  item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative flex py-6 text-[12px] 2xl:text-[13px] font-medium tracking-wide transition-colors duration-300 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12636B] rounded-sm group ${
                        active ? 'text-[#12636B]' : 'text-[#0D343A]/70 hover:text-[#0D343A]'
                      }`}
                    >
                      {item.name}
                      <span className={`absolute bottom-4 left-0 w-full h-[1px] bg-[#12636B] transition-transform duration-300 origin-left ${
                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`} />
                    </a>
                  ) : (
                    <Link
                      to={item.path!}
                      className={`relative flex py-6 text-[12px] 2xl:text-[13px] font-medium tracking-wide transition-colors duration-300 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12636B] rounded-sm group ${
                        active ? 'text-[#12636B]' : 'text-[#0D343A]/70 hover:text-[#0D343A]'
                      }`}
                    >
                      {item.name}
                      <span className={`absolute bottom-4 left-0 w-full h-[1px] bg-[#12636B] transition-transform duration-300 origin-left ${
                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`} />
                    </Link>
                  )
                )}

                {/* Dropdown Menu */}
                {hasChildren && (
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div 
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                          hidden: { opacity: 0, y: 5, transition: { staggerChildren: 0.02, staggerDirection: -1 } },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.2, staggerChildren: 0.04, delayChildren: 0.05 } }
                        }}
                        className="absolute top-[80%] left-1/2 -translate-x-1/2 mt-2 min-w-[240px] bg-white border border-[#0D343A]/10 shadow-[0_10px_30px_-10px_rgba(13,52,58,0.1)] rounded-md flex flex-col z-50 overflow-hidden"
                      >
                        <div className="absolute -top-3 left-0 w-full h-4 bg-transparent" /> {/* Invisible bridge */}
                        {item.children?.map((child, index) => {
                          const isChildActive = location.pathname === child.path
                          return (
                            <motion.div
                              key={child.path}
                              variants={{
                                hidden: { opacity: 0, x: -10 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } }
                              }}
                              className={`border-b border-[#0D343A]/5 last:border-none`}
                            >
                              <Link
                                to={child.path}
                                onClick={() => setExpandedMenu(null)}
                                className={`group flex items-center justify-between px-6 py-4 text-[13px] font-medium transition-all duration-300 focus:outline-none ${
                                  isChildActive 
                                    ? 'text-[#12636B] bg-[#0D343A]/[0.02]' 
                                    : 'text-[#0D343A]/70 hover:text-[#12636B] hover:bg-[#0D343A]/[0.02]'
                                }`}
                              >
                                <span className={`transition-transform duration-300 ${isChildActive ? 'translate-x-1' : 'group-hover:translate-x-1'}`}>
                                  {child.name}
                                </span>
                                <span className={`w-1.5 h-1.5 rounded-full bg-[#12636B] transition-all duration-300 ${
                                  isChildActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
                                }`} />
                              </Link>
                            </motion.div>
                          )
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* SOCIAL ICONS - RIGHT */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="hidden xl:flex flex-shrink-0 items-center justify-end gap-3"
        >
          <a href="https://www.facebook.com/share/19VP8TJcXH/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            className="w-8 h-8 rounded-full border border-[#0D343A]/15 flex items-center justify-center text-[#0D343A]/60 hover:bg-[#0D343A] hover:text-[#F7F6F1] hover:border-[#0D343A] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12636B]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/adhik.kadam777?stkn=bTJ6bDZvdW4weWp0" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="w-8 h-8 rounded-full border border-[#0D343A]/15 flex items-center justify-center text-[#0D343A]/60 hover:bg-[#0D343A] hover:text-[#F7F6F1] hover:border-[#0D343A] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12636B]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="https://x.com/adhikadhik" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
            className="w-8 h-8 rounded-full border border-[#0D343A]/15 flex items-center justify-center text-[#0D343A]/60 hover:bg-[#0D343A] hover:text-[#F7F6F1] hover:border-[#0D343A] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12636B]">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </a>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          className={`xl:hidden p-2 z-50 relative transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B59A63] rounded-md ${isOpen ? 'text-[#F7F6F1]' : 'text-[#0D343A]'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
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
            className="xl:hidden fixed inset-0 bg-[#051315] z-40 overflow-hidden flex flex-col pt-28 pb-8 px-6 md:px-12"
          >
            {/* Elegant dark overlay */}
            <div className="absolute inset-0 bg-[#0D343A]/30 backdrop-blur-3xl pointer-events-none" />
            
            <motion.div 
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } }
              }}
              className="relative z-10 flex flex-col gap-2 h-full overflow-y-auto pr-2 custom-scrollbar"
            >
              {navItems.map((item) => {
                const hasChildren = !!item.children
                const active = isActive(item.path) || isChildActive(item.children)
                const isExpanded = expandedMenu === item.name

                return (
                  <motion.div
                    key={item.name}
                    variants={{
                      closed: { opacity: 0, x: -20 },
                      open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
                    }}
                    className="border-b border-white/5 py-3"
                  >
                    {hasChildren ? (
                      <div>
                        <button
                          onClick={() => setExpandedMenu(isExpanded ? null : item.name)}
                          className={`w-full flex items-center justify-between font-display text-3xl sm:text-4xl tracking-wide transition-colors duration-300 focus:outline-none ${
                            active ? 'text-[#B59A63] italic' : 'text-[#F7F6F1] hover:text-[#F7F6F1]/70'
                          }`}
                          aria-expanded={isExpanded}
                        >
                          {item.name}
                          <ChevronDown size={24} strokeWidth={1.5} className={`transition-transform duration-300 ${isExpanded ? '-rotate-180' : ''} opacity-50`} />
                        </button>
                        
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-4 pt-6 pb-2 pl-4 border-l border-white/10 ml-2">
                                {item.children!.map((child) => (
                                  <Link
                                    key={child.path}
                                    to={child.path}
                                    className={`text-lg md:text-xl font-light tracking-wide transition-colors ${
                                      location.pathname === child.path 
                                        ? 'text-[#B59A63]' 
                                        : 'text-[#F7F6F1]/70 hover:text-[#F7F6F1]'
                                    }`}
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      item.external ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`font-display text-3xl sm:text-4xl tracking-wide transition-colors duration-300 block text-[#F7F6F1] hover:text-[#F7F6F1]/70`}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.path!}
                          className={`font-display text-3xl sm:text-4xl tracking-wide transition-colors duration-300 block ${
                            active ? 'text-[#B59A63] italic' : 'text-[#F7F6F1] hover:text-[#F7F6F1]/70'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </motion.div>
                )
              })}
              
              <motion.div 
                variants={{
                  closed: { opacity: 0 },
                  open: { opacity: 1, transition: { delay: 0.6, duration: 0.5 } }
                }}
                className="mt-12 pt-8"
              >
                <div className="w-12 h-[1px] bg-[#B59A63]/30 mb-6" />
                <p className="text-[#F7F6F1]/50 text-[11px] uppercase tracking-widest font-bold mb-4">
                  Follow Adhik
                </p>
                <div className="flex gap-4 mb-8">
                  <a href="https://www.facebook.com/share/19VP8TJcXH/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                    className="w-12 h-12 rounded-full border border-[#F7F6F1]/20 flex items-center justify-center text-[#F7F6F1]/70 hover:border-[#F7F6F1] hover:text-[#F7F6F1] transition-all duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/adhik.kadam777?stkn=bTJ6bDZvdW4weWp0" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                    className="w-12 h-12 rounded-full border border-[#F7F6F1]/20 flex items-center justify-center text-[#F7F6F1]/70 hover:border-[#F7F6F1] hover:text-[#F7F6F1] transition-all duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a href="https://x.com/adhikadhik" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
                    className="w-12 h-12 rounded-full border border-[#F7F6F1]/20 flex items-center justify-center text-[#F7F6F1]/70 hover:border-[#F7F6F1] hover:text-[#F7F6F1] transition-all duration-300">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  </a>
                </div>
                <p className="text-[#F7F6F1]/50 text-[11px] uppercase tracking-widest font-bold mb-3">
                  Get in Touch
                </p>
                <a href="mailto:info@borderlessworldfoundation.org" className="text-[#F7F6F1] text-base tracking-wide hover:text-[#B59A63] transition-colors">
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
