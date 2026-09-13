import { HomePageContent } from '../sections/home/HomePageContent'
import { PageTransition } from '../components/PageTransition'
import { useSEO } from '../hooks/useSEO'

export default function Home() {
  useSEO({
    title: 'Adhik Kadam | Peacebuilder & Social Entrepreneur',
    description: 'Adhik Kadam is a peacebuilder, social entrepreneur, and humanitarian dedicated to empowering communities and transforming lives through Borderless World Foundation.',
    canonicalPath: '/',
  })

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Adhik Kadam",
    "description": "Peacebuilder and Social Entrepreneur",
    "url": "https://www.borderlessworldfoundation.org",
    "affiliation": {
      "@type": "Organization",
      "name": "Borderless World Foundation",
      "url": "https://www.borderlessworldfoundation.org"
    }
  }

  return (
    <PageTransition>
      <main>
        <HomePageContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </main>
    </PageTransition>
  )
}
