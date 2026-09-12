import { useEffect } from 'react'
import { HomePageContent } from '../sections/home/HomePageContent'
import { PageTransition } from '../components/PageTransition'

export default function Home() {
  useEffect(() => {
    document.title = 'Adhik Kadam | Peacebuilder & Social Entrepreneur'
  }, [])

  return (
    <PageTransition>
      <main>
        <HomePageContent />
      </main>
    </PageTransition>
  )
}
