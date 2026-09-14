import { useSEO } from '../hooks/useSEO'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PageTransition } from '../components/PageTransition'
import { curingTheGashContent } from '../data/curingTheGash'
import { useRef } from 'react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.8, ease: 'easeOut' as const, delay },
})

export default function CuringTheGash() {
  useSEO({
    title: 'Curing the Gash | Adhik Kadam',
    description: 'A documented humanitarian intervention led by Borderless World Foundation during the 2016 Kashmir crisis, bringing specialist medical care to people suffering from serious eye injuries.',
    canonicalPath: '/curing-the-gash',
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

  const getSection = (id: string) => curingTheGashContent.sections.find(s => s.id === id)

  const theWound = getSection('the-wound')
  const forAdhik = getSection('for-adhik')
  const insideSmhs = getSection('inside-smhs')
  const theDecision = getSection('the-decision')
  const doctorsWhoCame = getSection('doctors-who-came')
  const theSurgeries = getSection('the-surgeries')
  const inshaMalik = getSection('insha-malik')
  const beyondTheatre = getSection('beyond-operating-theatre')
  const followUp = getSection('follow-up')
  const gallery = getSection('gallery')
  const followUpGallery = getSection('follow-ups-gallery')
  const newsCoverage = getSection('news-coverage')

  return (
    <PageTransition>
      <main className="bg-bwf-ivory text-bwf-deep min-h-screen font-light">
        
        {/* HERO */}
        <section ref={heroRef} className="relative h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 overflow-hidden bg-[#051315]">
          <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-40">
            {/* Using the original cover image from the document */}
            <img 
              src="/images/curing/image2.png" 
              alt="Curing the Gash" 
              className="w-full h-full object-cover mix-blend-overlay grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-[#051315]/80 to-transparent" />
          </motion.div>

          <div className="max-w-5xl mx-auto relative z-10 text-center text-bwf-ivory pb-32">
            <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-bwf-gold mb-10">
              {curingTheGashContent.hero.eyebrow}
            </motion.p>
            <motion.h1 {...fadeUp(0.1)} className="font-display text-[clamp(4rem,10vw,8rem)] leading-[0.9] tracking-tight mb-8">
              Curing the <span className="text-bwf-gold italic">Gash</span>
            </motion.h1>

            <motion.div {...fadeUp(0.2)} className="max-w-2xl mx-auto space-y-6">
              <p className="text-[18px] md:text-[22px] font-light text-bwf-ivory/80 leading-[1.8] italic">
                {curingTheGashContent.hero.subtitle}
              </p>
              <p className="text-[12px] uppercase tracking-widest text-bwf-ivory/50 font-semibold">
                {curingTheGashContent.hero.context}
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
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold">Read the story</span>
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
        
        {theWound && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
            <div className="max-w-3xl mx-auto">
              <SectionHeading title={theWound.heading} />
              <div className="space-y-8 mt-16">
                {theWound.content?.map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {forAdhik && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-bwf-ivory">
            <div className="max-w-3xl mx-auto">
              <SectionHeading title={forAdhik.heading} />
              <div className="space-y-8 mt-16">
                {forAdhik.content?.map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {insideSmhs && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#051315] text-bwf-ivory">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeUp(0)}>
                <h2 className="font-display text-4xl md:text-5xl text-bwf-gold mb-16 pb-6 border-b border-bwf-gold/10 inline-block pr-16">
                  {insideSmhs.heading}
                </h2>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-8">
                  {insideSmhs.content?.map((para, i) => (
                    <p key={i} className="text-[18px] leading-[1.9] text-bwf-ivory/80">
                      {para}
                    </p>
                  ))}
                </div>
                <motion.div {...fadeUp(0.2)} className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 rounded-xl flex flex-col justify-center">
                  <p className="text-[4rem] font-display text-bwf-gold leading-none mb-4">105</p>
                  <p className="text-[14px] uppercase tracking-widest text-bwf-ivory/60 font-semibold mb-10">Pellet-injured patients recorded at one stage</p>
                  
                  <p className="text-[4rem] font-display text-bwf-gold leading-none mb-4">70</p>
                  <p className="text-[14px] uppercase tracking-widest text-bwf-ivory/60 font-semibold">Patients requiring urgent retinal surgery</p>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {theDecision && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div {...fadeUp(0)} className="mb-20">
                <h3 className="font-display text-3xl md:text-5xl text-bwf-deep italic leading-relaxed text-center">
                  “Instead of taking the patients to the specialists, they decided to bring the specialists to Kashmir.”
                </h3>
              </motion.div>
              <div className="space-y-8 text-left">
                {theDecision.content?.map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {doctorsWhoCame && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-bwf-ivory">
            <div className="max-w-3xl mx-auto">
              <SectionHeading title={doctorsWhoCame.heading} />
              <div className="space-y-8 mt-16">
                {doctorsWhoCame.content?.map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {theSurgeries && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-white border-y border-bwf-deep/10">
            <div className="max-w-4xl mx-auto">
              <SectionHeading title={theSurgeries.heading} />
              <div className="space-y-8 mt-16 mb-16">
                {theSurgeries.content?.map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>
              
              <motion.div {...fadeUp(0.1)} className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b-2 border-bwf-deep">
                      <th className="py-4 px-6 text-[11px] uppercase tracking-widest text-bwf-deep/60 font-bold w-1/4">Date</th>
                      <th className="py-4 px-6 text-[11px] uppercase tracking-widest text-bwf-deep/60 font-bold">Team of Doctors</th>
                      <th className="py-4 px-6 text-[11px] uppercase tracking-widest text-bwf-deep/60 font-bold text-right w-1/4">Surgeries</th>
                    </tr>
                  </thead>
                  <tbody>
                    {theSurgeries.table?.map((row, i) => (
                      <tr key={i} className="border-b border-bwf-deep/10 hover:bg-bwf-ivory/50 transition-colors">
                        <td className="py-6 px-6 text-[14px] font-semibold text-bwf-deep">{row.date}</td>
                        <td className="py-6 px-6 text-[16px] text-bwf-deep/80 leading-relaxed">{row.team}</td>
                        <td className="py-6 px-6 text-[24px] font-display text-bwf-teal text-right font-semibold">{row.surgeries}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
              <motion.p {...fadeUp(0.2)} className="text-[13px] text-bwf-deep/50 italic mt-8 text-right">
                {theSurgeries.note}
              </motion.p>
            </div>
          </section>
        )}

        {inshaMalik && (
          <section className="py-40 px-6 md:px-12 lg:px-16 bg-[#051315] text-bwf-ivory text-center relative overflow-hidden">
             <div className="absolute inset-0 z-0 opacity-20">
               <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
             </div>
             <div className="max-w-3xl mx-auto relative z-10">
               <motion.div {...fadeUp(0)}>
                 <h2 className="font-display text-5xl md:text-6xl text-bwf-gold mb-16">
                   {inshaMalik.heading}
                 </h2>
               </motion.div>
               
               <div className="space-y-12 mt-16">
                 {inshaMalik.content?.slice(0,4).map((para, i) => (
                   <p key={i} className="text-[20px] md:text-[22px] font-light leading-[1.9] text-bwf-ivory/80">
                     {para}
                   </p>
                 ))}
                 
                 <motion.div {...fadeUp(0.1)} className="py-12 my-12 border-y border-bwf-gold/20">
                   <p className="font-display text-3xl md:text-4xl text-bwf-gold italic leading-relaxed">
                     {inshaMalik.content?.[4]}
                   </p>
                 </motion.div>
                 
                 <p className="text-[20px] md:text-[22px] font-light leading-[1.9] text-bwf-ivory/80">
                   {inshaMalik.content?.[5]}
                 </p>
               </div>
             </div>
          </section>
        )}

        {beyondTheatre && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
            <div className="max-w-3xl mx-auto">
              <SectionHeading title={beyondTheatre.heading} />
              
              <div className="space-y-8 mt-16">
                {beyondTheatre.content?.map((para, i) => (
                  <p key={i} className="text-[18px] leading-[1.9] text-[#0D343A]/80">
                    {para}
                  </p>
                ))}
              </div>

              <motion.div {...fadeUp(0)} className="mt-24 pt-16 border-t border-bwf-deep/20 text-center">
                <h3 className="font-display text-4xl md:text-5xl text-bwf-teal italic leading-tight">
                  “{beyondTheatre.quote}”
                </h3>
              </motion.div>
            </div>
          </section>
        )}

        {/* Gallery Preview / Image Feature */}
        <section className="py-16 px-6 md:px-12 lg:px-16 bg-bwf-ivory overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[4/3] rounded-xl overflow-hidden group">
              <img src="/images/IMG_8458.jpg" alt="Medical Camp" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden group">
              <img src="/images/IMG_8773.jpg" alt="Medical Intervention" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" loading="lazy" />
            </div>
          </div>
        </section>

        {gallery && (
          <section className="py-24 px-6 md:px-12 lg:px-16 bg-white border-t border-bwf-deep/10">
            <div className="max-w-7xl mx-auto">
              <SectionHeading title={gallery.heading} />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
                {gallery.images?.map((src, i) => (
                  <motion.div key={i} {...fadeUp(i * 0.05)} className="aspect-square rounded-xl overflow-hidden group">
                    <img src={src} alt={`Intervention Image ${i + 1}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {followUpGallery && (
          <section className="py-24 px-6 md:px-12 lg:px-16 bg-bwf-ivory">
            <div className="max-w-7xl mx-auto">
              <SectionHeading title={followUpGallery.heading} />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                {followUpGallery.images?.map((src, i) => (
                  <motion.div key={i} {...fadeUp(i * 0.1)} className="aspect-[4/3] rounded-xl overflow-hidden group">
                    <img src={src} alt={`Follow Up Image ${i + 1}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {newsCoverage && (
          <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#051315] text-bwf-ivory">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fadeUp(0)}>
                <h2 className="font-display text-4xl md:text-5xl text-bwf-gold mb-16 pb-6 border-b border-bwf-gold/10 inline-block pr-16">
                  {newsCoverage.heading}
                </h2>
              </motion.div>
              
              <ul className="space-y-4">
                {newsCoverage.links?.map((link, i) => (
                  <motion.li key={i} {...fadeUp(i * 0.05)}>
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-white/5 rounded-xl border border-white/5 hover:border-bwf-gold/30 hover:bg-white/10 transition-all duration-300"
                    >
                      <span className="text-[16px] md:text-[18px] text-bwf-ivory/80 group-hover:text-bwf-gold font-light transition-colors pr-6">
                        {link.title}
                      </span>
                      <span className="text-bwf-gold mt-4 md:mt-0 flex-shrink-0 group-hover:translate-x-1 transition-transform">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
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
