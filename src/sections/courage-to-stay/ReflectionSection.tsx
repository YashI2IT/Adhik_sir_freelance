import { motion } from 'framer-motion'
import { fadeUp } from './shared'

export function ReflectionSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div {...fadeUp(0)} className="py-16">
          <h3 className="font-display text-3xl italic text-[#051315] mb-8">
            PERHAPS I WAS ASKING<br/>THE WRONG QUESTION.
          </h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>For years people have asked me:</p>
            <p className="italic">“What have you done for Kashmir?”</p>
            <p>After three decades, I find myself asking something very different.</p>
            <p className="font-display text-3xl text-[#12636B] py-6">WHAT HAS KASHMIR<br/>DONE TO ME?</p>
            <p>It gave direction to an eighteen-year-old searching for meaning.</p>
            <p>It taught me patience.</p>
            <p>It tested my convictions.</p>
            <p>It broke many of my assumptions.</p>
            <p>It introduced me to suffering.</p>
            <p>But it also introduced me to extraordinary courage.</p>
            <p>Friendship.</p>
            <p>Generosity.</p>
            <p>Faith.</p>
            <p>Love.</p>
            <p>And belonging.</p>
            <p className="pt-8">Somewhere during this journey—</p>
            <p className="font-display text-4xl text-[#051315] py-4">KASHMIR STOPPED BEING<br/>THE PLACE WHERE I WORKED.</p>
            <p className="font-display text-4xl text-[#12636B] italic">IT BECAME A PLACE<br/>WHERE I BELONGED.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
