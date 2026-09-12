import { motion } from 'framer-motion'
import { journeyData } from '../../data/timeline'
import { SectionLabel } from '../../components/SectionLabel'

export function JourneyHeroSection() {
  const { hero } = journeyData

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-bwf-deep">
      
      {/* Background image & overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <img src="/images/IMG_8773.jpg" alt="Journey Hero" className="w-full h-full object-cover opacity-60" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(166,124,82,0.15)_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-bwf-deep via-bwf-deep/40 to-transparent" />
      </div>

      <div className="container-bwf relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
        >
          <SectionLabel text={hero.label} className="justify-center flex" />
          
          <h1 className="type-display-xl text-bwf-ivory mb-8 leading-[1.1]">
            {hero.heading}
          </h1>
          
          <div className="w-16 h-px bg-bwf-gold mx-auto mb-8" />
          
          <p className="text-xl md:text-2xl text-bwf-ivory/80 leading-relaxed font-display max-w-2xl mx-auto">
            {hero.supporting}
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs tracking-widest uppercase text-bwf-ivory/50">Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-bwf-gold/50 to-transparent" />
      </motion.div>

    </section>
  )
}
