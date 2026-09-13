import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { impactData } from '../../data/impact'

/* ─── Reusable fade-up motion props ─────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.7, ease: 'easeOut' as const, delay },
})

const heroFadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut' as const, delay },
})

/* ─── Animated number counter ───────────────────────── */
function AnimatedStat({ value, label, context, size = 'lg' }: {
  value: string; label: string; context?: string; size?: 'sm' | 'md' | 'lg' | 'xl'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const sizes = {
    xl: 'text-[4.5rem] md:text-[6rem] lg:text-[8rem]',
    lg: 'text-[3.5rem] md:text-[5rem]',
    md: 'text-[2.5rem] md:text-[3.5rem]',
    sm: 'text-[2rem] md:text-[2.8rem]',
  }

  return (
    <div ref={ref} className="flex flex-col">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' as const }}
        className={`${sizes[size]} font-light text-bwf-gold leading-none tracking-tight`}
      >
        {value}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-[10px] font-bold tracking-[0.22em] uppercase text-bwf-deep mt-3 mb-2"
      >
        {label}
      </motion.span>
      {context && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[13px] text-bwf-deep/55 leading-relaxed max-w-xs"
        >
          {context}
        </motion.p>
      )}
    </div>
  )
}

/* ─── Section label ─────────────────────────────────── */
function Tag({ text }: { text: string }) {
  return <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-bwf-gold mb-6">{text}</p>
}

/* ─── Flow pills row ────────────────────────────────── */
function FlowRow({ steps, dark = false }: { steps: string[]; dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {steps.map((s, i) => (
        <span key={i} className={`text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-2.5 rounded-sm border transition-colors flex items-center gap-3 ${
          dark
            ? 'border-bwf-ivory/15 text-bwf-ivory/80 bg-bwf-ivory/5'
            : 'border-bwf-deep/15 text-bwf-deep/80 bg-bwf-deep/5'
        }`}>
          {s}
          {i < steps.length - 1 && (
            <span className={dark ? 'text-bwf-gold/50' : 'text-bwf-gold/60'}>→</span>
          )}
        </span>
      ))}
    </div>
  )
}

