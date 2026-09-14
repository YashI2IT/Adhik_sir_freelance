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
              src="/images/IMG_8458.jpg" 
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

            <motion.div {...fadeUp(0.2)} className="max-w-2xl mx-auto space-y-6 pb-24">
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
        
        {/* 1. INTRODUCTION - Editorial Drop Cap Style */}
        {intro && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
              <div className="md:w-1/3">
                <SectionHeading title={intro.heading} />
              </div>
              <div className="md:w-2/3 space-y-8">
                {intro.content?.map((para, i) => (
                  <p key={i} className={`text-[18px] leading-[1.9] text-[#0D343A]/80 ${i === 0 ? 'first-letter:text-6xl first-letter:font-display first-letter:text-bwf-gold first-letter:mr-2 first-letter:float-left' : ''}`}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 2. SPLIT LAYOUT: PART I & TYPOGRAPHY */}
        <section className="bg-bwf-ivory border-y border-bwf-deep/10">
          <div className="grid md:grid-cols-2">
            <motion.div {...fadeUp(0)} className="py-32 px-6 md:px-12 lg:px-16 lg:pr-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-bwf-deep/10">
              <div className="max-w-xl ml-auto">
                {part1 && (
                  <>
                    <h2 className="font-display text-3xl md:text-4xl text-[#12636B] mb-10 pb-6 border-b border-[#12636B]/10 inline-block pr-16">
                      {part1.heading}
                    </h2>
                    <div className="space-y-8 mt-6">
                      {part1.content?.map((para, i) => (
                        <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                          {para}
                        </p>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="h-full min-h-[40vh] flex flex-col items-center justify-center p-12 bg-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#12636B 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
              <p className="font-display text-5xl md:text-6xl text-bwf-deep/20 text-center leading-tight italic max-w-lg relative z-10">
                Stepping out of the protective environment meant confronting a complex world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. SPLIT LAYOUT: TYPOGRAPHY & PART II */}
        <section className="bg-white">
          <div className="grid md:grid-cols-2">
            <motion.div {...fadeUp(0.2)} className="h-full min-h-[40vh] flex flex-col items-center justify-center p-12 bg-bwf-ivory relative overflow-hidden order-2 md:order-1 border-t md:border-t-0 md:border-r border-bwf-deep/10">
              <div className="w-32 h-32 rounded-full border border-bwf-gold/30 flex items-center justify-center mb-8">
                <div className="w-24 h-24 rounded-full border border-bwf-gold/50 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-bwf-gold/10" />
                </div>
              </div>
              <p className="font-display text-4xl md:text-5xl text-bwf-gold text-center leading-tight italic max-w-md relative z-10">
                The responsibility of a parent does not end when a child turns eighteen.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0)} className="py-32 px-6 md:px-12 lg:px-16 lg:pl-24 flex flex-col justify-center order-1 md:order-2">
              <div className="max-w-xl mr-auto">
                {part2 && (
                  <>
                    <h2 className="font-display text-3xl md:text-4xl text-[#12636B] mb-10 pb-6 border-b border-[#12636B]/10 inline-block pr-16">
                      {part2.heading}
                    </h2>
                    <div className="space-y-8 mt-6">
                      {part2.content?.map((para, i) => (
                        <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                          {para}
                        </p>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. RETURNING WITH PURPOSE */}
        {part3 && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#051315] text-bwf-ivory relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bwf-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="max-w-4xl mx-auto relative z-10 text-center">
              <motion.div {...fadeUp(0)}>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-bwf-gold mb-16 pb-8 border-b border-bwf-gold/20 inline-block px-12">
                  {part3.heading}
                </h2>
              </motion.div>
              <div className="space-y-10 mt-8 text-left md:text-center max-w-3xl mx-auto">
                {part3.content?.map((para, i) => (
                  <p key={i} className="text-[20px] md:text-[22px] font-light leading-[1.9] text-bwf-ivory/90">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. PHILOSOPHY QUOTE */}
        {philosophy && (
          <section className="py-40 px-6 md:px-12 lg:px-16 bg-[#F7F6F1]">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div {...fadeUp(0)} className="mb-20 relative">
                <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[120px] font-display text-bwf-gold/20 leading-none">“</span>
                <h3 className="font-display text-3xl md:text-5xl lg:text-6xl text-bwf-deep italic leading-tight text-center relative z-10">
                  {philosophy.quote}
                </h3>
              </motion.div>
              <div className="w-24 h-[1px] bg-bwf-gold mx-auto mb-16" />
              <div className="space-y-8 text-left max-w-2xl mx-auto">
                {philosophy.content?.slice(0, 2).map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/70 text-center">
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
