import { useEffect } from 'react'
import { AboutPageContent } from '../sections/about/AboutPageContent'
import { PageTransition } from '../components/PageTransition'

export default function About() {
  useEffect(() => {
    document.title = 'About Adhik Kadam | Borderless World Foundation'
  }, [])

  return (
    <PageTransition>
      <main>
        <AboutPageContent />
      </main>
    </PageTransition>
  )
}
