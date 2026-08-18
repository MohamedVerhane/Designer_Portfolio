import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-24 lg:py-32 bg-dark overflow-hidden">
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

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 text-center">
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
            Let&apos;s create
            <br />
            something{' '}
            <span className="text-accent-400">remarkable.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-stone-400 leading-relaxed max-w-xl mx-auto"
          >
            Whether you&apos;re launching a new product, reimagining your brand, or
            scaling your digital presence — we&apos;re ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-medium text-dark transition-all duration-300 hover:bg-accent-500 hover:text-white hover:shadow-xl hover:shadow-accent-500/25 active:scale-[0.97]"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:hello@meridianstudio.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 sm:px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5 active:scale-[0.97] text-center justify-center"
            >
              hello@meridianstudio.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
