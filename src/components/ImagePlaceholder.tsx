import React from 'react'
import { Image as ImageIcon } from 'lucide-react'

interface ImagePlaceholderProps {
  expectedPath: string
  className?: string
  alt?: string
}

export function ImagePlaceholder({ expectedPath, className = '', alt = 'Placeholder' }: ImagePlaceholderProps) {
  return (
    <div 
      className={`bg-bwf-ivory/50 border border-bwf-deep/10 rounded-md flex flex-col items-center justify-center text-bwf-deep/40 p-6 ${className}`}
      aria-label={alt}
    >
      <ImageIcon size={32} className="mb-2 opacity-50" />
      <p className="text-xs font-medium uppercase tracking-wider text-center">
        Client Image Required
      </p>
      <code className="text-[10px] mt-2 px-2 py-1 bg-bwf-deep/5 rounded">
        {expectedPath}
      </code>
    </div>
  )
}
