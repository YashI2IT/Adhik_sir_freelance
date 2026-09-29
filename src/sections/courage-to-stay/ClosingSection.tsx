import { motion } from 'framer-motion'
import { fadeUp } from './shared'

export function ClosingSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div {...fadeUp(0)} className="py-32 text-center relative border-t border-[#0D343A]/10 mt-16">
          <h3 className="font-display text-4xl md:text-5xl text-[#051315] mb-8">
            CHANGE DOES NOT ALWAYS<br/>BEGIN WITH POWER.
          </h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80 max-w-2xl mx-auto">
            <p>Sometimes it begins with an eighteen-year-old asking a question.</p>
            <p>With a journey into an unfamiliar land.</p>
            <p>With a survey that changes the person conducting it.</p>
            <p>With two girls needing a home.</p>
            <p>With someone opening a community kitchen.</p>
            <p>With a doctor answering a telephone call.</p>
            <p>With a young woman refusing to allow her circumstances to define her future.</p>
            <p>Or simply—</p>
            <p>with somebody deciding to stay when leaving would have been easier.</p>
            
            <p className="font-display text-4xl text-[#12636B] italic py-16">CHANGE BEGINS WITH ME.</p>
            
            <p>Not because one person can change the world.</p>
            <p>But because every meaningful change needs someone willing to begin.</p>
            <p>And perhaps the greatest responsibility of a changemaker is not to become the face of change.</p>
            <p>It is to create conditions in which others discover—</p>
            <p className="font-display text-3xl text-[#051315] py-8">THAT THEY CAN BECOME<br/>CHANGEMAKERS TOO.</p>
          </div>

          <div className="mt-32 border-t border-[#0D343A]/10 pt-16 inline-block">
            <p className="font-bold tracking-widest uppercase text-[#0D343A]">ADHIK KADAM</p>
            <p className="text-sm tracking-widest text-[#0D343A]/60 mt-2">Founder & Chairman Borderless World Foundation</p>
            <p className="text-sm tracking-widest text-[#0D343A]/60 mt-1 italic">Joining Hands. Building Bridges.</p>
            <p className="text-sm tracking-widest text-[#12636B] mt-8 font-bold">1995 — 2026</p>
            <p className="font-display text-2xl text-[#12636B] mt-6 italic">THE JOURNEY CONTINUES.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
