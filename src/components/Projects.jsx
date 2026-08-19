import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'

const projects = [
  {
    id: 1,
    title: 'Luminary Finance',
    category: 'Fintech \u00b7 Product Design \u00b7 Development',
    description:
      'A complete digital banking platform redesign that increased user engagement by 40% and reduced onboarding friction significantly.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=80&auto=format&fit=crop',
    imageAlt: 'Man designer working on fintech dashboard design',
    fallbackBg: 'from-indigo-500 to-purple-600',
    span: 'lg:col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 2,
    title: 'Aether Wellness',
    category: 'Health & Wellness \u00b7 Brand Identity',
    description:
      'Brand identity and marketing website for a premium wellness platform serving 200K+ monthly users.',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=600&q=80&auto=format&fit=crop',
    imageAlt: 'Man designer creating wellness brand visuals',
    fallbackBg: 'from-emerald-400 to-teal-500',
    span: 'lg:col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 3,
    title: 'Carta Commerce',
    category: 'E-Commerce \u00b7 Full-Stack Development',
    description:
      'Headless e-commerce solution processing $2M+ in annual transactions with 99.9% uptime.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&auto=format&fit=crop',
    imageAlt: 'Man developer building e-commerce platform interface',
    fallbackBg: 'from-orange-400 to-rose-500',
    span: 'lg:col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 4,
    title: 'Stratos Aerospace',
    category: 'Enterprise \u00b7 SaaS \u00b7 Data Visualization',
    description:
      'Real-time analytics dashboard for fleet management, processing 10K+ data points per second.',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&q=80&auto=format&fit=crop',
    imageAlt: 'Man designer working on data visualization dashboard',
    fallbackBg: 'from-slate-600 to-slate-800',
    span: 'lg:col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 5,
    title: 'Verdant Studios',
    category: 'Creative Agency \u00b7 Web Design',
    description:
      'Award-winning portfolio site featuring immersive 3D elements and cinematic transitions.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80&auto=format&fit=crop',
    imageAlt: 'Man creative director designing portfolio layout',
    fallbackBg: 'from-amber-400 to-orange-500',
    span: 'lg:col-span-1',
    aspect: 'aspect-[4/3]',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20"
        >
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-600 mb-4">
              Best Design
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-dark leading-[1.12]">
              Selected projects we&apos;re proud of.
            </h2>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent-600 transition-colors shrink-0"
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${project.span}`}
            >
              <div className={`relative ${project.aspect} overflow-hidden`}>
                <ImageWithFallback
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  fallbackClassName={`h-full w-full bg-gradient-to-br ${project.fallbackBg} flex items-center justify-center`}
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

                <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/0 dark:bg-white/0 text-white/0 transition-all duration-300 group-hover:bg-white dark:group-hover:bg-white group-hover:text-dark dark:group-hover:text-ink">
                  <ArrowUpRight className="h-5 w-5" />
                </div>

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
          ))}
        </div>
      </div>
    </section>
  )
}
