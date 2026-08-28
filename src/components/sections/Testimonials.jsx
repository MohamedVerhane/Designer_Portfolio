import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import ImageWithFallback from '../ui/ImageWithFallback'
import { sectionLabel, sectionTitle, container } from '../../styles/styles'
import { FloatRing, FloatSparkle, FloatSquare, FloatPlus } from '../illustrations'

const avatars = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop',
]

const colors = ['bg-accent-500', 'bg-emerald-500', 'bg-orange-500']

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { t } = useTranslation()
  const testimonials = t('testimonials.items', { returnObjects: true })

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  const item = testimonials[current]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Floating decorative shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 right-10 rtl:right-auto rtl:left-10 hidden md:block text-accent-500/60"
        >
          <FloatRing className="h-12 w-12" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/2 left-8 rtl:left-auto rtl:right-8 hidden lg:block text-accent-400/80"
        >
          <FloatSparkle className="h-8 w-8" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-32 right-1/4 hidden lg:block text-accent-600/50"
        >
          <FloatSquare className="h-10 w-10" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-[70%] left-[8%] hidden md:block text-accent-500/60"
        >
          <FloatPlus className="h-8 w-8" />
        </motion.div>
      </div>

      <div className={container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className={sectionLabel}>
            {t('testimonials.label')}
          </span>
          <h2 className={sectionTitle}>
            {t('testimonials.title')}
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="max-w-4xl mx-auto">
          <div
            aria-live="polite"
            aria-atomic="true"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label={t('testimonials.regionLabel')}
            className="outline-none"
          >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl bg-white p-8 sm:p-12 lg:p-16 shadow-sm dark:shadow-white/5 border border-stone-100 dark:border-white/10 dark:bg-dark-card"
            >
              {/* Quote icon */}
              <Quote className="h-10 w-10 text-accent-200 dark:text-accent-500/30 mb-6" strokeWidth={1.5} />

              {/* Testimonial text */}
              <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed text-dark tracking-tight">
                &ldquo;{item.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0">
                  <ImageWithFallback
                    src={avatars[current]}
                    alt={t('testimonials.portraitOf', { name: item.name })}
                    className="h-full w-full rounded-full object-cover"
                    fallbackClassName={`flex h-12 w-12 items-center justify-center rounded-full ${colors[current]} text-white text-sm font-bold`}
                    fallbackContent={item.initials}
                    loading="eager"
                  />
                </div>
                <div>
                  <div className="font-semibold text-dark">{item.name}</div>
                  <div className="text-sm text-muted">
                    {item.role}, {item.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={t('testimonials.goTo', { number: i + 1 })}
                  aria-current={i === current ? 'true' : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 bg-accent-500'
                      : 'w-2 bg-stone-300 hover:bg-stone-400 dark:bg-white/20 dark:hover:bg-white/30'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label={t('testimonials.previous')}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white dark:border-white/10 dark:bg-dark-card text-dark transition-all duration-200 hover:border-stone-300 hover:shadow-sm dark:hover:border-white/20 active:scale-95"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                aria-label={t('testimonials.next')}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white dark:border-white/10 dark:bg-dark-card text-dark transition-all duration-200 hover:border-stone-300 hover:shadow-sm dark:hover:border-white/20 active:scale-95"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
