import { motion } from 'framer-motion'
import { fadeUp } from './shared'

export function Storm2012Section() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div {...fadeUp(0)} className="border-l border-[#12636B]/30 pl-8 pb-16 relative">
          <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-[#12636B]" />
          <h2 className="font-display text-4xl text-[#051315] mb-2">2012</h2>
          <h3 className="font-display text-3xl italic text-[#12636B] mb-12">A DIFFERENT KIND OF STORM.</h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>Following public recognition of my work in Maharashtra, Marathi newspaper articles about me and our work began circulating in Kashmir.</p>
            <p>But they were being used in an entirely different context.</p>
            <p>In places where very few people could read Marathi, these articles were presented alongside serious allegations and narratives questioning my intentions and the work being done with vulnerable girls.</p>
            <p>Statements circulated.</p>
            <p>Complaints followed.</p>
            <p>Rumours travelled.</p>
            <p>Suspicion was created.</p>
            <p>In an already volatile environment, misinformation was not simply uncomfortable.</p>
            <p className="font-bold">IT COULD BECOME DANGEROUS.</p>
          </div>

          <h3 className="font-display text-3xl text-[#051315] mt-16 mb-8">THE EASIEST DECISION<br/>WAS TO LEAVE.</h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>I was from Maharashtra.</p>
            <p>I could have returned home.</p>
            <p>I could have said:</p>
            <p className="italic">“I tried.”</p>
            <p>But there was another question.</p>
            <p>What would leaving tell the girls who had trusted us?</p>
            <p>What would it tell the families who had placed their daughters in our care?</p>
            <p>What would happen to years of relationships built quietly within these communities?</p>
            <p>Someone else's narrative could not become the reason I abandoned the people who had trusted me.</p>
            <p className="font-display text-4xl text-[#12636B] pt-8">SO I STAYED.</p>
            <p>Not to fight anyone.</p>
            <p>Not to win an argument.</p>
            <p>Not to prove that I was right.</p>
            <p>Simply to continue the work.</p>
          </div>

          <h3 className="font-display text-3xl italic text-[#051315] mt-16 mb-8">TRUST WAS OUR REAL INFRASTRUCTURE.</h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>Buildings can be constructed with money.</p>
            <p>Vehicles can be purchased.</p>
            <p>Projects can be funded.</p>
            <p>But trust cannot be bought.</p>
            <p>It took years.</p>
            <p>Living together.</p>
            <p>Eating together.</p>
            <p>Celebrating together.</p>
            <p>Grieving together.</p>
            <p>Making mistakes.</p>
            <p>Learning.</p>
            <p>Returning.</p>
            <p>And staying.</p>
            <p className="font-display text-2xl text-[#12636B] pt-8">PRESENCE BECAME OUR STRONGEST INSTITUTION.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
