import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ImpactStatProps {
  value: number
  prefix?: string
  suffix?: string
  label: string
}

export function ImpactStat({ value, prefix = '', suffix = '', label }: ImpactStatProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className="flex flex-col items-center text-center"
    >
      <div className="type-display-lg text-bwf-deep mb-2 flex items-baseline">
        {prefix && <span className="text-3xl md:text-5xl mr-1">{prefix}</span>}
        {/* Simple number display for now, a count-up could be implemented here */}
        <span>{value.toLocaleString()}</span>
        {suffix && <span className="text-3xl md:text-5xl ml-1">{suffix}</span>}
      </div>
      <p className="text-sm md:text-base font-medium tracking-wide text-bwf-deep/80 uppercase">
        {label}
      </p>
    </motion.div>
  )
}
