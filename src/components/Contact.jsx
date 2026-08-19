import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Loader2, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@designerstudio.com',
    href: 'mailto:hello@designerstudio.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 234-5678',
    href: 'tel:+15552345678',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'New York & London',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [touched, setTouched] = useState({})
  const [focusedField, setFocusedField] = useState(null)

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
    setFocusedField(null)
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

  const getFieldState = (name) => {
    if (touched[name] && errors[name]) return 'error'
    if (focusedField === name || (touched[name] && form[name])) return 'active'
    return 'idle'
  }

  const fieldClasses = (name) => {
    const state = getFieldState(name)
    const base = 'w-full bg-transparent border-0 border-b-2 px-0 py-4 text-sm text-dark placeholder-stone-400 transition-all duration-300 outline-none'
    const states = {
      error: 'border-red-400 placeholder-red-300',
      active: 'border-accent-500',
      idle: 'border-stone-200 hover:border-stone-300',
    }
    return `${base} ${states[state]}`
  }

  if (status === 'success') {
    return (
      <section id="contact" className="relative py-24 lg:py-32 bg-ink overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-600/10 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center py-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent-600/20 mb-8"
            >
              <CheckCircle className="h-10 w-10 text-accent-400" />
            </motion.div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Message sent.
            </h3>
            <p className="mt-4 text-lg text-stone-400 leading-relaxed">
              Thank you for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
            <button
              onClick={() => { setStatus('idle'); setForm({ name: '', email: '', company: '', message: '' }); setTouched({}); setErrors({}) }}
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors group"
            >
              Send another message
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-ink overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent-600/8 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 lg:mb-24"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-400 mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]">
            Let&apos;s build something{' '}
            <span className="text-accent-400">exceptional</span> together.
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Visual + contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[16/10]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=900&q=80&auto=format&fit=crop"
                alt="Designer working at desk with tablet and stylus"
                className="w-full h-full object-cover"
                fallbackClassName="w-full h-full bg-gradient-to-br from-accent-900/50 to-dark-card"
                fallbackContent={
                  <div className="flex items-center justify-center h-full">
                    <div className="w-16 h-16 rounded-2xl bg-accent-600/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent-400">D</span>
                    </div>
                  </div>
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>

            {/* Contact info cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {contactInfo.map((item, i) => {
                const Icon = item.icon
                const Wrapper = item.href ? 'a' : 'div'
                const wrapperProps = item.href ? { href: item.href } : {}
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  >
                    <Wrapper
                      {...wrapperProps}
                      className="group block rounded-2xl bg-white/[0.04] border border-white/[0.06] p-5 transition-all duration-300 hover:bg-white/[0.07] hover:border-accent-500/20"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-600/15 text-accent-400 mb-3">
                        <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                      </div>
                      <div className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-1">
                        {item.label}
                      </div>
                      <div className="text-sm font-medium text-white">
                        {item.value}
                      </div>
                    </Wrapper>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} noValidate>
              <div className="rounded-3xl bg-white/[0.03] border border-white/[0.06] p-8 sm:p-10">
                <div className="space-y-8">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold tracking-widest uppercase text-stone-500 mb-3">
                      Full Name <span className="text-accent-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => handleBlur('name')}
                      required
                      className={fieldClasses('name')}
                      aria-invalid={touched.name && errors.name ? 'true' : undefined}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {touched.name && errors.name && (
                      <p id="name-error" className="mt-2 text-xs text-red-400" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold tracking-widest uppercase text-stone-500 mb-3">
                      Email Address <span className="text-accent-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => handleBlur('email')}
                      required
                      className={fieldClasses('email')}
                      aria-invalid={touched.email && errors.email ? 'true' : undefined}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {touched.email && errors.email && (
                      <p id="email-error" className="mt-2 text-xs text-red-400" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold tracking-widest uppercase text-stone-500 mb-3">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company Inc."
                      value={form.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => handleBlur('company')}
                      className={fieldClasses('company')}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold tracking-widest uppercase text-stone-500 mb-3">
                      Message <span className="text-accent-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project..."
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => handleBlur('message')}
                      required
                      className={`${fieldClasses('message')} resize-none`}
                      aria-invalid={touched.message && errors.message ? 'true' : undefined}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {touched.message && errors.message && (
                      <p id="message-error" className="mt-2 text-xs text-red-400" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-10 group w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-accent-600 px-8 py-4.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-500 hover:shadow-xl hover:shadow-accent-600/25 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-accent-600 disabled:hover:shadow-none"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>

                <p className="mt-5 text-xs text-center text-stone-600">
                  We&apos;ll never share your information. Usually respond within 24 hours.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
