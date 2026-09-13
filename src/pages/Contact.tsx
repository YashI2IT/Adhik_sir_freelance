import { ContactPageContent } from '../sections/contact/ContactPageContent'
import { PageTransition } from '../components/PageTransition'
import { useSEO } from '../hooks/useSEO'

export default function Contact() {
  useSEO({
    title: 'Contact | Borderless World Foundation',
    description: 'Connect with Adhik Kadam and the Borderless World Foundation for partnerships, speaking engagements, media, or general enquiries.',
    canonicalPath: '/contact',
  })

  return (
    <PageTransition>
      <main>
        <ContactPageContent />
      </main>
    </PageTransition>
  )
}
