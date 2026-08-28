import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { btnWhite, btnWhiteOutline, container } from '../../styles/styles'
import { FloatSparkle, FloatPlus, FloatRingDot, FloatSquare } from '../illustrations'

export default function CTA() {
  const { t } = useTranslation()
  return (
    <section className="relative py-24 lg:py-32 bg-ink overflow-hidden">
      {/* Background video from Pexels (free commercial use) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1600&q=80&auto=format&fit=crop"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          aria-hidden="true"
        >
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark/90" />
      </div>

      {/* Floating accent shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 left-10 rtl:left-auto rtl:right-10 hidden sm:block text-accent-400/50"
        >
          <FloatSparkle className="h-10 w-10" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 right-16 rtl:right-auto rtl:left-16 hidden md:block text-accent-400/40"
        >
          <FloatPlus className="h-10 w-10" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-24 right-10 rtl:right-auto rtl:left-10 hidden lg:block text-accent-500/60"
        >
          <FloatSquare className="h-11 w-11" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/2 left-1/4 hidden md:block text-accent-400/50"
        >
          <FloatRingDot className="h-11 w-11" />
        </motion.div>
      </div>

      <div className={`${container} text-center`}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]"
          >
            {t('cta.titleLine1')}
            <br />
            {t('cta.titleLine2')}{' '}
            <span className="text-accent-400">{t('cta.titleAccent')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-stone-400 leading-relaxed max-w-xl mx-auto"
          >
            {t('cta.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className={`${btnWhite} px-8 py-4`}
            >
              {t('common.getInTouch')}
            </Link>
            <a
              href="mailto:hello@designerstudio.com"
              className={`${btnWhiteOutline} px-6 sm:px-8 py-4`}
            >
              hello@designerstudio.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
