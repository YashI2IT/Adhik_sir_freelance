import { motion } from 'framer-motion'
import { fadeUp } from './shared'

export function Flood2014Section() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div {...fadeUp(0)} className="border-l border-[#12636B]/30 pl-8 pb-16 relative">
          <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-[#12636B]" />
          <h2 className="font-display text-4xl text-[#051315] mb-2">2014</h2>
          <h3 className="font-display text-3xl italic text-[#12636B] mb-12">THEN KASHMIR WENT UNDER WATER.</h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>The floods devastated large parts of the Valley.</p>
            <p>I experienced the disaster personally.</p>
            <p>After reaching safety, the work began again.</p>
            <p>Community kitchens.</p>
            <p>Relief.</p>
            <p>Coordination.</p>
            <p>Support.</p>
            <p>Once again, crisis reinforced something we had already learned.</p>
            <p className="font-bold">When people know you will remain after the crisis, relief becomes relationship.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
