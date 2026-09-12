import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  url: string;
  title?: string;
  className?: string;
}

export function YouTubeEmbed({ url, title = 'Video', className = '' }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Extract video ID from embed URL
  const match = url.match(/embed\/([^?]+)/);
  const videoId = match ? match[1] : null;
  
  if (!videoId) {
    return (
      <div className={`w-full aspect-video bg-[#051315] flex items-center justify-center ${className}`}>
        <p className="text-white/50 text-sm">Invalid video URL</p>
      </div>
    );
  }

  // Use hqdefault which is universally available to prevent 404 console errors
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const autoplayUrl = `${url}?autoplay=1`;

  return (
    <div className={`relative w-full aspect-video rounded-sm overflow-hidden bg-[#051315] group cursor-pointer ${className}`} onClick={() => setIsPlaying(true)}>
      <AnimatePresence mode="wait">
        {!isPlaying ? (
          <motion.div
            key="thumbnail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Thumbnail Image */}
            <img 
              src={thumbnailUrl} 
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Gradient Overlay for Cinematic Look */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#051315]/90 via-[#051315]/20 to-[#051315]/30 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#051315]/60 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-[#12636B]/50 group-hover:border-[#12636B]/60">
                <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="currentColor" />
              </div>
            </div>
            
            {/* Corner Decorative Lines (Consistent with aesthetic) */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/30 m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/30 m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
          </motion.div>
        ) : (
          <motion.div
            key="iframe"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full bg-black"
          >
            <iframe 
              src={autoplayUrl} 
              title={title} 
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
