import { motion } from 'framer-motion'

const articles = [
  {
    publisher: 'Awaz The Voice',
    date: 'August 20, 2023',
    title: "Why did a Kashmiri terrorist trust Adhik Kadam with his daughter's upbringing?",
    excerpt: 'In 2006, a terrorist and his two accomplices barged into the house where orphaned girls were lodged by the NGO Borderless World Foundation in Kupwara, north Kashmir. The employees were shivering in fear as they could recognize the leader of the intruders who was a top-ranked terrorist.',
    link: 'https://www.awazthevoice.in/youth-news/why-did-a-kashmiri-terrorist-trust-adhik-kadam-with-his-daughter-s-upbringing-23392.html',
    logo: 'https://www.borderlessworldfoundation.org/assets/images/azad.svg'
  },
  {
    publisher: 'YourStory',
    date: 'October 2017',
    title: 'Meet the 2 Kashmiri women who are combating menstrual taboos',
    excerpt: 'Growing up in a society that stigmatises menstruation, two social entrepreneurs in a border village of Jammu and Kashmir are battling the taboos attached to what is a routine biological process. They are not only creating awareness but also manufacturing and selling sanitary napkins to help poorer women who cannot afford branded products.',
    link: 'https://yourstory.com/2017/10/mir-musharraf-mubeena-khan-kashmir-menstruation',
    logo: 'https://www.borderlessworldfoundation.org/assets/images/yourstory.svg'
  },
  {
    publisher: 'News18',
    date: 'April 12, 2024',
    title: 'Women are messengers of peace: Philanthropist Adhik Kadam wins Social Change Indian of the Year',
    excerpt: 'Our founder Adhik Kadam recognized for outstanding contribution to social change and peacebuilding in conflict zones.',
    link: 'https://www.news18.com/india/women-are-messengers-of-peace-philanthropist-adhik-kadam-wins-social-change-indian-of-the-year-9192778.html',
    logo: 'https://www.borderlessworldfoundation.org/assets/images/new18.png'
  },
  {
    publisher: 'Loksatta',
    date: '2018',
    title: "Sarva Karyeshu Sarvada: Borderless World Foundation's comprehensive work",
    excerpt: 'Featured coverage of our holistic approach to community development in Jammu & Kashmir.',
    link: 'https://www.loksatta.com/vishesh/sarva-karyeshu-sarvada-2018-borderless-world-foundation-1757691/',
    logo: 'https://www.borderlessworldfoundation.org/assets/images/loksatta.png'
  },
  {
    publisher: 'Jammu Links',
    date: 'May 15, 2024',
    title: 'Medical camp organized by J&K Army & Borderless World Foundation in Akhnoor',
    excerpt: 'Collaborative healthcare initiative brings medical services to remote border communities.',
    link: 'https://x.com/JAMMULINKS/status/1790796314059452776',
    logo: 'https://www.borderlessworldfoundation.org/assets/images/x.jpg'
  }
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.7, ease: 'easeOut' as const, delay },
})

export function PressSection() {
  return (
    <section className="bg-bwf-ivory py-24 md:py-32 border-t border-bwf-deep/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div {...fadeUp(0)} className="mb-16">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-bwf-gold mb-6">Press & Media</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-bwf-deep leading-tight max-w-3xl">
            Stories that carried the work beyond the field.
          </h2>
        </motion.div>

        {/* Desktop: Masonry-style / staggered layout, Mobile: Single column stack */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {articles.map((article, i) => (
            <motion.a
              key={i}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              {...fadeUp(i * 0.1)}
              className="group block bg-white p-8 md:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-bwf-deep/5"
            >
              <div className="flex items-center justify-between mb-8 border-b border-bwf-deep/10 pb-6">
                <img 
                  src={article.logo} 
                  alt={article.publisher} 
                  className="h-8 max-w-[120px] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-bwf-gold">{article.date}</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl text-bwf-deep mb-4 group-hover:text-bwf-teal transition-colors">
                {article.title}
              </h3>
              <p className="text-[15px] font-light text-bwf-deep/70 leading-relaxed mb-8">
                {article.excerpt}
              </p>
              <div className="flex items-center text-[11px] font-bold tracking-[0.2em] uppercase text-bwf-deep group-hover:text-bwf-teal transition-colors">
                Read Full Article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.a>
          ))}
        </div>
        
        <motion.div {...fadeUp(0.3)} className="mt-20 text-center flex flex-col items-center gap-6">
          <a 
            href="https://www.borderlessworldfoundation.org/gallery" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-8 py-4 bg-bwf-deep text-bwf-ivory text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-bwf-gold transition-colors duration-300"
          >
            VIEW GALLERY <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
