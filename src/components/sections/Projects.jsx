import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ImageWithFallback from '../ui/ImageWithFallback'
import { container, sectionLabel, cardImg } from '../../styles/styles'
import { FloatRing, FloatTriangle, FloatSparkle, FloatRingDot } from '../illustrations'

const projectMeta = [
  {
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=80&auto=format&fit=crop',
    fallbackBg: 'from-indigo-500 to-purple-600',
    span: 'lg:col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=600&q=80&auto=format&fit=crop',
    fallbackBg: 'from-emerald-400 to-teal-500',
    span: 'lg:col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&auto=format&fit=crop',
    fallbackBg: 'from-orange-400 to-rose-500',
    span: 'lg:col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&q=80&auto=format&fit=crop',
    fallbackBg: 'from-slate-600 to-slate-800',
    span: 'lg:col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80&auto=format&fit=crop',
    fallbackBg: 'from-amber-400 to-orange-500',
    span: 'lg:col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80&auto=format&fit=crop',
    fallbackBg: 'from-cyan-400 to-blue-500',
    span: 'lg:col-span-1',
    aspect: 'aspect-[4/3]',
  },
]

export default function Projects() {
  const { t } = useTranslation()
  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Floating decorative shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 left-8 rtl:left-auto rtl:right-8 hidden md:block text-accent-500/60"
        >
          <FloatRing className="h-12 w-12" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-1/3 right-10 rtl:right-auto rtl:left-10 hidden lg:block text-accent-400/80"
        >
          <FloatTriangle className="h-10 w-10" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-32 right-1/4 hidden lg:block text-accent-600/50"
        >
          <FloatRingDot className="h-11 w-11" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-[70%] left-[6%] hidden md:block text-accent-400/70"
        >
          <FloatSparkle className="h-8 w-8" />
        </motion.div>
      </div>

      <div className={container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20"
        >
          <div className="max-w-2xl">
            <span className={sectionLabel}>
              {t('projects.label')}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-dark leading-[1.12]">
              {t('projects.title')}
            </h2>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent-600 transition-colors shrink-0"
          >
            {t('projects.getInTouch')}
          </Link>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
          {t('projects.items', { returnObjects: true }).map((project, i) => {
            const meta = projectMeta[i]
            return (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${meta.span}`}
            >
              <div className={`relative ${meta.aspect} overflow-hidden`}>
                <ImageWithFallback
                  src={meta.image}
                  alt={project.imageAlt}
                  className={cardImg}
                  fallbackClassName={`h-full w-full bg-gradient-to-br ${meta.fallbackBg} flex items-center justify-center`}
                  fallbackContent={
                    <div className="opacity-20">
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="h-20 w-20 rounded-xl border-2 border-white/30" />
                          <div className="h-20 w-20 rounded-full border-2 border-white/20" />
                        </div>
                      </div>
                    </div>
                  }
                />

                <div className="absolute inset-0 bg-dark/0 dark:bg-black/0 transition-colors duration-500 group-hover:bg-dark/50 dark:group-hover:bg-black/50" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-medium text-white/70 tracking-wide uppercase">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed max-w-md line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
