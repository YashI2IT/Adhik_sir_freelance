import { useSEO } from '../hooks/useSEO'
import { motion } from 'framer-motion'
import { PageTransition } from '../components/PageTransition'
import { legacyContent } from '../data/legacy'
import { Link } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.8, ease: 'easeOut' as const, delay },
})

export default function Legacy() {
  useSEO({
    title: 'Legacy Emerges | Adhik Kadam',
    description: 'Explore the continuity of service, the transformation from receiving to giving, and how values are carried forward into the next generation.',
    canonicalPath: '/legacy',
  })

  return (
    <PageTransition>
      <main className="bg-[#051315] text-bwf-ivory min-h-screen">
        
        {/* Cinematic Hero */}
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-16 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
            <img 
              src="/images/IMG_8787.jpg" 
              alt="Legacy Background" 
              className="w-full h-full object-cover mix-blend-overlay grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-[#051315]/80 to-transparent" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10 text-center mt-20">
            <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-bwf-gold mb-8">
              Continuity & Future
            </motion.p>
            <motion.h1 {...fadeUp(0.1)} className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] tracking-tight mb-16">
              Legacy <span className="text-bwf-gold italic">Emerges</span>
            </motion.h1>

            <motion.div {...fadeUp(0.2)} className="max-w-2xl mx-auto space-y-6">
              {legacyContent.intro.map((para, i) => (
                <p 
                  key={i} 
                  className={`text-[17px] md:text-[19px] font-light text-bwf-ivory/80 leading-[1.8] ${i === 0 ? "font-display text-2xl md:text-3xl text-bwf-gold italic mb-8" : ""}`}
                >
                  {para}
                </p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Editorial Content */}
        <section className="py-24 px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto space-y-32">
            
            {legacyContent.sections.slice(0, 4).map((section, idx) => (
              <EditorialSection key={idx} section={section} index={idx} />
            ))}

            {/* Visual Progression: Transformation */}
            <motion.div {...fadeUp(0)} className="py-16 my-16 border-y border-bwf-ivory/10">
              <h2 className="font-display text-3xl md:text-4xl text-bwf-gold mb-12 text-center">
                The Transformation of Trust
              </h2>
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 text-center">
                {['From beneficiary to participant.', 'From participant to professional.', 'From professional to leader.', 'And from leader to someone who creates opportunities for others.'].map((step, i) => (
                  <div key={i} className="flex flex-col items-center flex-1">
                    <div className="w-12 h-12 rounded-full border border-bwf-gold/30 flex items-center justify-center mb-6 text-bwf-gold font-display text-xl">
                      {i + 1}
                    </div>
                    <p className="text-[15px] font-light text-bwf-ivory/80 leading-relaxed max-w-[200px]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Remaining Sections */}
            {legacyContent.sections.slice(4, 6).map((section, idx) => (
              <EditorialSection key={idx + 4} section={section} index={idx + 4} />
            ))}

            {/* Drop / Ocean Metaphor Visual Centerpiece */}
            <motion.div 
              {...fadeUp(0)} 
              className="relative py-32 flex flex-col items-center justify-center text-center my-16 overflow-hidden"
            >
              {/* Expanding Rings Animation */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ 
                      scale: [0.8, 1.5, 2.2], 
                      opacity: [0, 0.5, 0] 
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 4,
                      ease: "linear",
                      repeat: Infinity,
                      delay: ring * 1.3
                    }}
                    className="absolute w-64 h-64 border-[1px] border-bwf-gold rounded-full"
                  />
                ))}
              </div>
              
              <div className="relative z-10 max-w-2xl mx-auto space-y-8 bg-[#051315]/80 p-8 backdrop-blur-sm">
                <p className="font-display text-3xl md:text-4xl text-bwf-gold italic leading-relaxed">
                  "He believes a drop fulfils its journey when it merges into the ocean."
                </p>
                <p className="text-lg font-light text-bwf-ivory/70">
                  It does not need to preserve its separate identity. And once it has merged, its journey does not really end. It becomes part of the waves that arise and find their own movement.
                </p>
              </div>
            </motion.div>

            {/* Closing Statement */}
            <motion.div {...fadeUp(0)} className="pt-24 pb-12 text-center border-t border-bwf-ivory/10">
              <div className="space-y-6">
                {legacyContent.sections[6].content.map((para, i) => (
                  <h3 key={i} className={`font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.2] italic ${i === 2 ? 'text-bwf-ivory/50 mt-8 text-xl tracking-[0.2em] uppercase not-italic' : 'text-bwf-gold'}`}>
                    {para}
                  </h3>
                ))}
              </div>
            </motion.div>

            {/* Link back to Heart of the Cause */}
            <div className="flex justify-center pt-16">
              <Link 
                to="/heart-of-the-cause"
                className="group flex items-center gap-4 text-bwf-ivory/60 hover:text-bwf-gold transition-colors duration-500 uppercase tracking-[0.2em] text-xs font-bold"
              >
                <span className="w-8 h-[1px] bg-bwf-ivory/20 group-hover:bg-bwf-gold transition-colors duration-500" />
                Return to The Heart of the Cause
                <span className="w-8 h-[1px] bg-bwf-ivory/20 group-hover:bg-bwf-gold transition-colors duration-500" />
              </Link>
            </div>
            
          </div>
        </section>

      </main>
    </PageTransition>
  )
}

function EditorialSection({ section, index }: { section: any, index: number }) {
  // If it's the final statement, skip it here since we rendered it uniquely
  if (section.heading === "Final Statement") return null;

  return (
    <motion.div {...fadeUp(0.1)} className="group">
      <h2 className="font-display text-3xl md:text-4xl text-bwf-gold mb-10 pb-6 border-b border-bwf-ivory/10 inline-block pr-16 group-hover:border-bwf-gold/30 transition-colors duration-700">
        {section.heading}
      </h2>
      <div className="space-y-8">
        {section.content.map((paragraph: string, i: number) => {
          // Check if paragraph is one of the transformation steps which we handle separately
          if ([
            'From beneficiary to participant.', 
            'From participant to professional.', 
            'From professional to leader.', 
            'And from leader to someone who creates opportunities for others.',
            'He believes a drop fulfils its journey when it merges into the ocean.',
            'It does not need to preserve its separate identity.',
            'And once it has merged, its journey does not really end. It becomes part of the waves that arise and find their own movement.'
          ].includes(paragraph)) return null;

          const isQuote = paragraph.startsWith('“') || paragraph === "Silent Messengers of Peace.";
          
          return (
            <p 
              key={i} 
              className={`text-[16px] md:text-[18px] leading-[1.8] font-light ${
                isQuote 
                  ? "font-display text-2xl md:text-3xl text-bwf-gold italic border-l-2 border-bwf-gold/30 pl-6 my-10" 
                  : "text-bwf-ivory/70"
              }`}
            >
              {paragraph}
            </p>
          );
        })}
      </div>
    </motion.div>
  )
}
