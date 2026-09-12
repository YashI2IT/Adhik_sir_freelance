import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

export type LegalDocType = 'privacy' | 'grievance' | 'terms' | null

interface LegalModalProps {
  type: LegalDocType
  onClose: () => void
}

const contentMap = {
  privacy: {
    title: 'Privacy Policy',
    tag: 'Data & Trust',
    date: 'Last Updated: ' + new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
    content: (
      <div className="space-y-6 text-[15px] leading-[1.8] text-bwf-deep/75 tracking-wide">
        <p>Borderless World Foundation is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed.</p>
        
        <div>
          <h3 className="text-base font-bold text-bwf-deep mb-2 font-display">Information We Collect</h3>
          <p>We collect information when you visit our website, subscribe to our newsletter, respond to a survey, or fill out a form — including your name, email address, phone number, and any other information you choose to provide.</p>
        </div>

        <div>
          <h3 className="text-base font-bold text-bwf-deep mb-2 font-display">How We Use Your Information</h3>
          <ul className="space-y-2 pl-4">
            {['To personalize your experience and improve our website.', 'To improve customer service and respond to enquiries.', 'To send periodic updates relevant to your interaction with us.'].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-[6px] shrink-0 w-1.5 h-1.5 rounded-full bg-bwf-gold"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold text-bwf-deep mb-2 font-display">Contact</h3>
          <p>For any questions regarding this privacy policy, please reach us through our official contact form.</p>
        </div>
      </div>
    )
  },
  grievance: {
    title: 'Grievance Redressal',
    tag: 'Accountability',
    date: 'Borderless World Foundation',
    content: (
      <div className="space-y-6 text-[15px] leading-[1.8] text-bwf-deep/75 tracking-wide">
        <p>We are committed to maintaining the highest standards of transparency, accountability, and ethical conduct — providing a safe and respectful environment for all beneficiaries, partners, and stakeholders.</p>
        
        <div>
          <h3 className="text-base font-bold text-bwf-deep mb-2 font-display">Reporting a Grievance</h3>
          <p>If you have a concern, complaint, or grievance regarding any aspect of our operations, programs, or personnel conduct, we encourage you to report it immediately. All reports are treated with strict confidentiality.</p>
        </div>

        <div>
          <h3 className="text-base font-bold text-bwf-deep mb-3 font-display">Our Process</h3>
          <div className="space-y-3">
            {[
              { label: 'Acknowledgment', desc: 'We will acknowledge receipt of your grievance within 48 working hours.' },
              { label: 'Investigation', desc: 'A fair and impartial review is conducted based on the information provided.' },
              { label: 'Resolution', desc: 'We strive to resolve all standard grievances within 15 working days.' },
              { label: 'Communication', desc: 'You will be notified of the outcome and any remedial actions taken.' },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="shrink-0 w-6 h-6 rounded-full bg-bwf-deep/10 flex items-center justify-center text-[11px] font-bold text-bwf-deep/60">{i + 1}</span>
                <p><strong className="text-bwf-deep font-semibold">{step.label}: </strong>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  terms: {
    title: 'Terms & Conditions',
    tag: 'Legal',
    date: 'Last Updated: ' + new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
    content: (
      <div className="space-y-6 text-[15px] leading-[1.8] text-bwf-deep/75 tracking-wide">
        <p>By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use.</p>
        
        <div>
          <h3 className="text-base font-bold text-bwf-deep mb-2 font-display">1. Acceptance of Terms</h3>
          <p>By accessing this website, you accept these Terms and Conditions in full. Do not continue to use this site if you do not accept all the terms stated on this page.</p>
        </div>

        <div>
          <h3 className="text-base font-bold text-bwf-deep mb-2 font-display">2. Intellectual Property</h3>
          <p>Unless otherwise stated, Borderless World Foundation owns the intellectual property rights for all material on this website. All intellectual property rights are reserved.</p>
        </div>

        <div>
          <h3 className="text-base font-bold text-bwf-deep mb-2 font-display">3. User Conduct</h3>
          <p>You must not use this website in any way that causes damage to the website or impairs accessibility; or in any way which is unlawful, illegal, fraudulent, or harmful.</p>
        </div>

        <div>
          <h3 className="text-base font-bold text-bwf-deep mb-2 font-display">4. Revisions</h3>
          <p>The materials on this website could include technical or typographical errors. We do not warrant that any materials are accurate, complete, or current.</p>
        </div>
      </div>
    )
  }
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    if (type) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [type])

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const data = type ? contentMap[type] : null

  return (
    <AnimatePresence>
      {type && data && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6">

          {/* Frosted glass backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' as const }}
            onClick={onClose}
            className="absolute inset-0 bg-black/55 backdrop-blur-[10px] cursor-pointer"
          />

          {/* Modal Panel — Apple-style sheet */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 80, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 36, mass: 0.75 }}
            className="relative w-full sm:max-w-[560px] max-h-[92vh] sm:max-h-[80vh] bg-[#F8F7F2] rounded-t-[32px] sm:rounded-[28px] shadow-[0_40px_100px_-10px_rgba(0,0,0,0.4)] flex flex-col z-10 overflow-hidden border border-white/30"
          >
            {/* Mobile drag pill */}
            <div className="sm:hidden mx-auto mt-3.5 mb-1 w-9 h-1 rounded-full bg-bwf-deep/15 shrink-0" />

            {/* Header */}
            <div className="flex items-start justify-between px-7 pt-6 pb-5 shrink-0">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-bwf-gold">
                  {data.tag}
                </span>
                <h2 className="text-[24px] font-display text-bwf-deep leading-tight tracking-tight">
                  {data.title}
                </h2>
                <p className="text-[11px] text-bwf-deep/40 tracking-widest uppercase">{data.date}</p>
              </div>

              {/* Circular close — Apple macOS style */}
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-bwf-deep/[0.08] flex items-center justify-center text-bwf-deep/50 hover:bg-bwf-deep/[0.15] hover:text-bwf-deep active:scale-90 transition-all duration-150 mt-0.5 ml-4 shrink-0"
                aria-label="Close"
              >
                <X size={14} strokeWidth={2.5} />
              </button>
            </div>

            {/* Hairline separator */}
            <div className="h-[0.5px] bg-bwf-deep/[0.08] mx-7 shrink-0" />

            {/* Scrollable content body */}
            <div
              className="overflow-y-auto overscroll-contain px-7 py-7 flex-1"
              style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(5,19,21,0.12) transparent' }}
            >
              {data.content}
            </div>

            {/* Mobile safe area */}
            <div className="sm:hidden shrink-0 pb-5" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
