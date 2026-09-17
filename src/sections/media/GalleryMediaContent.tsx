import { motion } from 'framer-motion'
import { mediaData, FeaturedMedia, IndependentEvidence } from '../../data/mediaCoverage'
import { YouTubeEmbed } from '../../components/YouTubeEmbed'

/* ─── Animation helpers ─────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.65, ease: 'easeOut' as const, delay },
})

/* ─── Shared Components ─────────────────────────────── */
function SectionTag({ text }: { text: string }) {
  return (
    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-bwf-gold mb-6">
      {text}
    </p>
  )
}

/* ─── Sub-Components ────────────────────────────────── */
function MediaHero() {
  return (
    <section className="bg-bwf-ivory pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <motion.div {...fadeUp(0)}>
          <SectionTag text={mediaData.hero.eyebrow} />
          <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-bwf-deep leading-tight mb-8 max-w-4xl mx-auto">
            {mediaData.hero.heading}
          </h1>
          <p className="text-[16px] font-light text-bwf-deep/70 max-w-2xl mx-auto leading-relaxed">
            {mediaData.hero.supporting}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function GalleryCTA() {
  return (
    <section className="bg-bwf-ivory pb-24 md:pb-32 border-b border-bwf-deep/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div {...fadeUp(0)} className="bg-[#051315] text-bwf-ivory p-12 md:p-20 text-center rounded-sm relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <img src="/images/IMG_8758.jpg" alt="Gallery Texture" className="w-full h-full object-cover mix-blend-overlay grayscale" />
          </div>
          <div className="relative z-10">
            <SectionTag text={mediaData.galleryCTA.eyebrow} />
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-bwf-ivory mb-10">
              {mediaData.galleryCTA.heading}
            </h2>
            <a 
              href={mediaData.galleryCTA.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-bwf-ivory text-bwf-deep text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-bwf-gold hover:text-bwf-ivory transition-colors duration-300"
            >
              {mediaData.galleryCTA.buttonText}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function MediaCard({ article, index }: { article: FeaturedMedia; index: number }) {
  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      {...fadeUp(index * 0.1)}
      className="group flex flex-col bg-white p-8 md:p-10 border border-bwf-deep/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full"
    >
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-bwf-deep/10">
        <img 
          src={article.logo} 
          alt={article.publisher} 
          className="h-8 max-w-[120px] object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all duration-500"
        />
        <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-bwf-gold shrink-0">
          {article.date}
        </span>
      </div>
      <h3 className="font-display text-2xl text-bwf-deep mb-4 group-hover:text-bwf-teal transition-colors flex-grow">
        {article.title}
      </h3>
      <p className="text-[15px] font-light text-bwf-deep/70 leading-relaxed mb-8 line-clamp-4">
        {article.excerpt}
      </p>
      <div className="flex items-center text-[11px] font-bold tracking-[0.2em] uppercase text-bwf-deep group-hover:text-bwf-teal transition-colors mt-auto pt-6 border-t border-transparent group-hover:border-bwf-deep/5">
        Read Full Article <span className="ml-2 group-hover:translate-x-1.5 transition-transform">→</span>
      </div>
    </motion.a>
  )
}

function FeaturedMediaGrid() {
  return (
    <section className="bg-bwf-ivory py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div {...fadeUp(0)} className="mb-16">
          <SectionTag text={mediaData.featuredMedia.eyebrow} />
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-bwf-deep leading-tight max-w-3xl mb-6">
            {mediaData.featuredMedia.heading}
          </h2>
          <p className="text-[16px] font-light text-bwf-deep/70 max-w-2xl leading-relaxed">
            {mediaData.featuredMedia.supporting}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaData.featuredMedia.articles.map((article, i) => (
            <MediaCard key={i} article={article} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedVideosGrid() {
  return (
    <section className="bg-bwf-deep text-bwf-ivory py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div {...fadeUp(0)} className="mb-16 text-center md:text-left">
          <SectionTag text={mediaData.featuredVideos.eyebrow} />
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-bwf-ivory leading-tight max-w-3xl mb-6">
            {mediaData.featuredVideos.heading}
          </h2>
          <p className="text-[16px] font-light text-bwf-ivory/70 max-w-2xl leading-relaxed mx-auto md:mx-0">
            {mediaData.featuredVideos.supporting}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaData.featuredVideos.videos.map((video, i) => (
            <motion.div key={video.id} {...fadeUp(i * 0.1)} className="flex flex-col h-full">
              <YouTubeEmbed url={`https://www.youtube.com/embed/${video.id}`} title={video.title} />
              <h3 className="font-display text-xl text-bwf-ivory mt-6 mb-2 group-hover:text-bwf-gold transition-colors">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EvidenceItem({ item }: { item: IndependentEvidence }) {
  const isVideo = item.type === 'video';
  return (
    <a 
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-bwf-deep/10 hover:bg-bwf-deep/5 transition-colors px-4 -mx-4 group rounded-sm"
    >
      <span className="font-display text-xl text-bwf-deep group-hover:text-bwf-teal transition-colors mb-3 sm:mb-0">
        {item.publisher}
      </span>
      <span className="flex items-center text-[11px] font-bold tracking-[0.2em] uppercase text-bwf-gold group-hover:text-bwf-teal transition-colors shrink-0">
        {isVideo ? 'Watch Video' : 'View Source'} <span className="ml-2 group-hover:translate-x-1.5 transition-transform">→</span>
      </span>
    </a>
  )
}

function EvidenceList() {
  return (
    <section className="bg-bwf-ivory pb-24 md:pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div {...fadeUp(0)} className="mb-12">
          <SectionTag text={mediaData.evidence.eyebrow} />
          <h2 className="font-display text-3xl md:text-4xl text-bwf-deep leading-tight">
            {mediaData.evidence.heading}
          </h2>
        </motion.div>
        
        <div className="flex flex-col">
          {mediaData.evidence.items.map((item, i) => (
            <motion.div key={item.id} {...fadeUp(0.1 + (i * 0.02))}>
              <EvidenceItem item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Main Export ───────────────────────────────────── */
export function GalleryMediaContent() {
  return (
    <main>
      <MediaHero />
      <GalleryCTA />
      <FeaturedVideosGrid />
      <FeaturedMediaGrid />
      <EvidenceList />
    </main>
  )
}
