import { useEffect, useState } from 'react'
import { journeyData } from '../../data/timeline'
import { TimelineNavigation } from '../../components/timeline/TimelineNavigation'
import { TimelineEvent } from '../../components/timeline/TimelineEvent'

export function MainTimelineSection() {
  const [activeId, setActiveId] = useState(journeyData.timeline[0].id)

  const navYears = journeyData.timeline.map(item => ({
    id: item.id,
    label: item.year
  }))

  useEffect(() => {
    const handleScroll = () => {
      // The absolute scroll position + a trigger offset (20% down from viewport top)
      const scrollPos = window.scrollY + window.innerHeight * 0.2

      // Classic scroll spy: find the LAST section whose top has scrolled past the trigger line.
      // This is the same pattern used by Bootstrap ScrollSpy and is bulletproof
      // regardless of section height, sticky children, or flex layouts.
      let currentId = journeyData.timeline[0].id

      for (const item of journeyData.timeline) {
        const element = document.getElementById(item.id)
        if (element) {
          // Get absolute top position relative to document
          const elTop = element.getBoundingClientRect().top + window.scrollY
          if (elTop <= scrollPos) {
            currentId = item.id
          }
        }
      }

      setActiveId(currentId)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Fire once on mount
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleYearClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Account for fixed header offsets
      const offset = 100
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="relative bg-bwf-white">
      <div className="lg:container-bwf max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row">
          
          {/* Sidebar Navigation */}
          <div className="hidden lg:block lg:w-1/6 relative z-30 bg-bwf-white/95 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none border-b border-bwf-deep/5 lg:border-none">
            <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] pt-6 lg:pt-20 flex items-start">
              <TimelineNavigation 
                years={navYears} 
                activeId={activeId} 
                onYearClick={handleYearClick} 
              />
            </div>
          </div>

          {/* Timeline Content */}
          <div className="lg:w-5/6">
            {journeyData.timeline.map((event, index) => (
              <TimelineEvent key={index} data={event} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
