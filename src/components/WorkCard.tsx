import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ImagePlaceholder } from './ImagePlaceholder'

interface WorkCardProps {
  id: string
  title: string
  description: string
  imagePath?: string
  index: number
}

export function WorkCard({ id, title, description, imagePath, index }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" as const }}
      className="group flex flex-col h-full"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-bwf-ivory rounded-sm mb-6 relative">
        {imagePath ? (
           <img 
             src={imagePath} 
             alt={title}
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             loading="lazy"
           />
        ) : (
          <ImagePlaceholder 
            expectedPath={`/images/work-${id}.webp`} 
            className="w-full h-full border-none"
          />
        )}
      </div>
      
      <div className="flex flex-col flex-grow">
        <span className="text-bwf-gold type-label mb-3">{id}</span>
        <h3 className="type-heading-sm text-bwf-deep mb-3">{title}</h3>
        <p className="text-bwf-deep/80 mb-6 flex-grow">{description}</p>
        
        <Link 
          to="/work" 
          className="inline-flex items-center text-sm font-bold text-bwf-teal uppercase tracking-widest group-hover:text-bwf-blue transition-colors mt-auto"
        >
          Explore <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}
