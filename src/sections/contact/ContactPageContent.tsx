import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe, Send, ChevronDown, CheckCircle, AlertCircle } from 'lucide-react'
import { contactData } from '../../data/contact'
import { useContactForm } from '../../hooks/useContactForm'

/* ─── Animation helpers ─────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.65, ease: 'easeOut' as const, delay },
})

/* ─── Floating label input ──────────────────────────── */
function Field({
  id, label, type = 'text', required = false, error, children, ...rest
}: {
  id: string; label: string; type?: string; required?: boolean; error?: string;
  children?: React.ReactNode; [k: string]: unknown
}) {
  const base = `w-full px-0 pt-6 pb-2 bg-transparent border-0 border-b text-[15px] text-bwf-deep placeholder-transparent focus:outline-none focus:ring-0 transition-colors peer`
  const borderCls = error ? 'border-red-400' : 'border-bwf-deep/20 focus:border-bwf-deep'
  const labelCls = `absolute left-0 top-1 text-[10px] font-bold tracking-[0.15em] uppercase text-bwf-deep/50 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-normal peer-focus:top-1 peer-focus:text-[10px] peer-focus:font-bold peer-focus:tracking-[0.15em] peer-focus:uppercase`

  return (
    <div className="relative pt-4">
      {children ? (
        <>
          <label htmlFor={id} className="block text-[10px] font-bold tracking-[0.15em] uppercase text-bwf-deep/50 mb-2">{label}{required && ' *'}</label>
          {children}
        </>
      ) : (
        <>
          {type === 'textarea' ? (
            <textarea
              id={id} name={id} placeholder={label} rows={4}
              className={`${base} ${borderCls} resize-none`}
              {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              id={id} name={id} type={type} placeholder={label}
              className={`${base} ${borderCls}`}
              {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
            />
          )}
          <label htmlFor={id} className={labelCls}>{label}{required && ' *'}</label>
        </>
      )}
      {error && <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1"><AlertCircle size={10} />{error}</p>}
    </div>
  )
}

/* ─── Contact Image Slider ──────────────────────────── */
function ContactImageSlider() {
  const images = [
    '/images/IMG_8458.jpg',
    '/images/IMG_8920.jpg',
    '/images/IMG_8110.jpg',
    '/images/IMG_8050.jpg',
    '/images/IMG_8817.jpg'
  ]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="w-full aspect-[4/3] relative overflow-hidden rounded-sm group bg-bwf-deep/5">
      <AnimatePresence initial={false} mode="sync">
        <motion.img
          key={current}
          src={images[current]}
          alt="Contact BWF"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' as const }}
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-bwf-deep/10 pointer-events-none z-10" />
      
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {images.map((_, i) => (
           <button 
             key={i} 
             onClick={() => setCurrent(i)}
             aria-label={`Go to slide ${i + 1}`}
             className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-bwf-ivory w-4' : 'bg-bwf-ivory/50 hover:bg-bwf-ivory/80'}`} 
           />
        ))}
      </div>
    </div>
  )
}

/* ─── Main export ───────────────────────────────────── */
export function ContactPageContent() {
  const { pathways, contactInfo, formOptions } = contactData
  const {
    formData, errors, isSubmitting, isSuccess, submitError,
    handleChange, handleSubmit, resetForm
  } = useContactForm()





  return (
    <>
      {/* ═══════════════ HERO ═══════════════════════════ */}
      <section className="relative bg-[#051315] text-bwf-ivory overflow-hidden pt-28 pb-16 md:pt-0 md:pb-0 flex flex-col justify-center min-h-[85vh] md:min-h-screen">
        {/* Background image & overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <img src="/images/IMG_3390.jpg" alt="Contact Hero" className="w-full h-full object-cover opacity-60" />
          <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(166,124,82,0.15)_0%,transparent_65%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-[#051315]/40 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <motion.div {...fadeUp(0)} className="flex flex-col items-center">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-bwf-gold mb-8">Get In Touch</p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] text-bwf-ivory mb-8 text-balance mx-auto">
              Let's build something <em className="text-bwf-gold not-italic">meaningful</em> together.
            </h1>
            <p className="text-bwf-ivory/60 text-[15px] max-w-2xl leading-relaxed mx-auto">
              Whether you have a question, a collaboration in mind, or simply want to connect — we welcome every conversation.
            </p>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="mt-20 flex flex-col items-center gap-3 text-bwf-ivory/30"
          >
            <span className="text-[10px] tracking-widest uppercase">Scroll to connect</span>
            <ChevronDown size={14} className="animate-bounce mt-1" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ PATHWAYS ══════════════════════ */}
      <section className="bg-bwf-ivory py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.p {...fadeUp(0)} className="text-[10px] font-bold tracking-[0.3em] uppercase text-bwf-gold mb-10">
            How We Can Help
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bwf-deep/10">
            {pathways.map((p, i) => (
              <motion.a
                href="#contact-form"
                onClick={() => {
                  // Find the closest matching option in formOptions or just use the title if it matches exactly
                  const match = formOptions.find(opt => opt.toLowerCase() === p.title.toLowerCase())
                  if (match) {
                    handleChange({ target: { name: 'enquiryType', value: match } } as React.ChangeEvent<HTMLInputElement>)
                  }
                }}
                key={i}
                {...fadeUp(i * 0.08)}
                className="bg-bwf-ivory p-8 md:p-10 group hover:bg-bwf-deep transition-colors duration-500 flex flex-col text-left cursor-pointer"
              >
                <span className="font-light text-3xl text-bwf-gold/50 group-hover:text-bwf-gold/70 mb-5 transition-colors">{p.number}</span>
                <h3 className="text-[10px] font-bold tracking-[0.22em] uppercase text-bwf-deep group-hover:text-bwf-gold mb-3 transition-colors">{p.title}</h3>
                <p className="text-[13px] tracking-wide text-bwf-deep/60 group-hover:text-bwf-ivory/70 leading-relaxed flex-grow transition-colors">{p.description}</p>
                <div className="mt-6 pt-5 border-t border-bwf-deep/8 group-hover:border-bwf-ivory/10 transition-colors">
                  <span className="text-bwf-teal/60 group-hover:text-bwf-gold text-lg transition-colors">→</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FORM + INFO ════════════════════ */}
      <section className="bg-bwf-ivory py-16 md:py-24" id="contact-form">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-28">

            {/* ── LEFT: Form ── */}
            <div className="lg:col-span-7">
              <motion.div {...fadeUp(0)} className="mb-10">
                <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-bwf-deep leading-tight mb-3">
                  Send us a message.
                </h2>
                <p className="text-bwf-deep/55 text-[15px] leading-relaxed">
                  Fill in the form and we'll respond within 2–3 working days.
                </p>
              </motion.div>

              <motion.div {...fadeUp(0.1)}>
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-16 text-center border border-bwf-deep/8 rounded-sm"
                    >
                      <div className="w-14 h-14 rounded-full bg-bwf-teal/10 flex items-center justify-center mx-auto mb-5">
                        <CheckCircle size={24} className="text-bwf-teal" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-display text-2xl text-bwf-deep mb-2">Message received.</h3>
                      <p className="text-bwf-deep/60 text-[14px] mb-8">We'll be in touch with you shortly.</p>
                      <button onClick={resetForm} className="text-[11px] font-bold tracking-[0.2em] uppercase text-bwf-teal hover:text-bwf-deep transition-colors">
                        Send another →
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-8"
                    >
                      {submitError && (
                        <div className="p-4 bg-red-50 border border-red-100 rounded-sm flex items-start gap-3 text-[13px] text-red-700">
                          <AlertCircle size={16} className="mt-0.5 shrink-0" />
                          {submitError}
                        </div>
                      )}

                      {/* Row 1 */}
                      <div className="grid sm:grid-cols-2 gap-8">
                        <Field id="fullName" label="Full Name" required
                          value={formData.fullName} onChange={handleChange}
                          error={errors.fullName} autoComplete="name"
                        />
                        <Field id="email" label="Email Address" type="email" required
                          value={formData.email} onChange={handleChange}
                          error={errors.email} autoComplete="email"
                        />
                      </div>

                      {/* Row 2 */}
                      <div className="grid sm:grid-cols-2 gap-8">
                        <Field id="phone" label="Phone (optional)" type="tel"
                          value={formData.phone} onChange={handleChange}
                          autoComplete="tel"
                        />
                        <Field id="organisation" label="Organisation (optional)"
                          value={formData.organisation} onChange={handleChange}
                          autoComplete="organization"
                        />
                      </div>

                      {/* Enquiry type chips */}
                      <div>
                        <p className="block text-[10px] font-bold tracking-[0.15em] uppercase text-bwf-deep/50 mb-4">Enquiry Type *</p>
                        <div className="flex flex-wrap gap-2">
                          {formOptions.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => {
                                handleChange({ target: { name: 'enquiryType', value: opt } } as React.ChangeEvent<HTMLInputElement>)
                              }}
                              className={`px-4 py-2 rounded-full text-[12px] font-medium tracking-wide border transition-all duration-200 ${
                                formData.enquiryType === opt
                                  ? 'bg-bwf-deep text-bwf-ivory border-bwf-deep'
                                  : 'bg-transparent text-bwf-deep/60 border-bwf-deep/20 hover:border-bwf-deep/50 hover:text-bwf-deep'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                        <AnimatePresence>
                          {formData.enquiryType === 'Other' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              className="overflow-hidden"
                            >
                              <Field
                                id="otherEnquiryDetail"
                                label="Please specify your enquiry"
                                required
                                value={formData.otherEnquiryDetail || ''}
                                onChange={handleChange}
                                error={errors.otherEnquiryDetail}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                        {errors.enquiryType && <p className="mt-1.5 text-[11px] text-red-500 flex items-center gap-1"><AlertCircle size={10} />{errors.enquiryType}</p>}
                        {errors.otherEnquiryDetail && <p className="mt-1.5 text-[11px] text-red-500 flex items-center gap-1"><AlertCircle size={10} />{errors.otherEnquiryDetail}</p>}
                      </div>

                      {/* Message */}
                      <Field id="message" label="Your Message" type="textarea" required
                        value={formData.message} onChange={handleChange}
                        error={errors.message}
                      />

                      {/* Submit */}
                      <div className="flex items-center gap-6 pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`inline-flex items-center gap-3 px-8 py-4 bg-bwf-deep text-bwf-ivory text-[12px] font-bold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 ${
                            isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:bg-bwf-teal'
                          }`}
                        >
                          {isSubmitting ? 'Sending…' : 'Send Enquiry'}
                          <Send size={13} strokeWidth={2} />
                        </button>
                        <p className="text-[11px] text-bwf-deep/35 leading-relaxed">
                          Your information is kept confidential.
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* ── RIGHT: Info ── */}
            <div className="lg:col-span-5 flex flex-col gap-10">

              {/* Contact Details */}
              <motion.div {...fadeUp(0.15)}>
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-bwf-gold mb-6">Contact Details</p>
                <div className="space-y-6">
                  {[
                    { Icon: Mail, label: 'Email', value: contactInfo.email },
                    { Icon: Phone, label: 'Phone', value: contactInfo.phone },
                    { Icon: MapPin, label: 'Address', value: contactInfo.address },
                    { Icon: Globe, label: 'Website', value: contactInfo.website },
                  ].map(({ Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full border border-bwf-deep/10 flex items-center justify-center text-bwf-deep/40 shrink-0">
                        <Icon size={15} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold tracking-[0.18em] uppercase text-bwf-deep/40 mb-0.5">{label}</span>
                        <span className="text-[14px] text-bwf-deep/75">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Dynamic Image Slider */}
              <motion.div {...fadeUp(0.2)}>
                <ContactImageSlider />
              </motion.div>

              {/* Divider */}
              <div className="h-px bg-bwf-deep/8" />

              {/* Speaking CTA card */}
              <motion.div {...fadeUp(0.25)} className="bg-bwf-deep p-8 rounded-sm text-bwf-ivory">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-bwf-gold mb-3">Speaking Invitations</p>
                <h4 className="font-display text-xl mb-3 leading-snug">Invite Adhik Kadam to speak</h4>
                <p className="text-bwf-ivory/70 text-[14px] md:text-[15px] leading-relaxed mb-6">
                  For conferences, academic events, CSR programmes and public platforms — select "Speaking Invitation" in the enquiry form.
                </p>
                <button
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[11px] font-bold tracking-[0.2em] uppercase text-bwf-gold hover:text-bwf-ivory transition-colors"
                >
                  Send a speaking request →
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ QUOTE & CTA ══════════════════════ */}
      <section className="relative bg-[#051315] text-bwf-ivory overflow-hidden border-t border-bwf-ivory/10">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src="/images/IMG_8787.jpg" alt="Final Call" className="w-full h-full object-cover mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051315] via-transparent to-[#051315]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#051315] via-transparent to-[#051315]" />
        </div>
        
        <div className="relative z-10 py-24 md:py-32 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div {...fadeUp(0)}>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] text-bwf-ivory leading-[1.15] mb-10 text-balance">
                "No border should stop a human being from receiving care."
              </h2>
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-bwf-gold">
                — Adhik Kadam
              </p>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 border-t border-bwf-ivory/10">
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-4 py-16 px-8 text-bwf-ivory/80 hover:text-bwf-gold hover:bg-[#051315]/40 backdrop-blur-sm border-b md:border-b-0 md:border-r border-bwf-ivory/10 transition-all duration-500 group"
          >
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase">Write to us</span>
            <span className="group-hover:translate-y-[-2px] transition-transform">↑</span>
          </button>
          <Link
            to="/work"
            className="flex items-center justify-center gap-4 py-16 px-8 text-bwf-ivory/80 hover:text-bwf-gold hover:bg-[#051315]/40 backdrop-blur-sm transition-all duration-500 group"
          >
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase">Explore our work</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
