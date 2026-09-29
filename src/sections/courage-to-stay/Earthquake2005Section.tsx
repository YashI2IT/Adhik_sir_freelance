import { motion } from 'framer-motion'
import { fadeUp } from './shared'

export function Earthquake2005Section() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div {...fadeUp(0)} className="border-l border-[#12636B]/30 pl-8 pb-16 relative">
          <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-[#12636B]" />
          <h2 className="font-display text-4xl text-[#051315] mb-2">2005</h2>
          <h3 className="font-display text-3xl italic text-[#12636B] mb-12">WHEN THE EARTH SHOOK.</h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>The Kashmir earthquake brought another humanitarian emergency.</p>
            <p>Homes collapsed.</p>
            <p>Communities were displaced.</p>
            <p>Families were suddenly exposed to enormous uncertainty.</p>
            <p>Relief was necessary.</p>
            <p>But by then we had understood something important.</p>
            <p>Emergency response becomes stronger when relationships already exist before the emergency.</p>
            <p>We were not arriving in Kashmir.</p>
            <p className="font-display text-3xl text-[#12636B] mt-8">WE WERE ALREADY THERE.</p>
          </div>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80 mt-16 pt-16 border-t border-[#0D343A]/10">
            <p>YEARS PASSED.</p>
            <p>Homes grew.</p>
            <p>Girls went to school.</p>
            <p>Relationships deepened.</p>
            <p>Communities began trusting us.</p>
            <p>What had started as a small response was slowly becoming an institution.</p>
            <p>But then came another test.</p>
            <p>This time, the crisis was not natural.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
