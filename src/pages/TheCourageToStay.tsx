import { useSEO } from '../hooks/useSEO'
import { PageTransition } from '../components/PageTransition'
import { HeroSection } from '../sections/courage-to-stay/HeroSection'
import { Timeline1995Section } from '../sections/courage-to-stay/Timeline1995Section'
import { Timeline1997Section } from '../sections/courage-to-stay/Timeline1997Section'
import { Timeline1999Section } from '../sections/courage-to-stay/Timeline1999Section'
import { KupwaraDardporaSection } from '../sections/courage-to-stay/KupwaraDardporaSection'
import { BaseraSection } from '../sections/courage-to-stay/BaseraSection'
import { Earthquake2005Section } from '../sections/courage-to-stay/Earthquake2005Section'
import { Storm2012Section } from '../sections/courage-to-stay/Storm2012Section'
import { Flood2014Section } from '../sections/courage-to-stay/Flood2014Section'
import { MedicalResponse2016Section } from '../sections/courage-to-stay/MedicalResponse2016Section'
import { EcosystemSection } from '../sections/courage-to-stay/EcosystemSection'
import { ImpactSection } from '../sections/courage-to-stay/ImpactSection'
import { AlumnaeSection } from '../sections/courage-to-stay/AlumnaeSection'
import { FiveWordsSection } from '../sections/courage-to-stay/FiveWordsSection'
import { ReflectionSection } from '../sections/courage-to-stay/ReflectionSection'
import { ServiceToWitnessingSection } from '../sections/courage-to-stay/ServiceToWitnessingSection'
import { FutureSection } from '../sections/courage-to-stay/FutureSection'
import { ClosingSection } from '../sections/courage-to-stay/ClosingSection'

export default function TheCourageToStay() {
  useSEO({
    title: 'The Courage to Stay | Adhik Kadam',
    description: 'Three Decades of Witnessing, Service & Belonging in Kashmir, from 1995 to 2026.',
    canonicalPath: '/the-courage-to-stay',
  })

  return (
    <PageTransition>
      <main className="bg-[#F7F6F1] text-[#0D343A] min-h-screen font-light">
        <HeroSection />
        <Timeline1995Section />
        <Timeline1997Section />
        <Timeline1999Section />
        <KupwaraDardporaSection />
        <BaseraSection />
        <Earthquake2005Section />
        <Storm2012Section />
        <Flood2014Section />
        <MedicalResponse2016Section />
        <EcosystemSection />
        <ImpactSection />
        <AlumnaeSection />
        <FiveWordsSection />
        <ReflectionSection />
        <ServiceToWitnessingSection />
        <FutureSection />
        <ClosingSection />
      </main>
    </PageTransition>
  )
}
