import { useEffect } from 'react'
import { ContactPageContent } from '../sections/contact/ContactPageContent'
import { PageTransition } from '../components/PageTransition'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | Borderless World Foundation'
  }, [])

  return (
    <PageTransition>
      <main>
        <ContactPageContent />
      </main>
    </PageTransition>
  )
}
