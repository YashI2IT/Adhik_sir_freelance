import { motion } from 'framer-motion'
import { journeyData } from '../../data/timeline'

export function PrinciplesMappingSection() {
  const { principlesMapping } = journeyData

  return (
    <section className="section-padding bg-bwf-white border-y border-bwf-deep/5">
      <div className="container-bwf max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16 text-center">
          {principlesMapping.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center"
            >
              <span className="text-sm font-bold tracking-widest text-bwf-deep/40 mb-2 font-display">
                {item.year}
              </span>
              <span className="type-heading-sm text-bwf-teal uppercase tracking-widest">
                {item.principle}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
