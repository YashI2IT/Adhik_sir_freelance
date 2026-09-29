import { useSEO } from '../hooks/useSEO'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PageTransition } from '../components/PageTransition'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.8, ease: 'easeOut' as const, delay },
})

function SectionHeading({ title }: { title: string }) {
  return (
    <motion.div {...fadeUp(0)}>
      <h2 className="font-display text-4xl md:text-5xl text-[#051315] mb-10 pb-6 border-b border-[#051315]/10 inline-block pr-16">
        {title}
      </h2>
    </motion.div>
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
          <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-40">
            <img 
              src="/images/IMG_8648.jpg" 
              alt="Kashmir Landscape" 
              className="w-full h-full object-cover object-[center_30%] mix-blend-overlay grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-[#051315]/80 to-transparent" />
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
          <div className="max-w-3xl mx-auto text-center mb-24">
            <motion.h2 {...fadeUp(0)} className="font-display text-4xl md:text-5xl text-[#051315] italic">
              CHANGE BEGINS WITH ME.
            </motion.h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-24">
            {/* 1995 */}
            <motion.div {...fadeUp(0.1)} className="border-l border-[#B59A63]/50 pl-8 md:pl-12 relative">
              <div className="absolute top-0 left-[-6px] w-3 h-3 rounded-full bg-[#B59A63]" />
              <h2 className="font-display text-4xl text-[#051315] mb-2">1995</h2>
              <h3 className="font-display text-3xl italic text-[#B59A63] mb-12">I CAME WITH QUESTIONS.</h3>
              
              <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80 font-light">
                <p>I was eighteen.</p>
                <p>I came from Pune to Jammu not as a social worker.</p>
                <p>I had no organisation.</p>
                <p>No funding.</p>
                <p>No project.</p>
                <p>And certainly no idea that Kashmir would become the defining journey of my life.</p>
                <p>I was a student of Political Science trying to understand Kashmir beyond books, newspapers and political narratives.</p>
                <p>I met displaced Kashmiri Pandit families living away from their homes.</p>
                <p>I travelled towards border communities in Rajouri and Poonch.</p>
                <p>I listened.</p>
                <p>And for the first time, conflict stopped being a subject I was studying.</p>
                <p>It had faces. It had families. It had memories. It had children.</p>
                
                <div className="py-8 my-8 border-y border-[#051315]/10 text-center pr-8">
                  <p className="font-display text-2xl md:text-3xl text-[#051315] leading-relaxed">
                    One question began following me:
                    <br/><br/>
                    <span className="italic text-[#B59A63]">What happens to ordinary human beings when history, politics and conflict enter their homes?</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 1997 */}
            <motion.div {...fadeUp(0)} className="border-l border-[#B59A63]/50 pl-8 md:pl-12 relative">
              <div className="absolute top-0 left-[-6px] w-3 h-3 rounded-full bg-[#B59A63]" />
              <h2 className="font-display text-4xl text-[#051315] mb-2">1997</h2>
              <h3 className="font-display text-3xl italic text-[#B59A63] mb-12">I CROSSED INTO THE VALLEY.</h3>
              
              <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80 font-light">
                <p>I entered Kashmir.</p>
                <p>I wanted to understand.</p>
                <p>But understanding Kashmir from a distance and living among its people were two very different things.</p>
                <p>Gradually, Kashmir began teaching me something that no university could have taught me.</p>
                <div className="mt-8 pt-8 space-y-4 font-display text-2xl text-[#051315]">
                  <p>Listen before speaking.</p>
                  <p>Enter people's lives before trying to enter their problems.</p>
                  <p>Never demand trust.</p>
                  <p>Earn it.</p>
                  <p className="italic text-[#B59A63]">And earning trust takes time.</p>
                </div>
              </div>
            </motion.div>

            {/* 1999 */}
            <motion.div {...fadeUp(0)} className="border-l border-[#B59A63]/50 pl-8 md:pl-12 relative">
              <div className="absolute top-0 left-[-6px] w-3 h-3 rounded-full bg-[#B59A63]" />
              <h2 className="font-display text-4xl text-[#051315] mb-2">1999</h2>
              <h3 className="font-display text-3xl italic text-[#B59A63] mb-12">THEN I WITNESSED WAR.</h3>
              
              <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80 font-light">
                <p>The Kargil conflict displaced families and disrupted ordinary life.</p>
                <p>I worked among affected communities around Gagangir and Sonamarg.</p>
                <p>Community kitchens were organised. Children needed spaces to continue learning. Families needed support.</p>
                <p>Sometimes they simply needed someone willing to remain beside them.</p>
                <p>Something was changing inside me.</p>
                <p>I had come to Kashmir to understand conflict.</p>
                <p>But increasingly, I was encountering the human consequences of conflict.</p>
                <p className="font-display text-2xl text-[#051315] italic py-6">Once suffering enters your consciousness, remaining only a spectator becomes difficult.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. UNDERSTANDING */}
        <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#F7F6F1]">
          <div className="max-w-3xl mx-auto space-y-16">
            <SectionHeading title="From Relief to Understanding." />
            
            <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
              <p>By then, I had witnessed displacement.</p>
              <p>I had seen border communities living with uncertainty.</p>
              <p>I had worked during war.</p>
              <p>But much of what I was doing was still responding to what was immediately visible.</p>
              <p>Then came an experience that changed the direction of my life.</p>
            </div>

            <div className="pt-16">
              <p className="text-[14px] uppercase tracking-[0.2em] text-[#B59A63] font-bold mb-8">CHILDREN AFFECTED BY ARMED CONFLICT</p>
              <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
                <p>I had the opportunity to work on a study on “Children Affected by Armed Conflict”, associated with UNICEF, alongside Padma Shri Balraj Puri, founder of the Institute of Jammu and Kashmir Affairs.</p>
                <p>The work took me deeper into the consequences of conflict on children and families.</p>
                <p>We travelled. We met families. We listened. We gathered information.</p>
                <p>And behind the vocabulary of militancy, security, politics and conflict, another reality emerged.</p>
                
                <h3 className="font-display text-4xl text-[#051315] py-8">CHILDREN.</h3>
                
                <p>Children who had lost fathers.</p>
                <p>Children who had lost mothers.</p>
                <p>Children growing up with widowed mothers.</p>
                <p>Children whose education had been interrupted.</p>
                <p>Children living in economically fragile households.</p>
                <p>Children growing up surrounded by uncertainty.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. DARDPORA / KUPWARA */}
        <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
          <div className="max-w-3xl mx-auto space-y-12">
            <h3 className="font-display text-4xl text-[#051315]">THEN I REACHED KUPWARA.</h3>
            
            <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
              <p>The findings confronted me with a scale of vulnerability I had never imagined.</p>
              <p>Our field study indicated that Kupwara district alone had more than 24,000 orphaned children.</p>
              <p>And then there was one village that remained deeply etched in my mind.</p>
              <p className="font-display text-5xl italic text-[#B59A63] py-6">DARDPORA.</p>
              <p>Our study recorded more than 1,000 orphaned children there.</p>
            </div>
          </div>

          <motion.div {...fadeUp(0)} className="max-w-5xl mx-auto my-24">
             <div className="w-full aspect-video rounded-md overflow-hidden shadow-2xl relative">
                <img src="/images/IMG_1888.jpg" alt="Research field notes" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700" />
             </div>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
              <p>These were not merely numbers in a survey.</p>
              <p>Every number represented a childhood. A family. A story. A future.</p>
              
              <div className="py-12 border-y border-[#051315]/10 my-12 text-center">
                <p className="font-display text-2xl text-[#0D343A]/60">And suddenly the question was no longer:</p>
                <p className="font-display text-3xl italic text-[#051315] my-4">How many?</p>
                <p className="font-display text-2xl text-[#0D343A]/60 mt-8 mb-4">It became:</p>
                <p className="font-display text-4xl text-[#B59A63]">WHAT HAPPENS TO THEM NEXT?</p>
              </div>
            </div>

            <div className="pt-8">
              <SectionHeading title="The Study Changed My Question." />
              <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80 mt-8">
                <p>Until then I had been asking:</p>
                <p className="italic font-display text-2xl text-[#051315]">What can I do during a crisis?</p>
                <p>The research forced me to ask something much harder.</p>
                
                <div className="pl-6 border-l border-[#B59A63] py-4 my-8 space-y-4">
                  <p className="font-display text-2xl text-[#051315]">What happens to a child after the crisis becomes old news?</p>
                  <p className="font-display text-2xl text-[#051315]">Who remains when emergency relief ends?</p>
                  <p className="font-display text-2xl text-[#051315]">Who protects her education?</p>
                  <p className="font-display text-2xl text-[#051315]">Who supports a widowed mother?</p>
                  <p className="font-display text-2xl text-[#051315]">Who prevents vulnerability from becoming exploitation?</p>
                  <p className="font-display text-2xl text-[#B59A63] italic">Who remains until that child becomes capable of standing independently?</p>
                </div>
              </div>
            </div>
            
            <div className="pt-16">
              <h3 className="font-display text-4xl text-[#051315] mb-8">ONE REALITY TROUBLED ME MOST.<br/><span className="italic text-[#B59A63]">THE VULNERABILITY OF GIRLS.</span></h3>
              <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
                <p>In fragile families affected by conflict, girls could face multiple layers of vulnerability.</p>
                <p>Loss of parental protection. Interrupted education. Economic insecurity. Social pressure. Limited opportunities. And uncertainty about their own future.</p>
                <p className="font-display text-2xl text-[#051315] pt-8">Temporary relief would never be enough.</p>
                <p>These girls needed something different.</p>
                <p>Long-term accompaniment. A safe home. Education. Healthcare. Protection. Skills. Confidence. Opportunity.</p>
                <p className="font-display text-3xl text-[#B59A63] pt-6 uppercase tracking-widest">And eventually—<br/>INDEPENDENCE.</p>
              </div>
            </div>

            <div className="pt-24 text-center">
              <h3 className="font-display text-4xl text-[#051315] italic mb-8">KNOWLEDGE CREATED RESPONSIBILITY.</h3>
              <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80 max-w-2xl mx-auto">
                <p>The study had begun as an attempt to understand the consequences of armed conflict on children.</p>
                <p>For me, it became something much more personal.</p>
                <p>I could no longer look at these children merely as subjects of research.</p>
                <p>Once you know, you have a choice.</p>
                <p>You can document the suffering. You can discuss it. You can move on.</p>
                <p className="font-display text-5xl text-[#B59A63] pt-12">Or—<br/>YOU CAN STAY.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. BASERA-E-TABASSUM & TIMELINE */}
        <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#051315] text-[#F7F6F1]">
          <div className="max-w-3xl mx-auto space-y-24">
            
            {/* 2002 */}
            <motion.div {...fadeUp(0)} className="border-l border-[#B59A63]/50 pl-8 md:pl-12 relative">
              <div className="absolute top-0 left-[-6px] w-3 h-3 rounded-full bg-[#B59A63]" />
              <h2 className="font-display text-4xl text-white mb-2">2002</h2>
              <h3 className="font-display text-3xl italic text-[#B59A63] mb-12">TWO GIRLS.<br/>ONE BEGINNING.</h3>
              
              <div className="space-y-6 text-[18px] leading-[1.9] text-white/70 font-light">
                <p>In Kupwara, a small beginning was taking shape.</p>
                <p>There was no grand institution. No large building. No major donor. No blueprint for what it would eventually become.</p>
                <p>There were girls who needed security, education, affection and the possibility of a future.</p>
                <p>And there was a decision.</p>
                <p className="font-display text-4xl text-white pt-4">STAY.</p>
                <p className="pt-4">Basera-e-Tabassum— <span className="italic text-[#B59A63]">“The Abode of Smiles”</span> —began as a home for vulnerable girls.</p>
                <p>What began with a few children gradually became a lifelong responsibility.</p>
                
                <h3 className="font-display text-3xl text-white pt-16 mb-6">NOT AN ORPHANAGE.<br/>A HOME.</h3>
                <p>A child does not only need food and shelter. She needs belonging. She needs education. She needs confidence. She needs someone who believes in her.</p>
                <p>And eventually, she needs the freedom to build a life of her own.</p>
                <p>Our responsibility could not simply end when a girl turned eighteen.</p>
                <p>It had to continue until dependency became independence.</p>

                <div className="py-16 my-16 border-y border-white/10">
                  <h3 className="font-display text-3xl italic text-[#B59A63] mb-12 text-center">OUR JOURNEY FOUND THREE WORDS.</h3>
                  <div className="space-y-12">
                    <div className="text-center">
                      <p className="font-display text-3xl text-white mb-2 tracking-widest uppercase">RESCUE.</p>
                      <p className="text-white/60">When a human life faces immediate crisis or vulnerability.</p>
                    </div>
                    <div className="text-center">
                      <p className="font-display text-3xl text-white mb-2 tracking-widest uppercase">REBUILD.</p>
                      <p className="text-white/60">Through shelter, education, healthcare, skills and opportunity.</p>
                    </div>
                    <div className="text-center">
                      <p className="font-display text-3xl text-white mb-2 tracking-widest uppercase">REVIVE.</p>
                      <p className="text-white/60">Until dignity, confidence and independence return.</p>
                    </div>
                  </div>
                  <div className="mt-16 pt-8 border-t border-white/10 text-center">
                    <p className="font-display text-2xl text-[#B59A63] tracking-widest">RESCUE → REBUILD → REVIVE</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2005 */}
            <motion.div {...fadeUp(0)} className="border-l border-[#B59A63]/50 pl-8 md:pl-12 relative">
              <div className="absolute top-0 left-[-6px] w-3 h-3 rounded-full bg-[#B59A63]" />
              <h2 className="font-display text-4xl text-white mb-2">2005</h2>
              <h3 className="font-display text-3xl italic text-[#B59A63] mb-12">WHEN THE EARTH SHOOK.</h3>
              
              <div className="space-y-6 text-[18px] leading-[1.9] text-white/70 font-light">
                <p>The Kashmir earthquake brought another humanitarian emergency.</p>
                <p>Homes collapsed. Communities were displaced. Families were suddenly exposed to enormous uncertainty.</p>
                <p>Relief was necessary.</p>
                <p>But by then we had understood something important.</p>
                <p className="font-display text-2xl text-white">Emergency response becomes stronger when relationships already exist before the emergency.</p>
                <p>We were not arriving in Kashmir.</p>
                <p className="font-display text-4xl text-[#B59A63] italic pt-6">WE WERE ALREADY THERE.</p>
              </div>
            </motion.div>

            {/* 2012 */}
            <motion.div {...fadeUp(0)} className="border-l border-[#B59A63]/50 pl-8 md:pl-12 relative">
              <div className="absolute top-0 left-[-6px] w-3 h-3 rounded-full bg-[#B59A63]" />
              <h2 className="font-display text-4xl text-white mb-2">2012</h2>
              <h3 className="font-display text-3xl italic text-[#B59A63] mb-12">A DIFFERENT KIND OF STORM.</h3>
              
              <div className="space-y-6 text-[18px] leading-[1.9] text-white/70 font-light">
                <p>Following public recognition of my work in Maharashtra, Marathi newspaper articles about me and our work began circulating in Kashmir.</p>
                <p>But they were being used in an entirely different context.</p>
                <p>In places where very few people could read Marathi, these articles were presented alongside serious allegations and narratives questioning my intentions and the work being done with vulnerable girls.</p>
                <p>Statements circulated. Complaints followed. Rumours travelled. Suspicion was created.</p>
                <p>In an already volatile environment, misinformation was not simply uncomfortable.</p>
                <p className="font-display text-2xl text-[#B59A63]">IT COULD BECOME DANGEROUS.</p>
                
                <h3 className="font-display text-3xl text-white pt-12 pb-6">THE EASIEST DECISION<br/>WAS TO LEAVE.</h3>
                <p>I was from Maharashtra. I could have returned home. I could have said: <span className="italic">“I tried.”</span></p>
                <p>But there was another question.</p>
                <p>What would leaving tell the girls who had trusted us?</p>
                <p>What would it tell the families who had placed their daughters in our care?</p>
                <p>What would happen to years of relationships built quietly within these communities?</p>
                <p className="font-display text-2xl text-white py-6">Someone else's narrative could not become the reason I abandoned the people who had trusted me.</p>
                <p className="font-display text-5xl text-[#B59A63] italic pb-6">SO I STAYED.</p>
                <p>Not to fight anyone. Not to win an argument. Not to prove that I was right.</p>
                <p>Simply to continue the work.</p>

                <h3 className="font-display text-3xl text-white pt-12 pb-6">TRUST WAS OUR REAL INFRASTRUCTURE.</h3>
                <p>Buildings can be constructed with money. Vehicles can be purchased. Projects can be funded.</p>
                <p>But trust cannot be bought.</p>
                <p>It took years. Living together. Eating together. Celebrating together. Grieving together. Making mistakes. Learning. Returning. And staying.</p>
                <p className="font-display text-2xl text-[#B59A63] pt-6 uppercase tracking-widest">PRESENCE BECAME OUR STRONGEST INSTITUTION.</p>
              </div>
            </motion.div>

            {/* 2014 */}
            <motion.div {...fadeUp(0)} className="border-l border-[#B59A63]/50 pl-8 md:pl-12 relative">
              <div className="absolute top-0 left-[-6px] w-3 h-3 rounded-full bg-[#B59A63]" />
              <h2 className="font-display text-4xl text-white mb-2">2014</h2>
              <h3 className="font-display text-3xl italic text-[#B59A63] mb-12">THEN KASHMIR WENT UNDER WATER.</h3>
              
              <div className="space-y-6 text-[18px] leading-[1.9] text-white/70 font-light">
                <p>The floods devastated large parts of the Valley.</p>
                <p>I experienced the disaster personally.</p>
                <p>After reaching safety, the work began again. Community kitchens. Relief. Coordination. Support.</p>
                <p>Once again, crisis reinforced something we had already learned.</p>
                <p className="font-display text-2xl text-white">When people know you will remain after the crisis, relief becomes relationship.</p>
              </div>
            </motion.div>

            {/* 2016 */}
            <motion.div {...fadeUp(0)} className="border-l border-[#B59A63]/50 pl-8 md:pl-12 relative">
              <div className="absolute top-0 left-[-6px] w-3 h-3 rounded-full bg-[#B59A63]" />
              <h2 className="font-display text-4xl text-white mb-2">2016</h2>
              <h3 className="font-display text-3xl italic text-[#B59A63] mb-12">A GENERATION WAS HURTING.</h3>
              
              <div className="space-y-6 text-[18px] leading-[1.9] text-white/70 font-light">
                <p>During the unrest of 2016, many young people suffered serious eye injuries.</p>
                <p>There were political arguments everywhere. But beyond every argument stood a profoundly human question.</p>
                <p className="font-display text-3xl text-[#B59A63] py-8">WHAT HAPPENS TO A YOUNG PERSON<br/>IF DARKNESS BECOMES PERMANENT?</p>
                <p>A teenager may have sixty or seventy years of life ahead.</p>
                <p>Education. Livelihood. Relationships. Family. Dreams.</p>
                <p>Could we simply watch?</p>

                <h3 className="font-display text-3xl text-white pt-12 pb-6">A WOUNDED EYE<br/>DOES NOT HAVE AN IDEOLOGY.</h3>
                <p>We began reaching out. Doctors. Ophthalmologists. Eye surgeons. Hospitals. Friends. Volunteers. Networks across India.</p>
                <p>The purpose was simple: <span className="text-white font-display text-xl">Find the best possible medical help wherever it existed.</span></p>
                <p>Specialists were mobilised. Difficult cases needed specialised intervention. Patients were connected with medical expertise outside Kashmir.</p>
                <p>Among them was Insha Malik, who had suffered devastating injuries to both eyes. She was taken to Aditya Jyot Eye Hospital in Mumbai in the hope that advanced medical intervention could help.</p>
                <p>Not every battle against injury can be won. But every human being deserves our best effort.</p>
                
                <div className="py-12 my-12 border-y border-white/10 text-center">
                  <h3 className="font-display text-3xl italic text-white mb-8">HUMANITY CANNOT ASK<br/>WHICH SIDE AN INJURED PERSON BELONGS TO.</h3>
                  <p>Pain has no religion. A wounded child has no ideology. Compassion cannot wait for political agreement.</p>
                  <p className="font-display text-3xl text-[#B59A63] pt-8 uppercase">HUMANITY MUST ARRIVE FIRST.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. ECOSYSTEM OF CARE & IMPACT */}
        <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <h3 className="text-sm tracking-[0.2em] uppercase text-[#B59A63] font-bold mb-4">The Journey Kept Expanding</h3>
              <h2 className="font-display text-5xl md:text-6xl text-[#051315]">FROM A HOME<br/><span className="italic text-[#B59A63]">TO AN ECOSYSTEM OF CARE.</span></h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 text-[18px] leading-[1.9] text-[#0D343A]/80 mb-24">
              <div className="space-y-4">
                <p>The girls taught us about education.</p>
                <p>Remote villages taught us about healthcare.</p>
                <p>Emergencies taught us about preparedness.</p>
                <p>Mountains taught us about access.</p>
                <p>Conflict taught us about patience.</p>
                <p>And every limitation forced us to find another way.</p>
              </div>
              <div className="bg-[#F7F6F1] p-8 rounded-lg">
                <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm uppercase tracking-widest text-[#051315]">
                  <li>Residential care.</li>
                  <li>Education.</li>
                  <li>Higher education.</li>
                  <li>Healthcare.</li>
                  <li>Skills.</li>
                  <li>Livelihoods.</li>
                  <li>Mobile Units.</li>
                  <li>Ambulances.</li>
                  <li className="col-span-2">Community development.</li>
                </ul>
              </div>
            </div>

            <div className="text-center pb-24 border-b border-[#051315]/10">
              <p className="text-[20px] text-[#0D343A]/80 mb-6">What began as a response to vulnerable girls gradually evolved into an ecosystem built around one principle:</p>
              <p className="font-display text-4xl font-bold text-[#B59A63]">HUMAN DIGNITY.</p>
            </div>

            <div className="py-24 max-w-3xl mx-auto">
              <h3 className="font-display text-4xl text-[#051315] italic mb-8">HEALTHCARE HAD TO TRAVEL.</h3>
              <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
                <p>We encountered another simple reality. Many people living in remote areas were not reaching hospitals.</p>
                <p>So we changed the question.</p>
                <p>Instead of asking: <span className="italic">Why aren't patients reaching healthcare?</span></p>
                <p className="font-display text-2xl text-[#051315]">We asked: WHY CAN'T HEALTHCARE REACH THEM?</p>
                <p>Mobile Medical Units began travelling into underserved communities. Ambulances reached difficult terrain. Healthcare moved towards people.</p>
                <p>And on Dal Lake, even the water became a road.</p>
                <p className="font-display text-3xl text-[#B59A63] pt-6 uppercase tracking-widest">DAL PARI<br/><span className="text-xl font-light text-[#0D343A]/60">Healthcare on Water.</span></p>
              </div>
            </div>

            {/* IMPACT NUMBERS */}
            <div className="py-24 bg-[#051315] rounded-3xl text-[#F7F6F1] px-8 md:px-16 my-16 shadow-2xl">
              <h3 className="font-display text-4xl text-center mb-16 text-[#B59A63]">THE NUMBERS GREW.</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 text-center mb-16">
                {[
                  { label: "Girls supported", value: "0,000+" },
                  { label: "Patients treated", value: "0,00,000+" },
                  { label: "Villages reached", value: "000+" },
                  { label: "Ambulances deployed", value: "00" },
                  { label: "Homes established", value: "0" },
                  { label: "Students graduating", value: "000+" },
                  { label: "Families rebuilding", value: "0,000+" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="font-display text-4xl md:text-5xl text-[#B59A63] mb-4">{item.value}</span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6 text-[20px] leading-[1.9] text-white/80 text-center border-t border-white/10 pt-16 max-w-2xl mx-auto">
                <p>But numbers are not the deepest measure of change.</p>
                <p className="font-display text-3xl text-[#B59A63] italic">There is another measure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. ALUMNAE & CIRCLE OF CHANGE */}
        <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#F7F6F1]">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display text-4xl md:text-5xl text-[#051315] mb-16 leading-tight">
              WHEN THE PERSON<br/>YOU ONCE SERVED<br/><span className="text-[#B59A63] italic">STANDS BESIDE YOU AS A LEADER.</span>
            </h3>
            
            <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
              <p>Girls who entered our homes as vulnerable children grew up.</p>
              <p>They studied. They graduated. They became doctors. Nurses. Teachers. Lawyers. Government employees. Professionals. Entrepreneurs. Breadwinners. Mothers. Community leaders.</p>
              <p>And some returned.</p>
              <p>Not as beneficiaries.</p>
              <div className="py-8 my-8 border-y border-[#051315]/10 font-display text-3xl md:text-4xl text-[#051315] space-y-4">
                <p>AS COLLEAGUES.</p>
                <p>AS PROFESSIONALS.</p>
                <p>AS LEADERS.</p>
              </div>
            </div>

            <div className="pt-16">
              <h3 className="font-display text-4xl italic text-[#B59A63] mb-8">THE CIRCLE OF CHANGE.</h3>
              <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
                <p>If someone permanently remains a beneficiary, something in the development process remains unfinished.</p>
                <p className="font-display text-2xl text-[#051315]">Real transformation begins when—</p>
                <div className="pl-6 border-l-2 border-[#B59A63] space-y-4 my-8">
                  <p>The beneficiary becomes a stakeholder.</p>
                  <p>The stakeholder becomes a leader.</p>
                  <p>And the leader begins creating opportunities for somebody else.</p>
                </div>
                <p>Today, many of the people carrying this work forward understand vulnerability not because they studied it—</p>
                <p className="font-display text-3xl text-[#051315] pt-6 uppercase tracking-widest">BUT BECAUSE THEY LIVED IT.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FIVE WORDS (VISUAL PIECE) */}
        <section className="py-32 px-6 md:px-12 lg:px-16 bg-white">
          <motion.div {...fadeUp(0)} className="py-24 px-8 md:px-16 bg-[#051315] text-[#F7F6F1] max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            {/* Ambient background effect */}
            <div className="absolute inset-0 z-0 opacity-20">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B59A63]/40 via-[#051315] to-[#051315]" />
            </div>

            <div className="relative z-10">
              <h3 className="font-display text-3xl md:text-5xl text-[#B59A63] mb-12 text-center leading-tight">
                I BEGAN THIS JOURNEY<br/>TRYING TO UNDERSTAND KASHMIR.
              </h3>
              
              <div className="space-y-6 text-[18px] leading-[1.9] text-white/80 text-center max-w-2xl mx-auto">
                <p>Three decades later, Kashmir has taught me more than I could ever have imagined.</p>
                <p>It taught me that service begins with listening.</p>
                <p>That trust takes years.</p>
                <p>That institutions are not buildings.</p>
                <p>That compassion needs courage.</p>
                <p className="font-display text-2xl text-white pt-4">That sometimes the most important thing you can do is simply refuse to leave.</p>
              </div>

              <div className="text-center mt-32 mb-20 border-t border-white/10 pt-16">
                <p className="text-sm tracking-[0.3em] uppercase text-white/40 mb-4 font-bold">THREE DECADES.</p>
                <h3 className="font-display text-6xl text-[#B59A63] italic">FIVE WORDS.</h3>
              </div>

              <div className="space-y-16 max-w-xl mx-auto pb-8">
                <div className="text-center">
                  <h4 className="font-display text-4xl text-white mb-4 tracking-widest uppercase">LISTEN.</h4>
                  <p className="text-[#B59A63] text-xl font-light">Before deciding what people need.</p>
                </div>
                <div className="text-center">
                  <h4 className="font-display text-4xl text-white mb-4 tracking-widest uppercase">STAY.</h4>
                  <p className="text-[#B59A63] text-xl font-light">Long enough to understand what the problem really is.</p>
                </div>
                <div className="text-center">
                  <h4 className="font-display text-4xl text-white mb-4 tracking-widest uppercase">TRUST.</h4>
                  <p className="text-[#B59A63] text-xl font-light">People with their own transformation.</p>
                </div>
                <div className="text-center">
                  <h4 className="font-display text-4xl text-white mb-4 tracking-widest uppercase">SERVE.</h4>
                  <p className="text-[#B59A63] text-xl font-light">Without making yourself the centre of their story.</p>
                </div>
                <div className="text-center">
                  <h4 className="font-display text-4xl text-white mb-4 tracking-widest uppercase">BELONG.</h4>
                  <p className="text-[#B59A63] text-xl font-light">Until there is no longer an "us" and "them."</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 9. REFLECTION & SERVICE TO WITNESSING */}
        <section className="py-32 px-6 md:px-12 lg:px-16 bg-[#F7F6F1]">
          <div className="max-w-3xl mx-auto space-y-24">
            
            <div>
              <h3 className="font-display text-4xl italic text-[#051315] mb-12">
                PERHAPS I WAS ASKING<br/>THE WRONG QUESTION.
              </h3>
              <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
                <p>For years people have asked me: <span className="italic font-display text-xl text-[#051315]">“What have you done for Kashmir?”</span></p>
                <p>After three decades, I find myself asking something very different.</p>
                <div className="py-12 my-12 border-y border-[#051315]/10 text-center">
                  <p className="font-display text-4xl md:text-5xl text-[#B59A63] leading-tight">WHAT HAS KASHMIR<br/>DONE TO ME?</p>
                </div>
                <p>It gave direction to an eighteen-year-old searching for meaning.</p>
                <p>It taught me patience. It tested my convictions. It broke many of my assumptions.</p>
                <p>It introduced me to suffering.</p>
                <p>But it also introduced me to extraordinary courage. Friendship. Generosity. Faith. Love. And belonging.</p>
                
                <div className="pt-16 mt-16 border-t border-[#051315]/10 text-center">
                  <p className="text-[18px] text-[#0D343A]/60 uppercase tracking-widest mb-8">Somewhere during this journey—</p>
                  <p className="font-display text-4xl md:text-5xl text-[#051315] leading-tight mb-8">KASHMIR STOPPED BEING<br/>THE PLACE WHERE I WORKED.</p>
                  <p className="font-display text-4xl md:text-5xl text-[#B59A63] italic leading-tight">IT BECAME A PLACE<br/>WHERE I BELONGED.</p>
                </div>
              </div>
            </div>

            <div className="pt-16 border-t border-[#051315]/10">
              <h3 className="font-display text-4xl text-[#051315] mb-12">FROM SERVICE<br/><span className="text-[#B59A63] italic">TO WITNESSING.</span></h3>
              <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
                <p>When I was young, I thought service meant helping another person.</p>
                <p>Later, I thought it meant solving problems.</p>
                <p>Then I understood that sustainable change means creating systems through which people rebuild their own lives.</p>
                <p>Today, I understand service somewhat differently.</p>
                <div className="pl-6 border-l-2 border-[#B59A63] space-y-4 my-8 font-display text-2xl text-[#051315]">
                  <p>Service is also about witnessing.</p>
                  <p>Being present.</p>
                  <p>Walking beside another human being without always believing you have the answer.</p>
                </div>
                <p className="font-display text-3xl text-[#B59A63] pt-8 uppercase tracking-widest">And allowing that encounter—<br/>TO TRANSFORM YOU TOO.</p>
              </div>
            </div>

            <div className="pt-16 border-t border-[#051315]/10">
              <h3 className="font-display text-4xl text-[#051315] mb-12 leading-tight">THE FUTURE IS NOT ABOUT<br/><span className="text-[#B59A63] italic">MAKING BWF BIGGER.</span></h3>
              <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
                <p>The deeper questions are different.</p>
                <div className="pl-6 border-l-2 border-[#B59A63] space-y-4 my-8 font-display text-xl md:text-2xl text-[#051315]">
                  <p>Can we build institutions that eventually need less of their founders?</p>
                  <p>Can children once considered vulnerable become tomorrow's institution-builders?</p>
                  <p>Can communities become owners of their own solutions?</p>
                  <p>Can compassion become infrastructure?</p>
                  <p>Can service create leadership rather than dependency?</p>
                  <p>Can today's beneficiary become tomorrow's changemaker?</p>
                </div>
                <p className="font-display text-3xl text-[#B59A63] italic pt-8 text-center">THAT IS THE FUTURE<br/>WE ARE TRYING TO BUILD.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CLOSING SECTION */}
        <section className="py-48 px-6 md:px-12 lg:px-16 bg-white text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <h3 className="font-display text-5xl md:text-6xl text-[#051315] mb-16 leading-tight">
              CHANGE DOES NOT ALWAYS<br/><span className="text-[#B59A63] italic">BEGIN WITH POWER.</span>
            </h3>
            
            <div className="space-y-8 text-[20px] leading-[2] text-[#0D343A]/80 max-w-2xl mx-auto font-light">
              <p>Sometimes it begins with an eighteen-year-old asking a question.</p>
              <p>With a journey into an unfamiliar land.</p>
              <p>With a survey that changes the person conducting it.</p>
              <p>With two girls needing a home.</p>
              <p>With someone opening a community kitchen.</p>
              <p>With a doctor answering a telephone call.</p>
              <p>With a young woman refusing to allow her circumstances to define her future.</p>
              <p>Or simply—</p>
              <p className="font-display text-2xl text-[#051315]">with somebody deciding to stay when leaving would have been easier.</p>
              
              <div className="py-24 my-24 border-y border-[#051315]/10">
                <p className="font-display text-5xl md:text-6xl text-[#B59A63] tracking-widest uppercase">CHANGE BEGINS WITH ME.</p>
              </div>
              
              <p>Not because one person can change the world.</p>
              <p>But because every meaningful change needs someone willing to begin.</p>
              <p>And perhaps the greatest responsibility of a changemaker is not to become the face of change.</p>
              <p>It is to create conditions in which others discover—</p>
              <p className="font-display text-4xl md:text-5xl text-[#051315] pt-12 leading-tight">THAT THEY CAN BECOME<br/><span className="text-[#B59A63] italic">CHANGEMAKERS TOO.</span></p>
            </div>

            <div className="mt-48 pt-16 inline-flex flex-col items-center">
              <div className="w-12 h-[1px] bg-[#B59A63] mb-12" />
              <p className="font-bold tracking-[0.3em] uppercase text-[#051315] text-xl">ADHIK KADAM</p>
              <p className="text-sm tracking-widest text-[#0D343A]/60 mt-4 uppercase font-bold">Founder & Chairman</p>
              <p className="text-sm tracking-widest text-[#0D343A]/60 mt-1 uppercase font-bold">Borderless World Foundation</p>
              <p className="text-sm tracking-widest text-[#B59A63] mt-4 italic">Joining Hands. Building Bridges.</p>
              <p className="text-sm tracking-widest text-[#051315] mt-12 font-bold bg-[#F7F6F1] px-4 py-2 rounded-full border border-[#051315]/10">1995 — 2026</p>
              <p className="font-display text-3xl text-[#B59A63] mt-16 italic">THE JOURNEY CONTINUES.</p>
            </div>
          </div>
        </section>

      </main>
    </PageTransition>
  )
}
