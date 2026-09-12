import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'
import { workData } from '../../data/work'

/* ─── Reusable fade-up motion props ─────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.7, ease: 'easeOut' as const, delay },
})

/* ─── Section label ─────────────────────────────────── */
function Tag({ text }: { text: string }) {
  return <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-bwf-gold mb-6">{text}</p>
}

/* ─── Flow pills row ────────────────────────────────── */
function FlowRow({ steps, dark = false }: { steps: string[]; dark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {steps.map((s, i) => (
        <span key={i} className="flex items-center gap-3">
          <span className={`text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full border transition-colors ${
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
export function WorkPageContent() {
  const { hero, intro, overview, girlsCare, girlsIndependence, healthcare, dalpari, criticalCare, emergencyResponse, womenEmpowerment, peacebuilding, systemsEvolution, impactSnapshot, cta } = workData

  return (
    <>
      {/* ═══ HERO ══════════════════════════════════════ */}
      <section className="relative bg-[#051315] text-bwf-ivory overflow-hidden min-h-[90vh] md:min-h-screen flex flex-col justify-center pt-20 pb-16">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <img src="/images/IMG_8758.jpg" alt="Work Hero" className="w-full h-full object-cover mix-blend-overlay" />
          <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(166,124,82,0.1)_0%,transparent_65%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-[#051315]/50 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full">
          <motion.div {...fadeUp(0)} className="max-w-4xl">
            <Tag text={hero.label} />
            <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.05] text-bwf-ivory mb-8">
              Where compassion<br />
              <em className="text-bwf-gold not-italic">becomes action.</em>
            </h1>
            <p className="text-bwf-ivory/70 text-[15px] font-light max-w-2xl leading-relaxed">
              {hero.supporting}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ INTRO & OVERVIEW INDEX ════════════════════ */}
      <section className="bg-bwf-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Intro text */}
            <motion.div {...fadeUp(0)} className="lg:col-span-5">
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-bwf-deep leading-tight mb-6">
                {intro.heading}
              </h2>
              <p className="text-bwf-deep/70 text-[15px] font-light leading-relaxed">
                {intro.paragraph}
              </p>
            </motion.div>

            {/* Overview index */}
            <motion.div {...fadeUp(0.1)} className="lg:col-span-7">
              <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-bwf-deep/40 mb-8 border-b border-bwf-deep/10 pb-4">
                Areas of Work
              </p>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                {overview.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group cursor-default">
                    <span className="font-light text-xl text-bwf-gold/60 group-hover:text-bwf-gold transition-colors">{item.number}</span>
                    <span className="text-[14px] font-light tracking-wide text-bwf-deep/70 mt-1 group-hover:text-bwf-deep transition-colors">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══ GIRLS & RESIDENTIAL CARE ══════════════════ */}
      <section className="bg-bwf-deep text-bwf-ivory py-20 md:py-28 border-t border-bwf-ivory/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp(0)} className="mb-16">
            <Tag text="Residential Care" />
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-bwf-ivory leading-tight max-w-3xl">
              {girlsCare.heading}
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Image Column */}
            <motion.div {...fadeUp(0.1)} className="h-[400px] lg:h-auto relative overflow-hidden rounded-sm">
              <img src="/images/IMG_8458.jpg" alt="Residential Care" className="w-full h-full object-cover" />
            </motion.div>
            
            <div className="grid gap-px bg-bwf-ivory/10 border border-bwf-ivory/10">
              {/* Basera-e-Tabassum */}
              <motion.div {...fadeUp(0.15)} className="bg-[#051315] p-10 md:p-14">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="font-display text-2xl text-bwf-ivory">{girlsCare.basera.title}</h3>
                  <span className="text-[10px] font-bold tracking-widest text-bwf-gold/70 px-3 py-1 border border-bwf-gold/30 rounded-full shrink-0">EST. {girlsCare.basera.year}</span>
                </div>
                <p className="text-[15px] font-light text-bwf-ivory/60 leading-relaxed">
                  {girlsCare.basera.paragraph}
                </p>
              </motion.div>

              {/* FAH */}
              <motion.div {...fadeUp(0.2)} className="bg-[#051315] p-10 md:p-14">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="font-display text-2xl text-bwf-ivory">{girlsCare.fah.title}</h3>
                  <span className="text-[10px] font-bold tracking-widest text-bwf-gold/70 px-3 py-1 border border-bwf-gold/30 rounded-full shrink-0">EST. {girlsCare.fah.year}</span>
                </div>
                <p className="text-[15px] font-light text-bwf-ivory/60 leading-relaxed mb-6">
                  {girlsCare.fah.paragraph}
                </p>
                <div className="pt-6 border-t border-bwf-ivory/10 space-y-4">
                  <p className="font-display text-lg text-bwf-gold/90 italic leading-snug">
                    "{girlsCare.fah.quote1}"
                  </p>
                  <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-bwf-teal leading-relaxed">
                    "{girlsCare.fah.quote2}"
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Girls Independence Flow */}
          <motion.div {...fadeUp(0.2)} className="mt-20 pt-16 border-t border-bwf-ivory/10">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h4 className="font-display text-2xl mb-4 text-bwf-ivory">{girlsIndependence.heading}</h4>
                <p className="text-[15px] font-light text-bwf-ivory/60 leading-relaxed">
                  {girlsIndependence.paragraph}
                </p>
              </div>
              <div className="pt-2">
                <FlowRow steps={girlsIndependence.flow} dark />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ HEALTHCARE (MOBILE & CRITICAL) ════════════ */}
      <section className="bg-bwf-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp(0)} className="text-center max-w-3xl mx-auto mb-20">
            <Tag text="Healthcare" />
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-bwf-deep leading-tight mb-6">
              {healthcare.heading}
            </h2>
            <p className="text-bwf-deep/70 text-[15px] font-light leading-relaxed">
              Mobile Medical Units bring primary healthcare access directly to remote and underserved communities, providing doctors, basic diagnostics, medicines, preventive care, and health awareness.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* DALPARI */}
            <motion.div {...fadeUp(0.1)} className="border border-bwf-deep/10 p-10 md:p-12 hover:border-bwf-teal/30 transition-colors bg-white">
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-bwf-teal mb-4">{dalpari.project}</h3>
              <h4 className="font-display text-2xl text-bwf-deep mb-4">{dalpari.heading}</h4>
              <p className="text-[15px] font-light text-bwf-deep/70 leading-relaxed mb-6">
                {dalpari.paragraph}
              </p>
              <p className="text-[13px] font-bold tracking-wide text-bwf-gold uppercase border-l-2 border-bwf-gold pl-3">
                "{dalpari.quote}"
              </p>
            </motion.div>

            {/* Critical Care */}
            <motion.div {...fadeUp(0.15)} className="border border-bwf-deep/10 p-10 md:p-12 hover:border-bwf-teal/30 transition-colors bg-white">
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-bwf-teal mb-4">{criticalCare.subtitle}</h3>
              <h4 className="font-display text-2xl text-bwf-deep mb-4">{criticalCare.heading}</h4>
              <p className="text-[15px] font-light text-bwf-deep/70 leading-relaxed mb-6">
                {criticalCare.paragraph}
              </p>
              <p className="text-[13px] font-bold tracking-wide text-bwf-gold uppercase border-l-2 border-bwf-gold pl-3">
                "{criticalCare.quote}"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ EMERGENCY RESPONSE ════════════════════════ */}
      <section className="bg-bwf-deep text-bwf-ivory py-20 md:py-28 border-t border-bwf-ivory/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="/images/IMG_8817.jpg" alt="Emergency" className="w-full h-full object-cover mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#051315] via-transparent to-[#051315]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <Tag text="Emergency Response" />
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-bwf-ivory leading-tight mb-6">
                {emergencyResponse.heading}
              </h2>
              <p className="text-bwf-ivory/70 text-[15px] font-light leading-relaxed mb-10">
                {emergencyResponse.paragraph}
              </p>
              <FlowRow steps={emergencyResponse.flow} dark />
            </motion.div>
            
            <motion.div {...fadeUp(0.15)} className="grid grid-cols-2 gap-px bg-bwf-ivory/10 border border-bwf-ivory/10 backdrop-blur-sm">
              <div className="bg-[#051315]/80 p-8 text-center">
                <span className="font-light text-4xl text-bwf-gold block mb-3">1999</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-bwf-ivory/60">Kargil War</span>
              </div>
              <div className="bg-[#051315]/80 p-8 text-center">
                <span className="font-light text-4xl text-bwf-gold block mb-3">2005</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-bwf-ivory/60">Earthquake</span>
              </div>
              <div className="bg-[#051315]/80 p-8 text-center">
                <span className="font-light text-4xl text-bwf-gold block mb-3">2014</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-bwf-ivory/60">Kashmir Floods</span>
              </div>
              <div className="bg-[#051315]/80 p-8 text-center">
                <span className="font-light text-4xl text-bwf-gold block mb-3">2016</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-bwf-ivory/60">Medical Crisis</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ IMAGE BREAK ═══════════════════════════════ */}
      <section className="bg-bwf-ivory py-20 md:py-28 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div {...fadeUp(0)} className="h-[300px] md:h-[500px] relative overflow-hidden rounded-sm">
              <img src="/images/IMG_8920.jpg" alt="Impact Field" className="w-full h-full object-cover opacity-95" />
            </motion.div>
            <div className="flex flex-col gap-6">
              <motion.div {...fadeUp(0.1)} className="h-[200px] md:h-[240px] relative overflow-hidden rounded-sm">
                <img src="/images/IMG_8050.jpg" alt="Medical Camp" className="w-full h-full object-cover opacity-95" />
              </motion.div>
              <motion.div {...fadeUp(0.2)} className="h-[200px] md:h-[235px] relative overflow-hidden rounded-sm">
                <img src="/images/IMG_8110.jpg" alt="Support" className="w-full h-full object-cover opacity-95" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WOMEN EMPOWERMENT & PEACEBUILDING ═════════ */}
      <section className="bg-bwf-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            
            {/* Women */}
            <motion.div {...fadeUp(0)}>
              <Tag text="Women & Livelihoods" />
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-bwf-deep leading-tight mb-4">
                {womenEmpowerment.heading}
              </h2>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-bwf-teal mb-6">
                {womenEmpowerment.subtitle}
              </p>
              <p className="text-[15px] font-light text-bwf-deep/70 leading-relaxed mb-6">
                {womenEmpowerment.paragraph}
              </p>
              <p className="font-display text-xl text-bwf-deep/80 italic border-l-2 border-bwf-gold pl-4">
                "{womenEmpowerment.quote}"
              </p>
            </motion.div>

            {/* Peacebuilding */}
            <motion.div {...fadeUp(0.1)}>
              <Tag text="Community Relationships" />
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-bwf-deep leading-tight mb-4">
                {peacebuilding.heading}
              </h2>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-bwf-teal mb-6">
                {peacebuilding.subtitle}
              </p>
              <p className="text-[15px] font-light text-bwf-deep/70 leading-relaxed mb-8">
                {peacebuilding.paragraph}
              </p>
              <div className="border-l-2 border-bwf-gold pl-5 py-1 space-y-4">
                <p className="font-display text-lg md:text-xl text-bwf-deep/80 italic">
                  "{peacebuilding.quote}"
                </p>
                <p className="font-display text-lg md:text-xl text-bwf-teal/90 italic">
                  "{peacebuilding.quote2}"
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══ SYSTEMS EVOLUTION ═════════════════════════ */}
      <section className="relative bg-[#051315] text-bwf-ivory py-24 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src="/images/IMG_3390.jpg" alt="Systems" className="w-full h-full object-cover mix-blend-luminosity grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-[#051315]/80 to-[#051315]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div {...fadeUp(0)}>
            <Tag text="Systems Evolution" />
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-bwf-ivory leading-tight mb-8">
              {systemsEvolution.heading}
            </h2>
            <p className="text-[15px] font-light text-bwf-ivory/70 leading-relaxed max-w-3xl mx-auto mb-8">
              {systemsEvolution.paragraph}
            </p>
            <p className="font-display text-xl md:text-2xl text-bwf-gold italic max-w-3xl mx-auto mb-16">
              "{systemsEvolution.quote}"
            </p>
            <div className="flex justify-center">
              <FlowRow steps={systemsEvolution.flow} dark />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ IMPACT SNAPSHOT ═══════════════════════════ */}
      <section className="bg-bwf-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div {...fadeUp(0)} className="mb-16">
            <Tag text="Impact Snapshot" />
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-bwf-deep leading-tight max-w-2xl mx-auto">
              {impactSnapshot.heading}
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 max-w-5xl mx-auto">
            {impactSnapshot.stats.map((stat, i) => (
              <motion.div key={i} {...fadeUp(i * 0.05)} className="flex flex-col items-center">
                <span className="font-light text-[3.5rem] md:text-[4.5rem] text-bwf-gold leading-none mb-3 block">
                  {stat.number}
                </span>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-bwf-deep/60 max-w-[150px]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ════════════════════════════════ */}
      <section className="bg-[#051315] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src="/images/IMG_8787.jpg" alt="Join Us" className="w-full h-full object-cover mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-transparent to-[#051315]" />
        </div>
        
        {/* Banner area */}
        <div className="relative z-10 py-24 md:py-32 px-6 text-center border-t border-bwf-ivory/5">
          <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-bwf-ivory leading-tight mb-8 whitespace-pre-line drop-shadow-lg">
              {cta.heading}
            </h2>
            <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-bwf-gold">
              {cta.supporting}
            </p>
          </motion.div>
        </div>

        {/* Split Links */}
        <div className="relative z-10 grid md:grid-cols-2 border-t border-bwf-ivory/10">
          <Link
            to={cta.primary.link}
            className="flex items-center justify-center gap-4 py-16 px-8 text-bwf-ivory/80 hover:text-bwf-gold hover:bg-[#051315]/40 backdrop-blur-sm border-b md:border-b-0 md:border-r border-bwf-ivory/10 transition-all duration-500 group"
          >
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase">{cta.primary.text}</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            to={cta.secondary.link}
            className="flex items-center justify-center gap-4 py-16 px-8 text-bwf-ivory/80 hover:text-bwf-gold hover:bg-[#051315]/40 backdrop-blur-sm transition-all duration-500 group"
          >
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase">{cta.secondary.text}</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
