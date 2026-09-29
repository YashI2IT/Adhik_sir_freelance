import { useSEO } from '../hooks/useSEO'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PageTransition } from '../components/PageTransition'
import { useRef } from 'react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.8, ease: 'easeOut' as const, delay },
})

function SectionHeading({ title, className = "" }: { title: string, className?: string }) {
  return (
    <motion.div {...fadeUp(0)} className={className}>
      <h2 className="font-display text-4xl md:text-5xl text-[#051315] mb-10 pb-6 border-b border-[#051315]/10 inline-block pr-16">
        {title}
      </h2>
    </motion.div>
  )
}

function TimelineEvent({ year, title, children, dark = false }: { year: string, title: string, children: React.ReactNode, dark?: boolean }) {
  const textColor = dark ? 'text-white' : 'text-[#051315]'
  const subtitleColor = dark ? 'text-[#B59A63]' : 'text-[#B59A63]'
  const bodyColor = dark ? 'text-white/70' : 'text-[#0D343A]/80'
  const borderColor = dark ? 'border-white/10' : 'border-[#051315]/10'

  return (
    <motion.div {...fadeUp(0)} className={`grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 pt-16 border-t ${borderColor}`}>
      <div className="md:sticky md:top-32 h-fit">
        <h2 className={`font-display text-5xl md:text-6xl ${textColor} mb-4 tracking-tight`}>{year}</h2>
        <div className={`w-12 h-1 bg-[#B59A63] mb-8`}/>
        <h3 className={`font-display text-2xl md:text-3xl italic ${subtitleColor} leading-relaxed`}>{title}</h3>
      </div>
      <div className={`space-y-8 text-[18px] md:text-[20px] leading-[1.9] ${bodyColor} font-light`}>
        {children}
      </div>
    </motion.div>
  )
}

