import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { aboutData } from '../../data/about'

/* ─── Reusable fade-up motion props ─────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.7, ease: 'easeOut' as const, delay },
})

/* ─── Section label ─────────────────────────────────── */
function Tag({ text }: { text: string }) {
  return <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-bwf-gold mb-6">{text}</p>
}

/* ─── Flow pills row ────────────────────────────────── */
function FlowRow({ steps, dark = false }: { steps: string[]; dark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {steps.map((s, i) => (
        <span key={i} className="flex items-center gap-3">
          <span className={`text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-2 rounded-full border transition-colors ${
            dark
              ? 'border-bwf-ivory/20 text-bwf-ivory/70'
              : 'border-bwf-deep/15 text-bwf-deep/60'
          }`}>{s}</span>
          {i < steps.length - 1 && (
            <span className={`text-sm ${dark ? 'text-bwf-gold/40' : 'text-bwf-gold/50'}`}>→</span>
          )}
        </span>
      ))}
    </div>
  )
}

/* ════════════════════════════════════════════════════
   MAIN EXPORT
════════════════════════════════════════════════════ */
export function AboutPageContent() {
  const { hero, identityOverview, earlyLife, discipline, music, turningPoint, politicalScience, journeyOrigin, kashmirEntry, presence, responsibility, bwfBridge, philosophy, principles, journeyToPhilosophy, closing, cta, courage, innerDiscipline, legacy } = aboutData

  return (
    <>
      {/* ═══ HERO ══════════════════════════════════════ */}
      <section className="relative bg-[#051315] text-bwf-ivory overflow-hidden min-h-screen flex flex-col justify-center pt-20 pb-16">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <img src="/images/IMG_8648.jpg" alt="About Hero" className="w-full h-full object-cover object-center mix-blend-overlay" />
          <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(166,124,82,0.1)_0%,transparent_65%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-[#051315]/50 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full">
          <motion.div {...fadeUp(0)} className="max-w-4xl">
            <Tag text={hero.label} />
            <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.05] text-bwf-ivory mb-8">
              A life shaped by<br />
              <em className="text-bwf-gold not-italic">presence.</em>
            </h1>
            <p className="text-bwf-ivory/70 text-[15px] font-light max-w-2xl leading-relaxed">
              {hero.supporting}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ IDENTITY OVERVIEW ═════════════════════════ */}
      <section className="bg-bwf-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Image & Stats Column */}
            <motion.div {...fadeUp(0)} className="lg:col-span-5 flex flex-col gap-12">
              <div className="h-[400px] relative overflow-hidden rounded-sm shadow-md">
                <img src="/images/IMG_8174.jpg" alt="Identity Portrait" className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-y-10 gap-x-6 border-t border-bwf-deep/10 pt-10">
                {identityOverview.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="font-light text-[2.5rem] md:text-[3rem] text-bwf-gold leading-none mb-3">{stat.year}</span>
                    <span className="text-[12px] font-bold tracking-wide uppercase text-bwf-deep/60 leading-snug">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Identity text */}
            <motion.div {...fadeUp(0.1)} className="lg:col-span-7 lg:pt-8">
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-bwf-deep leading-tight mb-4">
                {identityOverview.name}
              </h2>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-bwf-teal mb-10">
                {identityOverview.titles.join(' • ')} <br className="hidden md:block" /> {identityOverview.founder}
              </p>
              <p className="font-display text-2xl text-bwf-deep/80 italic mb-8">
                "{identityOverview.statement}"
              </p>
              <p className="text-bwf-deep/70 text-[15px] font-light leading-relaxed">
                {identityOverview.summary}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ EARLY LIFE & DISCIPLINE ═══════════════════ */}
      <section className="bg-bwf-deep text-bwf-ivory py-20 md:py-28 border-t border-bwf-ivory/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="/images/IMG_8759.jpg" alt="Early Life Background" className="w-full h-full object-cover mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-transparent to-[#051315]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <motion.div {...fadeUp(0)} className="mb-16">
            <Tag text="Early Life" />
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-bwf-ivory leading-tight max-w-3xl">
              {earlyLife.heading}
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeUp(0.1)}>
              <p className="text-[15px] font-light text-bwf-ivory/70 leading-relaxed mb-6">
                {earlyLife.paragraph1}
              </p>
              <p className="text-[15px] font-light text-bwf-ivory/70 leading-relaxed mb-10">
                {earlyLife.paragraph2}
              </p>
              <div className="aspect-video relative overflow-hidden rounded-sm shadow-md mt-12">
                <img src="/images/IMG_8065.jpg" alt="Early Life Field" className="w-full h-full object-cover object-top opacity-95" />
              </div>
            </motion.div>
            
            <motion.div {...fadeUp(0.15)} className="bg-[#051315]/90 backdrop-blur-sm p-10 md:p-14 border border-bwf-ivory/10 shadow-xl rounded-sm">
              <p className="font-display text-2xl text-bwf-gold/90 italic leading-relaxed mb-10">
                "{earlyLife.quote}"
              </p>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-bwf-ivory/10">
                {discipline.stats.map((stat, i) => (
                  <div key={i}>
                    <span className="font-light text-3xl text-bwf-gold block mb-2">{stat.number}</span>
                    <span className="text-[10px] tracking-[0.2em] font-bold text-bwf-ivory/50 uppercase block leading-tight">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ MUSIC & TURNING POINT ═════════════════════ */}
      <section className="bg-bwf-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-16">
            
            {/* Music */}
            <motion.div {...fadeUp(0)}>
              <Tag text="Music" />
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-bwf-deep leading-tight mb-6">
                {music.heading}
              </h2>
              <p className="text-[15px] font-light text-bwf-deep/70 leading-relaxed">
                {music.paragraph}
              </p>
            </motion.div>

            {/* Turning Point */}
            <motion.div {...fadeUp(0.1)}>
              <Tag text="Turning Point" />
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-bwf-deep leading-tight mb-6">
                {turningPoint.heading}
              </h2>
              <p className="text-[15px] font-light text-bwf-deep/70 leading-relaxed mb-8">
                {turningPoint.paragraph}
              </p>
              <div className="flex justify-start">
                <FlowRow steps={turningPoint.sequence} />
              </div>
            </motion.div>

          </div>

          <motion.div {...fadeUp(0.2)} className="w-full aspect-square md:aspect-[16/7] overflow-hidden rounded-sm shadow-sm relative">
            <img src="/images/IMG_8458.jpg" alt="Turning Point Journey" className="w-full h-full object-cover object-[50%_20%]" />
          </motion.div>
        </div>
      </section>

      {/* ═══ POLITICAL SCIENCE & ORIGIN ════════════════ */}
      <section className="bg-[#051315] text-bwf-ivory py-20 md:py-32 border-t border-bwf-ivory/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div {...fadeUp(0)}>
              <Tag text="Political Science" />
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-bwf-ivory leading-tight mb-6">
                {politicalScience.heading}
              </h2>
              <p className="text-bwf-ivory/70 text-[15px] font-light leading-relaxed mb-10">
                {politicalScience.paragraph}
              </p>
              <div className="border-l-2 border-bwf-gold pl-5 py-1">
                <p className="font-display text-xl text-bwf-ivory/90 italic whitespace-pre-line leading-snug">
                  "{politicalScience.quote}"
                </p>
              </div>
            </motion.div>
            
            <motion.div {...fadeUp(0.15)} className="relative bg-bwf-ivory p-10 md:p-14 text-bwf-deep overflow-hidden rounded-sm shadow-xl">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <img src="/images/IMG_8785.jpg" alt="Origin Backdrop" className="w-full h-full object-cover mix-blend-multiply grayscale" />
              </div>
              <div className="relative z-10 text-center md:text-left">
                <span className="font-light text-6xl text-bwf-teal mb-6 block">{journeyOrigin.year}</span>
                <h3 className="font-display text-2xl text-bwf-deep mb-4">{journeyOrigin.heading}</h3>
                <p className="text-[15px] font-light text-bwf-deep/80 leading-relaxed mb-8">
                  {journeyOrigin.paragraph}
                </p>
                <p className="text-[12px] font-bold tracking-[0.2em] text-bwf-deep/60 uppercase leading-relaxed">
                  "{journeyOrigin.quote}"
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══ KASHMIR ENTRY & PRESENCE ══════════════════ */}
      <section className="bg-bwf-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            
            <motion.div {...fadeUp(0)}>
              <Tag text="Kashmir Entry" />
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-bwf-deep leading-tight mb-6">
                {kashmirEntry.heading}
              </h2>
              <p className="text-[15px] font-light text-bwf-deep/70 leading-relaxed mb-6">
                {kashmirEntry.paragraph1}
              </p>
              <p className="text-[15px] font-light text-bwf-deep/70 leading-relaxed">
                {kashmirEntry.paragraph2}
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.1)}>
              <Tag text="Presence" />
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-bwf-deep leading-tight mb-6">
                {presence.heading}
              </h2>
              <p className="font-display text-xl text-bwf-deep/80 italic mb-6">
                "{presence.quote}"
              </p>
              <div className="bg-[#051315] text-bwf-ivory p-8 mb-10 rounded-sm">
                <p className="font-display text-xl text-bwf-gold italic leading-snug">
                  "{innerDiscipline.quote}"
                </p>
              </div>
              <div className="flex justify-start">
                <FlowRow steps={presence.flow} />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══ RESPONSIBILITY & BWF BRIDGE ═══════════════ */}
      <section className="bg-bwf-ivory py-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 border-t border-bwf-deep/10">
            <motion.div {...fadeUp(0)} className="py-16 md:pr-16 md:border-r border-bwf-deep/10">
              <Tag text="Responsibility" />
              <h2 className="font-display text-2xl md:text-3xl text-bwf-deep mb-4 leading-snug">
                {responsibility.heading}
              </h2>
              <p className="text-[15px] font-light text-bwf-deep/70 leading-relaxed mb-8">
                {responsibility.paragraph}
              </p>
              <div className="border-l-2 border-bwf-gold pl-5 py-2">
                <p className="font-display text-xl text-bwf-deep/80 italic leading-snug">
                  "{courage.quote}"
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="py-16 md:pl-16">
              <Tag text="Institution" />
              <h2 className="font-display text-2xl md:text-3xl text-bwf-deep mb-4 leading-snug">
                {bwfBridge.heading}
              </h2>
              <p className="text-[15px] font-light text-bwf-deep/70 leading-relaxed mb-6">
                {bwfBridge.paragraph}
              </p>
              <p className="text-[13px] font-bold text-bwf-deep/80 italic border-l-2 border-bwf-gold pl-4 mb-6">
                "{bwfBridge.statement}"
              </p>
              <p className="font-display text-xl text-bwf-teal/90 italic leading-snug">
                "{bwfBridge.closingQuote}"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PHILOSOPHY & PRINCIPLES ═══════════════════ */}
      <section className="bg-bwf-deep text-bwf-ivory py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <motion.div {...fadeUp(0)}>
              <Tag text="Core Philosophy" />
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-bwf-ivory leading-tight mb-8">
                {philosophy.heading}
              </h2>
              <div className="space-y-4 mb-10">
                {philosophy.points.map((p, i) => (
                  <motion.div key={i} {...fadeUp(i * 0.07)} className="flex items-start gap-4">
                    <span className="w-6 h-6 rounded-full border border-bwf-gold/40 flex items-center justify-center text-[10px] font-bold text-bwf-gold shrink-0 mt-0.5">{i + 1}</span>
                    <p className="text-[15px] font-light text-bwf-ivory/80 leading-relaxed">{p}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-[14px] text-bwf-gold/90 italic border-l-2 border-bwf-gold/50 pl-4 mb-4">
                "{philosophy.statement1}"
              </p>
              <p className="text-[14px] text-bwf-gold/90 italic border-l-2 border-bwf-gold/50 pl-4">
                "{philosophy.statement2}"
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-bwf-ivory/10 lg:mt-12">
              {principles.map((principle, i) => (
                <div key={i} className="bg-[#051315] p-8 aspect-square flex items-center justify-center text-center group hover:bg-[#081a1d] transition-colors">
                  <span className="text-[13px] font-bold tracking-[0.2em] text-bwf-ivory/70 group-hover:text-bwf-gold transition-colors uppercase leading-relaxed">{principle}</span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══ THE EVOLUTION ═════════════════════════════ */}
      <section className="bg-[#F7F6F1] py-24 md:py-32 text-center border-t border-bwf-deep/10">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp(0)}>
            <Tag text="The Evolution" />
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-bwf-deep leading-tight mb-24 md:mb-32">
              Not a career. A commitment.
            </h2>
          </motion.div>
            
          {/* IN-DEPTH SCROLL TIMELINE */}
          <EvolutionTimeline steps={journeyToPhilosophy} />
            
          <motion.div {...fadeUp(0.1)} className="mt-32">
            <div className="max-w-3xl mx-auto mb-16 p-10 md:p-14 border border-bwf-deep/10 bg-white shadow-sm rounded-sm relative z-10">
               <p className="font-display text-2xl md:text-3xl text-bwf-deep mb-8 italic leading-snug">
                 "{legacy.quote1}"
               </p>
               <p className="text-[12px] font-bold tracking-[0.25em] text-bwf-teal uppercase">
                 "{legacy.quote2}"
               </p>
            </div>

            <p className="text-[15px] font-light text-bwf-deep/70 leading-relaxed max-w-2xl mx-auto relative z-10">
              {closing.paragraph}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ════════════════════════════════ */}
      <section className="relative bg-[#051315] overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src="/images/IMG_8787.jpg" alt="Final Call" className="w-full h-full object-cover mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-transparent to-[#051315]" />
        </div>
        
        <div className="relative z-10 grid md:grid-cols-2 border-t border-bwf-ivory/10">
          <Link
            to={cta.primary.link}
            className="flex items-center justify-center gap-4 py-16 px-8 text-bwf-ivory/80 hover:text-bwf-gold hover:bg-[#051315]/40 backdrop-blur-sm border-b md:border-b-0 md:border-r border-bwf-ivory/10 transition-all duration-500 group"
          >
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase">{cta.primary.text}</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
          <Link
            to={cta.secondary.link}
            className="flex items-center justify-center gap-4 py-16 px-8 text-bwf-ivory/80 hover:text-bwf-gold hover:bg-[#051315]/40 backdrop-blur-sm transition-all duration-500 group"
          >
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase">{cta.secondary.text}</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}

/* ─── Responsive Editorial Timeline ───────────────── */
function EvolutionTimeline({ steps }: { steps: any[] }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto py-10 md:py-20 flex flex-col md:items-center">
      
      {/* Background Track */}
      <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#12636B]/20 md:-translate-x-1/2 z-0" />
      
      {/* Scroll-Linked Fill Line */}
      <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 z-0">
        <motion.div 
          className="w-full h-full bg-[#B59A63] origin-top" 
          style={{ scaleY: scrollYProgress }} 
        />
      </div>

      <div className="flex flex-col gap-16 md:gap-32 relative z-10 w-full pt-10">
        {steps.map((step, i) => (
          <TimelineItem key={i} step={step} index={i} />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ step, index }: { step: any, index: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center 85%", "center center"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [30, 0])
  
  // Fill color transition for the node
  const nodeBg = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    ["#F7F6F1", "#12636B"]
  )
  const nodeBorder = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    ["rgba(18,99,107,0.3)", "rgba(181,154,99,1)"]
  )

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="flex items-center w-full relative pl-20 md:pl-0 min-h-[60px]">
      
      {/* Node Container (Absolute to track) */}
      <div className="absolute left-[25px] md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
        <motion.div 
          style={{ backgroundColor: nodeBg, borderColor: nodeBorder }}
          className="w-4 h-4 rounded-full border-[2px] shadow-sm transition-colors duration-300"
        />
      </div>

      {/* Desktop & Mobile Content Layout */}
      <motion.div 
        style={{ opacity, y }} 
        className={`w-full md:w-1/2 flex flex-col justify-center ${isEven ? 'md:pr-16 md:items-end md:text-right md:mr-auto' : 'md:pl-16 md:items-start md:text-left md:ml-auto'}`}
      >
        <span className="text-[10px] md:text-[11px] font-sans font-bold tracking-[0.25em] text-[#12636B]/60 uppercase mb-2 block">
          {step.from}
        </span>
        <span className="font-display text-2xl md:text-4xl text-[#051315] block">
          {step.to}
        </span>
      </motion.div>
    </div>
  )
}

