const fs = require('fs');

const generate = (name, content) => {
  const code = `import { motion } from 'framer-motion'
import { fadeUp } from './shared'

export function ${name}() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
${content}
      </div>
    </section>
  )
}
`;
  fs.writeFileSync(`d:\\BWF Adhik Sir Website\\src\\sections\\courage-to-stay\\${name}.tsx`, code);
};

generate('HeroSection', `
        <motion.div {...fadeUp(0)} className="text-center">
          <h1 className="font-display text-5xl md:text-7xl text-[#051315] leading-tight mb-8">
            THE COURAGE TO STAY
          </h1>
          <p className="text-xl md:text-2xl font-light text-[#0D343A]/80 italic">
            Three Decades of Witnessing, Service & Belonging in Kashmir
          </p>
          <p className="mt-8 text-lg text-[#0D343A]/70 uppercase tracking-widest font-bold">
            Adhik Kadam
          </p>
          <p className="text-sm text-[#0D343A]/50 uppercase tracking-widest">
            Founder, Borderless World Foundation
          </p>
          <p className="mt-4 text-sm text-[#0D343A]/50 uppercase tracking-widest">
            1995 — 2026
          </p>
          <div className="mt-16 text-2xl font-display italic text-[#12636B]">
            CHANGE BEGINS WITH ME.
          </div>
        </motion.div>
        <motion.div {...fadeUp(0.1)} className="mt-20 w-full aspect-video bg-[#051315] overflow-hidden">
          <img src="/images/IMG_8648.jpg" alt="Kashmir Landscape" className="w-full h-full object-cover mix-blend-overlay" />
        </motion.div>
`);

