import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

interface VideoModalProps {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
}

export function VideoModal({ src, poster, className = '', ariaLabel }: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    }
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen]);

  return (
    <>
      <div 
        className={`relative w-full rounded-2xl overflow-hidden bg-black group cursor-pointer ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <video 
          src={src}
          poster={poster}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-opacity duration-500"
          preload="metadata"
          muted
          playsInline
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-[#051315]/60 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-[#12636B]/50 group-hover:border-[#12636B]/60">
            <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="currentColor" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#051315]/95 backdrop-blur-sm p-4 md:p-8"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors z-[60]"
              aria-label="Close fullscreen video"
            >
              <X size={36} />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden relative shadow-2xl"
            >
               <video 
                  src={src} 
                  controls 
                  autoPlay
                  className="w-full h-full object-contain outline-none"
                  aria-label={ariaLabel}
               />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
