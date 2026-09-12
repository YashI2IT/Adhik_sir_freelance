import { motion } from 'framer-motion'
import { journeyData } from '../../data/timeline'

export function FrameworkSection() {
  const { framework } = journeyData

  return (
    <section className="section-padding bg-bwf-ivory">
      <div className="container-bwf max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="type-label text-bwf-gold mb-6 block">The Framework</span>
          <h2 className="type-heading-lg text-bwf-deep">A structure for sustainable change.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {framework.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-bwf-white p-10 border border-bwf-deep/5 rounded-sm hover:shadow-soft transition-shadow duration-300"
            >
              <span className="text-3xl font-display text-bwf-gold/30 mb-4 block">0{index + 1}</span>
              <h3 className="type-heading-sm text-bwf-deep mb-4">{stage.title}</h3>
              <p className="text-bwf-deep/70 leading-relaxed text-sm md:text-base">
                {stage.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
