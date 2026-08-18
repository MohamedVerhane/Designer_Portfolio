import { motion } from 'framer-motion'
import ImageWithFallback from './ImageWithFallback'

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent-600 mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-dark leading-[1.12]">
              We believe great design
              <br className="hidden sm:block" /> is a business advantage.
            </h2>
            <div className="mt-8 space-y-5 text-muted leading-relaxed">
              <p>
                Meridian Studio was founded on a simple conviction: that the gap between
                what businesses need and what most agencies deliver is fundamentally a
                design problem. Too many companies settle for digital experiences that
                look generic, feel disjointed, and fail to connect.
              </p>
              <p>
                We work differently. Every engagement begins with deep listening —
                understanding your business model, your users, and the competitive landscape.
                From there, we unify strategy, design, and engineering into a single
                disciplined process that delivers measurable outcomes.
              </p>
              <p>
                Our team brings together specialists across brand identity, product design,
                front-end and back-end engineering, and growth strategy — all aligned
                around the same goal: building something that genuinely works.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pt-8"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&q=80&auto=format&fit=crop"
                alt="Man sketching design wireframes on paper with colored markers"
                className="h-full w-full object-cover"
                fallbackClassName="h-full w-full bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center"
                fallbackContent={
                  <div className="text-center space-y-4 p-8">
                    <div className="mx-auto w-24 h-24 rounded-2xl bg-accent-500 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">M</span>
                    </div>
                  </div>
                }
              />
              <div className="absolute inset-4 rounded-xl border border-white/40 pointer-events-none" />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { number: '98%', label: 'Client retention rate' },
                { number: '4.9', label: 'Average client rating' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="rounded-xl bg-surface p-5"
                >
                  <div className="text-2xl font-bold tracking-tight text-dark">
                    {stat.number}
                  </div>
                  <div className="mt-1 text-sm text-muted">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
