import { motion } from 'framer-motion'
import { QuoteBlock } from '../QuoteBlock'

export interface TimelineEventProps {
  data: {
    year: string
    id: string
    title: string
    subtitle: string
    context: string
    story: string
    significance: string
    quote: string
    image: string
    theme: string
  }
}

export function TimelineEvent({ data }: TimelineEventProps) {
  const isDark = data.theme === 'dark'
  
  return (
    <div 
      id={data.id} 
      className={`scroll-mt-32 py-20 lg:py-32 border-b last:border-b-0 relative ${
        isDark ? 'bg-bwf-deep text-bwf-ivory border-bwf-ivory/10' : 'bg-bwf-white text-bwf-deep border-bwf-deep/5'
      }`}
    >
      <div className="container-bwf max-w-5xl">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="md:col-span-5 flex flex-col justify-center order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[5rem] md:text-[7rem] leading-none font-display text-bwf-gold/30 mb-4 select-none">
                {data.year}
              </h2>
              
              {data.subtitle && (
                <span className="type-label text-bwf-gold mb-2 block">
                  {data.subtitle}
                </span>
              )}
              
              <h3 className={`type-heading-md mb-8 ${isDark ? 'text-bwf-ivory' : 'text-bwf-deep'}`}>
                {data.title}
              </h3>
              
              {data.context && (
                <p className={`text-lg italic mb-6 border-l-2 pl-4 ${isDark ? 'border-bwf-gold/50 text-bwf-ivory/80' : 'border-bwf-teal/30 text-bwf-deep/70'}`}>
                  {data.context}
                </p>
              )}
              
              <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-bwf-ivory/90' : 'text-bwf-deep/80'}`}>
                {data.story}
              </p>
              
              {data.significance && (
                <div className={`p-6 rounded-sm ${isDark ? 'bg-bwf-ivory/5 text-bwf-ivory/90' : 'bg-bwf-ivory text-bwf-deep/80'}`}>
                  <p className="text-sm font-bold tracking-widest uppercase mb-2 text-bwf-teal">Significance</p>
                  <p className="font-display italic text-lg">{data.significance}</p>
                </div>
              )}
            </motion.div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-center order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] sticky top-32"
            >
              <div className="w-full h-full relative overflow-hidden shadow-xl rounded-sm">
                <img 
                  src={data.image} 
                  className={`w-full h-full object-cover transition-transform duration-[2s] hover:scale-105 ${isDark ? 'opacity-90' : 'opacity-100'}`} 
                  alt={`${data.year} - ${data.title}`} 
                />
              </div>
            </motion.div>
          </div>
          
        </div>

        {data.quote && (
          <motion.div 
            className="mt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <QuoteBlock 
              quote={data.quote} 
              alignment="center" 
              className={isDark ? "opacity-90" : ""}
            />
          </motion.div>
        )}
      </div>
    </div>
  )
}
