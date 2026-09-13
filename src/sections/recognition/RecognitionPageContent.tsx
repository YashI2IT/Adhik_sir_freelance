import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, Award, Star, Medal, LucideIcon } from 'lucide-react'
import { recognitionData } from '../../data/recognition'

/* ─── Animation Helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay },
})

const heroFadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay },
})

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
}

/* ─── Premium SVG Seal Component ─── */
function AwardSeal({ title, icon: Icon = Award }: { title: string, icon?: LucideIcon }) {
  const single = `${title} • `;
  let paddedTitle = single;
  while (paddedTitle.length + single.length <= 75) {
    paddedTitle += single;
  }
  
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center shrink-0 mx-auto mb-10 group-hover:scale-105 transition-transform duration-700">
      {/* Outer borders */}
      <div className="absolute inset-0 rounded-full border border-[#B59A63]/30" />
      <div className="absolute inset-1.5 rounded-full border border-[#B59A63]/10" />
      <div className="absolute inset-3 rounded-full border border-[#B59A63]/5 bg-[#B59A63]/5" />
      
      {/* Rotating Curved Text */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_40s_linear_infinite]">
        <path id={`circlePath-${title.replace(/\s+/g, '')}`} d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
        <text className="text-[7.5px] font-bold tracking-[0.25em] uppercase fill-[#B59A63]/80">
          <textPath href={`#circlePath-${title.replace(/\s+/g, '')}`} startOffset="0%">
            {paddedTitle}
          </textPath>
        </text>
      </svg>
      
      {/* Center Icon */}
      <div className="relative z-10 text-[#B59A63] opacity-90 drop-shadow-sm">
        <Icon size={38} strokeWidth={1} />
      </div>
    </div>
  )
}

