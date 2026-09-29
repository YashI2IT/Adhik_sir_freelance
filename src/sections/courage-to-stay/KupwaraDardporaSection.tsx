import { motion } from 'framer-motion'
import { fadeUp } from './shared'

export function KupwaraDardporaSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div {...fadeUp(0)} className="py-16">
          <h3 className="font-display text-4xl text-[#051315] mb-8">THEN I REACHED KUPWARA.</h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>The findings confronted me with a scale of vulnerability I had never imagined.</p>
            <p>Our field study indicated that Kupwara district alone had more than 24,000 orphaned children.</p>
            <p>And then there was one village that remained deeply etched in my mind.</p>
            <p className="font-display text-4xl italic text-[#12636B] py-6">DARDPORA.</p>
            <p>Our study recorded more than 1,000 orphaned children there.</p>
          </div>

          <div className="my-16">
             <div className="w-full h-[400px] overflow-hidden">
                <img src="/images/IMG_1888.jpg" alt="Research field notes" className="w-full h-full object-cover" />
             </div>
          </div>

          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>These were not merely numbers in a survey.</p>
            <p>Every number represented a childhood.</p>
            <p>A family.</p>
            <p>A story.</p>
            <p>A future.</p>
            <p className="font-display text-2xl mt-8">And suddenly the question was no longer:</p>
            <p className="italic">How many?</p>
            <p className="font-display text-2xl mt-8">It became:</p>
            <p className="font-display text-3xl text-[#12636B]">WHAT HAPPENS TO THEM NEXT?</p>
          </div>

          <h3 className="font-display text-3xl italic text-[#051315] mt-16 mb-8">THE STUDY CHANGED MY QUESTION.</h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>Until then I had been asking:</p>
            <p className="italic">What can I do during a crisis?</p>
            <p>The research forced me to ask something much harder.</p>
            <p className="font-bold">What happens to a child after the crisis becomes old news?</p>
            <p>Who remains when emergency relief ends?</p>
            <p>Who protects her education?</p>
            <p>Who supports a widowed mother?</p>
            <p>Who prevents vulnerability from becoming exploitation?</p>
            <p>Who remains until that child becomes capable of standing independently?</p>
          </div>

          <h3 className="font-display text-3xl text-[#051315] mt-16 mb-8">ONE REALITY TROUBLED ME MOST.<br/>THE VULNERABILITY OF GIRLS.</h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>In fragile families affected by conflict, girls could face multiple layers of vulnerability.</p>
            <p>Loss of parental protection.</p>
            <p>Interrupted education.</p>
            <p>Economic insecurity.</p>
            <p>Social pressure.</p>
            <p>Limited opportunities.</p>
            <p>And uncertainty about their own future.</p>
            <p className="mt-8 font-bold">Temporary relief would never be enough.</p>
            <p>These girls needed something different.</p>
            <p>Long-term accompaniment.</p>
            <p>A safe home.</p>
            <p>Education.</p>
            <p>Healthcare.</p>
            <p>Protection.</p>
            <p>Skills.</p>
            <p>Confidence.</p>
            <p>Opportunity.</p>
            <p className="mt-8 font-bold text-[#12636B] uppercase">And eventually—<br/>INDEPENDENCE.</p>
          </div>

          <h3 className="font-display text-3xl italic text-[#051315] mt-16 mb-8">KNOWLEDGE CREATED RESPONSIBILITY.</h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>The study had begun as an attempt to understand the consequences of armed conflict on children.</p>
            <p>For me, it became something much more personal.</p>
            <p>I could no longer look at these children merely as subjects of research.</p>
            <p>Once you know, you have a choice.</p>
            <p>You can document the suffering.</p>
            <p>You can discuss it.</p>
            <p>You can move on.</p>
            <p className="font-display text-4xl text-[#12636B] mt-12">Or—<br/>YOU CAN STAY.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
