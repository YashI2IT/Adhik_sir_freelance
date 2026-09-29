import { motion } from 'framer-motion'
import { fadeUp } from './shared'

export function ServiceToWitnessingSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div {...fadeUp(0)} className="py-16 border-t border-[#0D343A]/10 mt-16">
          <h3 className="font-display text-4xl text-[#051315] mb-8">
            FROM SERVICE<br/>TO WITNESSING.
          </h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>When I was young, I thought service meant helping another person.</p>
            <p>Later, I thought it meant solving problems.</p>
            <p>Then I understood that sustainable change means creating systems through which people rebuild their own lives.</p>
            <p>Today, I understand service somewhat differently.</p>
            <p>Service is also about witnessing.</p>
            <p>Being present.</p>
            <p>Walking beside another human being without always believing you have the answer.</p>
            <p>And allowing that encounter—</p>
            <p className="font-display text-2xl text-[#12636B] pt-4">TO TRANSFORM YOU TOO.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
