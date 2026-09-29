import { motion } from 'framer-motion'
import { fadeUp } from './shared'

export function Timeline1997Section() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div {...fadeUp(0)} className="border-l border-[#12636B]/30 pl-8 pb-16 relative">
          <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-[#12636B]" />
          <h2 className="font-display text-4xl text-[#051315] mb-2">1997</h2>
          <h3 className="font-display text-3xl italic text-[#12636B] mb-12">I CROSSED INTO THE VALLEY.</h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>I entered Kashmir.</p>
            <p>I wanted to understand.</p>
            <p>But understanding Kashmir from a distance and living among its people were two very different things.</p>
            <p>Gradually, Kashmir began teaching me something that no university could have taught me.</p>
            <p className="mt-8 font-bold">Listen before speaking.</p>
            <p className="font-bold">Enter people's lives before trying to enter their problems.</p>
            <p className="font-bold">Never demand trust.</p>
            <p className="font-bold">Earn it.</p>
            <p className="font-bold">And earning trust takes time.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
