import { useEffect } from 'react'
import { WorkPageContent } from '../sections/work/WorkPageContent'
import { PageTransition } from '../components/PageTransition'

export default function Work() {
  useEffect(() => {
    document.title = 'His Work | Borderless World Foundation'
  }, [])

  return (
    <PageTransition>
      <main>
        <WorkPageContent />
      </main>
    </PageTransition>
  )
}