function ParallaxDivider({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  
  return (
    <div ref={ref} className="h-[60vh] w-full overflow-hidden relative my-32">
      <motion.div style={{ y }} className="absolute inset-[-20%] w-[140%] h-[140%]">
        <img src={src} alt="Divider" className="w-full h-full object-cover object-center grayscale opacity-80" />
      </motion.div>
      <div className="absolute inset-0 bg-[#051315]/30 mix-blend-multiply" />
    </div>
  )
}

export default function TheCourageToStay() {
  useSEO({
    title: 'The Courage to Stay | Adhik Kadam',
    description: 'Three Decades of Witnessing, Service & Belonging in Kashmir, from 1995 to 2026.',
    canonicalPath: '/the-courage-to-stay',
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

  return (
    <PageTransition>
      <main className="bg-[#F7F6F1] text-[#0D343A] min-h-screen font-light">
        
        {/* 1. CINEMATIC HERO */}
        <section ref={heroRef} className="relative h-screen flex flex-col justify-end pb-32 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#051315]">
          <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-60">
            <img 
              src="/images/IMG_8648.jpg" 
              alt="Kashmir Landscape" 
              className="w-full h-full object-cover object-[center_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-[#051315]/60 to-[#051315]/20" />
          </motion.div>

          <div className="max-w-5xl mx-auto relative z-10 text-center text-[#F7F6F1]">
            <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#B59A63] mb-8">
              Three Decades of Witnessing, Service & Belonging in Kashmir
            </motion.p>
            <motion.h1 {...fadeUp(0.1)} className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] tracking-tight mb-8">
              The Courage <span className="text-[#B59A63] italic">to Stay</span>
            </motion.h1>

            <motion.div {...fadeUp(0.2)} className="max-w-2xl mx-auto mb-16 space-y-4">
              <p className="text-[14px] md:text-[16px] tracking-widest uppercase text-white/60">
                1995 — 2026
              </p>
              <p className="text-[14px] md:text-[16px] tracking-widest uppercase text-[#B59A63] pt-4 border-t border-white/10 inline-block">
                Adhik Kadam
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

        {/* 2. THE BEGINNING / TIMELINE */}
        <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
          <div className="max-w-6xl mx-auto text-center mb-32">
            <motion.h2 {...fadeUp(0)} className="font-display text-5xl md:text-6xl text-[#051315] italic">
              CHANGE BEGINS WITH ME.
            </motion.h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-32">
            <TimelineEvent year="1995" title="I CAME WITH QUESTIONS.">
              <p className="first-letter:text-6xl first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#B59A63]">
                I was eighteen. I came from Pune to Jammu not as a social worker.
              </p>
              <p>I had no organisation. No funding. No project. And certainly no idea that Kashmir would become the defining journey of my life.</p>
              <p>I was a student of Political Science trying to understand Kashmir beyond books, newspapers and political narratives.</p>
              <p>I met displaced Kashmiri Pandit families living away from their homes. I travelled towards border communities in Rajouri and Poonch. I listened.</p>
              <p>And for the first time, conflict stopped being a subject I was studying. It had faces. It had families. It had memories. It had children.</p>
              
              <div className="py-12 my-12 border-y border-[#051315]/10">
                <p className="font-display text-2xl md:text-3xl text-[#051315] leading-relaxed">
                  One question began following me:
                  <br/><br/>
                  <span className="italic text-[#B59A63]">What happens to ordinary human beings when history, politics and conflict enter their homes?</span>
                </p>
              </div>
            </TimelineEvent>

            <TimelineEvent year="1997" title="I CROSSED INTO THE VALLEY.">
              <p>I entered Kashmir.</p>
              <p>I wanted to understand. But understanding Kashmir from a distance and living among its people were two very different things.</p>
              <motion.img {...fadeUp(0)} src="/images/IMG_8065.jpg" alt="Crossing into the Valley" className="w-full md:w-[115%] md:-ml-[7.5%] h-[500px] md:h-[650px] object-cover rounded-2xl shadow-2xl my-16 grayscale hover:grayscale-0 transition-all duration-700" />
              <p>Gradually, Kashmir began teaching me something that no university could have taught me.</p>
              <div className="mt-12 pt-8 pl-8 border-l-2 border-[#B59A63] space-y-4 font-display text-2xl text-[#051315]">
                <p>Listen before speaking.</p>
                <p>Enter people's lives before trying to enter their problems.</p>
                <p>Never demand trust. Earn it.</p>
                <p className="italic text-[#B59A63]">And earning trust takes time.</p>
              </div>
            </TimelineEvent>

            <TimelineEvent year="1999" title="THEN I WITNESSED WAR.">
              <p>The Kargil conflict displaced families and disrupted ordinary life.</p>
              <p>I worked among affected communities around Gagangir and Sonamarg.</p>
              <p>Community kitchens were organised. Children needed spaces to continue learning. Families needed support. Sometimes they simply needed someone willing to remain beside them.</p>
              <p>Something was changing inside me.</p>
              <p>I had come to Kashmir to understand conflict. But increasingly, I was encountering the human consequences of conflict.</p>
              <p className="font-display text-2xl text-[#051315] italic py-8 border-t border-[#051315]/10 mt-8">
                Once suffering enters your consciousness, remaining only a spectator becomes difficult.
              </p>
            </TimelineEvent>
          </div>
        </section>

        {/* 3. UNDERSTANDING */}
        <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#F7F6F1]">
          <div className="max-w-4xl mx-auto space-y-16">
            <SectionHeading title="From Relief to Understanding." className="text-center w-full" />
            
            <div className="space-y-8 text-[18px] md:text-[20px] leading-[1.9] text-[#0D343A]/80 text-center">
              <p>By then, I had witnessed displacement.</p>
              <p>I had seen border communities living with uncertainty.</p>
              <p>I had worked during war.</p>
              <p>But much of what I was doing was still responding to what was immediately visible.</p>
              <p className="text-2xl font-display text-[#051315] italic py-8">Then came an experience that changed the direction of my life.</p>
            </div>

            <div className="pt-24 mt-24 border-t border-[#051315]/10">
              <p className="text-[14px] uppercase tracking-[0.2em] text-[#B59A63] font-bold mb-8 text-center">CHILDREN AFFECTED BY ARMED CONFLICT</p>
              <div className="space-y-8 text-[18px] md:text-[20px] leading-[1.9] text-[#0D343A]/80">
                <p>I had the opportunity to work on a study on “Children Affected by Armed Conflict”, associated with UNICEF, alongside Padma Shri Balraj Puri, founder of the Institute of Jammu and Kashmir Affairs.</p>
                <p>The work took me deeper into the consequences of conflict on children and families. We travelled. We met families. We listened. We gathered information.</p>
                <p>And behind the vocabulary of militancy, security, politics and conflict, another reality emerged.</p>
                <motion.img {...fadeUp(0)} src="/images/IMG_9615(1).jpg" alt="Children in Kashmir" className="w-full aspect-[16/9] object-[center_30%] object-cover rounded-xl shadow-lg my-12" />
                <h3 className="font-display text-5xl text-[#051315] py-12 text-center tracking-widest">CHILDREN.</h3>
                
                <div className="grid md:grid-cols-2 gap-8 text-lg bg-white p-12 rounded-xl shadow-sm border border-[#051315]/5">
                  <p>Children who had lost fathers.</p>
                  <p>Children who had lost mothers.</p>
                  <p>Children growing up with widowed mothers.</p>
                  <p>Children whose education had been interrupted.</p>
                  <p>Children living in economically fragile households.</p>
                  <p>Children growing up surrounded by uncertainty.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. DARDPORA / KUPWARA */}
        <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display text-5xl text-[#051315] mb-12 text-center">THEN I REACHED KUPWARA.</h3>
            
            <div className="space-y-8 text-[18px] md:text-[20px] leading-[1.9] text-[#0D343A]/80 text-center max-w-3xl mx-auto">
              <p>The findings confronted me with a scale of vulnerability I had never imagined.</p>
              <p>Our field study indicated that Kupwara district alone had more than 24,000 orphaned children.</p>
              <p>And then there was one village that remained deeply etched in my mind.</p>
              <p className="font-display text-6xl italic text-[#B59A63] py-12">DARDPORA.</p>
              <p>Our study recorded more than 1,000 orphaned children there.</p>
            </div>

            <motion.div {...fadeUp(0)} className="w-full aspect-[21/9] rounded-xl overflow-hidden shadow-2xl my-32">
               <img src="/images/IMG_1888.jpg" alt="Research field notes" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
              <div className="space-y-8 text-[18px] md:text-[20px] leading-[1.9] text-[#0D343A]/80">
                <h3 className="font-display text-4xl text-[#051315] mb-8">THE STUDY CHANGED MY QUESTION.</h3>
                <p>These were not merely numbers in a survey. Every number represented a childhood. A family. A story. A future.</p>
                <p>Until then I had been asking: <br/><span className="italic font-display text-2xl text-[#051315]">What can I do during a crisis?</span></p>
                <p>The research forced me to ask something much harder.</p>
                <div className="pl-6 border-l-2 border-[#B59A63] py-2 space-y-4 font-display text-xl md:text-2xl text-[#051315]">
                  <p>What happens to a child after the crisis becomes old news?</p>
                  <p>Who remains when emergency relief ends?</p>
                  <p>Who protects her education?</p>
                  <p>Who supports a widowed mother?</p>
                  <p className="text-[#B59A63] italic mt-4">Who remains until that child becomes capable of standing independently?</p>
                </div>
              </div>

              <div className="space-y-8 text-[18px] md:text-[20px] leading-[1.9] text-[#0D343A]/80 bg-[#F7F6F1] p-10 md:p-16 rounded-2xl">
                <h3 className="font-display text-3xl text-[#051315] mb-8 leading-snug">
                  ONE REALITY TROUBLED ME MOST.<br/>
                  <span className="italic text-[#B59A63]">THE VULNERABILITY OF GIRLS.</span>
                </h3>
                <p>In fragile families affected by conflict, girls could face multiple layers of vulnerability: Loss of parental protection. Interrupted education. Economic insecurity. Social pressure.</p>
                <p className="font-display text-xl text-[#051315] py-4 border-y border-[#051315]/10">Temporary relief would never be enough.</p>
                <p>These girls needed something different. Long-term accompaniment. A safe home. Education. Healthcare. Protection.</p>
                <p className="font-display text-3xl text-[#B59A63] pt-6 uppercase tracking-widest text-center">INDEPENDENCE.</p>
              </div>
            </div>

            <div className="mt-48 text-center max-w-3xl mx-auto">
              <h3 className="font-display text-4xl md:text-5xl text-[#051315] italic mb-12">KNOWLEDGE CREATED RESPONSIBILITY.</h3>
              <div className="space-y-8 text-[18px] md:text-[20px] leading-[1.9] text-[#0D343A]/80">
                <p>The study had begun as an attempt to understand the consequences of armed conflict on children. For me, it became something much more personal.</p>
                <p>Once you know, you have a choice. You can document the suffering. You can discuss it. You can move on.</p>
                <p className="font-display text-6xl text-[#B59A63] pt-16 uppercase tracking-widest">OR YOU CAN STAY.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. BASERA-E-TABASSUM & TIMELINE */}
        <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#051315] text-[#F7F6F1]">
          <div className="max-w-5xl mx-auto space-y-32">
            
            <TimelineEvent year="2002" title="TWO GIRLS. ONE BEGINNING." dark>
              <p>In Kupwara, a small beginning was taking shape.</p>
              <p>There was no grand institution. No large building. No major donor. No blueprint for what it would eventually become.</p>
              <p>There were girls who needed security, education, affection and the possibility of a future. And there was a decision.</p>
              <motion.img {...fadeUp(0)} src="/images/IMG_8458.jpg" alt="Girls of Basera-e-Tabassum" className="w-full aspect-[3/2] object-cover rounded-xl shadow-lg my-10 opacity-90 hover:opacity-100 transition-opacity duration-500" />
              <p className="font-display text-3xl text-white pt-4 pb-8">Basera-e-Tabassum— <span className="italic text-[#B59A63]">“The Abode of Smiles”</span> —began as a home for vulnerable girls.</p>
              
              <div className="pt-12 mt-12 border-t border-white/10">
                <h3 className="font-display text-2xl text-white mb-6 uppercase tracking-widest">NOT AN ORPHANAGE. A HOME.</h3>
                <p>A child does not only need food and shelter. She needs belonging. She needs education. She needs confidence. She needs someone who believes in her.</p>
                <p className="mt-4">Our responsibility could not simply end when a girl turned eighteen. It had to continue until dependency became independence.</p>
              </div>

              <div className="py-12 mt-12 bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 text-center">
                <h3 className="font-display text-2xl italic text-[#B59A63] mb-12">OUR JOURNEY FOUND THREE WORDS.</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div>
                    <p className="font-display text-2xl text-white mb-4 tracking-widest uppercase">RESCUE.</p>
                    <p className="text-white/60 text-base">When a human life faces immediate crisis.</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl text-white mb-4 tracking-widest uppercase">REBUILD.</p>
                    <p className="text-white/60 text-base">Through shelter, education, healthcare & skills.</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl text-white mb-4 tracking-widest uppercase">REVIVE.</p>
                    <p className="text-white/60 text-base">Until dignity and independence return.</p>
                  </div>
                </div>
              </div>
            </TimelineEvent>

            <TimelineEvent year="2005" title="WHEN THE EARTH SHOOK." dark>
              <p>The Kashmir earthquake brought another humanitarian emergency.</p>
              <p>Homes collapsed. Communities were displaced. Families were suddenly exposed to enormous uncertainty. Relief was necessary.</p>
              <p className="font-display text-2xl text-white py-6 border-y border-white/10 my-8">Emergency response becomes stronger when relationships already exist before the emergency.</p>
              <p>We were not arriving in Kashmir.</p>
              <p className="font-display text-4xl text-[#B59A63] italic pt-4">WE WERE ALREADY THERE.</p>
            </TimelineEvent>

            <TimelineEvent year="2012" title="A DIFFERENT KIND OF STORM." dark>
              <p>Following public recognition of my work in Maharashtra, Marathi newspaper articles about me and our work began circulating in Kashmir.</p>
              <p>In places where very few people could read Marathi, these articles were presented alongside serious allegations questioning my intentions and the work being done with vulnerable girls.</p>
              <p className="font-display text-2xl text-[#B59A63] py-4">MISINFORMATION COULD BECOME DANGEROUS.</p>
              <p>I was from Maharashtra. I could have returned home. I could have said: <span className="italic">“I tried.”</span></p>
              
              <div className="pl-6 border-l-2 border-[#B59A63] py-4 my-8 font-display text-xl text-white space-y-4">
                <p>What would leaving tell the girls who had trusted us?</p>
                <p>What would it tell the families who had placed their daughters in our care?</p>
                <p>Someone else's narrative could not become the reason I abandoned the people who had trusted me.</p>
              </div>
              
              <p className="font-display text-5xl text-[#B59A63] italic py-8">SO I STAYED.</p>
              <p>Not to fight anyone. Simply to continue the work.</p>
              <p className="mt-8 font-display text-2xl text-white border-t border-white/10 pt-8">Buildings can be constructed with money. But trust cannot be bought. Presence became our strongest institution.</p>
            </TimelineEvent>

            <TimelineEvent year="2014" title="THEN KASHMIR WENT UNDER WATER." dark>
              <p>The floods devastated large parts of the Valley. I experienced the disaster personally.</p>
              <motion.img {...fadeUp(0)} src="/images/IMG_8817.jpg" alt="Relief Work" className="w-full aspect-[4/3] object-cover rounded-xl shadow-lg my-10 opacity-80" />
              <p>After reaching safety, the work began again. Community kitchens. Relief. Coordination. Support.</p>
              <p className="font-display text-2xl text-[#B59A63] pt-8 mt-8 border-t border-white/10">When people know you will remain after the crisis, relief becomes relationship.</p>
            </TimelineEvent>

            <TimelineEvent year="2016" title="A GENERATION WAS HURTING." dark>
              <p>During the unrest of 2016, many young people suffered serious eye injuries.</p>
              <p className="font-display text-3xl text-[#B59A63] py-8">WHAT HAPPENS TO A YOUNG PERSON IF DARKNESS BECOMES PERMANENT?</p>
              <p>A teenager may have sixty or seventy years of life ahead. Could we simply watch?</p>
              <p className="font-display text-2xl text-white mt-8 mb-4">A WOUNDED EYE DOES NOT HAVE AN IDEOLOGY.</p>
              <p>We began reaching out. Doctors. Ophthalmologists. Eye surgeons. Hospitals. The purpose was simple: Find the best possible medical help wherever it existed.</p>
              <p className="mt-4">Not every battle against injury can be won. But every human being deserves our best effort.</p>
              
              <div className="py-12 mt-12 bg-[#B59A63]/10 rounded-2xl p-8 md:p-12 text-center">
                <h3 className="font-display text-3xl italic text-white mb-6">HUMANITY CANNOT ASK WHICH SIDE AN INJURED PERSON BELONGS TO.</h3>
                <p className="text-white/80">Pain has no religion. A wounded child has no ideology. Compassion cannot wait for political agreement.</p>
                <p className="font-display text-3xl text-[#B59A63] pt-8 uppercase tracking-widest">HUMANITY MUST ARRIVE FIRST.</p>
              </div>
            </TimelineEvent>
          </div>
        </section>

        {/* 6. ECOSYSTEM OF CARE & IMPACT */}
        <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-32">
              <h3 className="text-sm tracking-[0.2em] uppercase text-[#B59A63] font-bold mb-6">The Journey Kept Expanding</h3>
              <h2 className="font-display text-5xl md:text-7xl text-[#051315]">FROM A HOME<br/><span className="italic text-[#B59A63]">TO AN ECOSYSTEM.</span></h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 text-[18px] md:text-[20px] leading-[1.9] text-[#0D343A]/80 mb-32 items-center">
              <div className="space-y-6">
                <p>The girls taught us about education.</p>
                <p>Remote villages taught us about healthcare.</p>
                <p>Emergencies taught us about preparedness.</p>
                <p>Mountains taught us about access.</p>
                <p>Conflict taught us about patience.</p>
                <p className="font-display text-3xl text-[#051315] pt-6 border-t border-[#051315]/10 mt-8">And every limitation forced us to find another way.</p>
              </div>
              <div className="bg-[#F7F6F1] p-12 rounded-2xl shadow-inner border border-[#051315]/5">
                <ul className="grid grid-cols-1 gap-y-6 text-base md:text-lg font-display uppercase tracking-widest text-[#051315]">
                  <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[#B59A63]"/>Residential care & Education.</li>
                  <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[#B59A63]"/>Healthcare & Ambulances.</li>
                  <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[#B59A63]"/>Skills & Livelihoods.</li>
                  <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-[#B59A63]"/>Community development.</li>
                </ul>
              </div>
            </div>

            <div className="pt-16 mt-16 border-t border-[#051315]/10 max-w-4xl mx-auto text-center">
              <h3 className="font-display text-4xl text-[#051315] italic mb-8">HEALTHCARE HAD TO TRAVEL.</h3>
              <p className="text-[18px] md:text-[20px] text-[#0D343A]/80 mb-8">Instead of asking why patients weren't reaching healthcare, we asked: <br/><span className="font-display text-2xl text-[#051315]">WHY CAN'T HEALTHCARE REACH THEM?</span></p>
              <p className="text-[18px] md:text-[20px] text-[#0D343A]/80">Mobile Medical Units began travelling into underserved communities. And on Dal Lake, even the water became a road.</p>
              <p className="font-display text-4xl text-[#B59A63] pt-12 uppercase tracking-widest">DAL PARI <span className="text-2xl font-light text-[#0D343A]/60 italic lowercase">healthcare on water.</span></p>
            </div>


          </div>
        </section>

        {/* 7. ALUMNAE & CIRCLE OF CHANGE */}
        <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#F7F6F1]">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <h3 className="font-display text-5xl md:text-6xl text-[#051315] leading-tight">
              WHEN THE PERSON YOU ONCE SERVED<br/><span className="text-[#B59A63] italic">STANDS BESIDE YOU AS A LEADER.</span>
            </h3>
            
            <div className="space-y-8 text-[18px] md:text-[20px] leading-[1.9] text-[#0D343A]/80">
              <p>Girls who entered our homes as vulnerable children grew up.</p>
              <p>They studied. They graduated. They became doctors, nurses, teachers, lawyers, professionals, breadwinners, mothers, and community leaders.</p>
              <p>And some returned. Not as beneficiaries.</p>
              <div className="py-12 my-12 border-y border-[#051315]/10 font-display text-4xl text-[#051315] space-y-4">
                <p>AS COLLEAGUES. AS PROFESSIONALS. AS LEADERS.</p>
              </div>
            </div>

            <div className="pt-16 max-w-3xl mx-auto">
              <h3 className="font-display text-4xl italic text-[#B59A63] mb-12">THE CIRCLE OF CHANGE.</h3>
              <div className="space-y-8 text-[18px] md:text-[20px] leading-[1.9] text-[#0D343A]/80">
                <p>If someone permanently remains a beneficiary, something in the development process remains unfinished.</p>
                <div className="bg-white p-10 rounded-2xl shadow-sm text-left my-12 border border-[#051315]/5">
                  <p className="font-display text-2xl text-[#051315] mb-6">Real transformation begins when—</p>
                  <ul className="space-y-4 pl-6 border-l-2 border-[#B59A63]">
                    <li>The beneficiary becomes a stakeholder.</li>
                    <li>The stakeholder becomes a leader.</li>
                    <li>And the leader begins creating opportunities for somebody else.</li>
                  </ul>
                </div>
                <p>Today, many of the people carrying this work forward understand vulnerability not because they studied it—</p>
                <p className="font-display text-4xl text-[#051315] pt-8 uppercase tracking-widest">BUT BECAUSE THEY LIVED IT.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FIVE WORDS (VISUAL PIECE) */}
        <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
          <motion.div {...fadeUp(0)} className="py-32 px-8 md:px-24 bg-[#051315] text-[#F7F6F1] max-w-5xl mx-auto rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B59A63]/40 via-[#051315] to-[#051315]" />
            </div>

            <div className="relative z-10">
              <h3 className="font-display text-4xl md:text-5xl text-[#B59A63] mb-16 text-center leading-tight">
                I BEGAN THIS JOURNEY<br/>TRYING TO UNDERSTAND KASHMIR.
              </h3>
              
              <div className="space-y-6 text-[18px] md:text-[20px] leading-[1.9] text-white/80 text-center max-w-3xl mx-auto">
                <p>Three decades later, Kashmir has taught me more than I could ever have imagined.</p>
                <p>It taught me that service begins with listening. That trust takes years. That institutions are not buildings. That compassion needs courage.</p>
                <p className="font-display text-3xl text-white pt-8 border-t border-white/10 mt-8">That sometimes the most important thing you can do is simply refuse to leave.</p>
              </div>

              <div className="text-center mt-32 mb-24">
                <p className="text-sm tracking-[0.3em] uppercase text-white/40 mb-6 font-bold">THREE DECADES.</p>
                <h3 className="font-display text-7xl text-[#B59A63] italic">FIVE WORDS.</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto pb-8 text-center md:text-left">
                {[
                  { word: "LISTEN.", desc: "Before deciding what people need." },
                  { word: "STAY.", desc: "Long enough to understand what the problem really is." },
                  { word: "TRUST.", desc: "People with their own transformation." },
                  { word: "SERVE.", desc: "Without making yourself the centre of their story." },
                  { word: "BELONG.", desc: "Until there is no longer an 'us' and 'them.'" }
                ].map((item, i) => (
                  <div key={i} className={`space-y-2 ${i === 4 ? 'md:col-span-2 md:text-center' : ''}`}>
                    <h4 className="font-display text-4xl text-white tracking-widest uppercase">{item.word}</h4>
                    <p className="text-[#B59A63] text-xl font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* 9. REFLECTION & SERVICE TO WITNESSING */}
        <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#F7F6F1]">
          <div className="max-w-4xl mx-auto space-y-32 text-center md:text-left">
            
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
              <h3 className="font-display text-4xl md:text-5xl italic text-[#051315] md:sticky md:top-32">
                PERHAPS I WAS ASKING THE WRONG QUESTION.
              </h3>
              <div className="space-y-8 text-[18px] md:text-[20px] leading-[1.9] text-[#0D343A]/80">
                <p>For years people have asked me: <span className="italic font-display text-2xl text-[#051315]">“What have you done for Kashmir?”</span></p>
                <p>After three decades, I find myself asking something very different.</p>
                <div className="py-12 my-12 border-y border-[#051315]/10 text-center">
                  <p className="font-display text-5xl md:text-6xl text-[#B59A63] leading-tight">WHAT HAS KASHMIR<br/>DONE TO ME?</p>
                </div>
                <p>It gave direction to an eighteen-year-old searching for meaning.</p>
                <p>It taught me patience. It tested my convictions. It broke many of my assumptions. It introduced me to suffering.</p>
                <p className="font-display text-2xl text-[#051315]">But it also introduced me to extraordinary courage. Friendship. Generosity. Faith. Love. And belonging.</p>
                
                <div className="pt-12 mt-12 border-t border-[#051315]/10">
                  <p className="font-display text-3xl md:text-4xl text-[#051315] leading-tight mb-4">KASHMIR STOPPED BEING THE PLACE WHERE I WORKED.</p>
                  <p className="font-display text-4xl md:text-5xl text-[#B59A63] italic leading-tight">IT BECAME A PLACE WHERE I BELONGED.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start border-t border-[#051315]/10 pt-32">
              <h3 className="font-display text-4xl md:text-5xl text-[#051315] md:sticky md:top-32">FROM SERVICE<br/><span className="text-[#B59A63] italic">TO WITNESSING.</span></h3>
              <div className="space-y-8 text-[18px] md:text-[20px] leading-[1.9] text-[#0D343A]/80">
                <p>When I was young, I thought service meant helping another person. Later, I thought it meant solving problems. Then I understood that sustainable change means creating systems through which people rebuild their own lives.</p>
                <p>Today, I understand service somewhat differently.</p>
                <div className="bg-white p-10 rounded-2xl shadow-sm my-8 border border-[#051315]/5">
                  <p className="font-display text-2xl text-[#051315] leading-relaxed">Service is also about witnessing. Being present. Walking beside another human being without always believing you have the answer.</p>
                </div>
                <p className="font-display text-3xl text-[#B59A63] pt-4 uppercase tracking-widest text-center">And allowing that encounter TO TRANSFORM YOU TOO.</p>
              </div>
            </div>

          </div>
        </section>

        {/* 10. CLOSING SECTION */}
        <section className="py-48 px-6 md:px-12 lg:px-16 bg-white text-center relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10">
            <h3 className="font-display text-5xl md:text-7xl text-[#051315] mb-24 leading-tight">
              CHANGE DOES NOT ALWAYS<br/><span className="text-[#B59A63] italic">BEGIN WITH POWER.</span>
            </h3>
            
            <div className="space-y-8 text-[20px] md:text-[24px] leading-[2] text-[#0D343A]/80 max-w-4xl mx-auto font-light">
              <p>Sometimes it begins with an eighteen-year-old asking a question.</p>
              <p>With a journey into an unfamiliar land.</p>
              <p>With two girls needing a home.</p>
              <p>With someone opening a community kitchen.</p>
              <p>With a doctor answering a telephone call.</p>
              <p>Or simply—</p>
              <p className="font-display text-4xl text-[#051315] py-8">with somebody deciding to stay when leaving would have been easier.</p>
              
              <div className="py-24 my-24 border-y border-[#051315]/10">
                <p className="font-display text-6xl md:text-7xl text-[#B59A63] tracking-widest uppercase">CHANGE BEGINS WITH ME.</p>
              </div>
              
              <p>Not because one person can change the world.</p>
              <p>But because every meaningful change needs someone willing to begin.</p>
              <p>And perhaps the greatest responsibility of a changemaker is not to become the face of change.</p>
              <p>It is to create conditions in which others discover—</p>
              <p className="font-display text-5xl md:text-6xl text-[#051315] pt-16 leading-tight">THAT THEY CAN BECOME<br/><span className="text-[#B59A63] italic">CHANGEMAKERS TOO.</span></p>
            </div>

            <div className="mt-48 pt-24 inline-flex flex-col items-center border-t border-[#051315]/10">
              <div className="w-16 h-1 bg-[#B59A63] mb-16" />
              <p className="font-bold tracking-[0.4em] uppercase text-[#051315] text-2xl">ADHIK KADAM</p>
              <p className="text-base tracking-widest text-[#0D343A]/60 mt-6 uppercase font-bold">Founder & Chairman</p>
              <p className="text-base tracking-widest text-[#0D343A]/60 mt-2 uppercase font-bold">Borderless World Foundation</p>
              <p className="text-base tracking-widest text-[#B59A63] mt-6 italic">Joining Hands. Building Bridges.</p>
              <p className="text-sm tracking-widest text-[#051315] mt-16 font-bold bg-[#F7F6F1] px-6 py-3 rounded-full border border-[#051315]/10">1995 — 2026</p>
              <p className="font-display text-4xl text-[#B59A63] mt-24 italic">THE JOURNEY CONTINUES.</p>
            </div>
          </div>
        </section>

      </main>
    </PageTransition>
  )
}
