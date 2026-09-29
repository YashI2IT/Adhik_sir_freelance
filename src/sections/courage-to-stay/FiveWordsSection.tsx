import { motion } from 'framer-motion'
import { fadeUp } from './shared'

export function FiveWordsSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div {...fadeUp(0)} className="py-24 px-8 bg-[#051315] text-[#F7F6F1] rounded-2xl mx-auto my-16">
          <h3 className="font-display text-3xl md:text-4xl text-[#B59A63] mb-12 text-center">
            I BEGAN THIS JOURNEY<br/>TRYING TO UNDERSTAND KASHMIR.
          </h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-white/80 text-center max-w-2xl mx-auto">
            <p>Three decades later, Kashmir has taught me more than I could ever have imagined.</p>
            <p>It taught me that service begins with listening.</p>
            <p>That trust takes years.</p>
            <p>That institutions are not buildings.</p>
            <p>That compassion needs courage.</p>
            <p>That sometimes the most important thing you can do is simply refuse to leave.</p>
          </div>

          <div className="text-center mt-20 mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-white/40 mb-4">THREE DECADES.</p>
            <h3 className="font-display text-5xl text-[#B59A63] italic">FIVE WORDS.</h3>
          </div>

          <div className="space-y-12 max-w-xl mx-auto">
            <div className="text-center">
              <h4 className="font-display text-3xl text-white mb-2 tracking-widest">LISTEN.</h4>
              <p className="text-white/60 text-lg">Before deciding what people need.</p>
            </div>
            <div className="text-center">
              <h4 className="font-display text-3xl text-white mb-2 tracking-widest">STAY.</h4>
              <p className="text-white/60 text-lg">Long enough to understand what the problem really is.</p>
            </div>
            <div className="text-center">
              <h4 className="font-display text-3xl text-white mb-2 tracking-widest">TRUST.</h4>
              <p className="text-white/60 text-lg">People with their own transformation.</p>
            </div>
            <div className="text-center">
              <h4 className="font-display text-3xl text-white mb-2 tracking-widest">SERVE.</h4>
              <p className="text-white/60 text-lg">Without making yourself the centre of their story.</p>
            </div>
            <div className="text-center">
              <h4 className="font-display text-3xl text-white mb-2 tracking-widest">BELONG.</h4>
              <p className="text-white/60 text-lg">Until there is no longer an "us" and "them."</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