// Now generating the rest in a similar pattern
const sections = {
  Timeline1995Section: `        <motion.div {...fadeUp(0)} className="border-l border-[#12636B]/30 pl-8 pb-16 relative">
          <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-[#12636B]" />
          <h2 className="font-display text-4xl text-[#051315] mb-2">1995</h2>
          <h3 className="font-display text-3xl italic text-[#12636B] mb-12">I CAME WITH QUESTIONS.</h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
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
            <p>It had faces.</p>
            <p>It had families.</p>
            <p>It had memories.</p>
            <p>It had children.</p>
            <p className="font-display text-2xl italic text-[#051315] py-8">
              One question began following me:
              <br/><br/>
              What happens to ordinary human beings when history, politics and conflict enter their homes?
            </p>
          </div>
        </motion.div>`,

  Timeline1997Section: `        <motion.div {...fadeUp(0)} className="border-l border-[#12636B]/30 pl-8 pb-16 relative">
          <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-[#12636B]" />
          <h2 className="font-display text-4xl text-[#051315] mb-2">1997</h2>
          <h3 className="font-display text-3xl italic text-[#12636B] mb-12">I CROSSED INTO THE VALLEY.</h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>I entered Kashmir.</p>
            <p>I wanted to understand.</p>
            <p>But understanding Kashmir from a distance and living among its people were two very different things.</p>
            <p>Gradually, Kashmir began teaching me something that no university could have taught me.</p>
            <p className="mt-8 font-bold">Listen before speaking.</p>
            <p className="font-bold">Enter people's lives before trying to enter their problems.</p>
            <p className="font-bold">Never demand trust.</p>
            <p className="font-bold">Earn it.</p>
            <p className="font-bold">And earning trust takes time.</p>
          </div>
        </motion.div>`,

  Timeline1999Section: `        <motion.div {...fadeUp(0)} className="border-l border-[#12636B]/30 pl-8 pb-16 relative">
          <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-[#12636B]" />
          <h2 className="font-display text-4xl text-[#051315] mb-2">1999</h2>
          <h3 className="font-display text-3xl italic text-[#12636B] mb-12">THEN I WITNESSED WAR.</h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>The Kargil conflict displaced families and disrupted ordinary life.</p>
            <p>I worked among affected communities around Gagangir and Sonamarg.</p>
            <p>Community kitchens were organised.</p>
            <p>Children needed spaces to continue learning.</p>
            <p>Families needed support.</p>
            <p>Sometimes they simply needed someone willing to remain beside them.</p>
            <p>Something was changing inside me.</p>
            <p>I had come to Kashmir to understand conflict.</p>
            <p>But increasingly, I was encountering the human consequences of conflict.</p>
            <p>Once suffering enters your consciousness, remaining only a spectator becomes difficult.</p>
          </div>

          <h3 className="font-display text-3xl italic text-[#051315] mt-16 mb-8">
            FROM RELIEF<br/>TO UNDERSTANDING.
          </h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>By then, I had witnessed displacement.</p>
            <p>I had seen border communities living with uncertainty.</p>
            <p>I had worked during war.</p>
            <p>But much of what I was doing was still responding to what was immediately visible.</p>
            <p>Then came an experience that changed the direction of my life.</p>
          </div>

          <h3 className="font-display text-2xl text-[#12636B] uppercase tracking-widest font-bold mt-16 mb-8">
            CHILDREN AFFECTED BY ARMED CONFLICT
          </h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>I had the opportunity to work on a study on “Children Affected by Armed Conflict”, associated with UNICEF, alongside Padma Shri Balraj Puri, founder of the Institute of Jammu and Kashmir Affairs.</p>
            <p>The work took me deeper into the consequences of conflict on children and families.</p>
            <p>We travelled.</p>
            <p>We met families.</p>
            <p>We listened.</p>
            <p>We gathered information.</p>
            <p>And behind the vocabulary of militancy, security, politics and conflict, another reality emerged.</p>
            <p className="font-bold text-[#051315]">CHILDREN.</p>
            <p>Children who had lost fathers.</p>
            <p>Children who had lost mothers.</p>
            <p>Children growing up with widowed mothers.</p>
            <p>Children whose education had been interrupted.</p>
            <p>Children living in economically fragile households.</p>
            <p>Children growing up surrounded by uncertainty.</p>
          </div>
        </motion.div>`,

  KupwaraDardporaSection: `        <motion.div {...fadeUp(0)} className="py-16">
          <h3 className="font-display text-4xl text-[#051315] mb-8">THEN I REACHED KUPWARA.</h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>The findings confronted me with a scale of vulnerability I had never imagined.</p>
            <p>Our field study indicated that Kupwara district alone had more than 24,000 orphaned children.</p>
            <p>And then there was one village that remained deeply etched in my mind.</p>
            <p className="font-display text-4xl italic text-[#12636B] py-6">DARDPORA.</p>
            <p>Our study recorded more than 1,000 orphaned children there.</p>
          </div>

          <div className="my-16">
             <div className="w-full h-[400px] overflow-hidden">
                <img src="/images/IMG_1888.jpg" alt="Research field notes" className="w-full h-full object-cover" />
             </div>
          </div>

          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>These were not merely numbers in a survey.</p>
            <p>Every number represented a childhood.</p>
            <p>A family.</p>
            <p>A story.</p>
            <p>A future.</p>
            <p className="font-display text-2xl mt-8">And suddenly the question was no longer:</p>
            <p className="italic">How many?</p>
            <p className="font-display text-2xl mt-8">It became:</p>
            <p className="font-display text-3xl text-[#12636B]">WHAT HAPPENS TO THEM NEXT?</p>
          </div>

          <h3 className="font-display text-3xl italic text-[#051315] mt-16 mb-8">THE STUDY CHANGED MY QUESTION.</h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>Until then I had been asking:</p>
            <p className="italic">What can I do during a crisis?</p>
            <p>The research forced me to ask something much harder.</p>
            <p className="font-bold">What happens to a child after the crisis becomes old news?</p>
            <p>Who remains when emergency relief ends?</p>
            <p>Who protects her education?</p>
            <p>Who supports a widowed mother?</p>
            <p>Who prevents vulnerability from becoming exploitation?</p>
            <p>Who remains until that child becomes capable of standing independently?</p>
          </div>

          <h3 className="font-display text-3xl text-[#051315] mt-16 mb-8">ONE REALITY TROUBLED ME MOST.<br/>THE VULNERABILITY OF GIRLS.</h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>In fragile families affected by conflict, girls could face multiple layers of vulnerability.</p>
            <p>Loss of parental protection.</p>
            <p>Interrupted education.</p>
            <p>Economic insecurity.</p>
            <p>Social pressure.</p>
            <p>Limited opportunities.</p>
            <p>And uncertainty about their own future.</p>
            <p className="mt-8 font-bold">Temporary relief would never be enough.</p>
            <p>These girls needed something different.</p>
            <p>Long-term accompaniment.</p>
            <p>A safe home.</p>
            <p>Education.</p>
            <p>Healthcare.</p>
            <p>Protection.</p>
            <p>Skills.</p>
            <p>Confidence.</p>
            <p>Opportunity.</p>
            <p className="mt-8 font-bold text-[#12636B] uppercase">And eventually—<br/>INDEPENDENCE.</p>
          </div>

          <h3 className="font-display text-3xl italic text-[#051315] mt-16 mb-8">KNOWLEDGE CREATED RESPONSIBILITY.</h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>The study had begun as an attempt to understand the consequences of armed conflict on children.</p>
            <p>For me, it became something much more personal.</p>
            <p>I could no longer look at these children merely as subjects of research.</p>
            <p>Once you know, you have a choice.</p>
            <p>You can document the suffering.</p>
            <p>You can discuss it.</p>
            <p>You can move on.</p>
            <p className="font-display text-4xl text-[#12636B] mt-12">Or—<br/>YOU CAN STAY.</p>
          </div>
        </motion.div>`,

  BaseraSection: `        <motion.div {...fadeUp(0)} className="border-l border-[#12636B]/30 pl-8 pb-16 relative">
          <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-[#12636B]" />
          <h2 className="font-display text-4xl text-[#051315] mb-2">2002</h2>
          <h3 className="font-display text-3xl italic text-[#12636B] mb-12">TWO GIRLS.<br/>ONE BEGINNING.</h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>In Kupwara, a small beginning was taking shape.</p>
            <p>There was no grand institution.</p>
            <p>No large building.</p>
            <p>No major donor.</p>
            <p>No blueprint for what it would eventually become.</p>
            <p>There were girls who needed security, education, affection and the possibility of a future.</p>
            <p>And there was a decision.</p>
            <p className="font-display text-3xl font-bold text-[#12636B]">STAY.</p>
            <p>Basera-e-Tabassum—</p>
            <p className="italic">“The Abode of Smiles”</p>
            <p>—began as a home for vulnerable girls.</p>
            <p>What began with a few children gradually became a lifelong responsibility.</p>
          </div>

          <h3 className="font-display text-3xl text-[#051315] mt-16 mb-8">NOT AN ORPHANAGE.<br/>A HOME.</h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>A child does not only need food and shelter.</p>
            <p>She needs belonging.</p>
            <p>She needs education.</p>
            <p>She needs confidence.</p>
            <p>She needs someone who believes in her.</p>
            <p>And eventually, she needs the freedom to build a life of her own.</p>
            <p>Our responsibility could not simply end when a girl turned eighteen.</p>
            <p>It had to continue until dependency became independence.</p>
          </div>

          <h3 className="font-display text-3xl italic text-[#051315] mt-16 mb-8">OUR JOURNEY FOUND THREE WORDS.</h3>
          <div className="space-y-8 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <div>
              <p className="font-bold text-[#12636B]">RESCUE.</p>
              <p>When a human life faces immediate crisis or vulnerability.</p>
            </div>
            <div>
              <p className="font-bold text-[#12636B]">REBUILD.</p>
              <p>Through shelter, education, healthcare, skills and opportunity.</p>
            </div>
            <div>
              <p className="font-bold text-[#12636B]">REVIVE.</p>
              <p>Until dignity, confidence and independence return.</p>
            </div>
            <p className="font-display text-2xl text-[#12636B] pt-8 border-t border-[#12636B]/20">RESCUE → REBUILD → REVIVE</p>
          </div>
        </motion.div>`,

  Earthquake2005Section: `        <motion.div {...fadeUp(0)} className="border-l border-[#12636B]/30 pl-8 pb-16 relative">
          <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-[#12636B]" />
          <h2 className="font-display text-4xl text-[#051315] mb-2">2005</h2>
          <h3 className="font-display text-3xl italic text-[#12636B] mb-12">WHEN THE EARTH SHOOK.</h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>The Kashmir earthquake brought another humanitarian emergency.</p>
            <p>Homes collapsed.</p>
            <p>Communities were displaced.</p>
            <p>Families were suddenly exposed to enormous uncertainty.</p>
            <p>Relief was necessary.</p>
            <p>But by then we had understood something important.</p>
            <p>Emergency response becomes stronger when relationships already exist before the emergency.</p>
            <p>We were not arriving in Kashmir.</p>
            <p className="font-display text-3xl text-[#12636B] mt-8">WE WERE ALREADY THERE.</p>
          </div>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80 mt-16 pt-16 border-t border-[#0D343A]/10">
            <p>YEARS PASSED.</p>
            <p>Homes grew.</p>
            <p>Girls went to school.</p>
            <p>Relationships deepened.</p>
            <p>Communities began trusting us.</p>
            <p>What had started as a small response was slowly becoming an institution.</p>
            <p>But then came another test.</p>
            <p>This time, the crisis was not natural.</p>
          </div>
        </motion.div>`,

  Storm2012Section: `        <motion.div {...fadeUp(0)} className="border-l border-[#12636B]/30 pl-8 pb-16 relative">
          <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-[#12636B]" />
          <h2 className="font-display text-4xl text-[#051315] mb-2">2012</h2>
          <h3 className="font-display text-3xl italic text-[#12636B] mb-12">A DIFFERENT KIND OF STORM.</h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>Following public recognition of my work in Maharashtra, Marathi newspaper articles about me and our work began circulating in Kashmir.</p>
            <p>But they were being used in an entirely different context.</p>
            <p>In places where very few people could read Marathi, these articles were presented alongside serious allegations and narratives questioning my intentions and the work being done with vulnerable girls.</p>
            <p>Statements circulated.</p>
            <p>Complaints followed.</p>
            <p>Rumours travelled.</p>
            <p>Suspicion was created.</p>
            <p>In an already volatile environment, misinformation was not simply uncomfortable.</p>
            <p className="font-bold">IT COULD BECOME DANGEROUS.</p>
          </div>

          <h3 className="font-display text-3xl text-[#051315] mt-16 mb-8">THE EASIEST DECISION<br/>WAS TO LEAVE.</h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>I was from Maharashtra.</p>
            <p>I could have returned home.</p>
            <p>I could have said:</p>
            <p className="italic">“I tried.”</p>
            <p>But there was another question.</p>
            <p>What would leaving tell the girls who had trusted us?</p>
            <p>What would it tell the families who had placed their daughters in our care?</p>
            <p>What would happen to years of relationships built quietly within these communities?</p>
            <p>Someone else's narrative could not become the reason I abandoned the people who had trusted me.</p>
            <p className="font-display text-4xl text-[#12636B] pt-8">SO I STAYED.</p>
            <p>Not to fight anyone.</p>
            <p>Not to win an argument.</p>
            <p>Not to prove that I was right.</p>
            <p>Simply to continue the work.</p>
          </div>

          <h3 className="font-display text-3xl italic text-[#051315] mt-16 mb-8">TRUST WAS OUR REAL INFRASTRUCTURE.</h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>Buildings can be constructed with money.</p>
            <p>Vehicles can be purchased.</p>
            <p>Projects can be funded.</p>
            <p>But trust cannot be bought.</p>
            <p>It took years.</p>
            <p>Living together.</p>
            <p>Eating together.</p>
            <p>Celebrating together.</p>
            <p>Grieving together.</p>
            <p>Making mistakes.</p>
            <p>Learning.</p>
            <p>Returning.</p>
            <p>And staying.</p>
            <p className="font-display text-2xl text-[#12636B] pt-8">PRESENCE BECAME OUR STRONGEST INSTITUTION.</p>
          </div>
        </motion.div>`,

  Flood2014Section: `        <motion.div {...fadeUp(0)} className="border-l border-[#12636B]/30 pl-8 pb-16 relative">
          <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-[#12636B]" />
          <h2 className="font-display text-4xl text-[#051315] mb-2">2014</h2>
          <h3 className="font-display text-3xl italic text-[#12636B] mb-12">THEN KASHMIR WENT UNDER WATER.</h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>The floods devastated large parts of the Valley.</p>
            <p>I experienced the disaster personally.</p>
            <p>After reaching safety, the work began again.</p>
            <p>Community kitchens.</p>
            <p>Relief.</p>
            <p>Coordination.</p>
            <p>Support.</p>
            <p>Once again, crisis reinforced something we had already learned.</p>
            <p className="font-bold">When people know you will remain after the crisis, relief becomes relationship.</p>
          </div>
        </motion.div>`,

  MedicalResponse2016Section: `        <motion.div {...fadeUp(0)} className="border-l border-[#12636B]/30 pl-8 pb-16 relative">
          <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-[#12636B]" />
          <h2 className="font-display text-4xl text-[#051315] mb-2">2016</h2>
          <h3 className="font-display text-3xl italic text-[#12636B] mb-12">A GENERATION WAS HURTING.</h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>During the unrest of 2016, many young people suffered serious eye injuries.</p>
            <p>There were political arguments everywhere.</p>
            <p>But beyond every argument stood a profoundly human question.</p>
            <p className="font-display text-3xl text-[#051315] py-8">WHAT HAPPENS TO A YOUNG PERSON<br/>IF DARKNESS BECOMES PERMANENT?</p>
            <p>A teenager may have sixty or seventy years of life ahead.</p>
            <p>Education.</p>
            <p>Livelihood.</p>
            <p>Relationships.</p>
            <p>Family.</p>
            <p>Dreams.</p>
            <p>Could we simply watch?</p>
          </div>

          <h3 className="font-display text-3xl text-[#051315] mt-16 mb-8">A WOUNDED EYE<br/>DOES NOT HAVE AN IDEOLOGY.</h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>We began reaching out.</p>
            <p>Doctors.</p>
            <p>Ophthalmologists.</p>
            <p>Eye surgeons.</p>
            <p>Hospitals.</p>
            <p>Friends.</p>
            <p>Volunteers.</p>
            <p>Networks across India.</p>
            <p>The purpose was simple:</p>
            <p className="font-bold">Find the best possible medical help wherever it existed.</p>
            <p>Specialists were mobilised.</p>
            <p>Difficult cases needed specialised intervention.</p>
            <p>Patients were connected with medical expertise outside Kashmir.</p>
            <p>Among them was Insha Malik, who had suffered devastating injuries to both eyes.</p>
            <p>She was taken to Aditya Jyot Eye Hospital in Mumbai in the hope that advanced medical intervention could help.</p>
            <p>Not every battle against injury can be won.</p>
            <p>But every human being deserves our best effort.</p>
          </div>

          <h3 className="font-display text-3xl italic text-[#051315] mt-16 mb-8">HUMANITY CANNOT ASK<br/>WHICH SIDE AN INJURED PERSON BELONGS TO.</h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>Pain has no religion.</p>
            <p>A wounded child has no ideology.</p>
            <p>Compassion cannot wait for political agreement.</p>
            <p className="font-display text-2xl text-[#12636B] pt-6">HUMANITY MUST ARRIVE FIRST.</p>
            
            <p className="pt-12 font-bold uppercase tracking-widest text-[#12636B]">AND THE JOURNEY KEPT EXPANDING.</p>
            <p>The girls taught us about education.</p>
            <p>Remote villages taught us about healthcare.</p>
            <p>Emergencies taught us about preparedness.</p>
            <p>Mountains taught us about access.</p>
            <p>Conflict taught us about patience.</p>
            <p>And every limitation forced us to find another way.</p>
          </div>
        </motion.div>`,

  EcosystemSection: `        <motion.div {...fadeUp(0)} className="py-16">
          <h3 className="font-display text-4xl text-[#051315] mb-8">FROM A HOME<br/>TO AN ECOSYSTEM OF CARE.</h3>
          
          <div className="grid grid-cols-2 gap-4 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>Residential care.</p>
            <p>Education.</p>
            <p>Higher education.</p>
            <p>Healthcare.</p>
            <p>Skills.</p>
            <p>Livelihoods.</p>
            <p>Mobile Medical Units.</p>
            <p>Ambulances.</p>
            <p>Emergency response.</p>
            <p>Remote healthcare.</p>
            <p className="col-span-2">Community development.</p>
          </div>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80 mt-12">
            <p>What began as a response to vulnerable girls gradually evolved into an ecosystem built around one principle:</p>
            <p className="font-display text-3xl font-bold text-[#12636B] py-4">HUMAN DIGNITY.</p>
          </div>

          <h3 className="font-display text-3xl italic text-[#051315] mt-16 mb-8">HEALTHCARE HAD TO TRAVEL.</h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>We encountered another simple reality.</p>
            <p>Many people living in remote areas were not reaching hospitals.</p>
            <p>So we changed the question.</p>
            <p>Instead of asking:</p>
            <p className="italic">Why aren't patients reaching healthcare?</p>
            <p>We asked:</p>
            <p className="font-bold">WHY CAN'T HEALTHCARE REACH THEM?</p>
            <p>Mobile Medical Units began travelling into underserved communities.</p>
            <p>Ambulances reached difficult terrain.</p>
            <p>Healthcare moved towards people.</p>
            <p>And on Dal Lake, even the water became a road.</p>
            <p className="font-display text-2xl text-[#12636B] pt-6">DAL PARI<br/><span className="text-xl font-light">Healthcare on Water.</span></p>
          </div>
        </motion.div>`,

  ImpactSection: `        <motion.div {...fadeUp(0)} className="py-16 border-y border-[#0D343A]/10 my-16">
          <h3 className="font-display text-4xl text-[#051315] mb-8 text-center">THE NUMBERS GREW.</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center my-16">
            {/* Impact numbers remain unverified placeholders as requested */}
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
                <span className="font-display text-4xl text-[#B59A63] mb-2">{item.value}</span>
                <span className="text-sm uppercase tracking-widest text-[#0D343A]/60">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80 text-center">
            <p>But numbers are not the deepest measure of change.</p>
            <p>There is another measure.</p>
          </div>
        </motion.div>`,

  AlumnaeSection: `        <motion.div {...fadeUp(0)} className="py-16">
          <h3 className="font-display text-3xl md:text-4xl text-[#051315] mb-8">
            WHEN THE PERSON<br/>YOU ONCE SERVED<br/>STANDS BESIDE YOU AS A LEADER.
          </h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>Girls who entered our homes as vulnerable children grew up.</p>
            <p>They studied.</p>
            <p>They graduated.</p>
            <p>They became doctors.</p>
            <p>Nurses.</p>
            <p>Teachers.</p>
            <p>Lawyers.</p>
            <p>Government employees.</p>
            <p>Professionals.</p>
            <p>Entrepreneurs.</p>
            <p>Breadwinners.</p>
            <p>Mothers.</p>
            <p>Community leaders.</p>
            <p>And some returned.</p>
            <p>Not as beneficiaries.</p>
            <p className="font-bold text-[#12636B] pt-4">AS COLLEAGUES.<br/>AS PROFESSIONALS.<br/>AS LEADERS.</p>
          </div>

          <h3 className="font-display text-3xl italic text-[#051315] mt-16 mb-8">THE CIRCLE OF CHANGE.</h3>
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>If someone permanently remains a beneficiary, something in the development process remains unfinished.</p>
            <p>Real transformation begins when—</p>
            <p>The beneficiary becomes a stakeholder.</p>
            <p>The stakeholder becomes a leader.</p>
            <p>And the leader begins creating opportunities for somebody else.</p>
            <p>Today, many of the people carrying this work forward understand vulnerability not because they studied it—</p>
            <p className="font-display text-2xl text-[#12636B] pt-6">BUT BECAUSE THEY LIVED IT.</p>
          </div>
        </motion.div>`,

  FiveWordsSection: `        <motion.div {...fadeUp(0)} className="py-24 px-8 bg-[#051315] text-[#F7F6F1] rounded-2xl mx-auto my-16">
          <h3 className="font-display text-3xl md:text-4xl text-[#B59A63] mb-12 text-center">
            I BEGAN THIS JOURNEY<br/>TRYING TO UNDERSTAND KASHMIR.
          </h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-white/80 text-center max-w-2xl mx-auto">
            <p>Three decades later, Kashmir has taught me more than I could ever have imagined.</p>
            <p>It taught me that service begins with listening.</p>
            <p>That trust takes years.</p>
            <p>That institutions are not buildings.</p>
            <p>That compassion needs courage.</p>
            <p>That sometimes the most important thing you can do is simply refuse to leave.</p>
          </div>

          <div className="text-center mt-20 mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-white/40 mb-4">THREE DECADES.</p>
            <h3 className="font-display text-5xl text-[#B59A63] italic">FIVE WORDS.</h3>
          </div>

          <div className="space-y-12 max-w-xl mx-auto">
            <div className="text-center">
              <h4 className="font-display text-3xl text-white mb-2 tracking-widest">LISTEN.</h4>
              <p className="text-white/60 text-lg">Before deciding what people need.</p>
            </div>
            <div className="text-center">
              <h4 className="font-display text-3xl text-white mb-2 tracking-widest">STAY.</h4>
              <p className="text-white/60 text-lg">Long enough to understand what the problem really is.</p>
            </div>
            <div className="text-center">
              <h4 className="font-display text-3xl text-white mb-2 tracking-widest">TRUST.</h4>
              <p className="text-white/60 text-lg">People with their own transformation.</p>
            </div>
            <div className="text-center">
              <h4 className="font-display text-3xl text-white mb-2 tracking-widest">SERVE.</h4>
              <p className="text-white/60 text-lg">Without making yourself the centre of their story.</p>
            </div>
            <div className="text-center">
              <h4 className="font-display text-3xl text-white mb-2 tracking-widest">BELONG.</h4>
              <p className="text-white/60 text-lg">Until there is no longer an "us" and "them."</p>
            </div>
          </div>
        </motion.div>`,

  ReflectionSection: `        <motion.div {...fadeUp(0)} className="py-16">
          <h3 className="font-display text-3xl italic text-[#051315] mb-8">
            PERHAPS I WAS ASKING<br/>THE WRONG QUESTION.
          </h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>For years people have asked me:</p>
            <p className="italic">“What have you done for Kashmir?”</p>
            <p>After three decades, I find myself asking something very different.</p>
            <p className="font-display text-3xl text-[#12636B] py-6">WHAT HAS KASHMIR<br/>DONE TO ME?</p>
            <p>It gave direction to an eighteen-year-old searching for meaning.</p>
            <p>It taught me patience.</p>
            <p>It tested my convictions.</p>
            <p>It broke many of my assumptions.</p>
            <p>It introduced me to suffering.</p>
            <p>But it also introduced me to extraordinary courage.</p>
            <p>Friendship.</p>
            <p>Generosity.</p>
            <p>Faith.</p>
            <p>Love.</p>
            <p>And belonging.</p>
            <p className="pt-8">Somewhere during this journey—</p>
            <p className="font-display text-4xl text-[#051315] py-4">KASHMIR STOPPED BEING<br/>THE PLACE WHERE I WORKED.</p>
            <p className="font-display text-4xl text-[#12636B] italic">IT BECAME A PLACE<br/>WHERE I BELONGED.</p>
          </div>
        </motion.div>`,

  ServiceToWitnessingSection: `        <motion.div {...fadeUp(0)} className="py-16 border-t border-[#0D343A]/10 mt-16">
          <h3 className="font-display text-4xl text-[#051315] mb-8">
            FROM SERVICE<br/>TO WITNESSING.
          </h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>When I was young, I thought service meant helping another person.</p>
            <p>Later, I thought it meant solving problems.</p>
            <p>Then I understood that sustainable change means creating systems through which people rebuild their own lives.</p>
            <p>Today, I understand service somewhat differently.</p>
            <p>Service is also about witnessing.</p>
            <p>Being present.</p>
            <p>Walking beside another human being without always believing you have the answer.</p>
            <p>And allowing that encounter—</p>
            <p className="font-display text-2xl text-[#12636B] pt-4">TO TRANSFORM YOU TOO.</p>
          </div>
        </motion.div>`,

  FutureSection: `        <motion.div {...fadeUp(0)} className="py-16">
          <h3 className="font-display text-4xl text-[#051315] mb-8">
            THE FUTURE IS NOT ABOUT<br/>MAKING BWF BIGGER.
          </h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80">
            <p>The deeper questions are different.</p>
            <p>Can we build institutions that eventually need less of their founders?</p>
            <p>Can children once considered vulnerable become tomorrow's institution-builders?</p>
            <p>Can communities become owners of their own solutions?</p>
            <p>Can compassion become infrastructure?</p>
            <p>Can service create leadership rather than dependency?</p>
            <p>Can today's beneficiary become tomorrow's changemaker?</p>
            <p className="font-display text-3xl italic text-[#12636B] pt-8">THAT IS THE FUTURE<br/>WE ARE TRYING TO BUILD.</p>
          </div>
        </motion.div>`,

  ClosingSection: `        <motion.div {...fadeUp(0)} className="py-32 text-center relative border-t border-[#0D343A]/10 mt-16">
          <h3 className="font-display text-4xl md:text-5xl text-[#051315] mb-8">
            CHANGE DOES NOT ALWAYS<br/>BEGIN WITH POWER.
          </h3>
          
          <div className="space-y-6 text-[18px] leading-[1.9] text-[#0D343A]/80 max-w-2xl mx-auto">
            <p>Sometimes it begins with an eighteen-year-old asking a question.</p>
            <p>With a journey into an unfamiliar land.</p>
            <p>With a survey that changes the person conducting it.</p>
            <p>With two girls needing a home.</p>
            <p>With someone opening a community kitchen.</p>
            <p>With a doctor answering a telephone call.</p>
            <p>With a young woman refusing to allow her circumstances to define her future.</p>
            <p>Or simply—</p>
            <p>with somebody deciding to stay when leaving would have been easier.</p>
            
            <p className="font-display text-4xl text-[#12636B] italic py-16">CHANGE BEGINS WITH ME.</p>
            
            <p>Not because one person can change the world.</p>
            <p>But because every meaningful change needs someone willing to begin.</p>
            <p>And perhaps the greatest responsibility of a changemaker is not to become the face of change.</p>
            <p>It is to create conditions in which others discover—</p>
            <p className="font-display text-3xl text-[#051315] py-8">THAT THEY CAN BECOME<br/>CHANGEMAKERS TOO.</p>
          </div>

          <div className="mt-32 border-t border-[#0D343A]/10 pt-16 inline-block">
            <p className="font-bold tracking-widest uppercase text-[#0D343A]">ADHIK KADAM</p>
            <p className="text-sm tracking-widest text-[#0D343A]/60 mt-2">Founder & Chairman Borderless World Foundation</p>
            <p className="text-sm tracking-widest text-[#0D343A]/60 mt-1 italic">Joining Hands. Building Bridges.</p>
            <p className="text-sm tracking-widest text-[#12636B] mt-8 font-bold">1995 — 2026</p>
            <p className="font-display text-2xl text-[#12636B] mt-6 italic">THE JOURNEY CONTINUES.</p>
          </div>
        </motion.div>`
};

Object.entries(sections).forEach(([name, content]) => {
  generate(name, content);
});

console.log("Sections generated");
