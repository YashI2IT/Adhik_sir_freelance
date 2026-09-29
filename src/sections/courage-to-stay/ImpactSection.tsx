import { motion } from 'framer-motion'
import { fadeUp } from './shared'

export function ImpactSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div {...fadeUp(0)} className="py-16 border-y border-[#0D343A]/10 my-16">
          <h3 className="font-display text-4xl text-[#051315] mb-8 text-center">THE NUMBERS GREW.</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center my-16">
            {/* Impact numbers remain unverified placeholders as requested */}
            {[
              { label: "Girls supported", value: "0,000+" },
              { label: "Patients treated", value: "0,00,000+" },
              { label: "Villages reached", value: "000+" },
              { label: "Ambulances deployed", value: "00" },
              { label: "Homes established", value: "0" },
              { label: "Students graduating", value: "000+" },
              { label: "Families rebuilding", value: "0,000+" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="font-display text-4xl text-[#B59A63] mb-2">{item.value}</span>
                <span className="text-sm uppercase tracking-widest text-[#0D343A]/60">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80 text-center">
            <p>But numbers are not the deepest measure of change.</p>
            <p>There is another measure.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
