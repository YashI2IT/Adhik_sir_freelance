import { motion } from 'framer-motion'
import { fadeUp } from './shared'

export function Timeline1999Section() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div {...fadeUp(0)} className="border-l border-[#12636B]/30 pl-8 pb-16 relative">
          <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-[#12636B]" />
          <h2 className="font-display text-4xl text-[#051315] mb-2">1999</h2>
          <h3 className="font-display text-3xl italic text-[#12636B] mb-12">THEN I WITNESSED WAR.</h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>The Kargil conflict displaced families and disrupted ordinary life.</p>
            <p>I worked among affected communities around Gagangir and Sonamarg.</p>
            <p>Community kitchens were organised.</p>
            <p>Children needed spaces to continue learning.</p>
            <p>Families needed support.</p>
            <p>Sometimes they simply needed someone willing to remain beside them.</p>
            <p>Something was changing inside me.</p>
            <p>I had come to Kashmir to understand conflict.</p>
            <p>But increasingly, I was encountering the human consequences of conflict.</p>
            <p>Once suffering enters your consciousness, remaining only a spectator becomes difficult.</p>
          </div>

          <h3 className="font-display text-3xl italic text-[#051315] mt-16 mb-8">
            FROM RELIEF<br/>TO UNDERSTANDING.
          </h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>By then, I had witnessed displacement.</p>
            <p>I had seen border communities living with uncertainty.</p>
            <p>I had worked during war.</p>
            <p>But much of what I was doing was still responding to what was immediately visible.</p>
            <p>Then came an experience that changed the direction of my life.</p>
          </div>

          <h3 className="font-display text-2xl text-[#12636B] uppercase tracking-widest font-bold mt-16 mb-8">
            CHILDREN AFFECTED BY ARMED CONFLICT
          </h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>I had the opportunity to work on a study on “Children Affected by Armed Conflict”, associated with UNICEF, alongside Padma Shri Balraj Puri, founder of the Institute of Jammu and Kashmir Affairs.</p>
            <p>The work took me deeper into the consequences of conflict on children and families.</p>
            <p>We travelled.</p>
            <p>We met families.</p>
            <p>We listened.</p>
            <p>We gathered information.</p>
            <p>And behind the vocabulary of militancy, security, politics and conflict, another reality emerged.</p>
            <p className="font-bold text-[#051315]">CHILDREN.</p>
            <p>Children who had lost fathers.</p>
            <p>Children who had lost mothers.</p>
            <p>Children growing up with widowed mothers.</p>
            <p>Children whose education had been interrupted.</p>
            <p>Children living in economically fragile households.</p>
            <p>Children growing up surrounded by uncertainty.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
