import { motion } from 'framer-motion'
import { Award, Users, TrendingUp, Sparkles } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'

const stats = [
  { icon: Award, number: '98%', label: 'Client retention' },
  { icon: Users, number: '120+', label: 'Projects delivered' },
  { icon: TrendingUp, number: '4.9', label: 'Client rating' },
  { icon: Sparkles, number: '8+', label: 'Years of craft' },
]

const values = [
  {
    title: 'Deep Listening',
    description: 'Every project starts by understanding your business, your users, and the competitive landscape before a single pixel is placed.',
  },
  {
    title: 'Unified Process',
    description: 'Strategy, design, and engineering work as one — eliminating the handoff gaps that dilute great ideas.',
  },
  {
    title: 'Measurable Impact',
    description: 'We measure success by business outcomes — engagement, conversion, retention — not just deliverables.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-50/50 dark:bg-accent-600/5 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
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
                  alt="Designer sketching wireframes on paper with colored markers"
                  className="h-full w-full object-cover"
                  fallbackClassName="h-full w-full bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center"
                  fallbackContent={
                    <div className="text-center space-y-4 p-8">
                      <div className="mx-auto w-24 h-24 rounded-2xl bg-accent-500 flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">D</span>
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
                <div className="text-3xl font-bold tracking-tight text-dark">120+</div>
                <div className="text-sm text-muted">Projects shipped</div>
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
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-600 mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-dark leading-[1.12]">
              We believe great design{' '}
              <span className="text-accent-600">is a business advantage.</span>
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
              Designer Studio was founded on a simple conviction: that the gap between
              what businesses need and what most agencies deliver is fundamentally a
              design problem.
            </p>
            <p className="mt-4 text-muted leading-relaxed max-w-xl">
              We work differently. Every engagement begins with deep listening —
              understanding your business model, your users, and the competitive landscape.
              From there, we unify strategy, design, and engineering into a single
              disciplined process that delivers measurable outcomes.
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
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-50 dark:bg-accent-500/15 text-accent-600">
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
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group rounded-2xl bg-white dark:bg-dark-card p-6 sm:p-7 ring-1 ring-stone-100 dark:ring-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-stone-200/50 hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 dark:bg-accent-500/15 text-accent-600 transition-all duration-300 group-hover:bg-accent-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent-600/25">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
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