/* ════════════════════════════════════════════════════
   MAIN EXPORT
════════════════════════════════════════════════════ */
export function ImpactPageContent() {
  const { headlineStats, girlsTransformation, professionalOutcomes, selfReliance,
    leadershipImpact, circleOfOwnership, healthcareImpact, healthcareAccess,
    emergencyImpact, resourceMobilisation, communityImpact, womenImpact,
    intergenerationalImpact, humanitarianism, charityToDignity, impactFramework,
    closing, cta } = impactData

  const { scrollY } = useScroll()
  
  const yHero = useTransform(scrollY, [0, 1000], [0, 250])
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0])

  return (
    <div>
      {/* ═══ HERO ══════════════════════════════════════ */}
      <section className="relative bg-[#051315] text-bwf-ivory overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32 min-h-[85vh] flex flex-col justify-end">
        
        {/* Parallax Background */}
        <motion.div 
          style={{ y: yHero, opacity: opacityHero }}
          className="absolute inset-0 w-full h-[130%] -top-[15%]"
        >
          <img 
            src="/images/IMG_8110.jpg" 
            alt="Impact Hero" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#051315]/80 via-[#051315]/40 to-[#051315]" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full">
          <motion.div {...heroFadeUp(0)} className="max-w-4xl">
            <Tag text="Impact" />
            <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.05] text-bwf-ivory mb-8 text-balance">
              What changes when<br />
              <em className="text-bwf-gold not-italic">service becomes</em><br />
              a system?
            </h1>
            <p className="text-bwf-ivory/60 text-lg md:text-xl font-display max-w-2xl leading-relaxed text-balance">
              Three decades of humanitarian work across protection, education, healthcare, emergency response, empowerment and community relationships.
            </p>
          </motion.div>

          {/* Philosophy pull-quote */}
          <motion.div {...fadeUp(0.2)} className="mt-16 pt-12 border-t border-bwf-ivory/10 max-w-3xl">
            <p className="font-display text-xl md:text-2xl text-bwf-ivory/50 italic leading-relaxed">
              "Numbers establish scale, but they cannot completely describe transformation."
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ HEADLINE STATS ════════════════════════════ */}
      <section className="bg-bwf-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp(0)} className="mb-3">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-bwf-deep/30 border border-bwf-deep/10 px-3 py-1 rounded-full">
              Metrics pending final client review
            </span>
          </motion.div>

          {/* Primary stats — huge */}
          <div className="grid md:grid-cols-2 gap-0 border-y border-bwf-deep/10 mt-12">
            {headlineStats.primary.map((stat, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className={`py-12 md:py-16 ${i === 0 ? 'md:border-r border-bwf-deep/10 md:pr-16' : 'md:pl-16'}`}
              >
                <AnimatedStat value={stat.value} label={stat.label} context={stat.context} size="xl" />
              </motion.div>
            ))}
          </div>

          {/* Secondary stats */}
          <div className="grid md:grid-cols-2 border-b border-bwf-deep/10">
            {headlineStats.secondary.map((stat, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                className={`py-10 md:py-12 ${i === 0 ? 'md:border-r border-bwf-deep/10 md:pr-16' : 'md:pl-16'}`}
              >
                <AnimatedStat value={stat.value} label={stat.label} context={stat.context} size="lg" />
              </motion.div>
            ))}
          </div>

          {/* Contextual stats */}
          <div className="grid md:grid-cols-3 border-b border-bwf-deep/10">
            {headlineStats.contextual.map((stat, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                className={`py-10 ${i < 2 ? 'md:border-r border-bwf-deep/10 md:pr-10' : ''} ${i > 0 ? 'md:pl-10' : ''}`}
              >
                <AnimatedStat value={stat.value} label={stat.label} context={stat.context} size="md" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GIRLS TRANSFORMATION ══════════════════════ */}
      <section className="bg-bwf-deep text-bwf-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeUp(0)}>
              <Tag text="Girls & Transformation" />
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-bwf-ivory leading-tight mb-6 text-balance">
                {girlsTransformation.heading}
              </h2>
              <p className="text-bwf-ivory/60 text-[15px] leading-relaxed">
                {girlsTransformation.paragraph}
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.15)} className="pt-2">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-bwf-ivory/30 mb-6">The Journey</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {girlsTransformation.flow.map((step, i) => (
                  <span key={i} className={`text-[11px] font-bold tracking-widest uppercase px-4 py-2.5 rounded-sm border flex items-center gap-3 ${
                    i === girlsTransformation.flow.length - 1
                      ? 'border-bwf-gold/60 text-bwf-gold bg-bwf-gold/10'
                      : 'border-bwf-ivory/15 text-bwf-ivory/80 bg-bwf-ivory/5'
                  }`}>
                    {step}
                    {i < girlsTransformation.flow.length - 1 && <span className="text-bwf-gold/50 text-sm">→</span>}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PROFESSIONAL OUTCOMES ══════════════════════ */}
      <section className="bg-bwf-ivory py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div {...fadeUp(0)} className="lg:col-span-4">
              <Tag text="Professional Outcomes" />
              <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.6rem)] text-bwf-deep leading-tight mb-4">
                {professionalOutcomes.heading}
              </h2>
              <p className="text-bwf-deep/60 text-[14px] leading-relaxed">
                {professionalOutcomes.paragraph}
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="lg:col-span-8">
              <div className="flex flex-wrap gap-2.5">
                {professionalOutcomes.professions.map((p, i) => (
                  <span key={i}
                    className="text-[12.5px] font-medium tracking-wide px-4 py-2.5 border border-bwf-deep/15 bg-white text-bwf-deep/75 hover:border-bwf-gold/50 hover:text-bwf-deep transition-colors cursor-default rounded-sm shadow-sm"
                  >{p}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PARALLAX IMAGE BREAK 1 ════════════════════ */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-[#051315]">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 1.5, ease: 'easeOut' as const }}
          className="absolute inset-0"
        >
          <img 
            src="/images/IMG_8458.jpg" 
            alt="Humanitarian Work" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bwf-ivory via-transparent to-transparent" />
        </motion.div>
      </section>

      {/* ═══ SELF-RELIANCE + LEADERSHIP ════════════════ */}
      <section className="bg-bwf-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 border-t border-bwf-deep/10">
            {/* Self-reliance */}
            <motion.div {...fadeUp(0)} className="py-14 md:pr-16 md:border-r border-bwf-deep/10">
              <Tag text="Self-Reliance" />
              <h2 className="font-display text-2xl md:text-3xl text-bwf-deep mb-4 leading-snug">
                {selfReliance.heading}
              </h2>
              <p className="text-bwf-deep/60 text-[14px] leading-relaxed mb-6">{selfReliance.paragraph}</p>
              <p className="text-[13px] font-bold text-bwf-deep/80 italic border-l-2 border-bwf-gold pl-4">
                "{selfReliance.statement}"
              </p>
            </motion.div>

            {/* Leadership */}
            <motion.div {...fadeUp(0.1)} className="py-14 md:pl-16">
              <Tag text="Leadership Impact" />
              <h2 className="font-display text-2xl md:text-3xl text-bwf-deep mb-4 leading-snug">
                {leadershipImpact.heading}
              </h2>
              <p className="text-bwf-deep/60 text-[14px] leading-relaxed mb-8">{leadershipImpact.paragraph}</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8">
                <span className="font-light text-[3.5rem] md:text-[4.5rem] leading-none text-bwf-gold">{leadershipImpact.stat.value}</span>
                <p className="text-[13px] text-bwf-deep/65 leading-relaxed max-w-[220px]">{leadershipImpact.stat.label}</p>
              </div>
              <div className="border-l-2 border-bwf-gold pl-5 py-1 space-y-5">
                <p className="text-[15px] text-bwf-deep/80 leading-relaxed italic">
                  "{leadershipImpact.quote1}"
                </p>
                <p className="text-[15px] text-bwf-teal/90 leading-relaxed italic">
                  "{leadershipImpact.quote2}"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ CIRCLE OF OWNERSHIP ═══════════════════════ */}
      <section className="bg-[#051315] text-bwf-ivory py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp(0)} className="mb-10">
            <p className="font-display text-xl md:text-2xl text-bwf-ivory/60 italic max-w-2xl">
              "{circleOfOwnership.statement}"
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.15)}>
            <FlowRow steps={circleOfOwnership.flow} dark />
          </motion.div>
        </div>
      </section>

      {/* ═══ HEALTHCARE ════════════════════════════════ */}
      <section className="bg-bwf-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <Tag text="Healthcare Impact" />
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-bwf-deep leading-tight mb-4 text-balance">
                {healthcareImpact.heading}
              </h2>
              <p className="text-bwf-deep/60 text-[15px] leading-relaxed mb-10">
                {healthcareImpact.paragraph}
              </p>
              <FlowRow steps={healthcareAccess.flow} />
              <p className="mt-6 text-[12px] font-bold text-bwf-deep/50 italic">{healthcareAccess.dalpari}</p>
            </motion.div>
            <motion.div {...fadeUp(0.15)}>
              <div className="border border-bwf-deep/10 p-10 md:p-14">
                <AnimatedStat
                  value={healthcareImpact.stat.value}
                  label={healthcareImpact.stat.label}
                  context={healthcareImpact.stat.context}
                  size="lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PARALLAX IMAGE BREAK 2 ════════════════════ */}
      <section className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden bg-bwf-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-full flex gap-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 1 }}
            className="flex-1 h-full relative overflow-hidden rounded-sm"
          >
            <img src="/images/IMG_8920.jpg" alt="Impact Healthcare" className="w-full h-full object-cover opacity-95" />
            <div className="absolute inset-0 bg-[#051315]/10" />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 1.2 }}
            className="flex-1 h-full relative overflow-hidden rounded-sm hidden md:block mt-12"
          >
            <img src="/images/IMG_8817.jpg" alt="Emergency Response" className="w-full h-full object-cover opacity-95" />
            <div className="absolute inset-0 bg-[#051315]/10" />
          </motion.div>
        </div>
      </section>

      {/* ═══ EMERGENCY RESPONSE ════════════════════════ */}
      <section className="bg-bwf-deep text-bwf-ivory py-20 md:py-32 border-t-8 border-bwf-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp(0)} className="mb-12">
            <Tag text="Emergency Response" />
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-bwf-ivory leading-tight max-w-2xl mb-4">
              {emergencyImpact.heading}
            </h2>
            <p className="text-bwf-ivory/55 text-[15px] leading-relaxed max-w-2xl">
              {emergencyImpact.paragraph}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-bwf-ivory/10">
            {emergencyImpact.stats.map((stat, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className={`pt-10 pb-8 ${i < 2 ? 'sm:border-r border-bwf-ivory/10 sm:pr-10' : ''} ${i > 0 ? 'sm:pl-10' : ''}`}
              >
                <span className="font-light text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] leading-none text-bwf-gold block mb-3">{stat.value}</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-bwf-ivory/80 block mb-1">{stat.label}</span>
                <span className="text-[12px] text-bwf-ivory/40">{stat.context}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RESOURCE MOBILISATION ═════════════════════ */}
      <section className="bg-bwf-ivory py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto">
            <Tag text="Resource Mobilisation" />
            <p className="font-display text-2xl md:text-3xl text-bwf-deep mb-10 italic">
              "{resourceMobilisation.statement}"
            </p>
            <div className="space-y-4">
              {resourceMobilisation.pairs.map((pair, i) => (
                <motion.div key={i} {...fadeUp(i * 0.08)}
                  className="flex items-center justify-center gap-6 text-bwf-deep/70"
                >
                  <span className="text-[13px] font-bold tracking-wide text-right flex-1">{pair.left}</span>
                  <span className="text-bwf-gold shrink-0">↔</span>
                  <span className="text-[13px] font-bold tracking-wide text-left flex-1">{pair.right}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ COMMUNITY IMPACT ══════════════════════════ */}
      <section className="bg-bwf-ivory py-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="border-t border-bwf-deep/10 py-16 md:py-20">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <motion.div {...fadeUp(0)}>
                <Tag text="Community Impact" />
                <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-bwf-deep leading-tight mb-4 text-balance">
                  {communityImpact.heading}
                </h2>
                <p className="text-bwf-deep/60 text-[15px] leading-relaxed">
                  {communityImpact.paragraph}
                </p>
              </motion.div>
              <motion.div {...fadeUp(0.1)} className="space-y-3 pt-2">
                {communityImpact.pairs.map((p, i) => (
                  <div key={i} className="flex items-center gap-4 text-[13px]">
                    <span className="text-bwf-deep/70 font-semibold">{p.left}</span>
                    <span className="h-px flex-1 bg-bwf-deep/10" />
                    <span className="text-bwf-gold/70 text-xs">↔</span>
                    <span className="h-px flex-1 bg-bwf-deep/10" />
                    <span className="text-bwf-deep/70 font-semibold">{p.right}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PARALLAX IMAGE BREAK 3 (5-Image Collage) ════ */}
      <section className="bg-bwf-ivory py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            
            {/* Left Large Portrait */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 1 }}
              className="md:col-span-1 h-[400px] md:h-[600px] relative overflow-hidden rounded-sm"
            >
              <img src="/images/IMG_8125.jpg" alt="Impact Community" className="w-full h-full object-cover opacity-95" />
            </motion.div>
            
            {/* Right 2x2 Grid */}
            <div className="md:col-span-2 grid grid-cols-2 gap-4 md:gap-6">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 1, delay: 0.1 }}
                className="h-[190px] md:h-[288px] relative overflow-hidden rounded-sm"
              >
                <img src="/images/IMG_8051.jpg" alt="Impact Snow" className="w-full h-full object-cover opacity-95" />
              </motion.div>
              
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-[190px] md:h-[288px] relative overflow-hidden rounded-sm"
              >
                <img src="/images/IMG_8787.jpg" alt="Impact Field" className="w-full h-full object-cover opacity-95" />
              </motion.div>
              
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-[190px] md:h-[288px] relative overflow-hidden rounded-sm"
              >
                <img src="/images/IMG_9615(1).jpg" alt="Impact Group" className="w-full h-full object-cover opacity-95" />
              </motion.div>
              
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-[190px] md:h-[288px] relative overflow-hidden rounded-sm"
              >
                <img src="/images/IMG_8773.jpg" alt="Impact Closing" className="w-full h-full object-cover opacity-95" />
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ═══ WOMEN + INTERGENERATIONAL ═════════════════ */}
      <section className="bg-[#051315] text-bwf-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeUp(0)}>
              <Tag text="Women's Impact" />
              <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.6rem)] text-bwf-ivory leading-tight mb-4">
                {womenImpact.heading}
              </h2>
              <p className="text-bwf-ivory/55 text-[15px] leading-relaxed">
                {womenImpact.paragraph}
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.1)}>
              <Tag text="Intergenerational" />
              <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.6rem)] text-bwf-ivory leading-tight mb-4">
                {intergenerationalImpact.heading}
              </h2>
              <p className="text-bwf-ivory/55 text-[15px] leading-relaxed mb-8">
                {intergenerationalImpact.paragraph}
              </p>
              <p className="font-display text-xl text-bwf-gold italic mb-8">
                "{intergenerationalImpact.quote}"
              </p>
              <FlowRow steps={intergenerationalImpact.flow} dark />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ HUMANITARIANISM PRINCIPLES ════════════════ */}
      <section className="bg-bwf-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeUp(0)}>
              <Tag text="Our Philosophy" />
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-bwf-deep leading-tight mb-8">
                {humanitarianism.heading}
              </h2>
              <p className="text-[14px] text-bwf-deep/55 italic border-l-2 border-bwf-gold pl-4">
                "{humanitarianism.statement}"
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="space-y-4">
              {humanitarianism.principles.map((p, i) => (
                <motion.div key={i} {...fadeUp(i * 0.07)}
                  className="flex items-start gap-4 py-4 border-b border-bwf-deep/8"
                >
                  <span className="w-6 h-6 rounded-full border border-bwf-gold/40 flex items-center justify-center text-[10px] font-bold text-bwf-gold shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-[15px] text-bwf-deep/75 leading-relaxed">{p}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ CHARITY → DIGNITY TRANSITIONS ════════════ */}
      <section className="bg-bwf-deep text-bwf-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp(0)} className="mb-12">
            <Tag text="From Charity to Dignity" />
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-bwf-ivory leading-tight text-balance">
              The transition from relief<br />to transformation.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bwf-ivory/10">
            {charityToDignity.transitions.map((t, i) => (
              <motion.div key={i} {...fadeUp(i * 0.06)}
                className="bg-[#051315] p-7 group hover:bg-bwf-ivory/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-bwf-ivory/40 line-through">{t.from}</span>
                  <span className="text-bwf-gold/50 text-sm">→</span>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-bwf-gold">{t.to}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RESCUE→REBUILD→REVIVE→RETURN FRAMEWORK ═══ */}
      <section className="bg-bwf-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp(0)} className="mb-12">
            <Tag text="Impact Framework" />
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-bwf-deep leading-tight max-w-xl">
              Four stages. One continuous journey.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bwf-deep/10">
            {impactFramework.stages.map((stage, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                className="bg-bwf-ivory p-8 group hover:bg-bwf-deep transition-colors duration-500"
              >
                <span className="font-display text-4xl text-bwf-gold/30 group-hover:text-bwf-gold/50 mb-4 block transition-colors leading-none">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-[11px] font-bold tracking-[0.22em] uppercase text-bwf-deep group-hover:text-bwf-gold mb-3 transition-colors">{stage.title}</h3>
                <p className="text-[13px] text-bwf-deep/60 group-hover:text-bwf-ivory/65 leading-relaxed transition-colors">{stage.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PARALLAX IMAGE BREAK 5 (Float) ═════════════ */}
      <section className="bg-bwf-ivory py-10 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 1.2, ease: 'easeOut' as const }}
            className="w-full max-w-4xl aspect-[21/9] md:aspect-[2.5/1] relative overflow-hidden rounded-sm shadow-xl"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: 'easeOut' as const }}
              src="/images/IMG_8773.jpg" 
              alt="Closing Impact" 
              className="w-full h-full object-cover opacity-95" 
            />
          </motion.div>
        </div>
      </section>

      {/* ═══ CLOSING & CTA ═════════════════════════════ */}
      <section className="relative bg-[#051315] text-bwf-ivory overflow-hidden border-t border-bwf-ivory/10">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src="/images/IMG_8787.jpg" alt="Impact Closing" className="w-full h-full object-cover mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-transparent to-[#051315]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#051315] via-transparent to-[#051315]" />
        </div>

        <div className="relative z-10 py-24 md:py-32 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div {...fadeUp(0)}>
              <p className="font-display text-[clamp(1.5rem,4vw,2.5rem)] text-bwf-ivory italic leading-relaxed mb-12">
                "{closing.statement1}"
              </p>
              <div className="flex flex-wrap justify-center gap-2.5 mb-16">
                {closing.flow.map((step, i) => (
                  <span key={i} className={`text-[11px] font-bold tracking-[0.2em] uppercase px-5 py-2.5 rounded-sm border flex items-center gap-3 ${
                    i === closing.flow.length - 1
                      ? 'border-bwf-gold/60 text-bwf-gold bg-bwf-gold/10'
                      : 'border-bwf-ivory/15 text-bwf-ivory/80 bg-bwf-ivory/5'
                  }`}>
                    {step.to}
                    {i < closing.flow.length - 1 && <span className="text-bwf-gold/50">→</span>}
                  </span>
                ))}
              </div>
              <div className="max-w-2xl mx-auto border border-bwf-ivory/10 p-10 bg-bwf-ivory/5">
                <p className="font-display text-xl md:text-2xl text-bwf-gold italic leading-snug">
                  "{closing.quote}"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="relative z-10 grid md:grid-cols-3 border-t border-bwf-ivory/10">
          {cta.links.map((link, i) => (
            <Link
              key={i}
              to={link.url}
              className={`flex items-center justify-center gap-4 py-16 px-8 text-bwf-ivory/80 hover:text-bwf-gold hover:bg-[#051315]/40 backdrop-blur-sm transition-all duration-500 group ${
                i < cta.links.length - 1 ? 'border-b md:border-b-0 md:border-r border-bwf-ivory/10' : ''
              }`}
            >
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase">{link.text}</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
