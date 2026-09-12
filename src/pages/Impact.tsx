import { useEffect } from 'react'
import { ImpactPageContent } from '../sections/impact/ImpactPageContent'
import { PageTransition } from '../components/PageTransition'

export default function Impact() {
  useEffect(() => {
    document.title = 'Impact | Borderless World Foundation'
  }, [])

  return (
    <PageTransition>
      <main>
        <ImpactPageContent />
      </main>
    </PageTransition>
  )
}
