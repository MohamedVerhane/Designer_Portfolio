import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Loader2, Mail, Phone, MapPin } from 'lucide-react'
import ImageWithFallback from '../ui/ImageWithFallback'
import { container, sectionLabel, sectionTitle } from '../../styles/styles'
import {
  FloatRing,
  FloatSparkle,
  FloatPlus,
  FloatTriangle,
  FloatSquare,
  FloatRingDot,
  BlobSoft,
  PatternDots,
} from '../illustrations'
import {
  updateField,
  resetForm,
  submitContactForm,
} from '../../redux/slices/contactSlice'

const submitBtn =
  'mt-10 group w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-accent-600 px-8 py-4.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-500 hover:shadow-xl hover:shadow-accent-600/25 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-accent-600 disabled:hover:shadow-none'

const contactInfo = [
  {
    key: 'email',
    icon: Mail,
    labelKey: 'contact.info.email.label',
    valueKey: 'contact.info.email.value',
    href: 'mailto:youremail@designer.com',
    span: 'sm:col-span-2',
  },
  {
    key: 'phone',
    icon: Phone,
    labelKey: 'contact.info.phone.label',
    valueKey: 'contact.info.phone.value',
    href: 'tel:+0012345678',
  },
  {
    key: 'location',
    icon: MapPin,
    labelKey: 'contact.info.location.label',
    valueKey: 'contact.info.location.value',
    href: null,
  },
]

export default function Contact() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const form = useSelector((state) => state.contact.fields)
  const status = useSelector((state) => state.contact.status)
  const submitError = useSelector((state) => state.contact.error)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [focusedField, setFocusedField] = useState(null)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = t('contact.form.errors.name')
    if (!form.email.trim()) errs.email = t('contact.form.errors.email')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = t('contact.form.errors.emailInvalid')
    if (!form.message.trim()) errs.message = t('contact.form.errors.message')
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch(updateField({ name, value }))
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
    setErrors({})
    try {
      await dispatch(submitContactForm(form)).unwrap()
    } catch {
      /* error surfaced via submitError / status */
    }
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

  if (status === 'succeeded') {
    return (
    <section id="contact" className="relative py-24 lg:py-32 bg-card overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-600/10 blur-[120px]" />
        </div>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-24 left-10 rtl:left-auto rtl:right-10 hidden sm:block text-accent-500/60"
          >
            <FloatRing className="h-12 w-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-32 right-10 rtl:right-auto rtl:left-10 hidden md:block text-accent-400/70"
          >
            <FloatTriangle className="h-10 w-10" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="absolute top-1/2 right-1/4 hidden lg:block text-accent-500/50"
          >
            <FloatSparkle className="h-8 w-8" />
          </motion.div>
        </div>
        <div className={container}>
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
              <CheckCircle className="h-10 w-10 text-accent-500" />
            </motion.div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-dark">
              {t('contact.success.title')}
            </h3>
            <p className="mt-4 text-lg text-stone-500 leading-relaxed">
              {t('contact.success.subtitle')}
            </p>
            <button
              onClick={() => { dispatch(resetForm()); setTouched({}); setErrors({}) }}
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors group"
            >
              {t('contact.success.sendAnother')}
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-card overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent-600/8 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent-500/5 blur-[100px]" />
      </div>

      {/* Floating decorative shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 left-8 rtl:left-auto rtl:right-8 hidden sm:block text-accent-500/60"
        >
          <FloatRing className="h-12 w-12" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-1/3 right-10 rtl:right-auto rtl:left-10 hidden lg:block text-accent-400/80"
        >
          <FloatTriangle className="h-10 w-10" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-40 right-1/4 hidden lg:block text-accent-600/50"
        >
          <FloatPlus className="h-10 w-10" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-[68%] left-[8%] hidden md:block text-accent-400/70"
        >
          <FloatSparkle className="h-8 w-8" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="absolute top-16 right-1/3 hidden md:block text-accent-400/60"
        >
          <FloatSquare className="h-10 w-10" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-24 left-1/3 hidden lg:block text-accent-500/50"
        >
          <FloatRingDot className="h-11 w-11" />
        </motion.div>
        <BlobSoft className="absolute -bottom-24 -left-20 hidden lg:block w-[520px] h-[520px] text-accent-500" />
        <PatternDots className="absolute top-24 right-1/4 hidden lg:block w-40 h-40 text-accent-400/40" />
      </div>

      <div className={container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 lg:mb-24"
        >
          <span className={sectionLabel}>
            {t('contact.label')}
          </span>
          <h2 className={sectionTitle}>
            {t('contact.titleStart')}{' '}
            <span className="text-accent-600">{t('contact.titleAccent')}</span>
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
                alt={t('contact.imageAlt')}
                className="w-full h-full object-cover"
                fallbackClassName="w-full h-full bg-gradient-to-br from-accent-900/50 to-dark-card"
                fallbackContent={
                  <div className="flex items-center justify-center h-full">
                    <div className="w-16 h-16 rounded-2xl bg-accent-600/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent-400">{t('contact.fallbackLetter')}</span>
                    </div>
                  </div>
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>

            {/* Contact info cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {contactInfo.map((item, i) => {
                const Icon = item.icon
                const Wrapper = item.href ? 'a' : 'div'
                const wrapperProps = item.href ? { href: item.href } : {}
                return (
                  <motion.div
                    key={item.key}
                    className={item.span || ''}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  >
                    <Wrapper
                      {...wrapperProps}
                      className="group block rounded-2xl bg-card border border-border p-5 shadow-sm transition-all duration-300 hover:border-accent-500/40 hover:shadow-md"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-100 text-accent-600 dark:bg-accent-600/15 dark:text-accent-400 mb-3">
                        <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                      </div>
                      <div className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-1">
                        {t(item.labelKey)}
                      </div>
                      <div className={`text-sm font-medium text-dark ${item.span ? 'text-base sm:text-xl' : ''}`}>
                        {t(item.valueKey)}
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
              <div className="rounded-3xl bg-card border border-border p-8 sm:p-10 shadow-sm">
                <div className="space-y-8">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold tracking-widest uppercase text-stone-500 mb-3">
                      {t('contact.form.fullName')} <span className="text-accent-400">{t('contact.form.required')}</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder={t('contact.form.namePlaceholder')}
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
                      {t('contact.form.emailAddress')} <span className="text-accent-400">{t('contact.form.required')}</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t('contact.form.emailPlaceholder')}
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
                      {t('contact.form.company')}
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder={t('contact.form.companyPlaceholder')}
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
                      {t('contact.form.message')} <span className="text-accent-400">{t('contact.form.required')}</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder={t('contact.form.messagePlaceholder')}
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
                  className={submitBtn}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    <>
                      {t('contact.form.send')}
                      <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>

                {submitError && (
                  <p className="mt-4 text-sm text-red-400 text-center" role="alert">
                    {submitError}
                  </p>
                )}
                <p className="mt-5 text-xs text-center text-stone-600">
                  {t('contact.form.privacyNote')}
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
