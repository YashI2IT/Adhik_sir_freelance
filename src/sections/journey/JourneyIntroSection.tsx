import { motion } from 'framer-motion'
import { journeyData } from '../../data/timeline'

export function JourneyIntroSection() {
  const { intro } = journeyData

  return (
    <section className="section-padding bg-bwf-ivory border-b border-bwf-deep/5">
      <div className="container-bwf max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="type-heading-lg text-bwf-deep mb-8 leading-tight">
            {intro.heading}
          </h2>
          
          <p className="text-xl md:text-2xl text-bwf-deep/80 leading-relaxed font-display italic">
            {intro.paragraph}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
