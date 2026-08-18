import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'

const fields = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com', required: true },
  { name: 'company', label: 'Company', type: 'text', placeholder: 'Company Inc.', required: false },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [touched, setTouched] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!form.email.trim()) errs.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address.'
    if (!form.message.trim()) errs.message = 'Please include a message.'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleBlur = (name) => {
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
  }

  const inputClasses = (name) => {
    const hasError = touched[name] && errors[name]
    return `w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-dark placeholder-stone-400 transition-all duration-200 outline-none ${
      hasError
        ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
        : 'border-stone-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-100 hover:border-stone-300'
    }`
  }

  if (status === 'success') {
    return (
      <section id="contact" className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center py-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6"
            >
              <CheckCircle className="h-8 w-8 text-green-600" />
            </motion.div>
            <h3 className="text-2xl font-bold tracking-tight text-dark">
              Message sent successfully.
            </h3>
            <p className="mt-3 text-muted leading-relaxed">
              Thank you for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
            <button
              onClick={() => { setStatus('idle'); setForm({ name: '', email: '', company: '', message: '' }); setTouched({}); setErrors({}) }}
              className="mt-8 text-sm font-medium text-accent-600 hover:text-accent-700 underline underline-offset-4 decoration-accent-200 hover:decoration-accent-500 transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: info + design image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-600 mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-dark leading-[1.12]">
              Let&apos;s start a conversation.
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Tell us about your project, your timeline, and your goals. We typically
              respond within one business day.
            </p>

            {/* Office/design workspace image */}
            <div className="mt-8 rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=800&q=80&auto=format&fit=crop"
                alt="Man at desk designing on tablet with stylus"
                className="w-full h-56 sm:h-64 object-cover"
                fallbackClassName="w-full h-56 sm:h-64 bg-gradient-to-br from-stone-100 to-stone-200"
                fallbackContent=""
              />
            </div>

            <div className="mt-8 space-y-5">
              {[
                { label: 'Email', value: 'hello@meridianstudio.com' },
                { label: 'Phone', value: '+1 (555) 234-5678' },
                { label: 'Location', value: 'New York & London' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-xs font-semibold tracking-widest uppercase text-muted mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm font-medium text-dark">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {fields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-dark mb-2"
                  >
                    {field.label}
                    {field.required && <span className="text-red-500 ml-0.5">*</span>}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={handleChange}
                    onBlur={() => handleBlur(field.name)}
                    required={field.required}
                    className={inputClasses(field.name)}
                    aria-invalid={touched[field.name] && errors[field.name] ? 'true' : undefined}
                    aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                  />
                  {touched[field.name] && errors[field.name] && (
                    <p id={`${field.name}-error`} className="mt-1.5 text-xs text-red-500" role="alert">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  Message<span className="text-red-500 ml-0.5">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  required
                  className={`${inputClasses('message')} resize-none`}
                  aria-invalid={touched.message && errors.message ? 'true' : undefined}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {touched.message && errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-500" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-dark px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-600/25 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-dark disabled:hover:shadow-none"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>

              <p className="text-xs text-center text-muted">
                By submitting, you agree to our privacy policy. We&apos;ll never share your information.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
