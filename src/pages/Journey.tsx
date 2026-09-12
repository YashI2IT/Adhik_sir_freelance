import { useEffect } from 'react'
import { JourneyHeroSection } from '../sections/journey/JourneyHeroSection'
import { JourneyIntroSection } from '../sections/journey/JourneyIntroSection'
import { MainTimelineSection } from '../sections/journey/MainTimelineSection'
import { TransformationBridgeSection } from '../sections/journey/TransformationBridgeSection'
import { PrinciplesMappingSection } from '../sections/journey/PrinciplesMappingSection'
import { FrameworkSection } from '../sections/journey/FrameworkSection'
import { ClosingStatementSection } from '../sections/journey/ClosingStatementSection'
import { JourneyCTASection } from '../sections/journey/JourneyCTASection'
import { PageTransition } from '../components/PageTransition'

export default function Journey() {
  useEffect(() => {
    document.title = 'The Journey | Borderless World Foundation'
  }, [])

  return (
    <PageTransition>
      <main>
        <JourneyHeroSection />
        <JourneyIntroSection />
        <MainTimelineSection />
        <TransformationBridgeSection />
        <PrinciplesMappingSection />
        <FrameworkSection />
        <ClosingStatementSection />
        <JourneyCTASection />
      </main>
    </PageTransition>
  )
}
