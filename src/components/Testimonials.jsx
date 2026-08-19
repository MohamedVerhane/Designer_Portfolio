import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'

const testimonials = [
  {
    id: 1,
    name: 'James Mitchell',
    role: 'Head of Product',
    company: 'Luminary Finance',
    text: "Designer Studio completely transformed how our users interact with our platform. The redesign increased our daily active users by 40% in the first quarter alone. Their ability to balance business goals with user needs is unmatched.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop',
    initials: 'JM',
    color: 'bg-accent-500',
  },
  {
    id: 2,
    name: 'James Mitchell',
    role: 'CEO & Founder',
    company: 'Aether Wellness',
    text: "Working with Designer felt like having a senior design team embedded in our company. They didn't just deliver a brand \u2014 they gave us an identity that resonates with our users on a deeper level. Revenue grew 60% within six months of launch.",
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80&auto=format&fit=crop',
    initials: 'DM',
    color: 'bg-emerald-500',
  },
  {
    id: 3,
    name: 'David Kim',
    role: 'VP of Engineering',
    company: 'Carta Commerce',
    text: "The technical quality of their work is exceptional. They delivered a headless commerce platform that handles millions in transactions with zero downtime. Their engineering standards are as high as their design standards \u2014 a rare combination.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop',
    initials: 'DK',
    color: 'bg-orange-500',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  const t = testimonials[current]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-600 mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-dark leading-[1.12]">
            Words from the teams we&apos;ve helped.
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
            aria-label="Testimonials"
            className="outline-none"
          >
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
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
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0">
                  <ImageWithFallback
                    src={t.avatar}
                    alt={`Portrait of ${t.name}`}
                    className="h-full w-full rounded-full object-cover"
                    fallbackClassName={`flex h-12 w-12 items-center justify-center rounded-full ${t.color} text-white text-sm font-bold`}
                    fallbackContent={t.initials}
                    loading="eager"
                  />
                </div>
                <div>
                  <div className="font-semibold text-dark">{t.name}</div>
                  <div className="text-sm text-muted">
                    {t.role}, {t.company}
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
                  aria-label={`Go to testimonial ${i + 1}`}
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
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white dark:border-white/10 dark:bg-dark-card text-dark transition-all duration-200 hover:border-stone-300 hover:shadow-sm dark:hover:border-white/20 active:scale-95"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
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
