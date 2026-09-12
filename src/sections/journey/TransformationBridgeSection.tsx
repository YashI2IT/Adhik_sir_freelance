import React from 'react'
import { motion } from 'framer-motion'
import { journeyData } from '../../data/timeline'

export function TransformationBridgeSection() {
  const { transformation } = journeyData

  return (
    <section className="py-32 bg-bwf-ivory">
      <div className="container-bwf max-w-4xl mx-auto text-center">
        
        <motion.h2 
          className="type-heading-lg text-bwf-deep mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {transformation.heading}
        </motion.h2>

        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6">
          {transformation.flow.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-2xl md:text-4xl font-display text-bwf-deep italic tracking-wider font-medium"
              >
                {step}
              </motion.div>
              
              {index < transformation.flow.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: "1.5rem" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + 0.2 }}
                  className="w-px bg-bwf-teal/30 hidden md:block"
                />
              )}
              {/* Mobile arrow fallback instead of long line */}
              {index < transformation.flow.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + 0.2 }}
                  className="text-bwf-teal/30 md:hidden"
                >
                  &darr;
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
        
      </div>
    </section>
  )
}
