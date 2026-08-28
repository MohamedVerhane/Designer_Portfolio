import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Award, Users, TrendingUp, Sparkles } from 'lucide-react'
import ImageWithFallback from '../ui/ImageWithFallback'
import { cardIcon, container, sectionLabel, sectionTitle } from '../../styles/styles'
import { FloatTriangle, FloatSparkle, FloatRing, BlobSoft } from '../illustrations'

const statIcons = [Award, Users, TrendingUp, Sparkles]

export default function About() {
  const { t } = useTranslation()
  const values = t('about.values', { returnObjects: true })
  const stats = t('about.stats', { returnObjects: true })
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-50/50 dark:bg-accent-600/5 blur-[100px] pointer-events-none" />

      {/* Floating decorative shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 rtl:left-auto rtl:right-10 hidden sm:block text-accent-500/60"
        >
          <FloatTriangle className="h-10 w-10" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 right-8 rtl:right-auto rtl:left-8 text-accent-400/80"
        >
          <FloatSparkle className="h-8 w-8" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-40 left-1/4 hidden lg:block rtl:left-auto rtl:right-1/4 text-accent-600/50"
        >
          <FloatRing className="h-12 w-12" />
        </motion.div>
        <BlobSoft className="absolute -bottom-20 -right-16 hidden lg:block w-[520px] h-[520px] text-accent-500" />
      </div>

      <div className={container}>
        {/* Top section: image + text */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Image — takes 5 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-dark/8 dark:shadow-black/30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&q=80&auto=format&fit=crop"
                  alt={t('about.imageAlt')}
                  className="h-full w-full object-cover"
                  fallbackClassName="h-full w-full bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center"
                  fallbackContent={
                    <div className="text-center space-y-4 p-8">
                      <div className="mx-auto w-24 h-24 rounded-2xl bg-accent-500 flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">{t('about.fallbackLetter')}</span>
                      </div>
                    </div>
                  }
                />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-4 sm:-right-8 rounded-2xl bg-white dark:bg-dark-card p-5 shadow-xl shadow-dark/8 dark:shadow-black/30 ring-1 ring-stone-900/5"
              >
                <div className="text-3xl font-bold tracking-tight text-dark">{t('about.floatCardNumber')}</div>
                <div className="text-sm text-muted">{t('about.floatCardLabel')}</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text — takes 7 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className={sectionLabel}>
              {t('about.label')}
            </span>
            <h2 className={sectionTitle}>
              {t('about.titleStart')}{' '}
              <span className="text-accent-600">{t('about.titleAccent')}</span>
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
              {t('about.paragraph1')}
            </p>
            <p className="mt-4 text-muted leading-relaxed max-w-xl">
              {t('about.paragraph2')}
            </p>

            {/* Values */}
            <div className="mt-10 space-y-5">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-50 dark:bg-accent-500/15 text-accent-600">
                    <div className="h-2 w-2 rounded-full bg-accent-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-dark">{v.title}</h3>
                    <p className="mt-1 text-sm text-muted leading-relaxed">{v.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = statIcons[i]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group rounded-2xl bg-white dark:bg-dark-card p-6 sm:p-7 ring-1 ring-stone-100 dark:ring-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-stone-200/50 hover:-translate-y-0.5"
              >
                <div className={cardIcon}>
                  <Icon className="h-8 w-8" strokeWidth={1.8} />
                </div>
                <div className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-dark">
                  {stat.number}
                </div>
                <div className="mt-1.5 text-sm text-muted">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
