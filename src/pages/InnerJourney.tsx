import { useSEO } from '../hooks/useSEO'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PageTransition } from '../components/PageTransition'
import { innerJourneyContent } from '../data/innerJourney'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.8, ease: 'easeOut' as const, delay },
})

export default function InnerJourney() {
  useSEO({
    title: 'The Inner Journey | Adhik Kadam',
    description: 'From the Bhakti traditions of Maharashtra to the spiritual landscape of Kashmir — a journey through service, connection and the search for the self.',
    canonicalPath: '/inner-journey',
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

  // Extract sections for easier rendering
  const getSection = (heading: string) => innerJourneyContent.sections.find(s => s.heading === heading)

  const varkari = getSection("Roots in the Varkari Tradition")
  const maharashtraKashmir = getSection("When Maharashtra Met Kashmir")
  const twoLandscapes = getSection("Two Landscapes, One Search")
  const borderlessWithin = getSection("Borderless Within")
  const lalDed = getSection("Lal Ded — Beyond Identity")
  const nature = getSection("Nature as the First Teacher")
  const dropOcean = getSection("The Drop and the Ocean")
  const serviceMedium = getSection("Service as a Medium")
  const doingToBeing = getSection("From Doing to Being")
  const centre = getSection("Lal Ded International Centre")
  const ownership = getSection("A Journey Without Ownership")

  return (
    <PageTransition>
      <main className="bg-[#F7F6F1] text-[#0D343A] min-h-screen font-light">
        
        {/* 2. CINEMATIC HERO */}
        <section ref={heroRef} className="relative h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 overflow-hidden bg-[#051315]">
          <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-40">
            {/* Using an authentic Kashmir landscape/spiritual image from repo if possible, else a generic repo image */}
            <img 
              src="/images/IMG_8787.jpg" 
              alt="Inner Journey Landscape" 
              className="w-full h-full object-cover mix-blend-overlay grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-[#051315]/80 to-transparent" />
          </motion.div>

          <div className="max-w-5xl mx-auto relative z-10 text-center mt-20 text-bwf-ivory">
            <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-bwf-gold mb-10">
              {innerJourneyContent.hero.eyebrow}
            </motion.p>
            <motion.h1 {...fadeUp(0.1)} className="font-display text-[clamp(4rem,10vw,8rem)] leading-[0.9] tracking-tight mb-12">
              The Inner <span className="text-bwf-gold italic">Journey</span>
            </motion.h1>

            <motion.div {...fadeUp(0.2)} className="max-w-2xl mx-auto">
              <p className="text-[18px] md:text-[22px] font-light text-bwf-ivory/80 leading-[1.8] italic">
                {innerJourneyContent.hero.subtitle}
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
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold">Begin the journey</span>
            <div className="w-[1px] h-12 bg-bwf-gold/30 relative overflow-hidden">
              <motion.div 
                animate={{ y: [-48, 48] }} 
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-full bg-bwf-gold"
              />
            </div>
          </motion.button>
        </section>

        {/* 3. SECTION: THE INNER JOURNEY (OPENING) */}
        <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div {...fadeUp(0)}>
              <p className="text-[18px] md:text-[20px] leading-[1.9] text-[#0D343A]/80">
                {innerJourneyContent.opening[0]}
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <p className="text-[18px] md:text-[20px] leading-[1.9] text-[#0D343A]/80">
                {innerJourneyContent.opening[1]}
              </p>
              <p className="text-[18px] md:text-[20px] leading-[1.9] text-[#0D343A]/80 mt-8">
                {innerJourneyContent.opening[2]}
              </p>
            </motion.div>
            
            <motion.div {...fadeUp(0.2)} className="py-16 text-center">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#12636B] italic leading-tight">
                “{innerJourneyContent.opening[3]}”
              </h2>
            </motion.div>

            <motion.div {...fadeUp(0.3)}>
              <p className="text-[18px] md:text-[20px] leading-[1.9] text-[#0D343A]/80">
                {innerJourneyContent.opening[4]}
              </p>
              <p className="text-[18px] md:text-[20px] leading-[1.9] text-[#0D343A]/80 mt-8">
                {innerJourneyContent.opening[5]}
              </p>
            </motion.div>
          </div>
        </section>

        {/* 4. SECTION: ROOTS IN THE VARKARI TRADITION */}
        {varkari && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#F7F6F1]">
            <div className="max-w-3xl mx-auto">
              <SectionHeading title={varkari.heading} />
              <div className="space-y-8 mt-16">
                {varkari.content.map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. SECTION: WHEN MAHARASHTRA MET KASHMIR */}
        {maharashtraKashmir && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-white border-t border-[#12636B]/10">
            <div className="max-w-3xl mx-auto">
              <SectionHeading title={maharashtraKashmir.heading} />
              
              <div className="space-y-8 mt-16">
                {maharashtraKashmir.content.slice(0, 6).map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>

              {/* The Four Questions Sequence */}
              <motion.div {...fadeUp(0)} className="my-24 py-16 border-y border-[#12636B]/20">
                <div className="space-y-12">
                  {[6, 7, 8, 9].map((idx) => (
                    <h3 key={idx} className="font-display text-3xl md:text-4xl text-[#12636B] text-center italic">
                      {maharashtraKashmir.content[idx]}
                    </h3>
                  ))}
                </div>
              </motion.div>

              <div className="space-y-8">
                {maharashtraKashmir.content.slice(10).map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 6. SECTION: TWO LANDSCAPES, ONE SEARCH */}
        {twoLandscapes && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#12636B] text-[#F7F6F1]">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeUp(0)} className="text-center mb-24">
                <h2 className="font-display text-4xl md:text-5xl text-[#B59A63] mb-8">
                  {twoLandscapes.heading}
                </h2>
              </motion.div>

              {/* Split/Bridge Composition */}
              <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative mb-24">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#B59A63]/30 -translate-x-1/2" />
                
                <motion.div {...fadeUp(0.1)} className="text-center md:text-right md:pr-8">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#B59A63] font-bold block mb-6">Maharashtra</span>
                  <p className="text-[18px] leading-[1.9] text-white/80">
                    {twoLandscapes.content[1]}
                  </p>
                </motion.div>
                
                <motion.div {...fadeUp(0.2)} className="text-center md:text-left md:pl-8">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#B59A63] font-bold block mb-6">Kashmir</span>
                  <p className="text-[18px] leading-[1.9] text-white/80">
                    {twoLandscapes.content[2]}
                  </p>
                </motion.div>
              </div>

              <div className="max-w-3xl mx-auto text-center space-y-8">
                <p className="text-[18px] leading-[1.9] text-white/80">
                  {twoLandscapes.content[0]}
                </p>
                <p className="text-[18px] leading-[1.9] text-white/80">
                  {twoLandscapes.content[3]}<br/>
                  {twoLandscapes.content[4]}
                </p>
                <p className="text-[18px] leading-[1.9] text-white/80 mt-8">
                  {twoLandscapes.content[5]}
                </p>
                <motion.div {...fadeUp(0.3)} className="py-12">
                  <h3 className="font-display text-4xl md:text-5xl text-[#B59A63] italic">
                    “{twoLandscapes.content[6]}”
                  </h3>
                </motion.div>
                <p className="text-[18px] leading-[1.9] text-white/80">
                  {twoLandscapes.content[7]}<br/>
                  {twoLandscapes.content[8]}<br/>
                  {twoLandscapes.content[9]}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 7. SECTION: BORDERLESS WITHIN */}
        {borderlessWithin && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#051315] text-[#F7F6F1]">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div {...fadeUp(0)} className="space-y-4 mb-24">
                {borderlessWithin.content.slice(0, 8).map((word, i) => (
                  <h3 key={i} className="font-display text-4xl md:text-5xl lg:text-6xl text-[#B59A63]/80">
                    {word}
                  </h3>
                ))}
              </motion.div>

              <motion.div {...fadeUp(0.1)} className="space-y-12">
                <p className="text-[22px] md:text-[26px] font-display text-white/90 italic leading-relaxed">
                  {borderlessWithin.content[8]}
                </p>
                <p className="text-[18px] leading-[1.9] text-white/60">
                  {borderlessWithin.content[9]}
                </p>
                <h3 className="font-display text-3xl md:text-5xl text-[#B59A63] pt-8">
                  {borderlessWithin.content[10]}
                </h3>
              </motion.div>
            </div>
          </section>
        )}

        {/* 8. SECTION: LAL DED — BEYOND IDENTITY */}
        {lalDed && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
            <div className="max-w-3xl mx-auto">
              <SectionHeading title={lalDed.heading} />
              <div className="space-y-8 mt-16">
                {lalDed.content.map((para, i) => {
                  if (i === 5) {
                    return (
                      <motion.p key={i} {...fadeUp(0)} className="font-display text-3xl md:text-4xl text-[#12636B] italic py-8 border-l-2 border-[#B59A63] pl-8 my-12">
                        {para}
                      </motion.p>
                    )
                  }
                  return (
                    <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                      {para}
                    </p>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* 9. SECTION: NATURE AS THE FIRST TEACHER */}
        {nature && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#F7F6F1]">
            <div className="max-w-3xl mx-auto">
              <SectionHeading title={nature.heading} />
              
              <div className="space-y-8 mt-16">
                {nature.content.slice(0, 3).map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>

              {/* Strong Visual Emphasis for Nature Sequence */}
              <motion.div {...fadeUp(0)} className="my-20 py-16 border-y border-[#12636B]/20 text-center">
                <div className="space-y-6">
                  {[3, 4, 5].map((idx) => (
                    <h3 key={idx} className="font-display text-4xl md:text-5xl text-[#12636B]">
                      {nature.content[idx]}
                    </h3>
                  ))}
                  <h3 className="font-display text-3xl md:text-4xl text-[#0D343A]/60 italic mt-12">
                    {nature.content[6]}
                  </h3>
                </div>
              </motion.div>

              <div className="space-y-8">
                {nature.content.slice(7).map((para, i) => {
                  if (i === 11) { // The final question
                    return (
                      <motion.h3 key={i} {...fadeUp(0)} className="font-display text-3xl md:text-4xl text-[#12636B] italic text-center py-12 mt-12">
                        “{para}”
                      </motion.h3>
                    )
                  }
                  // Handling the short sequence 10-15
                  if (i >= 3 && i <= 8) { // Adjusting index for slice(7)
                    return (
                      <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80 text-center">
                        {para}
                      </p>
                    )
                  }
                  return (
                    <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                      {para}
                    </p>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* 10. SECTION: THE DROP AND THE OCEAN (VISUAL CENTERPIECE) */}
        {dropOcean && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-white overflow-hidden relative">
            <div className="max-w-3xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl text-[#12636B] mb-12">
                  {dropOcean.heading}
                </h2>
              </div>

              <div className="space-y-8 text-center relative z-10">
                {dropOcean.content.slice(0, 4).map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>

              {/* Ripple Animation Metaphor */}
              <div className="relative py-48 my-8 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {[1, 2, 3, 4].map((ring) => (
                    <motion.div
                      key={ring}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ 
                        scale: [0, 1.5, 3], 
                        opacity: [0, 0.4, 0] 
                      }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: 5,
                        ease: "linear",
                        repeat: Infinity,
                        delay: ring * 1.25
                      }}
                      className="absolute w-48 h-48 border-[1px] border-[#4AAEAE] rounded-full"
                    />
                  ))}
                  <div className="w-3 h-3 bg-[#12636B] rounded-full shadow-[0_0_20px_rgba(18,99,107,0.5)]" />
                </div>
                
                <motion.div {...fadeUp(0)} className="relative z-10 max-w-xl mx-auto bg-white/60 backdrop-blur-md p-8 text-center">
                  <h3 className="font-display text-3xl md:text-4xl text-[#12636B] italic mb-6">
                    {dropOcean.content[4]}
                  </h3>
                  <p className="text-[20px] font-display text-[#0D343A]/60">
                    {dropOcean.content[5]}<br/>
                    {dropOcean.content[6]}<br/>
                    {dropOcean.content[7]}
                  </p>
                </motion.div>
              </div>

              <div className="space-y-8 text-center">
                {dropOcean.content.slice(8).map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 11. SECTION: SERVICE AS A MEDIUM */}
        {serviceMedium && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#F7F6F1]">
            <div className="max-w-3xl mx-auto">
              <SectionHeading title={serviceMedium.heading} />
              
              <div className="space-y-8 mt-16">
                {serviceMedium.content.slice(0, 3).map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>

              {/* Progression Sequence */}
              <motion.div {...fadeUp(0)} className="my-20 py-16 pl-8 border-l border-[#B59A63]/50">
                <div className="space-y-6">
                  <h3 className="font-display text-3xl text-[#12636B] mb-8">{serviceMedium.content[3]}</h3>
                  {[4, 5, 6, 7, 8].map((idx) => (
                    <p key={idx} className="text-[20px] md:text-[22px] text-[#0D343A]/70 font-light">
                      {serviceMedium.content[idx]}
                    </p>
                  ))}
                  <p className="text-[22px] md:text-[26px] font-display text-[#12636B] italic mt-12">
                    {serviceMedium.content[9]}
                  </p>
                </div>
              </motion.div>

              <div className="space-y-8">
                {serviceMedium.content.slice(10).map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 12. SECTION: FROM DOING TO BEING */}
        {doingToBeing && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-20">
                <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-6 font-display text-3xl md:text-5xl text-[#12636B] uppercase tracking-widest">
                  <span>Doing</span>
                  <span className="w-12 h-[1px] bg-[#B59A63]" />
                  <span>Being</span>
                </motion.div>
              </div>

              <div className="space-y-8 mt-16">
                {doingToBeing.content.slice(0, 4).map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80 text-center">
                    {para}
                  </p>
                ))}
              </div>

              <motion.div {...fadeUp(0)} className="my-24 py-16 border-y border-[#12636B]/10">
                <div className="space-y-12">
                  {[4, 5, 6, 7].map((idx) => (
                    <h3 key={idx} className="font-display text-3xl md:text-4xl text-[#12636B] text-center italic">
                      {doingToBeing.content[idx]}
                    </h3>
                  ))}
                </div>
              </motion.div>

              <div className="space-y-8 text-center">
                {doingToBeing.content.slice(8).map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 13. SECTION: LAL DED INTERNATIONAL CENTRE */}
        {centre && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#F7F6F1]">
            <div className="max-w-3xl mx-auto">
              <SectionHeading title={centre.heading} />
              
              <div className="space-y-8 mt-16">
                {centre.content.slice(0, 8).map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>

              {/* Major Emphasis */}
              <motion.div {...fadeUp(0)} className="mt-24 pt-16 border-t border-[#12636B]/20 text-center">
                <p className="text-[14px] uppercase tracking-widest text-[#B59A63] font-bold mb-8">
                  {centre.content[8]}
                </p>
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#12636B] italic leading-tight">
                  “{centre.content[9]}”
                </h3>
              </motion.div>
            </div>
          </section>
        )}

        {/* 14/15. SECTION: A JOURNEY WITHOUT OWNERSHIP */}
        {ownership && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl text-[#12636B] mb-12">
                  {ownership.heading}
                </h2>
              </div>
              
              <div className="space-y-8 mt-16 text-center">
                <p className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                  {ownership.content[0]}
                </p>
                <p className="text-[20px] md:text-[22px] font-display text-[#12636B] italic mt-8">
                  {ownership.content[1]}
                </p>
              </div>

              {/* Strong Editorial 'Not my...' Sequence */}
              <motion.div {...fadeUp(0)} className="my-24 max-w-2xl mx-auto space-y-12">
                {[2, 3, 4, 5].map((idx) => (
                  <p key={idx} className="text-[22px] md:text-[26px] font-display text-[#12636B] leading-relaxed">
                    {ownership.content[idx]}
                  </p>
                ))}
                
                <div className="pt-12 border-t border-[#B59A63]/30">
                  <p className="text-[22px] md:text-[26px] font-display text-[#B59A63] leading-relaxed">
                    {ownership.content[6]}<br/>
                    {ownership.content[7]}<br/>
                    <span className="text-[#0D343A]/80">{ownership.content[8]}</span>
                  </p>
                </div>
              </motion.div>

              <div className="space-y-8 text-center mt-24">
                {ownership.content.slice(9, 13).map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 16. FINAL CLOSING */}
        <section className="py-48 px-6 md:px-12 lg:px-16 bg-[#155A8A] text-[#F7F6F1] text-center overflow-hidden relative">
          <div className="absolute inset-0 z-0 opacity-10">
             <div className="absolute inset-0 bg-gradient-to-t from-[#0D343A] to-transparent" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <p className="font-display text-[clamp(2rem,6vw,4.5rem)] leading-tight text-white mb-8">
              {ownership?.content[14]}
            </p>
            <p className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-tight text-[#B59A63] italic">
              {ownership?.content[15]}
            </p>
          </motion.div>

          {/* Links to related pages */}
          <motion.div {...fadeUp(1)} className="mt-32 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10">
            <Link 
              to="/heart-of-the-cause"
              className="group flex flex-col items-center gap-3 text-white/50 hover:text-white transition-colors duration-500 uppercase tracking-[0.2em] text-[10px] font-bold"
            >
              <span>The Heart of the Cause</span>
              <span className="w-[1px] h-8 bg-white/20 group-hover:bg-[#B59A63] transition-colors duration-500" />
            </Link>
            <Link 
              to="/legacy"
              className="group flex flex-col items-center gap-3 text-white/50 hover:text-white transition-colors duration-500 uppercase tracking-[0.2em] text-[10px] font-bold"
            >
              <span>Legacy Emerges</span>
              <span className="w-[1px] h-8 bg-white/20 group-hover:bg-[#B59A63] transition-colors duration-500" />
            </Link>
          </motion.div>
        </section>

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
