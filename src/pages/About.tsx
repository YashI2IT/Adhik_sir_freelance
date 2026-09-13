import { AboutPageContent } from '../sections/about/AboutPageContent'
import { PageTransition } from '../components/PageTransition'
import { useSEO } from '../hooks/useSEO'

export default function About() {
  useSEO({
    title: 'About Adhik Kadam | Borderless World Foundation',
    description: 'Learn about Adhik Kadam’s journey as a social entrepreneur and humanitarian, and the evolution of the Borderless World Foundation.',
    canonicalPath: '/about',
  })

  return (
    <PageTransition>
      <main>
        <AboutPageContent />
      </main>
    </PageTransition>
  )
}
