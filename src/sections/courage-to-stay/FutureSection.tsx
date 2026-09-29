import { motion } from 'framer-motion'
import { fadeUp } from './shared'

export function FutureSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div {...fadeUp(0)} className="py-16">
          <h3 className="font-display text-4xl text-[#051315] mb-8">
            THE FUTURE IS NOT ABOUT<br/>MAKING BWF BIGGER.
          </h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>The deeper questions are different.</p>
            <p>Can we build institutions that eventually need less of their founders?</p>
            <p>Can children once considered vulnerable become tomorrow's institution-builders?</p>
            <p>Can communities become owners of their own solutions?</p>
            <p>Can compassion become infrastructure?</p>
            <p>Can service create leadership rather than dependency?</p>
            <p>Can today's beneficiary become tomorrow's changemaker?</p>
            <p className="font-display text-3xl italic text-[#12636B] pt-8">THAT IS THE FUTURE<br/>WE ARE TRYING TO BUILD.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
