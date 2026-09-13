import { RecognitionPageContent } from '../sections/recognition/RecognitionPageContent'
import { useSEO } from '../hooks/useSEO'

export default function Recognition() {
  useSEO({
    title: 'Recognition | Adhik Kadam',
    description: 'Explore the awards and public recognitions earned by Adhik Kadam through decades of humanitarian work, including the Mother Teresa Award.',
    canonicalPath: '/recognition',
  })

  return (
    <main className="bg-bwf-ivory min-h-screen">
      <RecognitionPageContent />
    </main>
  )
}
