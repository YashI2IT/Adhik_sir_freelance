import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const phoneNumber = '919422323569'
  const message = 'Hello Adhik Kadam, I am reaching out from your website.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#051315] border border-[#B59A63]/30 text-[#B59A63] rounded-full shadow-lg hover:shadow-[0_8px_30px_rgba(181,154,99,0.15)] hover:border-[#B59A63] hover:-translate-y-1 transition-all duration-500 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 200 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} strokeWidth={1.5} className="group-hover:scale-110 group-hover:text-white transition-all duration-500" />
      {/* Premium tooltip */}
      <span className="absolute right-full mr-4 bg-[#051315] border border-[#B59A63]/20 text-[#F7F6F1] text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
        Start a conversation
      </span>
    </motion.a>
  )
}
