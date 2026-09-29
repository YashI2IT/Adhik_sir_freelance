import { motion } from 'framer-motion'
import { fadeUp } from './shared'

export function Timeline1995Section() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div {...fadeUp(0)} className="border-l border-[#12636B]/30 pl-8 pb-16 relative">
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
        </motion.div>
      </div>
    </section>
  )
}