export function RecognitionPageContent() {

  return (
    <>
      {/* ═══════════════ HERO ═══════════════════════════ */}
      <section className="relative min-h-[85vh] md:min-h-screen bg-[#051315] flex flex-col justify-center overflow-hidden pt-20 pb-16">
        {/* Background image & overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <img src="/images/IMG_8125.jpg" alt="Recognition Hero" className="w-full h-full object-cover object-[center_15%] opacity-60" />
          <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(166,124,82,0.15)_0%,transparent_65%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-[#051315]/40 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <motion.div {...heroFadeUp(0)}>
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B59A63] mb-8">
              {recognitionData.hero.eyebrow}
            </p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] text-[#F7F6F1] mb-8 text-balance mx-auto">
              {recognitionData.hero.title}
            </h1>
            <p className="text-[#F7F6F1]/70 text-[15px] font-light max-w-2xl leading-relaxed mx-auto">
              {recognitionData.hero.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 flex flex-col items-center gap-3 text-[#F7F6F1]/30"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold">Scroll to explore</span>
            <ChevronDown size={14} className="animate-bounce mt-1" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ INTRO QUOTE ════════════════════ */}
      <section className="bg-[#F7F6F1] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp(0)}>
            <p className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#051315] leading-[1.2] text-balance italic mb-8">
              "{recognitionData.introQuote}"
            </p>
            <div className="w-12 h-[1px] bg-[#B59A63] mx-auto opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ FEATURED AWARDS ════════════════ */}
      <section className="bg-white py-24 md:py-32 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-20 pointer-events-none mix-blend-multiply" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <motion.div {...fadeUp(0)} className="text-center mb-16 md:mb-24">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#B59A63] mb-4">
              Honours
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#051315] leading-tight">
              Featured Recognition
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {recognitionData.awards.filter(a => a.featured).map((award, i) => {
              const icons = [Award, Medal, Star];
              const Icon = icons[i % icons.length];
              
              return (
                <motion.div 
                  key={i} 
                  {...fadeUp(i * 0.15)}
                  className="bg-white border border-[#051315]/10 p-10 md:p-14 flex flex-col items-center text-center group hover:shadow-2xl hover:shadow-[#051315]/5 hover:-translate-y-2 transition-all duration-500 rounded-sm relative overflow-hidden"
                >
                  {/* Decorative corner lines */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#B59A63]/30 m-4" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#B59A63]/30 m-4" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#B59A63]/30 m-4" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#B59A63]/30 m-4" />
                  
                  {/* Image Override OR SVG Seal */}
                  {'imageUrl' in award ? (
                     <div className="w-32 h-32 md:w-40 md:h-40 mb-10 shrink-0 relative flex items-center justify-center">
                       <img src={(award as { imageUrl: string }).imageUrl} alt={award.title} className="w-full h-full object-contain drop-shadow-lg" />
                     </div>
                  ) : (
                    <AwardSeal title={award.title} icon={Icon} />
                  )}

                  <h3 className="font-display text-2xl md:text-3xl text-[#051315] mb-4 leading-snug group-hover:text-[#12636B] transition-colors">
                    {award.title}
                  </h3>
                  
                  {award.organization && (
                    <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#051315]/50 mb-4">
                      {award.organization}
                    </p>
                  )}
                  
                  {award.year && (
                    <div className="mt-auto pt-6 w-full flex justify-center">
                      <span className="inline-block px-4 py-1.5 border border-[#B59A63]/30 rounded-full text-[12px] font-light text-[#051315]/70">
                        Awarded in {award.year}
                      </span>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ AWARDS ARCHIVE GRID ════════════ */}
      <section className="bg-white pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 border-t border-[#051315]/10 pt-16"
          >
            {recognitionData.awards.filter(a => !a.featured).map((award, i) => (
              <motion.div key={i} variants={staggerItem} className="flex flex-col">
                <h4 className="font-display text-xl text-[#051315] mb-3 leading-snug">
                  {award.title}
                </h4>
                {award.organization && (
                  <p className="text-[11px] font-bold tracking-widest uppercase text-[#051315]/40 mb-2">
                    {award.organization}
                  </p>
                )}
                {award.year && (
                  <p className="text-[13px] text-[#155A8A]/70 font-light mt-auto pt-3">
                    {award.year}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ GLOBAL ENGAGEMENTS ═════════════ */}
      <section className="bg-[#061315] text-[#F7F6F1] py-24 md:py-32 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_white_0%,_transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            <motion.div {...fadeUp(0)} className="lg:col-span-5">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B59A63] mb-6">
                Global Platforms
              </p>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-[#F7F6F1] mb-8 text-balance">
                {recognitionData.engagements.title}
              </h2>
              <div className="w-12 h-[1px] bg-[#B59A63] mb-8" />
              <p className="text-[#F7F6F1]/80 text-[15px] font-light leading-relaxed">
                {recognitionData.engagements.editorial.paragraph}
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              className="lg:col-span-7"
            >
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {recognitionData.engagements.platforms.map((platform, i) => (
                  <motion.div 
                    key={i}
                    variants={staggerItem}
                    className="py-6 border-b border-[#F7F6F1]/10 flex items-center gap-4 group"
                  >
                    <span className="text-[#4AAEAE] text-lg font-light opacity-50 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                    <span className="font-display text-xl md:text-2xl tracking-wide group-hover:text-[#F7F6F1] text-[#F7F6F1]/80 transition-colors">
                      {platform}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* ═══════════════ CLOSING ════════════════════════ */}
      <section className="bg-[#051315] text-[#F7F6F1] py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src="/images/IMG_8787.jpg" alt="Final Call" className="w-full h-full object-cover mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-transparent to-[#051315]" />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] text-[#F7F6F1] leading-[1.15] mb-12 text-balance italic">
              "{recognitionData.closing.quote}"
            </h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8"
          >
            {recognitionData.closing.cta.map((btn, i) => (
              <motion.div key={i} variants={staggerItem}>
                <Link
                  to={btn.link}
                  className={`inline-flex items-center justify-center gap-3 px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 w-full sm:w-auto ${
                    i === 0
                      ? 'bg-[#B59A63] text-white hover:bg-[#B59A63]/90 shadow-lg shadow-[#B59A63]/20'
                      : 'bg-transparent border border-[#F7F6F1]/20 text-[#F7F6F1]/80 hover:bg-[#F7F6F1]/5 hover:text-[#F7F6F1] hover:border-[#F7F6F1]/40'
                  }`}
                >
                  {btn.text}
                  {i === 0 && <ArrowRight size={14} strokeWidth={2} />}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
