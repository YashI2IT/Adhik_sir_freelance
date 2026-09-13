import { useSEO } from '../hooks/useSEO'
import { motion } from 'framer-motion'
import { PageTransition } from '../components/PageTransition'
import { Link } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.7, ease: 'easeOut' as const, delay },
})

export default function HeartOfTheCause() {
  useSEO({
    title: 'The Heart of the Cause | Adhik Kadam',
    description: 'Beyond programmes and institutions lies a simple belief: one human being can become a source of strength for another. Read Adhik Kadam’s core philosophy.',
    canonicalPath: '/heart-of-the-cause',
  })

  return (
    <PageTransition>
      <main className="bg-[#051315] text-bwf-ivory min-h-screen">
        {/* Header */}
        <section className="relative pt-40 pb-20 px-6 md:px-12 lg:px-16 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img src="/images/IMG_8458.jpg" alt="Background" className="w-full h-full object-cover mix-blend-overlay grayscale" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#051315] via-transparent to-[#051315]" />
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-bwf-gold mb-8">
              Philosophy & Core Beliefs
            </motion.p>
            <motion.h1 {...fadeUp(0.1)} className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-tight mb-12">
              The Heart of <span className="text-bwf-gold italic">the Cause</span>
            </motion.h1>
            <motion.p {...fadeUp(0.2)} className="text-xl md:text-2xl font-light text-bwf-ivory/80 leading-relaxed max-w-3xl mx-auto italic">
              "Beyond programmes, institutions and achievements lies a simple belief: one human being can become a source of strength for another."
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6 md:px-12 lg:px-16 border-t border-bwf-ivory/10">
          <div className="max-w-3xl mx-auto space-y-24">
            
            {/* Intro */}
            <motion.div {...fadeUp(0)} className="prose prose-invert prose-lg max-w-none">
              <p className="text-[17px] font-light text-bwf-ivory/70 leading-[1.8]">
                I never came to Jammu & Kashmir with a plan to build an organisation. I came as an 18-year-old student from Maharashtra, trying to understand conflict, people and the pain that I had previously known only through books and newspapers. What I encountered changed the direction of my life.
              </p>
              <p className="text-[17px] font-light text-bwf-ivory/70 leading-[1.8] mt-6">
                Over the years, I understood that conflict is not only about violence. It enters relationships. It creates fear, suspicion and mistrust. It separates people not only through geographical boundaries, but through invisible borders of religion, region, identity, prejudice and sometimes our own ego. Somewhere in that understanding was born the thought of a Borderless World.
              </p>
              <p className="text-[17px] font-light text-bwf-ivory/70 leading-[1.8] mt-6">
                Not a world without geographical boundaries, but a world where we learn to go beyond the boundaries within ourselves. That remains at the heart of everything I do.
              </p>
            </motion.div>

            {/* Sections */}
            <EditorialSection 
              title="Love Before Service" 
              content={[
                "I have never believed that another human being should become a project.",
                "A girl who comes to our home is not a beneficiary. She is a daughter. A patient in a remote village is not a number in a report. There is a family waiting for that person to return home. A family affected by war, flood or earthquake does not only need relief material. Sometimes they need another human being to stand beside them and tell them through their presence: you are not alone.",
                "For me, service begins there. Before programmes, before budgets and before institutions, there has to be a human relationship. And that relationship has to begin with love."
              ]}
            />

            <EditorialSection 
              title="Trust Has to Be Lived" 
              content={[
                "When I began working in Kashmir, I was young, male, non-Kashmiri and non-Muslim, working with local Muslim girls during an intense period of armed conflict. Naturally, there were questions. There was suspicion about who I was, why I had come and what my intentions were. At times there were rumours and even threats.",
                "I could understand that fear. Communities had lived through years of conflict and mistrust. I realised that I could not ask people to trust me simply because I believed my intentions were good.",
                "Trust cannot be demanded. It has to be lived.",
                "So I stayed. I lived with people, ate with families, listened to them, involved communities in the work and tried to remain transparent. And, most importantly, I tried not to leave when circumstances became difficult.",
                "Slowly, questions became conversations. Conversations became relationships. Relationships became trust. And eventually, trust became responsibility."
              ]}
            />

            <EditorialSection 
              title="Every Girl Is a Daughter" 
              content={[
                "Basera-e-Tabassum began in Kupwara in 2002 with two girls. But the thought was never simply to provide shelter. I wanted every girl to grow with the feeling that somebody believes in her.",
                "Protection had to lead to education. Education had to open the door to higher education and skills. Opportunity had to lead to independence. And independence, one day, had to become responsibility towards another human being.",
                "Today, girls who once came to us vulnerable are doctors, nurses, teachers, engineers, lawyers, social workers, professionals, entrepreneurs and breadwinners.",
                "Many studied outside Kashmir and experienced a much larger world, but remained connected to their roots and communities.",
                "Many have returned to serve.",
                "Some are running our homes. Some are involved in healthcare programmes. Some work on social issues within their communities. Some are managers, directors, Board members and trustees.",
                "For me, this completes a circle:",
                "The hand that was once held becomes the hand that holds another."
              ]}
            />

            <EditorialSection 
              title="The Silent Messengers of Peace" 
              content={[
                "Over the years, another understanding became very deep within me.",
                "Every girl is not only an individual life being transformed.",
                "Many of these girls will become mothers.",
                "And a mother is often the first Guru of the next generation.",
                "Before a child meets a schoolteacher, society or the larger world, the child experiences life through the mother.",
                "What she carries within herself can quietly travel into another generation.",
                "If she carries fear, fear can travel.",
                "If she carries prejudice, prejudice can travel.",
                "But if she has experienced dignity, confidence, compassion and trust, these too can travel.",
                "That is why I see these women as silent messengers of peace.",
                "They may never attend a peace conference. They may never speak from a public platform. Nobody may ever call them peacebuilders.",
                "But in the way they raise their children, practise their professions, support their families and respond to another person's pain, they can quietly change the social fabric of their communities.",
                "Perhaps some of the deepest peacebuilding happens this way—without ever being called peacebuilding."
              ]}
            />

            <EditorialSection 
              title="Compassion Must Find a Form" 
              content={[
                "Love and compassion cannot remain only emotions. When another human being is suffering, compassion has to find a practical form.",
                "Sometimes that form was a home for a vulnerable girl.",
                "During the Kargil War, it became food and community kitchens for displaced families.",
                "After the earthquake, it became relief and rehabilitation.",
                "During the Kashmir floods, it became rescue, food, doctors, medicines and ambulances.",
                "When people in remote areas struggled to reach healthcare, it became Mobile Medical Units and critical-care ambulances.",
                "When communities living across Dal Lake could not be adequately reached by road, healthcare itself went onto the water through DALPARI.",
                "The form kept changing because people's needs kept changing.",
                "The purpose never changed.",
                "To remain available to another human being."
              ]}
            />

            <EditorialSection 
              title="Beyond Our Own Borders" 
              content={[
                "For me, the name Borderless World Foundation carries an inner meaning.",
                "The most difficult borders are not always those drawn on maps.",
                "There are borders between religions.",
                "Between communities.",
                "Between regions.",
                "Between rich and poor.",
                "Between “us” and “them.”",
                "And sometimes the strongest border is our own ego—the idea that my identity, my suffering, my belief or my existence is separate from another's.",
                "My understanding of Vasudhaiva Kutumbakam—the world is one family—comes from this.",
                "It is easy to speak these words.",
                "The real journey is to live them.",
                "When a Hindu from Maharashtra can be accepted by a Muslim family in Kashmir; when people belonging to different faiths and regions can come together for a vulnerable child; when doctors, volunteers, communities, civil society, government institutions, the Army, security forces and ordinary citizens can stand together during a human crisis—something larger than an organisation is being created.",
                "The border between “mine” and “yours” begins to become smaller."
              ]}
            />

            <EditorialSection 
              title="Service Is Not About Creating Dependence" 
              content={[
                "I do not want people to remain dependent upon Adhik or BWF.",
                "If after decades of work the community still waits for somebody from outside to solve every problem, then somewhere our work remains incomplete.",
                "I often tell our girls:",
                "“32 years ago, I came from Maharashtra to Kashmir to stand with you. But every time there will not be an Adhik coming from somewhere else. Tomorrow, you have to become that person for someone else.”",
                "And today, I can see that happening.",
                "Girls who once needed someone to believe in them are believing in others.",
                "Those who needed education are educating others.",
                "Those who received healthcare opportunities are serving patients.",
                "Those who needed guidance are becoming mentors.",
                "Those who once lived within an institution are helping lead that institution.",
                "That is the movement I want to see continue."
              ]}
            />

            <EditorialSection 
              title="His Role Is Also Changing" 
              content={[
                "There was a time when my responsibility was to start things, solve problems, mobilise people and remain physically present wherever I was needed.",
                "Today, my responsibility is slowly changing.",
                "I have to learn to trust others with the journey.",
                "To give responsibility.",
                "To create space for younger people to make decisions.",
                "To allow them to make mistakes and learn.",
                "And eventually, to know when to move away from the centre.",
                "I don't want to create another Adhik Kadam.",
                "Every person has their own journey, their own wisdom and their own way of serving.",
                "I simply want to help create the belief that each one of us has the capacity to become a source of light for another human being."
              ]}
            />

            <EditorialSection 
              title="The Heart of the Cause" 
              content={[
                "After all these years, if somebody asks me what is at the heart of this work, my answer is not Borderless World Foundation.",
                "It is not a building.",
                "It is not a programme.",
                "It is not an award.",
                "And it is certainly not Adhik Kadam.",
                "It is the relationship between one human being and another.",
                "It is the moment when somebody else's pain stops being “their problem” and begins to touch something within us.",
                "It is the courage to remain when leaving would be easier.",
                "It is believing in a girl until she begins believing in herself.",
                "It is serving without asking which religion, region or identity a person belongs to.",
                "It is understanding that compassion without action remains incomplete.",
                "And ultimately, it is learning that service is not about making ourselves important in another person's life.",
                "It is about helping them discover that they already carry strength within themselves."
              ]}
            />
            
            {/* Link to Legacy Emerges */}
            <div className="flex justify-center pt-16">
              <Link 
                to="/legacy"
                className="group flex items-center gap-4 text-bwf-ivory/60 hover:text-bwf-gold transition-colors duration-500 uppercase tracking-[0.2em] text-xs font-bold"
              >
                <span className="w-8 h-[1px] bg-bwf-ivory/20 group-hover:bg-bwf-gold transition-colors duration-500" />
                Explore Legacy Emerges
                <span className="w-8 h-[1px] bg-bwf-ivory/20 group-hover:bg-bwf-gold transition-colors duration-500" />
              </Link>
            </div>

          </div>
        </section>
      </main>
    </PageTransition>
  )
}

function EditorialSection({ title, content }: { title: string, content: string[] }) {
  return (
    <motion.div {...fadeUp(0)}>
      <h2 className="font-display text-3xl md:text-4xl text-bwf-gold mb-8 pb-4 border-b border-bwf-ivory/10 inline-block pr-12">
        {title}
      </h2>
      <div className="space-y-6">
        {content.map((paragraph, i) => (
          <p key={i} className="text-[16px] md:text-[17px] font-light text-bwf-ivory/70 leading-[1.8]">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  )
}
