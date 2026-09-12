import { useState, FormEvent, ChangeEvent } from 'react'

export interface ContactFormData {
  fullName: string
  email: string
  phone: string
  organisation: string
  enquiryType: string
  otherEnquiryDetail?: string
  message: string
}

interface FormErrors {
  fullName?: string
  email?: string
  enquiryType?: string
  otherEnquiryDetail?: string
  message?: string
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    organisation: '',
    enquiryType: '',
    otherEnquiryDetail: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name.'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter an email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    
    if (!formData.enquiryType) {
      newErrors.enquiryType = 'Please select an enquiry type.'
    } else if (formData.enquiryType === 'Other' && (!formData.otherEnquiryDetail || !formData.otherEnquiryDetail.trim())) {
      newErrors.otherEnquiryDetail = 'Please specify your enquiry type.'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting || isSuccess) return
    
    if (!validate()) return

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Connect to the backend API
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }
      
      setIsSuccess(true)
    } catch (err) {
      console.error('Form submission error:', err)
      setSubmitError('Your message could not be sent right now. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      organisation: '',
      enquiryType: '',
      otherEnquiryDetail: '',
      message: ''
    })
    setIsSuccess(false)
    setErrors({})
    setSubmitError(null)
  }

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    submitError,
    handleChange,
    handleSubmit,
    resetForm
  }
}
