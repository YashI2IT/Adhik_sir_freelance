import { motion } from 'framer-motion'
import { fadeUp } from './shared'

export function MedicalResponse2016Section() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div {...fadeUp(0)} className="border-l border-[#12636B]/30 pl-8 pb-16 relative">
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
        </motion.div>
      </div>
    </section>
  )
}
