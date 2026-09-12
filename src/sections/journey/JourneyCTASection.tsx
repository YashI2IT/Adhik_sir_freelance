import { motion } from 'framer-motion'
import { journeyData } from '../../data/timeline'
import { Link } from 'react-router-dom'

export function JourneyCTASection() {
  const { cta } = journeyData

  return (
    <section className="relative bg-[#051315] overflow-hidden">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img src="/images/IMG_8787.jpg" alt="Journey CTA Background" className="w-full h-full object-cover mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-transparent to-[#051315]" />
      </div>
      
      <div className="relative z-10 py-24 md:py-32 px-6 text-center max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          <Link 
            to={cta.primary.link}
            className="group block p-12 md:p-20 bg-[#051315]/60 hover:bg-bwf-teal/90 backdrop-blur-md border border-bwf-ivory/10 transition-all duration-500 rounded-sm"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center gap-6"
            >
              <h2 className="type-heading-md text-bwf-ivory text-center group-hover:text-bwf-gold transition-colors">
                {cta.primary.text}
              </h2>
              <div className="w-12 h-[2px] bg-bwf-gold/50 transform group-hover:scale-x-150 group-hover:bg-bwf-gold transition-all duration-500" />
            </motion.div>
          </Link>

          <Link 
            to={cta.secondary.link}
            className="group block p-12 md:p-20 bg-[#051315]/60 hover:bg-bwf-teal/90 backdrop-blur-md border border-bwf-ivory/10 transition-all duration-500 rounded-sm"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center gap-6"
            >
              <h2 className="type-heading-md text-bwf-ivory text-center group-hover:text-bwf-gold transition-colors">
                {cta.secondary.text}
              </h2>
              <div className="w-12 h-[2px] bg-bwf-gold/50 transform group-hover:scale-x-150 group-hover:bg-bwf-gold transition-all duration-500" />
            </motion.div>
          </Link>

        </div>
      </div>
    </section>
  )
}
