import { motion } from 'framer-motion'
import { fadeUp } from './shared'

export function HeroSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">

        <motion.div {...fadeUp(0)} className="text-center">
          <h1 className="font-display text-5xl md:text-7xl text-[#051315] leading-tight mb-8">
            THE COURAGE TO STAY
          </h1>
          <p className="text-xl md:text-2xl font-light text-[#0D343A]/80 italic">
            Three Decades of Witnessing, Service & Belonging in Kashmir
          </p>
          <p className="mt-8 text-lg text-[#0D343A]/70 uppercase tracking-widest font-bold">
            Adhik Kadam
          </p>
          <p className="text-sm text-[#0D343A]/50 uppercase tracking-widest">
            Founder, Borderless World Foundation
          </p>
          <p className="mt-4 text-sm text-[#0D343A]/50 uppercase tracking-widest">
            1995 — 2026
          </p>
          <div className="mt-16 text-2xl font-display italic text-[#12636B]">
            CHANGE BEGINS WITH ME.
          </div>
        </motion.div>
        <motion.div {...fadeUp(0.1)} className="mt-20 w-full aspect-video bg-[#051315] overflow-hidden">
          <img src="/images/IMG_8648.jpg" alt="Kashmir Landscape" className="w-full h-full object-cover mix-blend-overlay" />
        </motion.div>

      </div>
    </section>
  )
}
