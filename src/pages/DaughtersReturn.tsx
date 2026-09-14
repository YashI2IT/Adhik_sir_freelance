import { useSEO } from '../hooks/useSEO'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PageTransition } from '../components/PageTransition'
import { daughtersReturnContent } from '../data/daughtersReturn'
import { useRef } from 'react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.8, ease: 'easeOut' as const, delay },
})

export default function DaughtersReturn() {
  useSEO({
    title: 'Daughters Return to Their Soil | Adhik Kadam',
    description: 'A story of independence, return, and carrying the legacy forward through Basera-e-Tabassum.',
    canonicalPath: '/daughters-return-to-their-soil',
  })

  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  const getSection = (id: string) => daughtersReturnContent.sections.find(s => s.id === id)

  const intro = getSection('introduction')
  const part1 = getSection('part-1')
  const part2 = getSection('part-2')
  const part3 = getSection('part-3')
  const philosophy = getSection('philosophy')

  return (
    <PageTransition>
      <main className="bg-bwf-ivory text-bwf-deep min-h-screen font-light">
        
        {/* HERO */}
        <section ref={heroRef} className="relative h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 overflow-hidden bg-[#051315]">
          <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-40">
            {/* Authentic documentary image from the project if possible */}
            <img 
              src="/images/IMG_8741.jpg" 
              alt="Daughters Return to Their Soil" 
              className="w-full h-full object-cover mix-blend-overlay grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-[#051315]/80 to-transparent" />
          </motion.div>

          <div className="max-w-5xl mx-auto relative z-10 text-center mt-20 text-bwf-ivory">
            <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-bwf-gold mb-10">
              {daughtersReturnContent.hero.eyebrow}
            </motion.p>
            <motion.h1 {...fadeUp(0.1)} className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] tracking-tight mb-8">
              Daughters Return <br/><span className="text-bwf-gold italic">to Their Soil</span>
            </motion.h1>

            <motion.div {...fadeUp(0.2)} className="max-w-2xl mx-auto space-y-6">
              <p className="text-[18px] md:text-[22px] font-light text-bwf-ivory/80 leading-[1.8] italic">
                {daughtersReturnContent.hero.subtitle}
              </p>
              <p className="text-[12px] uppercase tracking-widest text-bwf-ivory/50 font-semibold">
                {daughtersReturnContent.hero.context}
              </p>
            </motion.div>
          </div>

          <motion.button 
            onClick={scrollToContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-bwf-gold hover:text-bwf-ivory transition-colors z-20 group"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold">Discover</span>
            <div className="w-[1px] h-12 bg-bwf-gold/30 relative overflow-hidden">
              <motion.div 
                animate={{ y: [-48, 48] }} 
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-full bg-bwf-gold"
              />
            </div>
          </motion.button>
        </section>

        {/* CONTENT */}
        
        {intro && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
            <div className="max-w-3xl mx-auto">
              <SectionHeading title={intro.heading} />
              <div className="space-y-8 mt-16">
                {intro.content?.map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {part1 && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-bwf-ivory">
            <div className="max-w-3xl mx-auto">
              <SectionHeading title={part1.heading} />
              <div className="space-y-8 mt-16">
                {part1.content?.map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Feature Image Grid */}
        <section className="py-16 px-6 md:px-12 lg:px-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[4/3] rounded-xl overflow-hidden group">
              <img src="/images/IMG_8484.jpg" alt="Basera-e-Tabassum" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden group">
              <img src="/images/IMG_8741.jpg" alt="Daughters of Kupwara" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" loading="lazy" />
            </div>
          </div>
        </section>

        {part2 && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-bwf-ivory">
            <div className="max-w-3xl mx-auto">
              <SectionHeading title={part2.heading} />
              <div className="space-y-8 mt-16">
                {part2.content?.map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {part3 && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#051315] text-bwf-ivory">
            <div className="max-w-3xl mx-auto">
              <motion.div {...fadeUp(0)}>
                <h2 className="font-display text-4xl md:text-5xl text-bwf-gold mb-10 pb-6 border-b border-bwf-gold/10 inline-block pr-16">
                  {part3.heading}
                </h2>
              </motion.div>
              <div className="space-y-8 mt-16">
                {part3.content?.map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-bwf-ivory/80">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {philosophy && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div {...fadeUp(0)} className="mb-20">
                <h3 className="font-display text-3xl md:text-5xl text-bwf-deep italic leading-relaxed text-center">
                  “{philosophy.quote}”
                </h3>
              </motion.div>
              <div className="space-y-8 text-left">
                {philosophy.content?.map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
    </PageTransition>
  )
}

function SectionHeading({ title }: { title: string }) {
  return (
    <motion.div {...fadeUp(0)}>
      <h2 className="font-display text-4xl md:text-5xl text-[#12636B] mb-10 pb-6 border-b border-[#12636B]/10 inline-block pr-16">
        {title}
      </h2>
    </motion.div>
  )
}
