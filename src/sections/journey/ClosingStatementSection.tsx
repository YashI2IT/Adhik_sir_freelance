import { motion } from 'framer-motion'
import { journeyData } from '../../data/timeline'

export function ClosingStatementSection() {
  const { closing } = journeyData

  return (
    <section className="section-padding bg-bwf-deep text-bwf-ivory">
      <div className="container-bwf max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="type-display-xl text-bwf-ivory mb-12 leading-[1.1] md:leading-[1.15]">
            "{closing.quote1}"
          </h2>
          
          <div className="w-16 h-px bg-bwf-gold mx-auto mb-12" />
          
          <p className="text-[14px] md:text-[15px] font-light text-bwf-ivory/70 tracking-wide mb-12 max-w-3xl mx-auto leading-relaxed">
            "{closing.method}"
          </p>

          <p className="font-bold tracking-widest uppercase text-sm text-bwf-gold">
            {closing.quote2}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
