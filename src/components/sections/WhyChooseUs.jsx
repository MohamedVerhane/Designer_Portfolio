import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Eye, Zap, Shield, Users, Sparkles, Target } from 'lucide-react'
import ImageWithFallback from '../ui/ImageWithFallback'
import { container } from '../../styles/styles'
import { FloatTriangle, FloatRing, FloatPlus, FloatRingDot, BlobSoft } from '../illustrations'

const features = [
  { key: 'designFirst', icon: Eye },
  { key: 'performance', icon: Zap },
  { key: 'production', icon: Shield },
  { key: 'together', icon: Users },
  { key: 'detail', icon: Sparkles },
  { key: 'results', icon: Target },
]

export default function WhyChooseUs() {
  const { t } = useTranslation()
  return (
    <section className="relative py-24 lg:py-32 bg-ink text-white overflow-hidden">
      {/* Floating decorative shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 left-10 rtl:left-auto rtl:right-10 hidden sm:block text-accent-400/60"
        >
          <FloatTriangle className="h-10 w-10" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-1/3 right-12 rtl:right-auto rtl:left-12 hidden lg:block text-accent-400/50"
        >
          <FloatRing className="h-12 w-12" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-40 left-1/4 hidden md:block text-accent-400/60"
        >
          <FloatPlus className="h-10 w-10" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-[70%] right-1/4 hidden md:block text-accent-400/40"
        >
          <FloatRingDot className="h-11 w-11" />
        </motion.div>
        <BlobSoft className="absolute -bottom-24 -left-20 hidden lg:block w-[560px] h-[560px] text-accent-400/20" />
      </div>

      <div className={container}>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left column - sticky heading + men team image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-400 mb-4">
              {t('why.label')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12]">
              {t('why.titleStart')}{' '}
              <span className="text-accent-400">{t('why.titleAccent')}</span>{' '}
              {t('why.titleEnd')}
            </h2>
            <p className="mt-6 text-lg text-stone-400 leading-relaxed">
              {t('why.description')}
            </p>

            {/* Team collaborating image */}
            <div className="mt-10 rounded-2xl overflow-hidden ring-1 ring-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80&auto=format&fit=crop"
                alt={t('why.imageAlt')}
                className="w-full h-64 object-cover opacity-80"
                fallbackClassName="w-full h-64 bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center"
                fallbackContent={
                  <div className="text-center space-y-3">
                    <div className="mx-auto w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                      <Sparkles className="h-11 w-11 text-accent-400" />
                    </div>
                    <p className="text-xs text-stone-500">{t('why.designProcess')}</p>
                  </div>
                }
              />
            </div>
          </motion.div>

          {/* Right column - features */}
          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.key}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: 0.06 * i }}
                    className="group rounded-2xl bg-white/[0.04] border border-white/[0.06] p-7 transition-all duration-300 hover:bg-white/[0.07] hover:border-accent-500/20"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-600/15 text-accent-400 transition-colors duration-300 group-hover:bg-accent-600/25">
                      <Icon className="h-8 w-8" strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-5 text-base font-semibold tracking-tight">
                      {t(`why.features.${feature.key}.title`)}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-stone-400">
                      {t(`why.features.${feature.key}.description`)}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
