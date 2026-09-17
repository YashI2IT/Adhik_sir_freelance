import { WorkPageContent } from '../sections/work/WorkPageContent'
import { PageTransition } from '../components/PageTransition'
import { useSEO } from '../hooks/useSEO'

export default function Work() {
  useSEO({
    title: 'His Work | Adhik Kadam',
    description: 'Explore Adhik Kadam’s work across healthcare, girls residential care, education, emergency response, and women empowerment.',
    canonicalPath: '/work',
  })

  return (
    <PageTransition>
      <main>
        <WorkPageContent />
      </main>
    </PageTransition>
  )
}
