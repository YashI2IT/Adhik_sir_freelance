import { motion } from 'framer-motion'

interface QuoteBlockProps {
  quote: string
  author?: string
  className?: string
  alignment?: 'left' | 'center'
}

export function QuoteBlock({ quote, author, className = '', alignment = 'left' }: QuoteBlockProps) {
  return (
    <motion.figure 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" as const }}
      className={`relative ${alignment === 'center' ? 'text-center mx-auto' : ''} ${className}`}
    >
      <blockquote className="type-display-lg text-bwf-teal mb-6 leading-tight relative">
        <span className="absolute -left-6 md:-left-12 top-0 text-bwf-teal/20 type-display-xl leading-none select-none">"</span>
        {quote}
        <span className="absolute -right-4 md:-right-8 bottom-0 text-bwf-teal/20 type-display-xl leading-none select-none">"</span>
      </blockquote>
      {author && (
        <figcaption className="text-bwf-deep/80 font-medium tracking-widest uppercase text-sm mt-8 flex items-center gap-4 justify-start">
          <div className="w-8 h-px bg-bwf-gold" />
          {author}
        </figcaption>
      )}
    </motion.figure>
  )
}
