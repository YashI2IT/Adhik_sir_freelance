import { HomePageContent } from '../sections/home/HomePageContent'
import { PageTransition } from '../components/PageTransition'
import { useSEO } from '../hooks/useSEO'

export default function Home() {
  useSEO({
    title: 'Adhik Kadam | Philanthropist & Social Impact Leader',
    description: 'Official website of Adhik Kadam, philanthropist and social-impact leader. Explore his journey, humanitarian work, impact, recognition, reflections and media.',
    canonicalPath: '/',
  })

  return (
    <PageTransition>
      <main>
        <HomePageContent />
      </main>
    </PageTransition>
  )
}
