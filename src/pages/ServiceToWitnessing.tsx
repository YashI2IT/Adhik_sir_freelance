import { useSEO } from '../hooks/useSEO'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PageTransition } from '../components/PageTransition'
import { serviceToWitnessingContent } from '../data/serviceToWitnessing'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.8, ease: 'easeOut' as const, delay },
})

export default function ServiceToWitnessing() {
  useSEO({
    title: 'From Service to Witnessing | Adhik Kadam',
    description: 'A reflection by G. L. Daftari on Adhik Kadam\'s journey from service and action toward awareness, witnessing, responsibility and self-realisation.',
    canonicalPath: '/from-service-to-witnessing',
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

  const getSection = (heading: string) => serviceToWitnessingContent.sections.find(s => s.heading === heading)

  const worldOfDoing = getSection("The World of Doing")
  const powerOfWitnessing = getSection("The Power of Witnessing")
  const serviceMirror = getSection("When Service Becomes a Mirror")
  const itIsHappening = getSection("From “I Am Doing” to “It Is Happening”")
  const fiveElements = getSection("The Witness and the Five Elements")
  const serviceMedium = getSection("Service as a Medium for Self-Realisation")
  const participateWithoutPossessing = getSection("To Participate Without Possessing")
  const dropAndOcean = getSection("The Drop and the Ocean")
  const becomingWitness = getSection("Becoming a Witness to One's Own Journey")
  const finalSection = getSection("From Service to Witnessing")

  return (
    <PageTransition>
      <main className="bg-[#F7F6F1] text-[#0D343A] min-h-screen font-light">
        
        {/* 1. CINEMATIC HERO */}
        <section ref={heroRef} className="relative h-screen flex flex-col justify-end pb-32 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#051315]">
          <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-40">
            <img 
              src="/images/IMG_8787.jpg" 
              alt="Himalayan Landscape" 
              className="w-full h-full object-cover object-[center_30%] mix-blend-overlay grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-[#051315]/80 to-transparent" />
          </motion.div>

          <div className="max-w-5xl mx-auto relative z-10 text-center text-[#F7F6F1]">
            <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#B59A63] mb-8">
              {serviceToWitnessingContent.hero.eyebrow}
            </motion.p>
            <motion.h1 {...fadeUp(0.1)} className="font-display text-[clamp(4rem,8vw,8rem)] leading-[0.9] tracking-tight mb-8">
              To <span className="text-[#B59A63] italic">Witnessing</span>
            </motion.h1>

            <motion.div {...fadeUp(0.2)} className="max-w-2xl mx-auto mb-16 space-y-4">
              <p className="text-[18px] md:text-[22px] font-light text-white/80 leading-[1.8] italic">
                {serviceToWitnessingContent.hero.subtitle}
              </p>
              <p className="text-[14px] md:text-[16px] tracking-widest uppercase text-white/60">
                {serviceToWitnessingContent.hero.supportingLine}
              </p>
              <p className="text-[14px] md:text-[16px] tracking-widest uppercase text-[#B59A63] pt-4 border-t border-white/10 inline-block">
                {serviceToWitnessingContent.hero.author}
              </p>
            </motion.div>
          </div>

          <motion.button 
            onClick={scrollToContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-[#B59A63] hover:text-white transition-colors z-20 group"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold">Begin reading</span>
            <div className="w-[1px] h-12 bg-[#B59A63]/30 relative overflow-hidden">
              <motion.div 
                animate={{ y: [-48, 48] }} 
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-full bg-[#B59A63]"
              />
            </div>
          </motion.button>
        </section>

        {/* 2. INTRODUCTION */}
        <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div {...fadeUp(0)}>
              <p className="text-[18px] md:text-[20px] leading-[1.9] text-[#0D343A]/80">
                {serviceToWitnessingContent.introduction[0]}
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="py-12 my-8 border-y border-[#051315]/10 text-center">
              <h2 className="font-display text-3xl md:text-4xl text-[#051315] italic">
                {serviceToWitnessingContent.introduction[1]}
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.2)}>
              <p className="text-[18px] md:text-[20px] leading-[1.9] text-[#0D343A]/80">
                {serviceToWitnessingContent.introduction[2]}
              </p>
              <p className="text-[20px] md:text-[22px] font-display text-[#051315] italic leading-[1.9] mt-8">
                {serviceToWitnessingContent.introduction[3]}
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. THE WORLD OF DOING & THE POWER OF WITNESSING */}
        <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#F7F6F1]">
          <div className="max-w-3xl mx-auto">
            {worldOfDoing && (
              <div className="mb-32">
                <SectionHeading title={worldOfDoing.heading} />
                <div className="space-y-8 mt-12">
                  <p className="text-[18px] leading-[1.9] text-[#0D343A]/80">{worldOfDoing.content[0]}</p>
                  
                  {/* Pull quote for identifying with action */}
                  <motion.div {...fadeUp(0)} className="my-16 pl-8 border-l border-[#B59A63]">
                    <p className="text-[18px] leading-[1.9] text-[#0D343A]/80 mb-6">{worldOfDoing.content[1].split(' I am doing this.')[0]}</p>
                    <div className="space-y-3 font-display text-2xl md:text-3xl text-[#051315] italic">
                      <p>“I am doing this.”</p>
                      <p>“I created this.”</p>
                      <p>“These are my people.”</p>
                      <p>“This is my organisation.”</p>
                      <p>“This is my achievement.”</p>
                    </div>
                  </motion.div>
                  
                  <p className="text-[18px] leading-[1.9] text-[#0D343A]/80">{worldOfDoing.content[2]}</p>
                </div>
              </div>
            )}

            {powerOfWitnessing && (
              <div>
                <SectionHeading title={powerOfWitnessing.heading} />
                <div className="space-y-8 mt-12">
                  <p className="text-[18px] leading-[1.9] text-[#0D343A]/80">{powerOfWitnessing.content[0]}</p>
                  
                  <motion.div {...fadeUp(0)} className="my-16 py-12 border-y border-[#051315]/10 space-y-6">
                    {powerOfWitnessing.content[1].split('? ').map((q, i, arr) => (
                      <p key={i} className="text-[20px] md:text-[24px] font-display text-[#051315] leading-relaxed">
                        {q}{i < arr.length - 1 ? '?' : ''}
                      </p>
                    ))}
                  </motion.div>
                  
                  <p className="text-[18px] leading-[1.9] text-[#0D343A]/80">{powerOfWitnessing.content[2]}</p>
                  <p className="text-[22px] md:text-[26px] font-display text-[#051315] italic mt-8">{powerOfWitnessing.content[3]}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 4. WHEN SERVICE BECOMES A MIRROR */}
        {serviceMirror && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
            <div className="max-w-3xl mx-auto">
              <SectionHeading title={serviceMirror.heading} />
              <div className="space-y-8 mt-12">
                {serviceMirror.content.map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. FROM I AM DOING TO IT IS HAPPENING */}
        {itIsHappening && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#051315] text-[#F7F6F1]">
            <div className="max-w-3xl mx-auto">
              <motion.div {...fadeUp(0)}>
                <h2 className="font-display text-4xl md:text-5xl text-[#B59A63] mb-10 pb-6 border-b border-[#B59A63]/20 inline-block pr-16">
                  {itIsHappening.heading}
                </h2>
              </motion.div>
              <div className="space-y-8 mt-12">
                {itIsHappening.content.slice(0, 3).map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-white/80">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* IMAGE 1: Transitioning away from ownership */}
        <section className="bg-[#051315] pb-32">
          <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
            <motion.div {...fadeUp(0)} className="aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-xl">
              <img 
                src="/images/IMG_0001.jpeg" 
                alt="Adhik Kadam in contemplation" 
                loading="lazy"
                className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            {itIsHappening && (
              <div className="max-w-3xl mx-auto mt-16 space-y-8 text-center">
                <p className="text-[22px] md:text-[26px] font-display text-white/90 italic leading-relaxed">
                  {itIsHappening.content[3]}
                </p>
                <p className="text-[18px] leading-[1.9] text-white/60">
                  {itIsHappening.content[4]}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* 6. THE WITNESS AND THE FIVE ELEMENTS */}
        {fiveElements && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl text-[#051315] mb-16">
                {fiveElements.heading}
              </h2>
              
              <div className="space-y-8">
                {fiveElements.content.slice(0, 3).map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>

              <motion.div {...fadeUp(0)} className="my-24 py-16 border-y border-[#B59A63]/30 relative">
                <div className="absolute left-1/2 -top-3 -translate-x-1/2 w-1.5 h-1.5 bg-[#B59A63] rounded-full" />
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#051315] italic leading-tight px-4">
                  “{fiveElements.content[3]}”
                </h3>
                <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-1.5 h-1.5 bg-[#B59A63] rounded-full" />
              </motion.div>

              <p className="text-[18px] leading-[1.9] text-[#0D343A]/80 max-w-2xl mx-auto">
                {fiveElements.content[4]}
              </p>
            </div>
          </section>
        )}

        {/* 7. SERVICE AS A MEDIUM FOR SELF-REALISATION */}
        {serviceMedium && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#F7F6F1]">
            <div className="max-w-3xl mx-auto">
              <SectionHeading title={serviceMedium.heading} />
              <div className="space-y-8 mt-12">
                <p className="text-[18px] leading-[1.9] text-[#0D343A]/80">{serviceMedium.content[0]}</p>
                <h3 className="font-display text-3xl text-[#051315] italic py-6">{serviceMedium.content[1]}</h3>
                <p className="text-[18px] leading-[1.9] text-[#0D343A]/80">{serviceMedium.content[2]}</p>
                
                <motion.div {...fadeUp(0)} className="my-16 pl-8 border-l border-[#B59A63]">
                  <p className="text-[20px] md:text-[24px] font-display text-[#051315] leading-relaxed">
                    {serviceMedium.content[3].split('?').join('?\n\n').trim()}
                  </p>
                </motion.div>
                
                <p className="text-[22px] font-display text-[#0D343A]/70 uppercase tracking-widest">{serviceMedium.content[4]}</p>
              </div>
            </div>
          </section>
        )}

        {/* 8. TO PARTICIPATE WITHOUT POSSESSING */}
        {participateWithoutPossessing && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-white border-t border-[#051315]/5">
            <div className="max-w-3xl mx-auto">
              <SectionHeading title={participateWithoutPossessing.heading} />
              <div className="space-y-12 mt-16">
                <p className="text-[20px] md:text-[22px] leading-[2] text-[#051315] font-light">
                  {participateWithoutPossessing.content[0]}
                </p>
                <p className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                  {participateWithoutPossessing.content[1]}
                </p>
                <p className="text-[24px] font-display text-[#051315] italic">
                  {participateWithoutPossessing.content[2]}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 9. THE DROP AND THE OCEAN */}
        {dropAndOcean && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#051315] text-white relative overflow-hidden">
            {/* Ambient ocean background effect */}
            <div className="absolute inset-0 z-0 opacity-20">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#12636B]/40 via-[#051315] to-[#051315]" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <motion.h2 {...fadeUp(0)} className="font-display text-4xl md:text-5xl lg:text-6xl text-[#B59A63] mb-20">
                {dropAndOcean.heading}
              </motion.h2>

              <div className="space-y-10 text-center">
                <p className="text-[20px] leading-[2] text-white/90 font-light">
                  {dropAndOcean.content[0]}
                </p>
                <p className="text-[18px] leading-[2] text-white/70">
                  {dropAndOcean.content[1]}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* IMAGE 2: The Drop and the Ocean / Becoming a Witness */}
        <section className="bg-[#051315]">
          <div className="w-full">
            <motion.div {...fadeUp(0)} className="h-[60vh] md:h-[80vh] overflow-hidden">
              <img 
                src="/images/IMG_0002.jpeg" 
                alt="Observing the journey" 
                loading="lazy"
                className="w-full h-full object-cover object-[center_30%] grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </div>
        </section>

        {/* Remaining of Drop and Ocean / Becoming Witness */}
        <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#051315] text-[#F7F6F1]">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            {dropAndOcean && (
              <>
                <p className="text-[18px] leading-[2] text-white/70">
                  {dropAndOcean.content[2]}
                </p>
                <p className="text-[24px] md:text-[30px] font-display text-[#B59A63] italic leading-relaxed py-8">
                  {dropAndOcean.content[3]}
                </p>
              </>
            )}

            {becomingWitness && (
              <div className="pt-24 border-t border-white/10">
                <h2 className="font-display text-3xl md:text-4xl text-white mb-12">
                  {becomingWitness.heading}
                </h2>
                <div className="space-y-8 text-center">
                  <p className="text-[18px] leading-[1.9] text-white/70">{becomingWitness.content[0]}</p>
                  <p className="text-[20px] leading-[1.9] font-light text-white/90">{becomingWitness.content[1]}</p>
                  <p className="text-[18px] leading-[1.9] text-white/70">{becomingWitness.content[2]}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 10. FINAL SECTION: FROM SERVICE TO WITNESSING */}
        {finalSection && (
          <section className="py-48 px-6 md:px-12 lg:px-16 bg-white text-center relative">
            <div className="max-w-4xl mx-auto space-y-12 relative z-10">
              <h2 className="font-display text-5xl md:text-6xl text-[#051315] mb-16 italic">
                {finalSection.heading}
              </h2>
              
              <p className="text-[20px] leading-[2] text-[#0D343A]/80 max-w-3xl mx-auto">
                {finalSection.content[0]}<br/><br/>
                {finalSection.content[1]}
              </p>
              
              <div className="py-16 my-16 border-y border-[#051315]/10 max-w-3xl mx-auto">
                <p className="text-[22px] md:text-[28px] font-display text-[#051315] leading-[1.8]">
                  {finalSection.content[2]}
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-[24px] md:text-[32px] font-display text-[#B59A63] italic">
                  {finalSection.content[3]}
                </p>
                <p className="text-[20px] md:text-[26px] font-display text-[#0D343A]/60">
                  {finalSection.content[4]}
                </p>
                <p className="text-[18px] tracking-[0.2em] uppercase text-[#051315] font-bold mt-16 pt-16">
                  {finalSection.content[5]}
                </p>
              </div>
            </div>
            
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
              <div className="w-[1px] h-24 bg-[#051315]/20" />
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
      <h2 className="font-display text-4xl md:text-5xl text-[#051315] mb-10 pb-6 border-b border-[#051315]/10 inline-block pr-16">
        {title}
      </h2>
    </motion.div>
  )
}
