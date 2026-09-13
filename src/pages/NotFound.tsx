import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useSEO } from '../hooks/useSEO'
import { Link } from 'react-router-dom'
import { PageTransition } from '../components/PageTransition'

export default function NotFound() {
  useSEO({
    title: 'Page Not Found | Borderless World Foundation',
    description: 'The page you are looking for does not exist.',
    noindex: true
  })

  // Parallax logic
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    // Normalize to -1 to 1
    mouseX.set((clientX / innerWidth) * 2 - 1)
    mouseY.set((clientY / innerHeight) * 2 - 1)
  }

  const springConfig = { damping: 30, stiffness: 100 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Reverse mapping for outer circle (moves opposite to mouse)
  const circle1X = useTransform(springX, [-1, 1], [30, -30])
  const circle1Y = useTransform(springY, [-1, 1], [30, -30])
  
  // Direct mapping for inner circle (follows mouse)
  const circle2X = useTransform(springX, [-1, 1], [-20, 20])
  const circle2Y = useTransform(springY, [-1, 1], [-20, 20])

  // Very subtle mapping for the 404 text
  const textX = useTransform(springX, [-1, 1], [-10, 10])
  const textY = useTransform(springY, [-1, 1], [-10, 10])

  return (
    <PageTransition>
      <main 
        onMouseMove={handleMouseMove}
        className="min-h-[75vh] md:min-h-[85vh] flex flex-col items-center justify-center bg-bwf-ivory relative overflow-hidden px-4 py-20"
      >
      
      {/* Interactive Decorative background arcs */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] z-0">
        <motion.div 
          style={{ x: circle1X, y: circle1Y }}
          className="w-[120vw] h-[120vw] md:w-[70vw] md:h-[70vw] border-[1.5px] border-bwf-deep rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
        />
        <motion.div 
          style={{ x: circle2X, y: circle2Y }}
          className="w-[150vw] h-[150vw] md:w-[90vw] md:h-[90vw] border border-bwf-deep rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
        />
      </div>

      <div className="text-center relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Interactive 404 Number */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" as const }}
          style={{ x: textX, y: textY }}
          className="mb-8"
        >
          <h1 className="text-[120px] md:text-[220px] leading-none font-display text-bwf-teal select-none font-medium tracking-tight">
            404
          </h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" as const }}
            className="w-16 h-[2px] bg-bwf-gold/60 mx-auto mt-2 md:mt-4 origin-center" 
          />
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 pointer-events-none"
        >
          <h2 className="text-3xl md:text-5xl font-display text-bwf-deep mb-4 md:mb-6">
            This path doesn't exist.
          </h2>
          <p className="text-base md:text-lg text-bwf-deep/70">
            But there is always another way forward.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-20 md:mb-24 w-full sm:w-auto"
        >
          <Link 
            to="/"
            className="px-8 py-4 bg-bwf-teal text-bwf-ivory text-xs md:text-sm font-bold tracking-widest uppercase rounded-sm hover:bg-bwf-deep transition-colors duration-300 w-full sm:w-auto flex items-center justify-center"
          >
            Back to Home &rarr;
          </Link>
          <Link 
            to="/journey"
            className="px-8 py-4 border border-bwf-teal text-bwf-teal text-xs md:text-sm font-bold tracking-widest uppercase rounded-sm hover:bg-bwf-teal/5 transition-colors duration-300 w-full sm:w-auto flex items-center justify-center"
          >
            Explore the Journey &rarr;
          </Link>
        </motion.div>

        {/* Brand Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center pointer-events-none"
        >
          <span className="text-[12px] md:text-[13px] font-medium tracking-[0.14em] uppercase text-bwf-deep/40">
            Joining Hands. Building Bridges.
          </span>
        </motion.div>

      </div>
      </main>
    </PageTransition>
  )
}
