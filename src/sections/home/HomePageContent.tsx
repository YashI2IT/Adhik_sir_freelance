import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { YouTubeEmbed } from '../../components/YouTubeEmbed'
import { PressSection } from './PressSection'
import { homeData } from '../../data/home'

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
    <div className="flex flex-wrap items-center justify-center gap-3">
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

/* ─── Hero slider images ────────────────────────────── */
const heroSlides = [
  { src: '/images/IMG_8126.jpg', position: '80% 30%' },
  { src: '/images/IMG_8065.jpg', position: '80% 30%' }, // Snowy landscape, subject on right
  { src: '/images/IMG_8110.jpg', position: 'center center' },
  { src: '/images/IMG_8792.jpg', position: 'center center' },
  { src: '/images/IMG_1888.jpg', position: 'center center' },
  { src: '/images/IMG_8051.jpg', position: 'center center' },
  { src: '/images/IMG_8483.jpg', position: 'center center' },
]

/* ════════════════════════════════════════════════════
   MAIN EXPORT
════════════════════════════════════════════════════ */
export function HomePageContent() {
  const { hero, intro, impact, framework, journeyPreview, workPreview, transformation, philosophy, recognition, engagement, videoGallery, finalCta } = homeData

  /* ── Hero Slider State ── */
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <>
      {/* ═══ HERO ══════════════════════════════════════ */}
      <section className="relative bg-[#051315] text-bwf-ivory overflow-hidden min-h-screen flex flex-col justify-center">
        {/* Background Image Slider */}
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.2, ease: 'easeInOut' as const }, scale: { duration: 8, ease: 'linear' } }}
          >
            <img
              src={heroSlides[currentSlide].src}
              alt=""
              className="w-full h-full object-cover"
              style={{ objectPosition: heroSlides[currentSlide].position }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#051315]/90 via-[#051315]/70 to-[#051315]/40 hidden md:block" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#051315] via-[#051315]/60 to-[#051315]/30 md:hidden" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#051315]/80 via-transparent to-[#051315]/40" />

        {/* Accent glow */}
        <div className="absolute inset-0 pointer-events-none z-[2]">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(166,124,82,0.1)_0%,transparent_65%)]" />
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full py-32 lg:py-40">
          <motion.div {...fadeUp(0)} className="max-w-2xl">
            <h1 className="font-display text-[clamp(3.5rem,8vw,6.5rem)] leading-[1] text-bwf-ivory mb-6 tracking-tight">
              {hero.title.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'text-bwf-gold italic font-light' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-bwf-ivory/60 mb-10">
              {hero.subtitle}
            </p>
            <p className="font-display text-2xl md:text-3xl text-bwf-ivory/80 leading-snug mb-12 max-w-lg whitespace-pre-line">
              {hero.statement}
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              <Link to="/journey" className="px-8 py-4 bg-bwf-ivory text-bwf-deep text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-bwf-gold transition-colors duration-300">
                {hero.primaryCta}
              </Link>
              <a href="https://www.borderlessworldfoundation.org/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-bwf-ivory/20 text-bwf-ivory text-[11px] font-bold tracking-[0.2em] uppercase hover:border-bwf-ivory/50 transition-colors duration-300">
                {hero.secondaryCta}
              </a>
            </div>
          </motion.div>

          {/* Slide Indicators */}
          <div className="flex items-center gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="group relative h-8 flex items-center"
                aria-label={`Slide ${i + 1}`}
              >
                <div className={`relative h-[2px] rounded-full overflow-hidden transition-all duration-500 ${
                  i === currentSlide 
                    ? 'w-12 bg-bwf-ivory/20' 
                    : 'w-6 bg-bwf-ivory/25 group-hover:bg-bwf-ivory/50'
                }`}>
                  {i === currentSlide && (
                    <motion.div 
                      className="absolute top-0 left-0 bottom-0 bg-bwf-gold"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 5, ease: 'linear' }}
                      key={currentSlide}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THE JOURNEY (INTRO) ═══════════════════════ */}
      <section className="bg-bwf-ivory py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div {...fadeUp(0)} className="lg:col-span-5">
              <Tag text={intro.eyebrow} />
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-bwf-deep leading-tight mb-6">
                {intro.heading}
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="lg:col-span-7 lg:pt-12">
              <p className="font-display text-xl md:text-2xl text-bwf-deep/80 italic mb-8">
                "{intro.supporting}"
              </p>
              <p className="text-[15px] font-light text-bwf-deep/70 leading-relaxed">
                {intro.paragraph}
              </p>
            </motion.div>
          </div>
          
          {/* Journey Image Break */}
          <div className="grid md:grid-cols-2 gap-6 mt-20">
            <motion.div {...fadeUp(0)} className="h-[300px] md:h-[450px] overflow-hidden rounded-sm">
               <img src="/images/IMG_8110.jpg" alt="Journey Field Work" className="w-full h-full object-cover opacity-95" />
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="h-[300px] md:h-[450px] overflow-hidden rounded-sm">
               <img src="/images/IMG_8050.jpg" alt="Journey Medical Camp" className="w-full h-full object-cover opacity-95" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ IMPACT GRID ═══════════════════════════════ */}
      <section className="bg-bwf-deep text-bwf-ivory py-24 md:py-32 border-t border-bwf-ivory/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="/images/IMG_8787.jpg" alt="Impact Field" className="w-full h-full object-cover mix-blend-overlay grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-transparent to-[#051315]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <motion.div {...fadeUp(0)} className="mb-16">
            <Tag text="Impact at Scale" />
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 md:gap-y-20 gap-x-4 sm:gap-x-8 md:gap-x-12">
            {impact.map((stat, i) => (
              <motion.div key={i} {...fadeUp(i * 0.05)} className="flex flex-col border-l border-bwf-ivory/10 pl-4 md:pl-6">
                <span className="font-light text-[clamp(2.25rem,8vw,4.5rem)] text-bwf-gold leading-none mb-2 md:mb-3 block tracking-tight">
                  {stat.prefix}{stat.value}{stat.suffix}
                </span>
                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-bwf-ivory/50 leading-relaxed pr-2">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FRAMEWORK ═════════════════════════════════ */}
      <section className="bg-bwf-ivory py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp(0)} className="mb-16">
            <Tag text="The Framework" />
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-bwf-deep leading-tight max-w-2xl">
              {framework.heading}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {framework.stages.map((stage, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="flex flex-col">
                <span className="font-light text-4xl text-bwf-gold mb-4 border-b border-bwf-gold/30 pb-4">{stage.id}</span>
                <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-bwf-deep mb-3">{stage.title}</h3>
                <p className="text-[15px] font-light text-bwf-deep/70 leading-relaxed">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ JOURNEY PREVIEW ═══════════════════════════ */}
      <section className="bg-[#051315] text-bwf-ivory py-24 md:py-32 border-t border-bwf-ivory/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16">
            <motion.div {...fadeUp(0)} className="lg:col-span-5">
              <Tag text="Timeline" />
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-bwf-ivory leading-tight mb-8">
                {journeyPreview.heading}
              </h2>
              <Link to="/journey" className="inline-block border-b border-bwf-gold text-[11px] font-bold tracking-[0.2em] uppercase text-bwf-gold pb-1 hover:text-bwf-ivory hover:border-bwf-ivory transition-colors">
                Explore Full Journey →
              </Link>
            </motion.div>
            
            <motion.div {...fadeUp(0.1)} className="lg:col-span-7">
              <div className="relative border-l border-bwf-ivory/10 pl-6 md:pl-8 space-y-12">
                {journeyPreview.milestones.map((m, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-bwf-gold" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-bwf-gold mb-2 block">{m.year}</span>
                    <h3 className="font-display text-xl md:text-2xl text-bwf-ivory mb-2">{m.title}</h3>
                    <p className="text-[14px] font-light text-bwf-ivory/60 leading-relaxed">{m.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ WORK PREVIEW ══════════════════════════════ */}
      <section className="bg-bwf-ivory py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp(0)} className="mb-16">
            <Tag text="Areas of Work" />
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-bwf-deep leading-tight max-w-3xl">
              {workPreview.heading}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-bwf-deep/10 border border-bwf-deep/10">
            {workPreview.categories.map((cat, i) => (
              <motion.div key={i} {...fadeUp(i * 0.05)} className="bg-white p-10 hover:bg-[#051315] hover:text-bwf-ivory transition-colors duration-500 group">
                <span className="font-light text-3xl text-bwf-gold/40 group-hover:text-bwf-gold/60 mb-6 block transition-colors">{cat.id}</span>
                <h3 className="text-[12px] font-bold tracking-[0.2em] uppercase text-bwf-deep group-hover:text-bwf-ivory mb-4 transition-colors">{cat.title}</h3>
                <p className="text-[15px] font-light text-bwf-deep/60 group-hover:text-bwf-ivory/60 leading-relaxed transition-colors">{cat.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div {...fadeUp(0.2)} className="mt-16 text-center">
            <Link to="/work" className="inline-block border-b border-bwf-deep text-[11px] font-bold tracking-[0.2em] uppercase text-bwf-deep pb-1 hover:text-bwf-teal hover:border-bwf-teal transition-colors">
              Explore All Work →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ TRANSFORMATION FLOW ═══════════════════════ */}
      <section className="relative bg-[#051315] text-bwf-ivory py-32 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src="/images/IMG_8458.jpg" alt="Transformation" className="w-full h-full object-cover mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-[#051315]/70 to-[#051315]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div {...fadeUp(0)}>
            <Tag text="Transformation" />
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-bwf-ivory leading-tight mb-8">
              {transformation.heading}
            </h2>
            <p className="text-[15px] font-light text-bwf-ivory/70 leading-relaxed max-w-3xl mx-auto mb-16">
              {transformation.statement}
            </p>
            <FlowRow steps={transformation.steps} dark />
          </motion.div>
        </div>
      </section>

      {/* ═══ PHILOSOPHY GRID ═══════════════════════════ */}
      <section className="bg-bwf-deep text-bwf-ivory py-24 md:py-32 border-t border-bwf-ivory/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div {...fadeUp(0)} className="lg:col-span-5">
              <Tag text="Core Philosophy" />
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-bwf-ivory leading-tight mb-6">
                {philosophy.heading}
              </h2>
              <p className="font-display text-xl md:text-2xl text-bwf-gold/80 italic border-l-2 border-bwf-gold pl-5 py-1">
                "{philosophy.statement}"
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-px bg-bwf-ivory/10 border border-bwf-ivory/10">
              {philosophy.grid.map((item, i) => (
                <div key={i} className="bg-[#051315] p-6 text-center group hover:bg-bwf-ivory/5 transition-colors">
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-bwf-ivory/30 line-through block mb-2">{item.from}</span>
                  <span className="text-bwf-gold/40 text-xs block mb-2 group-hover:translate-y-1 transition-transform">↓</span>
                  <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-bwf-gold">{item.to}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PRESS & MEDIA ═════════════════════════════ */}
      <PressSection />

      {/* ═══ VIDEO GALLERY (IN HIS OWN WORDS) ══════════ */}
      <section className="bg-bwf-ivory py-24 md:py-32 border-t border-bwf-deep/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp(0)} className="mb-16 text-center">
            <Tag text="Video Archive" />
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-bwf-deep leading-tight">
              {videoGallery.heading}
            </h2>
          </motion.div>

          <div className="flex flex-col gap-8">
            {/* Featured Video (Index 0) */}
            <motion.div {...fadeUp(0.1)} className="w-full relative shadow-2xl overflow-hidden rounded-sm">
              <YouTubeEmbed url={videoGallery.videos[0]} title="Featured Video" className="w-full h-full" />
            </motion.div>
            
            {/* Remaining 6 Videos Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {videoGallery.videos.slice(1).map((videoUrl, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1 + 0.2)} className="w-full relative shadow-md hover:shadow-xl transition-shadow rounded-sm overflow-hidden">
                  <YouTubeEmbed url={videoUrl} title={`Video Archive ${i + 1}`} className="w-full h-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RECOGNITION & ENGAGEMENT ══════════════════ */}
      <section className="bg-bwf-ivory py-24 md:py-32 border-t border-bwf-deep/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            
            {/* Awards */}
            <motion.div {...fadeUp(0)}>
              <Tag text="Recognition" />
              <h2 className="font-display text-2xl md:text-3xl text-bwf-deep leading-tight mb-10">
                {recognition.heading}
              </h2>
              <div className="space-y-4">
                {recognition.awards.map((award, i) => (
                  <div key={i} className="py-3 border-b border-bwf-deep/10 text-[15px] font-light text-bwf-deep/75">
                    {award}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Platforms */}
            <motion.div {...fadeUp(0.1)}>
              <Tag text="Global Engagement" />
              <h2 className="font-display text-2xl md:text-3xl text-bwf-deep leading-tight mb-10">
                {engagement.heading}
              </h2>
              <div className="flex flex-wrap gap-3">
                {engagement.platforms.map((platform, i) => (
                  <span key={i} className="px-4 py-2 border border-bwf-deep/15 rounded-full text-[13px] font-light tracking-wide text-bwf-deep/70 cursor-default hover:border-bwf-deep hover:text-bwf-deep transition-colors">
                    {platform}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═════════════════════════════════ */}
      <section className="relative bg-[#051315] overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src="/images/IMG_8787.jpg" alt="Final Call" className="w-full h-full object-cover mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-transparent to-[#051315]" />
        </div>
        
        <div className="relative z-10 py-24 md:py-32 px-6 text-center">
          <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto">
            <h2 className="font-display text-[clamp(3.5rem,8vw,6.5rem)] text-bwf-ivory leading-[0.95] mb-10 whitespace-pre-line drop-shadow-xl">
              {finalCta.heading}
            </h2>
            <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-bwf-gold mb-16">
              {finalCta.supporting}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 bg-bwf-ivory text-bwf-deep text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-bwf-gold transition-colors duration-300">
                {finalCta.primaryBtn}
              </Link>
              <a href="https://www.borderlessworldfoundation.org/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-bwf-ivory/20 text-bwf-ivory text-[11px] font-bold tracking-[0.2em] uppercase hover:border-bwf-ivory/50 transition-colors duration-300">
                {finalCta.secondaryBtn}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
