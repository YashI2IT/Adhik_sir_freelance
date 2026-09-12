import { useEffect } from 'react'
import { RecognitionPageContent } from '../sections/recognition/RecognitionPageContent'

export default function Recognition() {
  useEffect(() => {
    document.title = 'Recognition | Adhik Kadam'
  }, [])

  return (
    <main className="bg-bwf-ivory min-h-screen">
      <RecognitionPageContent />
    </main>
  )
}
