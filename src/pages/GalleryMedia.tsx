import { useEffect } from 'react'
import { GalleryMediaContent } from '../sections/media/GalleryMediaContent'
import { PageTransition } from '../components/PageTransition'

export default function GalleryMedia() {
  useEffect(() => {
    document.title = 'Gallery & Media | Philanthropist Adhik Kadam'
  }, [])

  return (
    <PageTransition>
      <GalleryMediaContent />
    </PageTransition>
  )
}
