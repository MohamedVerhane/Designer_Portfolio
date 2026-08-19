import { motion } from 'framer-motion'
import { ArrowRight, ArrowDownRight } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-accent-100/40 dark:bg-accent-600/10 blur-[120px]" />
        <div className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent-50/60 dark:bg-accent-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-32 pb-20 lg:pt-40 lg:pb-28 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-200 dark:border-accent-500/30 bg-accent-50 dark:bg-accent-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent-700 dark:text-accent-300 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
              Digital Design & Development Studio
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-dark dark:text-white leading-[1.1]"
          >
            We craft digital
            <br />
            experiences that
            <br />
            <span className="text-accent-600">move businesses</span>
            <br />
            forward.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-lg sm:text-xl text-muted leading-relaxed"
          >
            Strategy, design, and engineering — unified to build products
            and brands that resonate with people and deliver measurable results.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
              className="group inline-flex items-center gap-2.5 rounded-full bg-dark dark:bg-white dark:text-ink px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-600/25 active:scale-[0.97]"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollTo('#projects') }}
              className="group inline-flex items-center gap-2 rounded-full border border-stone-200 dark:border-white/15 bg-card dark:bg-white/5 px-7 py-3.5 text-sm font-medium text-dark dark:text-white transition-all duration-300 hover:border-stone-300 hover:shadow-md active:scale-[0.97]"
            >
              View Our Work
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Hero visual — man actively designing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute right-8 xl:right-12 top-1/2 -translate-y-1/2 w-[380px] xl:w-[440px]"
        >
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-dark/10 dark:shadow-black/30 ring-1 ring-stone-900/5 dark:ring-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80&auto=format&fit=crop"
                alt="Man sketching a design on paper with markers and wireframes"
                className="h-full w-full object-cover"
                fallbackClassName="h-full w-full bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900/50 dark:to-accent-800/30 flex items-center justify-center"
                fallbackContent={
                  <div className="text-center space-y-4 p-8">
                    <div className="mx-auto w-20 h-20 rounded-2xl bg-accent-500 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">M</span>
                    </div>
                  </div>
                }
              />
            </div>

            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 h-12 w-12 rounded-2xl bg-accent-500 shadow-lg shadow-accent-500/30 flex items-center justify-center"
            >
              <ArrowRight className="h-5 w-5 text-white -rotate-45" />
            </motion.div>

            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 left-4 sm:-left-6 bg-white dark:bg-dark-card rounded-xl shadow-lg shadow-dark/8 dark:shadow-black/30 p-3 flex items-center gap-3 ring-1 ring-stone-900/5 dark:ring-white/10"
            >
              <div className="h-10 w-10 rounded-lg overflow-hidden shrink-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=100&q=80&auto=format&fit=crop"
                  alt="Design sketches on paper"
                  className="h-full w-full object-cover"
                  fallbackClassName="h-full w-full bg-accent-100"
                  fallbackContent=""
                />
              </div>
              <div>
                <div className="text-xs font-semibold text-dark">Wireframes Ready</div>
                <div className="text-[10px] text-muted">Just completed</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute top-1/3 left-2 sm:-left-10 bg-white dark:bg-dark-card rounded-xl shadow-lg shadow-dark/8 dark:shadow-black/30 p-3 ring-1 ring-stone-900/5 dark:ring-white/10 hidden xl:flex items-center gap-3"
            >
              <div className="flex items-end gap-1 h-8">
                <div className="w-1.5 bg-accent-300 rounded-full h-3" />
                <div className="w-1.5 bg-accent-400 rounded-full h-5" />
                <div className="w-1.5 bg-accent-500 rounded-full h-7" />
                <div className="w-1.5 bg-accent-600 rounded-full h-8" />
              </div>
              <div className="text-xs font-semibold text-green-600">+42%</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="h-6 w-10 rounded-full border-2 border-stone-300 flex justify-center pt-1.5"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-stone-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
