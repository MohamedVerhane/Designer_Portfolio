import { motion } from 'framer-motion'
import { Eye, Zap, Shield, Users, Sparkles, Target } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'

const features = [
  {
    icon: Eye,
    title: 'Design-First Thinking',
    description:
      'Every decision starts with the user. We design interfaces that are intuitive, accessible, and visually refined.',
  },
  {
    icon: Zap,
    title: 'Performance Obsessed',
    description:
      'We build fast by default. Clean code, optimized assets, and modern architecture ensure sub-second load times.',
  },
  {
    icon: Shield,
    title: 'Production-Grade Quality',
    description:
      "Security, scalability, and reliability aren't afterthoughts \u2014 they're built into our engineering process from day one.",
  },
  {
    icon: Users,
    title: 'True Collaboration',
    description:
      'We embed with your team, not around it. Shared slack channels, weekly syncs, and transparent workflows keep everyone aligned.',
  },
  {
    icon: Sparkles,
    title: 'Craft in Every Detail',
    description:
      'From micro-interactions to loading states, we obsess over the moments that make a product feel genuinely polished.',
  },
  {
    icon: Target,
    title: 'Results, Not Just Deliverables',
    description:
      'We measure success by business impact — engagement, conversion, retention — not just files handed over.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink text-white overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
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
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12]">
              The difference is in{' '}
              <span className="text-accent-400">how</span> we work.
            </h2>
            <p className="mt-6 text-lg text-stone-400 leading-relaxed">
              We&apos;re not the cheapest option, and we&apos;re not trying to be. We&apos;re the team
              you call when the work has to be exceptional.
            </p>

            {/* Men team collaborating image */}
            <div className="mt-10 rounded-2xl overflow-hidden ring-1 ring-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80&auto=format&fit=crop"
                alt="Men team sketching design ideas on whiteboard and paper"
                className="w-full h-64 object-cover opacity-80"
                fallbackClassName="w-full h-64 bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center"
                fallbackContent={
                  <div className="text-center space-y-3">
                    <div className="mx-auto w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                      <Sparkles className="h-7 w-7 text-accent-400" />
                    </div>
                    <p className="text-xs text-stone-500">Design Process</p>
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
                    key={feature.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: 0.06 * i }}
                    className="group rounded-2xl bg-white/[0.04] border border-white/[0.06] p-7 transition-all duration-300 hover:bg-white/[0.07] hover:border-accent-500/20"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-600/15 text-accent-400 transition-colors duration-300 group-hover:bg-accent-600/25">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-5 text-base font-semibold tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-stone-400">
                      {feature.description}
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
