import { motion } from 'framer-motion'

interface TimelineNavigationProps {
  years: { id: string; label: string }[]
  activeId: string
  onYearClick: (id: string) => void
}

export function TimelineNavigation({ years, activeId, onYearClick }: TimelineNavigationProps) {
  const activeIndex = years.findIndex(y => y.id === activeId)

  return (
    <nav className="sticky top-24 z-40 py-4 mb-12 lg:mb-0 w-full">
      {/* Mobile: horizontal scroll */}
      <div className="flex lg:hidden gap-4 overflow-x-auto pb-4 px-4 no-scrollbar items-center border-b border-bwf-deep/10">
        {years.map((year) => {
          const isActive = year.id === activeId
          return (
            <button
              key={year.id}
              onClick={() => onYearClick(year.id)}
              className="relative whitespace-nowrap"
            >
              <span className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${
                isActive ? 'text-bwf-teal' : 'text-bwf-deep/40'
              }`}>
                {year.label}
              </span>
              {isActive && (
                <motion.div 
                  layoutId="activeTimelineNavMobile"
                  className="absolute -bottom-4 left-0 right-0 h-0.5 bg-bwf-teal"
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Desktop: vertical timeline track */}
      <div className="hidden lg:flex flex-col relative pl-5">
        {/* Vertical track line */}
        <div className="absolute left-[7px] top-1 bottom-1 w-[1.5px] bg-bwf-deep/10" />

        {/* Progress fill line */}
        <motion.div 
          className="absolute left-[7px] top-1 w-[1.5px] bg-bwf-gold origin-top"
          initial={false}
          animate={{ 
            height: `${(activeIndex / Math.max(years.length - 1, 1)) * 100}%` 
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' as const }}
        />

        {years.map((year, i) => {
          const isActive = year.id === activeId
          const isPast = i <= activeIndex

          return (
            <button
              key={year.id}
              onClick={() => onYearClick(year.id)}
              className="group relative flex items-center gap-5 py-[10px] transition-colors duration-300"
            >
              {/* Dot */}
              <div className="relative z-10 flex items-center justify-center w-4 h-4 -ml-5">
                <motion.div 
                  className={`rounded-full transition-colors duration-300 ${
                    isActive 
                      ? 'bg-bwf-gold shadow-[0_0_8px_rgba(181,154,99,0.5)]' 
                      : isPast 
                        ? 'bg-bwf-gold/60'
                        : 'bg-bwf-deep/20 group-hover:bg-bwf-deep/40'
                  }`}
                  initial={false}
                  animate={{
                    width: isActive ? 10 : 6,
                    height: isActive ? 10 : 6,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Label */}
              <motion.span 
                className={`font-display text-lg tracking-wide transition-colors duration-300 ${
                  isActive 
                    ? 'text-bwf-teal font-semibold' 
                    : isPast
                      ? 'text-bwf-deep/60'
                      : 'text-bwf-deep/30 group-hover:text-bwf-deep/60'
                }`}
                initial={false}
                animate={{ x: isActive ? 4 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {year.label}
              </motion.span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
