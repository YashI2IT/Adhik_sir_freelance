interface SectionLabelProps {
  text: string
  className?: string
}

export function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <span className={`type-label text-bwf-gold mb-6 block tracking-widest uppercase ${className}`}>
      {text}
    </span>
  )
}
