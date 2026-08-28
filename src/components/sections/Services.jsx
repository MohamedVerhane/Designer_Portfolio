import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Palette,
  Code2,
  Megaphone,
  Layers,
  BarChart3,
  Smartphone,
} from 'lucide-react'
import { FloatSquare, FloatSparkle, FloatPlus, PatternDots } from '../illustrations'
import ImageWithFallback from '../ui/ImageWithFallback'
import { cardIcon, container, sectionLabel, sectionTitle, cardBase, cardImg } from '../../styles/styles'

const serviceMeta = [
  {
    number: '01',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80&auto=format&fit=crop',
  },
  {
    number: '02',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80&auto=format&fit=crop',
  },
  {
    number: '03',
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80&auto=format&fit=crop',
  },
  {
    number: '04',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=600&q=80&auto=format&fit=crop',
  },
  {
    number: '05',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80&auto=format&fit=crop',
  },
  {
    number: '06',
    icon: Megaphone,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80&auto=format&fit=crop',
  },
]

export default function Services() {
  const { t } = useTranslation()
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Floating decorative shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 right-10 rtl:right-auto rtl:left-10 hidden md:block text-accent-500/60"
        >
          <FloatSquare className="h-10 w-10" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/2 left-8 rtl:left-auto rtl:right-8 hidden lg:block text-accent-400/80"
        >
          <FloatSparkle className="h-8 w-8" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-48 right-1/4 hidden lg:block text-accent-600/50"
        >
          <FloatPlus className="h-10 w-10" />
        </motion.div>
        <PatternDots className="absolute bottom-20 left-10 rtl:left-auto rtl:right-10 hidden lg:block w-44 h-44 text-accent-400/40" />
      </div>

      <div className={container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <span className={sectionLabel}>
            {t('services.label')}
          </span>
          <h2 className={sectionTitle}>
            {t('services.titleStart')}{' '}
            <span className="text-muted">{t('services.titleAccent')}</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t('services.items', { returnObjects: true }).map((service, i) => {
            const meta = serviceMeta[i]
            const Icon = meta.icon
            return (
              <motion.article
                key={meta.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.06 * i }}
                className={cardBase}
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={meta.image}
                    alt={service.imageAlt}
                    className={cardImg}
                    fallbackClassName="h-full w-full bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900/50 dark:to-accent-800/30 flex items-center justify-center"
                    fallbackContent={
                      <div className="opacity-30">
                        <Icon className="h-12 w-12 text-accent-500" strokeWidth={1} />
                      </div>
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 dark:from-dark-card dark:via-dark-card/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm text-xs font-mono font-semibold text-dark shadow-sm">
                    {meta.number}
                  </div>
                </div>

                <div className="px-7 pb-7 -mt-4 relative">
                  <div className={cardIcon}>
                    <Icon className="h-8 w-8" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-dark">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
