import { motion } from 'framer-motion'
import { fadeUp } from './shared'

export function BaseraSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div {...fadeUp(0)} className="border-l border-[#12636B]/30 pl-8 pb-16 relative">
          <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-[#12636B]" />
          <h2 className="font-display text-4xl text-[#051315] mb-2">2002</h2>
          <h3 className="font-display text-3xl italic text-[#12636B] mb-12">TWO GIRLS.<br/>ONE BEGINNING.</h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>In Kupwara, a small beginning was taking shape.</p>
            <p>There was no grand institution.</p>
            <p>No large building.</p>
            <p>No major donor.</p>
            <p>No blueprint for what it would eventually become.</p>
            <p>There were girls who needed security, education, affection and the possibility of a future.</p>
            <p>And there was a decision.</p>
            <p className="font-display text-3xl font-bold text-[#12636B]">STAY.</p>
            <p>Basera-e-Tabassum—</p>
            <p className="italic">“The Abode of Smiles”</p>
            <p>—began as a home for vulnerable girls.</p>
            <p>What began with a few children gradually became a lifelong responsibility.</p>
          </div>

          <h3 className="font-display text-3xl text-[#051315] mt-16 mb-8">NOT AN ORPHANAGE.<br/>A HOME.</h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>A child does not only need food and shelter.</p>
            <p>She needs belonging.</p>
            <p>She needs education.</p>
            <p>She needs confidence.</p>
            <p>She needs someone who believes in her.</p>
            <p>And eventually, she needs the freedom to build a life of her own.</p>
            <p>Our responsibility could not simply end when a girl turned eighteen.</p>
            <p>It had to continue until dependency became independence.</p>
          </div>

          <h3 className="font-display text-3xl italic text-[#051315] mt-16 mb-8">OUR JOURNEY FOUND THREE WORDS.</h3>
          <div className="space-y-8 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <div>
              <p className="font-bold text-[#12636B]">RESCUE.</p>
              <p>When a human life faces immediate crisis or vulnerability.</p>
            </div>
            <div>
              <p className="font-bold text-[#12636B]">REBUILD.</p>
              <p>Through shelter, education, healthcare, skills and opportunity.</p>
            </div>
            <div>
              <p className="font-bold text-[#12636B]">REVIVE.</p>
              <p>Until dignity, confidence and independence return.</p>
            </div>
            <p className="font-display text-2xl text-[#12636B] pt-8 border-t border-[#12636B]/20">RESCUE → REBUILD → REVIVE</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
