import { motion } from 'framer-motion'
import { fadeUp } from './shared'

export function EcosystemSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div {...fadeUp(0)} className="py-16">
          <h3 className="font-display text-4xl text-[#051315] mb-8">FROM A HOME<br/>TO AN ECOSYSTEM OF CARE.</h3>
          
          <div className="grid grid-cols-2 gap-4 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>Residential care.</p>
            <p>Education.</p>
            <p>Higher education.</p>
            <p>Healthcare.</p>
            <p>Skills.</p>
            <p>Livelihoods.</p>
            <p>Mobile Medical Units.</p>
            <p>Ambulances.</p>
            <p>Emergency response.</p>
            <p>Remote healthcare.</p>
            <p className="col-span-2">Community development.</p>
          </div>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80 mt-12">
            <p>What began as a response to vulnerable girls gradually evolved into an ecosystem built around one principle:</p>
            <p className="font-display text-3xl font-bold text-[#12636B] py-4">HUMAN DIGNITY.</p>
          </div>

          <h3 className="font-display text-3xl italic text-[#051315] mt-16 mb-8">HEALTHCARE HAD TO TRAVEL.</h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>We encountered another simple reality.</p>
            <p>Many people living in remote areas were not reaching hospitals.</p>
            <p>So we changed the question.</p>
            <p>Instead of asking:</p>
            <p className="italic">Why aren't patients reaching healthcare?</p>
            <p>We asked:</p>
            <p className="font-bold">WHY CAN'T HEALTHCARE REACH THEM?</p>
            <p>Mobile Medical Units began travelling into underserved communities.</p>
            <p>Ambulances reached difficult terrain.</p>
            <p>Healthcare moved towards people.</p>
            <p>And on Dal Lake, even the water became a road.</p>
            <p className="font-display text-2xl text-[#12636B] pt-6">DAL PARI<br/><span className="text-xl font-light">Healthcare on Water.</span></p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
