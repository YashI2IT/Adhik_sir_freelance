import { motion } from 'framer-motion'
import { fadeUp } from './shared'

export function AlumnaeSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div {...fadeUp(0)} className="py-16">
          <h3 className="font-display text-3xl md:text-4xl text-[#051315] mb-8">
            WHEN THE PERSON<br/>YOU ONCE SERVED<br/>STANDS BESIDE YOU AS A LEADER.
          </h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>Girls who entered our homes as vulnerable children grew up.</p>
            <p>They studied.</p>
            <p>They graduated.</p>
            <p>They became doctors.</p>
            <p>Nurses.</p>
            <p>Teachers.</p>
            <p>Lawyers.</p>
            <p>Government employees.</p>
            <p>Professionals.</p>
            <p>Entrepreneurs.</p>
            <p>Breadwinners.</p>
            <p>Mothers.</p>
            <p>Community leaders.</p>
            <p>And some returned.</p>
            <p>Not as beneficiaries.</p>
            <p className="font-bold text-[#12636B] pt-4">AS COLLEAGUES.<br/>AS PROFESSIONALS.<br/>AS LEADERS.</p>
          </div>

          <h3 className="font-display text-3xl italic text-[#051315] mt-16 mb-8">THE CIRCLE OF CHANGE.</h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>If someone permanently remains a beneficiary, something in the development process remains unfinished.</p>
            <p>Real transformation begins when—</p>
            <p>The beneficiary becomes a stakeholder.</p>
            <p>The stakeholder becomes a leader.</p>
            <p>And the leader begins creating opportunities for somebody else.</p>
            <p>Today, many of the people carrying this work forward understand vulnerability not because they studied it—</p>
            <p className="font-display text-2xl text-[#12636B] pt-6">BUT BECAUSE THEY LIVED IT.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
