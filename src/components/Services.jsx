import { motion } from 'framer-motion'
import {
  Palette,
  Code2,
  Megaphone,
  Layers,
  BarChart3,
  Smartphone,
} from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'

const services = [
  {
    number: '01',
    icon: Palette,
    title: 'Brand Identity',
    description:
      'Visual systems, logos, and brand guidelines that create recognition and build trust across every touchpoint.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80&auto=format&fit=crop',
    imageAlt: 'Man designer creating brand identity mockups on screen',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Product Design',
    description:
      'User research, wireframing, and high-fidelity interfaces designed around how people actually think and work.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80&auto=format&fit=crop',
    imageAlt: 'Man UX designer sketching product wireframes on paper',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Web Development',
    description:
      'Performant, accessible websites and web applications built with modern frameworks and clean architecture.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80&auto=format&fit=crop',
    imageAlt: 'Man developer coding a website with design mockup visible',
  },
  {
    number: '04',
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile experiences that feel intuitive and perform beautifully on every device.',
    image: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=600&q=80&auto=format&fit=crop',
    imageAlt: 'Man designing mobile app interface on tablet',
  },
  {
    number: '05',
    icon: BarChart3,
    title: 'Growth Strategy',
    description:
      'Data-driven marketing, conversion optimization, and analytics infrastructure to fuel sustainable growth.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80&auto=format&fit=crop',
    imageAlt: 'Man analyzing growth strategy data on dashboard',
  },
  {
    number: '06',
    icon: Megaphone,
    title: 'Content & Campaigns',
    description:
      'Storytelling, content strategy, and campaign design that amplify your message and engage your audience.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80&auto=format&fit=crop',
    imageAlt: 'Man designing campaign visuals on computer',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-600 mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-dark leading-[1.12]">
            Full-spectrum capabilities,{' '}
            <span className="text-muted">focused on outcomes.</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.06 * i }}
                className="group relative rounded-2xl bg-white dark:bg-dark-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-stone-200/50 dark:hover:shadow-black/20 hover:-translate-y-1 border border-transparent hover:border-stone-100 dark:hover:border-white/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    fallbackClassName="h-full w-full bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900/50 dark:to-accent-800/30 flex items-center justify-center"
                    fallbackContent={
                      <div className="opacity-30">
                        <Icon className="h-12 w-12 text-accent-500" strokeWidth={1} />
                      </div>
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 dark:from-dark-card dark:via-dark-card/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm text-xs font-mono font-semibold text-dark shadow-sm">
                    {service.number}
                  </div>
                </div>

                <div className="px-7 pb-7 -mt-4 relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 dark:bg-accent-500/15 text-accent-600 transition-all duration-300 group-hover:bg-accent-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent-600/25">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
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
