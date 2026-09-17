import { ImpactPageContent } from '../sections/impact/ImpactPageContent'
import { PageTransition } from '../components/PageTransition'
import { useSEO } from '../hooks/useSEO'

export default function Impact() {
  useSEO({
    title: 'His Impact | Adhik Kadam',
    description: 'Discover the quantifiable and generational impact of Adhik Kadam’s three decades of humanitarian work in conflict zones.',
    canonicalPath: '/impact',
  })

  return (
    <PageTransition>
      <main>
        <ImpactPageContent />
      </main>
    </PageTransition>
  )
}
