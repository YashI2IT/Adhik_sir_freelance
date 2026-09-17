import { GalleryMediaContent } from '../sections/media/GalleryMediaContent'
import { PageTransition } from '../components/PageTransition'
import { useSEO } from '../hooks/useSEO'

export default function GalleryMedia() {
  useSEO({
    title: 'Gallery & Media | Adhik Kadam',
    description: 'Explore the official photo gallery, press features, and independent evidence of Adhik Kadam’s humanitarian work.',
    canonicalPath: '/gallery-media',
  })

  return (
    <PageTransition>
      <GalleryMediaContent />
    </PageTransition>
  )
}
